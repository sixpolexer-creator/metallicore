/**
 * ISOLATED DATA MODULE — ASTM standards only. Ingested from
 * `data/standards_research/ASTM` (see that directory's
 * per-designation JSON files and `ASTM_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY ASTM records, typed as
 * AstmStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by ASTM — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { AstmStandard } from '@/types/standard';

export const astmStandards: AstmStandard[] = [
  {
    "standardBody": "ASTM",
    "designation": "A105",
    "fullCode": "ASTM A105",
    "title": "Standard Specification for Carbon Steel Forgings for Piping Applications",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers forged carbon steel piping components (flanges, fittings, valves, and similar parts) for ambient- and higher-temperature service in pressure systems.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A106 Grade B",
    "fullCode": "ASTM A106 Grade B",
    "title": "Standard Specification for Seamless Carbon Steel Pipe for High-Temperature Service",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers seamless carbon steel pipe for high-temperature service, suitable for bending, flanging, and similar forming operations.",
    "dataAccess": "full",
    "scope": "Covers seamless carbon steel pipe for high-temperature service, suitable for bending, flanging, and similar forming operations. Grade B is the most widely used grade for medium- and high-pressure piping.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.30% max"
      },
      {
        "element": "Mn",
        "range": "0.29-1.06%"
      },
      {
        "element": "P",
        "range": "0.035% max"
      },
      {
        "element": "S",
        "range": "0.035% max"
      },
      {
        "element": "Si",
        "range": "0.10% min"
      },
      {
        "element": "Cr",
        "range": "0.40% max"
      },
      {
        "element": "Cu",
        "range": "0.40% max"
      },
      {
        "element": "Mo",
        "range": "0.15% max"
      },
      {
        "element": "Ni",
        "range": "0.40% max"
      },
      {
        "element": "V",
        "range": "0.08% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "240 MPa (35 ksi) min"
      },
      {
        "label": "Tensile Strength",
        "value": "415 MPa (60 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "22% min (longitudinal, basic)"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A167",
    "fullCode": "ASTM A167",
    "title": "Standard Specification for Stainless and Heat-Resisting Chromium-Nickel Steel Plate, Sheet, and Strip (Withdrawn 2014)",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "superseded",
    "supersededBy": "A240",
    "description": "Formerly covered corrosion- and heat-resisting chromium-nickel (austenitic) stainless steel plate, sheet, and strip; withdrawn in 2014 with coverage largely superseded by ASTM A240.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A182",
    "fullCode": "ASTM A182",
    "title": "Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges, Forged Fittings, and Valves and Parts for High-Temperature Service",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers forged low-alloy and stainless steel piping components (flanges, fittings, valves, and parts) intended for high-temperature and high-pressure service, including grades such as F304, F316, F11, F22.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A240 Type 304",
    "fullCode": "ASTM A240 Type 304",
    "title": "Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip for Pressure Vessels and for General Applications",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers chromium and chromium-nickel stainless steel plate, sheet, and strip for pressure vessels and general applications.",
    "dataAccess": "full",
    "scope": "Covers chromium and chromium-nickel stainless steel plate, sheet, and strip for pressure vessels and general applications. Type 304 (UNS S30400) is the common austenitic 18/8 grade.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.08% max"
      },
      {
        "element": "Cr",
        "range": "18.0-20.0%"
      },
      {
        "element": "Ni",
        "range": "8.0-10.5%"
      },
      {
        "element": "Mn",
        "range": "2.0% max"
      },
      {
        "element": "Si",
        "range": "0.75% max"
      },
      {
        "element": "P",
        "range": "0.045% max"
      },
      {
        "element": "S",
        "range": "0.030% max"
      },
      {
        "element": "N",
        "range": "0.10% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "205 MPa (30 ksi) min (0.2% offset)"
      },
      {
        "label": "Tensile Strength",
        "value": "515 MPa (75 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "40% min in 50 mm"
      },
      {
        "label": "Hardness",
        "value": "92 HRB max / 201 HB max"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A276",
    "fullCode": "ASTM A276",
    "title": "Standard Specification for Stainless Steel Bars and Shapes",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers hot- and cold-finished stainless steel bars (rounds, squares, hexagons) and hot-rolled or extruded shapes for general applications, in common austenitic, ferritic, and martensitic grades.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A312",
    "fullCode": "ASTM A312",
    "title": "Standard Specification for Seamless, Welded, and Heavily Cold Worked Austenitic Stainless Steel Pipes",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers seamless, straight-seam welded, and heavily cold-worked austenitic stainless steel pipe (grades such as TP304/304L, TP316/316L) for high-temperature and general corrosive service.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A320",
    "fullCode": "ASTM A320",
    "title": "Standard Specification for Alloy-Steel and Stainless Steel Bolting for Low-Temperature Service",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers alloy and stainless steel bolting materials (bolts, studs, and other fasteners) for pressure and low-temperature service, including grades such as L7 and B8, with impact toughness requirements.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A36",
    "fullCode": "ASTM A36",
    "title": "Standard Specification for Carbon Structural Steel",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers carbon structural steel shapes, plates, and bars of structural quality for use in riveted, bolted, or welded construction of bridges, buildings, and general structural purposes.",
    "dataAccess": "full",
    "scope": "Covers carbon structural steel shapes, plates, and bars of structural quality for use in riveted, bolted, or welded construction of bridges, buildings, and general structural purposes.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.25-0.29% max (thickness dependent)"
      },
      {
        "element": "Mn",
        "range": "0.80-1.20% (for certain thicknesses; not required for shapes)"
      },
      {
        "element": "P",
        "range": "0.04% max"
      },
      {
        "element": "S",
        "range": "0.05% max"
      },
      {
        "element": "Si",
        "range": "0.40% max"
      },
      {
        "element": "Cu",
        "range": "0.20% min when copper steel specified"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "250 MPa (36 ksi) min"
      },
      {
        "label": "Tensile Strength",
        "value": "400-550 MPa (58-80 ksi)"
      },
      {
        "label": "Elongation",
        "value": "~20% min in 200 mm (8 in.)"
      },
      {
        "label": "Modulus Of Elasticity",
        "value": "200 GPa (29,000 ksi)"
      },
      {
        "label": "Hardness",
        "value": "119-162 HB (typical)"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A479",
    "fullCode": "ASTM A479",
    "title": "Standard Specification for Stainless Steel Bars and Shapes for Use in Boilers and Other Pressure Vessels",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers stainless steel bars and shapes for use in boilers and other pressure vessels, specifying grades, heat treatment conditions, and mechanical requirements for pressure-retaining service.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A500",
    "fullCode": "ASTM A500",
    "title": "Standard Specification for Cold-Formed Welded and Seamless Carbon Steel Structural Tubing in Rounds and Shapes",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers cold-formed welded and seamless carbon steel round, square, rectangular, and special-shape structural tubing (HSS) for welded, riveted, or bolted construction.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A516 Grade 70",
    "fullCode": "ASTM A516 Grade 70",
    "title": "Standard Specification for Pressure Vessel Plates, Carbon Steel, for Moderate- and Lower-Temperature Service",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers carbon steel plates intended primarily for service in welded pressure vessels where improved notch toughness is important, for moderate and lower temperature service.",
    "dataAccess": "full",
    "scope": "Covers carbon steel plates intended primarily for service in welded pressure vessels where improved notch toughness is important, for moderate and lower temperature service. Grade 70 is the highest-strength common grade.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.27% max (thickness dependent, to ~0.31% for thicker plate)"
      },
      {
        "element": "Mn",
        "range": "0.85-1.20%"
      },
      {
        "element": "P",
        "range": "0.025% max"
      },
      {
        "element": "S",
        "range": "0.025% max"
      },
      {
        "element": "Si",
        "range": "0.15-0.40%"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "260 MPa (38 ksi) min"
      },
      {
        "label": "Tensile Strength",
        "value": "485-620 MPa (70-90 ksi)"
      },
      {
        "label": "Elongation",
        "value": "17-21% min"
      },
      {
        "label": "Notch Toughness",
        "value": "Good impact toughness at low temperature (down to approx -46 C when normalized/impact tested)"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A53",
    "fullCode": "ASTM A53",
    "title": "Standard Specification for Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers seamless and welded black and hot-dipped galvanized steel pipe (Types F, E, S; Grades A and B) for mechanical and pressure applications, and for ordinary use in steam, water, gas, and air lines.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A537",
    "fullCode": "ASTM A537",
    "title": "Standard Specification for Pressure Vessel Plates, Heat-Treated, Carbon-Manganese-Silicon Steel",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers heat-treated (normalized, or quenched and tempered) carbon-manganese-silicon steel plates for pressure vessels, offering improved notch toughness.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A572 Grade 50",
    "fullCode": "ASTM A572 Grade 50",
    "title": "Standard Specification for High-Strength Low-Alloy Columbium-Vanadium Structural Steel",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers high-strength low-alloy (HSLA) structural steel shapes, plates, sheet piling, and bars for structural applications.",
    "dataAccess": "full",
    "scope": "Covers high-strength low-alloy (HSLA) structural steel shapes, plates, sheet piling, and bars for structural applications. Grade 50 is the most common grade; strengthening is by grain refinement and microalloying rather than high carbon.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.23% max"
      },
      {
        "element": "Mn",
        "range": "1.35% max (1.50% max for some products)"
      },
      {
        "element": "P",
        "range": "0.04% max"
      },
      {
        "element": "S",
        "range": "0.05% max"
      },
      {
        "element": "Si",
        "range": "0.40% max"
      },
      {
        "element": "Nb",
        "range": "0.005-0.05% (columbium/niobium)"
      },
      {
        "element": "V",
        "range": "0.01-0.15% (vanadium, when used)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "345 MPa (50 ksi) min"
      },
      {
        "label": "Tensile Strength",
        "value": "450 MPa (65 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "21% min in 50 mm (18% in 200 mm)"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A992",
    "fullCode": "ASTM A992",
    "title": "Standard Specification for Structural Steel Shapes",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers rolled structural steel wide-flange shapes for use in building framing or bridges, or for general structural purposes.",
    "dataAccess": "full",
    "scope": "Covers rolled structural steel wide-flange shapes for use in building framing or bridges, or for general structural purposes. It is the preferred standard for wide-flange (W) beams in the US.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.23% max"
      },
      {
        "element": "Mn",
        "range": "0.50-1.60%"
      },
      {
        "element": "P",
        "range": "0.035% max"
      },
      {
        "element": "S",
        "range": "0.045% max"
      },
      {
        "element": "Si",
        "range": "0.40% max"
      },
      {
        "element": "V",
        "range": "0.15% max"
      },
      {
        "element": "Nb",
        "range": "0.05% max (columbium/niobium)"
      },
      {
        "element": "Cu",
        "range": "0.60% max"
      },
      {
        "element": "Ni",
        "range": "0.45% max"
      },
      {
        "element": "Cr",
        "range": "0.35% max"
      },
      {
        "element": "Mo",
        "range": "0.15% max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "345-450 MPa (50-65 ksi), 50 ksi min"
      },
      {
        "label": "Tensile Strength",
        "value": "450 MPa (65 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "21% min in 50 mm; 18% min in 200 mm"
      },
      {
        "label": "Yield To Tensile Ratio",
        "value": "0.85 max"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "B209 (Alloy 6061-T6)",
    "fullCode": "ASTM B209 (Alloy 6061-T6)",
    "title": "Standard Specification for Aluminum and Aluminum-Alloy Sheet and Plate",
    "materialType": "Aluminum",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers aluminum and aluminum-alloy flat sheet and plate.",
    "dataAccess": "full",
    "scope": "Covers aluminum and aluminum-alloy flat sheet and plate. Data below is for the common structural alloy 6061 in the T6 temper (UNS A96061).",
    "chemicalComposition": [
      {
        "element": "Si",
        "range": "0.40-0.80%"
      },
      {
        "element": "Fe",
        "range": "0.70% max"
      },
      {
        "element": "Cu",
        "range": "0.15-0.40%"
      },
      {
        "element": "Mn",
        "range": "0.15% max"
      },
      {
        "element": "Mg",
        "range": "0.80-1.20%"
      },
      {
        "element": "Cr",
        "range": "0.04-0.35%"
      },
      {
        "element": "Zn",
        "range": "0.25% max"
      },
      {
        "element": "Ti",
        "range": "0.15% max"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Yield Strength",
        "value": "276 MPa (40 ksi) min"
      },
      {
        "label": "Tensile Strength",
        "value": "310 MPa (45 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "12% min in 50 mm (2 in.), thickness dependent"
      }
    ],
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B221 (Aluminum, alloy 6061 etc.)",
    "fullCode": "ASTM B221 (Aluminum, alloy 6061 etc.)",
    "title": "Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes",
    "materialType": "Aluminum",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers aluminum and aluminum-alloy extruded bars, rods, wire, profiles, and tubes (including alloy 6061-T6) for general structural and industrial applications.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B265 (Titanium, Grade 2 etc.)",
    "fullCode": "ASTM B265 (Titanium, Grade 2 etc.)",
    "title": "Standard Specification for Titanium and Titanium Alloy Strip, Sheet, and Plate",
    "materialType": "Titanium",
    "application": [
      "Aerospace",
      "Marine",
      "Medical"
    ],
    "status": "active",
    "description": "Covers annealed titanium and titanium alloy strip, sheet, and plate in numerous grades (e.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B637 (Inconel 718 / UNS N07718)",
    "fullCode": "ASTM B637 (Inconel 718 / UNS N07718)",
    "title": "Standard Specification for Precipitation-Hardening and Cold Worked Nickel Alloy Bars, Forgings, and Forging Stock for Moderate or High Temperature Service",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace",
      "Energy"
    ],
    "status": "active",
    "description": "Covers precipitation-hardenable and cold-worked nickel alloy bars, forgings, and forging stock (including UNS N07718 / Inconel 718) for moderate and high temperature service such as aerospace and oil and gas.",
    "dataAccess": "restricted",
    "committee": "B"
  }
];
