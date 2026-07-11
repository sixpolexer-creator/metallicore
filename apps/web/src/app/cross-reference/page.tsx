/**
 * Cross-Reference / Global search route — the ONE sanctioned place org data
 * mixes. It is the only page allowed to call getAllStandardsForCrossReference().
 * The mixed AnyStandard[] + curated crossReferenceLinks are handed to the client
 * <StandardsExplorer mode="global">, which narrows on `standardBody` per record
 * and exposes the Organization facet only in this mode. A prominent banner makes
 * the deliberate "Global Mode" explicit — it is never the default surface.
 */
import {
  getAllStandardsForCrossReference,
  crossReferenceLinks,
} from "@/data/registry";
import { PageShell } from "@/components/PageShell";
import { StandardsExplorer } from "@/components/StandardsExplorer";

export default function CrossReferencePage() {
  const all = getAllStandardsForCrossReference();

  return (
    <PageShell>
      {/* Deliberate global-mode banner — the one place bodies appear together. */}
      <div className="mb-8 rounded-2xl border border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] p-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Global / Cross-Reference Mode
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          This is the only view where ASTM, AMS, ISO, DIN, EN and JIS
          standards are searched together. Every other page is strictly
          siloed to a single body.
        </p>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-50">
          Cross-Reference
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
          {all.length} standards across all bodies · {crossReferenceLinks.length}{" "}
          curated relationships.
        </p>
      </header>

      <StandardsExplorer
        standards={all}
        mode="global"
        crossReferenceLinks={crossReferenceLinks}
      />
    </PageShell>
  );
}
