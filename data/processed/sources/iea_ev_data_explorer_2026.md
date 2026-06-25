# IEA — Global EV Data Explorer 2026 (GEVO 2026 data annex)

- **URL**: https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer
- **Type**: Intergovernmental agency data tool — free / publicly downloadable `.xlsx`
- **Published**: 2026 (companion to GEVO 2026, published 2026-05-20)
- **Accessed**: 2026-06-24
- **Raw file**: `research/model_inputs/EV Data Explorer 2026.xlsx` (gitignored; user-provided)
- **Credibility**: Tier 2 — IEA flagship data tool, freely downloadable and reproducible; historical demand data high-confidence, forward STEPS/CPS projections carry forecast uncertainty
- **Linked sensitivities**: market_share (cross-check only), policy_scenarios
- **Dashboard linkage**: post-OBBBA global-DEMAND cross-check on the locked McKinsey backbone (`global_jobs.json` → `metadata.demand_gap_note`)

## What this file is — and is NOT

The workbook is **demand-side**. Sheet `GEVO_EV_2026` (49,176 rows) carries EV sales, EV stock, charging points, prices, and **Battery deployment** (GWh of batteries *in EVs sold* per macro-region). It has **no cell-manufacturing-capacity parameter**.

**It therefore cannot supply the per-region manufacturing split** used in `market_shares` (jobs follow factories → that split needs *manufacturing* shares, which are anchored on the GEVO 2026 report's manufacturing chapter — see [iea_gevo_2026.md](iea_gevo_2026.md)). Deployment ≠ manufacturing: e.g. the US *deploys* ~12% of global battery GWh but *manufactures* only ~4-5%.

## Extracted figures — global battery deployment (GWh)

`parameter = "Battery deployment"`, summed across all vehicle modes. Projection years are **2025 + 2035 only** (no 2030/2050).

| Year | Scenario | World | China | Europe | USA |
|------|----------|------:|------:|-------:|----:|
| 2024 | Historical | 953 | 568 (60%) | 184 (19%) | 114 (12%) |
| 2025 | Historical | 1,191 | 733 (62%) | 251 (21%) | 113 (10%) |
| 2035 | STEPS | 4,740 | 2,093 (44%) | 1,294 (27%) | 322 (7%) |
| 2035 | CPS | 4,072 | 2,093 (51%) | 1,288 (32%) | 109 (3%) |

(Other 2035 STEPS regions: India 236, Korea 98, Japan 53, Southeast Asia 215, Latin America 137.)

## Use in the model — demand cross-check

McKinsey (the locked global scalar) puts 2035 global battery demand at **6,800 GWh**; IEA STEPS here is **4,740 GWh** — McKinsey is **~43% higher**. Per the locked param-2 decision McKinsey is retained, but View B totals should be read as an **upper demand case**; on the IEA STEPS base the global and US job numbers would be ~30% lower. The deployment regional shares above are *demand-side context only* and are not plugged into `market_shares`.

## Notes

- Demand-side regional shares confirm the EU as the clear #2 demand center (China then EU then US) — directionally consistent with the manufacturing split, but not interchangeable with it.
- The historical figures (2024/2025) are the most reproducible post-OBBBA global-demand anchors available for free.
