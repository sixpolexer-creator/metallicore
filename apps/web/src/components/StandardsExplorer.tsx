"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { AnyStandard, CrossReferenceEntry } from "@/types/standard";
import { useI18n } from "@/i18n";
import { SearchBar } from "./SearchBar";
import {
  FilterPanel,
  type FacetKey,
  type FacetOptions,
  type FacetSelection,
} from "./FilterPanel";
import { BentoGrid } from "./BentoGrid";
import { StandardCard } from "./StandardCard";
import { CrossReferenceLinks } from "./CrossReferenceLinks";
import { StandardDetailOverlay } from "./StandardDetailOverlay";

/**
 * Shared search + facet + results surface.
 *
 * NO-MIX ENFORCEMENT: this component NEVER imports a data module. It renders
 * whatever `standards` array it is handed by its parent server component. On an
 * org page that array comes from `getStandardsForOrg(org)` (a single silo); in
 * global mode it comes from `getAllStandardsForCrossReference()`. Fuse and the
 * facets operate strictly over `standards`, so it is structurally impossible
 * for org-scoped usage to surface another body's records.
 *
 * `mode` only toggles UI affordances (the Organization facet + cross-reference
 * relationships) — it does not, and cannot, widen the data set.
 */
export function StandardsExplorer({
  standards,
  mode,
  crossReferenceLinks = [],
}: {
  standards: readonly AnyStandard[];
  mode: "org" | "global";
  crossReferenceLinks?: readonly CrossReferenceEntry[];
}) {
  const { t } = useI18n();
  const isGlobal = mode === "global";

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<AnyStandard | null>(null);
  const [selection, setSelection] = useState<FacetSelection>(() => ({
    organization: new Set<string>(),
    materialType: new Set<string>(),
    application: new Set<string>(),
    status: new Set<string>(),
  }));

  const options = useMemo<FacetOptions>(
    () => buildFacetOptions(standards),
    [standards],
  );

  const fuse = useMemo(
    () =>
      new Fuse(standards as AnyStandard[], {
        keys: [
          { name: "fullCode", weight: 3 },
          { name: "designation", weight: 3 },
          { name: "title", weight: 2 },
          { name: "materialType", weight: 1 },
          { name: "application", weight: 1 },
          { name: "description", weight: 1 },
        ],
        threshold: 0.38,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [standards],
  );

  const results = useMemo(() => {
    const q = query.trim();
    const base = q ? searchStandards(standards as AnyStandard[], fuse, q) : (standards as AnyStandard[]);
    return base.filter((s) => matchesFacets(s, selection));
  }, [query, fuse, standards, selection]);

  const toggle = (facet: FacetKey, value: string) =>
    setSelection((prev) => {
      const next = new Set(prev[facet]);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return { ...prev, [facet]: next };
    });

  const clear = () =>
    setSelection({
      organization: new Set(),
      materialType: new Set(),
      application: new Set(),
      status: new Set(),
    });

  const visibleCodes = useMemo(
    () => new Set(results.map((s) => s.fullCode)),
    [results],
  );

  const activeFilters =
    query.trim().length > 0 ||
    selection.organization.size +
      selection.materialType.size +
      selection.application.size +
      selection.status.size >
      0;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,16rem)_1fr]">
      <div className="lg:sticky lg:top-6 lg:self-start">
        <FilterPanel
          options={options}
          selection={selection}
          onToggle={toggle}
          onClear={clear}
          showOrganization={isGlobal}
        />
      </div>

      <div className="min-w-0">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholderKey={
            isGlobal ? "search.globalPlaceholder" : "search.placeholder"
          }
        />

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="ltr-data font-semibold text-neutral-800 dark:text-neutral-200">
            {results.length}
          </span>{" "}
          {results.length === 1 ? t("results.countSingular") : t("results.count")}
        </p>

        {results.length === 0 ? (
          <div className="mc-card mt-4 rounded-2xl p-10 text-center">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {t("results.empty")}
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              {t("results.emptyHint")}
            </p>
          </div>
        ) : (
          <BentoGrid className="mt-4">
            {results.map((s, i) => (
              <StandardCard
                key={s.fullCode}
                standard={s}
                showOrg={isGlobal}
                // Bento rhythm: occasional feature cell.
                span={i % 7 === 0 ? "md" : "sm"}
                onView={setSelected}
              />
            ))}
          </BentoGrid>
        )}

        {selected && (
          <StandardDetailOverlay
            standard={selected}
            onClose={() => setSelected(null)}
          />
        )}

        {isGlobal && crossReferenceLinks.length > 0 && (
          <CrossReferenceLinks
            links={crossReferenceLinks}
            highlightCodes={activeFilters ? visibleCodes : undefined}
          />
        )}
      </div>
    </div>
  );
}

// Normalizes for substring comparison: strips everything but letters/digits and
// lowercases, so "A106", "a-106", and "106" all compare on equal footing.
function normalizeAlphanumeric(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const SUBSTRING_FIELDS = [
  "fullCode",
  "designation",
  "title",
  "materialType",
  "description",
] as const;

/**
 * Alphanumeric-aware search: Fuse's fuzzy scoring is tuned for typo tolerance
 * on words, and can under-rank short numeric queries (e.g. "106", "304")
 * against long codes like "ASTM A106 Grade B" or "ASTM A240 Type 304". To
 * guarantee those substring lookups always resolve, exact normalized-substring
 * matches are surfaced first (in their original standards order), then any
 * additional Fuse fuzzy matches are appended.
 */
function searchStandards(
  standards: readonly AnyStandard[],
  fuse: Fuse<AnyStandard>,
  query: string,
): AnyStandard[] {
  const normalizedQuery = normalizeAlphanumeric(query);

  const substringMatches =
    normalizedQuery.length > 0
      ? standards.filter((s) =>
          SUBSTRING_FIELDS.some((field) => {
            const raw = s[field as keyof AnyStandard];
            return (
              typeof raw === "string" &&
              normalizeAlphanumeric(raw).includes(normalizedQuery)
            );
          }),
        )
      : [];

  const seen = new Set(substringMatches.map((s) => s.fullCode));
  const fuzzyMatches = fuse
    .search(query)
    .map((r) => r.item)
    .filter((s) => !seen.has(s.fullCode));

  return [...substringMatches, ...fuzzyMatches];
}

function buildFacetOptions(standards: readonly AnyStandard[]): FacetOptions {
  const organization = new Set<string>();
  const materialType = new Set<string>();
  const application = new Set<string>();
  const status = new Set<string>();

  for (const s of standards) {
    organization.add(s.standardBody);
    materialType.add(s.materialType);
    status.add(s.status);
    for (const app of s.application) application.add(app);
  }

  return {
    organization: [...organization].sort(),
    materialType: [...materialType].sort(),
    application: [...application].sort(),
    // Keep a stable, meaningful order for status rather than alphabetical.
    status: ["active", "superseded"].filter((v) => status.has(v)),
  };
}

function matchesFacets(s: AnyStandard, sel: FacetSelection): boolean {
  if (sel.organization.size && !sel.organization.has(s.standardBody))
    return false;
  if (sel.materialType.size && !sel.materialType.has(s.materialType))
    return false;
  if (sel.status.size && !sel.status.has(s.status)) return false;
  if (
    sel.application.size &&
    !s.application.some((app) => sel.application.has(app))
  )
    return false;
  return true;
}

export default StandardsExplorer;
