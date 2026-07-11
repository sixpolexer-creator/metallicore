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
  }
];
