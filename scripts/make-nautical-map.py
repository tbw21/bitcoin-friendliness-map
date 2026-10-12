"""Add nautical-chart furniture to the Equal Earth map: graticule, neatline frame with degree
labels, water lining along the coasts, a compass ring holding the brand logo (with the wordmark below and rhumb lines fanning
out), and sea names. Everything goes in one group drawn
underneath the countries, so it only shows over water. Styling lives in app/map/map.css.

    python3 scripts/make-nautical-map.py public/world_equal_earth.svg public/world_equal_earth_nautical.svg
"""
import math, re, sys

src, dst = sys.argv[1], sys.argv[2]
svg = open(src, encoding="utf-8").read()

# Projection constants of world_equal_earth.svg (see reproject-map.py)
LON0, MINX, MINY, K = 10.6880065, -2.5657656968655895, -1.3052256180554187, 190.73353457595846
W, H = 1000.0, 452.41
LAT_S, LAT_N = -58.508473, 83.600842
LON_W, LON_E = LON0 - 179.8, LON0 + 179.8
A1, A2, A3, A4, M = 1.340264, -0.081106, 0.000893, 0.003796, math.sqrt(3) / 2


def project(lon, lat):
    lam = math.radians(lon - LON0)
    l = math.asin(M * math.sin(math.radians(lat)))
    l2 = l * l
    l6 = l2 ** 3
    x = lam * math.cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)))
    y = -l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    return (x - MINX) * K, (y - MINY) * K


f = lambda v: ("%.2f" % v).rstrip("0").rstrip(".")
pts = lambda ps: " ".join(f(x) + "," + f(y) for x, y in ps)
out = []

# ---- water lining: smooth rings following the coast out to sea (see make-coast-rings.py)
COAST_FILE = __file__.rsplit("/", 1)[0] + "/assets/coast-rings.txt"
for line in open(COAST_FILE, encoding="utf-8").read().splitlines():
    n, d = line.split("\t")
    out.append('<path class="chart-coast chart-coast-%s" d="%s"/>' % (n, d))

# ---- graticule
def meridian(lon):
    return [project(lon, LAT_S + (LAT_N - LAT_S) * i / 60) for i in range(61)]

def parallel(lat):
    # Parallels are straight in this projection. Run them the full width of the chart, edge to
    # edge, rather than stopping at the map's curved sides, so they all have the same length.
    y = project(LON0, lat)[1]
    return [(0, y), (W, y)]

for lon in range(-150, 181, 30):
    out.append('<polyline class="chart-grid" points="%s"/>' % pts(meridian(lon)))
for lat in (-30, 30, 60):
    out.append('<polyline class="chart-grid" points="%s"/>' % pts(parallel(lat)))
out.append('<polyline class="chart-grid chart-grid-major" points="%s"/>' % pts(parallel(0)))
for lat in (-23.44, 23.44, 66.56):  # tropics and Arctic Circle
    out.append('<polyline class="chart-grid chart-grid-dash" points="%s"/>' % pts(parallel(lat)))

# ---- compass ring with the brand logo, wordmark and rhumb lines (South Pacific, clear of land)
LOGO_FILE = __file__.rsplit("/", 1)[0] + "/assets/tbw-wordmark-centered.svg"
brand = open(LOGO_FILE, encoding="utf-8").read()
brand_paths = re.findall(r"<path\b[^>]*?\bd=\"([^\"]+)\"[^>]*?/>", brand)
# In the brand file the logo (wheel) is every path but the last; it sits in a 400x400 box
# centred on (404, 200). The last path is the wordmark, spanning x 2..811, y 449..585.
logo_paths, wordmark_path = brand_paths[:-1], brand_paths[-1]

cx, cy = project(-128, -30)
R = 19.0         # radius of the compass ring (the pale circle with degree ticks)
LOGO_FILL = 0.40 # logo diameter as a share of the ring's diameter; sized independently of the ring
WORDMARK_W = 57  # width of the wordmark, sized independently of both
out.append('<clipPath id="chart-clip"><rect x="0" y="0" width="%s" height="%s"/></clipPath>' % (f(W), f(H)))
rh = []
for i in range(32):
    a = math.radians(i * 11.25)
    rh.append('<line class="chart-rhumb%s" x1="%s" y1="%s" x2="%s" y2="%s"/>' % (
        " chart-rhumb-major" if i % 4 == 0 else "", f(cx), f(cy), f(cx + 2200 * math.sin(a)), f(cy - 2200 * math.cos(a))))
out.append('<g clip-path="url(#chart-clip)">%s</g>' % "".join(rh))

rose = ['<circle class="chart-rose-backdrop" cx="%s" cy="%s" r="%s"/>' % (f(cx), f(cy), f(R))]
rose += ['<circle class="chart-rose-ring" cx="%s" cy="%s" r="%s"/>' % (f(cx), f(cy), f(R * r)) for r in (1.0, 0.92)]
for i in range(72):  # degree ticks between the two rings
    a = math.radians(i * 5)
    r0 = R * (0.86 if i % 2 == 0 else 0.89)
    rose.append('<line class="chart-rose-tick" x1="%s" y1="%s" x2="%s" y2="%s"/>' % (
        f(cx + r0 * math.sin(a)), f(cy - r0 * math.cos(a)), f(cx + R * 0.92 * math.sin(a)), f(cy - R * 0.92 * math.cos(a))))
