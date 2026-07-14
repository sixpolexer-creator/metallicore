import { useI18n } from "@/i18n";

export type OriginFilter = "all" | "international" | "company";

const OPTIONS: { value: OriginFilter; labelKey: string }[] = [
  { value: "all", labelKey: "search.originAll" },
  { value: "international", labelKey: "search.originInternational" },
  { value: "company", labelKey: "search.originCompany" },
];

/** Three-way scope toggle for the unified search portal. */
export function OriginToggle({
  value,
  onChange,
}: {
  value: OriginFilter;
  onChange: (value: OriginFilter) => void;
}) {
  const { t } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label={t("search.originLabel")}
      className="mc-surface-strong inline-flex items-center gap-1 rounded-full p-1"
    >
      {OPTIONS.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-medium transition",
              active
                ? "bg-[var(--color-accent)] text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
            ].join(" ")}
          >
            {t(opt.labelKey)}
          </button>
        );
      })}
    </div>
  );
}

export default OriginToggle;
