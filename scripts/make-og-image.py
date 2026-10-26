"""Make the Open Graph image (the picture shown when the map's link is shared): the chart on its
own, no interface, 1200 x 630, with the same colours, lettering and grain as the live map.

It builds a small stand-alone page from the map file, the data file and the map's stylesheet,
then photographs it with Google Chrome and saves it as a JPEG (a PNG with grain is over 1 MB,
more than some chat apps accept for link previews). Run it again after the data or the look changes.
macOS only: it uses Chrome and the sips tool.

    python3 scripts/make-og-image.py app/opengraph-image.jpg

Other sizes: give width, height and a sharpness factor after the file name. The picture is laid
out at width x height and saved that many times larger, e.g. a 3840 x 2160 video thumbnail
background:

    python3 scripts/make-og-image.py thumbnail.jpg 1280 720 3
"""
import csv, math, os, re, subprocess, sys, tempfile, urllib.parse

dst = os.path.abspath(sys.argv[1])
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
read = lambda *p: open(os.path.join(root, *p), encoding="utf-8").read()

W, H = (int(sys.argv[2]), int(sys.argv[3])) if len(sys.argv) > 3 else (1200, 630)
SCALE = int(sys.argv[4]) if len(sys.argv) > 4 else 1
MARGIN = 44            # sea between the chart's outer frame line and the picture's edge, px
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# ---- colours: the palette file is the single source
palette = read("data", "palettes.ts")
scores = re.findall(r'"(#[0-9A-Fa-f]{6})"', palette[palette.index("SCORE_COLORS"):])[:5]
no_data = re.search(r'NO_DATA_COLOR = "(#[0-9A-Fa-f]{6})"', palette).group(1)
map_bg = re.search(r'MAP_BACKGROUND = "(#[0-9A-Fa-f]{6})"', palette).group(1)

# ---- each country's band: whole-number part of the overall score, and 5 from 4.5 up, as on the map
band = {}
for row in csv.DictReader(open(os.path.join(root, "public", "bitcoin-living-index.csv"), encoding="utf-8"), delimiter=";"):
    s = row["overall_score"].strip()
    band[row["alpha_2"].strip().upper()] = (5 if float(s) >= 4.5 else min(5, max(1, math.floor(float(s))))) if s else None

svg = read("public", "world_equal_earth_nautical.svg")
svg = svg[svg.index("<svg"):]


def classed(m):
    b = band.get(m.group(2).upper())
    cls = "country-shape is-rated " + ("score-%d" % b if b else "no-data")
    return '<path class="%s" d="%s" id="%s"/>' % (cls, m.group(1), m.group(2))


svg = re.sub(r'<path d="([^"]+)" title="[^"]*" id="([^"]+)"/>', classed, svg)

# ---- the map's own stylesheet, with the fonts pointed at the files on disk
css = read("app", "map", "map.css").replace('url("/fonts/', 'url("file://' + urllib.parse.quote(os.path.join(root, "public", "fonts")) + "/")

# ---- grain: same texture and strength as page.tsx
page = read("app", "map", "page.tsx")
strength = re.search(r"GRAIN_STRENGTH = ([0-9.]+)", page).group(1)
grain_svg = ("<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g' color-interpolation-filters='sRGB'>"
             "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch'/>"
             "<feColorMatrix values='4 0 0 0 -1.5  0 4 0 0 -1.5  0 0 4 0 -1.5  2 2 2 0 -2.7'/>"
             "</filter><rect width='240' height='240' filter='url(#g)'/></svg>")
assert "baseFrequency='0.9' numOctaves='2' seed='11'" in page and "4 0 0 0 -1.5" in page, "grain in page.tsx changed: update it here too"
grain = 'url("data:image/svg+xml,%s")' % urllib.parse.quote(grain_svg)

vars_ = "".join("--score-%d:%s;" % (i + 1, c) for i, c in enumerate(scores))
vars_ += "--map-bg:%s;--no-data:%s;--map-zoom:1;--chart-margin:%dpx;" % (map_bg, no_data, MARGIN)
vars_ += "--map-grain-image:%s;--map-grain-opacity:%s;" % (grain.replace('"', "'"), strength)

html = """<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;background:%s}
/* the small-sea names only appear when zoomed in on the live map */
.map-stage{position:relative;width:%dpx;height:%dpx;overflow:hidden}
.map-container{box-sizing:border-box;cursor:default}
*{animation:none!important;transition:none!important}
.map-container svg .chart-sea-label-small{display:none}
%s
</style></head><body><div class="map-stage" style="%s"><div class="map-container" style="%s">%s</div><div class="map-grain"></div></div></body></html>""" % (
    map_bg, W, H, css, vars_, vars_, svg)

with tempfile.TemporaryDirectory() as tmp:
    page_file = os.path.join(tmp, "og.html")
    open(page_file, "w", encoding="utf-8").write(html)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=%d" % SCALE,
                    "--window-size=%d,%d" % (W, H), "--virtual-time-budget=4000", "--user-data-dir=" + os.path.join(tmp, "profile"),
                    "--screenshot=" + os.path.join(tmp, "og.png"), "file://" + urllib.parse.quote(page_file)],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "90", os.path.join(tmp, "og.png"), "--out", dst],
                   check=True, stdout=subprocess.DEVNULL)
print("wrote", dst, "%d x %d," % (W * SCALE, H * SCALE), os.path.getsize(dst) // 1024, "KB")
