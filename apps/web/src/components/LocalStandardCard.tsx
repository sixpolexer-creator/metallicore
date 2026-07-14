import type { LocalStandard } from "@/types/localStandard";
import { useI18n } from "@/i18n";
import { BentoCard } from "./BentoCard";
import { StatusBadge } from "./StatusBadge";

/**
 * Renders a `LocalStandard` — deliberately a separate component from
 * `StandardCard` (which only accepts the international `AnyStandard` union)
 * rather than widening that component's props, keeping the No-Mix boundary
 * (see types/standard.ts) intact.
 */
export function LocalStandardCard({
  standard,
  span = "sm",
}: {
  standard: LocalStandard;
  span?: "sm" | "md" | "lg";
}) {
  const { t } = useI18n();

  return (
    <BentoCard span={span}>
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="min-w-0 flex-1 basis-40">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
            data-ltr
          >
            {t("search.companyBadge")}
          </span>
          <h3
            className="ltr-data break-words text-base font-semibold text-neutral-900 dark:text-neutral-100"
            title={standard.designation}
          >
            {standard.designation}
          </h3>
        </div>
        <StatusBadge status={standard.status} />
      </div>

      <p className="ltr-data mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {standard.title}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] mc-surface-strong">
          <span className="text-neutral-400 dark:text-neutral-500">
            {t("standard.material")}
          </span>
          <span className="ltr-data font-medium text-neutral-700 dark:text-neutral-200">
            {standard.materialType}
          </span>
        </span>
        {standard.application.map((app) => (
          <span
            key={app}
            className="ltr-data rounded-md border px-2 py-0.5 text-[11px] text-neutral-500 mc-hairline dark:text-neutral-400"
          >
            {app}
          </span>
        ))}
      </div>

      <a
        href={`/api/local-standards/${standard.id}/pdf`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 self-start text-xs font-medium text-[var(--color-accent)] transition hover:underline"
      >
        {t("standard.viewOriginalPdf")} →
      </a>
    </BentoCard>
  );
}

export default LocalStandardCard;
