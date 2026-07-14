import type { AnyStandard } from "@/types/standard";
import { useI18n } from "@/i18n";
import { BentoCard } from "./BentoCard";
import { StatusBadge } from "./StatusBadge";

const ORG_ACCENT: Record<AnyStandard["standardBody"], string> = {
  ASTM: "text-[#a8804a]",
  AMS: "text-[#7c6f9c]",
  ISO: "text-[#4f7c8a]",
  DIN: "text-[#8a6f4f]",
  EN: "text-[#4f8a6f]",
  JIS: "text-[#8a4f6f]",
};

/**
 * Renders a single standard record. Because `standard` is the read-only
 * AnyStandard union, we NARROW on `standardBody` before reading any
 * body-specific field (committee / revision / technicalCommittee /
 * hasEnEquivalent / materialNumber / jisNumber). Data-payload strings (codes,
 * titles, values) are rendered verbatim and marked `.ltr-data` so they stay
 * LTR under RTL chrome — they are NEVER passed through t().
 */
export function StandardCard({
  standard,
  span = "sm",
  showOrg = false,
  onView,
}: {
  standard: AnyStandard;
  span?: "sm" | "md" | "lg";
  showOrg?: boolean;
  onView?: (standard: AnyStandard) => void;
}) {
  const { t } = useI18n();

  return (
    <BentoCard span={span}>
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="min-w-0 flex-1 basis-40">
          {showOrg && (
            <span
              className={[
                "text-[11px] font-semibold uppercase tracking-[0.18em]",
                ORG_ACCENT[standard.standardBody],
              ].join(" ")}
              data-ltr
            >
              {standard.standardBody}
            </span>
          )}
          <h3
            className="ltr-data break-words text-base font-semibold text-neutral-900 dark:text-neutral-100"
            title={standard.fullCode}
          >
            {standard.fullCode}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {standard.dataAccess === "restricted" && (
            <RestrictedBadge label={t("standard.restricted")} />
          )}
          <StatusBadge status={standard.status} />
        </div>
      </div>

      <p className="ltr-data mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {standard.title}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <MetaChip label={t("standard.material")} value={standard.materialType} />
        {standard.application.map((app) => (
          <span
            key={app}
            className="ltr-data rounded-md border px-2 py-0.5 text-[11px] text-neutral-500 mc-hairline dark:text-neutral-400"
          >
            {app}
          </span>
        ))}
      </div>

      <BodySpecific standard={standard} />

      {standard.status === "superseded" && standard.supersededBy && (
        <p className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
          {t("standard.supersededBy")}{" "}
          <span className="ltr-data font-medium text-neutral-700 dark:text-neutral-200">
            {standard.supersededBy}
          </span>
        </p>
      )}

      {onView && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onView(standard);
          }}
          className="mt-4 self-start text-xs font-medium text-[var(--color-accent)] transition hover:underline"
        >
          {t("standard.viewFullStandard")} →
        </button>
      )}
    </BentoCard>
  );
}

function RestrictedBadge({ label }: { label: string }) {
  return (
    <span className="mc-surface-strong inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 dark:text-amber-300">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      {label}
    </span>
  );
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] mc-surface-strong">
      <span className="text-neutral-400 dark:text-neutral-500">{label}</span>
      <span className="ltr-data font-medium text-neutral-700 dark:text-neutral-200">
        {value}
      </span>
    </span>
  );
}

/** Body-specific detail line — the discriminated-union narrow lives here. */
function BodySpecific({ standard }: { standard: AnyStandard }) {
  const { t } = useI18n();

  let label: string;
  let value: string;
  switch (standard.standardBody) {
    case "ASTM":
      label = t("standard.committee");
      value = standard.committee;
      break;
    case "AMS":
      label = t("standard.revision");
      value = standard.revision ?? "—";
      break;
    case "ISO":
      label = t("standard.technicalCommittee");
      value = standard.technicalCommittee ?? "—";
      break;
    case "DIN":
      label = t("standard.enEquivalent");
      value = standard.hasEnEquivalent ? "EN" : "—";
      break;
    case "EN":
      label = t("standard.materialNumber");
      value = standard.materialNumber ?? "—";
      break;
    case "JIS":
      label = t("standard.jisNumber");
      value = standard.jisNumber;
      break;
  }

  return (
    <p className="mt-3 border-t pt-3 text-[11px] text-neutral-400 mc-hairline dark:text-neutral-500">
      {label}:{" "}
      <span className="ltr-data font-medium text-neutral-600 dark:text-neutral-300">
        {value}
      </span>
    </p>
  );
}

export default StandardCard;
