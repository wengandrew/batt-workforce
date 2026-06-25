# Volta Foundation — Battery Labor Intensity Study (anchored-logistic curve fit)

- **URL**: not archived — internal Volta modeling package
- **Type**: Internal derived analysis (curve fit over primary gigafactory disclosures)
- **Accessed**: 2026-06-24
- **Raw file**: `research/model_inputs/battery_labor_intensity_study/` (gitignored; `FINDINGS.md` is the write-up, `analysis/fit_all.py` reproduces every number)
- **Credibility**: Tier 3 — Internal Volta analysis with fully documented, reproducible methodology built on primary gigafactory disclosures; transparent about its own limits (small n, two-point underdetermination, enforced anchor), but not peer-reviewed and based on only four plants
- **Linked sensitivities**: manufacturing_productivity, automation
- **Dashboard linkage**: PRIMARY basis for **View A** (workers/GWh vs years-since-start sigmoid) and for the **149 base** in View B (`global_jobs.json` → `assumptions.base_workers_per_gwh`)

## What this is

An anchored four-parameter logistic fit of how cell-manufacturing labor intensity (workers per GWh of annual capacity, "WPV") decays over a plant's first years of production, across four gigafactories: **LGES Poland, LGES Michigan, PENA Nevada (US), CATL (global)**.

```
WPV(x) = a / (1 + exp(-b*(x - c))) + WPV0
WPV0   = 1000 - a / (1 + exp(b*c))        # enforces WPV(0) = 1000
```

`x` = years since production start; `a` = total drop to the mature floor (negative); `b` = decline speed; `c` = inflection year. The **1,000 w/GWh** startup level is an **enforced anchor, not an observation**, leaving three free params (a, b, c). Mature floor = `a + WPV0`.

## Extracted Quotes / Claims

> Mature-floor **sensitivity band ≈ 138–149 workers/GWh**. The spread is driven entirely by how much LGES Poland (the low-floor outlier at ~86, and the best-sampled plant) is weighted.

> "Lead with v7 for 'typical plant' framing; cite v6 only for the narrow 'average across observations' claim, and say which one you mean."

> Shared shape across all fits: "a steep first-year decline (inflection ~0.7–0.8 yr) settling into a mature floor by roughly year 3–4."

## Fit results

| Fit | Weighting | Floor (w/GWh) | b | c (yr) | n | DOF |
|-----|-----------|--------------:|--:|-------:|--:|----:|
| v6 pooled | equal per observation | **137.8** | 2.31 | 0.71 | 12 | 9 |
| v7 pooled | equal per plant | **148.5** | 2.94 | 0.81 | 12 | 9 |

Per-plant floors (v5b): Poland 86, Michigan 91, CATL 138, PENA 141.

→ **v7 (148.5) is the basis for the 149 base** used in View B (steady-state floor). v6 (137.8) is the "average across observations" bookend; the View A chart plots v7 solid + v6 dashed.

## Notes

- **Why v7 for "typical plant"**: plants are the unit of analysis, so capping each plant at weight 1 strips Poland's count-driven leverage. v6's higher R² (0.87 vs 0.81) is partly mechanical (unweighted LS optimizes the unweighted metric) — not evidence it is "more accurate."
- **Caveats**: Michigan & PENA have 2 obs vs 3 params (DOF = −1) → their per-plant params are illustrative shapes, not estimates. Descriptive, not predictive — do not extrapolate beyond the observed window. The statistically ideal estimate (hierarchical / random-effects) is infeasible with 4 clusters of 2–4 points; v6/v7 are the crude bookends.
- **Provenance**: per-plant observations are in `data/processed/sensitivities/manufacturing_productivity/labor_intensity_benchmarks.csv` (`source_id = battery_labor_intensity_study`); published sigmoid params are emitted by `scripts/generate_dashboard_data.py` (`study_characteristic_curve`) so they survive regeneration.
- **Distinct from**: `cell_labor_intensity_dataset_2026` (separate 40-facility band-separation compilation, steady-state 72–87 w/GWh on a nameplate denominator) and `ev_labor_intensity_study` (assembly tier, not cell manufacturing).
