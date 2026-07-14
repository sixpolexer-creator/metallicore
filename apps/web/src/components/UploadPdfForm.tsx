"use client";

import { useState, type FormEvent } from "react";
import type { AnyStandard } from "@/types/standard";
import { useI18n } from "@/i18n";
import { setPdfAttachment, type PdfAttachment } from "@/data/pdfAttachments";

/**
 * Admin-only PDF attachment form. Rendered exclusively inside
 * StandardDetailOverlay when `useAuth().isAdmin` is true — never mounted for
 * a regular visitor. Only collects a URL/reference plus the shareability
 * toggle; the actual file upload/hosting mechanism is out of scope for now
 * (see src/data/pdfAttachments.ts). Users elsewhere in the app only ever
 * read this state via `hasShareablePdf` — they cannot reach this form.
 */
export function UploadPdfForm({
  standard,
  attachment,
  onSaved,
}: {
  standard: AnyStandard;
  attachment: PdfAttachment | null;
  onSaved: (attachment: PdfAttachment | null) => void;
}) {
  const { t } = useI18n();
  const [pdfUrl, setPdfUrl] = useState(attachment?.pdfUrl ?? "");
  const [isShareablePdf, setIsShareablePdf] = useState(
    attachment?.isShareablePdf ?? false,
  );
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = setPdfAttachment(standard, pdfUrl, isShareablePdf);
    if (result.error) {
      setError(result.error);
      setSaved(false);
      return;
    }
    setError(null);
    setSaved(true);
    onSaved(result.attachment);
  };

  return (
    <section className="rounded-2xl border p-4 mc-hairline">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        {t("admin.managePdf")}
      </h3>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {t("admin.pdfUrlLabel")}
          </label>
          <input
            type="text"
            value={pdfUrl}
            onChange={(e) => {
              setPdfUrl(e.target.value);
              setError(null);
              setSaved(false);
            }}
            placeholder={t("admin.pdfUrlPlaceholder")}
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </div>

        <label className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          <input
            type="checkbox"
            checked={isShareablePdf}
            onChange={(e) => {
              setIsShareablePdf(e.target.checked);
              setError(null);
              setSaved(false);
            }}
            className="h-3.5 w-3.5 rounded accent-[var(--color-accent)]"
          />
          {t("admin.isShareablePdf")}
        </label>

        {error && (
          <p className="text-xs text-red-600 dark:text-red-400">{t(error)}</p>
        )}
        {saved && !error && (
          <p className="text-xs text-emerald-600 dark:text-emerald-400">
            {t("admin.pdfSaved")}
          </p>
        )}

        <button
          type="submit"
          className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
        >
          {t("admin.savePdf")}
        </button>
      </form>
    </section>
  );
}

export default UploadPdfForm;
