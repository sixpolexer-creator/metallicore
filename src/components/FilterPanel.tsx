"use client";

import { useI18n } from "@/i18n";

export type FacetKey =
  | "organization"
  | "materialType"
  | "application"
  | "status";

export interface FacetOptions {
  organization: string[];
  materialType: string[];
  application: string[];
  status: string[];
}

export interface FacetSelection {
  organization: Set<string>;
  materialType: Set<string>;
  application: Set<string>;
  status: Set<string>;
}

const FACET_LABEL_KEY: Record<FacetKey, string> = {
  organization: "filters.organization",
  materialType: "filters.materialType",
  application: "filters.application",
  status: "filters.status",
};

/**
 * Faceted filter rail. `showOrganization` is false on org-scoped pages (the
 * data is already siloed there, so an org facet would be meaningless) and true
 * only in the global cross-reference mode.
 */
export function FilterPanel({
  options,
  selection,
  onToggle,
  onClear,
  showOrganization,
}: {
  options: FacetOptions;
  selection: FacetSelection;
  onToggle: (facet: FacetKey, value: string) => void;
  onClear: () => void;
  showOrganization: boolean;
}) {
  const { t } = useI18n();

  const facets: FacetKey[] = [
    ...(showOrganization ? (["organization"] as FacetKey[]) : []),
    "materialType",
    "application",
    "status",
  ];

  const totalSelected =
    selection.organization.size +
    selection.materialType.size +
    selection.application.size +
    selection.status.size;

  return (
    <aside className="mc-card rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          {t("filters.title")}
        </h2>
        {totalSelected > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] font-medium text-[var(--color-accent)] hover:underline"
          >
            {t("filters.clear")}
          </button>
        )}
      </div>

      <div className="mt-4 space-y-5">
        {facets.map((facet) => (
          <FacetGroup
            key={facet}
            label={t(FACET_LABEL_KEY[facet])}
            values={options[facet]}
            selected={selection[facet]}
            onToggle={(value) => onToggle(facet, value)}
            renderLabel={
              facet === "status"
                ? (v) =>
                    v === "active"
                      ? t("filters.statusActive")
                      : t("filters.statusSuperseded")
                : undefined
            }
          />
        ))}
      </div>
    </aside>
  );
}

function FacetGroup({
  label,
  values,
  selected,
  onToggle,
  renderLabel,
}: {
  label: string;
  values: string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
  /** Optional translator for chrome-owned facet values (e.g. status). Data
   *  values like material names are rendered verbatim, never translated. */
  renderLabel?: (value: string) => string;
}) {
  if (values.length === 0) return null;

  return (
    <div>
      <h3 className="mb-2 text-[11px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        {label}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {values.map((value) => {
          const active = selected.has(value);
          const isData = !renderLabel;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onToggle(value)}
              aria-pressed={active}
              className={[
                isData ? "ltr-data" : "",
                "rounded-full border px-3 py-1 text-xs transition",
                active
                  ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] font-medium text-neutral-900 dark:text-neutral-50"
                  : "mc-hairline text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
              ].join(" ")}
            >
              {renderLabel ? renderLabel(value) : value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterPanel;
