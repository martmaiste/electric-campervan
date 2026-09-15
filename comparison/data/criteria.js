// Criteria for comparing candidate EV camper vans.
// - direction: "high" = more is better, "low" = less is better
// - weight: default importance, 0-10 (adjustable in the UI)
// - min: optional hard minimum - vans below it are flagged and can be hidden
const CRITERIA = [
  { id: "range_km",           label: "Range",          unit: "km",  direction: "high", weight: 10, hint: "Manufacturer/WLTP figure; expect ~20-30% less real-world, less with a heavy fit-out" },
  { id: "battery_kwh",        label: "Battery",        unit: "kWh", direction: "high", weight: 8 },
  { id: "max_charge_dc_kw",   label: "DC fast charge", unit: "kW",  direction: "high", weight: 7 },
  { id: "ac_charge_kw",       label: "AC charge",      unit: "kW",  direction: "high", weight: 4, hint: "On-board AC charging rate - campsite charging speed (3-phase 22 kW roughly halves an overnight top-up vs 11 kW)" },
  { id: "ac_outlet_kw",        label: "AC outlet",      unit: "kW",  direction: "high", weight: 3, hint: "V2L / power-outlet rating for running appliances off the battery (heated blanket, induction, coffee)" },
  { id: "payload_kg",         label: "Payload",        unit: "kg",  direction: "high", weight: 8,  hint: "What's left for camper build + people + gear after battery" },
  { id: "cargo_length_mm",     label: "Cargo length",   unit: "mm",  direction: "high", weight: 5, hint: "Longest dimension inside the cargo area" },
  { id: "cargo_width_mm",      label: "Cargo width",    unit: "mm",  direction: "high", weight: 4 },
  { id: "cargo_height_mm",     label: "Cargo height",   unit: "mm",  direction: "high", weight: 7, min: 2000, hint: "Standing height in the cargo area - hard minimum 2000 mm" },
  { id: "height_mm",          label: "Height",         unit: "mm",  direction: "high", weight: 5,  hint: "Standing / sleeping headroom" },
  { id: "width_mm",           label: "Width",          unit: "mm",  direction: "high", weight: 4 },
  { id: "length_mm",           label: "Length",         unit: "mm",  direction: "low",  weight: 4,  hint: "Shorter = easier to park and drive" },
  { id: "turning_curb_m",      label: "Turn circle (curb)", unit: "m", direction: "low",  weight: 2, hint: "Curb-to-curb turning diameter (body/tires only) - smaller = easier to park and manoeuvre" },

  { id: "price_eur",          label: "Base price",     unit: "€",   direction: "low",  weight: 5,  hint: "Approx. base price, no fit-out" },
  { id: "motor_kw",           label: "Motor",          unit: "kW",  direction: "high", weight: 3 },
  { id: "kerb_weight_kg",      label: "Kerb weight",    unit: "kg",  direction: "low",  weight: 3, hint: "Vehicle weight as-delivered incl. battery - lighter = more payload headroom" },
  { id: "gvw_kg",              label: "GVW",            unit: "kg",  direction: "high", weight: 3, hint: "Gross vehicle weight - the max allowed weight of the van (3.5t vs 4.25t class); above 3,500 kg needs C1E licence + higher taxes in most EU countries, but gives more fit-out headroom" },
];
