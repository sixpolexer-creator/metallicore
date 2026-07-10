/**
 * Org-scoped browse route — enforces the No-Mix rule at the routing layer.
 *
 * The `org` URL segment is validated against the closed STANDARD_ORGS enum;
 * anything else 404s (generateStaticParams + notFound). Data comes from a
 * SINGLE org via getStandardsForOrg(), and ONLY that array is handed to the
 * client <StandardsExplorer mode="org">. The explorer imports no data module,
 * so its fuzzy search + facets can never reach another body's records.
 */
import { notFound } from "next/navigation";
import {
  STANDARD_ORGS,
  isStandardOrg,
  type StandardOrg,
} from "@/types/standard";
import { getStandardsForOrg } from "@/data/registry";
import { PageShell } from "@/components/PageShell";
import { StandardsExplorer } from "@/components/StandardsExplorer";

/** Pre-render only the four valid org routes. */
export function generateStaticParams() {
  return STANDARD_ORGS.map((org) => ({ org }));
}

export default async function OrgPage({
  params,
}: {
  params: Promise<{ org: string }>;
}) {
  const { org } = await params;

  // Silo guard: reject any segment that is not one of the four known orgs.
  if (!isStandardOrg(org)) {
    notFound();
  }

  const validOrg: StandardOrg = org;
  const standards = getStandardsForOrg(validOrg);

  return (
    <PageShell>
      <header className="mb-10">
        <span
          data-ltr
          className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
        >
          {validOrg}
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-50">
          <span data-ltr>{validOrg}</span> Standards
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
          Siloed catalogue — only {validOrg} records are reachable here.
        </p>
      </header>

      <StandardsExplorer standards={standards} mode="org" />
    </PageShell>
  );
}
