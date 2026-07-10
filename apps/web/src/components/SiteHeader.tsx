"use client";

import Link from "next/link";
import { STANDARD_ORGS } from "@/types/standard";
import { useI18n } from "@/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

/**
 * Shared chrome: wordmark, org nav (links into the SILOED `[org]` routes),
 * a cross-reference entry point, and the i18n LanguageToggle. All labels flow
 * through t(); org codes are verbatim data (LanguageToggle is owned by i18n).
 */
export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-md mc-hairline supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--background)_78%,transparent)]">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Metalli<span className="text-[var(--color-accent)]">Core</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {STANDARD_ORGS.map((org) => (
            <Link
              key={org}
              href={`/${org}`}
              data-ltr
              className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {org}
            </Link>
          ))}
          <Link
            href="/cross-reference"
            className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {t("nav.crossReference")}
          </Link>
        </nav>

        <div className="ms-auto">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
