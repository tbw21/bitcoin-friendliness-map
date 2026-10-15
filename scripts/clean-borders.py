"""Give neighbouring countries one shared border line, and round off sharp corners a little.

The source map draws every country as its own outline, and neighbours' outlines do not quite
match: in places they overlap (one country lies over the other) and in places a sliver of
background shows between them. Zoomed in, that reads as borders of varying thickness.

This rebuilds the shapes so that each border exists once and is used by both countries
(mapshaper's clean: snapping, closing slivers, settling overlaps in favour of the smaller
country, so enclaves like Lesotho stay whole), then rounds the corners of every border and
coastline. Corners are rounded on the shared line itself, so both neighbours get the very same
curve and no gap can open up again. Only clear corners are rounded (a turn of more than
CORNER_DEG), and only close to the corner (at most ROUND units along each side), so the map
keeps its shape and the file stays small.

Needs Node (mapshaper is fetched with npx) and nothing else.

    python3 scripts/clean-borders.py public/world_equal_earth.svg public/world_equal_earth.svg
"""
import json, math, os, re, subprocess, sys, tempfile

src, dst = sys.argv[1], sys.argv[2]
ROUND = 0.45       # how far from a corner the rounding starts, in map units (1000 units = map width)
CORNER_DEG = 28    # corners that turn by more than this are rounded
MAPSHAPER = ["npx", "-y", "mapshaper@0.6.102"]

svg = open(src, encoding="utf-8").read()
paths = re.findall(r'<path d="([^"]+)" title="([^"]*)" id="([^"]+)"/>', svg)
head = svg[: svg.index("  <path ")]
tail = svg[svg.rindex("/>") + 2 :]


def rings_of(d):
    out = []
    for part in d.split("M")[1:]:
        n = [float(x) for x in re.findall(r"-?\d*\.?\d+", part)]
        pts = [[n[i], n[i + 1]] for i in range(0, len(n) - 1, 2)]
        if len(pts) >= 3:
            if pts[0] != pts[-1]:
                pts.append(pts[0])
            out.append(pts)
    return out


features = []
for d, title, code in paths:
    rings = rings_of(d)
    features.append({
        "type": "Feature",
        "properties": {"id": code, "title": title},
        # every ring as its own polygon: mapshaper works out holes and overlaps itself
        "geometry": {"type": "MultiPolygon", "coordinates": [[r] for r in rings]},
    })

with tempfile.TemporaryDirectory() as tmp:
    gj, tj = os.path.join(tmp, "in.json"), os.path.join(tmp, "out.json")
    json.dump({"type": "FeatureCollection", "features": features}, open(gj, "w"))
    subprocess.run(MAPSHAPER + [gj, "-clean", "snap-interval=0.02", "gap-fill-area=1.5", "overlap-rule=min-area",
                                "allow-empty", "-o", "format=topojson", "no-quantization", "precision=0.01", tj],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    topo = json.load(open(tj))

arcs = topo["arcs"]
geoms = next(iter(topo["objects"].values()))["geometries"]

# Arc ends that are junctions (where three or more lines meet, or where two arcs join) must not move
end_count = {}
for a in arcs:
    for p in (tuple(a[0]), tuple(a[-1])):
        end_count[p] = end_count.get(p, 0) + 1


def turn(a, p, b):
    v1 = (p[0] - a[0], p[1] - a[1])
    v2 = (b[0] - p[0], b[1] - p[1])
    l1, l2 = math.hypot(*v1), math.hypot(*v2)
    if l1 == 0 or l2 == 0:
        return 0
    c = max(-1, min(1, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))
    return math.degrees(math.acos(c))


f = lambda v: ("%.2f" % v).rstrip("0").rstrip(".")


def arc_commands(pts, closed):
    """Drawing commands for one arc (without the starting point): straight lines, with each clear
    corner replaced by a short curve that uses the corner as its control point."""
    n = len(pts)
    idx = range(n) if closed else range(1, n - 1)
    rounded = {}
    for i in idx:
        a, p, b = pts[i - 1], pts[i], pts[(i + 1) % n]
        if turn(a, p, b) <= CORNER_DEG:
            continue
        la, lb = math.hypot(p[0] - a[0], p[1] - a[1]), math.hypot(b[0] - p[0], b[1] - p[1])
        ca, cb = min(ROUND, 0.3 * la), min(ROUND, 0.3 * lb)
        rounded[i] = ((p[0] + (a[0] - p[0]) * ca / la, p[1] + (a[1] - p[1]) * ca / la),
                      (p[0] + (b[0] - p[0]) * cb / lb, p[1] + (b[1] - p[1]) * cb / lb))
    cmds = []
    rng = range(1, n) if not closed else range(1, n + 1)
    for k in rng:
        i = k % n
        if i in rounded:
            (ax, ay), (bx, by) = rounded[i]
            cmds.append("L%s,%s" % (f(ax), f(ay)))
            cmds.append("Q%s,%s %s,%s" % (f(pts[i][0]), f(pts[i][1]), f(bx), f(by)))
        else:
            cmds.append("L%s,%s" % (f(pts[i][0]), f(pts[i][1])))
    start = rounded[0][1] if closed and 0 in rounded else pts[0]
    return start, cmds


def arc_points(i):
    a = arcs[i] if i >= 0 else arcs[~i][::-1]
    return a


# Pre-render every arc once (forwards); a reversed use gets the same geometry walked backwards,
# which is why rounding happens per arc and never per country
def ring_d(ring_arcs):
    pieces = []
    if len(ring_arcs) == 1:
        pts = arc_points(ring_arcs[0])[:-1]           # closed: drop the repeated first point
        lone = end_count.get(tuple(pts[0]), 0) <= 2   # its ends touch no other line
        start, cmds = arc_commands(pts if lone else pts + [pts[0]], closed=lone)
        return "M%s,%s%sZ" % (f(start[0]), f(start[1]), "".join(cmds))
    first = True
    for ai in ring_arcs:
        pts = arc_points(ai)
        start, cmds = arc_commands(pts, closed=False)
        if first:
            pieces.append("M%s,%s" % (f(start[0]), f(start[1])))
            first = False
        pieces.extend(cmds)
    return "".join(pieces) + "Z"


out = []
kept = 0
for g in geoms:
    props = g.get("properties", {})
    polys = g["arcs"] if g.get("type") == "MultiPolygon" else ([g["arcs"]] if g.get("type") == "Polygon" else [])
    d = "".join(ring_d(r) for poly in polys for r in poly)
    if not d:
        print("dropped (nothing left after cleaning):", props.get("id"))
        continue
    kept += 1
    out.append('  <path d="%s" title="%s" id="%s"/>' % (d, props["title"], props["id"]))

head = head.replace("<!-- Equal Earth projection", "<!-- Borders shared between neighbours and corners rounded by scripts/clean-borders.py. Equal Earth projection", 1) \
    if "clean-borders" not in head else head
open(dst, "w", encoding="utf-8").write(head + "\n".join(out) + "\n" + tail.lstrip("\n"))
print("wrote", dst, "-", kept, "of", len(paths), "shapes,", os.path.getsize(dst) // 1024, "KB")