# north marker on the ring, and the letter above it
rose.append('<polygon class="chart-rose-north" points="%s"/>' % pts(
    [(cx, cy - R * 1.0), (cx - R * 0.05, cy - R * 0.86), (cx + R * 0.05, cy - R * 0.86)]))
rose.append('<text class="chart-rose-letter" font-size="%s" x="%s" y="%s" text-anchor="middle">N</text>' % (
    f(R * 0.21), f(cx), f(cy - R * 1.09)))
out.append('<g class="chart-rose">%s</g>' % "".join(rose))

logo_scale = (2 * R * LOGO_FILL) / 400
out.append('<g class="chart-logo" transform="translate(%s %s) scale(%s) translate(-404 -200)">%s</g>' % (
    f(cx), f(cy), "%.5f" % logo_scale,
    "".join('<path fill-rule="evenodd" clip-rule="evenodd" d="%s"/>' % d for d in logo_paths)))
word_scale = WORDMARK_W / 809
out.append('<g class="chart-wordmark" transform="translate(%s %s) scale(%s) translate(-406.8 -448.8)"><path d="%s"/></g>' % (
    f(cx), f(cy + R + 3.2), "%.5f" % word_scale, wordmark_path))
WORDMARK_BOTTOM = cy + R + 3.2 + 136 * word_scale

# ---- neatline frame with degree labels
out.append('<rect class="chart-frame" x="-9" y="-9" width="%s" height="%s"/>' % (f(W + 18), f(H + 18)))
out.append('<rect class="chart-frame chart-frame-inner" x="-4" y="-4" width="%s" height="%s"/>' % (f(W + 8), f(H + 8)))
for lon in range(-150, 181, 30):
    x, _ = project(lon, LAT_S)
    real = ((lon + 180) % 360) - 180
    label = "0°" if real == 0 else ("180°" if abs(real) == 180 else "%d°%s" % (abs(real), "E" if real > 0 else "W"))
    out.append('<text class="chart-degree" x="%s" y="%s" text-anchor="middle">%s</text>' % (f(x), f(H + 20), label))
for lat in (-30, 0, 30, 60):
    _, y = project(LON_W, lat)
    label = "0°" if lat == 0 else "%d°%s" % (abs(lat), "N" if lat > 0 else "S")
    out.append('<text class="chart-degree" x="-13" y="%s" text-anchor="end">%s</text>' % (f(y + 2), label))

# ---- sea names
SEAS = [
    ("North|Atlantic|Ocean", -41, 33, 1.0), ("South|Atlantic|Ocean", -14, -29, 1.0),
    ("North|Pacific|Ocean", -148, 33, 1.0), ("South|Pacific|Ocean", -108, -12, 1.0),
    ("Pacific|Ocean", 167, 16, 0.85), ("Indian|Ocean", 77, -27, 1.0),
    ("Southern Ocean", 60, -55, 0.8), ("Arctic Ocean", -150, 76, 0.7),
    ("Mediterranean Sea", 18, 35.2, 0.28), ("Caribbean Sea", -75, 15, 0.3), ("Arabian|Sea", 64, 15, 0.38),
    ("Bay of|Bengal", 89, 14, 0.34), ("Tasman|Sea", 160, -38, 0.4), ("Gulf of|Mexico", -90, 25, 0.3),
]
for name, lon, lat, size in SEAS:
    x, y = project(lon, lat)
    fs = 9.0 * size
    lines = name.split("|")
    y0 = y - (len(lines) - 1) * fs * 0.62
    spans = "".join('<tspan x="%s" y="%s">%s</tspan>' % (f(x), f(y0 + i * fs * 1.25), t) for i, t in enumerate(lines))
    cls = "chart-sea-label" + (" chart-sea-label-small" if size < 0.5 else "")
    out.append('<text class="%s" font-size="%s" text-anchor="middle">%s</text>' % (cls, f(fs), spans))

group = '  <g class="chart" aria-hidden="true">\n    ' + "\n    ".join(out) + "\n  </g>\n"

# ---- enlarged tap areas for small islands (drawn above the chart, below the countries)
HIT_FILE = __file__.rsplit("/", 1)[0] + "/assets/coast-hit-areas.txt"
hit = ['<path class="hit-area" data-code="%s" d="%s"/>' % tuple(l.split("\t"))
       for l in open(HIT_FILE, encoding="utf-8").read().splitlines() if l]
group += '  <g class="hit-areas" aria-hidden="true">\n    ' + "\n    ".join(hit) + "\n  </g>\n"
i = svg.index("  <path ")
svg = svg[:i] + group + svg[i:]
svg = svg.replace("<!-- Equal Earth projection", "<!-- Nautical chart edition (scripts/make-nautical-map.py). Equal Earth projection", 1)
open(dst, "w", encoding="utf-8").write(svg)
print("wrote", dst, "with", len(out), "chart elements,", len(hit), "tap areas; compass at", f(cx), f(cy), "wordmark bottom", f(WORDMARK_BOTTOM), "of", H)
