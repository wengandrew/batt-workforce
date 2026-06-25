# IEA — Global EV Outlook 2026 (Battery Manufacturing & Trade)

- **URL**: https://www.iea.org/reports/global-ev-outlook-2026/manufacturing-and-trade (also: /electric-vehicle-batteries)
- **Type**: Intergovernmental agency report — free / publicly downloadable
- **Published**: 2026-05-20
- **Accessed**: 2026-06-24
- **Raw file**: not archived (free public web/PDF + downloadable chart data)
- **Credibility**: Tier 2 — IEA flagship annual outlook, freely published with downloadable data; authoritative and widely cited, though forward projections (STEPS/APS scenarios) carry forecast uncertainty
- **Linked sensitivities**: market_share, policy_scenarios
- **Dashboard linkage**: PRIMARY source for the View B regional market-share matrix (`scenarios.*.market_shares`) in `site/data/global_jobs.json`

## Why this source (post-OBBBA + public)

This is the **first major EV outlook published after the One Big Beautiful Bill Act** (OBBBA, signed 2025-07-04, Public Law 119-21). OBBBA **repealed the consumer EV tax credits** but **preserved the 45X advanced-manufacturing credit** (phase-down 2030-2033, with new prohibited-foreign-entity rules). It therefore reflects the resulting US demand collapse, which the pre-OBBBA BNEF EVO 2025 (June 2025) and IEA GEVO 2025 (May 2025) do not. It is also **free and publicly downloadable**, so the figures are reproducible without a paywall (unlike BNEF EVO).

## Extracted Quotes / Figures

### Global cell manufacturing capacity
> Global nameplate Li-ion cell manufacturing capacity reached **more than 4 TWh by end-2025**, up ~30% vs 2024.

> Specific planned projects (under construction or past FID) are likely to raise global production capacity from the current **~3.3 TWh to around 6.5 TWh by 2030** (up to ~9 TWh if all announcements complete; ~70% already operational or committed).

### Regional shares
> China accounts for **over 80% (≈85%) of global cell production in 2025**, falling to **around two-thirds (~67%) by 2030**. (ch. Manufacturing & Trade)

> In 2025, **China accounted for 70% of electric car production and over 80% of battery cell production**, as well as ~85% of CAM and >90% of AAM. (ch. Manufacturing & Trade — note: 70%/over-80% are *separate* figures for cars vs cells; do not conflate.)

> By 2035 (STEPS), China "supplies… **two-thirds of batteries**"; advanced economies provide "about **25% of battery output in 2035**, with the European Union and United States together providing… **20% of battery production**"; EMDEs other than China "increase their battery… output share to about **6%**… about six times their 2025 share." (Electric-CAR output is a *different* metric: China "just below 60% in 2035" refers to cars, not batteries.)

> **EU and US each ~6-7%** of global capacity in 2025 (2024→2025 growth ~50% each; "rest of world" almost doubling).

> In the EU, the Korean-manufacturer share of capacity falls from ~85% now to **30% by 2030**, while EU-based firms rise from **5% (end-2024) to 20%**.

### Hard 2025 per-region capacity table (resolves the follow-up below)

From the IEA chart **"Installed electric lithium-ion battery cell nameplate manufacturing capacity by region and location of manufacturer's headquarters, 2025"** (data: Benchmark Mineral Intelligence). Manufacturing capacity by LOCATION (summing each location row across all HQ columns, EV-cell capacity only, excluding BESS), GWh:

| Region | GWh (2025) | Share |
|--------|-----------:|------:|
| China | 3,170 | **81.1%** |
| United States | 291 | **7.4%** |
| European Union | 269 | **6.9%** |
| Korea | 73 | 1.9% |
| Japan | 49 | 1.3% |
| Rest of world | 57 | 1.5% |
| **Total (EV cell)** | **3,909** | 100% |

- Confirms the report text (China >80%, EU & US ~6-7% each). EU capacity is dominated by Korean-HQ manufacturers (193 of 269 GWh ≈ 72%), matching the "Korean share falls from ~85%" statement.
- This is **nameplate capacity**, not production. The US runs at ~40% utilization (vs China near full), which is why the model's US *production* share (5.9% in 2035) sits below its capacity share — the two are reconciled on a production basis in `global_jobs.json`.
- The model folds Korea + Japan + RoW into "Rest of World" (4.7% combined in 2025).
- The 2030-trajectory chart ("Historical production and announced expansion… 2024, 2025, 2030") has CSV download disabled on iea.org, so its exact 2030 cells are not public; the 2030/2035 split is anchored on the report text above (China two-thirds; EU+US 20%; EMDE ~6% by 2035).

