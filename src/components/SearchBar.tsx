"use client";

import { useI18n } from "@/i18n";

export function SearchBar({
  value,
  onChange,
  placeholderKey = "search.placeholder",
}: {
  value: string;
  onChange: (next: string) => void;
  placeholderKey?: string;
}) {
  const { t } = useI18n();

  return (
    <div className="relative">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute inset-y-0 start-4 my-auto h-4 w-4 text-neutral-400"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="m20 20-3.2-3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(placeholderKey)}
        aria-label={t("search.button")}
        className="mc-card w-full rounded-full py-3.5 ps-11 pe-5 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[color-mix(in_srgb,var(--color-accent)_60%,transparent)] dark:text-neutral-100"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label={t("search.clear")}
          className="absolute inset-y-0 end-4 my-auto h-5 w-5 rounded-full text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
