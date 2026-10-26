# Bitcoin Friendliness Map

An interactive world map that shows how Bitcoin-friendly each country is. Every country
gets an overall score out of 5, built from eight researched areas: tax, banking, legal
freedom, residency, spending, community, privacy and stability (the Bitcoin Living Index).

The map is made to be embedded in another website. It has no header or page chrome of its
own; the app lives at `/map`.

## What it does

- **Colour-coded world map** in an Equal Earth projection, so countries appear at their
  true relative size.
- **Country details** on click: overall score and band, rank, capital, population, the eight
  area scores with a short assessment each, and a summary.
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

A country's colour follows the whole-number part of its score (1.8 is shown as band 1 and
4.3 as band 4), except that "Very Friendly" starts at 4.5, so 4.6 is band 5. The exact score is shown
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

All country data comes from one file: `public/bitcoin-living-index.csv`. It is made from the
Bitcoin Living Index spreadsheet:

```bash
pip install openpyxl
python3 scripts/import-living-index.py path/to/Bitcoin_Living_Index.xlsx public/bitcoin-living-index.csv public/bitcoin-living-index.csv
```

The last argument is the current file: any capital or population missing from the new
spreadsheet is kept from it. Populations are shortened for display ("39,232,003 (2023 est.)"
becomes "39.2M").

The map picks up the new file on the next load; no code changes are needed.

The file is semicolon-separated and UTF-8.

| Column | Contents |
|---|---|
| `name` | Country name |
| `alpha_2` | Two-letter ISO code. The map matches countries by this, so it must not change |
| `alpha_3`, `numeric` | Other ISO codes (not used by the map) |
| `tax`, `tax_score` | Assessment text and 0–5 score. The same pair exists for `banking`, `legal`, `residency`, `spending`, `community`, `privacy` and `stability` |
| `capital`, `population` | Shown as written |
| `overall_score` | Overall score out of 5, two decimals, relative to the best country (which gets 5.0). Worked out by the import script: a weighted average of the eight scores (tax 20%, banking 15%, legal 15%, residency 12%, spending 12%, privacy 10%, community 8%, stability 8%), divided by the best country's average and multiplied by 5 |
| `summary` | Free text shown under the eight areas |
| `detail` | How much research is behind the row. Loaded but not currently shown |

A country with an empty `overall_score` is shown as "No data". Countries are ranked by overall
score, ties in alphabetical order, which is also how the summaries in the data count ranks.

## Customising the look

- **Colours**: `data/palettes.ts` holds the five score colours and the map background.
  Country borders use the background colour, so changing it updates both.
- **Band names and descriptions**: `data/legend.ts`.
- **Map shapes**: `public/world_equal_earth.svg`. It was generated from the original
  Mercator map (`public/world_modified_hover.svg`) by `scripts/reproject-map.py`, which
  keeps every country's id. To regenerate it:

  ```bash
  python3 scripts/reproject-map.py public/world_modified_hover.svg public/world_equal_earth.svg
  python3 scripts/clean-borders.py public/world_equal_earth.svg public/world_equal_earth.svg
  ```

  The second step (needs Node; it fetches mapshaper with npx) gives neighbouring countries one
  shared border line, so no gaps or overlaps show between them when zoomed in, and rounds off
  sharp corners slightly.

## Link preview image

`app/opengraph-image.jpg` is the picture shown when the map's link is shared: the chart on its
own, 1200 x 630. It is made from the map, the data and the stylesheet, so run this again after
the data or the look changes (macOS, needs Google Chrome):

```bash
python3 scripts/make-og-image.py app/opengraph-image.jpg
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
  bitcoin-living-index.csv            The data
  world_equal_earth.svg               The map
scripts/
  reproject-map.py  Generates the Equal Earth map from the Mercator source
  import-living-index.py  Turns the Bitcoin Living Index spreadsheet into the data file
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
- The root route (`/`) redirects to `/map`, where the app lives.
- Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.
