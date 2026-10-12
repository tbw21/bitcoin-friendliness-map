"""Compute the "water lining" rings: smooth lines that follow the coast a little way out to sea.

All country shapes are merged into one land outline, then offset outwards three times. The
offsets are rounded on both outside and inside corners and written as curves, so the rings
flow around the coast instead of copying every kink in it.

It also writes the enlarged tap areas for small islands (coast-hit-areas.txt, next to the
output file).

Needs the shapely package (pip install shapely). Output is read by make-nautical-map.py.

    python3 scripts/make-coast-rings.py public/world_equal_earth.svg scripts/assets/coast-rings.txt
"""
import math, re, sys
from shapely.geometry import Polygon, Point, box
from shapely.ops import unary_union

src, dst = sys.argv[1], sys.argv[2]
svg = open(src, encoding="utf-8").read()

polys = []
by_code = {}
for d, code in re.findall(r'<path d="([^"]+)" title="[^"]*" id="([^"]+)"/>', svg):
    for ring in d.split("M")[1:]:
        n = [float(x) for x in re.findall(r"-?\d*\.?\d+", ring)]
        pts = list(zip(n[0::2], n[1::2]))
        if len(pts) >= 3:
            p = Polygon(pts)
            if not p.is_valid:
                p = p.buffer(0)
            if p.area > 0:
                polys.append(p)
                by_code.setdefault(code.upper(), []).append(p)
# One land mass; the tiny out-and-back closes hairline gaps between neighbouring countries
land = unary_union(polys).buffer(0.15).buffer(-0.15)

f = lambda v: ("%.2f" % v).rstrip("0").rstrip(".")


def smooth_path(coords):
    """Closed curve through the midpoints of the ring's segments, using its corners as control
    points (quadratic Béziers). Rounds every corner without moving the line noticeably."""
    pts = coords[:-1] if coords[0] == coords[-1] else coords
    n = len(pts)
    if n < 3:
        return ""
    mid = lambda a, b: ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
    start = mid(pts[-1], pts[0])
    out = ["M%s,%s" % (f(start[0]), f(start[1]))]
    for i in range(n):
        m = mid(pts[i], pts[(i + 1) % n])
        out.append("Q%s,%s %s,%s" % (f(pts[i][0]), f(pts[i][1]), f(m[0]), f(m[1])))
    return "".join(out) + "Z"


ROUND = 1.6  # how far inside corners (bays, straits) are rounded off, in map units
HIT_MAX_AREA = 40.0  # only ring areas up to this size (map units squared) become tap areas
lines = []
hits = []
countries = {code: unary_union(ps) for code, ps in by_code.items()}
for i, dist in enumerate((1.1, 2.3, 3.6)):
    # Simplify fairly hard: the curve smoothing below hides the facets, and fewer points keep
    # the map file small.
    ring = land.buffer(dist + ROUND, resolution=12).buffer(-ROUND, resolution=12).simplify(0.22)
    d = []
    for g in getattr(ring, "geoms", [ring]):
        if g.area < 2.0:
            continue
        for r in [g.exterior] + list(g.interiors):
            d.append(smooth_path(list(r.coords)))
        # Enlarged tap area: a small piece of the innermost ring that holds land of exactly one
        # country (a small island or island group with nobody else's islands inside the ring)
        if i == 0 and g.area <= HIT_MAX_AREA:
            inside = [code for code, shape in countries.items() if shape.intersects(g)]
            if len(inside) == 1:
                hits.append("%s\t%s" % (inside[0], smooth_path(list(g.exterior.coords))))
    lines.append("%d\t%s" % (i + 1, "".join(d)))
    print("ring", i + 1, "offset", dist, "characters", len(lines[-1]))
open(dst, "w", encoding="utf-8").write("\n".join(lines))
hit_file = dst.rsplit("/", 1)[0] + "/coast-hit-areas.txt"
open(hit_file, "w", encoding="utf-8").write("\n".join(hits))
print(len(hits), "tap areas for", len({h.split("\t")[0] for h in hits}), "countries ->", hit_file)


