/**
 * ISOLATED DATA MODULE — DIN standards only. Ingested from
 * `data/standards_research/DIN` (see that directory's
 * per-designation JSON files and `DIN_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY DIN records, typed as
 * DinStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by DIN — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { DinStandard } from '@/types/standard';

export const dinStandards: DinStandard[] = [
  {
    "standardBody": "DIN",
    "designation": "1.0037 (St37-2 / S235JR)",
    "fullCode": "DIN 1.0037 (St37-2 / S235JR)",
    "title": "General structural steel St37-2, material number 1.0037 (old DIN 17100 designation; superseded by S235JR per EN 10025-2)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "superseded",
    "supersededBy": "S235JR per EN 10025-2",
    "description": "Classic non-alloy general structural steel from the withdrawn DIN 17100 standard.",
    "dataAccess": "full",
    "scope": "Classic non-alloy general structural steel from the withdrawn DIN 17100 standard. Used for buildings, bridges, and load-bearing structures. New designation is S235JR (1.0038); St37 variants were St37-2, USt37-2, RSt37-2, St37-3.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.17-0.20 %"
      },
      {
        "element": "Mn",
        "range": "max 1.40 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.045 %"
      },
      {
        "element": "N",
        "range": "max 0.009-0.012 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H",
        "value": ">= 235 MPa (thickness <= 16 mm)"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "340-470 MPa (thickness < 3-100 mm)"
      },
      {
        "label": "Elongation A",
        "value": ">= 26 %"
      },
      {
        "label": "Condition",
        "value": "as-rolled"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.0038 (S235JR)",
    "fullCode": "DIN 1.0038 (S235JR)",
    "title": "Non-alloy structural steel S235JR, material number 1.0038",
    "materialType": "Steel",
    "application": [
      "Construction",
      "Energy"
    ],
    "status": "active",
    "description": "Low-carbon non-alloy structural steel.",
    "dataAccess": "full",
    "scope": "Low-carbon non-alloy structural steel. 'S' = structural, '235' = minimum yield strength 235 MPa, 'JR' = 27 J impact energy at +20 C. Good weldability and cold-bending; very common general structural steel.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.17-0.20 % (thickness dependent)"
      },
      {
        "element": "Mn",
        "range": "max 1.40 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.045 %"
      },
      {
        "element": "N",
        "range": "max 0.012 %"
      },
      {
        "element": "Cu",
        "range": "max 0.55 %"
      },
      {
        "element": "CEV",
        "range": "max 0.35-0.38 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H",
        "value": ">= 235 MPa (thickness <= 16 mm)"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "360-510 MPa (thickness < 16 mm)"
      },
      {
        "label": "Elongation A",
        "value": ">= 26 %"
      },
      {
        "label": "Impact Energy",
        "value": ">= 27 J at +20 C"
      },
      {
        "label": "Condition",
        "value": "as-rolled"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.0570 (S355J2 / S355J2G3)",
    "fullCode": "DIN 1.0570 (S355J2 / S355J2G3)",
    "title": "Non-alloy / low-alloy structural steel S355J2, material number 1.0570 (old designation St52-3)",
    "materialType": "Steel",
    "application": [
      "Marine",
      "Construction",
      "Energy"
    ],
    "status": "active",
    "description": "Fine-grain structural steel with minimum yield strength 355 MPa.",
    "dataAccess": "full",
    "scope": "Fine-grain structural steel with minimum yield strength 355 MPa. 'J2' = 27 J impact energy at -20 C. Higher strength than S235; used in general machine/plant engineering, shipbuilding, gearboxes and load-bearing structures.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.22 %"
      },
      {
        "element": "Si",
        "range": "max 0.55 %"
      },
      {
        "element": "Mn",
        "range": "max 1.60 %"
      },
      {
        "element": "P",
        "range": "max 0.035 %"
      },
      {
        "element": "S",
        "range": "max 0.035 %"
      },
      {
        "element": "Cu",
        "range": "max 0.55 %"
      },
      {
        "element": "N",
        "range": "max 0.012 %"
      },
      {
        "element": "CEV",
        "range": "max 0.45-0.47 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H",
        "value": ">= 355 MPa (thickness <= 16 mm)"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "470-630 MPa (thickness < 3-100 mm)"
      },
      {
        "label": "Elongation A",
        "value": ">= 22 %"
      },
      {
        "label": "Impact Energy",
        "value": ">= 27 J at -20 C (longitudinal)"
      },
      {
        "label": "Condition",
        "value": "normalized / as-rolled (+N)"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.2379 (X153CrMoV12)",
    "fullCode": "DIN 1.2379 (X153CrMoV12)",
    "title": "High-carbon high-chromium cold-work tool steel X153CrMoV12 (older name X155CrVMo12-1), material number 1.2379 (AISI D2 / JIS SKD11 equivalent)",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Ledeburitic secondary-hardening cold-work tool steel.",
    "dataAccess": "full",
    "scope": "Ledeburitic secondary-hardening cold-work tool steel. High resistance to abrasive and adhesive wear, air-hardening with low distortion, good dimensional stability. Not corrosion resistant. Used for blanking/forming dies, thread-rolling dies, cutting and stamping tools, and plastic moulds.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "1.50-1.60 % (approx 1.53)"
      },
      {
        "element": "Si",
        "range": "approx 0.35 %"
      },
      {
        "element": "Mn",
        "range": "approx 0.40 %"
      },
      {
        "element": "Cr",
        "range": "11.0-13.0 % (approx 12.0)"
      },
      {
        "element": "Mo",
        "range": "0.70-1.00 %"
      },
      {
        "element": "V",
        "range": "0.70-1.00 % (approx 0.85)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Annealed",
        "value": "<= 255 HB"
      },
      {
        "label": "Working Hardness",
        "value": "54-60 HRC (after hardening and tempering)"
      },
      {
        "label": "Condition",
        "value": "air-hardened / tempered"
      }
    ],
    "hasEnEquivalent": false
  },
  {
    "standardBody": "DIN",
    "designation": "1.4301 (X5CrNi18-10)",
    "fullCode": "DIN 1.4301 (X5CrNi18-10)",
    "title": "Stainless steel X5CrNi18-10, material number 1.4301 (AISI 304 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Austenitic chromium-nickel stainless steel for wrought products; rust- and acid-resistant, non-magnetic in annealed condition, weldable by all methods except gas welding.",
    "dataAccess": "full",
    "scope": "Austenitic chromium-nickel stainless steel for wrought products; rust- and acid-resistant, non-magnetic in annealed condition, weldable by all methods except gas welding. Very common general-purpose stainless grade.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.07 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 2.00 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "17.5-19.5 %"
      },
      {
        "element": "Ni",
        "range": "8.0-10.5 %"
      },
      {
        "element": "N",
        "range": "max 0.11 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "500-700 N/mm^2"
      },
      {
        "label": "Hardness",
        "value": "<= 215 HB"
      },
      {
        "label": "Density",
        "value": "7.9 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "annealed / solution treated"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4401 (X5CrNiMo17-12-2)",
    "fullCode": "DIN 1.4401 (X5CrNiMo17-12-2)",
    "title": "Molybdenum-alloyed austenitic stainless steel X5CrNiMo17-12-2, material number 1.4401 (AISI 316 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "Medical"
    ],
    "status": "active",
    "description": "Molybdenum-bearing austenitic chromium-nickel stainless steel (V4A group).",
    "dataAccess": "full",
    "scope": "Molybdenum-bearing austenitic chromium-nickel stainless steel (V4A group). Higher corrosion resistance than 1.4301, especially against chlorides and non-oxidizing acids. Used in chemical, marine, food, pharmaceutical and medical applications.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.07 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 2.00 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "16.5-18.5 %"
      },
      {
        "element": "Ni",
        "range": "10.0-13.0 %"
      },
      {
        "element": "Mo",
        "range": "2.0-2.5 %"
      },
      {
        "element": "N",
        "range": "max 0.11 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Rp0.2",
        "value": ">= 200 MPa"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "500-700 MPa"
      },
      {
        "label": "Elongation A",
        "value": ">= 40 %"
      },
      {
        "label": "Hardness",
        "value": "approx 200 HB"
      },
      {
        "label": "PREN",
        "value": "23.1-28.5"
      },
      {
        "label": "Condition",
        "value": "solution annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4571 (X6CrNiMoTi17-12-2)",
    "fullCode": "DIN 1.4571 (X6CrNiMoTi17-12-2)",
    "title": "Titanium-stabilized austenitic stainless steel X6CrNiMoTi17-12-2, material number 1.4571 (AISI 316Ti / UNS S31635)",
    "materialType": "Titanium",
    "application": [
      "Marine",
      "Construction",
      "Medical"
    ],
    "status": "active",
    "description": "Titanium-stabilized molybdenum-bearing austenitic chromium-nickel stainless steel.",
    "dataAccess": "full",
    "scope": "Titanium-stabilized molybdenum-bearing austenitic chromium-nickel stainless steel. Titanium prevents chromium-carbide precipitation, giving superior intergranular corrosion resistance and stability above 800 C. Used in chemical, apparatus, shipbuilding, food, medical and pharmaceutical industries.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.08 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 2.00 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "16.5-18.5 %"
      },
      {
        "element": "Ni",
        "range": "10.5-13.5 %"
      },
      {
        "element": "Mo",
        "range": "2.0-2.5 %"
      },
      {
        "element": "Ti",
        "range": "5xC to max 0.70 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Rp0.2",
        "value": ">= 200 MPa"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "500-700 MPa"
      },
      {
        "label": "Elongation A5",
        "value": ">= 40 %"
      },
      {
        "label": "Hardness",
        "value": "<= 215 HB"
      },
      {
        "label": "Impact Energy KV",
        "value": ">= 100 J"
      },
      {
        "label": "Condition",
        "value": "solution annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.7225 (42CrMo4)",
    "fullCode": "DIN 1.7225 (42CrMo4)",
    "title": "Chromium-molybdenum quenched and tempered alloy steel 42CrMo4, material number 1.7225 (AISI 4142 equivalent)",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Low-alloy chromium-molybdenum steel for quenching and tempering (+QT).",
    "dataAccess": "full",
    "scope": "Low-alloy chromium-molybdenum steel for quenching and tempering (+QT). High strength, toughness and good hardenability; used for axles, gear shafts, crankshafts, and heavily loaded machine parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.38-0.45 %"
      },
      {
        "element": "Si",
        "range": "max 0.40 %"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90 %"
      },
      {
        "element": "P",
        "range": "max 0.025 %"
      },
      {
        "element": "S",
        "range": "max 0.035 %"
      },
      {
        "element": "Cr",
        "range": "0.90-1.20 %"
      },
      {
        "element": "Mo",
        "range": "0.15-0.30 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": ">= 1080 MPa (small sections, +QT)"
      },
      {
        "label": "Yield Strength Re",
        "value": ">= 930 MPa"
      },
      {
        "label": "Elongation A",
        "value": ">= 12 %"
      },
      {
        "label": "Reduction Of Area Z",
        "value": ">= 45 %"
      },
      {
        "label": "Condition",
        "value": "quenched and tempered (+QT)"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17100",
    "fullCode": "DIN 17100",
    "title": "Steels for general structural purposes (Allgemeine Baustaehle)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "superseded",
    "description": "Former German standard specifying non-alloy general structural steels (grades St33, St37-2, USt37-2, RSt37-2, St37-3, St44, St52-3, etc.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17175",
    "fullCode": "DIN 17175",
    "title": "Seamless tubes of heat-resistant steels (Nahtlose Rohre aus warmfesten Staehlen)",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "superseded",
    "supersededBy": "EN 10216-2",
    "description": "Former German standard for seamless tubes of heat-resistant steels used in boilers, pipelines, pressure vessels and equipment for service up to ~600 C at high pressure.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1725",
    "fullCode": "DIN 1725",
    "title": "Aluminium alloys (Part 1 wrought alloys; Part 2 casting alloys)",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "description": "Former German standard for aluminium alloys.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17440",
    "fullCode": "DIN 17440",
    "title": "Stainless steels - Technical delivery conditions",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "supersededBy": "DIN EN 10088",
    "description": "Former German stainless steel delivery-conditions standard covering hot/cold rolled strip and plate, wire rod, drawn wire, bars, forgings and semi-finished products.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "EN 10025",
    "fullCode": "DIN EN 10025",
    "title": "Hot rolled products of structural steels",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "European standard (published as DIN EN in Germany) giving technical delivery conditions for hot-rolled structural steel products.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "EN 10088",
    "fullCode": "DIN EN 10088",
    "title": "Stainless steels",
    "materialType": "Stainless Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "European stainless steel standard published as DIN EN in Germany.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.0044 (S275JR)",
    "fullCode": "DIN 1.0044 (S275JR)",
    "title": "Non-alloy structural steel S275JR, material number 1.0044 (formerly St44-2)",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Hot-rolled non-alloy structural steel with minimum yield strength 275 N/mm^2 and 27 J Charpy impact at +20 C (JR); the modern designation for the former DIN 17100 grade St44-2.",
    "dataAccess": "full",
    "scope": "Hot-rolled non-alloy structural steel with minimum yield strength 275 N/mm^2 and guaranteed Charpy V-notch impact of 27 J at +20 C (JR). Weldable general construction grade for buildings, bridges and load-bearing steelwork.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.21 % (<= 16 mm)"
      },
      {
        "element": "Mn",
        "range": "max 1.50 %"
      },
      {
        "element": "P",
        "range": "max 0.035 %"
      },
      {
        "element": "S",
        "range": "max 0.035 %"
      },
      {
        "element": "N",
        "range": "max 0.012 %"
      },
      {
        "element": "Cu",
        "range": "max 0.55 %"
      },
      {
        "element": "CEV",
        "range": "max 0.42 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength Re H",
        "value": "min 275 N/mm^2 (<= 16 mm)"
      },
      {
        "label": "Tensile Strength Rm",
        "value": "410-560 N/mm^2 (3-100 mm)"
      },
      {
        "label": "Elongation A",
        "value": "min 23 %"
      },
      {
        "label": "Impact Energy",
        "value": "min 27 J at +20 C"
      },
      {
        "label": "Condition",
        "value": "as-rolled"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.0503 (C45)",
    "fullCode": "DIN 1.0503 (C45)",
    "title": "Non-alloy quality/quenched-and-tempered steel C45, material number 1.0503 (AISI 1045 equivalent)",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Medium-carbon unalloyed engineering steel supplied normalized or quenched-and-tempered; moderately high strength and wear resistance for shafts, gears, axles, bolts and general machined parts.",
    "dataAccess": "full",
    "scope": "Medium-carbon unalloyed engineering steel supplied in normalized or quenched-and-tempered condition. Moderately high strength and wear resistance; used for shafts, gears, axles, bolts and general machined parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.42-0.50 %"
      },
      {
        "element": "Si",
        "range": "max 0.40 %"
      },
      {
        "element": "Mn",
        "range": "0.50-0.80 %"
      },
      {
        "element": "P",
        "range": "max 0.045 %"
      },
      {
        "element": "S",
        "range": "max 0.045 %"
      },
      {
        "element": "Cr",
        "range": "max 0.40 %"
      },
      {
        "element": "Ni",
        "range": "max 0.40 %"
      },
      {
        "element": "Mo",
        "range": "max 0.10 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm (Normalized)",
        "value": "580-820 N/mm^2"
      },
      {
        "label": "Tensile Strength Rm (QT, 16-40 mm)",
        "value": "650-800 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2 (QT)",
        "value": "min 430 N/mm^2"
      },
      {
        "label": "Elongation A (Normalized)",
        "value": "min 16 %"
      },
      {
        "label": "Hardness (Normalized)",
        "value": "172-242 HB"
      },
      {
        "label": "Condition",
        "value": "normalized or quenched-and-tempered"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4016 (X6Cr17)",
    "fullCode": "DIN 1.4016 (X6Cr17)",
    "title": "Ferritic stainless steel X6Cr17, material number 1.4016 (AISI 430 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Ferritic chromium stainless steel, not hardenable by heat treatment and used annealed; magnetic. General-purpose grade for household appliances, kitchen equipment, decorative trim and automotive components.",
    "dataAccess": "full",
    "scope": "Ferritic chromium stainless steel for wrought products; not hardenable by heat treatment, used in the annealed condition. Magnetic. General-purpose grade for household appliances, kitchen equipment, decorative trim and automotive components.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.08 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.00 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "16.0-18.0 %"
      },
      {
        "element": "N",
        "range": "max 0.030 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "400-630 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 240 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 20 %"
      },
      {
        "label": "Hardness",
        "value": "<= 200 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4021 (X20Cr13)",
    "fullCode": "DIN 1.4021 (X20Cr13)",
    "title": "Martensitic stainless steel X20Cr13, material number 1.4021 (AISI 420 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering",
      "Medical"
    ],
    "status": "active",
    "description": "Martensitic chromium stainless steel, hardenable by heat treatment with good corrosion resistance in non-chloride media. Used for cutlery, surgical instruments, pump and valve parts, shafts and axles.",
    "dataAccess": "full",
    "scope": "Martensitic chromium stainless steel, hardenable by heat treatment; magnetic in the hardened-and-tempered condition. Good corrosion resistance in non-chloride media. Used for cutlery, surgical instruments, pump and valve parts, shafts and axles.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.16-0.25 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.50 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "12.0-14.0 %"
      },
      {
        "element": "N",
        "range": "max 0.11 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "750-850 N/mm^2 (quenched and tempered)"
      },
      {
        "label": "Hardness Annealed",
        "value": "<= 230 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "quenched and tempered / annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4034 (X46Cr13)",
    "fullCode": "DIN 1.4034 (X46Cr13)",
    "title": "Martensitic stainless steel X46Cr13, material number 1.4034",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering",
      "Medical"
    ],
    "status": "active",
    "description": "High-carbon martensitic chromium stainless steel, hardenable to high hardness with good edge retention. Used for cutlery, knife blades, scissors, surgical and dental instruments, springs and wear parts.",
    "dataAccess": "full",
    "scope": "High-carbon martensitic chromium stainless steel, hardenable to high hardness with good edge retention. Used for cutlery, knife blades, scissors, surgical and dental instruments, springs and wear parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.43-0.50 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.00 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "12.5-14.5 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Hardened",
        "value": "approx 54-56 HRC"
      },
      {
        "label": "Hardness Annealed",
        "value": "<= 245 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "hardened and tempered / annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4057 (X17CrNi16-2)",
    "fullCode": "DIN 1.4057 (X17CrNi16-2)",
    "title": "Martensitic stainless steel X17CrNi16-2, material number 1.4057 (AISI 431 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering",
      "Marine"
    ],
    "status": "active",
    "description": "Nickel-bearing martensitic chromium stainless steel, hardenable, with better corrosion resistance and toughness than plain 13 % Cr martensitics. Used for pump and valve shafts, bolts, fasteners and highly stressed parts in mild marine and industrial environments.",
    "dataAccess": "full",
    "scope": "Nickel-bearing martensitic chromium stainless steel, hardenable, with better corrosion resistance and toughness than plain 13 % Cr martensitics. Used for pump and valve shafts, bolts, fasteners and highly stressed components in mild marine and industrial environments.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.12-0.22 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.50 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "15.0-17.0 %"
      },
      {
        "element": "Ni",
        "range": "1.50-2.50 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "800-950 N/mm^2 (quenched and tempered)"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 600 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 12 %"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "quenched and tempered"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4104 (X14CrMoS17)",
    "fullCode": "DIN 1.4104 (X14CrMoS17)",
    "title": "Free-machining martensitic stainless steel X14CrMoS17, material number 1.4104 (AISI 430F equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Sulphur-bearing free-machining chromium-molybdenum stainless steel, hardenable by heat treatment. Optimised for high-speed automatic (screw-machine) turning of screws, nuts and small precision parts for water and steam service.",
    "dataAccess": "full",
    "scope": "Sulphur-bearing free-machining chromium-molybdenum stainless steel, hardenable by heat treatment. Optimised for high-speed automatic (screw-machine) turning of screws, nuts and small precision parts for water and steam service.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.10-0.17 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.50 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "0.15-0.35 %"
      },
      {
        "element": "Cr",
        "range": "15.5-17.5 %"
      },
      {
        "element": "Mo",
        "range": "0.20-0.60 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "650-850 N/mm^2 (quenched and tempered)"
      },
      {
        "label": "Hardness Annealed",
        "value": "<= 250 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "quenched and tempered / annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4113 (X6CrMo17-1)",
    "fullCode": "DIN 1.4113 (X6CrMo17-1)",
    "title": "Ferritic stainless steel X6CrMo17-1, material number 1.4113 (AISI 434 equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering",
      "Automotive"
    ],
    "status": "active",
    "description": "Molybdenum-bearing ferritic chromium stainless steel with better pitting and general corrosion resistance than 1.4016. Not hardenable by heat treatment; used annealed for automotive trim, fasteners and mildly corrosive service.",
    "dataAccess": "full",
    "scope": "Molybdenum-bearing ferritic chromium stainless steel; better pitting and general corrosion resistance than 1.4016 thanks to added molybdenum. Not hardenable by heat treatment; used in annealed condition for automotive trim, fasteners and mildly corrosive service.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.08 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.00 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "16.0-18.0 %"
      },
      {
        "element": "Mo",
        "range": "0.90-1.40 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "450-630 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 260 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 18 %"
      },
      {
        "label": "Hardness",
        "value": "<= 200 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4125 (X105CrMo17)",
    "fullCode": "DIN 1.4125 (X105CrMo17)",
    "title": "High-carbon martensitic stainless steel X105CrMo17, material number 1.4125 (AISI 440C equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "High-carbon chromium-molybdenum martensitic stainless steel achieving the highest hardness and wear resistance of the standard stainless grades after hardening. Used for ball/roller bearings, cutlery, knife blades, nozzles, valve parts and wear components.",
    "dataAccess": "full",
    "scope": "High-carbon chromium-molybdenum martensitic stainless steel achieving the highest hardness and wear resistance of the standard stainless grades after hardening. Used for ball/roller bearings, cutlery, knife blades, nozzles, valve parts and wear components.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.95-1.20 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 1.00 %"
      },
      {
        "element": "P",
        "range": "max 0.040 %"
      },
      {
        "element": "S",
        "range": "max 0.030 %"
      },
      {
        "element": "Cr",
        "range": "16.0-18.0 %"
      },
      {
        "element": "Mo",
        "range": "0.40-0.80 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Hardness Hardened",
        "value": "58-60 HRC (up to ~62 HRC)"
      },
      {
        "label": "Hardness Annealed",
        "value": "<= 285 HB"
      },
      {
        "label": "Density",
        "value": "7.7 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "hardened and tempered / annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4462 (X2CrNiMoN22-5-3)",
    "fullCode": "DIN 1.4462 (X2CrNiMoN22-5-3)",
    "title": "Duplex stainless steel X2CrNiMoN22-5-3, material number 1.4462 (Duplex 2205)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "Austenitic-ferritic (duplex) stainless steel with roughly 50/50 microstructure; the most widely used duplex grade. Combines high strength with excellent resistance to pitting, crevice and stress-corrosion cracking, for chemical, offshore, marine and pressure-vessel use.",
    "dataAccess": "full",
    "scope": "Austenitic-ferritic (duplex) stainless steel with roughly 50/50 microstructure; the most widely used duplex grade. Combines high strength (about twice that of 304) with excellent resistance to pitting, crevice and stress-corrosion cracking.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.030 %"
      },
      {
        "element": "Si",
        "range": "max 1.00 %"
      },
      {
        "element": "Mn",
        "range": "max 2.00 %"
      },
      {
        "element": "P",
        "range": "max 0.035 %"
      },
      {
        "element": "S",
        "range": "max 0.015 %"
      },
      {
        "element": "Cr",
        "range": "21.0-23.0 %"
      },
      {
        "element": "Ni",
        "range": "4.5-6.5 %"
      },
      {
        "element": "Mo",
        "range": "2.5-3.5 %"
      },
      {
        "element": "N",
        "range": "0.10-0.22 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "640-840 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 460 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 25 %"
      },
      {
        "label": "PREN",
        "value": "approx 35"
      },
      {
        "label": "Density",
        "value": "7.8 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "solution annealed / quenched"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4539 (X1NiCrMoCu25-20-5)",
    "fullCode": "DIN 1.4539 (X1NiCrMoCu25-20-5)",
    "title": "Super-austenitic stainless steel X1NiCrMoCu25-20-5, material number 1.4539 (AISI 904L equivalent)",
    "materialType": "Stainless Steel",
    "application": [
      "Energy",
      "Marine",
      "General Engineering"
    ],
    "status": "active",
    "description": "High-alloy austenitic stainless steel with high molybdenum, added copper and very low carbon. Excellent resistance to sulphuric and phosphoric acids, pitting and stress-corrosion cracking; used in chemical, petrochemical, energy and desalination equipment.",
    "dataAccess": "full",
    "scope": "High-alloy austenitic stainless steel with high molybdenum, added copper and very low carbon. Excellent resistance to sulphuric and phosphoric acids, pitting and stress-corrosion cracking. Used in chemical, petrochemical, energy and desalination equipment.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.020 %"
      },
      {
        "element": "Si",
        "range": "max 0.70 %"
      },
      {
        "element": "Mn",
        "range": "max 2.00 %"
      },
      {
        "element": "P",
        "range": "max 0.030 %"
      },
      {
        "element": "S",
        "range": "max 0.010 %"
      },
      {
        "element": "Cr",
        "range": "19.0-21.0 %"
      },
      {
        "element": "Ni",
        "range": "24.0-26.0 %"
      },
      {
        "element": "Mo",
        "range": "4.0-5.0 %"
      },
      {
        "element": "Cu",
        "range": "1.2-2.0 %"
      },
      {
        "element": "N",
        "range": "max 0.15 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "min 520 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 220 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 35 %"
      },
      {
        "label": "PREN",
        "value": ">= 34"
      },
      {
        "label": "Density",
        "value": "8.0 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "solution annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.4547 (X1CrNiMoCuN20-18-7)",
    "fullCode": "DIN 1.4547 (X1CrNiMoCuN20-18-7)",
    "title": "Super-austenitic 6Mo stainless steel X1CrNiMoCuN20-18-7, material number 1.4547 (254 SMO)",
    "materialType": "Stainless Steel",
    "application": [
      "Marine",
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "High-alloy austenitic stainless steel with about 6 % molybdenum and nitrogen, developed for very high resistance to pitting and crevice corrosion in chloride environments. Used in the pulp and paper industry, seawater handling and offshore oil and gas.",
    "dataAccess": "full",
    "scope": "High-alloy austenitic stainless steel with about 6 % molybdenum and nitrogen, developed for very high resistance to pitting and crevice corrosion in chloride environments. Used in the pulp and paper industry, seawater handling and offshore oil and gas.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "max 0.020 %"
      },
      {
        "element": "Si",
        "range": "max 0.70 %"
      },
      {
        "element": "Mn",
        "range": "max 1.00 %"
      },
      {
        "element": "P",
        "range": "max 0.030 %"
      },
      {
        "element": "S",
        "range": "max 0.010 %"
      },
      {
        "element": "Cr",
        "range": "19.5-20.5 %"
      },
      {
        "element": "Ni",
        "range": "17.5-18.5 %"
      },
      {
        "element": "Mo",
        "range": "6.0-7.0 %"
      },
      {
        "element": "Cu",
        "range": "0.50-1.00 %"
      },
      {
        "element": "N",
        "range": "0.18-0.25 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm",
        "value": "650-850 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2",
        "value": "min 300 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 35 %"
      },
      {
        "label": "PREN",
        "value": "approx 43"
      },
      {
        "label": "Density",
        "value": "8.0 kg/dm^3 at 20 C"
      },
      {
        "label": "Condition",
        "value": "solution annealed"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.7131 (16MnCr5)",
    "fullCode": "DIN 1.7131 (16MnCr5)",
    "title": "Case-hardening (carburizing) steel 16MnCr5, material number 1.7131 (SAE 5115 equivalent)",
    "materialType": "Steel",
    "application": [
      "General Engineering",
      "Automotive"
    ],
    "status": "active",
    "description": "Chromium-manganese case-hardening steel with good hardenability and machinability. Carburized and quenched to give a hard wear-resistant surface with a tough core; used for gears, worms, shafts, sealing bushings and similar drive components.",
    "dataAccess": "full",
    "scope": "Chromium-manganese case-hardening steel with good hardenability and machinability. Carburized and quenched to give a hard wear-resistant surface with a tough core. Used for gears, worms, shafts, sealing bushings and similar drive components.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.14-0.19 %"
      },
      {
        "element": "Si",
        "range": "max 0.40 %"
      },
      {
        "element": "Mn",
        "range": "1.00-1.30 %"
      },
      {
        "element": "P",
        "range": "max 0.025 %"
      },
      {
        "element": "S",
        "range": "max 0.035 %"
      },
      {
        "element": "Cr",
        "range": "0.80-1.10 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Surface Hardness After Case Hardening",
        "value": "approx 58-62 HRC"
      },
      {
        "label": "Tensile Strength Rm (Core)",
        "value": "approx 780-1080 N/mm^2 (section dependent)"
      },
      {
        "label": "Condition",
        "value": "carburized, quenched and tempered"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1.7218 (25CrMo4)",
    "fullCode": "DIN 1.7218 (25CrMo4)",
    "title": "Chromium-molybdenum quenched-and-tempered steel 25CrMo4, material number 1.7218 (AISI 4130 equivalent)",
    "materialType": "Steel",
    "application": [
      "Automotive",
      "Aerospace",
      "General Engineering"
    ],
    "status": "active",
    "description": "Low-carbon chromium-molybdenum alloy tempering steel with good weldability and toughness. Used for automotive and aircraft components requiring high toughness such as axles, axle journals, shafts and turbine parts.",
    "dataAccess": "full",
    "scope": "Low-carbon chromium-molybdenum alloy tempering steel with good weldability and toughness. Used for automotive and aircraft components requiring high toughness such as axles, axle journals, shafts and turbine parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.22-0.29 %"
      },
      {
        "element": "Si",
        "range": "max 0.40 %"
      },
      {
        "element": "Mn",
        "range": "0.60-0.90 %"
      },
      {
        "element": "P",
        "range": "max 0.025 %"
      },
      {
        "element": "S",
        "range": "max 0.035 %"
      },
      {
        "element": "Cr",
        "range": "0.90-1.20 %"
      },
      {
        "element": "Mo",
        "range": "0.15-0.30 %"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Rm (QT, <= 16 mm)",
        "value": "900-1100 N/mm^2"
      },
      {
        "label": "Yield Strength Rp0.2 (QT, <= 16 mm)",
        "value": "min 700 N/mm^2"
      },
      {
        "label": "Elongation A",
        "value": "min 12 %"
      },
      {
        "label": "Reduction Of Area Z",
        "value": "min 50 %"
      },
      {
        "label": "Condition",
        "value": "quenched and tempered"
      }
    ],
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1691",
    "fullCode": "DIN 1691",
    "title": "Cast iron with lamellar graphite (grey cast iron); properties",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "supersededBy": "DIN EN 1561",
    "description": "Former German standard specifying flake/lamellar-graphite grey cast iron grades (GG-10 to GG-40, e.g. GG-25) with tensile-strength-based classification, plus properties and testing. Superseded by DIN EN 1561.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "1693",
    "fullCode": "DIN 1693",
    "title": "Cast iron with nodular graphite (spheroidal graphite / ductile cast iron); properties",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "supersededBy": "DIN EN 1563",
    "description": "Former German standard for ductile/nodular graphite cast iron, defining GGG grades (GGG-40 to GGG-80) classified by tensile strength. Superseded by DIN EN 1563.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17155",
    "fullCode": "DIN 17155",
    "title": "Steel plate and strip for boilers and pressure vessels",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "superseded",
    "supersededBy": "DIN EN 10028",
    "description": "Former German standard for boiler and pressure-vessel plate steels (grades HI, HII, 17Mn4, 19Mn6) used for boilers, pressure vessels, heat exchangers and hot-liquid piping. Largely superseded by DIN EN 10028.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17111",
    "fullCode": "DIN 17111",
    "title": "Low carbon unalloyed steels for bolts, nuts and rivets; technical conditions of delivery",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "description": "Former German delivery-conditions standard for low-carbon unalloyed steels used in hot or cold forming of bolts, nuts, rivets and similar parts, including free-machining resulphurized grades. Withdrawn.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  },
  {
    "standardBody": "DIN",
    "designation": "17660",
    "fullCode": "DIN 17660",
    "title": "Wrought copper alloys; copper-zinc alloys (brass and special brass); composition",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "supersededBy": "DIN EN 1412",
    "description": "Former German standard specifying the composition of wrought copper-zinc alloys (brasses and special brasses). Withdrawn; now covered by DIN EN 1412 and DIN CEN/TS 13388.",
    "dataAccess": "restricted",
    "hasEnEquivalent": true
  }
];
