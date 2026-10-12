"""Reproject the app's Mercator world SVG to Equal Earth, keeping every path id and title."""
import re, math, sys
src, dst = sys.argv[1], sys.argv[2]
s = open(src, encoding="utf-8").read()
W = float(re.search(r'\bwidth="([\d.]+)"', s).group(1))
H = float(re.search(r'\bheight="([\d.]+)"', s).group(1))
lonL, latT, lonR, latB = map(float, re.search(r'geoViewBox="([^"]+)"', s).group(1).split())
merc = lambda lat: math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
yT, yB = merc(latT), merc(latB)
lon0 = (lonL + lonR) / 2  # keep the source map's horizontal centring

def inv(x, y):
    lon = lonL + x / W * (lonR - lonL)
    my = yT + y / H * (yB - yT)
    return lon, math.degrees(2 * math.atan(math.exp(my)) - math.pi / 2)

A1, A2, A3, A4, M = 1.340264, -0.081106, 0.000893, 0.003796, math.sqrt(3) / 2
def equal_earth(lon, lat):
    lam = math.radians(lon - lon0)
    l = math.asin(M * math.sin(math.radians(lat)))
    l2 = l * l; l6 = l2 ** 3
    x = lam * math.cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)))
    y = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    return x, -y

STEP = 3.0  # densify long straight segments (source px) so they bend correctly
def rings(d):
    toks = re.findall(r'[mz]|-?\d*\.?\d+(?:e-?\d+)?', d)
    out, cur, start, ring, i = [], (0.0, 0.0), (0.0, 0.0), None, 0
    while i < len(toks):
        t = toks[i]
        if t == 'm':
            i += 1; first = True
            while i < len(toks) and toks[i] not in 'mz':
                nxt = (cur[0] + float(toks[i]), cur[1] + float(toks[i + 1])); i += 2
                if first:
                    ring = [nxt]; start = nxt; first = False
                else:
                    n = max(1, int(math.hypot(nxt[0] - cur[0], nxt[1] - cur[1]) / STEP))
                    for k in range(1, n + 1):
                        ring.append((cur[0] + (nxt[0] - cur[0]) * k / n, cur[1] + (nxt[1] - cur[1]) * k / n))
                cur = nxt
        elif t == 'z':
            out.append(ring); cur = start; i += 1
    return out

paths = re.findall(r'<path\s+d="([^"]+)"\s+title="([^"]*)"\s+id="([^"]+)"\s*/>', s)
assert len(paths) == s.count('<path'), (len(paths), s.count('<path'))
proj = [(pid, title, [[equal_earth(*inv(x, y)) for x, y in r] for r in rings(d)]) for d, title, pid in paths]
xs = [p[0] for _, _, rs in proj for r in rs for p in r]; ys = [p[1] for _, _, rs in proj for r in rs for p in r]
minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
OUT_W = 1000.0; k = OUT_W / (maxx - minx); OUT_H = (maxy - miny) * k
fmt = lambda v: ('%.2f' % v).rstrip('0').rstrip('.')
parts = ['<?xml version="1.0" encoding="UTF-8"?>\n<!-- Equal Earth projection, centred on %.2f°E. Generated from world_modified_hover.svg (Mercator). -->\n<svg xmlns="http://www.w3.org/2000/svg" width="%s" height="%s" viewBox="0 0 %s %s">\n' % (lon0, fmt(OUT_W), fmt(OUT_H), fmt(OUT_W), fmt(OUT_H))]
for pid, title, rs in proj:
    d = []
    for r in rs:
        pts = []
        for x, y in r:
            p = (fmt((x - minx) * k), fmt((y - miny) * k))
            if not pts or pts[-1] != p: pts.append(p)
        if len(pts) < 3: pts = (pts * 3)[:3]
        d.append('M' + 'L'.join(a + ',' + b for a, b in pts) + 'Z')
    parts.append('  <path d="%s" title="%s" id="%s"/>\n' % (''.join(d), title, pid))
parts.append('</svg>\n')
open(dst, 'w', encoding="utf-8").write(''.join(parts))
print('paths', len(proj), 'size', fmt(OUT_W), 'x', fmt(OUT_H), 'lon0', round(lon0, 2))
