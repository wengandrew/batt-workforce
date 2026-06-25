# BloombergNEF — Electric Vehicle Outlook 2025 (Global Battery Cell Manufacturing Capacity)

- **URL**: https://about.bnef.com/electric-vehicle-outlook/
- **Type**: Commercial market-research / industry forecast
- **Accessed**: 2026-06-24
- **Raw file**: research/model_inputs/Global Production Capacity Forecast - BNEF EVO 2025.csv (extracted table; EVO 2025 PDF pp. 1693–1698)
- **Credibility**: Tier 2 — BloombergNEF flagship industry forecast using bottom-up, risk-adjusted capacity modeling and widely used as an industry benchmark; commercial (non-peer-reviewed) and forward-looking, so projections carry forecast uncertainty
- **Linked sensitivities**: market_share, policy_scenarios
- **Status**: ⚠️ DEMOTED to a pre-OBBBA cross-check. Superseded as the primary View B market-share source by [iea_gevo_2026](iea_gevo_2026.md). Two reasons: (1) published June 2025, BEFORE OBBBA (2025-07-04), so it assumes IRA-intact US demand and shows the US share RISING to ~8% — vs the post-OBBBA peak-then-decline IEA now shows; (2) BNEF EVO is subscription-only, so its per-region figures are not publicly reproducible (the raw CSV is gitignored and not redistributed — only attributed, derived figures are cited).
- **Dashboard linkage**: no longer drives `global_jobs.json` (IEA GEVO 2026 does); retained as a capacity cross-check

## Extracted Data — Risk-adjusted cumulative lithium battery cell manufacturing capacity by region (TWh)

| Region | 2024 | 2025 | 2030 |
|--------|------|------|------|
| China | 2.04 | 3.14 | 6.47 |
| Europe | 0.26 | 0.36 | 0.90 |
| US | 0.11 | 0.19 | 0.63 |
| South Korea | 0.04 | 0.04 | 0.07 |
| Japan | 0.01 | 0.02 | 0.04 |
| Rest of World | 0.01 | 0.04 | 0.39 |
| **Sum of regions (risk-adjusted)** | **2.47** | **3.80** | **8.50** |
| Global as-reported capacity | 4.63 | 7.45 | 13.98 |

(Full annual series 2020–2030 in the source CSV. "Risk-adjusted" discounts announced capacity by likelihood of materializing; "as-reported" is the un-discounted announced total.)

## Derived Parameter — US production share (View B)

US share of the **risk-adjusted sum-of-regions** capacity (consistent numerator/denominator basis):

| Year | US share |
|------|----------|
| 2024 | 4.5% |
| 2025 | 5.0% |
| 2026 | 6.2% |
| 2027 | 6.3% |
| 2028 | 6.8% |
| 2029 | 7.0% |
| 2030 | 7.4% |
| 2035 | ~8.0% (extrapolated, plateau) |

This is the **share of global cell manufacturing**, i.e. where battery-manufacturing jobs are located — the quantity the View B formula needs (`jobs = global_GWh × regional_share × workers_per_GWh`). It is deliberately **not** a consumption/demand share (US ≈ 10–12% of global battery *demand*); under the workforce model, jobs follow factories, not deployment.

**Basis note**: dividing the risk-adjusted US figure by the *as-reported* global line yields a lower 2.4–4.5%, but that mismatches bases (risk-adjusted numerator, un-discounted denominator) and understates the US share. The risk-adjusted/risk-adjusted ratio above is the correct, consistent figure.

## Notes

- Companion to `mckinsey_research` (demand) and `mckinsey_hidden_trends_regional_analysis` (regional supply–demand gaps). McKinsey's finding that IRA moves North America from undersupply (2025) toward balanced supply by 2030 is consistent with the rising US production share here.
- **Supply-vs-demand finding (prior session)**: McKinsey global demand (6.8 TWh by 2035) stays at ~40–49% of BNEF risk-adjusted capacity through 2030 — so **demand, not capacity, is the binding constraint** for the workforce projection.
- **Per-region shares (now applied to `global_jobs.json` for all 4 model regions)** — share of risk-adjusted regional total. Model "Rest of World" = BNEF South Korea + Japan + Rest of World:

  | Year | US | EU | China | Rest of World |
  |------|----|----|-------|---------------|
  | 2024 | 4.5% | 10.5% | 82.6% | 2.4% |
  | 2025 | 5.0% | 9.5% | 82.6% | 2.6% |
  | 2030 | 7.4% | 10.6% | 76.1% | 5.9% |
  | 2035 | ~8.0% | ~11% | ~72% | ~9% (extrapolated) |
  | 2050 | ~8.0% | ~12% | ~63% | ~18% (extrapolated) |

  2024–2030 are BNEF actuals; 2032–2050 extrapolate the trend (China share decelerating, RoW rising) beyond BNEF's horizon.

- **Coherence note (McKinsey demand × BNEF production shares)**: documented in `global_jobs.json` `metadata.market_share_basis_note`. Valid because global production ≈ global demand under oversupply; limitation is the uniform-utilization assumption (raw capacity shares modestly over-weight oversupplied China).
