/**
 * =============================================================================
 *  CROSS-ORG CHOKEPOINT — the ONLY place standards from different bodies mix.
 * =============================================================================
 *
 * Why this file exists:
 * The No-Mix rule (see src/types/standard.ts) requires that ASTM/AMS/ISO/DIN/
 * EN/JIS data stay isolated. Org-scoped browsing (the `[org]` route) must
 * import a single org's module directly (e.g. `import { isoStandards } from
 * '@/data/iso'`) so it is *structurally impossible* for an ISO view to surface
 * an ASTM record.
 *
 * BUT the product also needs an explicit "Cross-Reference / Global" search
 * mode. That mode is the one sanctioned exception. To keep the exception
 * auditable, ALL cross-org aggregation is funneled through the single function
 * `getAllStandardsForCrossReference()` below. If you ever find yourself
 * importing more than one `@/data/<org>` module in the same file, you are
 * almost certainly violating the rule — do it here instead, or reconsider.
 *
 * Rules for maintainers:
 *   - Do NOT import this file from an org-scoped page. Org pages import their
 *     own single data module.
 *   - Do NOT add per-org convenience aggregators elsewhere.
 *   - The returned array is typed as the read-only AnyStandard union, so every
 *     consumer MUST narrow on `standardBody` before using body-specific fields.
 * =============================================================================
 */
import type {
  AnyStandard,
  CrossReferenceEntry,
  StandardForOrg,
  StandardOrg,
} from '@/types/standard';

import { astmStandards } from '@/data/astm';
import { amsStandards } from '@/data/ams';
import { isoStandards } from '@/data/iso';
import { dinStandards } from '@/data/din';
import { enStandards } from '@/data/en';
import { jisStandards } from '@/data/jis';

/**
 * Return a single per-org array WITHOUT crossing the silo. Prefer importing the
 * org module directly in org-scoped code; this helper exists only for the
 * dynamic `[org]` route which resolves the org at runtime from the URL param.
 */
export function getStandardsForOrg<O extends StandardOrg>(
  org: O,
): ReadonlyArray<StandardForOrg<O>> {
  const byOrg = {
    ASTM: astmStandards,
    AMS: amsStandards,
    ISO: isoStandards,
    DIN: dinStandards,
    EN: enStandards,
    JIS: jisStandards,
  } as const;
  // Safe: each key maps to that org's own typed array. The index lookup loses
  // the precise generic link, so we assert back to StandardForOrg<O>.
  return byOrg[org] as unknown as ReadonlyArray<StandardForOrg<O>>;
}

/**
 * THE sanctioned cross-org aggregation point.
 *
 * Only the explicit Cross-Reference / Global search mode may call this. It
 * returns the flattened union of every body's records. Consumers must narrow
 * on `standardBody` before rendering body-specific fields.
 */
export function getAllStandardsForCrossReference(): ReadonlyArray<AnyStandard> {
  return [
    ...astmStandards,
    ...amsStandards,
    ...isoStandards,
    ...dinStandards,
    ...enStandards,
    ...jisStandards,
  ];
}

/**
 * Curated equivalence / relationship links between standards of DIFFERENT
 * bodies. This is the only data structure permitted to name codes from more
 * than one org, and it references them by code only (it never embeds records).
 * Every fullCode below is verified against the ingested data (see each org's
 * `equivalents` / cross-references noted in `data/standards_research`).
 */
export const crossReferenceLinks: CrossReferenceEntry[] = [
  {
    from: { standardBody: 'ASTM', fullCode: 'ASTM A240 Type 304' },
    to: { standardBody: 'DIN', fullCode: 'DIN 1.4301 (X5CrNi18-10)' },
    relationship: 'equivalent',
    note: 'Same austenitic 18Cr-8Ni (Type 304 / X5CrNi18-10) stainless grade.',
  },
  {
    from: { standardBody: 'DIN', fullCode: 'DIN 1.4301 (X5CrNi18-10)' },
    to: { standardBody: 'EN', fullCode: 'EN 10088 1.4301 (X5CrNi18-10)' },
    relationship: 'equivalent',
    note: 'Same material number 1.4301, harmonized across DIN and EN 10088.',
  },
  {
    from: { standardBody: 'DIN', fullCode: 'DIN 1.4301 (X5CrNi18-10)' },
    to: { standardBody: 'JIS', fullCode: 'JIS G4304 SUS304' },
    relationship: 'equivalent',
    note: 'X5CrNi18-10 / SUS304 are the same 18-8 austenitic stainless grade.',
  },
  {
    from: { standardBody: 'DIN', fullCode: 'DIN 17440' },
    to: { standardBody: 'EN', fullCode: 'EN 10088 1.4301 (X5CrNi18-10)' },
    relationship: 'equivalent',
    note: 'DIN 17440 stainless delivery conditions were superseded by DIN EN 10088.',
  },
  {
    from: { standardBody: 'AMS', fullCode: 'AMS 4911' },
    to: { standardBody: 'ASTM', fullCode: 'ASTM B265 (Titanium, Grade 2 etc.)' },
    relationship: 'similar',
    note: 'Both cover Ti-6Al-4V sheet/plate; AMS adds aerospace acceptance criteria.',
  },
  {
    from: { standardBody: 'AMS', fullCode: 'AMS 4911' },
    to: { standardBody: 'ISO', fullCode: 'ISO 5832-3' },
    relationship: 'related',
    note: 'Same Ti-6Al-4V alloy family; ISO 5832-3 targets surgical implants.',
  },
  {
    from: { standardBody: 'ASTM', fullCode: 'ASTM A36' },
    to: { standardBody: 'EN', fullCode: 'EN 10025-2 S235JR' },
    relationship: 'similar',
    note: 'Comparable mild/non-alloy structural steel grades.',
  },
  {
    from: { standardBody: 'ASTM', fullCode: 'ASTM A36' },
    to: { standardBody: 'JIS', fullCode: 'JIS G3101 SS400' },
    relationship: 'similar',
    note: 'Comparable general structural carbon steel grades.',
  },
];
