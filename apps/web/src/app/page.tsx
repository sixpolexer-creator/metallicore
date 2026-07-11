/**
 * Landing page — Bento grid of the four standards bodies (each links into its
 * SILOED `/[org]` route) plus a distinct entry point to global cross-reference
 * mode. Minimalist Luxury: ample negative space, monochrome + one accent.
 */
"use client";

import { STANDARD_ORGS, type StandardOrg } from "@/types/standard";
import { useI18n } from "@/i18n";
import { PageShell } from "@/components/PageShell";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

const ORG_BLURB: Record<StandardOrg, string> = {
  ASTM: "American Society for Testing and Materials",
  AMS: "Aerospace Material Specifications",
  ISO: "International Organization for Standardization",
  DIN: "Deutsches Institut für Normung",
  EN: "European Norm (CEN harmonized standards)",
  JIS: "Japanese Industrial Standards",
};

const ORG_ACCENT: Record<StandardOrg, string> = {
  ASTM: "#a8804a",
  AMS: "#7c6f9c",
  ISO: "#4f7c8a",
  DIN: "#8a6f4f",
  EN: "#4f8a6f",
  JIS: "#8a4f6f",
};

export default function HomePage() {
  const { t } = useI18n();

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
          ASTM · AMS · ISO · DIN · EN · JIS
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-50">
          {t("home.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg dark:text-neutral-400">
          {t("home.subtitle")}
        </p>
      </section>

      <div className="mc-rule mx-auto mt-14 max-w-5xl" />

      <section className="mt-14">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          {t("home.browseByOrg")}
        </h2>

        <BentoGrid>
          {STANDARD_ORGS.map((org, i) => (
            <BentoCard key={org} href={`/${org}`} span={i === 0 ? "lg" : "sm"}>
              <span
                aria-hidden
                className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: ORG_ACCENT[org] }}
              >
                {t("nav.browse")}
              </span>
              <span
                data-ltr
                className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50"
              >
                {org}
              </span>
              <span className="ltr-data mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {ORG_BLURB[org]}
              </span>
              <span className="mt-auto pt-6 text-sm font-medium text-neutral-400 transition group-hover:text-[var(--color-accent)]">
                →
              </span>
            </BentoCard>
          ))}

          <BentoCard href="/cross-reference" span="wide">
            <div className="flex h-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {t("nav.crossReference")}
                </span>
                <p className="mt-2 max-w-xl text-lg font-medium text-neutral-800 dark:text-neutral-100">
                  {t("crossReference.description")}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-neutral-800 mc-hairline transition group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] dark:text-neutral-100">
                {t("home.searchCta")} →
              </span>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>
    </PageShell>
  );
}
