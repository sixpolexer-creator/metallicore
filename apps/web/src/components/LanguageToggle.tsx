"use client";

import { useI18n, type Locale } from "@/i18n";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "he", label: "עב" },
];

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("language.toggle")}
      className="inline-flex items-center gap-0.5 rounded-full border border-neutral-300 bg-neutral-50 p-0.5 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {OPTIONS.map((option) => {
        const active = option.value === locale;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            lang={option.value}
            className={[
              "min-w-9 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
              active
                ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;
