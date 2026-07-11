"use client";

import { useState, type FormEvent } from "react";
import type { AnyStandard, StandardRevision } from "@/types/standard";
import { useI18n } from "@/i18n";
import { addRevision } from "@/data/revisions";

/**
 * Admin-only versioned upload form. Rendered exclusively inside
 * StandardDetailOverlay when `useAuth().isAdmin` is true — never mounted for
 * a regular visitor. Only collects the version label + notes; the actual
 * file-write ingestion is out of scope for now (see src/data/revisions.ts).
 */
export function UploadRevisionForm({
  standard,
  onUploaded,
}: {
  standard: AnyStandard;
  onUploaded: (revisions: StandardRevision[]) => void;
}) {
  const { t } = useI18n();
  const [version, setVersion] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = addRevision(standard, version, notes);
    if (result.error) {
      setError(result.error);
      setConfirmed(false);
      return;
    }
    setError(null);
    setVersion("");
    setNotes("");
    setConfirmed(true);
    onUploaded(result.revisions);
  };

  return (
    <section className="rounded-2xl border p-4 mc-hairline">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        {t("admin.uploadRevision")}
      </h3>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {t("admin.versionLabel")}
          </label>
          <input
            type="text"
            value={version}
            onChange={(e) => {
              setVersion(e.target.value);
              setError(null);
              setConfirmed(false);
            }}
            placeholder={t("admin.versionPlaceholder")}
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {t("admin.notes")}
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            className="mc-surface-strong w-full resize-none rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </div>

        {error && (
          <p className="text-xs text-red-600 dark:text-red-400">{t(error)}</p>
        )}
        {confirmed && !error && (
          <p className="text-xs text-emerald-600 dark:text-emerald-400">
            {t("admin.revisionAdded")}
          </p>
        )}

        <button
          type="submit"
          className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
        >
          {t("admin.addRevision")}
        </button>
      </form>
    </section>
  );
}

export default UploadRevisionForm;
