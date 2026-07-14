import { NextResponse, type NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { loadConfig } from "@metallicore/core";
import { getLocalStandard } from "@/data/localStandardsStore";

export const dynamic = "force-dynamic";

/**
 * Streams the stored PDF for a local standard. Public (matches the read-open
 * model of the rest of the app) but files are never served through Next's
 * static `public/` handler — this route is the only path that can reach them,
 * kept out of the web root under STORAGE_ROOT instead.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const record = await getLocalStandard(id);
  if (!record) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  try {
    const absolutePath = path.join(loadConfig().storage.root, record.pdfPath);
    const buffer = await readFile(absolutePath);
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${record.pdfOriginalName.replace(/"/g, "")}"`,
        "Cache-Control": "private, max-age=0, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json({ error: "PDF file not found on disk." }, { status: 404 });
  }
}
