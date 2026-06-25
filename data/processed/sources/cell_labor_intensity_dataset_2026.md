# Volta Foundation — Cell Labor Intensity Dataset (40-facility aggregation)

- **URL**: not archived: catalogued from Stage 2-5 research package
- **Type**: Research data compilation
- **Accessed**: 2026-06-12
- **Raw file**: data/processed/sensitivities/manufacturing_productivity/cell_labor_intensity_tiered.csv
- **Credibility**: Mixed (per-row credibility indicated in CSV; facilities range Tier 1 government data to Tier 4-6 company disclosures and media reports)
- **Linked sensitivities**: manufacturing_productivity, automation
- **Linked claims (from Stage 5)**: ROLE-02, QUANT-MATURITY-CURVE

## Extracted Quotes / Claims

> "40-facility aggregation of battery cell manufacturing labor intensity data globally"

> "Band separation finding: steady-state facilities 72-87 workers/GWh (median 82); ramp-up facilities 125-188 workers/GWh"

> "Nameplate denominator: capacity figures are announced/nameplate, not utilization-adjusted actual production"

> "Confidence score and tier grading (A/B/C) included for each facility; A+B = 24-facility fitting set"

## Notes

**Scope and methodology:**
- Volta Foundation compilation of 40 battery cell manufacturing facilities globally
- Data sources: public disclosures, financial reports, media reports, investor presentations
- Each facility includes: operator, country, chemistry, integration scope, nameplate GWh, headcount, production start year, data vintage, years since start (YSS_clean), calculated workers/GWh, facility lifecycle stage (ramp vs. steady), confidence, URL reference, notes
- Credibility varies by facility: government data (Tier 1) to company disclosures (Tier 2) to media reports (Tier 5-6)

**Key findings:**
- **Band separation, not fitted curve**: The 40-facility dataset shows two distinct bands: steady-state (72-87 w/GWh, median 82) and ramp-up (125-188 w/GWh)
- **Nameplate caveat**: Using announced nameplate capacity as denominator returns R² < 0 on exponential curve fitting, indicating no clean mathematical fit
- **Tier grading**: Facilities rated A (most credible), B (credible), C (provisional); A+B = 24-facility core fitting set

**Critical denominator note:**
- IEA analysis (iea_capacity_utilization_2022) shows ~43% average capacity utilization (2022)
- Many nameplate figures are inflated vs. actual production
- Workers/GWh ratios are therefore understated when using nameplate denominator
- This is a known limitation documented in the CSV and metadata.yaml

**Implications for workforce modeling:**
- Steady-state labor intensity stabilizes around 82 workers/GWh (median; range 72-87)
- Ramp-up phase requires 1.5-2.3x the steady-state labor intensity (125-188 vs. 72-87)
- As global manufacturing scales (more ramp-ups occurring simultaneously), total workforce will exceed simple "global GWh * 82" calculation

**Cross-references:**
- Complements upjohn_naatbatt_2023 (318.5 jobs/GWh value-chain wide) — this dataset is CELL tier only
- Complements icct_battery_jobs_per_gwh.csv (95 average for integrated cells+modules+packs) — slightly lower than this dataset
- Distinct from ev_labor_intensity_study which measures ASSEMBLY tier, not cell manufacturing

**Data vintage and limitations:**
- Mix of 2020-2024 data; facilities at different lifecycle stages
- Some facilities have limited public data; confidence scores flag data quality
- Rapid technological change may make historical data less predictive for future labor intensity

**Follow-up:**
- Track 2024-2025 utilization rates to recalculate workers/GWh using actual production rather than nameplate
- Monitor steady-state figures as more facilities mature (2026+)
- Assess whether labor intensity improvements are driven by automation or simply higher capacity utilization
