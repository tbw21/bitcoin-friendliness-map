"""Turn the Bitcoin Living Index spreadsheet into the CSV the map reads.

The spreadsheet has a title row, a header row, then one row per country with eight scored areas
(a text and a 0-5 score each), capital, population, an overall score (a formula), a summary and
a level of detail. The overall score is worked out here, the way the spreadsheet's title
describes it, so the result does not depend on the formulas having been calculated by a
spreadsheet program: a weighted average of the eight scores, then scaled so that the best
country gets 5.0 and every other country is shown relative to it.

Population is shortened for display: "39,232,003 (2023 est.) (CIA)" becomes "39.2M".

Needs the openpyxl package (pip install openpyxl).

    python3 scripts/import-living-index.py path/to/Bitcoin_Living_Index.xlsx public/bitcoin-living-index.csv [previous.csv]

If a previous CSV is given, a capital or population that is missing in the new spreadsheet is
taken from it (and listed), so a gap in the new data does not blank out what was known before.
"""
import csv, re, sys
import openpyxl

src, dst = sys.argv[1], sys.argv[2]
previous = {}
if len(sys.argv) > 3:
    previous = {r["alpha_2"]: r for r in csv.DictReader(open(sys.argv[3], encoding="utf-8"), delimiter=";")}

# column key, spreadsheet header of the text column, weight in the overall score
AREAS = [
    ("tax", "Tax on bitcoin", 0.20),
    ("banking", "Banking and buying bitcoin", 0.15),
    ("legal", "Legal freedom", 0.15),
    ("residency", "Moving here (residency)", 0.12),
    ("spending", "Spending bitcoin", 0.12),
    ("community", "Bitcoin community", 0.08),
    ("privacy", "Privacy and tax reporting", 0.10),
    ("stability", "Stability", 0.08),
]

rows = list(openpyxl.load_workbook(src).worksheets[0].iter_rows(values_only=True))
header = [str(h).strip() if h is not None else "" for h in rows[1]]
col = lambda name: header.index(name)
text = lambda v: "" if v is None else str(v).strip()

out_header = ["name", "alpha_2", "alpha_3", "numeric"]
for key, _, _ in AREAS:
    out_header += [key, key + "_score"]
out_header += ["capital", "population", "overall_score", "summary", "detail"]

def short_population(value):
    """Leading number of the population cell, as 39.2M / 85.5K (an approximate "~" is kept);
    anything without a number, such as "No permanent population", is kept as written."""
    text = "" if value is None else str(value).strip()
    if text.startswith("("):                   # only a note, no figure: show it as unknown
        return "—"
    text = re.sub(r"^(about|approx\.?|around|c\.)\s+", "~", text, flags=re.I)
    text = re.sub(r"\s*(million|billion|thousand)\b", lambda w: {"million": "M", "billion": "B", "thousand": "K"}[w.group(1).lower()], text, flags=re.I)
    m = re.match(r"(~?)\s*([\d][\d.,]*)\s*([MKBmkb])?(?![\w])", text)
    if not m:
        return text
    approx, raw, unit = m.groups()
    unit = unit.upper() if unit else unit
    if unit:                                   # already short, e.g. "39.2M", "39,2M" or "5.65M"
        n = float(raw.replace(",", ".")) * {"K": 1e3, "M": 1e6, "B": 1e9}[unit]
    else:
        n = float(raw.replace(",", ""))
    for size, suffix in ((1e9, "B"), (1e6, "M"), (1e3, "K")):
        if n >= size:
            v = n / size
            short = ("%.1f" % v).rstrip("0").rstrip(".") if v < 100 else "%d" % round(v)
            return approx + short + suffix
    return approx + "%d" % n


out, weighted = [], {}
for r in rows[2:]:
    if not r[col("Country code (2 letters)")]:
        continue
    line = [text(r[col("Country")]), text(r[col("Country code (2 letters)")]),
            text(r[col("Country code (3 letters)")]), text(r[col("Country number")])]
    scores = []
    for key, name, _ in AREAS:
        score = r[col(name) + 1]          # the score column follows its text column
        scores.append(score)
        line += [text(r[col(name)]), "" if score is None else str(int(score))]
    if all(s is not None for s in scores):
        weighted[len(out)] = round(sum(s * w for s, (_, _, w) in zip(scores, AREAS)) + 1e-9, 2)
    # overall score filled in below, once the best country is known; empty means no data
    line += [text(r[col("Capital city")]), short_population(r[col("Population")]), "",
             text(r[col("Summary")]), text(r[col("Level of detail")])]
    out.append(line)

# Gaps in capital or population: keep what the previous file had
filled = []
for line in out:
    old = previous.get(line[1])
    for field in ("capital", "population"):
        i = out_header.index(field)
        if line[i] in ("", "—") and old and old.get(field, "").strip() not in ("", "—"):
            line[i] = old[field].strip()
            filled.append("%s (%s)" % (line[0], field))
if filled:
    print("kept from the previous file, missing in the new one:", len(filled))
    print("  " + ", ".join(filled))

best = max(weighted.values())
i_overall = out_header.index("overall_score")
for i, w in weighted.items():
    out[i][i_overall] = "%.2f" % round(w / best * 5 + 1e-9, 2)
scored = len(weighted)

with open(dst, "w", encoding="utf-8", newline="") as fh:
    w = csv.writer(fh, delimiter=";", quoting=csv.QUOTE_MINIMAL, lineterminator="\n")
    w.writerow(out_header)
    w.writerows(out)
print("wrote", dst, "-", len(out), "countries,", scored, "with a score")
