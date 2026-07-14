/**
 * ISOLATED DATA MODULE — JIS standards only. Ingested from
 * `data/standards_research/JIS` (see that directory's
 * per-designation JSON files and `JIS_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY JIS records, typed as
 * JisStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by JIS — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { JisStandard } from '@/types/standard';

export const jisStandards: JisStandard[] = [
  {
    "standardBody": "JIS",
    "designation": "G3101",
    "fullCode": "JIS G3101",
    "title": "Rolled steels for general structure",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Specifies hot-rolled plates, sheets, strips, sections, flats and bars of general structural carbon steel (grades SS330, SS400, SS490, SS540) used in construction and general machinery.",
    "dataAccess": "restricted",
    "jisNumber": "G3101"
  },
  {
    "standardBody": "JIS",
    "designation": "G3101 SS400",
    "fullCode": "JIS G3101 SS400",
    "title": "Rolled steels for general structure - grade SS400",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "General structural hot-rolled carbon steel used for plates, sheets, strips, sections and bars in construction, bridges and general machinery.",
    "dataAccess": "full",
    "scope": "General structural hot-rolled carbon steel used for plates, sheets, strips, sections and bars in construction, bridges and general machinery. 'SS' denotes structural steel and '400' the minimum tensile strength in N/mm2.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "not specified"
      },
      {
        "element": "Si",
        "range": "not specified"
      },
      {
        "element": "Mn",
        "range": "not specified"
      },
      {
        "element": "P",
        "range": "<= 0.050"
      },
      {
        "element": "S",
        "range": "<= 0.050"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength MPa",
        "value": "400-510"
      },
      {
        "label": "Yield Strength MPa",
        "value": "Thickness <=16mm: >= 245; Thickness 16-40mm: >= 235; Thickness 40-100mm: >= 215; Thickness >100mm: >= 205"
      },
      {
        "label": "Elongation Percent",
        "value": "Thickness <=16mm: >= 17; Thickness 16-50mm: >= 21; Thickness >50mm: >= 23"
      },
      {
        "label": "Density G Cm3",
        "value": "7.85%"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "206%"
      }
    ],
    "jisNumber": "G3101"
  },
  {
    "standardBody": "JIS",
    "designation": "G3106",
    "fullCode": "JIS G3106",
    "title": "Rolled steels for welded structure",
    "materialType": "Steel",
    "application": [
      "Marine",
      "Construction"
    ],
    "status": "active",
    "description": "Weldable structural steel plates, sheets, strips and sections (grades SM400, SM490, SM490Y, SM520, SM570) for bridges, ships and welded construction, classified by toughness sub-grades A/B/C.",
    "dataAccess": "restricted",
    "jisNumber": "G3106"
  },
  {
    "standardBody": "JIS",
    "designation": "G3106 SM490A",
    "fullCode": "JIS G3106 SM490A",
    "title": "Rolled steels for welded structure - grade SM490A",
    "materialType": "Steel",
    "application": [
      "Marine",
      "Construction"
    ],
    "status": "active",
    "description": "Weldable structural carbon steel for bridges, ships, offshore and welded construction.",
    "dataAccess": "full",
    "scope": "Weldable structural carbon steel for bridges, ships, offshore and welded construction. Higher strength than SS400 with controlled composition for weldability. '490' denotes minimum tensile strength in N/mm2; suffix A/B/C denotes toughness class.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.20"
      },
      {
        "element": "Si",
        "range": "<= 0.55"
      },
      {
        "element": "Mn",
        "range": "<= 1.65"
      },
      {
        "element": "P",
        "range": "<= 0.035"
      },
      {
        "element": "S",
        "range": "<= 0.035"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength MPa",
        "value": "490-610"
      },
      {
        "label": "Yield Strength MPa",
        "value": "Thickness <=16mm: >= 325; Thickness 16-40mm: >= 315; Thickness 40-75mm: >= 295"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 17"
      },
      {
        "label": "Charpy Impact",
        "value": "SM490A no requirement; SM490B >= 27 J at 0C; SM490C >= 27 J at 0C"
      }
    ],
    "jisNumber": "G3106"
  },
  {
    "standardBody": "JIS",
    "designation": "G3444",
    "fullCode": "JIS G3444",
    "title": "Carbon steel tubes for general structural purposes (STK)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Welded and seamless carbon steel tubes for structural applications such as scaffolding, towers and frameworks (grades STK290, STK400, STK500, STK490).",
    "dataAccess": "restricted",
    "jisNumber": "G3444"
  },
  {
    "standardBody": "JIS",
    "designation": "G3454",
    "fullCode": "JIS G3454",
    "title": "Carbon steel pipes for pressure service (STPG)",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Seamless and electric-resistance-welded carbon steel pipes for pressure piping at ordinary and moderate temperatures (grades STPG370, STPG410).",
    "dataAccess": "restricted",
    "jisNumber": "G3454"
  },
  {
    "standardBody": "JIS",
    "designation": "G4051",
    "fullCode": "JIS G4051",
    "title": "Carbon steels for machine structural use",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Hot-rolled and forged carbon steel bars and materials for machine structural use (grades S10C to S58C, plus free-cutting and boron grades).",
    "dataAccess": "restricted",
    "jisNumber": "G4051"
  },
  {
    "standardBody": "JIS",
    "designation": "G4051 S45C",
    "fullCode": "JIS G4051 S45C",
    "title": "Carbon steels for machine structural use - grade S45C",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Medium-carbon steel (~0.",
    "dataAccess": "full",
    "scope": "Medium-carbon steel (~0.45% C) for machine structural use; hot-rolled/forged bars for shafts, gears, bolts, pins and mould bases. Commonly used quenched and tempered. Equivalent to AISI 1045 / DIN C45.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.42-0.48"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.035"
      },
      {
        "element": "Cu",
        "range": "<= 0.30"
      },
      {
        "element": "Ni",
        "range": "<= 0.20"
      },
      {
        "element": "Cr",
        "range": "<= 0.20"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered (typical)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 570"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 345"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 20"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 45"
      },
      {
        "label": "Impact Energy J",
        "value": ">= 39"
      },
      {
        "label": "Hardness Normalized HB",
        "value": "167-229"
      },
      {
        "label": "Hardness Annealed HB",
        "value": "137-170"
      }
    ],
    "jisNumber": "G4051"
  },
  {
    "standardBody": "JIS",
    "designation": "G4052",
    "fullCode": "JIS G4052",
    "title": "Structural steels with specified hardenability bands (H steels)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Low-alloy structural steels supplied to guaranteed hardenability (Jominy) bands, designated with an 'H' suffix (e.",
    "dataAccess": "restricted",
    "jisNumber": "G4052"
  },
  {
    "standardBody": "JIS",
    "designation": "G4053",
    "fullCode": "JIS G4053",
    "title": "Low-alloyed steels for machine structural use",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Alloy steel bars for machine structural use, covering Mn, Cr, Cr-Mo (SCM), Ni-Cr-Mo (SNCM) and boron steel grades used quenched and tempered or case hardened.",
    "dataAccess": "restricted",
    "jisNumber": "G4053"
  },
  {
    "standardBody": "JIS",
    "designation": "G4053 SCM440",
    "fullCode": "JIS G4053 SCM440",
    "title": "Low-alloyed steels for machine structural use - grade SCM440",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Chromium-molybdenum (Cr-Mo) low-alloy steel for machine structural use.",
    "dataAccess": "full",
    "scope": "Chromium-molybdenum (Cr-Mo) low-alloy steel for machine structural use. High strength and toughness after quenching and tempering; used for shafts, gears, bolts and high-stress components. Equivalent to AISI 4140 / DIN 42CrMo4.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.38-0.43"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "0.90-1.20"
      },
      {
        "element": "Mo",
        "range": "0.15-0.30"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 980"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 835"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 12"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 45"
      },
      {
        "label": "Impact Energy J",
        "value": ">= 55"
      },
      {
        "label": "Hardness HB",
        "value": "285-352"
      }
    ],
    "jisNumber": "G4053"
  },
  {
    "standardBody": "JIS",
    "designation": "G4303",
    "fullCode": "JIS G4303",
    "title": "Stainless steel bars",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Hot- and cold-finished stainless steel bars in austenitic, ferritic, martensitic and precipitation-hardening grades (SUS303, SUS304, SUS316, SUS420J2, etc.",
    "dataAccess": "restricted",
    "jisNumber": "G4303"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304",
    "fullCode": "JIS G4304",
    "title": "Hot-rolled stainless steel plate, sheet and strip",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Hot-rolled stainless steel flat products across austenitic, ferritic and martensitic grades (SUS304, SUS316, SUS430, etc.",
    "dataAccess": "restricted",
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS304",
    "fullCode": "JIS G4304 SUS304",
    "title": "Hot-rolled stainless steel plate, sheet and strip - grade SUS304",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Austenitic 18Cr-8Ni stainless steel, the most widely used grade.",
    "dataAccess": "full",
    "scope": "Austenitic 18Cr-8Ni stainless steel, the most widely used grade. Good corrosion resistance, formability and weldability. Also covered by JIS G4305 (cold-rolled) and JIS G4303 (bars). Equivalent to AISI 304 / UNS S30400.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.08"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 2.00"
      },
      {
        "element": "P",
        "range": "<= 0.045"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Ni",
        "range": "8.00-10.50"
      },
      {
        "element": "Cr",
        "range": "18.00-20.00"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 520"
      },
      {
        "label": "Yield Strength 0.2 MPa",
        "value": ">= 205"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 40"
      },
      {
        "label": "Hardness HB",
        "value": "<= 187"
      },
      {
        "label": "Hardness HRB",
        "value": "<= 90"
      },
      {
        "label": "Density G Cm3",
        "value": "7.93%"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS316",
    "fullCode": "JIS G4304 SUS316",
    "title": "Hot-rolled stainless steel plate, sheet and strip - grade SUS316",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Austenitic 18Cr-12Ni-2.",
    "dataAccess": "full",
    "scope": "Austenitic 18Cr-12Ni-2.5Mo stainless steel. Molybdenum addition improves pitting and crevice corrosion resistance, especially in chloride environments. Equivalent to AISI 316 / UNS S31600.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.08"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 2.00"
      },
      {
        "element": "P",
        "range": "<= 0.045"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Ni",
        "range": "10.00-14.00"
      },
      {
        "element": "Cr",
        "range": "16.00-18.00"
      },
      {
        "element": "Mo",
        "range": "2.00-3.00"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 520"
      },
      {
        "label": "Yield Strength 0.2 MPa",
        "value": ">= 205"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 40"
      },
      {
        "label": "Hardness HB",
        "value": "<= 187"
      },
      {
        "label": "Density G Cm3",
        "value": "7.98%"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS316L",
    "fullCode": "JIS G4304 SUS316L",
    "title": "Hot-rolled stainless steel plate, sheet and strip - grade SUS316L",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Ultra-low carbon (<= 0.",
    "dataAccess": "full",
    "scope": "Ultra-low carbon (<= 0.030% C) variant of SUS316. Reduced carbon minimises chromium carbide precipitation, improving intergranular corrosion resistance after welding. Equivalent to AISI 316L / UNS S31603.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.030"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 2.00"
      },
      {
        "element": "P",
        "range": "<= 0.045"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Ni",
        "range": "12.00-15.00"
      },
      {
        "element": "Cr",
        "range": "16.00-18.00"
      },
      {
        "element": "Mo",
        "range": "2.00-3.00"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 480"
      },
      {
        "label": "Yield Strength 0.2 MPa",
        "value": ">= 175"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 40"
      },
      {
        "label": "Hardness HB",
        "value": "<= 187"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4305",
    "fullCode": "JIS G4305",
    "title": "Cold-rolled stainless steel plate, sheet and strip",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Cold-rolled stainless steel flat products; companion standard to G4304 covering the same grade families with cold-rolled surface finishes and tempers.",
    "dataAccess": "restricted",
    "jisNumber": "G4305"
  },
  {
    "standardBody": "JIS",
    "designation": "G5501",
    "fullCode": "JIS G5501",
    "title": "Grey iron castings",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Grey (flake graphite) cast iron classified by tensile strength (FC100 to FC350) for machine bases, housings and general castings.",
    "dataAccess": "restricted",
    "jisNumber": "G5501"
  },
  {
    "standardBody": "JIS",
    "designation": "G5501 FC250",
    "fullCode": "JIS G5501 FC250",
    "title": "Grey iron castings - grade FC250",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Grey cast iron with flake graphite for castings such as machine bases, housings, cylinder blocks and brake components.",
    "dataAccess": "full",
    "scope": "Grey cast iron with flake graphite for castings such as machine bases, housings, cylinder blocks and brake components. 'FC' denotes ferrum casting; '250' is the minimum tensile strength in N/mm2 on a 30 mm test bar. Good machinability, damping and wear resistance.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "3.1-3.4"
      },
      {
        "element": "Si",
        "range": "1.9-2.3"
      },
      {
        "element": "Mn",
        "range": "0.5-0.9"
      },
      {
        "element": "P",
        "range": "<= 0.15"
      },
      {
        "element": "S",
        "range": "<= 0.12"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength MPa",
        "value": ">= 250"
      },
      {
        "label": "Hardness HB",
        "value": "<= 241"
      },
      {
        "label": "Density G Cm3",
        "value": "7.2%"
      }
    ],
    "jisNumber": "G5501"
  },
  {
    "standardBody": "JIS",
    "designation": "H3100",
    "fullCode": "JIS H3100",
    "title": "Copper and copper alloy sheets, plates and strips",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Flat-rolled copper and copper alloys including tough pitch copper (C1100), oxygen-free copper (C1020), phosphorus-deoxidised copper (C1220), brasses and phosphor bronzes.",
    "dataAccess": "restricted",
    "jisNumber": "H3100"
  },
  {
    "standardBody": "JIS",
    "designation": "H3100 C1100",
    "fullCode": "JIS H3100 C1100",
    "title": "Copper and copper alloy sheets, plates and strips - alloy C1100 (tough pitch copper)",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Electrolytic tough pitch copper (min 99.",
    "dataAccess": "full",
    "scope": "Electrolytic tough pitch copper (min 99.90% Cu) with high electrical and thermal conductivity. Used for electrical conductors, bus bars, gaskets, roofing and heat exchangers. Equivalent to UNS C11000 / ETP copper.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": ">= 99.90"
      },
      {
        "element": "O",
        "range": "present as Cu2O (tough pitch)"
      },
      {
        "element": "Pb",
        "range": "<= 0.005 (typical impurity limit)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper O Annealed",
        "value": "Tensile Strength MPa: >= 195; Elongation Percent: >= 35"
      },
      {
        "label": "Temper H Hard",
        "value": "Tensile Strength MPa: >= 275; Elongation Percent: typically < 5"
      },
      {
        "label": "Density G Cm3",
        "value": "8.94%"
      },
      {
        "label": "Electrical Conductivity Percent IACS",
        "value": ">= 100"
      }
    ],
    "jisNumber": "H3100"
  },
  {
    "standardBody": "JIS",
    "designation": "H4000",
    "fullCode": "JIS H4000",
    "title": "Aluminium and aluminium alloy sheets, plates and strips",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Wrought aluminium and aluminium alloy flat-rolled products across 1000-7000 series (A1050, A5052, A5083, A6061, A7075, etc.",
    "dataAccess": "restricted",
    "jisNumber": "H4000"
  },
  {
    "standardBody": "JIS",
    "designation": "H4000 A5052",
    "fullCode": "JIS H4000 A5052",
    "title": "Aluminium and aluminium alloy sheets, plates and strips - alloy A5052",
    "materialType": "Aluminum",
    "application": [
      "Marine"
    ],
    "status": "active",
    "description": "Non-heat-treatable Al-Mg (5000 series) alloy.",
    "dataAccess": "full",
    "scope": "Non-heat-treatable Al-Mg (5000 series) alloy. Good corrosion resistance (marine), moderate strength, good formability and weldability. Strengthened by cold work. Equivalent to AA 5052.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "<= 0.25"
      },
      {
        "element": "Fe",
        "range": "<= 0.40"
      },
      {
        "element": "Cu",
        "range": "<= 0.10"
      },
      {
        "element": "Mn",
        "range": "<= 0.10"
      },
      {
        "element": "Mg",
        "range": "2.2-2.8"
      },
      {
        "element": "Cr",
        "range": "0.15-0.35"
      },
      {
        "element": "Zn",
        "range": "<= 0.10"
      },
      {
        "element": "Al",
        "range": "remainder"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper O",
        "value": "Tensile Strength MPa: 170-215; Proof Stress 0.2 MPa: >= 65; Elongation Percent: >= 19"
      },
      {
        "label": "Temper H32",
        "value": "Tensile Strength MPa: 215-265; Proof Stress 0.2 MPa: >= 160; Elongation Percent: >= 7"
      },
      {
        "label": "Temper H34",
        "value": "Tensile Strength MPa: 235-285; Proof Stress 0.2 MPa: >= 180; Elongation Percent: >= 6"
      },
      {
        "label": "Density G Cm3",
        "value": "2.68%"
      }
    ],
    "jisNumber": "H4000"
  },
  {
    "standardBody": "JIS",
    "designation": "H4000 A6061",
    "fullCode": "JIS H4000 A6061",
    "title": "Aluminium and aluminium alloy sheets, plates and strips - alloy A6061",
    "materialType": "Aluminum",
    "application": [
      "Marine",
      "Construction"
    ],
    "status": "active",
    "description": "Heat-treatable Al-Mg-Si (6000 series) alloy.",
    "dataAccess": "full",
    "scope": "Heat-treatable Al-Mg-Si (6000 series) alloy. Good strength-to-weight, corrosion resistance and weldability; widely used for structural, marine and machined parts. A6061-T6 is precipitation hardened. Equivalent to AA 6061.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "0.40-0.80"
      },
      {
        "element": "Fe",
        "range": "<= 0.70"
      },
      {
        "element": "Cu",
        "range": "0.15-0.40"
      },
      {
        "element": "Mn",
        "range": "<= 0.15"
      },
      {
        "element": "Mg",
        "range": "0.8-1.2"
      },
      {
        "element": "Cr",
        "range": "0.04-0.35"
      },
      {
        "element": "Zn",
        "range": "<= 0.25"
      },
      {
        "element": "Ti",
        "range": "<= 0.15"
      },
      {
        "element": "Al",
        "range": "remainder"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper O",
        "value": "Tensile Strength MPa: <= 150; Proof Stress 0.2 MPa: <= 85; Elongation Percent: >= 16"
      },
      {
        "label": "Temper T6",
        "value": "Tensile Strength MPa: >= 265; Proof Stress 0.2 MPa: >= 245; Elongation Percent: >= 8"
      },
      {
        "label": "Density G Cm3",
        "value": "2.7%"
      }
    ],
    "jisNumber": "H4000"
  },
  {
    "standardBody": "JIS",
    "designation": "H4040",
    "fullCode": "JIS H4040",
    "title": "Aluminium and aluminium alloy rods, bars and wires",
    "materialType": "Aluminum",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Wrought aluminium and aluminium alloy rods, bars and wires for structural and machining use, covering the common wrought alloy series and tempers.",
    "dataAccess": "restricted",
    "jisNumber": "H4040"
  },
  {
    "standardBody": "JIS",
    "designation": "Z2241",
    "fullCode": "JIS Z2241",
    "title": "Metallic materials - Tensile testing - Method of test at room temperature",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the method for tensile testing of metallic materials at room temperature and the mechanical properties determined; aligned with ISO 6892-1.",
    "dataAccess": "restricted",
    "jisNumber": "Z2241"
  },
  {
    "standardBody": "JIS",
    "designation": "Z2242",
    "fullCode": "JIS Z2242",
    "title": "Method for Charpy pendulum impact test of metallic materials",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Specifies the Charpy V-notch and U-notch pendulum impact test method for determining the absorbed energy (toughness) of metallic materials; aligned with ISO 148-1.",
    "dataAccess": "restricted",
    "jisNumber": "Z2242"
  },
  {
    "standardBody": "JIS",
    "designation": "H4000 A2017",
    "fullCode": "JIS H4000 A2017",
    "title": "Wrought aluminium alloy A2017 (Al-Cu duralumin)",
    "materialType": "Aluminum",
    "application": [
      "Aerospace",
      "General Engineering"
    ],
    "status": "active",
    "description": "Al-Cu-Mg heat-treatable wrought aluminium alloy (classic duralumin) with high strength and good machinability but limited corrosion resistance. Used for machine parts, structural fittings, bolts and rivets. Equivalent to AA 2017.",
    "dataAccess": "full",
    "scope": "Al-Cu-Mg heat-treatable wrought aluminium alloy (classic duralumin) with high strength and good machinability but limited corrosion resistance. Used for machine parts, structural fittings, bolts and rivets. Equivalent to AA 2017 / EN AW-2017A.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "0.20-0.80"
      },
      {
        "element": "Fe",
        "range": "<= 0.70"
      },
      {
        "element": "Cu",
        "range": "3.50-4.50"
      },
      {
        "element": "Mn",
        "range": "0.40-1.00"
      },
      {
        "element": "Mg",
        "range": "0.40-0.80"
      },
      {
        "element": "Cr",
        "range": "<= 0.10"
      },
      {
        "element": "Zn",
        "range": "<= 0.25"
      },
      {
        "element": "Ti",
        "range": "<= 0.15"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "T4 (solution treated and naturally aged)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 355"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 215"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 12"
      },
      {
        "label": "Hardness HB",
        "value": "approx 105"
      }
    ],
    "jisNumber": "H4000"
  },
  {
    "standardBody": "JIS",
    "designation": "H4000 A7075",
    "fullCode": "JIS H4000 A7075",
    "title": "Wrought aluminium alloy A7075 (Al-Zn-Mg-Cu)",
    "materialType": "Aluminum",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Al-Zn-Mg-Cu high-strength heat-treatable wrought aluminium alloy, one of the strongest aluminium alloys, with good fatigue strength. Used for highly stressed aircraft structural parts, moulds and sporting goods. Equivalent to AA 7075.",
    "dataAccess": "full",
    "scope": "Al-Zn-Mg-Cu high-strength heat-treatable wrought aluminium alloy, one of the strongest aluminium alloys, with good fatigue strength. Used for highly stressed aircraft structural parts, moulds and sporting goods. Equivalent to AA 7075 / EN AW-7075.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "<= 0.40"
      },
      {
        "element": "Fe",
        "range": "<= 0.50"
      },
      {
        "element": "Cu",
        "range": "1.20-2.00"
      },
      {
        "element": "Mn",
        "range": "<= 0.30"
      },
      {
        "element": "Mg",
        "range": "2.10-2.90"
      },
      {
        "element": "Cr",
        "range": "0.18-0.28"
      },
      {
        "element": "Zn",
        "range": "5.10-6.10"
      },
      {
        "element": "Ti",
        "range": "<= 0.20"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "T6 (solution treated and artificially aged)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 525"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 460"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 7"
      },
      {
        "label": "Hardness HB",
        "value": "approx 150"
      }
    ],
    "jisNumber": "H4000"
  },
  {
    "standardBody": "JIS",
    "designation": "H3100 C2600",
    "fullCode": "JIS H3100 C2600",
    "title": "Copper alloy C2600 - cartridge brass (70/30)",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "70Cu-30Zn cartridge brass with excellent cold formability (the best plasticity among the brasses) and good strength. Used for deep-drawn parts, electronic components, terminals, springs, sockets and bellows. Equivalent to UNS C26000.",
    "dataAccess": "full",
    "scope": "70Cu-30Zn cartridge brass with excellent cold formability (the best plasticity among the brasses) and good strength. Used for deep-drawn parts, electronic components, terminals, springs, sockets and bellows. Equivalent to UNS C26000 / CuZn30.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "68.5-71.5"
      },
      {
        "element": "Pb",
        "range": "<= 0.03"
      },
      {
        "element": "Fe",
        "range": "<= 0.10"
      },
      {
        "element": "Zn",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength MPa (Annealed, O)",
        "value": ">= 275"
      },
      {
        "label": "Elongation Percent (Annealed, O)",
        "value": ">= 35"
      },
      {
        "label": "Tensile Strength MPa (Hard, H04)",
        "value": "410-540"
      }
    ],
    "jisNumber": "H3100"
  },
  {
    "standardBody": "JIS",
    "designation": "H3250 C3604",
    "fullCode": "JIS H3250 C3604",
    "title": "Copper alloy C3604 - free-cutting (leaded) brass",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Leaded free-cutting brass with excellent machinability, one of the most widely used brasses for automatic-lathe machined parts, screws, valves, fittings and electrical connectors. Equivalent to UNS C36000 (close) / CuZn39Pb3.",
    "dataAccess": "full",
    "scope": "Leaded free-cutting brass with excellent machinability, one of the most widely used brasses for automatic-lathe machined parts, screws, valves, fittings and electrical connectors. Equivalent to UNS C36000 (close) / DIN CuZn39Pb3 / GB HPb59-3.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "57.0-61.0"
      },
      {
        "element": "Pb",
        "range": "1.8-3.7"
      },
      {
        "element": "Fe",
        "range": "<= 0.50"
      },
      {
        "element": "Fe + Sn",
        "range": "<= 1.2"
      },
      {
        "element": "Zn",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "half hard / drawn (F)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 335"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 20"
      },
      {
        "label": "Hardness HV",
        "value": ">= 80"
      }
    ],
    "jisNumber": "H3250"
  },
  {
    "standardBody": "JIS",
    "designation": "G5501 FC200",
    "fullCode": "JIS G5501 FC200",
    "title": "Grey (flake graphite) iron casting grade FC200",
    "materialType": "Cast Iron",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Grey cast iron with flake graphite classified by minimum tensile strength 200 MPa. Good castability, machinability, damping capacity and wear resistance. Used for cylinder blocks and heads, clutch housings, flywheels, gearboxes and machine bases. Roughly equivalent to ASTM Class 30.",
    "dataAccess": "full",
    "scope": "Grey cast iron with flake graphite classified by min. tensile strength 200 MPa. Good castability, machinability, damping capacity and wear resistance. Used for cylinder blocks and heads, clutch housings, flywheels, gearboxes, machine bases and compressor frames. Roughly equivalent to ASTM Class 30 / EN GJL-200.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "3.10-3.40 (typical)"
      },
      {
        "element": "Si",
        "range": "1.90-2.30 (typical)"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90 (typical)"
      },
      {
        "element": "P",
        "range": "<= 0.30"
      },
      {
        "element": "S",
        "range": "<= 0.15"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "as-cast (separately cast test bar)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 200"
      },
      {
        "label": "Hardness HB",
        "value": "<= 223"
      },
      {
        "label": "Compressive Strength MPa",
        "value": "approx 720"
      }
    ],
    "jisNumber": "G5501"
  },
  {
    "standardBody": "JIS",
    "designation": "G5502 FCD450",
    "fullCode": "JIS G5502 FCD450",
    "title": "Spheroidal graphite (ductile) iron casting grade FCD450-10",
    "materialType": "Cast Iron",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Ferritic spheroidal-graphite (ductile/nodular) cast iron classified by minimum tensile strength 450 MPa. Combines high strength with good ductility from its nodular graphite microstructure. Used for machine bases, housings, gears, crankshafts and pipe fittings. Roughly equivalent to ASTM 65-45-12.",
    "dataAccess": "full",
    "scope": "Ferritic spheroidal-graphite (ductile/nodular) cast iron classified by min. tensile strength 450 MPa. Combines high strength with good ductility from its nodular graphite microstructure. Used for machine bases, housings, gears, crankshafts and pipe fittings. Roughly equivalent to ASTM 65-45-12 / EN GJS-450-10.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "3.50-4.00 (typical)"
      },
      {
        "element": "Si",
        "range": "2.00-2.70 (typical)"
      },
      {
        "element": "Mn",
        "range": "<= 0.50"
      },
      {
        "element": "P",
        "range": "<= 0.06"
      },
      {
        "element": "S",
        "range": "<= 0.03"
      },
      {
        "element": "Mg",
        "range": "0.03-0.06 (nodulizer)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "as-cast"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 450"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 310"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 10"
      },
      {
        "label": "Hardness HB",
        "value": "140-210"
      }
    ],
    "jisNumber": "G5502"
  },
  {
    "standardBody": "JIS",
    "designation": "G4051 S50C",
    "fullCode": "JIS G4051 S50C",
    "title": "Carbon steels for machine structural use - grade S50C",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Medium-carbon steel (~0.50% C) for machine structural use; bars and forgings for shafts, gears, keys, studs and machine parts requiring higher strength than S45C. Commonly quenched and tempered. Equivalent to AISI 1050 / DIN C50.",
    "dataAccess": "full",
    "scope": "Medium-carbon steel (~0.50% C) for machine structural use; bars and forgings for shafts, gears, keys, studs and machine parts requiring higher strength than S45C. Commonly quenched and tempered. Equivalent to AISI 1050 / DIN C50.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.47-0.53"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.035"
      },
      {
        "element": "Cu",
        "range": "<= 0.30"
      },
      {
        "element": "Ni",
        "range": "<= 0.20"
      },
      {
        "element": "Cr",
        "range": "<= 0.20"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered (typical)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 630"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 375"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 14"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 40"
      },
      {
        "label": "Hardness Normalized HB",
        "value": "179-235"
      }
    ],
    "jisNumber": "G4051"
  },
  {
    "standardBody": "JIS",
    "designation": "G4053 SCM435",
    "fullCode": "JIS G4053 SCM435",
    "title": "Low-alloyed steels for machine structural use - chromium molybdenum steel grade SCM435",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "Construction"
    ],
    "status": "active",
    "description": "Chromium-molybdenum (chromoly) low-alloy steel (~0.35% C) with high strength and toughness after quenching and tempering. Used for high-tensile bolts, shafts, gears, connecting rods and aircraft/automotive structural parts. Equivalent to AISI 4135 / DIN 34CrMo4.",
    "dataAccess": "full",
    "scope": "Chromium-molybdenum (chromoly) low-alloy steel (~0.35% C) with high strength and toughness after quenching and tempering. Used for high-tensile bolts, shafts, gears, connecting rods and aircraft/automotive structural parts. Equivalent to AISI 4135 / DIN 34CrMo4.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.33-0.38"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "0.90-1.20"
      },
      {
        "element": "Mo",
        "range": "0.15-0.30"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 930"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 785"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 15"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 50"
      },
      {
        "label": "Impact Energy J",
        "value": ">= 55"
      }
    ],
    "jisNumber": "G4053"
  },
  {
    "standardBody": "JIS",
    "designation": "G4404 SKD11",
    "fullCode": "JIS G4404 SKD11",
    "title": "Alloy tool steel grade SKD11 - cold work die steel",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "High-carbon high-chromium (12% Cr) cold-work alloy tool steel with excellent wear resistance and dimensional stability on hardening. Used for cold forming dies, blanking and forming punches, shear blades and thread rolling dies. Equivalent to AISI D2 / DIN 1.2379.",
    "dataAccess": "full",
    "scope": "High-carbon high-chromium (12% Cr) cold-work alloy tool steel with excellent wear resistance and dimensional stability on hardening. Used for cold forming dies, blanking and forming punches, shear blades and thread rolling dies. Equivalent to AISI D2 / DIN 1.2379.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "1.40-1.60"
      },
      {
        "element": "Si",
        "range": "<= 0.40"
      },
      {
        "element": "Mn",
        "range": "<= 0.60"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "11.00-13.00"
      },
      {
        "element": "Mo",
        "range": "0.80-1.20"
      },
      {
        "element": "V",
        "range": "0.20-0.50"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Annealed HB",
        "value": "<= 255"
      },
      {
        "label": "Hardness Hardened HRC",
        "value": ">= 58 (quenched and tempered)"
      }
    ],
    "jisNumber": "G4404"
  },
  {
    "standardBody": "JIS",
    "designation": "G4404 SKD61",
    "fullCode": "JIS G4404 SKD61",
    "title": "Alloy tool steel grade SKD61 - hot work die steel",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Chromium-molybdenum-vanadium hot-work alloy tool steel with high hot strength, thermal fatigue and heat-checking resistance. Used for die-casting dies, hot forging and extrusion tooling, and plastic moulds. Equivalent to AISI H13 / DIN 1.2344.",
    "dataAccess": "full",
    "scope": "Chromium-molybdenum-vanadium hot-work alloy tool steel with high hot strength, thermal fatigue and heat-checking resistance. Used for die-casting dies, hot forging and extrusion tooling, and plastic moulds. Equivalent to AISI H13 / DIN 1.2344.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.35-0.42"
      },
      {
        "element": "Si",
        "range": "0.80-1.20"
      },
      {
        "element": "Mn",
        "range": "0.25-0.50"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.020"
      },
      {
        "element": "Cr",
        "range": "4.80-5.50"
      },
      {
        "element": "Mo",
        "range": "1.00-1.50"
      },
      {
        "element": "V",
        "range": "0.80-1.50"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Annealed HB",
        "value": "<= 229"
      },
      {
        "label": "Hardness Hardened HRC",
        "value": "45-52 (quenched and tempered)"
      }
    ],
    "jisNumber": "G4404"
  },
  {
    "standardBody": "JIS",
    "designation": "G4403 SKH51",
    "fullCode": "JIS G4403 SKH51",
    "title": "High speed tool steel grade SKH51 - molybdenum type",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Molybdenum-tungsten (Mo-W) general-purpose high speed tool steel with a balanced combination of toughness and wear resistance. Used for drills, taps, milling cutters, broaches, cold-forming tools and punches. Equivalent to AISI M2 / DIN 1.3343.",
    "dataAccess": "full",
    "scope": "Molybdenum-tungsten (Mo-W) general-purpose high speed tool steel with a balanced combination of toughness and wear resistance. Used for drills, taps, milling cutters, broaches, cold-forming tools and punches. Equivalent to AISI M2 / DIN 1.3343.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.80-0.88"
      },
      {
        "element": "Si",
        "range": "<= 0.45"
      },
      {
        "element": "Mn",
        "range": "<= 0.40"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "3.80-4.50"
      },
      {
        "element": "Mo",
        "range": "4.70-5.20"
      },
      {
        "element": "W",
        "range": "5.90-6.70"
      },
      {
        "element": "V",
        "range": "1.70-2.10"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Annealed HB",
        "value": "<= 262"
      },
      {
        "label": "Hardness Hardened HRC",
        "value": ">= 63 (hardened and tempered)"
      }
    ],
    "jisNumber": "G4403"
  },
  {
    "standardBody": "JIS",
    "designation": "G4103 SNCM420",
    "fullCode": "JIS G4103 SNCM420",
    "title": "Nickel chromium molybdenum steels - case hardening grade SNCM420",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "Construction"
    ],
    "status": "active",
    "description": "Low-carbon nickel-chromium-molybdenum case-hardening (carburizing) alloy steel combining a hard wear-resistant case with a tough core. Used for heavy-duty gears, drive shafts, bearings and cams. Equivalent to AISI 4320 / DIN 20NiCrMo7.",
    "dataAccess": "full",
    "scope": "Low-carbon nickel-chromium-molybdenum case-hardening (carburizing) alloy steel combining a hard wear-resistant case with a tough core. Used for heavy-duty gears, drive shafts, bearings and cams. Equivalent to AISI 4320 / DIN 20NiCrMo7.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.17-0.23"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "0.40-0.70"
      },
      {
        "element": "P",
        "range": "<= 0.030"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Ni",
        "range": "1.55-2.00"
      },
      {
        "element": "Cr",
        "range": "0.40-0.65"
      },
      {
        "element": "Mo",
        "range": "0.15-0.30"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "carburized, quenched and tempered"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 980"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 835"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 15"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 40"
      },
      {
        "label": "Impact Energy J",
        "value": ">= 69"
      }
    ],
    "jisNumber": "G4103"
  },
  {
    "standardBody": "JIS",
    "designation": "G4805 SUJ2",
    "fullCode": "JIS G4805 SUJ2",
    "title": "High carbon chromium bearing steel grade SUJ2",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "High-carbon (~1% C) chromium bearing steel for through-hardened rolling bearing rings, balls and rollers. Excellent wear resistance, fatigue strength and hardenability. Equivalent to AISI 52100 / DIN 100Cr6 / EN31.",
    "dataAccess": "full",
    "scope": "High-carbon (~1% C) chromium bearing steel for through-hardened rolling bearing rings, balls and rollers. Excellent wear resistance, fatigue strength and hardenability. Equivalent to AISI 52100 / DIN 100Cr6 / EN31.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.95-1.10"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Mn",
        "range": "<= 0.50"
      },
      {
        "element": "P",
        "range": "<= 0.025"
      },
      {
        "element": "S",
        "range": "<= 0.025"
      },
      {
        "element": "Cr",
        "range": "1.30-1.60"
      },
      {
        "element": "Mo",
        "range": "<= 0.08"
      },
      {
        "element": "Ni",
        "range": "<= 0.25"
      },
      {
        "element": "Cu",
        "range": "<= 0.20"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Annealed HB",
        "value": "<= 201 (spheroidize annealed)"
      },
      {
        "label": "Hardness Hardened HRC",
        "value": "60-65 (quenched and tempered)"
      }
    ],
    "jisNumber": "G4805"
  },
  {
    "standardBody": "JIS",
    "designation": "G4303 SUS303",
    "fullCode": "JIS G4303 SUS303",
    "title": "Austenitic free-cutting stainless steel grade SUS303",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "18Cr-8Ni austenitic stainless steel with added sulfur and phosphorus for free machining. Non-magnetic; excellent machinability but reduced weldability and corrosion resistance versus SUS304. Used for shafts, nuts, bolts and machined fittings. Equivalent to AISI 303 / UNS S30300.",
    "dataAccess": "full",
    "scope": "18Cr-8Ni austenitic stainless steel with added sulfur and phosphorus for free machining. Non-magnetic; excellent machinability but reduced weldability and corrosion resistance versus SUS304. Used for shafts, nuts, bolts and machined fittings. Equivalent to AISI 303 / UNS S30300.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.15"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 2.00"
      },
      {
        "element": "P",
        "range": "<= 0.20"
      },
      {
        "element": "S",
        "range": ">= 0.15"
      },
      {
        "element": "Cr",
        "range": "17.00-19.00"
      },
      {
        "element": "Ni",
        "range": "8.00-10.00"
      },
      {
        "element": "Mo",
        "range": "<= 0.60"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution treated (bars)"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 520"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 205"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 40"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 50"
      },
      {
        "label": "Hardness HB",
        "value": "<= 187"
      }
    ],
    "jisNumber": "G4303"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS410",
    "fullCode": "JIS G4304 SUS410",
    "title": "Martensitic stainless steel grade SUS410",
    "materialType": "Stainless Steel",
    "application": [
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "12% Cr martensitic stainless steel, hardenable by quenching and tempering. Magnetic; moderate corrosion resistance with good strength. Used for turbine blades, valves, bolts, cutlery and general machine parts. Equivalent to AISI 410 / UNS S41000.",
    "dataAccess": "full",
    "scope": "12% Cr martensitic stainless steel, hardenable by quenching and tempering. Magnetic; moderate corrosion resistance with good strength. Used for turbine blades, valves, bolts, cutlery and general machine parts. Equivalent to AISI 410 / UNS S41000.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.15"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 1.00"
      },
      {
        "element": "P",
        "range": "<= 0.040"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "11.50-13.50"
      },
      {
        "element": "Ni",
        "range": "<= 0.60"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 540"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 345"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 25"
      },
      {
        "label": "Reduction Of Area Percent",
        "value": ">= 60"
      },
      {
        "label": "Hardness Annealed HB",
        "value": "<= 183"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS420J2",
    "fullCode": "JIS G4304 SUS420J2",
    "title": "Martensitic stainless steel grade SUS420J2",
    "materialType": "Stainless Steel",
    "application": [
      "Medical",
      "General Engineering"
    ],
    "status": "active",
    "description": "13% Cr high-carbon martensitic stainless steel; higher carbon than SUS410 for greater hardness and wear resistance. Used for cutlery, surgical instruments, plastic moulds, valve parts and bearings. Equivalent to AISI 420 / UNS S42000.",
    "dataAccess": "full",
    "scope": "13% Cr high-carbon martensitic stainless steel; higher carbon than SUS410 for greater hardness and wear resistance. Used for cutlery, surgical instruments, plastic moulds, valve parts and bearings. Equivalent to AISI 420 / UNS S42000.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.26-0.40"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 1.00"
      },
      {
        "element": "P",
        "range": "<= 0.040"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "12.00-14.00"
      },
      {
        "element": "Ni",
        "range": "<= 0.60"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 640"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 440"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 12"
      },
      {
        "label": "Hardness Quenched HRC",
        "value": ">= 50"
      },
      {
        "label": "Hardness Annealed HB",
        "value": "<= 235"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4304 SUS430",
    "fullCode": "JIS G4304 SUS430",
    "title": "Ferritic stainless steel grade SUS430",
    "materialType": "Stainless Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "16-18% Cr ferritic, nickel-free stainless steel. Magnetic, not hardenable by heat treatment; good corrosion and oxidation resistance. Used for kitchenware, trim, appliance panels and automotive exhaust parts. Equivalent to AISI 430 / UNS S43000.",
    "dataAccess": "full",
    "scope": "16-18% Cr ferritic, nickel-free stainless steel. Magnetic, not hardenable by heat treatment; good corrosion and oxidation resistance. Used for kitchenware, trim, appliance panels and automotive exhaust parts. Equivalent to AISI 430 / UNS S43000.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "<= 0.12"
      },
      {
        "element": "Si",
        "range": "<= 1.00"
      },
      {
        "element": "Mn",
        "range": "<= 1.00"
      },
      {
        "element": "P",
        "range": "<= 0.040"
      },
      {
        "element": "S",
        "range": "<= 0.030"
      },
      {
        "element": "Cr",
        "range": "16.00-18.00"
      },
      {
        "element": "Ni",
        "range": "<= 0.60"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "annealed"
      },
      {
        "label": "Tensile Strength MPa",
        "value": ">= 420"
      },
      {
        "label": "Yield Strength MPa",
        "value": ">= 205"
      },
      {
        "label": "Elongation Percent",
        "value": ">= 22"
      },
      {
        "label": "Hardness HB",
        "value": "<= 183"
      },
      {
        "label": "Density G Cm3",
        "value": "7.70"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "200"
      }
    ],
    "jisNumber": "G4304"
  },
  {
    "standardBody": "JIS",
    "designation": "G4103",
    "fullCode": "JIS G4103",
    "title": "Nickel chromium molybdenum steels",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "Construction"
    ],
    "status": "active",
    "description": "Low-alloy nickel-chromium-molybdenum structural steel bars for machine use, covering through-hardening and case-hardening grades (SNCM220, SNCM420, SNCM439, SNCM630, etc.) for gears, shafts and highly stressed parts.",
    "dataAccess": "restricted",
    "jisNumber": "G4103"
  },
  {
    "standardBody": "JIS",
    "designation": "G4401",
    "fullCode": "JIS G4401",
    "title": "Carbon tool steels",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "High-carbon plain carbon tool steels (grades SK140 to SK60, formerly SK1-SK7) for cutting tools, files, chisels, punches, springs and hand tools.",
    "dataAccess": "restricted",
    "jisNumber": "G4401"
  },
  {
    "standardBody": "JIS",
    "designation": "G4403",
    "fullCode": "JIS G4403",
    "title": "High speed tool steels",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Tungsten-type and molybdenum-type high speed tool steels (SKH2, SKH51, SKH55, SKH57, etc.) retaining hardness at elevated temperature, used for drills, taps, milling cutters and forming tools.",
    "dataAccess": "restricted",
    "jisNumber": "G4403"
  },
  {
    "standardBody": "JIS",
    "designation": "G4404",
    "fullCode": "JIS G4404",
    "title": "Alloy tool steels",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Alloy tool steels grouped into cold-work die steels (SKD1, SKD11), hot-work die steels (SKD6, SKD61, SKT4) and shock/cutting grades (SKS series), used for dies, moulds, punches and shear blades.",
    "dataAccess": "restricted",
    "jisNumber": "G4404"
  },
  {
    "standardBody": "JIS",
    "designation": "G4805",
    "fullCode": "JIS G4805",
    "title": "High carbon chromium bearing steels",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "High-carbon chromium bearing steels (SUJ2, SUJ3, SUJ4, SUJ5) for rolling bearing rings, balls and rollers requiring high hardness, wear resistance and rolling-contact fatigue strength.",
    "dataAccess": "restricted",
    "jisNumber": "G4805"
  },
  {
    "standardBody": "JIS",
    "designation": "G4801",
    "fullCode": "JIS G4801",
    "title": "Spring steels",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Hot-rolled spring steel bars in silicon-manganese, manganese-chromium and chromium-vanadium grades (SUP6, SUP9, SUP10, SUP11A, etc.) for leaf and coil springs and torsion bars.",
    "dataAccess": "restricted",
    "jisNumber": "G4801"
  },
  {
    "standardBody": "JIS",
    "designation": "G3131",
    "fullCode": "JIS G3131",
    "title": "Hot-rolled mild steel plates, sheet and strip",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Hot-rolled low-carbon mild steel flat products for general forming and drawing (grades SPHC, SPHD, SPHE, SPHF) used in automotive, appliance and general fabrication.",
    "dataAccess": "restricted",
    "jisNumber": "G3131"
  },
  {
    "standardBody": "JIS",
    "designation": "G3141",
    "fullCode": "JIS G3141",
    "title": "Cold-reduced carbon steel sheet and strip",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Cold-rolled low-carbon steel sheet and strip for forming (grades SPCC, SPCD, SPCE, SPCF, SPCG) with good surface finish, widely used for automotive body panels and appliances.",
    "dataAccess": "restricted",
    "jisNumber": "G3141"
  },
  {
    "standardBody": "JIS",
    "designation": "H3250",
    "fullCode": "JIS H3250",
    "title": "Copper and copper alloy rods and bars",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Extruded and drawn copper and copper alloy rods and bars including tough pitch copper, brasses and free-cutting leaded brass (C2600, C3601, C3604, C3771, etc.) for machined parts and fasteners.",
    "dataAccess": "restricted",
    "jisNumber": "H3250"
  },
  {
    "standardBody": "JIS",
    "designation": "H3300",
    "fullCode": "JIS H3300",
    "title": "Copper and copper alloy seamless pipes and tubes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Seamless copper and copper alloy tubes (phosphorus-deoxidised copper C1220, brasses, cupro-nickels) for heat exchangers, plumbing, air-conditioning and general piping.",
    "dataAccess": "restricted",
    "jisNumber": "H3300"
  },
  {
    "standardBody": "JIS",
    "designation": "G5502",
    "fullCode": "JIS G5502",
    "title": "Spheroidal graphite iron castings",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Spheroidal-graphite (ductile/nodular) cast iron classified by tensile strength and elongation (FCD350 to FCD800), covering ferritic to pearlitic grades for high-strength ductile castings.",
    "dataAccess": "restricted",
    "jisNumber": "G5502"
  }
];
