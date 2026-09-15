# EV Camper Van Comparison

Tooling to pick a base van for a fully electric camper build.

## Quick start

1. Double-click `index.html` — no server or build needed (the page loads the data via plain `<script>` tags, so it works from `file://`).
2. Tick/untick candidates on the left, drag the importance sliders (0–10).
3. Pick a key metric for the bar chart, click a scoreboard row for notes + sources.
4. Click a column header to sort the scoreboard (1st click ↓ descending, 2nd ↑ ascending, 3rd back to rank order).

## Files

| Path | Purpose |
|---|---|
| `index.html` | The one-pager — vanilla JS, no dependencies |
| `data/criteria.js` | Criteria: id, label, unit, direction (which way is better), default weight |
| `data/vans.js` | The candidate vans, one object each |
| `research/` | Raw research notes per candidate + transcribed dealer price lists/offers (plain Markdown) |
| `*.pdf` (project root) | Source dealer documents (price lists, offers) — the `.md` transcriptions in `research/` are derived from these |

## Adding a candidate

Append an object to `VANS` in `data/vans.js`:

```js
{
  id: "my-van",                 // unique, kebab-case
  name: "Display Name L3H3 (2022+)",
  status: "production",         // or "concept"
  verified: false,              // flip to true once figures are confirmed
  criteria: {                   // keys must match ids in data/criteria.js
    range_km: 400, battery_kwh: 90, max_charge_dc_kw: 100,
    payload_kg: 1000, kerb_weight_kg: 3000,
    cargo_length_mm: 3800, cargo_width_mm: 1700, cargo_height_mm: 2100,  // cargo height must clear the 2000 mm min
    height_mm: 2800, width_mm: 2050, length_mm: 6400, turning_circle_m: 12.0,
    price_eur: 70000, motor_kw: 135,
    // unknown values: null → shows as "–" and scores 0
  },
  notes: "What backs the numbers, what's still an estimate, and any price derivation.",
  sources: ["https://…", "research/…dealer-list.md"],   // URLs and/or local files in this repo
}
```

New criterion? Add it to `CRITERIA` in `data/criteria.js`, then fill values in the vans (null is fine).

## How scoring works

- Each criterion is min–max normalized **across the currently included vans** (0 = worst, 100 = best); `direction: "low"` flips it for "less is better" criteria.
- Total score = weighted average over **all** criteria using the slider weights.
- Missing values score 0 — so a van with incomplete data gets penalized. Fill in data before drawing firm conclusions.
- Criteria can define a hard minimum (`min:` in `data/criteria.js`). Vans below it are flagged ✗ red and can be hidden with the “Hide vans below minimums” toggle.
- With only one van included, all criteria count as perfect (nothing to normalize against).

## Suggested process

1. **Broaden the field** — collect candidates and raw findings in `research/*.md` (spec-sheet links, real-world range reports, camper build threads, prices).
2. **Distill the shortlist** into `data/vans.js`.
3. **Tune the weights** until the ranking matches your gut — the moment it disagrees is usually where you discover a trade-off you hadn't priced in.
4. **Verify ⚠ values** against maker spec sheets. Prices and range figures shift year to year — re-check each round.

## Why JS data files instead of JSON?

So you can open `index.html` by double-clicking — `fetch()` of local JSON is blocked by browsers when a page is loaded from `file://`. If you prefer JSON, run a tiny local server (`python3 -m http.server`) and swap the `<script src="data/…">` tags for a `fetch()`.