# ---------------------------------------------------------------------------------------------
# Sea names. Each is placed where its whole text box (plus a margin) lies in open water: never
# over land, the compass, or another name. Starting from the wanted spot and size, the search
# moves outwards and, if nothing fits, tries again smaller. A name that cannot fit is left out.
LON0, MINX, MINY, K = 10.6880065, -2.5657656968655895, -1.3052256180554187, 190.73353457595846
A1, A2, A3, A4, M = 1.340264, -0.081106, 0.000893, 0.003796, math.sqrt(3) / 2


def project(lon, lat):
    lam = math.radians(lon - LON0)
    l = math.asin(M * math.sin(math.radians(lat)))
    l2 = l * l
    l6 = l2 ** 3
    x = lam * math.cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)))
    y = -l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    return (x - MINX) * K, (y - MINY) * K


# name (| = line break), lon, lat, wanted size, smallest acceptable size, small-sea style
SEAS = [
    ("North|Atlantic|Ocean", -41, 33, 9.0, 5.0, False), ("South|Atlantic|Ocean", -14, -29, 9.0, 5.0, False),
    ("North|Pacific|Ocean", -148, 33, 9.0, 5.0, False), ("South|Pacific|Ocean", -108, -12, 9.0, 5.0, False),
    ("Pacific|Ocean", 167, 16, 7.6, 4.0, False), ("Indian|Ocean", 77, -27, 9.0, 5.0, False),
    ("Southern Ocean", 60, -55, 7.2, 4.0, False), ("Arctic Ocean", -150, 76, 6.3, 3.0, False),
    ("Mediterranean|Sea", 18.5, 34.5, 2.5, 0.9, True), ("Caribbean Sea", -75, 15, 2.7, 1.0, True),
    ("Arabian|Sea", 64, 15, 3.4, 1.4, True), ("Bay of|Bengal", 89, 14, 3.1, 1.2, True),
    ("Tasman|Sea", 160, -38, 3.6, 1.5, True), ("Gulf of|Mexico", -90, 25, 2.7, 1.0, True),
]
COMPASS = Point(*project(-128, -30)).buffer(19 * 1.25)
WORDMARK = box(project(-128, -30)[0] - 31, project(-128, -30)[1] + 19, project(-128, -30)[0] + 31, project(-128, -30)[1] + 34)
CHART = box(0, 0, 1000, 452.41)
obstacles = [COMPASS, WORDMARK]
land_simple = land.simplify(0.05)


def text_box(lines, x, y, fs, small):
    spacing = 0.22 if small else 0.34          # letter-spacing in em, as in map.css
    width = max(len(t) * fs * (0.68 + spacing) for t in lines)
    top = y - (len(lines) - 1) * fs * 0.62 - fs * 0.85
    bottom = y - (len(lines) - 1) * fs * 0.62 + (len(lines) - 1) * fs * 1.25 + fs * 0.3
    return box(x - width / 2, top, x + width / 2, bottom)


placed = []
for name, lon, lat, want, smallest, small in SEAS:
    lines = name.split("|")
    x0, y0 = project(lon, lat)
    found = None
    fs = want
    while fs >= smallest and not found:
        margin = max(0.45 * fs, 0.8)
        steps = [(0.0, 0.0)] + [
            (r * math.cos(a), r * math.sin(a))
            for r in [fs * k * 0.5 for k in range(1, 13)]
            for a in [i * math.pi / 8 for i in range(16)]
        ]
        for dx, dy in steps:
            b = text_box(lines, x0 + dx, y0 + dy, fs, small)
            area = b.buffer(margin)
            if not CHART.contains(area) or area.intersects(land_simple) or any(area.intersects(o) for o in obstacles):
                continue
            found = (x0 + dx, y0 + dy, fs)
            obstacles.append(b)
            break
        fs *= 0.9
    if found:
        placed.append("%s\t%s\t%s\t%s\t%d" % (name, f(found[0]), f(found[1]), f(found[2]), 1 if small else 0))
        note = "" if abs(found[2] - want) < 0.01 and (found[0], found[1]) == (x0, y0) else "  (moved/shrunk from size %s)" % want
        print("sea name %-22s size %s%s" % (name.replace("|", " "), f(found[2]), note))
    else:
        print("sea name %-22s LEFT OUT: no open water large enough" % name.replace("|", " "))
label_file = dst.rsplit("/", 1)[0] + "/sea-labels.txt"
open(label_file, "w", encoding="utf-8").write("\n".join(placed))
