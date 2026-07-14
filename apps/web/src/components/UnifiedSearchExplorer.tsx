"use client";

import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { AnyStandard, CrossReferenceEntry } from "@/types/standard";
import type { LocalStandard } from "@/types/localStandard";
import { useI18n } from "@/i18n";
import { SearchBar } from "./SearchBar";
import {
  FilterPanel,
  type FacetKey,
  type FacetOptions,
  type FacetSelection,
} from "./FilterPanel";
import { OriginToggle, type OriginFilter } from "./OriginToggle";
import { BentoGrid } from "./BentoGrid";
import { StandardCard } from "./StandardCard";
import { LocalStandardCard } from "./LocalStandardCard";
import { CrossReferenceLinks } from "./CrossReferenceLinks";
import { StandardDetailOverlay } from "./StandardDetailOverlay";

type ResultItem =
  | { kind: "international"; key: string; standard: AnyStandard }
  | { kind: "company"; key: string; standard: LocalStandard };

/**
 * The unified, cross-catalog search surface: queries the existing
 * international standards (`AnyStandard[]`, passed down from
 * getAllStandardsForCrossReference() — the one sanctioned No-Mix chokepoint,
 * see data/registry.ts) AND the new local/company standards (fetched from
 * GET /api/local-standards) side by side, behind one search box, the
 * existing FilterPanel facets, and an origin scope toggle.
 *
 * Deliberately a NEW component rather than widening StandardsExplorer: that
 * component's prop type is the read-only AnyStandard union, and it is relied
 * on elsewhere (org-scoped pages) to make it structurally impossible to
 * surface anything but a single org's records. LocalStandard never enters
 * that type.
 */
export function UnifiedSearchExplorer({
  internationalStandards,
  crossReferenceLinks = [],
}: {
  internationalStandards: readonly AnyStandard[];
  crossReferenceLinks?: readonly CrossReferenceEntry[];
}) {
  const { t } = useI18n();

  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<OriginFilter>("all");
  const [selected, setSelected] = useState<AnyStandard | null>(null);
  const [localStandards, setLocalStandards] = useState<LocalStandard[]>([]);
  const [loadingLocal, setLoadingLocal] = useState(true);
  const [selection, setSelection] = useState<FacetSelection>(() => ({
    organization: new Set<string>(),
    materialType: new Set<string>(),
    application: new Set<string>(),
    status: new Set<string>(),
  }));

  useEffect(() => {
    let cancelled = false;
    fetch("/api/local-standards")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setLocalStandards(Array.isArray(data.standards) ? data.standards : []);
      })
      .catch(() => {
        if (!cancelled) setLocalStandards([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingLocal(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo<FacetOptions>(
    () => buildFacetOptions(internationalStandards, localStandards),
    [internationalStandards, localStandards],
  );

  const intlFuse = useMemo(
    () =>
      new Fuse(internationalStandards as AnyStandard[], {
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
    [internationalStandards],
  );

  const localFuse = useMemo(
    () =>
      new Fuse(localStandards, {
        keys: [
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
    [localStandards],
  );

  const results = useMemo<ResultItem[]>(() => {
    const trimmed = query.trim();

    const intlBase = trimmed
      ? intlFuse.search(trimmed).map((r) => r.item)
      : (internationalStandards as AnyStandard[]);
    const localBase = trimmed
      ? localFuse.search(trimmed).map((r) => r.item)
      : localStandards;

    const items: ResultItem[] = [];

    if (origin !== "company") {
      for (const s of intlBase) {
        if (matchesIntlFacets(s, selection)) {
          items.push({ kind: "international", key: s.fullCode, standard: s });
        }
      }
    }
    if (origin !== "international") {
      for (const s of localBase) {
        if (matchesLocalFacets(s, selection)) {
          items.push({ kind: "company", key: s.id, standard: s });
        }
      }
    }
    return items;
  }, [query, origin, intlFuse, localFuse, internationalStandards, localStandards, selection]);

  const toggle = (facet: FacetKey, value: string) =>
    setSelection((prev) => {
      const next = new Set(prev[facet]);
      if (next.has(value)) next.delete(value);
      else next.add(value);
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
    () => new Set(results.filter((r) => r.kind === "international").map((r) => r.key)),
    [results],
  );

  const activeFilters =
    query.trim().length > 0 ||
    origin !== "all" ||
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
          showOrganization
        />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <SearchBar value={query} onChange={setQuery} placeholderKey="search.globalPlaceholder" />
          </div>
          <OriginToggle value={origin} onChange={setOrigin} />
        </div>

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="ltr-data font-semibold text-neutral-800 dark:text-neutral-200">
            {results.length}
          </span>{" "}
          {results.length === 1 ? t("results.countSingular") : t("results.count")}
          {loadingLocal && ` · ${t("results.loading")}`}
        </p>

        {results.length === 0 ? (
          <div className="mc-card mt-4 rounded-2xl p-10 text-center">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {t("results.empty")}
            </p>
            <p className="mt-1 text-xs text-neutral-400">{t("results.emptyHint")}</p>
          </div>
        ) : (
          <BentoGrid className="mt-4">
            {results.map((r, i) =>
              r.kind === "international" ? (
                <StandardCard
                  key={r.key}
                  standard={r.standard}
                  showOrg
                  span={i % 7 === 0 ? "md" : "sm"}
                  onView={setSelected}
                />
              ) : (
                <LocalStandardCard
                  key={r.key}
                  standard={r.standard}
                  span={i % 7 === 0 ? "md" : "sm"}
                />
              ),
            )}
          </BentoGrid>
        )}

        {selected && (
          <StandardDetailOverlay standard={selected} onClose={() => setSelected(null)} />
        )}

        {crossReferenceLinks.length > 0 && (
          <CrossReferenceLinks
            links={crossReferenceLinks}
            highlightCodes={activeFilters ? visibleCodes : undefined}
          />
        )}
      </div>
    </div>
  );
}

function buildFacetOptions(
  intl: readonly AnyStandard[],
  local: readonly LocalStandard[],
): FacetOptions {
  const organization = new Set<string>();
  const materialType = new Set<string>();
  const application = new Set<string>();
  const status = new Set<string>();

  for (const s of intl) {
    organization.add(s.standardBody);
    materialType.add(s.materialType);
    status.add(s.status);
    for (const app of s.application) application.add(app);
  }
  for (const s of local) {
    materialType.add(s.materialType);
    status.add(s.status);
    for (const app of s.application) application.add(app);
  }

  return {
    organization: [...organization].sort(),
    materialType: [...materialType].sort(),
    application: [...application].sort(),
    status: ["active", "superseded"].filter((v) => status.has(v)),
  };
}

/** Organization facet only ever applies to international records — a company
 *  standard has no `standardBody`, so any org selection excludes it. */
function matchesIntlFacets(s: AnyStandard, sel: FacetSelection): boolean {
  if (sel.organization.size && !sel.organization.has(s.standardBody)) return false;
  if (sel.materialType.size && !sel.materialType.has(s.materialType)) return false;
  if (sel.status.size && !sel.status.has(s.status)) return false;
  if (sel.application.size && !s.application.some((app) => sel.application.has(app)))
    return false;
  return true;
}

function matchesLocalFacets(s: LocalStandard, sel: FacetSelection): boolean {
  if (sel.organization.size) return false;
  if (sel.materialType.size && !sel.materialType.has(s.materialType)) return false;
  if (sel.status.size && !sel.status.has(s.status)) return false;
  if (sel.application.size && !s.application.some((app) => sel.application.has(app)))
    return false;
  return true;
}

export default UnifiedSearchExplorer;
