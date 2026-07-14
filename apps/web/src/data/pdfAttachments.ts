/**
 * PDF ATTACHMENT STORE — the local, offline-first home for a standard's
 * "original document" reference, mirroring the seed/admin-override shape of
 * `src/data/revisions.ts`.
 *
 * Like the revision store, this references standards by `fullCode` only — it
 * never embeds or aggregates per-org records — so it sits outside the No-Mix
 * boundary without violating it (see the No-Mix rule in src/types/standard.ts).
 *
 * Two layers make up the effective attachment for a given standard:
 *  - a seed value read straight off the record's own `pdfUrl` /
 *    `isShareablePdf` fields (set at ingestion time, never persisted here)
 *  - an optional admin override, persisted to localStorage so changes made
 *    from the Admin panel survive reloads on the same offline machine. No
 *    network calls are made and no file is actually uploaded — this only
 *    tracks a URL/reference and the shareability flag.
 *
 * Regular visitors only ever call `getPdfAttachment` / `hasShareablePdf`
 * (read-only). `setPdfAttachment` is invoked exclusively from the admin-only
 * UploadPdfForm component, gated by `useAuth().isAdmin`.
 */
import type { AnyStandard } from '@/types/standard';

const STORAGE_KEY = 'metallicore:pdf-attachments:v1';

export interface PdfAttachment {
  pdfUrl: string;
  isShareablePdf: boolean;
}

type StoredPdfAttachments = Record<string, PdfAttachment>;

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function loadAdminPdfAttachments(): StoredPdfAttachments {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as StoredPdfAttachments) : {};
  } catch {
    return {};
  }
}

function saveAdminPdfAttachments(map: StoredPdfAttachments): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Storage unavailable (private mode, quota) — admin edit will not persist.
  }
}

/**
 * Effective PDF attachment for a standard: an admin override (if one was
 * ever saved) takes precedence over the record's own seed fields.
 */
export function getPdfAttachment(standard: AnyStandard): PdfAttachment | null {
  const admin = loadAdminPdfAttachments()[standard.fullCode];
  if (admin) return admin;
  if (standard.pdfUrl && standard.isShareablePdf) {
    return { pdfUrl: standard.pdfUrl, isShareablePdf: true };
  }
  return null;
}

/**
 * The single access-control gate for the "View Original Standard" button:
 * true only when a PDF reference exists AND is explicitly marked shareable.
 */
export function hasShareablePdf(standard: AnyStandard): boolean {
  const attachment = getPdfAttachment(standard);
  return (
    attachment !== null &&
    attachment.isShareablePdf &&
    attachment.pdfUrl.trim().length > 0
  );
}

export interface SetPdfAttachmentResult {
  attachment: PdfAttachment | null;
  error?: string;
}

/**
 * Admin-only action: sets or clears the PDF override for a standard.
 * Marking "shareable" with an empty URL is rejected — a shareable flag with
 * nothing to show is never a valid state. Clearing the URL entirely removes
 * the override so the record falls back to its seed value (if any).
 */
export function setPdfAttachment(
  standard: AnyStandard,
  pdfUrl: string,
  isShareablePdf: boolean,
): SetPdfAttachmentResult {
  const trimmed = pdfUrl.trim();
  if (isShareablePdf && !trimmed) {
    return { attachment: getPdfAttachment(standard), error: 'validation.pdfUrlRequired' };
  }

  const map = loadAdminPdfAttachments();
  if (!trimmed) {
    delete map[standard.fullCode];
    saveAdminPdfAttachments(map);
    return { attachment: getPdfAttachment(standard) };
  }

  const entry: PdfAttachment = { pdfUrl: trimmed, isShareablePdf };
  map[standard.fullCode] = entry;
  saveAdminPdfAttachments(map);
  return { attachment: entry };
}
