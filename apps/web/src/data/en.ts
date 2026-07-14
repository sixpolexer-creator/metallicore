/**
 * ISOLATED DATA MODULE — EN standards only. Ingested from
 * `data/standards_research/EN` (see that directory's
 * per-designation JSON files and `EN_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY EN records, typed as
 * EnStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by EN — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { EnStandard } from '@/types/standard';

export const enStandards: EnStandard[] = [
  {
    "standardBody": "EN",
    "designation": "10025-1",
    "fullCode": "EN 10025-1",
    "title": "Hot rolled products of structural steels - Part 1: General technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "General technical delivery conditions common to all parts of EN 10025; applies to flat and long hot rolled structural steel products for welded, bolted and riveted structures.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10025-2",
    "fullCode": "EN 10025-2",
    "title": "Hot rolled products of structural steels - Part 2: Technical delivery conditions for non-alloy structural steels",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Non-alloy structural steel grades S235, S275, S355, S450 with quality subgrades JR/J0/J2/K2 defining impact toughness.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10025-2 S235JR",
    "fullCode": "EN 10025-2 S235JR",
    "title": "Hot rolled non-alloy structural steel S235JR (material number 1.0038)",
    "materialType": "Steel",
    "application": [
      "Construction",
      "Energy"
    ],
    "status": "active",
    "description": "Non-alloy structural steel (mild steel) for general structural use in bolted and welded construction.",
    "dataAccess": "full",
    "scope": "Non-alloy structural steel (mild steel) for general structural use in bolted and welded construction. 'S'=structural, '235'=min yield strength (MPa) for thickness <=16 mm, 'JR'=Charpy V-notch impact energy 27 J at +20 degC.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.17% max"
      },
      {
        "element": "Si",
        "range": "0.2% max"
      },
      {
        "element": "Mn",
        "range": "1.4% max"
      },
      {
        "element": "P",
        "range": "0.045% max"
      },
      {
        "element": "S",
        "range": "0.045% max"
      },
      {
        "element": "N",
        "range": "0.012% max"
      },
      {
        "element": "Cu",
        "range": "0.55% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H MPa",
        "value": "T Le 16mm: 235; T 16 40mm: 225; T 40 100mm: 215"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "360-510 (t <= 3mm to 100mm range)"
      },
      {
        "label": "Elongation A % Min",
        "value": "26%"
      },
      {
        "label": "Impact Energy J",
        "value": "27%"
      },
      {
        "label": "Impact Test Temp C",
        "value": "20%"
      }
    ],
    "materialNumber": "1.0038"
  },
  {
    "standardBody": "EN",
    "designation": "10025-2 S275JR",
    "fullCode": "EN 10025-2 S275JR",
    "title": "Hot rolled non-alloy structural steel S275JR (material number 1.0044)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Non-alloy structural steel offering moderate strength, good weldability and impact resistance at +20 degC.",
    "dataAccess": "full",
    "scope": "Non-alloy structural steel offering moderate strength, good weldability and impact resistance at +20 degC. 'S'=structural, '275'=min yield strength (MPa) for t <=16 mm, 'JR'=27 J at +20 degC.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.22% max"
      },
      {
        "element": "Mn",
        "range": "1.5% max"
      },
      {
        "element": "P",
        "range": "0.04% max"
      },
      {
        "element": "S",
        "range": "0.04% max"
      },
      {
        "element": "N",
        "range": "0.012% max"
      },
      {
        "element": "Cu",
        "range": "0.55% max"
      },
      {
        "element": "CEV",
        "range": "0.42% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H MPa",
        "value": "T Le 16mm: 275; T 16 40mm: 265; T 40 100mm: 255"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "410-560"
      },
      {
        "label": "Elongation A % Min",
        "value": "23%"
      },
      {
        "label": "Impact Energy J",
        "value": "27%"
      },
      {
        "label": "Impact Test Temp C",
        "value": "20%"
      }
    ],
    "materialNumber": "1.0044"
  },
  {
    "standardBody": "EN",
    "designation": "10025-2 S355J2",
    "fullCode": "EN 10025-2 S355J2",
    "title": "Hot rolled non-alloy structural steel S355J2 (material number 1.0577)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Fine-grain non-alloy structural steel widely used in construction, bridges and heavy engineering for its strength, toughness and weldability.",
    "dataAccess": "full",
    "scope": "Fine-grain non-alloy structural steel widely used in construction, bridges and heavy engineering for its strength, toughness and weldability. 'S'=structural, '355'=min yield strength (MPa) for t <=16 mm, 'J2'=Charpy 27 J at -20 degC.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.22% max"
      },
      {
        "element": "Si",
        "range": "0.55% max"
      },
      {
        "element": "Mn",
        "range": "1.6% max"
      },
      {
        "element": "P",
        "range": "0.03% max"
      },
      {
        "element": "S",
        "range": "0.03% max"
      },
      {
        "element": "Cu",
        "range": "0.55% max"
      },
      {
        "element": "CEV",
        "range": "0.47% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H MPa",
        "value": "T Le 16mm: 355; T 16 40mm: 345; T 40 63mm: 335"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "470-630 (t <= 100mm)"
      },
      {
        "label": "Elongation A % Min",
        "value": "20%"
      },
      {
        "label": "Impact Energy J",
        "value": "27%"
      },
      {
        "label": "Impact Test Temp C",
        "value": "-20%"
      }
    ],
    "materialNumber": "1.0577"
  },
  {
    "standardBody": "EN",
    "designation": "10025-3",
    "fullCode": "EN 10025-3",
    "title": "Hot rolled products of structural steels - Part 3: Technical delivery conditions for normalized/normalized rolled weldable fine grain structural steels",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Normalized (N/NL) weldable fine grain structural steels, grades S275N to S460NL, for improved toughness at low temperatures.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10025-4",
    "fullCode": "EN 10025-4",
    "title": "Hot rolled products of structural steels - Part 4: Technical delivery conditions for thermomechanical rolled weldable fine grain structural steels",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Thermomechanically rolled (M/ML) weldable fine grain structural steels, grades S275M to S460ML, offering low carbon equivalent and good weldability.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10025-5",
    "fullCode": "EN 10025-5",
    "title": "Hot rolled products of structural steels - Part 5: Technical delivery conditions for structural steels with improved atmospheric corrosion resistance",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Weathering steels (grades S235W, S355W etc.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10025-6",
    "fullCode": "EN 10025-6",
    "title": "Hot rolled products of structural steels - Part 6: Technical delivery conditions for flat products of high yield strength structural steels in the quenched and tempered condition",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "High yield strength quenched and tempered (Q) flat structural steels, grades S460Q to S960Q, for demanding structural applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10083-1",
    "fullCode": "EN 10083-1",
    "title": "Steels for quenching and tempering - Part 1: General technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "General delivery conditions for quenched and tempered steels achieving high strength via quenching from above AC3 followed by tempering (parts 2 non-alloy, 3 alloy steels).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4301 (X5CrNi18-10)",
    "fullCode": "EN 10088 1.4301 (X5CrNi18-10)",
    "title": "Austenitic stainless steel X5CrNi18-10, material number 1.4301 (AISI 304)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Standard austenitic Cr-Ni stainless steel with good weldability and formability; the most widely used stainless grade.",
    "dataAccess": "full",
    "scope": "Standard austenitic Cr-Ni stainless steel with good weldability and formability; the most widely used stainless grade. Not resistant to intergranular corrosion after welding in heavy sections (use 1.4307/304L). Data in solution-annealed condition.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.07% max"
      },
      {
        "element": "Si",
        "range": "1% max"
      },
      {
        "element": "Mn",
        "range": "2% max"
      },
      {
        "element": "P",
        "range": "0.045% max"
      },
      {
        "element": "S",
        "range": "0.015% max"
      },
      {
        "element": "Cr",
        "range": "17.5-19.5"
      },
      {
        "element": "Ni",
        "range": "8.0-10.5"
      },
      {
        "element": "N",
        "range": "0.11% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed"
      },
      {
        "label": "Yield Strength Rp02 MPa Min",
        "value": "190%"
      },
      {
        "label": "Yield Strength Rp10 MPa Min",
        "value": "225%"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "500-700"
      },
      {
        "label": "Elongation A % Min",
        "value": "45%"
      },
      {
        "label": "Hardness HB Max",
        "value": "215%"
      },
      {
        "label": "Density Kg Dm3",
        "value": "7.9%"
      }
    ],
    "materialNumber": "1.4301"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4401 (X5CrNiMo17-12-2)",
    "fullCode": "EN 10088 1.4401 (X5CrNiMo17-12-2)",
    "title": "Austenitic stainless steel X5CrNiMo17-12-2, material number 1.4401 (AISI 316)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine"
    ],
    "status": "active",
    "description": "Molybdenum-bearing austenitic Cr-Ni-Mo stainless steel with improved pitting and chloride corrosion resistance versus 1.",
    "dataAccess": "full",
    "scope": "Molybdenum-bearing austenitic Cr-Ni-Mo stainless steel with improved pitting and chloride corrosion resistance versus 1.4301. Used in marine, chemical and food processing. Data in solution-annealed condition.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.07% max"
      },
      {
        "element": "Si",
        "range": "1% max"
      },
      {
        "element": "Mn",
        "range": "2% max"
      },
      {
        "element": "P",
        "range": "0.045% max"
      },
      {
        "element": "S",
        "range": "0.015% max"
      },
      {
        "element": "Cr",
        "range": "16.5-18.5"
      },
      {
        "element": "Ni",
        "range": "10.0-13.0"
      },
      {
        "element": "Mo",
        "range": "2.0-2.5"
      },
      {
        "element": "N",
        "range": "0.11% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed"
      },
      {
        "label": "Yield Strength Rp02 MPa Min",
        "value": "200%"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "500-700"
      },
      {
        "label": "Elongation A % Min",
        "value": "40%"
      },
      {
        "label": "Hardness HB Max",
        "value": "215%"
      },
      {
        "label": "Density G Cm3",
        "value": "7.98%"
      },
      {
        "label": "PREN",
        "value": "23.1-28.5"
      }
    ],
    "materialNumber": "1.4401"
  },
  {
    "standardBody": "EN",
    "designation": "10088-1",
    "fullCode": "EN 10088-1",
    "title": "Stainless steels - Part 1: List of stainless steels",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Master list of standardized stainless steel grades with chemical compositions and reference physical properties; classifies ferritic, martensitic, austenitic and duplex grades.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10088-2",
    "fullCode": "EN 10088-2",
    "title": "Stainless steels - Part 2: Technical delivery conditions for sheet/plate and strip of corrosion resisting steels for general purposes",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Delivery conditions, mechanical properties and surface finishes for stainless steel flat products (sheet, plate, strip) for general corrosion-resisting applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10088-3",
    "fullCode": "EN 10088-3",
    "title": "Stainless steels - Part 3: Technical delivery conditions for semi-finished products, bars, rods, wire, sections and bright products of corrosion resisting steels for general purposes",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Delivery conditions and mechanical properties for stainless steel long products (bars, rods, wire, sections).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10210-1",
    "fullCode": "EN 10210-1",
    "title": "Hot finished steel structural hollow sections of non-alloy and fine grain steels - Part 1: Technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Hot finished (hot formed and normalized) structural hollow sections (square, rectangular, circular) in non-alloy and fine grain steels; delivery conditions, composition and mechanical properties.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10219-1",
    "fullCode": "EN 10219-1",
    "title": "Cold formed welded steel structural hollow sections of non-alloy and fine grain steels - Part 1: Technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Cold formed welded structural hollow sections in non-alloy and fine grain steels; thinner walls and tighter tolerances than hot finished EN 10210.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "12163",
    "fullCode": "EN 12163",
    "title": "Copper and copper alloys - Rod for general purposes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Technical delivery conditions, composition and mechanical properties for copper and copper alloy rod for general purposes (e.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "12164",
    "fullCode": "EN 12164",
    "title": "Copper and copper alloys - Rod for free machining purposes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Technical delivery conditions for copper alloy rod optimized for free machining, including leaded brasses such as CW614N (CuZn39Pb3).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "12164/12163 CW614N (CuZn39Pb3)",
    "fullCode": "EN 12164/12163 CW614N (CuZn39Pb3)",
    "title": "Leaded free-machining brass CuZn39Pb3, material number CW614N",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "High-lead copper-zinc (brass) alloy optimised for machining and hot stamping; excellent turning/milling performance.",
    "dataAccess": "full",
    "scope": "High-lead copper-zinc (brass) alloy optimised for machining and hot stamping; excellent turning/milling performance. Limited cold formability. Used in fittings, valves, fasteners and (in Pb-controlled variants) drinking-water installations.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "57.0-59.0"
      },
      {
        "element": "Pb",
        "range": "2.5-3.5"
      },
      {
        "element": "Fe",
        "range": "0.3% max"
      },
      {
        "element": "Ni",
        "range": "0.3% max"
      },
      {
        "element": "Al",
        "range": "0.05% max"
      },
      {
        "element": "Sn",
        "range": "0.3% max"
      },
      {
        "element": "Zn",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Strength Classes",
        "value": "R360 / R430 / R500 (number = min tensile strength in MPa)"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "360-500 (class dependent)"
      },
      {
        "label": "Density G Cm3",
        "value": "8.5%"
      },
      {
        "label": "Thermal Expansion 20 200C Per K",
        "value": "0.00001997%"
      }
    ],
    "materialNumber": "CW614N"
  },
  {
    "standardBody": "EN",
    "designation": "1706",
    "fullCode": "EN 1706",
    "title": "Aluminium and aluminium alloys - Castings - Chemical composition and mechanical properties",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Chemical composition and mechanical property requirements for aluminium alloy castings (EN AC-xxxxx designations), covering sand, permanent mould and die casting.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "485",
    "fullCode": "EN 485",
    "title": "Aluminium and aluminium alloys - Sheet, strip and plate",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Technical conditions, mechanical properties and tolerances for aluminium sheet, strip and plate (multi-part: technical conditions, mechanical properties, tolerances on shape/dimensions).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "573-3",
    "fullCode": "EN 573-3",
    "title": "Aluminium and aluminium alloys - Chemical composition and form of wrought products - Part 3: Chemical composition and form of products",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Defines the EN AW-xxxx numeric designation system and chemical composition limits for wrought aluminium alloys (e.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "755",
    "fullCode": "EN 755",
    "title": "Aluminium and aluminium alloys - Extruded rod/bar, tube and profiles",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Technical conditions, dimensional tolerances and mechanical properties for extruded aluminium rod, bar, tube and profiles (multi-part: general, mechanical properties, tolerances).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "AW-5083 (AlMg4.5Mn0.7)",
    "fullCode": "EN AW-5083 (AlMg4.5Mn0.7)",
    "title": "Wrought aluminium alloy EN AW-5083 [AlMg4.5Mn0.7]",
    "materialType": "Aluminum",
    "application": [
      "Marine",
      "Construction",
      "Energy"
    ],
    "status": "active",
    "description": "Non-heat-treatable Al-Mg alloy with the highest strength of the common non-heat-treatable alloys.",
    "dataAccess": "full",
    "scope": "Non-heat-treatable Al-Mg alloy with the highest strength of the common non-heat-treatable alloys. Excellent resistance to seawater and industrial chemicals; used in marine, shipbuilding, pressure vessels and cryogenics. Data below typical for H111/O condition.",
    "chemicalComposition": [
      {
        "element": "Al",
        "range": "balance"
      },
      {
        "element": "Mg",
        "range": "4.0-4.9"
      },
      {
        "element": "Mn",
        "range": "0.4-1.0"
      },
      {
        "element": "Cr",
        "range": "0.05-0.25"
      },
      {
        "element": "Fe",
        "range": "0.4% max"
      },
      {
        "element": "Si",
        "range": "0.4% max"
      },
      {
        "element": "Cu",
        "range": "0.1% max"
      },
      {
        "element": "Zn",
        "range": "0.25% max"
      },
      {
        "element": "Ti",
        "range": "0.15% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper",
        "value": "O / H111 (typical)"
      },
      {
        "label": "Yield Strength Rp02 MPa",
        "value": "~125 (O/H111); 228 typical for work-hardened tempers"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "275-350 (approx 317 typical)"
      },
      {
        "label": "Elongation A %",
        "value": "12-16 (temper dependent)"
      }
    ]
  },
  {
    "standardBody": "EN",
    "designation": "AW-6061 (AlMg1SiCu)",
    "fullCode": "EN AW-6061 (AlMg1SiCu)",
    "title": "Wrought aluminium alloy EN AW-6061 [AlMg1SiCu], material number 3.3211",
    "materialType": "Aluminum",
    "application": [
      "Automotive",
      "Marine",
      "Construction"
    ],
    "status": "active",
    "description": "Medium-strength heat-treatable wrought Al-Mg-Si alloy strengthened by Mg2Si precipitation.",
    "dataAccess": "full",
    "scope": "Medium-strength heat-treatable wrought Al-Mg-Si alloy strengthened by Mg2Si precipitation. Good weldability and atmospheric/seawater corrosion resistance; used in architecture, automotive, railway and structural extrusions. Data below for T6 temper.",
    "chemicalComposition": [
      {
        "element": "Al",
        "range": "balance (95.8-98.6)"
      },
      {
        "element": "Mg",
        "range": "0.8-1.2"
      },
      {
        "element": "Si",
        "range": "0.4-0.8"
      },
      {
        "element": "Fe",
        "range": "0.7% max"
      },
      {
        "element": "Cu",
        "range": "0.15-0.40"
      },
      {
        "element": "Mn",
        "range": "0.15% max"
      },
      {
        "element": "Cr",
        "range": "0.04-0.35"
      },
      {
        "element": "Zn",
        "range": "0.25% max"
      },
      {
        "element": "Ti",
        "range": "0.15% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper",
        "value": "T6"
      },
      {
        "label": "Yield Strength Rp02 MPa",
        "value": "240-280"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "290-338"
      },
      {
        "label": "Elongation A %",
        "value": "10-14"
      },
      {
        "label": "Hardness HB",
        "value": "90-100"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "66-70"
      }
    ],
    "materialNumber": "3.3211"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4310 (X10CrNi18-8)",
    "fullCode": "EN 10088 1.4310 (X10CrNi18-8)",
    "title": "Austenitic spring stainless steel X10CrNi18-8, material number 1.4310 (AISI 301)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Lean austenitic stainless steel with restricted nickel that produces a metastable austenite work-hardening rapidly under cold deformation, allowing very high strength in spring tempers. Used for springs, spring washers, wire, flexible connectors and fasteners.",
    "dataAccess": "full",
    "scope": "Lean austenitic stainless steel with restricted nickel that produces a metastable austenite work-hardening rapidly under cold deformation, allowing very high strength (spring tempers). Used for springs, spring washers, wire, flexible connectors and fasteners.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.05-0.15"
      },
      {
        "element": "Si",
        "range": "max 2.0"
      },
      {
        "element": "Mn",
        "range": "max 2.0"
      },
      {
        "element": "P",
        "range": "max 0.045"
      },
      {
        "element": "S",
        "range": "max 0.015"
      },
      {
        "element": "Cr",
        "range": "16.0-19.0"
      },
      {
        "element": "Ni",
        "range": "6.0-9.5"
      },
      {
        "element": "Mo",
        "range": "max 0.8"
      },
      {
        "element": "N",
        "range": "max 0.11"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed (base); strength increases greatly with cold-rolled spring tempers"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 250 (annealed)"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "600-950 (annealed); up to ~2000 in high cold-work spring temper"
      },
      {
        "label": "Elongation A % Min",
        "value": "40 (annealed)"
      }
    ],
    "materialNumber": "1.4310"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4404 (X2CrNiMo17-12-2)",
    "fullCode": "EN 10088 1.4404 (X2CrNiMo17-12-2)",
    "title": "Austenitic stainless steel X2CrNiMo17-12-2, material number 1.4404 (AISI 316L)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "General Engineering"
    ],
    "status": "active",
    "description": "Low-carbon molybdenum-alloyed austenitic stainless steel; the low carbon (max 0.03%) reduces sensitization for improved intergranular corrosion resistance in the as-welded condition. Widely used in chemical, food, marine and architectural applications.",
    "dataAccess": "full",
    "scope": "Low-carbon molybdenum-alloyed austenitic stainless steel; the low carbon (max 0.03%) reduces sensitization for improved intergranular corrosion resistance in the as-welded condition. Widely used in chemical, food, marine and architectural applications.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.03"
      },
      {
        "element": "Si",
        "range": "max 1.0"
      },
      {
        "element": "Mn",
        "range": "max 2.0"
      },
      {
        "element": "P",
        "range": "max 0.045"
      },
      {
        "element": "S",
        "range": "max 0.015"
      },
      {
        "element": "Cr",
        "range": "16.5-18.5"
      },
      {
        "element": "Mo",
        "range": "2.0-2.5"
      },
      {
        "element": "Ni",
        "range": "10.0-13.0"
      },
      {
        "element": "N",
        "range": "max 0.11"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed (per EN 10088-3, bar/section)"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 200"
      },
      {
        "label": "Proof Strength Rp1.0 MPa",
        "value": ">= 235"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "500-700"
      },
      {
        "label": "Elongation A % Min",
        "value": "40 (longitudinal)"
      },
      {
        "label": "Hardness HB Max",
        "value": "215"
      }
    ],
    "materialNumber": "1.4404"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4462 (X2CrNiMoN22-5-3)",
    "fullCode": "EN 10088 1.4462 (X2CrNiMoN22-5-3)",
    "title": "Duplex stainless steel X2CrNiMoN22-5-3, material number 1.4462 (Duplex 2205, UNS S32205/S31803)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "The most widely used duplex stainless steel, with a roughly 50/50 austenite-ferrite microstructure giving about double the yield strength of standard austenitics plus high resistance to pitting, crevice and stress-corrosion cracking. Used in chemical process, oil and gas, marine and pressure equipment.",
    "dataAccess": "full",
    "scope": "The most widely used duplex stainless steel, with a roughly 50/50 austenite-ferrite microstructure giving about double the yield strength of standard austenitics plus high resistance to pitting, crevice and stress-corrosion cracking. Used in chemical process, oil and gas, marine and pressure equipment.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.03"
      },
      {
        "element": "Si",
        "range": "max 1.0"
      },
      {
        "element": "Mn",
        "range": "max 2.0"
      },
      {
        "element": "P",
        "range": "max 0.035"
      },
      {
        "element": "S",
        "range": "max 0.015"
      },
      {
        "element": "Cr",
        "range": "21.0-23.0"
      },
      {
        "element": "Mo",
        "range": "2.5-3.5"
      },
      {
        "element": "Ni",
        "range": "4.5-6.5"
      },
      {
        "element": "N",
        "range": "0.10-0.22"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed / quench-annealed"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 450"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "640-840"
      },
      {
        "label": "Elongation A % Min",
        "value": "25"
      }
    ],
    "materialNumber": "1.4462"
  },
  {
    "standardBody": "EN",
    "designation": "10088 1.4571 (X6CrNiMoTi17-12-2)",
    "fullCode": "EN 10088 1.4571 (X6CrNiMoTi17-12-2)",
    "title": "Titanium-stabilized austenitic stainless steel X6CrNiMoTi17-12-2, material number 1.4571 (AISI 316Ti)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "General Engineering"
    ],
    "status": "active",
    "description": "Titanium-stabilized molybdenum-alloyed austenitic stainless steel; titanium ties up carbon to prevent chromium-carbide precipitation, giving resistance to intergranular corrosion after welding and improved strength/stability at elevated temperatures.",
    "dataAccess": "full",
    "scope": "Titanium-stabilized molybdenum-alloyed austenitic stainless steel; titanium ties up carbon to prevent chromium-carbide precipitation, giving resistance to intergranular corrosion after welding and improved strength/stability at elevated temperatures (above ~800 C).",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.08"
      },
      {
        "element": "Si",
        "range": "max 1.0"
      },
      {
        "element": "Mn",
        "range": "max 2.0"
      },
      {
        "element": "P",
        "range": "max 0.045"
      },
      {
        "element": "S",
        "range": "max 0.015"
      },
      {
        "element": "Cr",
        "range": "16.5-18.5"
      },
      {
        "element": "Mo",
        "range": "2.0-2.5"
      },
      {
        "element": "Ni",
        "range": "10.5-13.5"
      },
      {
        "element": "Ti",
        "range": "max 0.70 (>= 5xC)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "solution annealed (per EN 10088-3, bar/section <= 160 mm)"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 200"
      },
      {
        "label": "Proof Strength Rp1.0 MPa",
        "value": ">= 235"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "500-700"
      },
      {
        "label": "Elongation A % Min",
        "value": "40"
      },
      {
        "label": "Hardness HB Max",
        "value": "215"
      }
    ],
    "materialNumber": "1.4571"
  },
  {
    "standardBody": "EN",
    "designation": "AC-42100 (AlSi7Mg0.3)",
    "fullCode": "EN AC-42100 (AlSi7Mg0.3)",
    "title": "Aluminium casting alloy EN AC-42100 [Al Si7Mg0.3]",
    "materialType": "Aluminum",
    "application": [
      "Automotive",
      "Aerospace",
      "General Engineering"
    ],
    "status": "active",
    "description": "Hypoeutectic Al-Si-Mg heat-treatable casting alloy with excellent castability, high strength and ductility after T6 and good corrosion resistance. Used for critical sand and permanent-mould castings in automotive, aerospace and machinery.",
    "dataAccess": "full",
    "scope": "Hypoeutectic Al-Si-Mg heat-treatable casting alloy with excellent castability, high strength and ductility after T6 and good corrosion resistance. Used for critical sand and permanent-mould castings in automotive, aerospace and machinery.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "6.5-7.5"
      },
      {
        "element": "Fe",
        "range": "max 0.19"
      },
      {
        "element": "Cu",
        "range": "max 0.05"
      },
      {
        "element": "Mn",
        "range": "max 0.10"
      },
      {
        "element": "Mg",
        "range": "0.25-0.45"
      },
      {
        "element": "Zn",
        "range": "max 0.07"
      },
      {
        "element": "Ti",
        "range": "0.08-0.25"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm MPa (Permanent Mould T6)",
        "value": ">= 290"
      },
      {
        "label": "Proof Strength Rp0.2 MPa (Permanent Mould T6)",
        "value": ">= 210"
      },
      {
        "label": "Elongation A % (Permanent Mould T6)",
        "value": ">= 4"
      },
      {
        "label": "Tensile Strength Rm MPa (Sand T6)",
        "value": ">= 230"
      },
      {
        "label": "Hardness HB",
        "value": "~90-110"
      }
    ],
    "materialNumber": "EN AC-42100"
  },
  {
    "standardBody": "EN",
    "designation": "AC-46000 (AlSi9Cu3(Fe))",
    "fullCode": "EN AC-46000 (AlSi9Cu3(Fe))",
    "title": "Aluminium casting alloy EN AC-46000 [Al Si9Cu3(Fe)]",
    "materialType": "Aluminum",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Hypoeutectic Al-Si-Cu high-pressure die-casting alloy, the most common aluminium die-casting alloy. Good castability, strength and hardness at moderate cost; used widely in automotive housings such as gearbox, motor mounts, turbocharger and generator parts.",
    "dataAccess": "full",
    "scope": "Hypoeutectic Al-Si-Cu high-pressure die-casting alloy, the most common aluminium die-casting alloy. Good castability, strength and hardness at moderate cost; used widely in automotive housings (gearbox, motor mounts, turbocharger, generator).",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "8.0-11.0"
      },
      {
        "element": "Fe",
        "range": "max 1.3"
      },
      {
        "element": "Cu",
        "range": "2.0-4.0"
      },
      {
        "element": "Mn",
        "range": "max 0.55"
      },
      {
        "element": "Mg",
        "range": "0.05-0.55"
      },
      {
        "element": "Cr",
        "range": "max 0.15"
      },
      {
        "element": "Ni",
        "range": "max 0.55"
      },
      {
        "element": "Zn",
        "range": "max 1.2"
      },
      {
        "element": "Pb",
        "range": "max 0.35"
      },
      {
        "element": "Sn",
        "range": "max 0.25"
      },
      {
        "element": "Ti",
        "range": "max 0.25"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "high-pressure die cast (F), separately cast test bars typical"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "~240-310"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": "~140-240"
      },
      {
        "label": "Elongation A %",
        "value": "<= 1-2"
      },
      {
        "label": "Hardness HB",
        "value": "~80-110"
      }
    ],
    "materialNumber": "EN AC-46000"
  },
  {
    "standardBody": "EN",
    "designation": "AW-1050A (Al 99.5)",
    "fullCode": "EN AW-1050A (Al 99.5)",
    "title": "Wrought commercially pure aluminium EN AW-1050A [Al 99.5], numeric 3.0255",
    "materialType": "Aluminum",
    "application": [
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "Commercially pure (min 99.5% Al) non-heat-treatable wrought aluminium with high electrical and thermal conductivity, excellent corrosion resistance, formability and weldability; strengthened only by cold work. Used in electrical, chemical, food and architectural applications.",
    "dataAccess": "full",
    "scope": "Commercially pure (min 99.5% Al) non-heat-treatable wrought aluminium. High electrical and thermal conductivity, excellent corrosion resistance, formability and weldability; strengthened only by cold work. Used in electrical, chemical, food and architectural applications.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "max 0.25"
      },
      {
        "element": "Fe",
        "range": "max 0.40"
      },
      {
        "element": "Cu",
        "range": "max 0.05"
      },
      {
        "element": "Mn",
        "range": "max 0.05"
      },
      {
        "element": "Mg",
        "range": "max 0.05"
      },
      {
        "element": "Zn",
        "range": "max 0.07"
      },
      {
        "element": "Ti",
        "range": "max 0.05"
      },
      {
        "element": "Al",
        "range": "min 99.50"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm MPa (O, Annealed)",
        "value": "65-95"
      },
      {
        "label": "Proof Strength Rp0.2 MPa (O, Annealed)",
        "value": ">= 20"
      },
      {
        "label": "Elongation A % (O, Annealed)",
        "value": ">= 25-30"
      },
      {
        "label": "Tensile Strength Rm MPa (H14)",
        "value": "100-140"
      },
      {
        "label": "Density G Cm3",
        "value": "2.70"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "70"
      },
      {
        "label": "Electrical Conductivity % IACS",
        "value": "57"
      }
    ],
    "materialNumber": "3.0255"
  },
  {
    "standardBody": "EN",
    "designation": "AW-2024 (AlCu4Mg1)",
    "fullCode": "EN AW-2024 (AlCu4Mg1)",
    "title": "Wrought aluminium alloy EN AW-2024 [Al Cu4Mg1], numeric 3.1355",
    "materialType": "Aluminum",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "High-strength heat-treatable Al-Cu-Mg aerospace alloy with good high-temperature strength and machinability but limited corrosion resistance (often clad). Used for aircraft structures, fittings and highly stressed parts.",
    "dataAccess": "full",
    "scope": "High-strength heat-treatable Al-Cu-Mg aerospace alloy with good high-temperature strength and machinability but limited corrosion resistance (often clad). Used for aircraft structures, fittings and highly stressed parts.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "max 0.50"
      },
      {
        "element": "Fe",
        "range": "max 0.50"
      },
      {
        "element": "Cu",
        "range": "3.8-4.9"
      },
      {
        "element": "Mn",
        "range": "0.30-0.90"
      },
      {
        "element": "Mg",
        "range": "1.2-1.8"
      },
      {
        "element": "Cr",
        "range": "max 0.10"
      },
      {
        "element": "Zn",
        "range": "max 0.25"
      },
      {
        "element": "Ti",
        "range": "max 0.15"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper",
        "value": "T3"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": ">= 400-450"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 270-310"
      },
      {
        "label": "Elongation A %",
        "value": ">= 8"
      },
      {
        "label": "Hardness HB",
        "value": "~120"
      },
      {
        "label": "Density G Cm3",
        "value": "2.78"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "73.1"
      }
    ],
    "materialNumber": "3.1355"
  },
  {
    "standardBody": "EN",
    "designation": "AW-7075 (AlZn5.5MgCu)",
    "fullCode": "EN AW-7075 (AlZn5.5MgCu)",
    "title": "Wrought aluminium alloy EN AW-7075 [Al Zn5.5MgCu], numeric 3.4365",
    "materialType": "Aluminum",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "High-strength heat-treatable Al-Zn-Mg-Cu aerospace alloy. In the T6 temper it offers among the highest strength of common aluminium alloys with good fatigue performance; used for aircraft structures, highly stressed parts, moulds and tooling.",
    "dataAccess": "full",
    "scope": "High-strength heat-treatable Al-Zn-Mg-Cu aerospace alloy. In the T6 temper it offers among the highest strength of common aluminium alloys with good fatigue performance, used for aircraft structures, highly stressed parts, moulds and tooling.",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "max 0.40"
      },
      {
        "element": "Fe",
        "range": "max 0.50"
      },
      {
        "element": "Cu",
        "range": "1.2-2.0"
      },
      {
        "element": "Mn",
        "range": "max 0.30"
      },
      {
        "element": "Mg",
        "range": "2.1-2.9"
      },
      {
        "element": "Cr",
        "range": "0.18-0.28"
      },
      {
        "element": "Zn",
        "range": "5.1-6.1"
      },
      {
        "element": "Ti",
        "range": "max 0.20"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Temper",
        "value": "T6"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "510-540"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": "430-480"
      },
      {
        "label": "Elongation A %",
        "value": "6-11"
      },
      {
        "label": "Density G Cm3",
        "value": "2.81"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "72"
      }
    ],
    "materialNumber": "3.4365"
  },
  {
    "standardBody": "EN",
    "designation": "CW024A (Cu-DHP)",
    "fullCode": "EN CW024A (Cu-DHP)",
    "title": "Phosphorus-deoxidized copper Cu-DHP, EN number CW024A / 2.0090",
    "materialType": "Copper Alloy",
    "application": [
      "Construction",
      "General Engineering"
    ],
    "status": "active",
    "description": "Deoxidized high-residual-phosphorus copper (min 99.90% Cu). Phosphorus deoxidation removes oxygen so the copper is not susceptible to hydrogen embrittlement, making it well suited to welding and brazing. Used for water/gas tube, heating and HVAC pipe, roofing/cladding and vessels.",
    "dataAccess": "full",
    "scope": "Deoxidized high-residual-phosphorus copper (min 99.90% Cu). Phosphorus deoxidation removes oxygen so the copper is not susceptible to hydrogen embrittlement, making it well suited to welding and brazing. Used for water/gas tube, heating and HVAC pipe, roofing/cladding and vessels.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "min 99.90 (Cu+Ag)"
      },
      {
        "element": "P",
        "range": "0.015-0.040"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm MPa (R220, Annealed)",
        "value": ">= 220"
      },
      {
        "label": "Elongation A % (R220, Annealed)",
        "value": ">= ~40"
      },
      {
        "label": "Tensile Strength Rm MPa (R290, Hard)",
        "value": ">= 290"
      },
      {
        "label": "Hardness HV",
        "value": "40-65 (annealed); 90-110 (hard)"
      },
      {
        "label": "Density G Cm3",
        "value": "8.94"
      }
    ],
    "materialNumber": "CW024A"
  },
  {
    "standardBody": "EN",
    "designation": "CW508L (CuZn37)",
    "fullCode": "EN CW508L (CuZn37)",
    "title": "Brass CuZn37, EN number CW508L / 2.0321 (formerly CZ108)",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Single-phase (alpha) 37% zinc brass with excellent cold formability and good electrical/thermal conductivity. High-purity cold-forming brass used for deep drawing, severe bending, stamping, connectors, fasteners and decorative parts.",
    "dataAccess": "full",
    "scope": "Single-phase (alpha) 37% zinc brass with excellent cold formability and good electrical/thermal conductivity. High-purity cold-forming brass used for deep drawing, severe bending, stamping, connectors, fasteners and decorative parts.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "62.0-64.0"
      },
      {
        "element": "Pb",
        "range": "max 0.10"
      },
      {
        "element": "Fe",
        "range": "max 0.10"
      },
      {
        "element": "Sn",
        "range": "max 0.10"
      },
      {
        "element": "Ni",
        "range": "max 0.30"
      },
      {
        "element": "Al",
        "range": "max 0.05"
      },
      {
        "element": "Zn",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm MPa (R300, Soft)",
        "value": "300-370"
      },
      {
        "label": "Elongation A % (R300, Soft)",
        "value": ">= 43"
      },
      {
        "label": "Tensile Strength Rm MPa (R480, Hard)",
        "value": ">= 480"
      },
      {
        "label": "Hardness HV",
        "value": "65-95 (soft); 150-175 (hard)"
      },
      {
        "label": "Density G Cm3",
        "value": "8.44"
      },
      {
        "label": "Youngs Modulus GPa",
        "value": "103"
      }
    ],
    "materialNumber": "CW508L"
  },
  {
    "standardBody": "EN",
    "designation": "GJL-250 (EN-JL1040)",
    "fullCode": "EN-GJL-250 (EN-JL1040)",
    "title": "Grey (lamellar/flake graphite) cast iron EN-GJL-250, number EN-JL1040",
    "materialType": "Cast Iron",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Lamellar (flake) graphite grey cast iron classified by tensile strength on machined test pieces. Good machinability, vibration damping and moderate strength; used for machine frames, engine blocks, pump and turbine casings, and general engineering castings. Equivalent to former GG25.",
    "dataAccess": "full",
    "scope": "Lamellar (flake) graphite grey cast iron classified by tensile strength on machined test pieces. Good machinability, vibration damping and moderate strength; used for machine frames, engine blocks, pump and turbine casings, and general engineering castings.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "2.8-3.3 (typical)"
      },
      {
        "element": "Si",
        "range": "1.2-1.7 (typical)"
      },
      {
        "element": "Mn",
        "range": "0.8-1.2 (typical)"
      },
      {
        "element": "P",
        "range": "max ~0.15"
      },
      {
        "element": "S",
        "range": "max ~0.12"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "as-cast (30 mm separately cast test bar)"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "250-350"
      },
      {
        "label": "Compressive Strength MPa",
        "value": "~840"
      },
      {
        "label": "Hardness HB",
        "value": "~180-250"
      },
      {
        "label": "Elongation A %",
        "value": "<1 (negligible, brittle)"
      },
      {
        "label": "Density G Cm3",
        "value": "7.2"
      }
    ],
    "materialNumber": "EN-JL1040"
  },
  {
    "standardBody": "EN",
    "designation": "GJS-400-15 (EN-JS1030)",
    "fullCode": "EN-GJS-400-15 (EN-JS1030)",
    "title": "Spheroidal graphite (ductile/nodular) cast iron EN-GJS-400-15, number EN-JS1030",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering",
      "Automotive"
    ],
    "status": "active",
    "description": "Ferritic to ferritic-pearlitic spheroidal (nodular) graphite cast iron classified by mechanical properties on machined test pieces. Combines good elongation and toughness with useful strength; used for structural and pressure-bearing components, housings and safety parts. Equivalent to former GGG40.",
    "dataAccess": "full",
    "scope": "Ferritic to ferritic-pearlitic spheroidal (nodular) graphite cast iron grade classified by mechanical properties on machined test pieces. Combines good elongation and toughness with useful strength; used for structural and pressure-bearing components, housings and safety parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "3.4-3.9 (typical)"
      },
      {
        "element": "Si",
        "range": "2.2-2.9 (typical)"
      },
      {
        "element": "Mn",
        "range": "max ~0.5"
      },
      {
        "element": "P",
        "range": "max ~0.05"
      },
      {
        "element": "S",
        "range": "max ~0.02"
      },
      {
        "element": "Mg",
        "range": "0.03-0.06 (nodulizing)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "as-cast (separately cast test piece)"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": ">= 400"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 250"
      },
      {
        "label": "Elongation A %",
        "value": ">= 15"
      },
      {
        "label": "Hardness HB",
        "value": "130-180"
      },
      {
        "label": "Density G Cm3",
        "value": "7.1"
      }
    ],
    "materialNumber": "EN-JS1030"
  },
  {
    "standardBody": "EN",
    "designation": "10025-6 S690QL",
    "fullCode": "EN 10025-6 S690QL",
    "title": "High yield strength quenched and tempered structural steel S690QL (material number 1.8928)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Ultra-high-strength weldable structural steel, quenched and tempered, with 690 MPa minimum yield strength and guaranteed -40 C impact toughness (suffix L). Used in cranes, bridges, mobile/lifting and earthmoving equipment and demanding load-bearing welded structures.",
    "dataAccess": "full",
    "scope": "Ultra-high-strength weldable structural steel, quenched and tempered, with 690 MPa minimum yield strength and guaranteed -40 C impact toughness (suffix L). Used in cranes, bridges, mobile/lifting and earthmoving equipment and demanding load-bearing welded structures.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.20"
      },
      {
        "element": "Si",
        "range": "max 0.80"
      },
      {
        "element": "Mn",
        "range": "max 1.70"
      },
      {
        "element": "P",
        "range": "max 0.020"
      },
      {
        "element": "S",
        "range": "max 0.010"
      },
      {
        "element": "Cr",
        "range": "max 1.50"
      },
      {
        "element": "Mo",
        "range": "max 0.70"
      },
      {
        "element": "Ni",
        "range": "max 2.0"
      },
      {
        "element": "B",
        "range": "max 0.005"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Condition",
        "value": "quenched and tempered (+QT)"
      },
      {
        "label": "Proof Strength Rp0.2 MPa",
        "value": ">= 690 (t <= 50 mm)"
      },
      {
        "label": "Tensile Strength Rm MPa",
        "value": "770-940"
      },
      {
        "label": "Elongation A % Min",
        "value": "14"
      },
      {
        "label": "Impact Energy KV J",
        "value": ">= 30 at -40 C (longitudinal)"
      }
    ],
    "materialNumber": "1.8928"
  },
  {
    "standardBody": "EN",
    "designation": "1563",
    "fullCode": "EN 1563",
    "title": "Founding - Spheroidal graphite cast irons",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies grades and mechanical requirements for spheroidal (nodular) graphite cast irons classified by properties on machined test pieces (e.g. EN-GJS-400-15, EN-GJS-500-7), covering ferritic to pearlitic and solid-solution strengthened ferritic grades.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "1561",
    "fullCode": "EN 1561",
    "title": "Founding - Grey cast irons",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies grades of unalloyed and low-alloyed lamellar (flake) graphite grey cast iron, classified either by tensile strength (e.g. EN-GJL-250) or by Brinell hardness, measured on machined test pieces from cast samples.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10111",
    "fullCode": "EN 10111",
    "title": "Continuously hot rolled low carbon steel sheet and strip for cold forming - Technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies grades (DD11, DD12, DD13, DD14) of continuously hot rolled low carbon steel sheet and strip for cold forming, with delivery conditions, composition and mechanical/formability requirements.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10130",
    "fullCode": "EN 10130",
    "title": "Cold rolled low carbon steel flat products for cold forming - Technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies technical delivery conditions for cold rolled flat products of unalloyed low-carbon steel for cold forming (grades DC01-DC06), including chemical composition, mechanical properties and surface quality.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10149-2",
    "fullCode": "EN 10149-2",
    "title": "Hot rolled flat products made of high yield strength steels for cold forming - Part 2: Technical delivery conditions for thermomechanically rolled steels",
    "materialType": "Steel",
    "application": [
      "Automotive"
    ],
    "status": "active",
    "description": "Thermomechanically rolled (M) high yield strength micro-alloyed steels for cold forming, grades S315MC to S960MC, widely used in automotive structural parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10263-1",
    "fullCode": "EN 10263-1",
    "title": "Steel rod, bars and wire for cold heading and cold extrusion - Part 1: General technical delivery conditions",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "General delivery conditions for round rod, bars and wire for cold heading and cold extrusion (fasteners); multi-part series covering non-heat-treated, case hardening, quench-and-temper and stainless steels.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "10269",
    "fullCode": "EN 10269",
    "title": "Steels and nickel alloys for fasteners with specified elevated and/or low temperature properties",
    "materialType": "Steel",
    "application": [
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies semi-finished products, bars and rods for fasteners (bolts, studs, nuts) with properties defined at elevated and/or low temperatures, in non-alloy, alloy, stainless steels and nickel alloys.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "12420",
    "fullCode": "EN 12420",
    "title": "Copper and copper alloys - Forgings",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies composition, property requirements and dimensional/form tolerances for copper and copper alloy die and hand forgings, plus sampling, test methods and delivery conditions.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "12449",
    "fullCode": "EN 12449",
    "title": "Copper and copper alloys - Seamless, round tubes for general purposes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies composition, property requirements and tolerances for seamless round drawn copper and copper alloy tubes for general purposes, roughly 3-450 mm outside diameter.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "EN",
    "designation": "1652",
    "fullCode": "EN 1652",
    "title": "Copper and copper alloys - Plate, sheet, strip and circles for general purposes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies composition, property requirements and tolerances on dimensions/form for copper and copper alloy plate, sheet, strip and circles for general purposes (e.g. CuZn37/CW508L), with sampling and delivery conditions.",
    "dataAccess": "restricted"
  }
];
