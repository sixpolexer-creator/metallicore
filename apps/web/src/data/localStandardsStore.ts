/**
 * LOCAL STANDARDS STORE — server-only, file-backed persistence for
 * admin-managed local/company standards.
 *
 * Mirrors the seed/override JSON pattern already used by
 * `data/pdfAttachments.ts` and `data/revisions.ts`, just server-side (a JSON
 * file under STORAGE_ROOT) instead of `localStorage`, since these records
 * must be visible to every visitor, not just the admin's own browser. No
 * database is involved — this app has none wired up yet (see
 * packages/core/src/db) — and no cloud storage is used, per the offline/
 * air-gapped deployment constraint (see STORAGE_ROOT in .env.example).
 *
 * Only import this module from server code (API routes) — it uses
 * `node:fs/promises` and will fail to bundle for the client.
 */
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { loadConfig } from "@metallicore/core";
import type { LocalStandard, LocalStandardInput } from "@/types/localStandard";

function localStandardsDir(): string {
  return path.join(loadConfig().storage.root, "local-standards");
}

function indexFilePath(): string {
  return path.join(localStandardsDir(), "index.json");
}

export function filesDir(): string {
  return path.join(localStandardsDir(), "files");
}

async function readIndex(): Promise<LocalStandard[]> {
  try {
    const raw = await readFile(indexFilePath(), "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as LocalStandard[]) : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeIndex(records: LocalStandard[]): Promise<void> {
  await mkdir(localStandardsDir(), { recursive: true });
  await writeFile(indexFilePath(), JSON.stringify(records, null, 2), "utf-8");
}

export async function listLocalStandards(): Promise<LocalStandard[]> {
  const records = await readIndex();
  return records.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getLocalStandard(id: string): Promise<LocalStandard | null> {
  const records = await readIndex();
  return records.find((r) => r.id === id) ?? null;
}

export async function createLocalStandard(
  input: LocalStandardInput,
  pdfPath: string,
  pdfOriginalName: string,
): Promise<LocalStandard> {
  const now = new Date().toISOString();
  const record: LocalStandard = {
    ...input,
    id: randomUUID(),
    category: "Local/Company Standard",
    pdfPath,
    pdfOriginalName,
    createdAt: now,
    updatedAt: now,
  };

  const records = await readIndex();
  records.push(record);
  await writeIndex(records);
  return record;
}

export interface UpdateLocalStandardOptions {
  patch: Partial<LocalStandardInput>;
  /** Set only when the admin replaced the PDF on this update. */
  newPdf?: { pdfPath: string; pdfOriginalName: string };
}

export async function updateLocalStandard(
  id: string,
  { patch, newPdf }: UpdateLocalStandardOptions,
): Promise<LocalStandard | null> {
  const records = await readIndex();
  const index = records.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const existing = records[index];
  const previousPdfPath = existing.pdfPath;

  const updated: LocalStandard = {
    ...existing,
    ...patch,
    ...(newPdf ? { pdfPath: newPdf.pdfPath, pdfOriginalName: newPdf.pdfOriginalName } : {}),
    updatedAt: new Date().toISOString(),
  };

  records[index] = updated;
  await writeIndex(records);

  if (newPdf && previousPdfPath && previousPdfPath !== newPdf.pdfPath) {
    await deletePdfFile(previousPdfPath);
  }

  return updated;
}

export async function deleteLocalStandard(id: string): Promise<boolean> {
  const records = await readIndex();
  const index = records.findIndex((r) => r.id === id);
  if (index === -1) return false;

  const [removed] = records.splice(index, 1);
  await writeIndex(records);
  await deletePdfFile(removed.pdfPath);
  return true;
}

async function deletePdfFile(relativePdfPath: string): Promise<void> {
  try {
    await rm(path.join(loadConfig().storage.root, relativePdfPath));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }
}
