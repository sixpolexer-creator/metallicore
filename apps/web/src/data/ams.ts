/**
 * ISOLATED DATA MODULE — AMS standards only. Ingested from
 * `data/standards_research/AMS` (see that directory's
 * per-designation JSON files and `AMS_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY AMS records, typed as
 * AmsStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by AMS — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { AmsStandard } from '@/types/standard';

export const amsStandards: AmsStandard[] = [
  {
    "standardBody": "AMS",
    "designation": "2750",
    "fullCode": "AMS 2750",
    "title": "Pyrometry",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Process (not material) specification covering pyrometric requirements for thermal-processing equipment, including temperature sensors, instrumentation, thermal-processing equipment classification, and system accuracy/uniformity testing.",
    "dataAccess": "restricted",
    "revision": "F/G"
  },
  {
    "standardBody": "AMS",
    "designation": "4037",
    "fullCode": "AMS 4037",
    "title": "Aluminum Alloy, Sheet and Plate, 4.4Cu-1.5Mg-0.60Mn (2024; -T3 Flat Sheet, -T351 Plate), Solution Heat Treated",
    "materialType": "Aluminum",
    "application": [
      "Aerospace",
      "Construction"
    ],
    "status": "active",
    "description": "2024 aluminum alloy sheet and plate, solution heat treated (T3/T351 tempers), for aerospace structural applications.",
    "dataAccess": "full",
    "scope": "2024 aluminum alloy sheet and plate, solution heat treated (T3/T351 tempers), for aerospace structural applications.",
    "chemicalComposition": [
      {
        "element": "Cu",
        "range": "3.8-4.9"
      },
      {
        "element": "Mg",
        "range": "1.2-1.8"
      },
      {
        "element": "Mn",
        "range": "0.30-0.9"
      },
      {
        "element": "Si",
        "range": "0.50 max"
      },
      {
        "element": "Fe",
        "range": "0.50 max"
      },
      {
        "element": "Zn",
        "range": "0.25 max"
      },
      {
        "element": "Cr",
        "range": "0.10 max"
      },
      {
        "element": "Ti",
        "range": "0.15 max"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "483 MPa (70 ksi)"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "345 MPa (50 ksi)"
      },
      {
        "label": "Elongation %",
        "value": "15-20"
      },
      {
        "label": "Density",
        "value": "2.78 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "73.1 GPa (10.6 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 120 HB"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "4045",
    "fullCode": "AMS 4045",
    "title": "Aluminum Alloy, Sheet and Plate, 5.6Zn-2.5Mg-1.6Cu-0.23Cr (7075; -T6 Sheet, -T651 Plate), Solution and Precipitation Heat Treated",
    "materialType": "Aluminum",
    "application": [
      "Aerospace",
      "Construction"
    ],
    "status": "active",
    "description": "7075 aluminum alloy sheet and plate in the -T6/-T651 tempers for high-strength aerospace structural applications.",
    "dataAccess": "full",
    "scope": "7075 aluminum alloy sheet and plate in the -T6/-T651 tempers for high-strength aerospace structural applications.",
    "chemicalComposition": [
      {
        "element": "Zn",
        "range": "5.1-6.1"
      },
      {
        "element": "Mg",
        "range": "2.1-2.9"
      },
      {
        "element": "Cu",
        "range": "1.2-2.0"
      },
      {
        "element": "Cr",
        "range": "0.18-0.28"
      },
      {
        "element": "Fe",
        "range": "0.50 max"
      },
      {
        "element": "Si",
        "range": "0.40 max"
      },
      {
        "element": "Mn",
        "range": "0.30 max"
      },
      {
        "element": "Ti",
        "range": "0.20 max"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "572 MPa (83 ksi)"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "503 MPa (73 ksi)"
      },
      {
        "label": "Elongation %",
        "value": "9-11"
      },
      {
        "label": "Density",
        "value": "2.81 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "71.7 GPa (10.4 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 150 HB"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "4911",
    "fullCode": "AMS 4911",
    "title": "Titanium Alloy, Sheet, Strip, and Plate, 6Al - 4V, Annealed",
    "materialType": "Titanium",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Ti-6Al-4V (Grade 5) titanium alloy in sheet, strip, and plate form, annealed condition, for aerospace parts.",
    "dataAccess": "full",
    "scope": "Ti-6Al-4V (Grade 5) titanium alloy in sheet, strip, and plate form, annealed condition, for aerospace parts.",
    "chemicalComposition": [
      {
        "element": "Al",
        "range": "5.5-6.75"
      },
      {
        "element": "V",
        "range": "3.5-4.5"
      },
      {
        "element": "Fe",
        "range": "0.30 max"
      },
      {
        "element": "O",
        "range": "0.20 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "N",
        "range": "0.05 max"
      },
      {
        "element": "H",
        "range": "0.015 max"
      },
      {
        "element": "Y",
        "range": "0.005 max"
      },
      {
        "element": "Ti",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "895-965 MPa (130-140 ksi), 130 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "828-895 MPa (120-130 ksi), 120 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "10-14"
      },
      {
        "label": "Density",
        "value": "4.43 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "113.8 GPa (16.5 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 36 HRC"
      }
    ],
    "revision": "T"
  },
  {
    "standardBody": "AMS",
    "designation": "4928",
    "fullCode": "AMS 4928",
    "title": "Titanium Alloy Bars, Wire, Forgings, Rings, and Drawn Shapes, 6Al - 4V, Annealed",
    "materialType": "Titanium",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Ti-6Al-4V (Grade 5) titanium alloy bars, wire, forgings, rings, and drawn shapes, annealed condition, for aerospace parts.",
    "dataAccess": "full",
    "scope": "Ti-6Al-4V (Grade 5) titanium alloy bars, wire, forgings, rings, and drawn shapes, annealed condition, for aerospace parts.",
    "chemicalComposition": [
      {
        "element": "Al",
        "range": "5.5-6.75"
      },
      {
        "element": "V",
        "range": "3.5-4.5"
      },
      {
        "element": "Fe",
        "range": "0.30 max"
      },
      {
        "element": "O",
        "range": "0.20 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "N",
        "range": "0.05 max"
      },
      {
        "element": "H",
        "range": "0.0125 max"
      },
      {
        "element": "Ti",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "895-1000 MPa (130-145 ksi), 130 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "828-925 MPa (120-134 ksi), 120 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "10-15"
      },
      {
        "label": "Reduction Of Area %",
        "value": "25-35"
      },
      {
        "label": "Density",
        "value": "4.43 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "113.8 GPa (16.5 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 36 HRC"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5510",
    "fullCode": "AMS 5510",
    "title": "Steel, Corrosion and Heat-Resistant, Sheet, Strip, and Plate, 18Cr-10Ni-0.70Ti (SAE 30321), Solution Heat Treated (321 Stainless)",
    "materialType": "Titanium",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "321 titanium-stabilized austenitic stainless steel sheet, strip, and plate in the solution-treated condition for elevated-temperature aerospace applications.",
    "dataAccess": "full",
    "scope": "321 titanium-stabilized austenitic stainless steel sheet, strip, and plate in the solution-treated condition for elevated-temperature aerospace applications.",
    "chemicalComposition": [
      {
        "element": "Cr",
        "range": "17.0-19.0"
      },
      {
        "element": "Ni",
        "range": "9.0-12.0"
      },
      {
        "element": "Ti",
        "range": "5xC min to 0.70 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "Mn",
        "range": "2.0 max"
      },
      {
        "element": "Si",
        "range": "1.0 max"
      },
      {
        "element": "P",
        "range": "0.045 max"
      },
      {
        "element": "S",
        "range": "0.03 max"
      },
      {
        "element": "Fe",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "515-620 MPa (75-90 ksi), 75 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "205-240 MPa (30-35 ksi), 30 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "40-45"
      },
      {
        "label": "Density",
        "value": "7.90 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "193 GPa (28 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 80 HRB"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5536",
    "fullCode": "AMS 5536",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Sheet, Strip, and Plate, 47.5Ni-22Cr-1.5Co-9.0Mo-0.60W-18.5Fe, Solution Heat Treated (Hastelloy X / UNS N06002)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Hastelloy X (UNS N06002) nickel-base superalloy sheet, strip, and plate in the solution-annealed condition for high-temperature aerospace applications such as combustor and afterburner components.",
    "dataAccess": "full",
    "scope": "Hastelloy X (UNS N06002) nickel-base superalloy sheet, strip, and plate in the solution-annealed condition for high-temperature aerospace applications such as combustor and afterburner components.",
    "chemicalComposition": [
      {
        "element": "Ni",
        "range": "balance (approx 47)"
      },
      {
        "element": "Cr",
        "range": "20.5-23.0"
      },
      {
        "element": "Fe",
        "range": "17.0-20.0"
      },
      {
        "element": "Mo",
        "range": "8.0-10.0"
      },
      {
        "element": "Co",
        "range": "0.5-2.5"
      },
      {
        "element": "W",
        "range": "0.2-1.0"
      },
      {
        "element": "C",
        "range": "0.05-0.15"
      },
      {
        "element": "Mn",
        "range": "1.0 max"
      },
      {
        "element": "Si",
        "range": "1.0 max"
      },
      {
        "element": "B",
        "range": "0.008 max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "745-800 MPa (108-116 ksi), 100 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "360-390 MPa (52-57 ksi), 52 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "35-45"
      },
      {
        "label": "Density",
        "value": "8.22 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "205 GPa (29.8 x 10^6 psi)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5596",
    "fullCode": "AMS 5596",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Sheet, Strip, and Plate, 52.5Ni-19Cr-3.0Mo-5.1Cb-0.90Ti-0.60Al-18Fe, Consumable Electrode or Vacuum Induction Melted, 1775F (968C) Solution Heat Treated (Alloy 718 / Inconel 718)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Alloy 718 (Inconel 718, UNS N07718) sheet, strip, and plate, solution-heat-treated and precipitation-hardenable, for aerospace parts.",
    "dataAccess": "full",
    "scope": "Alloy 718 (Inconel 718, UNS N07718) sheet, strip, and plate, solution-heat-treated and precipitation-hardenable, for aerospace parts.",
    "chemicalComposition": [
      {
        "element": "Ni",
        "range": "50.0-55.0"
      },
      {
        "element": "Cr",
        "range": "17.0-21.0"
      },
      {
        "element": "Fe",
        "range": "balance (approx 17-19)"
      },
      {
        "element": "Nb",
        "range": "4.75-5.5"
      },
      {
        "element": "Mo",
        "range": "2.8-3.3"
      },
      {
        "element": "Ti",
        "range": "0.65-1.15"
      },
      {
        "element": "Al",
        "range": "0.2-0.8"
      },
      {
        "element": "Co",
        "range": "1.0 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "Mn",
        "range": "0.35 max"
      },
      {
        "element": "Si",
        "range": "0.35 max"
      },
      {
        "element": "B",
        "range": "0.006 max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1240-1380 MPa (180-200 ksi)"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "1030-1100 MPa (150-160 ksi)"
      },
      {
        "label": "Elongation %",
        "value": "12-20"
      },
      {
        "label": "Density",
        "value": "8.19 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "200 GPa (29 x 10^6 psi)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5599",
    "fullCode": "AMS 5599",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Sheet, Strip, and Plate, 62Ni-21.5Cr-9.0Mo-3.6Cb, Solution Heat Treated (Alloy 625 / Inconel 625)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Alloy 625 (Inconel 625, UNS N06625) sheet, strip, and plate in the solution-annealed condition for corrosion- and heat-resistant aerospace applications.",
    "dataAccess": "full",
    "scope": "Alloy 625 (Inconel 625, UNS N06625) sheet, strip, and plate in the solution-annealed condition for corrosion- and heat-resistant aerospace applications.",
    "chemicalComposition": [
      {
        "element": "Ni",
        "range": "58.0 min"
      },
      {
        "element": "Cr",
        "range": "20.0-23.0"
      },
      {
        "element": "Mo",
        "range": "8.0-10.0"
      },
      {
        "element": "Nb",
        "range": "3.15-4.15"
      },
      {
        "element": "Fe",
        "range": "5.0 max"
      },
      {
        "element": "Co",
        "range": "1.0 max"
      },
      {
        "element": "C",
        "range": "0.10 max"
      },
      {
        "element": "Al",
        "range": "0.40 max"
      },
      {
        "element": "Ti",
        "range": "0.40 max"
      },
      {
        "element": "Mn",
        "range": "0.50 max"
      },
      {
        "element": "Si",
        "range": "0.50 max"
      },
      {
        "element": "P",
        "range": "0.015 max"
      },
      {
        "element": "S",
        "range": "0.015 max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "827-1034 MPa (120-150 ksi), 120 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "414-517 MPa (60-75 ksi), 60 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "30-50"
      },
      {
        "label": "Density",
        "value": "8.44 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "207.5 GPa (30.1 x 10^6 psi)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5604",
    "fullCode": "AMS 5604",
    "title": "Steel, Corrosion-Resistant, Sheet, Strip, and Plate, 16Cr-4.0Ni-4.0Cu-0.30Cb, Solution Heat Treated, Precipitation-Hardenable (17-4 PH / UNS S17400)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Covers 17-4 PH stainless steel (UNS S17400) sheet, strip, and plate in the solution-treated, precipitation-hardenable condition.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5643",
    "fullCode": "AMS 5643",
    "title": "Steel, Corrosion-Resistant, Bars, Wire, Forgings, Mechanical Tubing, and Rings, 16Cr-4.0Ni-4.0Cu-0.30Cb, Solution Heat Treated, Precipitation-Hardenable (17-4 PH / UNS S17400)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "17-4 PH martensitic precipitation-hardening stainless steel (UNS S17400) bars, wire, forgings, mechanical tubing, and rings for aerospace parts requiring strength and corrosion resistance to about 600F (316C).",
    "dataAccess": "full",
    "scope": "17-4 PH martensitic precipitation-hardening stainless steel (UNS S17400) bars, wire, forgings, mechanical tubing, and rings for aerospace parts requiring strength and corrosion resistance to about 600F (316C).",
    "chemicalComposition": [
      {
        "element": "Cr",
        "range": "15.0-17.5"
      },
      {
        "element": "Ni",
        "range": "3.0-5.0"
      },
      {
        "element": "Cu",
        "range": "3.0-5.0"
      },
      {
        "element": "Nb",
        "range": "0.15-0.45"
      },
      {
        "element": "C",
        "range": "0.07 max"
      },
      {
        "element": "Mn",
        "range": "1.0 max"
      },
      {
        "element": "Si",
        "range": "1.0 max"
      },
      {
        "element": "P",
        "range": "0.04 max"
      },
      {
        "element": "S",
        "range": "0.03 max"
      },
      {
        "element": "Fe",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1310 MPa (190 ksi) min"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "1170 MPa (170 ksi) min"
      },
      {
        "label": "Elongation %",
        "value": "10-14"
      },
      {
        "label": "Hardness",
        "value": "40-47 HRC (H900)"
      },
      {
        "label": "Density",
        "value": "7.80 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "196 GPa (28.5 x 10^6 psi)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5662",
    "fullCode": "AMS 5662",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings, 52.5Ni-19Cr-3.0Mo-5.1Cb-0.90Ti-0.60Al-18Fe, Consumable Electrode or Vacuum Induction Melted, 1775F (968C) Solution Heat Treated, Precipitation-Hardenable (Alloy 718 / Inconel 718)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Alloy 718 (Inconel 718, UNS N07718) bars, forgings, and rings supplied solution-heat-treated and precipitation-hardenable, for aerospace parts requiring strength to about 1300F (704C).",
    "dataAccess": "full",
    "scope": "Alloy 718 (Inconel 718, UNS N07718) bars, forgings, and rings supplied solution-heat-treated and precipitation-hardenable, for aerospace parts requiring strength to about 1300F (704C).",
    "chemicalComposition": [
      {
        "element": "Ni",
        "range": "50.0-55.0"
      },
      {
        "element": "Cr",
        "range": "17.0-21.0"
      },
      {
        "element": "Fe",
        "range": "balance (approx 17-19)"
      },
      {
        "element": "Nb",
        "range": "4.75-5.5"
      },
      {
        "element": "Mo",
        "range": "2.8-3.3"
      },
      {
        "element": "Ti",
        "range": "0.65-1.15"
      },
      {
        "element": "Al",
        "range": "0.2-0.8"
      },
      {
        "element": "Co",
        "range": "1.0 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "Mn",
        "range": "0.35 max"
      },
      {
        "element": "Si",
        "range": "0.35 max"
      },
      {
        "element": "Cu",
        "range": "0.30 max"
      },
      {
        "element": "B",
        "range": "0.006 max"
      },
      {
        "element": "P",
        "range": "0.015 max"
      },
      {
        "element": "S",
        "range": "0.015 max"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1240-1400 MPa (180-203 ksi), 180 ksi typical minimum"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "1030-1170 MPa (150-170 ksi), 150 ksi typical minimum"
      },
      {
        "label": "Elongation %",
        "value": "12-21"
      },
      {
        "label": "Density",
        "value": "8.19 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "200 GPa (29 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "approx 36-44 HRC (aged)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5663",
    "fullCode": "AMS 5663",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings, 52.5Ni-19Cr-3.0Mo-5.1Cb-0.90Ti-0.60Al-18Fe, Consumable Electrode or Vacuum Induction Melted, 1775F (968C) Solution and Precipitation Heat Treated (Alloy 718 / Inconel 718)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Covers Alloy 718 (UNS N07718) bars, forgings, and rings supplied solution and precipitation (age) heat treated to high strength for aerospace parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5666",
    "fullCode": "AMS 5666",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings, 62Ni-21.5Cr-9.0Mo-3.6Cb, Annealed (Alloy 625 / Inconel 625)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Covers Alloy 625 (UNS N06625) bars, forgings, and rings in the annealed condition for corrosion- and heat-resistant aerospace applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5731",
    "fullCode": "AMS 5731",
    "title": "Steel, Corrosion and Heat-Resistant, Bars, Wire, Forgings, and Rings, 15Cr-25.5Ni-1.3Mo-2.1Ti-0.006B-0.30V, Consumable Electrode Melted, Solution Heat Treated (A-286 / UNS S66286)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "A-286 iron-nickel-base superalloy (UNS S66286) bars, wire, forgings, and rings in the solution-treated condition for elevated-temperature aerospace fasteners and parts to about 1300F (704C).",
    "dataAccess": "full",
    "scope": "A-286 iron-nickel-base superalloy (UNS S66286) bars, wire, forgings, and rings in the solution-treated condition for elevated-temperature aerospace fasteners and parts to about 1300F (704C). Note: A-286, not Inconel 625 as sometimes cross-referenced.",
    "chemicalComposition": [
      {
        "element": "Fe",
        "range": "balance (approx 53)"
      },
      {
        "element": "Ni",
        "range": "24.0-27.0"
      },
      {
        "element": "Cr",
        "range": "13.5-16.0"
      },
      {
        "element": "Mo",
        "range": "1.0-1.5"
      },
      {
        "element": "Ti",
        "range": "1.9-2.35"
      },
      {
        "element": "V",
        "range": "0.1-0.5"
      },
      {
        "element": "Al",
        "range": "0.35 max"
      },
      {
        "element": "Mn",
        "range": "2.0 max"
      },
      {
        "element": "Si",
        "range": "1.0 max"
      },
      {
        "element": "C",
        "range": "0.08 max"
      },
      {
        "element": "B",
        "range": "0.003-0.010"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "895-1035 MPa (130-150 ksi)"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "590-725 MPa (85-105 ksi)"
      },
      {
        "label": "Elongation %",
        "value": "15-25"
      },
      {
        "label": "Density",
        "value": "7.94 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "201 GPa (29.1 x 10^6 psi)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5754",
    "fullCode": "AMS 5754",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings, 47.5Ni-22Cr-1.5Co-9.0Mo-0.60W-18.5Fe, Solution Heat Treated (Hastelloy X / UNS N06002)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Covers Hastelloy X (UNS N06002) bars, forgings, and rings in the solution-annealed condition for high-temperature aerospace applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "6414",
    "fullCode": "AMS 6414",
    "title": "Steel, Bars, Forgings, and Tubing, 0.80Cr-1.8Ni-0.25Mo (0.38-0.43C), Consumable Electrode Vacuum Melted (4340 type)",
    "materialType": "Steel",
    "application": [
      "Aerospace",
      "Construction"
    ],
    "status": "active",
    "description": "Premium consumable-electrode vacuum-melted AISI 4340-type low-alloy steel bars, forgings, and tubing for high-strength aerospace structural parts.",
    "dataAccess": "full",
    "scope": "Premium consumable-electrode vacuum-melted AISI 4340-type low-alloy steel bars, forgings, and tubing for high-strength aerospace structural parts.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.38-0.43"
      },
      {
        "element": "Mn",
        "range": "0.60-0.80"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "Cr",
        "range": "0.70-0.90"
      },
      {
        "element": "Ni",
        "range": "1.65-2.00"
      },
      {
        "element": "Mo",
        "range": "0.20-0.30"
      },
      {
        "element": "P",
        "range": "0.010 max"
      },
      {
        "element": "S",
        "range": "0.010 max"
      },
      {
        "element": "Fe",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1240-1980 MPa (180-287 ksi) depending on temper; ~1860 MPa (270 ksi) at low tempering"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "1080-1620 MPa (157-235 ksi) depending on temper"
      },
      {
        "label": "Elongation %",
        "value": "10-15"
      },
      {
        "label": "Density",
        "value": "7.85 g/cm3"
      },
      {
        "label": "Elastic Modulus",
        "value": "205 GPa (29.7 x 10^6 psi)"
      },
      {
        "label": "Hardness",
        "value": "up to approx 53 HRC (fully hardened)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "6415",
    "fullCode": "AMS 6415",
    "title": "Steel, Bars, Forgings, and Tubing, 0.80Cr-1.8Ni-0.25Mo (0.38-0.43C) (AISI 4340)",
    "materialType": "Steel",
    "application": [
      "Aerospace",
      "Construction"
    ],
    "status": "active",
    "description": "Covers AISI 4340 low-alloy steel bars, forgings, and tubing for heat-treated high-strength aerospace structural parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "4050",
    "fullCode": "AMS 4050",
    "title": "Aluminum Alloy, Plate, 6.2Zn-2.3Cu-2.3Mg-0.12Zr (7050-T7451), Solution Heat Treated, Stress Relieved, and Overaged",
    "materialType": "Aluminum",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "7050 aluminum alloy plate in the -T7451 temper for thick-section aerospace structure such as bulkheads, wing spars, and fuselage frames, offering improved resistance to stress-corrosion cracking and exfoliation.",
    "dataAccess": "full",
    "scope": "Covers 7050 aluminum alloy plate in the -T7451 temper (solution heat treated, stress relieved by stretching, and overaged) for aerospace structural applications, particularly thick sections such as bulkheads, wing spars, and fuselage frames.",
    "chemicalComposition": [
      {
        "element": "Zn",
        "range": "5.7-6.7"
      },
      {
        "element": "Cu",
        "range": "2.0-2.6"
      },
      {
        "element": "Mg",
        "range": "1.9-2.6"
      },
      {
        "element": "Zr",
        "range": "0.08-0.15"
      },
      {
        "element": "Si",
        "range": "0.12 max"
      },
      {
        "element": "Fe",
        "range": "0.15 max"
      },
      {
        "element": "Mn",
        "range": "0.10 max"
      },
      {
        "element": "Cr",
        "range": "0.04 max"
      },
      {
        "element": "Ti",
        "range": "0.06 max"
      },
      {
        "element": "Al",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "490-510 MPa (71-74 ksi), thickness dependent (T7451, longitudinal)"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "420-441 MPa (61-64 ksi)"
      },
      {
        "label": "Elongation %",
        "value": "9-10"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "5659",
    "fullCode": "AMS 5659",
    "title": "Steel, Corrosion-Resistant, Bars, Wire, Forgings, Rings, and Extrusions, 15Cr-4.5Ni-3.5Cu-0.30Cb (15-5 PH), Consumable Electrode Remelted, Solution Heat Treated, Precipitation-Hardenable (UNS S15500)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "15-5 PH martensitic precipitation-hardening stainless steel (UNS S15500) bars, wire, forgings, rings, and extrusions, consumable-electrode remelted, for aerospace parts requiring strength and corrosion resistance to about 600F (316C) with better short-transverse toughness than 17-4 PH.",
    "dataAccess": "full",
    "scope": "Covers 15-5 PH martensitic precipitation-hardening stainless steel (UNS S15500) in bars, wire, forgings, flash-welded rings, and extrusions, consumable-electrode remelted (VAR or ESR), supplied solution heat treated and precipitation-hardenable.",
    "chemicalComposition": [
      {
        "element": "Cr",
        "range": "14.0-15.50"
      },
      {
        "element": "Ni",
        "range": "3.50-5.50"
      },
      {
        "element": "Cu",
        "range": "2.50-4.50"
      },
      {
        "element": "Nb",
        "range": "0.15-0.45"
      },
      {
        "element": "Mo",
        "range": "0.50 max"
      },
      {
        "element": "C",
        "range": "0.07 max"
      },
      {
        "element": "Mn",
        "range": "1.00 max"
      },
      {
        "element": "Si",
        "range": "1.00 max"
      },
      {
        "element": "P",
        "range": "0.030 max"
      },
      {
        "element": "S",
        "range": "0.015 max"
      },
      {
        "element": "Fe",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1310 MPa (190 ksi) at H900; 930 MPa (135 ksi) at H1150"
      },
      {
        "label": "Yield Strength 0.2pct",
        "value": "1170 MPa (170 ksi) at H900; 725 MPa (105 ksi) at H1150"
      },
      {
        "label": "Elongation %",
        "value": "10-16 (aging temper dependent)"
      },
      {
        "label": "Hardness",
        "value": "38-44 HRC (H900); 27-35 HRC (H1150)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "6260",
    "fullCode": "AMS 6260",
    "title": "Steel, Bars, Forgings, and Tubing, 3.2Ni-1.2Cr-0.12Mo (0.07-0.13C) (AISI 9310), Carburizing Grade (UNS G93106)",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Aircraft-quality AISI 9310 chromium-nickel-molybdenum carburizing steel (UNS G93106) in bars, forgings, mechanical tubing, and forging stock; the tough low-carbon core with a hard carburized case suits aircraft gears, shafts, and bearing components.",
    "dataAccess": "full",
    "scope": "Covers aircraft-quality AISI 9310 chromium-nickel-molybdenum carburizing steel (UNS G93106) in bars, forgings, mechanical tubing, and forging stock. Low nominal carbon provides a tough core while carburizing produces a hard, wear-resistant, high-fatigue case.",
    "chemicalComposition": [
      {
        "element": "C",
        "range": "0.07-0.13"
      },
      {
        "element": "Mn",
        "range": "0.45-0.65"
      },
      {
        "element": "Si",
        "range": "0.15-0.35"
      },
      {
        "element": "P",
        "range": "0.025 max"
      },
      {
        "element": "S",
        "range": "0.025 max"
      },
      {
        "element": "Cr",
        "range": "1.00-1.40"
      },
      {
        "element": "Ni",
        "range": "3.00-3.50"
      },
      {
        "element": "Mo",
        "range": "0.08-0.15"
      },
      {
        "element": "Fe",
        "range": "balance"
      }
    ],
    "mechanicalProperties": [
      {
        "label": "Tensile Strength Ultimate",
        "value": "1070-1290 MPa (typical heat-treated core)"
      },
      {
        "label": "Elongation %",
        "value": "15-16"
      },
      {
        "label": "Core Hardness",
        "value": "330-375 HV"
      },
      {
        "label": "Case Hardness",
        "value": "58-62 HRC (after carburizing and hardening)"
      }
    ]
  },
  {
    "standardBody": "AMS",
    "designation": "4967",
    "fullCode": "AMS 4967",
    "title": "Titanium Alloy, Bars, Wire, Forgings, and Rings, 6.0Al-4.0V, Annealed, Heat Treatable",
    "materialType": "Titanium",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Ti-6Al-4V (Grade 5) bars, wire, forgings, flash-welded rings, and stock supplied annealed but heat treatable, allowing subsequent solution treatment and aging to higher strength for aerospace parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "4965",
    "fullCode": "AMS 4965",
    "title": "Titanium Alloy, Bars, Wire, Forgings, and Rings, 6.0Al-4.0V, Solution Heat Treated and Aged",
    "materialType": "Titanium",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Ti-6Al-4V (Grade 5) bars, wire, forgings, and rings supplied in the solution-heat-treated and aged (STA) condition for high-strength aerospace parts such as airframe components and fasteners.",
    "dataAccess": "restricted",
    "revision": "N"
  },
  {
    "standardBody": "AMS",
    "designation": "5613",
    "fullCode": "AMS 5613",
    "title": "Steel, Corrosion- and Heat-Resistant, Bars, Wire, Forgings, Forging and Ring Stock, Mechanical Tubing, and Rings, 12.5Cr (SAE 410), Aircraft Quality, Annealed (UNS S41000)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "410 (12.5Cr) martensitic stainless steel in bars, wire, forgings, mechanical tubing, and rings in the annealed condition for aircraft-quality parts needing corrosion resistance with good strength and ductility.",
    "dataAccess": "restricted",
    "revision": "T"
  },
  {
    "standardBody": "AMS",
    "designation": "5647",
    "fullCode": "AMS 5647",
    "title": "Steel, Corrosion-Resistant, Bars, Wire, Forgings, Mechanical Tubing, and Rings, 19Cr-9.5Ni (SAE 304L, low carbon), Solution Heat Treated",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "304L low-carbon austenitic stainless steel bars, wire, forgings, mechanical tubing, and rings in the solution-heat-treated condition for corrosion-resistant aerospace parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5734",
    "fullCode": "AMS 5734",
    "title": "Steel, Corrosion and Heat-Resistant, Bars, Wire, Forgings, Mechanical Tubing, and Rings, 15Cr-25.5Ni-1.2Mo-2.1Ti-0.006B-0.30V, Consumable Electrode Melted, Solution Heat Treated (A-286 / UNS S66286)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "A-286 iron-nickel-base precipitation-hardening superalloy (UNS S66286) bars, wire, forgings, mechanical tubing, and rings in the solution-treated condition for elevated-temperature aerospace parts to about 1300F (704C).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "6265",
    "fullCode": "AMS 6265",
    "title": "Steel, Bars, Forgings, and Tubing, 3.2Ni-1.2Cr-0.12Mo (0.07-0.13C) (AISI 9310), Consumable Electrode Vacuum Melted, Carburizing Grade (UNS G93106)",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Premium consumable-electrode vacuum-melted (VAR) version of AISI 9310 carburizing steel in bars, forgings, and tubing for critical aircraft gears, shafts, and bearings requiring high core toughness with a hard carburized case.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "6440",
    "fullCode": "AMS 6440",
    "title": "Steel, Bars, Forgings, and Tubing, 1.45Cr (0.93-1.05C) (SAE 52100), For Bearing Applications (UNS G52986)",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "52100 high-carbon chromium through-hardening bearing steel in bars, forgings, mechanical tubing, and forging stock for bearing components, typically hardened to about 60 HRC in thin sections.",
    "dataAccess": "restricted",
    "revision": "T"
  },
  {
    "standardBody": "AMS",
    "designation": "6485",
    "fullCode": "AMS 6485",
    "title": "Steel Bars and Forgings, 5.0Cr-1.3Mo-0.50V (0.38-0.43C) (H11 hot-work tool steel)",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "superseded",
    "supersededBy": "AMS 6487",
    "description": "Covered aircraft-quality H11 (5Cr-Mo-V) hot-work tool / ultra-high-strength steel bars, forgings, and forging stock for high-toughness aerospace parts such as landing gear. Cancelled in 2006 and superseded by AMS 6487.",
    "dataAccess": "restricted",
    "revision": "H"
  },
  {
    "standardBody": "AMS",
    "designation": "5537",
    "fullCode": "AMS 5537",
    "title": "Cobalt Alloy, Corrosion and Heat-Resistant, Sheet, Strip, Foil, and Plate, 52Co-20Cr-10Ni-15W (L-605 / Haynes 25), Solution Heat Treated (UNS R30605)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "L-605 (Haynes 25) cobalt-base superalloy sheet, strip, foil, and plate in the solution-annealed condition for high-temperature aerospace parts, with oxidation resistance to about 2000F (1093C).",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5708",
    "fullCode": "AMS 5708",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings, 58Ni-19.5Cr-13.5Co-4.3Mo-3.0Ti-1.4Al (Waspaloy), Vacuum Melted, Solution and Precipitation Heat Treatable (UNS N07001)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Waspaloy (UNS N07001) nickel-base age-hardenable superalloy bars, forgings, flash-welded rings, and stock for parts requiring high strength to about 1500F (816C), such as turbine discs, blades, and bolts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5544",
    "fullCode": "AMS 5544",
    "title": "Nickel Alloy, Corrosion and Heat-Resistant, Sheet, Strip, and Plate, 57Ni-19.5Cr-13.5Co-4.2Mo-3.0Ti-1.4Al-0.05Zr-0.006B (Waspaloy), Consumable Electrode or Vacuum Induction Melted, Annealed (UNS N07001)",
    "materialType": "Nickel Alloy",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "Waspaloy (UNS N07001) nickel-base superalloy sheet, strip, and plate in the annealed condition for high-temperature aerospace applications.",
    "dataAccess": "restricted",
    "revision": "L"
  },
  {
    "standardBody": "AMS",
    "designation": "6512",
    "fullCode": "AMS 6512",
    "title": "Steel, Maraging, Bars, Forgings, Tubing, and Rings, 18Ni-7.8Co-4.9Mo-0.40Ti-0.10Al, Consumable Electrode Vacuum Melted, Annealed (Maraging 250 / UNS K92890)",
    "materialType": "Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "18Ni maraging 250 steel (UNS K92890) bars, forgings, mechanical tubing, and rings, consumable-electrode vacuum melted and supplied annealed, which ages to about 250 ksi yield strength for rocket cases, landing gear, and high-strength structural parts.",
    "dataAccess": "restricted",
    "revision": "H"
  },
  {
    "standardBody": "AMS",
    "designation": "4117",
    "fullCode": "AMS 4117",
    "title": "Aluminum Alloy, Rolled or Cold-Finished Bars, Rods, Wire, and Flash-Welded Rings, 1.0Mg-0.60Si-0.28Cu-0.20Cr (6061; -T6, -T651), Solution and Precipitation Heat Treated (UNS A96061)",
    "materialType": "Aluminum",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "6061 aluminum alloy rolled or cold-finished bars, rods, wire, and flash-welded rings in the -T6/-T651 tempers for general aerospace structural applications.",
    "dataAccess": "restricted",
    "revision": "M"
  },
  {
    "standardBody": "AMS",
    "designation": "5644",
    "fullCode": "AMS 5644",
    "title": "Steel, Corrosion-Resistant, Bars, Wire, Forgings, and Rings, 17Cr-7.1Ni-1.1Al (17-7 PH), Solution Heat Treated, Precipitation-Hardenable (UNS S17700)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "17-7 PH semi-austenitic precipitation-hardening stainless steel (UNS S17700) bars, wire, forgings, and rings for aerospace parts and springs needing high strength and fatigue resistance with good corrosion resistance.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "AMS",
    "designation": "5862",
    "fullCode": "AMS 5862",
    "title": "Steel, Corrosion-Resistant, Sheet, Strip, and Plate, 15Cr-4.5Ni-3.5Cu-0.30Cb (15-5 PH), Solution Heat Treated, Precipitation-Hardenable (UNS S15500)",
    "materialType": "Stainless Steel",
    "application": [
      "Aerospace"
    ],
    "status": "active",
    "description": "15-5 PH martensitic precipitation-hardening stainless steel (UNS S15500) sheet, strip, and plate in the solution-treated, precipitation-hardenable condition, offering better transverse toughness than 17-4 PH.",
    "dataAccess": "restricted",
    "revision": "D"
  }
];
