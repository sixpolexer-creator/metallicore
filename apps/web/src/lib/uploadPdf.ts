/**
 * Local, offline PDF upload handling — writes directly to STORAGE_ROOT on the
 * local filesystem. No cloud storage SDK involved, per the air-gapped
 * deployment constraint. Server-only (node:fs/promises).
 */
import { mkdir, writeFile, stat, copyFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { loadConfig } from "@metallicore/core";
import { filesDir } from "@/data/localStandardsStore";

export const MAX_PDF_BYTES = 20 * 1024 * 1024; // 20MB

export class PdfUploadError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

/**
 * Validates and persists an uploaded PDF `File` (from a route's
 * `request.formData()`). Never trusts the client-supplied filename for the
 * on-disk path — generates a fresh UUID name to avoid path traversal /
 * collisions, and keeps the original name only for display.
 */
export async function savePdfUpload(
  file: File,
): Promise<{ pdfPath: string; pdfOriginalName: string }> {
  const originalName = file.name || "upload.pdf";
  const ext = path.extname(originalName).toLowerCase();
  const isPdfMime = file.type === "" || file.type === "application/pdf";

  if (ext !== ".pdf" || !isPdfMime) {
    throw new PdfUploadError("Only PDF files are accepted.");
  }
  if (file.size === 0) {
    throw new PdfUploadError("Uploaded file is empty.");
  }
  if (file.size > MAX_PDF_BYTES) {
    throw new PdfUploadError(
      `PDF exceeds the ${Math.floor(MAX_PDF_BYTES / (1024 * 1024))}MB size limit.`,
      413,
    );
  }

  const dir = filesDir();
  await mkdir(dir, { recursive: true });
  const storedName = `${randomUUID()}.pdf`;
  const absolutePath = path.join(dir, storedName);
  await writeFile(absolutePath, Buffer.from(await file.arrayBuffer()));

  const root = loadConfig().storage.root;
  const pdfPath = path.relative(root, absolutePath).split(path.sep).join("/");
  return { pdfPath, pdfOriginalName: originalName };
}

/**
 * Imports a PDF an admin already has sitting on the local network (a UNC
 * path, a mounted share, or any path reachable from this server's
 * filesystem) instead of uploading it through the browser. Same trust model
 * as `savePdfUpload`: this is an admin-only, server-side action (callers
 * must have already passed `requireAdminSession`), and the file is always
 * copied into the managed storage directory under a fresh UUID name — the
 * source path itself is never stored or served back, so later moving/
 * unmounting the source share doesn't break the record.
 */
export async function importPdfFromLocalPath(
  sourcePath: string,
): Promise<{ pdfPath: string; pdfOriginalName: string }> {
  const trimmed = sourcePath.trim();
  if (!trimmed) {
    throw new PdfUploadError("A local file path is required.");
  }

  const resolvedSource = path.resolve(trimmed);
  const ext = path.extname(resolvedSource).toLowerCase();
  if (ext !== ".pdf") {
    throw new PdfUploadError("Only .pdf files are accepted.");
  }

  let stats;
  try {
    stats = await stat(resolvedSource);
  } catch {
    throw new PdfUploadError("The local file path could not be found.");
  }
  if (!stats.isFile()) {
    throw new PdfUploadError("The local file path does not point to a file.");
  }
  if (stats.size === 0) {
    throw new PdfUploadError("The source file is empty.");
  }
  if (stats.size > MAX_PDF_BYTES) {
    throw new PdfUploadError(
      `PDF exceeds the ${Math.floor(MAX_PDF_BYTES / (1024 * 1024))}MB size limit.`,
      413,
    );
  }

  const dir = filesDir();
  await mkdir(dir, { recursive: true });
  const storedName = `${randomUUID()}.pdf`;
  const absolutePath = path.join(dir, storedName);
  await copyFile(resolvedSource, absolutePath);

  const root = loadConfig().storage.root;
  const pdfPath = path.relative(root, absolutePath).split(path.sep).join("/");
  const pdfOriginalName = path.basename(resolvedSource);
  return { pdfPath, pdfOriginalName };
}
