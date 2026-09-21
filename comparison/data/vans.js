// Candidate vans - all 19 criterion keys from data/criteria.js are present.
const VANS = [
  {
    id: "ford-e-transit-425-l4h3-96kwh",
    name: "Ford E-Transit 425 L4H3",
    status: "production",
    verified: true,
    criteria: {
      range_km: 402, // WLTP combined cycle (Ford Extended Range 89kWh usable)
      battery_kwh: 89, // Usable capacity (96 kWh gross capacity)
      max_charge_dc_kw: 180, // Peak DC fast charging rate (10-80% ~28 min)
      ac_charge_kw: 22, // 3-phase AC onboard charger option
      ac_outlet_kw: 2.3, // Pro Power Onboard 2.3 kW cab/cargo outlet
      outlet_12v_a: 20, // Max 12V auxiliary powerpoint socket rating (20A / 240W peak)
      payload_kg: 1444, // Maximum gross payload for 425 series L4H3
      cargo_length_mm: 4217, // Max cargo floor length (L4 Jumbo)
      cargo_width_mm: 1784, // Max loadspace width
      cargo_height_mm: 2025, // Load floor to roof height (H3 High Roof)
      height_mm: 2778, // Overall vehicle height (unladen H3)
      width_mm: 2059, // Overall width without mirrors
      length_mm: 6704, // Overall vehicle length (L4 Extended)
      turning_curb_m: 14.3, // Turning circle kerb-to-kerb
      wheelbase_mm: 3750, // Ford E-Transit Spec Sheet (Wheelbase L4: 3750mm)
      price_eur: 71500, // German/EU base MSRP estimate before VAT/options
      motor_kw: 198, // Peak motor power output (269 PS / 198 kW)
      kerb_weight_kg: 2806, // Mass in running order
      gvw_kg: 4250, // Gross Vehicle Weight rating (425 series)
    },
    notes: "Extended length, High roof / Jumbo",
    sources: [
      "https://www.ford.co.uk/content/dam/guxeu/uk/documents/brochures/commercial-vehicles/BRO-E_Transit.pdf",
      "https://www.media.ford.com/content/fordmedia/feu/en/news/2024/04/24/extended-range-ford-e-transit.html"
    ],
  },
  {
    id: "renault-master-etech",
    name: "Renault Master E-Tech L3H3",
    status: "production",
    verified: true,
    criteria: {
      range_km: 410, // WLTP driving range (87 kWh battery, Aerovan chassis)
      battery_kwh: 87, // Usable battery capacity
      max_charge_dc_kw: 130, // DC fast charge peak rate (142 miles in 39 min)
      ac_charge_kw: 22, // Onboard 22 kW 3-phase AC charger as standard
      ac_outlet_kw: 3.7, // V2L (Vehicle-to-Load) 230V / 16A output up to 3.7 kW
      outlet_12v_a: 15, // Max 12V auxiliary power socket rating (15A / 180W peak across cab/cargo)
      payload_kg: 1030, // Standard B License
      cargo_length_mm: 3857, // Useful cargo length at floor
      cargo_width_mm: 1760, // Interior cargo width between walls
      cargo_height_mm: 2119, // Interior cargo height (H3)
      height_mm: 2756, // Total exterior vehicle height
      width_mm: 2080, // Exterior width without mirrors
      length_mm: 6310, // Total exterior vehicle length
      turning_curb_m: 13.4, // Turning radius kerb-to-kerb
      wheelbase_mm: 4215, // Renault Master E-Tech Tech Specs (L3 Wheelbase: 4215mm)
      price_eur: 58000, // Base price estimate (EU market MSRP)
      motor_kw: 105, // Peak motor output (140 hp / 105 kW)
      kerb_weight_kg: 2375, // Kerb weight
      gvw_kg: 4000, // Gross Vehicle Weight rating
    },
    notes: "New Master / Aerovan generation 2024+",
    sources: [
      "https://www.renault.fr/vehicules-utilitaires/master-etech-electric.html",
      "https://www.user-manual.renault.com/en/electric-vehicle/vehicle-load-v2l-function-1"
    ],
  },
  {
    id: "mercedes-esprinter",
    name: "Mercedes-Benz eSprinter 420e L3H3 (A3)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 440, // WLTP combined range (113 kWh battery configuration)
      battery_kwh: 113, // Usable LFP battery capacity
      max_charge_dc_kw: 115, // DC Fast charging max rate (10-80% in ~42 min)
      ac_charge_kw: 22, // AC onboard charger option code E5A (up to 22 kW 3-phase)
      ac_outlet_kw: 0, // No high-power AC outlet standard
      outlet_12v_a: 15, // Max 12V socket rating (15A / 180W across console/cargo)
      payload_kg: 1240, // Max payload without driver for 4.25t GVW
      cargo_length_mm: 4410, // Cargo bed length (A3 Long)
      cargo_width_mm: 1787, // Max cargo interior width
      cargo_height_mm: 2009, // Cargo interior height (High Roof)
      height_mm: 2663, // Overall vehicle exterior height
      width_mm: 2020, // Overall vehicle width without mirrors
      length_mm: 6967, // Total exterior vehicle length (A3)
      turning_curb_m: 14.4, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 4325, // Mercedes eSprinter Datasheet (A3 Long Wheelbase: 4325mm)
      price_eur: 78000, // Base list price estimate in EUR (net ex. VAT)
      motor_kw: 150, // High output PSM motor rating (204 hp / 150 kW)
      kerb_weight_kg: 3010, // Unladen kerb weight without driver
      gvw_kg: 4250, // Gross Vehicle Weight rating (420e series)
    },
    notes: "Long wheelbase (A3), High roof",
    sources: [
      "https://www.mercedes-benz.com/en/vehicles/vanelectrification/esprinter/",
      "https://www.motor1.com/news/707679/mercedes-esprinter-prices-specifications-announced/",
      "Mercedes-Benz Offer Code E5A: On-board charger 22 kW AC"
    ],
  },
  {
    id: "mercedes-esprinter-l2h3",
    name: "Mercedes-Benz eSprinter 420e L2H3 (A2)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 440, // WLTP combined range (113 kWh battery)
      battery_kwh: 113, // Usable LFP battery capacity
      max_charge_dc_kw: 115, // DC Fast charging rate (10-80% in ~42 min)
      ac_charge_kw: 22, // AC onboard charger option code E5A (up to 22 kW 3-phase)
      ac_outlet_kw: 0, // No high-power AC outlet standard
      outlet_12v_a: 15, // Max 12V socket rating (15A / 180W across console/cargo)
      payload_kg: 1300, // Max payload for A2 4.25t variant
      cargo_length_mm: 3375, // Cargo floor length (A2 Standard)
      cargo_width_mm: 1787, // Max cargo interior width
      cargo_height_mm: 2009, // Cargo interior height (High Roof)
      height_mm: 2667, // Overall vehicle exterior height
      width_mm: 2020, // Overall vehicle width without mirrors
      length_mm: 5932, // Total exterior vehicle length (A2)
      turning_curb_m: 12.4, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 3665, // Mercedes eSprinter Datasheet (A2 Standard Wheelbase: 3665mm)
      price_eur: 75000, // Base list price estimate in EUR
      motor_kw: 150, // High output PSM motor rating (204 hp / 150 kW)
      kerb_weight_kg: 2950, // Unladen kerb weight without driver
      gvw_kg: 4250, // Gross Vehicle Weight rating (420e series)
    },
    notes: "Standard wheelbase (A2), High roof",
    sources: [
      "https://www.mercedes-benz.com/en/vehicles/vanelectrification/esprinter/",
      "Mercedes-Benz Offer Code E5A: On-board charger 22 kW AC"
    ],
  },
  {
    id: "citroen-jumper-e",
    name: "Citroën Jumper E L4H3 3.5t",
    status: "production",
    verified: true,
    criteria: {
      range_km: 356, // WLTP certified range for 3.5t L4H3 version (130 km/h speed limit)
      battery_kwh: 110, // Usable battery capacity
      max_charge_dc_kw: 150, // DC fast charging peak capacity (0-80% in 55 min)
      ac_charge_kw: 22, // 22 kW 3-phase onboard AC charger standard
      ac_outlet_kw: 0, // No built-in high-power AC outlet
      outlet_12v_a: 15, // Max 12V cabin/cargo socket rating (15A / 180W peak)
      payload_kg: 650, // Driverless payload rating for 3.5t MMA
      cargo_length_mm: 4070, // Interior cargo bed length (L4)
      cargo_width_mm: 1870, // Interior cargo width (1422mm between wheel arches)
      cargo_height_mm: 2172, // Interior cargo height (H3 Super High Roof)
      height_mm: 2760, // Total exterior height (H3)
      width_mm: 2050, // Total exterior width without mirrors
      length_mm: 6363, // Total exterior length (L4)
      turning_curb_m: 14.3, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 4035, // Stellantis Large Van Platform Spec (L4 Wheelbase: 4035mm)
      price_eur: 57000, // Indicative catalog price in EUR ex. VAT
      motor_kw: 200, // Electric motor output (270 hp / 200 kW)
      kerb_weight_kg: 2865, // Mass in running order
      gvw_kg: 3500, // Maximum allowed mass (3.5 tonnes GVW)
    },
    notes: "L4 has the longest rear overhang; H3 is super high roof.",
    sources: [
      "https://www.espaciofurgo.com/en/plug/citroen-and-jumper/",
      "https://www.media.stellantis.com/em-en/citroen/press/new-citroen-e-jumper-a-payload-up-to-17-m-in-100-electric-mode"
    ],
  },
  {
    id: "citroen-jumper-e-425t",
    name: "Citroën Jumper E L4H3 4.25t",
    status: "production",
    verified: true,
    criteria: {
      range_km: 406, // WLTP range for 4.25t version (90 km/h speed limit)
      battery_kwh: 110, // Usable battery capacity
      max_charge_dc_kw: 150, // DC fast charging peak capacity (0-80% in 55 min)
      ac_charge_kw: 22, // 22 kW 3-phase onboard AC charger standard
      ac_outlet_kw: 0, // No built-in high-power AC outlet
      outlet_12v_a: 15, // Max 12V cabin/cargo socket rating (15A / 180W peak)
      payload_kg: 1385, // Driverless payload rating for 4.25t MMA
      cargo_length_mm: 4070, // Interior cargo bed length (L4)
      cargo_width_mm: 1870, // Interior cargo width
      cargo_height_mm: 2172, // Interior cargo height (H3 Super High Roof)
      height_mm: 2760, // Total exterior height (H3)
      width_mm: 2050, // Total exterior width without mirrors
      length_mm: 6363, // Total exterior length (L4)
      turning_curb_m: 14.3, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 4035, // Stellantis Large Van Platform Spec (L4 Wheelbase: 4035mm)
      price_eur: 61000, // Indicative catalog price in EUR ex. VAT
      motor_kw: 200, // Electric motor output (270 hp / 200 kW)
      kerb_weight_kg: 2865, // Mass in running order
      gvw_kg: 4250, // Maximum allowed mass (4.25 tonnes GVW)
    },
    notes: "Identical footprint to the 3.5t model; higher Gross Vehicle Weight.",
    sources: [
      "https://www.espaciofurgo.com/en/plug/citroen-and-jumper/",
      "https://www.media.stellantis.com/em-en/citroen/press/new-citroen-e-jumper-a-payload-up-to-17-m-in-100-electric-mode"
    ],
  },
  {
    id: "citroen-jumper-e-l3h3",
    name: "Citroën Jumper E L3H3 3.5t",
    status: "production",
    verified: true,
    criteria: {
      range_km: 358, // WLTP certified range for 3.5t L3H3 version
      battery_kwh: 110, // Usable battery capacity
      max_charge_dc_kw: 150, // DC fast charging peak capacity (0-80% in 55 min)
      ac_charge_kw: 22, // 22 kW 3-phase onboard AC charger standard
      ac_outlet_kw: 0, // No built-in high-power AC outlet
      outlet_12v_a: 15, // Max 12V cabin/cargo socket rating (15A / 180W peak)
      payload_kg: 750, // Driverless payload rating for 3.5t MMA
      cargo_length_mm: 3705, // Interior cargo bed length (L3)
      cargo_width_mm: 1870, // Interior cargo width
      cargo_height_mm: 2172, // Interior cargo height (H3 Super High Roof)
      height_mm: 2760, // Total exterior height (H3)
      width_mm: 2050, // Total exterior width without mirrors
      length_mm: 5998, // Total exterior length (L3)
      turning_curb_m: 14.3, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 4035, // Stellantis Large Van Platform Spec (L3 Wheelbase: 4035mm)
      price_eur: 55000, // Indicative catalog price in EUR ex. VAT
      motor_kw: 200, // Electric motor output (270 hp / 200 kW)
      kerb_weight_kg: 2815, // Mass in running order
      gvw_kg: 3500, // Maximum allowed mass (3.5 tonnes GVW)
    },
    notes: "L3 shares the 4035mm wheelbase with L4, but has a shorter rear overhang.",
    sources: [
      "https://www.espaciofurgo.com/en/plug/citroen-and-jumper/",
      "https://www.media.stellantis.com/em-en/citroen/press/new-citroen-e-jumper-a-payload-up-to-17-m-in-100-electric-mode"
    ],
  },
];
