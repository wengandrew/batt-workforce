# International Energy Agency — Capacity Utilization in Battery Manufacturing (2022)

- **URL**: https://www.iea.org/
- **Type**: International government agency analysis
- **Accessed**: 2026-06-12
- **Raw file**: not archived: catalogued from Stage 2-5 research package
- **Credibility**: Tier 1 — International Energy Agency official analysis
- **Linked sensitivities**: manufacturing_productivity
- **Linked claims (from Stage 5)**: NEW-02

## Extracted Quotes / Claims

> "Global average battery manufacturing capacity utilization: ~43% (2022)"

> "Nameplate capacity vs. actual production: key denominator anchor for workers/GWh calculations"

## Notes

**Scope and significance:**
- IEA analysis of global battery plant capacity utilization (2022 data)
- Critical methodological finding: nameplate capacity (what plants are designed to produce) vs. actual production capacity (what they actually produce)
- Average utilization ~43% means most plants in 2022 were operating well below full capacity
- Directly impacts workers/GWh calculations: if denominator uses nameplate (higher GWh), workers/GWh ratio is lower

**Implications for labor intensity modeling:**
- Many 2022-2024 facility data points may be "nameplate-inflated" if using announced capacity rather than actual production
- cell_labor_intensity_dataset_2026 uses "nameplate_gwh_num" explicitly to flag this denominator choice
- Stage-5 research found that nameplate-based curve fitting returns R² < 0 (doesn't fit well), supporting band-separation finding rather than fitted curve
- Capacity utilization varies over facility lifetime (ramp-up vs. steady-state), affecting per-unit labor costs

**Cross-references:**
- Compare to actual 2024-2025 utilization rates (post-manufacturing scaling)
- Use with cell_labor_intensity_dataset_2026 to flag which facilities use nameplate vs. actual production
- Supports the Stage-5 finding that labor intensity curves are NOT clean exponential fits when using nameplate data

**Follow-up:**
- Obtain facility-level utilization rates by maturity (year 1 vs. year 5+ of operation)
- Assess how utilization rates impact labor-intensity interpretation
- Track 2023-2026 utilization changes as capacity scaling accelerates
