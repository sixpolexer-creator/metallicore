"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { AnyStandard, StandardRevision } from "@/types/standard";
import { useI18n } from "@/i18n";
import { useAuth } from "@/auth/AuthProvider";
import { getRevisionsFor } from "@/data/revisions";
import { getPdfAttachment, type PdfAttachment } from "@/data/pdfAttachments";
import { StatusBadge } from "./StatusBadge";
import { UploadRevisionForm } from "./UploadRevisionForm";
import { UploadPdfForm } from "./UploadPdfForm";

const BODY_SPECIFIC_KEY: Record<AnyStandard["standardBody"], string> = {
  ASTM: "standard.committee",
  AMS: "standard.revision",
  ISO: "standard.technicalCommittee",
  DIN: "standard.enEquivalent",
  EN: "standard.materialNumber",
  JIS: "standard.jisNumber",
};

function bodySpecificValue(standard: AnyStandard): string {
  switch (standard.standardBody) {
    case "ASTM":
      return standard.committee;
    case "AMS":
      return standard.revision ?? "—";
    case "ISO":
      return standard.technicalCommittee ?? "—";
    case "DIN":
      return standard.hasEnEquivalent ? "EN" : "—";
    case "EN":
      return standard.materialNumber ?? "—";
    case "JIS":
      return standard.jisNumber;
  }
}

/**
 * Full-standard detail overlay — the "View Full Standard" destination.
 * Shows scope, chemical composition, mechanical properties, applications,
 * and the version/revision history for a single standard. The versioned
 * upload form only mounts for an active local Admin session.
 */
export function StandardDetailOverlay({
  standard,
  onClose,
}: {
  standard: AnyStandard;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const { isAdmin } = useAuth();
  const [revisions, setRevisions] = useState<StandardRevision[]>(() =>
    getRevisionsFor(standard),
  );
  const [pdfAttachment, setPdfAttachmentState] = useState<PdfAttachment | null>(() =>
    getPdfAttachment(standard),
  );

  // Re-sync when the overlay is retargeted at a different standard (the
  // component instance persists across selections in StandardsExplorer).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRevisions(getRevisionsFor(standard));
    setPdfAttachmentState(getPdfAttachment(standard));
  }, [standard]);

  const canViewOriginalPdf =
    pdfAttachment !== null &&
    pdfAttachment.isShareablePdf &&
    pdfAttachment.pdfUrl.trim().length > 0;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="mc-hairline mc-elev relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border bg-[var(--background)] sm:rounded-3xl"
      >
        <div className="mc-hairline flex flex-wrap items-start justify-between gap-x-3 gap-y-2 border-b p-6">
          <div className="min-w-0 flex-1 basis-48">
            <span
              data-ltr
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
            >
              {standard.standardBody}
            </span>
            <h2 className="ltr-data mt-1 break-words text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              {standard.fullCode}
            </h2>
            <p className="ltr-data mt-1 break-words text-sm text-neutral-500 dark:text-neutral-400">
              {standard.title}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {standard.dataAccess === "restricted" && (
              <span className="mc-surface-strong inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 dark:text-amber-300">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {t("standard.restricted")}
              </span>
            )}
            <StatusBadge status={standard.status} />
            <button
              type="button"
              onClick={onClose}
              aria-label={t("common.close")}
              className="rounded-full p-1.5 text-neutral-400 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {canViewOriginalPdf && pdfAttachment && (
            <a
              href={pdfAttachment.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] px-4 py-2.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            >
              <span aria-hidden>📄</span>
              {t("standard.viewOriginalPdf")}
              <span aria-hidden>↗</span>
            </a>
          )}

          {standard.dataAccess === "restricted" ? (
            <RestrictedNotice standard={standard} />
          ) : (
            <>
              <Section title={t("standard.scope")}>
                <p className="ltr-data text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {standard.scope ?? standard.description}
                </p>
              </Section>

              {standard.chemicalComposition && standard.chemicalComposition.length > 0 && (
                <Section title={t("standard.chemicalComposition")}>
                  <Table
                    rows={standard.chemicalComposition.map((c) => [c.element, c.range])}
                  />
                </Section>
              )}

              {standard.mechanicalProperties && standard.mechanicalProperties.length > 0 && (
                <Section title={t("standard.mechanicalProperties")}>
                  <Table
                    rows={standard.mechanicalProperties.map((m) => [m.label, m.value])}
                  />
                </Section>
              )}
            </>
          )}

          {standard.dataAccess === "restricted" && isAdmin && (
            <UploadRevisionForm standard={standard} onUploaded={setRevisions} />
          )}

          <Section title={t("standard.applications")}>
            <div className="flex flex-wrap gap-1.5">
              {standard.application.map((app) => (
                <span
                  key={app}
                  className="ltr-data mc-hairline rounded-md border px-2 py-0.5 text-[11px] text-neutral-500 dark:text-neutral-400"
                >
                  {app}
                </span>
              ))}
            </div>
          </Section>

          <Section title={t(BODY_SPECIFIC_KEY[standard.standardBody])}>
            <p className="ltr-data text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {bodySpecificValue(standard)}
            </p>
          </Section>

          <Section title={t("standard.revisions")}>
            <ul className="space-y-2">
              {revisions.map((r) => (
                <li
                  key={r.id}
                  className="mc-surface-strong flex items-start justify-between gap-3 rounded-lg px-3 py-2 text-sm"
                >
                  <div className="min-w-0">
                    <p className="ltr-data font-medium text-neutral-800 dark:text-neutral-100">
                      {r.version}
                    </p>
                    {r.notes && (
                      <p className="ltr-data mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        {r.notes}
                      </p>
                    )}
                  </div>
                  {r.source === "admin" && (
                    <span className="ltr-data shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
                      {t("admin.badge")}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          {standard.dataAccess === "full" && isAdmin && (
            <UploadRevisionForm standard={standard} onUploaded={setRevisions} />
          )}

          {isAdmin && (
            <UploadPdfForm
              standard={standard}
              attachment={pdfAttachment}
              onSaved={setPdfAttachmentState}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Empty-state notice for `dataAccess === 'restricted'` records: the underlying
 * document is sold by the standards body, so we show only what we legitimately
 * have (the metadata already rendered above/below this) plus this notice
 * instead of fabricating scope/composition content. The admin upload hook
 * (rendered by the caller immediately below, when `isAdmin`) is how the
 * purchased document gets attached.
 */
function RestrictedNotice({ standard }: { standard: AnyStandard }) {
  const { t } = useI18n();
  return (
    <section className="mc-hairline rounded-2xl border border-dashed p-6 text-center">
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {t("standard.restrictedNotice")}
      </p>
      <p className="ltr-data mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {standard.description}
      </p>
    </section>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mc-surface-strong overflow-x-auto rounded-lg">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="mc-hairline border-b last:border-0">
              <td className="px-3 py-2 text-neutral-500 dark:text-neutral-400">
                {label}
              </td>
              <td className="ltr-data px-3 py-2 text-end font-medium text-neutral-800 dark:text-neutral-100">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandardDetailOverlay;
