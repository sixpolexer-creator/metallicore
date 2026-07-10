# MetalliCore — Architecture Context & Handoff

Global database/portal for metallic engineering standards (ASTM, AMS, ISO, DIN).
This document is the source of truth for the **Frontend** and **i18n Expert**
agents. It was written by the Architect agent before/alongside the scaffold.

Stack: **Next.js 16.2.10** (App Router) · **React 19** · **TypeScript** ·
**Tailwind CSS v4** · ESLint · `src/` dir · import alias `@/*`.
Build verified: `npm run build` succeeds; all four org routes prerender.

---

## 1. The No-Mix Rule (the single most important constraint)

Records from different standards bodies must stay **structurally isolated**.
We do NOT model standards as one flat type with an `org: string` field. Instead:

- Each body has its **own interface** with a **literal `standardBody`
  discriminant**: `AstmStandard`, `AmsStandard`, `IsoStandard`, `DinStandard`
  (`src/types/standard.ts`).
- Each body has its **own data module** exporting only its own typed array:
  `src/data/astm.ts`, `ams.ts`, `iso.ts`, `din.ts`.
- Org-scoped code imports **one** data module (or `getStandardsForOrg(org)`),
  so an ISO view literally cannot contain an ASTM record.
- **The only** place org data mixes is `getAllStandardsForCrossReference()` in
  `src/data/registry.ts`, used exclusively by the `/cross-reference` route.

---

## 2. Data schema

All types live in `src/types/standard.ts`.

### Shared fields (internal `StandardBase`, not exported as a usable "any" type)
- `designation: string` — e.g. `"A240"`, `"4911"`, `"683-13"`, `"17440"`
- `fullCode: string` — public code incl. body prefix, e.g. `"ASTM A240"` (use as React key)
- `title: string`
- `materialType: MaterialType` — `Aluminum | Titanium | Steel | Stainless Steel | Nickel Alloy | Copper Alloy | Magnesium`
- `application: Application[]` — `Aerospace | Automotive | Marine | Construction | Medical | Energy | General Engineering`
- `status: StandardStatus` — `'active' | 'superseded'`
- `description: string`
- `supersededBy?: string` — present only when superseded

### Per-org types (each adds the discriminant + one body-specific field)
- `AstmStandard`  → `standardBody: 'ASTM'`, `committee: string`
- `AmsStandard`   → `standardBody: 'AMS'`,  `revision: string`
- `IsoStandard`   → `standardBody: 'ISO'`,  `technicalCommittee: string`
- `DinStandard`   → `standardBody: 'DIN'`,  `hasEnEquivalent: boolean`

### Aggregate / helper types
- `AnyStandard` — read-only discriminated union of the four. **Only** for values
  that already crossed the chokepoint. Narrow on `standardBody` before use.
- `StandardForOrg<O>` — maps an org literal to its concrete record type.
- `CrossReferenceEntry` — the ONLY type allowed to name codes from two bodies.
  References by `{ standardBody, fullCode }` only; never embeds records.
  `relationship: 'equivalent' | 'similar' | 'related'`.
- `STANDARD_ORGS` (`['ASTM','AMS','ISO','DIN']`) + `StandardOrg` type.
- `isStandardOrg(value): value is StandardOrg` — runtime guard for route params.

Each org module is seeded with 10 plausible sample standards. `registry.ts`
also exports `crossReferenceLinks: CrossReferenceEntry[]` (curated equivalences).

---

## 3. Route structure (App Router, `src/app/`)

| Route               | File                              | Purpose                                            |
|---------------------|-----------------------------------|----------------------------------------------------|
| `/`                 | `app/page.tsx`                    | Landing stub. Links to each org + cross-reference. |
| `/[org]`            | `app/[org]/page.tsx`              | **Siloed** browse. `org` validated vs enum → 404.  |
| `/cross-reference`  | `app/cross-reference/page.tsx`    | **Global** mode — only page that mixes orgs.       |

