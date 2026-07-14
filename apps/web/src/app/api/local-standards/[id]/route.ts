import { NextResponse, type NextRequest } from "next/server";
import { requireAdminSession } from "@/auth/requireAdminSession";
import {
  deleteLocalStandard,
  getLocalStandard,
  updateLocalStandard,
} from "@/data/localStandardsStore";
import { validateLocalStandardPatch } from "@/lib/validateLocalStandard";
import { PdfUploadError, savePdfUpload, importPdfFromLocalPath } from "@/lib/uploadPdf";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const record = await getLocalStandard(id);
  if (!record) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  return NextResponse.json({ standard: record });
}

/** Admin-only — partial update via multipart/form-data. `pdf` field is optional (replaces the file). */
export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const existing = await getLocalStandard(id);
  if (!existing) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data." }, { status: 400 });
  }

  const raw: Record<string, unknown> = {};
  for (const key of ["designation", "title", "description", "materialType", "status", "application"]) {
    if (formData.has(key)) raw[key] = formData.get(key);
  }

  const { value: patch, error } = validateLocalStandardPatch(raw);
  if (error || !patch) {
    return NextResponse.json({ error: error ?? "Invalid input." }, { status: 400 });
  }

  const pdf = formData.get("pdf");
  const pdfSourcePath = formData.get("pdfSourcePath");
  const hasUpload = pdf instanceof File && pdf.size > 0;
  const hasSourcePath = typeof pdfSourcePath === "string" && pdfSourcePath.trim().length > 0;

  try {
    const newPdf = hasUpload
      ? await savePdfUpload(pdf as File)
      : hasSourcePath
        ? await importPdfFromLocalPath(pdfSourcePath as string)
        : undefined;

    const updated = await updateLocalStandard(id, { patch, newPdf });
    if (!updated) {
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
    return NextResponse.json({ standard: updated });
  } catch (err) {
    if (err instanceof PdfUploadError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    return NextResponse.json({ error: "Failed to update the standard." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = await deleteLocalStandard(id);
  if (!deleted) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
