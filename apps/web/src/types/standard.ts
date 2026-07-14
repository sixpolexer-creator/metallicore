/**
 * MetalliCore — Core data schema for metallic engineering standards.
 *
 * =============================================================================
 *  THE "NO-MIX" RULE (read before editing)
 * =============================================================================
 * Records from different standards bodies (ASTM, AMS, ISO, DIN, EN, JIS) must
 * remain STRUCTURALLY separate. We deliberately do NOT model them as one flat
 * type with an `org: string` field, because that would make it trivially easy
 * for a filter/search to accidentally return an ASTM record inside an ISO
 * context.
 *
 * Instead each organization has its OWN interface (`AstmStandard`,
 * `AmsStandard`, `IsoStandard`, `DinStandard`, `EnStandard`, `JisStandard`)
 * carrying a LITERAL, immutable `standardBody` discriminant. TypeScript's
 * discriminated union then lets the compiler prove which org a record belongs
 * to. Per-org data lives in its own module under `src/data/<org>.ts` and may
 * only be imported directly.
 *
 * The ONLY place cross-org values may be combined is the narrow
 * `CrossReferenceEntry` type + `getAllStandardsForCrossReference()` in
 * `src/data/registry.ts`. Nothing else may aggregate across orgs.
 * =============================================================================
 */

/** The six recognized standards organizations. Immutable, closed set. */
export const STANDARD_ORGS = ['ASTM', 'AMS', 'ISO', 'DIN', 'EN', 'JIS'] as const;
export type StandardOrg = (typeof STANDARD_ORGS)[number];

/** Broad material families used for faceted filtering. */
export type MaterialType =
  | 'Aluminum'
  | 'Titanium'
  | 'Steel'
  | 'Stainless Steel'
  | 'Cast Iron'
  | 'Nickel Alloy'
  | 'Copper Alloy'
  | 'Magnesium';

/** Industry / usage application, used for faceted filtering. */
export type Application =
  | 'Aerospace'
  | 'Automotive'
  | 'Marine'
  | 'Construction'
  | 'Medical'
  | 'Energy'
  | 'General Engineering';

/** Lifecycle status of a standard. */
export type StandardStatus = 'active' | 'superseded';

/**
 * Data-availability tier — INDEPENDENT of lifecycle `status`. `'full'` means
 * the record's scope/chemicalComposition/mechanicalProperties were sourced
 * from freely-republished data and are safe to render in full. `'restricted'`
 * means only publisher-listed metadata is available (the underlying document
 * is sold by the standards body); such records carry no scope/composition/
 * properties and the UI must show a "restricted" notice instead, with the
 * admin-only upload hook as the path to add the purchased document.
 */
export type DataAccess = 'full' | 'restricted';

/** One row of a chemical composition table (mass % range for an element). */
export interface ChemicalCompositionEntry {
  element: string;
  range: string;
}

/** One row of a mechanical properties table. */
export interface MechanicalPropertyEntry {
  label: string;
  value: string;
}

/**
 * Fields shared by every standard, regardless of body.
 * NOTE: this is an internal building block. It is intentionally NOT exported
 * as a usable "any standard" type — consumers must use a specific org type or
 * the read-only union below so the No-Mix rule is enforced by the compiler.
 */
interface StandardBase {
  /** Human-facing designation code, e.g. "A240", "4911", "683-13", "17440". */
  designation: string;
  /** Fully-qualified public code including body prefix, e.g. "ASTM A240". */
  fullCode: string;
  title: string;
  materialType: MaterialType;
  application: Application[];
  status: StandardStatus;
  description: string;
  /** Designation that replaced this one, present only when status = superseded. */
  supersededBy?: string;
  /** See `DataAccess`. Defaults conceptually to 'full'; ingestion always sets
   *  this explicitly so no record accidentally renders detail sections it
   *  isn't licensed to show. */
  dataAccess: DataAccess;
  /** Full-standard detail view fields. Present only when `dataAccess ===
   *  'full'` — the detail overlay falls back to a restricted notice
   *  otherwise. */
  scope?: string;
  chemicalComposition?: ChemicalCompositionEntry[];
  mechanicalProperties?: MechanicalPropertyEntry[];
  /** Reference to the original standard document (seed value set at
   *  ingestion time). Independent of `dataAccess` — a 'restricted' record can
   *  still carry a purchased PDF an admin attached. Admins may override this
   *  at runtime via the local PDF attachment store (see
   *  src/data/pdfAttachments.ts); that override, not this field, is what the
   *  UI actually reads. */
  pdfUrl?: string;
  /** Whether `pdfUrl` may be shown to ordinary (non-admin) visitors. Both
   *  this AND `pdfUrl` must resolve truthy for the "View Original Standard"
   *  button to render — see `hasShareablePdf()`. Defaults to false: a PDF
   *  reference alone is never enough to expose the document publicly. */
  isShareablePdf?: boolean;
}

