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
  },
  {
    "standardBody": "ASTM",
    "designation": "A283 Grade C",
    "fullCode": "ASTM A283 Grade C",
    "title": "Standard Specification for Low and Intermediate Tensile Strength Carbon Steel Plates",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers four grades (A, B, C, D) of carbon steel plates of structural quality for general application, distinguished by tensile strength level; Grades C and D are the most commonly stocked.",
    "dataAccess": "full",
    "scope": "Covers four grades (A, B, C, D) of carbon steel plates of structural quality for general application, distinguished by tensile strength level. Grades C and D are the most commonly stocked. Data below is for Grade C.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.24% max"
      },
      {
        "element": "Mn",
        "range": "0.90% max"
      },
      {
        "element": "P",
        "range": "0.030% max"
      },
      {
        "element": "S",
        "range": "0.030% max"
      },
      {
        "element": "Si",
        "range": "0.40% max (<= 1.5 in); 0.15-0.40% (> 1.5 in)"
      },
      {
        "element": "Cu",
        "range": "0.20% min (when copper steel specified)"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength",
        "value": "380-515 MPa (55-75 ksi)"
      },
      {
        "label": "Yield Point",
        "value": "205 MPa (30 ksi) min"
      },
      {
        "label": "Elongation",
        "value": "25% min in 50 mm (2 in.); 22% min in 200 mm (8 in.)"
      }
    ],
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A588",
    "fullCode": "ASTM A588",
    "title": "Standard Specification for High-Strength Low-Alloy Structural Steel, up to 50 ksi [345 MPa] Minimum Yield Point, with Atmospheric Corrosion Resistance",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers high-strength low-alloy (weathering) structural steel plates, shapes, and bars in Grades A, B, and K with a minimum yield point of 50 ksi and enhanced atmospheric corrosion resistance, used primarily in welded bridges and buildings.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A709",
    "fullCode": "ASTM A709",
    "title": "Standard Specification for Structural Steel for Bridges",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Covers carbon and high-strength low-alloy structural shapes, plates, and bars, and quenched-and-tempered alloy steel plates, intended for use in bridges (grades include 36, 50, 50S, 50W, HPS 50W, HPS 70W, and HPS 100W).",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A213",
    "fullCode": "ASTM A213",
    "title": "Standard Specification for Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers minimum-wall-thickness seamless ferritic and austenitic alloy-steel tubes (e.g. T11, T22, T91, TP304, TP316, TP347H) for boilers, superheaters, and heat exchangers in high-temperature service; corresponds to ASME SA-213.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A249",
    "fullCode": "ASTM A249",
    "title": "Standard Specification for Welded Austenitic Steel Boiler, Superheater, Heat-Exchanger, and Condenser Tubes",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers nominal-wall-thickness welded austenitic steel tubes (grades such as TP304/304L, TP316/316L, TP321, TP347) for boiler, superheater, heat-exchanger, and condenser applications; corresponds to ASME SA-249.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A269",
    "fullCode": "ASTM A269",
    "title": "Standard Specification for Seamless and Welded Austenitic Stainless Steel Tubing for General Service",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers nominal-wall-thickness seamless and welded austenitic stainless steel tubing for general corrosion-resisting and low- or high-temperature service, in common grades such as TP304/304L and TP316/316L.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A554",
    "fullCode": "ASTM A554",
    "title": "Standard Specification for Welded Stainless Steel Mechanical Tubing",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers welded austenitic, ferritic, and austenitic-ferritic (duplex) stainless steel mechanical tubing for ornamental, structural, exhaust, and other applications, in round, square, rectangular, or special shapes.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A666",
    "fullCode": "ASTM A666",
    "title": "Standard Specification for Annealed or Cold-Worked Austenitic Stainless Steel Sheet, Strip, Plate, and Flat Bar",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers austenitic stainless steel sheet, strip, plate, and flat bar in the annealed and cold-worked conditions, with several strength levels for structural and general corrosion-resistant applications.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A193",
    "fullCode": "ASTM A193",
    "title": "Standard Specification for Alloy-Steel and Stainless Steel Bolting for High Temperature or High Pressure Service and Other Special Purpose Applications",
    "materialType": "Stainless Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers alloy-steel and stainless steel bolting materials (bolts, studs, screws) such as grades B7, B8, and B8M for high-temperature or high-pressure service in pressure vessels, valves, flanges, and fittings.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A194",
    "fullCode": "ASTM A194",
    "title": "Standard Specification for Carbon Steel, Alloy Steel, and Stainless Steel Nuts for Bolts for High Pressure or High Temperature Service, or Both",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers carbon, alloy, and martensitic and austenitic stainless steel nuts (grades such as 2H, 4, 7, 8, 8M) intended for use with bolting in high-pressure or high-temperature service, or both.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A582",
    "fullCode": "ASTM A582",
    "title": "Standard Specification for Free-Machining Stainless Steel Bars",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers hot- or cold-finished free-machining stainless steel bars in austenitic, martensitic, and ferritic grades (e.g. Type 303, 416, 430F) designed for optimum machinability and general corrosion or high-temperature service.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A681",
    "fullCode": "ASTM A681",
    "title": "Standard Specification for Tool Steels Alloy",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers chemical, mechanical, and physical requirements for wrought alloy tool steel products, including air-hardening (A-series), high-carbon high-chromium (D-series), oil-hardening (O-series), shock-resisting (S-series), and hot-work (H-series) tool steels.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "A335",
    "fullCode": "ASTM A335",
    "title": "Standard Specification for Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers nominal-wall and minimum-wall seamless ferritic (chromium-molybdenum) alloy-steel pipe such as grades P11, P22, P91, and P9 for high-temperature service in power plants and refineries; corresponds to ASME SA-335.",
    "dataAccess": "restricted",
    "committee": "A"
  },
  {
    "standardBody": "ASTM",
    "designation": "B211",
    "fullCode": "ASTM B211",
    "title": "Standard Specification for Aluminum and Aluminum-Alloy Rolled or Cold Finished Bar, Rod, and Wire",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers rolled or cold-finished aluminum and aluminum-alloy bar, rod, and wire in numerous alloys (e.g. 2011, 2024, 6061, 7075) for general structural and machined-product applications.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B210",
    "fullCode": "ASTM B210",
    "title": "Standard Specification for Aluminum and Aluminum-Alloy Drawn Seamless Tubes",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers aluminum and aluminum-alloy drawn seamless tubes in straight lengths and coils, in alloys such as 1100, 3003, 5052, and 6061, for general-purpose and pressure applications.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B152",
    "fullCode": "ASTM B152",
    "title": "Standard Specification for Copper Sheet, Strip, Plate, and Rolled Bar",
    "materialType": "Copper Alloy",
    "application": [
      "Energy",
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers copper sheet, strip, plate, and rolled bar produced from coppers such as C10100, C10200 (oxygen-free), C11000 (ETP), and C12200 (DHP), in a range of tempers for electrical, architectural, and general applications.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B16",
    "fullCode": "ASTM B16",
    "title": "Standard Specification for Free-Cutting Brass Rod, Bar and Shapes for Use in Screw Machines",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers free-cutting brass rod, bar, and shapes produced from Copper Alloy UNS No. C36000 for high-speed screw machining and moderate thread rolling.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B160",
    "fullCode": "ASTM B160",
    "title": "Standard Specification for Nickel Rod and Bar",
    "materialType": "Nickel Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Covers hot-worked, cold-worked, or annealed nickel rod and bar in grades UNS N02200 (Nickel 200), N02201 (Nickel 201, low carbon), and N02211, in round, square, hexagonal, or rectangular section.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B564",
    "fullCode": "ASTM B564",
    "title": "Standard Specification for Nickel Alloy Forgings",
    "materialType": "Nickel Alloy",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Covers forgings of nickel and nickel-base alloys (e.g. N06600 Inconel 600, N06625 Inconel 625, N07718 Inconel 718, N10276 Hastelloy C-276) for corrosive and high-temperature service such as flanges, fittings, and valve parts.",
    "dataAccess": "restricted",
    "committee": "B"
  },
  {
    "standardBody": "ASTM",
    "designation": "B348",
    "fullCode": "ASTM B348",
    "title": "Standard Specification for Titanium and Titanium Alloy Bars and Billets",
    "materialType": "Titanium",
    "application": [
      "Aerospace",
      "Medical"
    ],
    "status": "active",
    "description": "Covers titanium and titanium alloy bars and billets in Grades 1 through 34 (including unalloyed grades and Ti-6Al-4V Grade 5) for aerospace, industrial, and medical applications.",
    "dataAccess": "restricted",
    "committee": "B"
  }
];
