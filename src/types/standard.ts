/**
 * MetalliCore — Core data schema for metallic engineering standards.
 *
 * =============================================================================
 *  THE "NO-MIX" RULE (read before editing)
 * =============================================================================
 * Records from different standards bodies (ASTM, AMS, ISO, DIN) must remain
 * STRUCTURALLY separate. We deliberately do NOT model them as one flat type
 * with an `org: string` field, because that would make it trivially easy for
 * a filter/search to accidentally return an ASTM record inside an ISO context.
 *
 * Instead each organization has its OWN interface (`AstmStandard`,
 * `AmsStandard`, `IsoStandard`, `DinStandard`) carrying a LITERAL, immutable
 * `standardBody` discriminant. TypeScript's discriminated union then lets the
 * compiler prove which org a record belongs to. Per-org data lives in its own
 * module under `src/data/<org>.ts` and may only be imported directly.
 *
 * The ONLY place cross-org values may be combined is the narrow
 * `CrossReferenceEntry` type + `getAllStandardsForCrossReference()` in
 * `src/data/registry.ts`. Nothing else may aggregate across orgs.
 * =============================================================================
 */

/** The four recognized standards organizations. Immutable, closed set. */
export const STANDARD_ORGS = ['ASTM', 'AMS', 'ISO', 'DIN'] as const;
export type StandardOrg = (typeof STANDARD_ORGS)[number];

/** Broad material families used for faceted filtering. */
export type MaterialType =
  | 'Aluminum'
  | 'Titanium'
  | 'Steel'
  | 'Stainless Steel'
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
}

/* ---------------------------------------------------------------------------
 * Per-organization types. Each carries a LITERAL `standardBody` discriminant
 * plus a few body-specific fields so the interfaces are genuinely distinct
 * structural types, not interchangeable aliases.
 * ------------------------------------------------------------------------- */

export interface AstmStandard extends StandardBase {
  readonly standardBody: 'ASTM';
  /** ASTM committee that owns the spec, e.g. "A01". */
  committee: string;
}

export interface AmsStandard extends StandardBase {
  readonly standardBody: 'AMS';
  /** SAE/AMS revision letter, e.g. "K". */
  revision: string;
}

export interface IsoStandard extends StandardBase {
  readonly standardBody: 'ISO';
  /** ISO technical committee, e.g. "ISO/TC 17". */
  technicalCommittee: string;
}

export interface DinStandard extends StandardBase {
  readonly standardBody: 'DIN';
  /** Whether this DIN spec has an EN (European) harmonized equivalent. */
  hasEnEquivalent: boolean;
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
  | DinStandard;

/** Map an org value to its concrete record type. */
export type StandardForOrg<O extends StandardOrg> = O extends 'ASTM'
  ? AstmStandard
  : O extends 'AMS'
    ? AmsStandard
    : O extends 'ISO'
      ? IsoStandard
      : O extends 'DIN'
        ? DinStandard
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
