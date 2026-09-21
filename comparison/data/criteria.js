// Criteria for comparing candidate EV camper vans.
// - direction: "high" = more is better, "low" = less is better
// - weight: default importance, 0-10 (adjustable in the UI)
// - min: optional hard minimum - vans below it are flagged and can be hidden
// - group: scoreboard column group; the order of entries in this file = column order.
//   Groups must be contiguous. Labels and colors are defined in index.html.
const CRITERIA = [
  { id: "range_km",           label: "Range",          unit: "km",  direction: "high", weight: 10, group: "energy", hint: "Manufacturer/WLTP figure; expect ~20-30% less real-world, less with a heavy fit-out" },
  { id: "battery_kwh",        label: "Battery",        unit: "kWh", direction: "high", weight: 8, group: "energy" },
  { id: "max_charge_dc_kw",   label: "DC fast charge", unit: "kW",  direction: "high", weight: 7, group: "energy" },
  { id: "ac_charge_kw",       label: "AC charge",      unit: "kW",  direction: "high", weight: 10, group: "energy", hint: "On-board AC charging rate - campsite charging speed (3-phase 22 kW roughly halves an overnight top-up vs 11 kW)" },
  { id: "ac_outlet_kw",        label: "AC outlet",      unit: "kW",  direction: "high", weight: 10, group: "energy", hint: "V2L / power-outlet rating for running appliances off the battery (heated blanket, induction, coffee)" },
  { id: "outlet_12v_a",        label: "12V outlet",     unit: "A",   direction: "high", weight: 3, group: "energy", hint: "12V auxiliary socket rating - feeds the camper's 12V system (lights, water pump, fridge, small electronics)" },
  { id: "payload_kg",         label: "Payload",        unit: "kg",  direction: "high", weight: 6,  group: "weight", hint: "What's left for camper build + people + gear after battery" },
  { id: "kerb_weight_kg",      label: "Kerb weight",    unit: "kg",  direction: "low",  weight: 0, group: "weight", hint: "Vehicle weight as-delivered incl. battery - lighter = more payload headroom" },
  { id: "gvw_kg",              label: "GVW",            unit: "kg",  direction: "high", weight: 0, group: "weight", hint: "Gross vehicle weight - the max allowed weight of the van (3.5t vs 4.25t class); above 3,500 kg needs C1E licence + higher taxes in most EU countries, but gives more fit-out headroom" },
  { id: "cargo_length_mm",     label: "Cargo length",   unit: "mm",  direction: "high", weight: 5, group: "cargo", hint: "Longest dimension inside the cargo area" },
  { id: "cargo_width_mm",      label: "Cargo width",    unit: "mm",  direction: "high", weight: 4, group: "cargo" },
  { id: "cargo_height_mm",     label: "Cargo height",   unit: "mm",  direction: "high", weight: 9, min: 2000, group: "cargo", hint: "Standing height in the cargo area - hard minimum 2000 mm" },
  { id: "height_mm",          label: "Height",         unit: "mm",  direction: "high", weight: 5, group: "dimensions", hint: "Standing / sleeping headroom" },
  { id: "width_mm",           label: "Width",          unit: "mm",  direction: "high", weight: 4, group: "dimensions" },
  { id: "length_mm",           label: "Length",         unit: "mm",  direction: "low",  weight: 4, group: "dimensions", hint: "Shorter = easier to park and drive" },
  { id: "turning_curb_m",      label: "Turn circle (curb)", unit: "m", direction: "low",  weight: 8, group: "dimensions", hint: "Curb-to-curb turning diameter (body/tires only) - smaller = easier to park and manoeuvre" },
  { id: "wheelbase_mm",        label: "Wheelbase",      unit: "mm",  direction: "low",  weight: 0, group: "dimensions", hint: "Distance between axles - shorter = easier to park and manoeuvre; longer = more cargo length" },
  { id: "price_eur",          label: "Base price",     unit: "€",   direction: "low",  weight: 5, group: "price", hint: "Approx. base price, no fit-out" },
  { id: "motor_kw",           label: "Motor",          unit: "kW",  direction: "high", weight: 3, group: "price" },
];
