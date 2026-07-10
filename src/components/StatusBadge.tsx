import type { StandardStatus } from "@/types/standard";
import { useI18n } from "@/i18n";

export function StatusBadge({ status }: { status: StandardStatus }) {
  const { t } = useI18n();
  const active = status === "active";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider",
        active
          ? "text-emerald-700 dark:text-emerald-300"
          : "text-neutral-500 dark:text-neutral-400",
        "mc-surface-strong",
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "h-1.5 w-1.5 rounded-full",
          active ? "bg-emerald-500" : "bg-neutral-400 dark:bg-neutral-500",
        ].join(" ")}
      />
      {active ? t("filters.statusActive") : t("filters.statusSuperseded")}
    </span>
  );
}

export default StatusBadge;
