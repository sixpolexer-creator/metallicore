import { NextResponse, type NextRequest } from "next/server";
import { requireAdminSession } from "@/auth/requireAdminSession";
import { createLocalStandard, listLocalStandards } from "@/data/localStandardsStore";
import { validateLocalStandardInput } from "@/lib/validateLocalStandard";
import { PdfUploadError, savePdfUpload, importPdfFromLocalPath } from "@/lib/uploadPdf";

export const dynamic = "force-dynamic";

/** Public — local/company standards are visible to every visitor, like international ones. */
export async function GET() {
  const records = await listLocalStandards();
  return NextResponse.json({ standards: records });
}

/** Admin-only — creates a local standard from multipart/form-data (fields + `pdf` file). */
export async function POST(request: NextRequest) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) return unauthorized;

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data." }, { status: 400 });
  }

  const raw: Record<string, unknown> = {
    designation: formData.get("designation"),
    title: formData.get("title"),
    description: formData.get("description"),
    materialType: formData.get("materialType"),
    status: formData.get("status"),
    application: formData.get("application"),
  };

  const { value, error } = validateLocalStandardInput(raw);
  if (error || !value) {
    return NextResponse.json({ error: error ?? "Invalid input." }, { status: 400 });
  }

  const pdf = formData.get("pdf");
  const pdfSourcePath = formData.get("pdfSourcePath");
  const hasUpload = pdf instanceof File && pdf.size > 0;
  const hasSourcePath = typeof pdfSourcePath === "string" && pdfSourcePath.trim().length > 0;

  if (!hasUpload && !hasSourcePath) {
    return NextResponse.json(
      { error: "A PDF upload or a local file path is required." },
      { status: 400 },
    );
  }

  try {
    const { pdfPath, pdfOriginalName } = hasUpload
      ? await savePdfUpload(pdf as File)
      : await importPdfFromLocalPath(pdfSourcePath as string);
    const record = await createLocalStandard(value, pdfPath, pdfOriginalName);
    return NextResponse.json({ standard: record }, { status: 201 });
  } catch (err) {
    if (err instanceof PdfUploadError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    return NextResponse.json({ error: "Failed to save the standard." }, { status: 500 });
  }
}
