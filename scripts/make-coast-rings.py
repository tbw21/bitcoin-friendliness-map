"""Compute the "water lining" rings: smooth lines that follow the coast a little way out to sea.

All country shapes are merged into one land outline, then offset outwards three times. The
offsets are rounded on both outside and inside corners and written as curves, so the rings
flow around the coast instead of copying every kink in it.

It also writes the enlarged tap areas for small islands (coast-hit-areas.txt, next to the
output file).

Needs the shapely package (pip install shapely). Output is read by make-nautical-map.py.

    python3 scripts/make-coast-rings.py public/world_equal_earth.svg scripts/assets/coast-rings.txt
"""
import re, sys
from shapely.geometry import Polygon
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