/* ---------------------------------------------------------------------------
 * Per-organization types. Each carries a LITERAL `standardBody` discriminant
 * plus a few body-specific fields so the interfaces are genuinely distinct
 * structural types, not interchangeable aliases.
 * ------------------------------------------------------------------------- */

export interface AstmStandard extends StandardBase {
  readonly standardBody: 'ASTM';
  /** ASTM section letter that groups the spec by subject, e.g. "A" (ferrous
   *  metals), "B" (nonferrous metals). Not the full subcommittee number —
   *  that isn't derivable from the designation alone. */
  committee: string;
}

export interface AmsStandard extends StandardBase {
  readonly standardBody: 'AMS';
  /** SAE/AMS revision letter, e.g. "K". Absent when the source didn't name
   *  a specific revision (AMS revisions are catalog-maintained). */
  revision?: string;
}

export interface IsoStandard extends StandardBase {
  readonly standardBody: 'ISO';
  /** ISO technical committee, e.g. "ISO/TC 17". Absent when not named in the
   *  source metadata. */
  technicalCommittee?: string;
}

export interface DinStandard extends StandardBase {
  readonly standardBody: 'DIN';
  /** Whether this DIN spec references an EN (European) harmonized document. */
  hasEnEquivalent: boolean;
}

export interface EnStandard extends StandardBase {
  readonly standardBody: 'EN';
  /** CEN material number cited alongside the designation, e.g. "1.4301".
   *  Absent when the source didn't name one. */
  materialNumber?: string;
}

export interface JisStandard extends StandardBase {
  readonly standardBody: 'JIS';
  /** JIS part number extracted from the designation, e.g. "G4304". */
  jisNumber: string;
}

/**
 * Read-only discriminated union over ALL org types.
 *
 * WARNING: this union exists only to type values that ALREADY legitimately
 * crossed the chokepoint (i.e. results of getAllStandardsForCrossReference()).
 * Do NOT use it to build ad-hoc aggregations of per-org data — that would
 * bypass the No-Mix rule. Narrow on `standardBody` before rendering.
 */
export type AnyStandard =
  | AstmStandard
  | AmsStandard
  | IsoStandard
  | DinStandard
  | EnStandard
  | JisStandard;

/** Map an org value to its concrete record type. */
export type StandardForOrg<O extends StandardOrg> = O extends 'ASTM'
  ? AstmStandard
  : O extends 'AMS'
    ? AmsStandard
    : O extends 'ISO'
      ? IsoStandard
      : O extends 'DIN'
        ? DinStandard
        : O extends 'EN'
          ? EnStandard
          : O extends 'JIS'
            ? JisStandard
            : never;

/**
 * The ONLY type permitted to describe a link BETWEEN standards of different
 * organizations. Used exclusively by the explicit cross-reference / global
 * search mode. Keep this narrow: it references records by code, it does not
 * embed or merge them.
 */
export interface CrossReferenceEntry {
  from: { standardBody: StandardOrg; fullCode: string };
  to: { standardBody: StandardOrg; fullCode: string };
  /** Nature of the relationship, e.g. "equivalent", "similar", "replaces". */
  relationship: 'equivalent' | 'similar' | 'related';
  note?: string;
}

/** Runtime type guard: is a string a recognized org? Used to validate routes. */
export function isStandardOrg(value: string): value is StandardOrg {
  return (STANDARD_ORGS as readonly string[]).includes(value);
}

/**
 * A single versioned document attached to a standard's identity node. Like
 * `CrossReferenceEntry`, this references a standard by code only — it never
 * embeds a record — so it stays outside the No-Mix boundary of the per-org
 * data modules. Seed revisions (`source: 'seed'`) come from the record's own
 * data; admin-uploaded revisions (`source: 'admin'`) are added at runtime via
 * the local revision store (see `src/data/revisions.ts`).
 */
export interface StandardRevision {
  id: string;
  /** Fully-qualified code of the standard this revision belongs to. */
  fullCode: string;
  /** Free-form version/revision label, e.g. "Revision 2026", "Version B". */
  version: string;
  publishedAt: string;
  notes?: string;
  source: 'seed' | 'admin';
}