### United States (post-OBBBA)
> In the STEPS, **US battery cell production reaches less than 350 GWh in 2030 and just over 400 GWh in 2035**, primarily serving domestic needs (remainder exported to Mexico) — equivalent to only **~40% of the nameplate capacity of currently committed projects**.

> Lower projected US battery demand makes additional investment "more difficult to justify"; in the absence of the tax credit there is "virtually no government financial support for the purchase of electric cars in 2026"; US EV sales ~**10% of new car sales** (vs ~50% previously projected).

## Derived parameter — US production share (View B)

US production ÷ McKinsey global demand (the model's global scalar):

| Year | US production (IEA) | Global (McKinsey) | US share |
|------|--------------------|-------------------|----------|
| 2030 | <350 GWh | 4,200 GWh | ~8.3% |
| 2035 | ~400 GWh | 6,800 GWh | ~5.9% |

→ **peak-then-decline**: US share rises to ~8% around 2030 as committed 45X-era projects come online, then falls as US demand stays weak and the rest of the world grows faster. This is the opposite of the pre-OBBBA BNEF curve (US rising to ~8% and holding).

Full curves applied to `global_jobs.json` baseline (2026-06-24 re-anchoring). 12 points = 2024, 2025, 2026-2029, 2030, 2032, 2035, 2040, 2045, 2050:
- **US** (LOCKED, unchanged): 4.5% → 5.5% → … → **8.3% (2030)** → **5.9% (2035)** → 4.3% (2050). Verified against IEA US production 350/400 GWh ÷ McKinsey base.
- **China**: 84% → 82% (2025, ≈ IEA >80%) → **67% (2030, IEA two-thirds)** → **66.5% (2035, IEA two-thirds plateau)** → 60% (2050, post-2035 extrapolation). No longer falls to 53% — IEA says China holds ~two-thirds of batteries through 2035.
- **Rest of World** (Korea+Japan+EMDE-ex-China): 5.5% → 4.7% (2025, = chart table) → 9.7% (2030) → **11% (2035, = IEA ~5% Japan/Korea + ~6% EMDE)** → 14.5% (2050). Pulled DOWN from the prior interpolation's overstated ~20% at 2035.
- **EU**: residual = 6% → 6.8% (2025, = chart 6.9%) → 15% (2030) → **16.6% (2035)** → 21.2% (2050).

Hard IEA anchors: 2025 per-region capacity (chart table above), China 2030/2035 (two-thirds), US production 2030/2035, EU+US 20% & EMDE ~6% in 2035. EU is the residual (see basis caveat); 2030 EU and post-2035 are model-filled.

## Demand cross-check (global scalar)

The companion **IEA GEVO 2026 EV Data Explorer** (`iea_ev_data_explorer_2026`, free/public) gives post-OBBBA global battery DEPLOYMENT: 953 GWh (2024), 1,191 GWh (2025) historical; **4,740 GWh (2035 STEPS) / 4,072 GWh (2035 CPS)**. The model's locked McKinsey backbone (6,800 GWh in 2035) is **~43% higher** than IEA STEPS. Per the locked param-2 decision McKinsey is retained as the global scalar, but View B totals are therefore an upper demand case; documented in `global_jobs.json` → `metadata.demand_gap_note`.

## Notes

- Supersedes `bnef_evo_2025` as the primary market-share source; BNEF retained as a pre-OBBBA capacity cross-check.
- Basis caveat: IEA mixes nameplate-capacity shares (China) with a production figure (US at ~40% utilization). The curve reconciles to a production basis. EU is computed as the residual, so the McKinsey-vs-IEA global-volume gap accumulates in EU — placing EU ~4-5 pts above IEA's relative ~12% for 2035 (EU+US ≈ 22.5% vs IEA text ~20%). See `global_jobs.json` → `market_share_basis_note` for the alternative (IEA relative shares throughout, US ~8.6%).
- **Follow-up RESOLVED (2026-06-24)**: pulled the IEA chart data. The 2025 per-region *capacity* table is now hard (above). The downloadable **EV Data Explorer** turned out to be **demand-side** (EV sales/stock/battery deployment), with no cell-manufacturing-capacity parameter — it cannot supply the per-region manufacturing split; it serves as the demand cross-check instead. The 2030-trajectory manufacturing chart has CSV download disabled, so 2030/2035 remain anchored on report text (China two-thirds, EU+US 20%, EMDE ~6%), not a downloadable cell-level table.
