# Bitcoin Friendliness Map

An interactive world map that shows how Bitcoin-friendly each country is. Every country
gets a score from 1 (hostile) to 5 (very friendly), built from four researched areas:
legal clarity, tax treatment, banking and fiat rails, and residency and mobility.

The map is made to be embedded in another website. It has no header or page chrome of its
own; the app lives at `/map`.

## What it does

- **Colour-coded world map** in an Equal Earth projection, so countries appear at their
  true relative size.
- **Country details** on click: overall score and band, rank, capital, population, the four
  area scores with a short assessment each, and notes.
- **Search** by country name or two-letter code.
- **Filter by score**: pick one or more bands; the rest of the map dims.
- **Top 5 list** of the highest-scoring countries.
- **Zoom and pan** with the buttons, a mouse wheel, a trackpad (two-finger slide to move,
  pinch to zoom), touch gestures, or the keyboard (`+`, `-`, `0`).
- **Double-click** a country to zoom in on it; double-click again to zoom back out.
- **Shareable links**: `/map?country=CH` opens the map on that country.

On screens 768 px and wider, country details open in a panel docked to the right. On
smaller screens they open as a bottom sheet that can be dragged down to close.

## Score bands

| Score | Band | Meaning |
|---|---|---|
| 1 | Hostile | Bans or severe restrictions on Bitcoin usage or businesses. |
| 2 | Unfriendly | Legally allowed but with unclear rules or strong discouragement. |
| 3 | Neutral | Permitted with basic rules; limited dedicated policy focus. |
| 4 | Friendly | Clear rules and an overall supportive stance toward Bitcoin. |
| 5 | Very Friendly | Highly supportive environment with strong industry presence. |

A country's colour follows the whole-number part of its score: 1.8 is shown as band 1 and
4.9 as band 4, so only a clean 5 gets the "Very Friendly" colour. The exact score is shown
in the country details, and countries are ranked by it.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000/map](http://localhost:3000/map).

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Updating the data

All country data comes from one file: `public/research-bitcoin-friendliness.csv`. Replace
it and the map picks up the changes on the next load; no code changes are needed.

The file is semicolon-separated, UTF-8, and uses a comma as the decimal sign (`3,4`).

| Column | Contents |
|---|---|
| `name` | Country name |
| `alpha_2` | Two-letter ISO code. The map matches countries by this, so it must not change |
| `alpha_3`, `numeric` | Other ISO codes (not used by the map) |
| `legal_clarity`, `LC Score` | Assessment text and 1–5 score |
| `tax_treatment`, `TT Score` | Assessment text and 1–5 score |
| `banking_fiat_rails`, `BFC Score` | Assessment text and 1–5 score |
| `residency_mobility`, `RM Score` | Assessment text and 1–5 score |
| `Capital`, `Population` | Shown as written |
| `score_1_5` | Overall score, 1–5, decimals allowed |
| `notes` | Free text shown under the four areas |
| `confidence` | Loaded but not currently shown |

A country with a missing or unreadable score is shown as a neutral 3.

## Customising the look

- **Colours**: `data/palettes.ts` holds the five score colours and the map background.
  Country borders use the background colour, so changing it updates both.
- **Band names and descriptions**: `data/legend.ts`.
- **Map shapes**: `public/world_equal_earth.svg`. It was generated from the original
  Mercator map (`public/world_modified_hover.svg`) by `scripts/reproject-map.py`, which
  keeps every country's id. To regenerate it:

  ```bash
  python3 scripts/reproject-map.py public/world_modified_hover.svg public/world_equal_earth.svg
  ```

## Project structure

```
app/
  map/
    page.tsx        Page shell: selected country, deep links, palette variables
    WorldMap.tsx    The map: rendering, zoom and pan, search, legends
    Modal.tsx       Country details (side panel / bottom sheet)
    map.css         Map colours and animations
data/
  countriesCsv.ts   Loads and parses the CSV, computes ranks
  legend.ts         Score band names and descriptions
  palettes.ts       Score colours and map background
lib/
  flags.ts          Flag image URLs
public/
  research-bitcoin-friendliness.csv   The data
  world_equal_earth.svg               The map
scripts/
  reproject-map.py  Generates the Equal Earth map from the Mercator source
```

## Embedding

Point an iframe at the `/map` route of wherever the app is hosted:

```html
<iframe
  src="https://your-host.example/map"
  style="width: 100%; height: 700px; border: 0;"
  title="Bitcoin Friendliness Map"
></iframe>
```

Add `?country=XX` to the address to open on a specific country. Note that the map fills
the height it is given, so the iframe needs an explicit height.

## Accessibility

- Every country is a focusable, labelled button, so the map works with a keyboard and a
  screen reader. Country data is also reachable through search.
- The colour scale was checked for distinguishability under simulated protanopia,
  deuteranopia and tritanopia.
- Animations are switched off for visitors who have asked their system to reduce motion.

## Notes

- Flag images are loaded from [flagcdn.com](https://flagcdn.com), a third-party service.
- The root route (`/`) is still the default Next.js starter page; the app is at `/map`.
- Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.
