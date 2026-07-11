/**
 * VERSION/REVISION STORE — the local, offline-first home for a standard's
 * "single identity node with an array of versioned documents".
 *
 * Like `crossReferenceLinks` in registry.ts, this module references standards
 * by `fullCode` only — it never embeds or aggregates per-org records — so it
 * sits outside the No-Mix boundary without violating it (see the No-Mix rule
 * in src/types/standard.ts).
 *
 * Two layers make up the revision history for a given standard:
 *  - a single synthesized "seed" revision derived from the record's own data
 *    (always present, never persisted — it's just a view over existing fields)
 *  - zero or more admin-uploaded revisions, persisted to localStorage so they
 *    survive reloads on the same offline machine. No network calls are made.
 *
 * The actual file-write/ingestion mechanics are out of scope here; this only
 * tracks version labels and notes per standard.
 */
import type { AnyStandard, StandardRevision } from '@/types/standard';

const STORAGE_KEY = 'metallicore:revisions:v1';

type StoredRevisions = Record<string, StandardRevision[]>;

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function loadAdminRevisions(): StoredRevisions {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as StoredRevisions) : {};
  } catch {
    return {};
  }
}

function saveAdminRevisions(map: StoredRevisions): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Storage unavailable (private mode, quota) — admin upload will not persist.
  }
}

/** Derives the always-present "current" revision from the record's own fields. */
function synthesizeSeedRevision(standard: AnyStandard): StandardRevision {
  return {
    id: `seed:${standard.fullCode}`,
    fullCode: standard.fullCode,
    version:
      'revision' in standard
        ? `Revision ${standard.revision}`
        : standard.status === 'superseded'
          ? 'Original'
          : 'Current',
    publishedAt: '1970-01-01T00:00:00.000Z',
    notes: standard.status === 'superseded' ? 'Superseded revision on record.' : undefined,
    source: 'seed',
  };
}

/** Full revision history for a standard, newest first. */
export function getRevisionsFor(standard: AnyStandard): StandardRevision[] {
  const admin = loadAdminRevisions()[standard.fullCode] ?? [];
  const all = [synthesizeSeedRevision(standard), ...admin];
  return all.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export interface AddRevisionResult {
  revisions: StandardRevision[];
  error?: string;
}

/**
 * Admin-only action: appends a new versioned entry for a standard. Validates
 * a non-empty label and rejects case-insensitive duplicates against the
 * standard's existing history (seed + admin) so the identity node never holds
 * two documents claiming the same version.
 */
export function addRevision(
  standard: AnyStandard,
  version: string,
  notes?: string,
): AddRevisionResult {
  const trimmed = version.trim();
  const existing = getRevisionsFor(standard);

  if (!trimmed) {
    return { revisions: existing, error: 'validation.required' };
  }
  if (existing.some((r) => r.version.toLowerCase() === trimmed.toLowerCase())) {
    return { revisions: existing, error: 'validation.duplicate' };
  }

  const entry: StandardRevision = {
    id: `admin:${standard.fullCode}:${Date.now()}`,
    fullCode: standard.fullCode,
    version: trimmed,
    publishedAt: new Date().toISOString(),
    notes: notes?.trim() || undefined,
    source: 'admin',
  };

  const map = loadAdminRevisions();
  map[standard.fullCode] = [...(map[standard.fullCode] ?? []), entry];
  saveAdminRevisions(map);

  return { revisions: getRevisionsFor(standard) };
}
