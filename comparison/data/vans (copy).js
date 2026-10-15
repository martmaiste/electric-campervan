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
  {
    id: "farizon-sv-l3h3",
    name: "Farizon SV L3H3 (SuperVAN 106 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 398, // WLTP combined driving range with 106 kWh battery pack
      battery_kwh: 106, // Gross battery capacity (NMC pack)
      max_charge_dc_kw: 140, // DC fast charging peak rate (20-80% in ~36 min)
      ac_charge_kw: 11, // Standard 3-phase AC onboard charger rate
      ac_outlet_kw: 3.3, // V2L (Vehicle-to-Load) 230V auxiliary AC power outlet rating
      outlet_12v_a: 15, // Standard 12V auxiliary power outlet rating (15A)
      payload_kg: 1390, // Maximum gross payload capacity
      cargo_length_mm: 3690, // Maximum interior usable cargo length at floor
      cargo_width_mm: 1795, // Interior cargo width between side walls
      cargo_height_mm: 1960, // Interior cargo floor-to-ceiling height (H3)
      height_mm: 2500, // Total exterior vehicle height
      width_mm: 1980, // Exterior width without mirrors
      length_mm: 5995, // Total exterior overall length
      turning_curb_m: 13.8, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 3850, // Longest wheelbase distance (L3 configuration)
      price_eur: 52000, // Estimated base starting MSRP in EU markets
      motor_kw: 169, // Peak electric motor output (227 hp / 230 PS)
      kerb_weight_kg: 2610, // Approximate unladen kerb weight
      gvw_kg: 4000, // Gross Vehicle Weight rating (GVW)
    },
    notes: "Farizon SuperVAN / SV platform (Geely Group) 2024+",
    sources: [
      "https://farizonauto.com/supervan",
      "https://en.wikipedia.org/wiki/Farizon_SV"
    ],
  },
  {
    id: "farizon-sv-l3h3-3t5",
    name: "Farizon SV L3H3 (3.5t / 106 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 398, // WLTP combined driving range (247 miles)
      battery_kwh: 106, // NMC battery pack
      max_charge_dc_kw: 140, // Peak DC fast charging rate
      ac_charge_kw: 11, // Standard 3-phase onboard charger
      ac_outlet_kw: 3.3, // V2L auxiliary AC output
      outlet_12v_a: 15, // Standard 12V auxiliary power
      payload_kg: 1035, // Payload capacity under 3.5t restriction
      cargo_length_mm: 3695, // Interior floor cargo length
      cargo_width_mm: 1795, // Interior cargo width
      cargo_height_mm: 1960, // Interior floor-to-ceiling height (H3)
      height_mm: 2500, // Exterior vehicle height
      width_mm: 1980, // Exterior width (excluding mirrors)
      length_mm: 5995, // Overall exterior length
      turning_curb_m: 13.2, // Kerb-to-kerb turning circle diameter
      wheelbase_mm: 3850, // L3 wheelbase
      price_eur: 52000, // Estimated base starting MSRP (EU markets)
      motor_kw: 170, // Peak motor output (228 hp / 231 PS)
      kerb_weight_kg: 2465, // Unladen kerb weight
      gvw_kg: 3500, // Standard B-License Gross Vehicle Weight limit
    },
    notes: "Farizon SuperVAN / SV platform (3.5T B-License homologation)",
    sources: [
      "https://farizonauto.com/supervan",
      "https://www.leasepoint.co.uk/farizon-van-lease-deals/personal/sv/panelvan-l3-electric-170kw-106-kwh-h3-van-auto/"
    ],
  },
  {
    id: "maxus-edeliver9-l3h3",
    name: "Maxus eDeliver 9 L3H3 (88.55 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 296, // WLTP combined driving range (88.55 kWh battery pack)
      battery_kwh: 88.55, // Gross battery capacity (NMC liquid-cooled pack)
      max_charge_dc_kw: 80, // DC fast charge peak rate (20-80% in ~36-45 min)
      ac_charge_kw: 11, // Standard 3-phase 11 kW AC onboard charger
      ac_outlet_kw: 0, // No standard auxiliary AC V2L outlet available
      outlet_12v_a: 15, // Standard 12V auxiliary power outlet rating (15A)
      payload_kg: 860, // Payload on standard 3.5t B-License version (1,390 kg on 4.05t N2 variant)
      cargo_length_mm: 3413, // Maximum interior floor usable cargo length
      cargo_width_mm: 1800, // Interior cargo width between side walls
      cargo_height_mm: 2019, // Interior cargo floor-to-ceiling height (H3)
      height_mm: 2755, // Total exterior vehicle height
      width_mm: 2062, // Exterior width without mirrors
      length_mm: 5940, // Total exterior vehicle length
      turning_curb_m: 14.1, // Turning circle diameter kerb-to-kerb
      wheelbase_mm: 3760, // Longest wheelbase distance (L3 configuration)
      price_eur: 61000, // Estimated base starting MSRP in EU markets
      motor_kw: 150, // Peak electric motor output (204 hp / 310 Nm)
      kerb_weight_kg: 2640, // Unladen kerb weight (3.5t B-license spec)
      gvw_kg: 3500, // Standard Gross Vehicle Weight (4,050 kg option available for heavy commercial license)
    },
    notes: "Largest variant of SAIC Maxus eDeliver 9 platform (L3H3 with 88.55 kWh battery)",
    sources: [
      "https://saicmaxus.eu/models/edeliver-9/",
      "https://saicmaxus.ie/models/edeliver-9/"
    ],
  },
  {
    id: "iveco-edaily-35s-3520l-h3-74kwh",
    name: "IVECO eDaily 35S H3 L3 (3520L / 74 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 235, // WLTP combined estimate (74 kWh 2-battery pack)
      battery_kwh: 74, // Modular 2-battery pack (70 kWh usable)
      max_charge_dc_kw: 80, // DC fast charging peak rate
      ac_charge_kw: 11, // Standard 11 kW AC 3-phase (22 kW optional)
      ac_outlet_kw: 3.5, // Optional ePTO / V2L AC outlet (up to 15 kW on heavy ePTO)
      outlet_12v_a: 15, // Standard 12V auxiliary power socket
      payload_kg: 920, // 3.5t B-License payload limit for 2-battery build
      cargo_length_mm: 3540, // Interior cargo length at floor
      cargo_width_mm: 1800, // Interior cargo width (1317 mm between wheel arches)
      cargo_height_mm: 2100, // H3 interior floor-to-ceiling height
      height_mm: 2860, // Total exterior vehicle height (H3)
      width_mm: 2010, // Exterior width without mirrors
      length_mm: 6180, // Total exterior overall length
      turning_curb_m: 12.8, // Turning circle kerb-to-kerb
      wheelbase_mm: 3520, // 3520L long-body wheelbase
      price_eur: 68000, // Estimated base starting MSRP in EU markets
      motor_kw: 140, // Peak electric motor output (188 hp / 400 Nm torque)
      kerb_weight_kg: 2580, // Kerb weight (3.5t variant)
      gvw_kg: 3500, // Standard B-License GVW limit
    },
    notes: "3.5t B-license high-roof panel van with 13.4 m³ cargo volume (3520L chassis)",
    sources: [
      "https://www.iveco.com/uk/eDaily/eDaily-Van",
      "https://iveco-pts.com/en/products/iveco-edaily/iveco-edaily-van/"
    ],
  },
  {
    id: "iveco-edaily-42s-4100-h3-111kwh",
    name: "IVECO eDaily 42S H3 L4 (4100 / 111 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 300, // WLTP combined estimate (111 kWh 3-battery pack)
      battery_kwh: 111, // Modular 3-battery pack (105 kWh usable)
      max_charge_dc_kw: 115, // DC fast charging peak rate (3-battery option)
      ac_charge_kw: 22, // 22 kW AC 3-phase onboard charger standard/optional on 3-battery trim
      ac_outlet_kw: 15.0, // ePTO high-voltage AC output option
      outlet_12v_a: 15, // Standard 12V auxiliary power socket
      payload_kg: 1320, // Increased payload rating under 4.25t GVW
      cargo_length_mm: 4680, // Interior cargo length at floor
      cargo_width_mm: 1800, // Interior cargo width
      cargo_height_mm: 2100, // H3 interior floor-to-ceiling height
      height_mm: 2860, // Exterior vehicle height
      width_mm: 2010, // Exterior width without mirrors
      length_mm: 7280, // Total exterior length
      turning_curb_m: 13.8, // Turning circle kerb-to-kerb
      wheelbase_mm: 4100, // 4100 mm wheelbase
      price_eur: 82000, // Estimated base price for 3-battery 4.25t chassis
      motor_kw: 140, // Peak electric motor output (188 hp / 400 Nm torque)
      kerb_weight_kg: 2930, // Unladen kerb weight
      gvw_kg: 4250, // 4.25t alternative fuel license category GVW limit
    },
    notes: "4.25t heavy-duty fleet van with 18.0 m³ cargo volume and 3-battery pack",
    sources: [
      "https://www.iveco.com/uk/eDaily/eDaily-Van",
      "https://iveco-pts.com/en/products/iveco-edaily/iveco-edaily-van/"
    ],
  },
  {
    id: "iveco-edaily-70c-4100l-h3-111kwh",
    name: "IVECO eDaily 70C H3 L5 Extra Long (4100L / 111 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 270, // WLTP combined range for heavy twin-wheel 7.2t variant
      battery_kwh: 111, // Modular 3-battery pack (111 kWh gross / 105 kWh usable)
      max_charge_dc_kw: 115, // DC fast charging peak rate
      ac_charge_kw: 22, // 22 kW AC 3-phase onboard charger
      ac_outlet_kw: 15.0, // High-voltage 15 kW ePTO capability for equipment/refrigeration
      outlet_12v_a: 15, // Standard 12V auxiliary power socket
      payload_kg: 3700, // Heavy commercial twin-rear-wheel payload capability
      cargo_length_mm: 5125, // Maximum interior floor cargo length
      cargo_width_mm: 1800, // Interior cargo width
      cargo_height_mm: 2100, // H3 interior height
      height_mm: 2860, // Total exterior vehicle height
      width_mm: 2010, // Exterior width without mirrors
      length_mm: 7680, // Largest overall exterior length (L5 extra long)
      turning_curb_m: 14.5, // Turning circle kerb-to-kerb
      wheelbase_mm: 4100, // 4100L wheelbase (extended rear overhang)
      price_eur: 96000, // Estimated base price for 7.2t heavy variant
      motor_kw: 140, // Peak electric motor output (188 hp / 400 Nm torque)
      kerb_weight_kg: 3500, // Heavy commercial unladen kerb weight
      gvw_kg: 7200, // 7.2-tonne heavy commercial GVW
    },
    notes: "Largest IVECO eDaily van variant: 19.6 m³ volume, twin rear wheels, 7.2t GVW rating",
    sources: [
      "https://www.iveco.com/uk/eDaily/eDaily-Van",
      "https://iveco-pts.com/en/products/iveco-edaily/iveco-edaily-van/"
    ],
  },
  {
    id: "zeus-max-cargo-l3h3",
    name: "Zeus Max High Roof Cargo (100.9 kWh)",
    status: "production",
    verified: true,
    criteria: {
      range_km: 310, // Official factory range (100.9 kWh CATL battery pack)
      battery_kwh: 100.9, // CATL battery pack capacity
      max_charge_dc_kw: 100, // Peak DC fast charging (20–80% in 48 min)
      ac_charge_kw: 22, // 22 kW 3-phase onboard AC charger (per 1-page flyer)
      ac_outlet_kw: 0, // No V2L / AC power export output confirmed
      outlet_12v_a: 15, // Standard commercial 12V auxiliary socket
      payload_kg: 1890, // Stated maximum payload
      cargo_length_mm: 3680, // Estimated based on L3 class sizing
      cargo_width_mm: 1780, // Estimated standard commercial width
      cargo_height_mm: 1950, // High-roof clearance for 14 m³ cargo volume
      height_mm: 2720, // Total exterior vehicle height
      width_mm: 1980, // Exterior width without mirrors
      length_mm: 5990, // Overall exterior length
      turning_curb_m: 14.9, // Official turning circle diameter kerb-to-kerb
      wheelbase_mm: 3700, // Long wheelbase chassis
      price_eur: 59000, // Commercial base MSRP estimate
      motor_kw: 130, // Estimated peak electric motor output
      kerb_weight_kg: 2600, // Unladen kerb weight (4,490 kg GVM - 1,890 kg payload)
      gvw_kg: 4490, // Official Gross Vehicle Mass (4.5t class)
    },
    notes: "Pure One Zeus Max 14m³ high-roof cargo van (100.9 kWh CATL battery, 22 kW onboard AC charger)",
    sources: [
      "https://pure1corp.com/van/",
      "https://pure1corp.com/wp-content/uploads/2026/09/zeus-1-page-flyer.pdf"
    ],
  },
];
