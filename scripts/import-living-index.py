"""Turn the Bitcoin Living Index spreadsheet into the CSV the map reads.

The spreadsheet has a title row, a header row, then one row per country with eight scored areas
(a text and a 0-5 score each), capital, population, an overall score (a formula), a summary and
a level of detail. The overall score is worked out here from the eight scores with the weights
given in the spreadsheet's title, so the result does not depend on the formula having been
calculated by a spreadsheet program.

Needs the openpyxl package (pip install openpyxl).

    python3 scripts/import-living-index.py path/to/Bitcoin_Living_Index.xlsx public/bitcoin-living-index.csv
"""
import csv, sys
import openpyxl

src, dst = sys.argv[1], sys.argv[2]

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

out, scored = [], 0
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
        overall = "%.2f" % round(sum(s * w for s, (_, _, w) in zip(scores, AREAS)) + 1e-9, 2)
        scored += 1
    else:
        overall = ""                      # no data: the map shows it as "No data"
    line += [text(r[col("Capital city")]), text(r[col("Population")]), overall,
             text(r[col("Summary")]), text(r[col("Level of detail")])]
    out.append(line)

with open(dst, "w", encoding="utf-8", newline="") as fh:
    w = csv.writer(fh, delimiter=";", quoting=csv.QUOTE_MINIMAL, lineterminator="\n")
    w.writerow(out_header)
    w.writerows(out)
print("wrote", dst, "-", len(out), "countries,", scored, "with a score")
