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
  }
];