- `/[org]` uses `generateStaticParams()` (prerenders ASTM/AMS/ISO/DIN only) and
  `isStandardOrg()` + `notFound()` so unknown orgs 404. It calls
  `getStandardsForOrg(validOrg)` — single-silo data.
- `/cross-reference` calls `getAllStandardsForCrossReference()` + reads
  `crossReferenceLinks`.
- All current pages are **minimal stubs** (plain lists). Real UI is yours.

---

## 4. Component hierarchy Frontend should build (suggested, not built yet)

```
RootLayout (app/layout.tsx)   ← exists; owns <html lang>/dir (i18n will make dynamic)
├─ HomePage /                 ← Bento grid of org cards + global search entry
├─ OrgPage /[org]             ← Bento grid of standard cards, SILOED
│   ├─ FacetFilters           ← Material / Application / Status facets (org-local)
│   ├─ SearchBar              ← fuzzy search scoped to THIS org only
│   ├─ BentoGrid
│   │   └─ StandardCard       ← renders one record; body-specific fields via narrow
│   └─ StatusBadge (active/superseded)
└─ CrossReferencePage /cross-reference
    ├─ GlobalSearchBar        ← fuzzy search across AnyStandard[]
    ├─ FacetFilters (+ Organization facet, only meaningful here)
    └─ CrossReferenceLinks    ← renders crossReferenceLinks equivalences
```

Design system target (Frontend): Bento grid, Minimalist Luxury — ample negative
space, high-contrast monochrome/muted metallic palette, Inter/geometric sans,
subtle hover. Data is the hero. Fuzzy search + facets: Standard Organization
(cross-ref only), Material Type, Application, Active/Superseded.

---

## 5. Handoff Notes — READ BEFORE CODING

### For the Frontend agent
- **Import data through the right door:**
  - Org-scoped UI → `getStandardsForOrg(org)` from `@/data/registry`, or import a
    single `@/data/<org>` module directly. NEVER import two org modules in one file.
  - Global/cross-ref UI → `getAllStandardsForCrossReference()` + `crossReferenceLinks`.
- Types to import from `@/types/standard`: `AnyStandard`, `AstmStandard`,
  `AmsStandard`, `IsoStandard`, `DinStandard`, `StandardOrg`, `StandardForOrg`,
  `MaterialType`, `Application`, `StandardStatus`, `CrossReferenceEntry`,
  `STANDARD_ORGS`, `isStandardOrg`.
- Use `fullCode` as list/React keys. When rendering `AnyStandard`, **narrow on
  `standardBody`** before touching body-specific fields (`committee`, `revision`,
  `technicalCommittee`, `hasEnEquivalent`).
- Facet filtering/fuzzy search on the `/[org]` page must operate ONLY on that
  org's array — do not reach into the registry's cross-ref function there.
- Add a fuzzy-search lib (e.g. Fuse.js) if you want; not yet installed.

### For the i18n Expert agent
- **Critical rule:** translate ONLY site chrome (nav, filters, labels, buttons).
  NEVER translate the data payload — `designation`, `fullCode`, `title`,
  `materialType`/`application` **values**, etc. must render verbatim in any locale.
  (You may translate the facet *labels*, not the standard *values*.)
- EN/HE toggle + dynamic LTR/RTL. `app/layout.tsx` currently hardcodes
  `<html lang="en">` — this is the spot to make `lang` and `dir` dynamic. The
  body uses `flex flex-col`; keep layout direction-agnostic when you add RTL.

### What NOT to change (owned by Architect / load-bearing)
- The four org data modules (`src/data/astm|ams|iso|din.ts`) — do not merge them,
  do not add other bodies' records into them.
- `src/data/registry.ts` — the cross-org **chokepoint**. Do not add alternative
  cross-org aggregators elsewhere; route all mixing through
  `getAllStandardsForCrossReference()`.
- The discriminated-union design in `src/types/standard.ts` — extend fields if
  needed, but keep per-org types structurally separate with literal discriminants.
- The `[org]` route's enum validation (`isStandardOrg` + `notFound`) — keep it so
  unknown orgs 404 and the silo holds at the routing layer.
