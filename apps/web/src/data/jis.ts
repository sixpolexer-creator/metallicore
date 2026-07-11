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
  }
];
