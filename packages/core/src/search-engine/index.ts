/**
 * Search Engine — STUB. Real implementation lands in Phase 6.
 *
 * Offline only — no external search service. Will provide full-text, fuzzy,
 * alias, synonym, equivalent-material, previous-designation, revision, and
 * relationship-aware search, likely backed by Postgres full-text search
 * (tsvector/GIN) plus a curated alias/equivalence table so e.g. searching
 * "4140" also surfaces 42CrMo4, SCM440, EN19 via stored mappings rather than
 * any inferred/AI similarity.
 *
 * Each plugin will register its searchable entities through this module
 * (see plugin-sdk's `registerSearchSource`), not build its own index.
 */
export interface SearchQuery {
  text: string;
  /** Restrict to specific object types (e.g. ["standard", "material"]). Omit for all. */
  objectTypes?: readonly string[];
}

export interface SearchResult {
  objectType: string;
  objectId: string;
  score: number;
  matchedOn: readonly string[];
}
