/**
 * ISOLATED DATA MODULE — ISO standards only. Ingested from
 * `data/standards_research/ISO` (see that directory's
 * per-designation JSON files and `ISO_metadata_index.json`).
 *
 * NO-MIX RULE: this file exports ONLY ISO records, typed as
 * IsoStandard[]. Do not import other bodies here. Cross-org aggregation
 * lives in registry.ts.
 *
 * dataAccess: 'full' records were sourced from freely-republished
 * composition/property data (see each source's `license_note`) and carry
 * scope/chemicalComposition/mechanicalProperties. 'restricted' records are
 * metadata-only — the underlying document is sold by ISO — and
 * intentionally omit those fields; the UI shows a restricted notice instead.
 */
import type { IsoStandard } from '@/types/standard';

export const isoStandards: IsoStandard[] = [
  {
    "standardBody": "ISO",
    "designation": "1083",
    "fullCode": "ISO 1083",
    "title": "Spheroidal graphite cast irons — Classification",
    "materialType": "Cast Iron",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Defines grades and requirements for spheroidal (nodular) graphite cast irons, classified by mechanical properties measured on machined test pieces, covering ferritic-to-pearlitic and solid-solution-strengthened ferritic grades.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "148-1",
    "fullCode": "ISO 148-1",
    "title": "Metallic materials — Charpy pendulum impact test — Part 1: Test method",
    "materialType": "Steel",
    "application": [
      "Energy"
    ],
    "status": "active",
    "description": "Specifies the Charpy V-notch and U-notch pendulum impact test for measuring the energy absorbed when a notched specimen is broken by a single pendulum blow.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "15630-1",
    "fullCode": "ISO 15630-1",
    "title": "Steel for the reinforcement and prestressing of concrete — Test methods — Part 1: Reinforcing bars, rods and wire",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies mechanical, chemical and geometrical test methods for reinforcing bars, rods and wire used in concrete reinforcement, consolidating the relevant test procedures for reinforcing steels.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "16120-1",
    "fullCode": "ISO 16120-1",
    "title": "Non-alloy steel wire rod for conversion to wire — Part 1: General requirements",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies general requirements for non-alloy steel wire rod intended for wire drawing and/or cold rolling, of various cross-sections generally at least 5 mm in nominal dimension with a smooth surface.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "18265",
    "fullCode": "ISO 18265",
    "title": "Metallic materials — Conversion of hardness values",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Provides the principles and tables for converting hardness values between scales and estimating tensile strength, for unalloyed/low-alloy and cast steels, quenched and tempered steels, cold-working steels, high-speed and tool steels, hardmetals, and non-ferrous alloys.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "209",
    "fullCode": "ISO 209",
    "title": "Wrought aluminium and aluminium alloys — Chemical composition",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the chemical composition limits of wrought products and ingots intended to be wrought in aluminium and aluminium alloys, together with the designations for their chemical composition.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "3506-1",
    "fullCode": "ISO 3506-1",
    "title": "Fasteners — Mechanical properties of corrosion-resistant stainless steel fasteners — Part 1: Bolts, screws and studs with specified grades and property classes",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies mechanical and physical properties and property classes for bolts, screws and studs (coarse and fine pitch) made of austenitic, martensitic, ferritic and duplex corrosion-resistant stainless steels, tested at ambient temperature.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "4954",
    "fullCode": "ISO 4954",
    "title": "Steels for cold heading and cold extruding",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies requirements for non-alloy and alloy steels intended for cold heading or cold extruding, delivered as wire rod, wire or bars, primarily addressing the properties of parts subjected to subsequent heat treatment.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "5832-3",
    "fullCode": "ISO 5832-3",
    "title": "Implants for surgery — Metallic materials — Part 3: Wrought titanium 6-aluminium 4-vanadium alloy",
    "materialType": "Titanium",
    "application": [
      "Medical"
    ],
    "status": "active",
    "description": "Specifies the characteristics and corresponding test methods for wrought Ti-6Al-4V titanium alloy used in the manufacture of surgical implants, including chemical composition and mechanical property requirements.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "630-1",
    "fullCode": "ISO 630-1",
    "title": "Structural steels — Part 1: General technical delivery conditions for hot-rolled products",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Specifies general technical delivery conditions for hot-rolled structural steel flat and long products (plates, wide flats, sections, bars) intended for welded or bolted structures.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6506-1",
    "fullCode": "ISO 6506-1",
    "title": "Metallic materials — Brinell hardness test — Part 1: Test method",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the Brinell hardness test method for metallic materials using a hard-metal ball indenter (1, 2.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6507-1",
    "fullCode": "ISO 6507-1",
    "title": "Metallic materials — Vickers hardness test — Part 1: Test method",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the Vickers hardness test method across three test-force ranges for metallic materials, hard metals, and metallic and inorganic coatings, for indentation diagonals between 0.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6508-1",
    "fullCode": "ISO 6508-1",
    "title": "Metallic materials — Rockwell hardness test — Part 1: Test method",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the Rockwell regular and superficial hardness test method for scales A, B, C, D, E, F, G, H, K, 15N, 30N, 45N, 15T, 30T and 45T for metallic materials, applicable to stationary and portable machines.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "683-1",
    "fullCode": "ISO 683-1",
    "title": "Heat-treatable steels, alloy steels and free-cutting steels — Part 1: Non-alloy steels for quenching and tempering",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies technical delivery requirements for non-alloy steels for quenching and tempering, supplied as semi-finished products, bars, wire rod, flat products and forgings, intended for quenched-and-tempered or austempered and surface-hardened machine parts.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "683-2",
    "fullCode": "ISO 683-2",
    "title": "Heat-treatable steels, alloy steels and free-cutting steels — Part 2: Alloy steels for quenching and tempering",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies technical delivery requirements for alloy steels for quenching and tempering, supplied as semi-finished products, hot-formed bars, wire rod, finished flat products and forgings.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6892-1",
    "fullCode": "ISO 6892-1",
    "title": "Metallic materials — Tensile testing — Part 1: Method of test at room temperature",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Defines the room-temperature tensile test method for metallic materials in any product form and the mechanical properties (e.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "9328-1",
    "fullCode": "ISO 9328-1",
    "title": "Steel flat products for pressure purposes — Technical delivery conditions — Part 1: General requirements",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Specifies general technical delivery conditions for steel flat products (plate, sheet and strip) used mainly in the construction of pressure equipment; the general requirements of ISO 404 also apply.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "1461",
    "fullCode": "ISO 1461",
    "title": "Hot dip galvanized coatings on fabricated iron and steel articles — Specifications and test methods",
    "materialType": "Steel",
    "application": [
      "Construction"
    ],
    "status": "active",
    "description": "Specifies the general properties of, and test methods for, hot dip galvanized zinc coatings applied by dipping fabricated iron and steel articles in a zinc melt. Excludes continuously galvanized sheet, wire and mesh.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6892-2",
    "fullCode": "ISO 6892-2",
    "title": "Metallic materials — Tensile testing — Part 2: Method of test at elevated temperature",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the method of tensile testing of metallic materials at temperatures above 35 degrees C and the properties determined, such as proof strength, tensile strength, elongation and reduction of area.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "15510",
    "fullCode": "ISO 15510",
    "title": "Stainless steels — Chemical composition",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Lists the chemical compositions of stainless steels compiled mainly from existing ISO, ASTM, EN, JIS and GB specifications, applying to all wrought product forms including ingots and semi-finished material.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "377",
    "fullCode": "ISO 377",
    "title": "Steel and steel products — Location and preparation of samples and test pieces for mechanical testing",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies requirements for the identification, location and preparation of samples and test pieces for mechanical tests on steel sections, bars, rod, flat products and tubular products.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "404",
    "fullCode": "ISO 404",
    "title": "Steel and steel products — General technical delivery requirements",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the general technical delivery requirements for all steel products covered by ISO 6929, except steel castings and powder-metallurgical products, including requirements for inspection documents and testing.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6929",
    "fullCode": "ISO 6929",
    "title": "Steel products — Vocabulary",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Defines terms for steel products classified according to their stage of manufacture, shape and dimensions, and appearance, covering liquid steel, ingots, semi-finished products, flat products and long products.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "8501-1",
    "fullCode": "ISO 8501-1",
    "title": "Preparation of steel substrates before application of paints and related products — Visual assessment of surface cleanliness — Part 1: Rust grades and preparation grades",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Identifies four rust grades of mill scale and rust on uncoated steel and defines preparation grades of visual cleanliness achieved by blast-cleaning, hand and power tool cleaning and flame cleaning.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6361-2",
    "fullCode": "ISO 6361-2",
    "title": "Wrought aluminium and aluminium alloys — Sheets, strips and plates — Part 2: Mechanical properties",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the mechanical properties (tensile strength, 0.2 % proof stress, elongation) of wrought aluminium and aluminium alloy sheets, strips and plates for general engineering applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "1035-4",
    "fullCode": "ISO 1035-4",
    "title": "Hot-rolled steel bars — Part 4: Tolerances",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the dimensional tolerances applicable to hot-rolled steel bars supplied in straight lengths as round, square, hexagonal, octagonal and flat bars.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "1190-1",
    "fullCode": "ISO 1190-1",
    "title": "Copper and copper alloys — Code of designation — Part 1: Designation of materials",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Establishes the system for designating coppers and copper alloys by material composition, using the ISO prefix with chemical symbols for the base and major alloying elements followed by grade or nominal alloy content indicators.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "431",
    "fullCode": "ISO 431",
    "title": "Copper refinery shapes",
    "materialType": "Copper Alloy",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the requirements for refined copper in the form of refinery shapes (unwrought products), including cathodes, cast wire bars, cakes, billets and ingots.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "5832-2",
    "fullCode": "ISO 5832-2",
    "title": "Implants for surgery — Metallic materials — Part 2: Unalloyed titanium",
    "materialType": "Titanium",
    "application": [
      "Medical"
    ],
    "status": "active",
    "description": "Specifies the characteristics and corresponding test methods for wrought unalloyed titanium used in surgical implants, listing several grades based on tensile strength together with chemical composition requirements.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6931-1",
    "fullCode": "ISO 6931-1",
    "title": "Stainless steels for springs — Part 1: Wire",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the grades of stainless steel generally used in the cold-drawn condition as wire up to 10.00 mm diameter for the production of springs and spring parts exposed to corrosion and slightly elevated temperatures.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "3651-2",
    "fullCode": "ISO 3651-2",
    "title": "Determination of resistance to intergranular corrosion of stainless steels — Part 2: Ferritic, austenitic and ferritic-austenitic (duplex) stainless steels — Corrosion test in media containing sulfuric acid",
    "materialType": "Stainless Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies test methods for determining the resistance to intergranular corrosion of ferritic, austenitic and duplex stainless steels in sulfuric-acid media, including the Monypenny Strauss and ferric-sulfate tests.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "2081",
    "fullCode": "ISO 2081",
    "title": "Metallic and other inorganic coatings — Electroplated coatings of zinc with supplementary treatments on iron or steel",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies requirements for electroplated zinc coatings with supplementary treatments on iron or steel, including a designation system and heat-treatment requirements before and after plating.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "4967",
    "fullCode": "ISO 4967",
    "title": "Steel — Determination of content of non-metallic inclusions — Micrographic method using standard diagrams",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies a micrographic method, using standard reference diagrams, for determining the non-metallic inclusion content of rolled or forged steel products with a reduction ratio of at least 3, with provision for image analysis.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "683-17",
    "fullCode": "ISO 683-17",
    "title": "Heat-treatable steels, alloy steels and free-cutting steels — Part 17: Ball and roller bearing steels",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies technical delivery requirements for five groups of wrought ball and roller bearing steels: through-hardening, case-hardening, induction-hardening, stainless and high-temperature bearing steels.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "6362-2",
    "fullCode": "ISO 6362-2",
    "title": "Wrought aluminium and aluminium alloys — Extruded rods/bars, tubes and profiles — Part 2: Mechanical properties",
    "materialType": "Aluminum",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Specifies the mechanical properties (tensile strength, 0.2 % proof stress and elongation) of wrought aluminium and aluminium alloy extruded rods/bars, tubes and profiles for general engineering applications.",
    "dataAccess": "restricted"
  },
  {
    "standardBody": "ISO",
    "designation": "4885",
    "fullCode": "ISO 4885",
    "title": "Ferrous materials — Heat treatments — Vocabulary",
    "materialType": "Steel",
    "application": [
      "General Engineering"
    ],
    "status": "active",
    "description": "Defines the terms used in the heat treatment of ferrous materials (products and workpieces of steel and cast iron), with an alphabetical list of terms and a table of iron-carbon phases.",
    "dataAccess": "restricted"
  }
];
