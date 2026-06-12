# Deferred Corrections Gate

This document captures values CURRENTLY LIVE in the repo that contradict the Stage 2-5 research package and must be fixed before any dashboard/report update. **Do not perform these corrections yet** — this is a deferred work gate. All corrections are contingent on the research findings and must be reviewed against source evidence before implementation.

**Status:** Flagged for Phase 3 (dashboard/report update), after coordination with research team.

**Defensibility contingency:** The 85/100 research defensibility score is contingent on these corrections propagating into the live dashboard and report.

---

## 1. Labor Intensity Curve Framing

### Current state (site/data/labor_intensity.json)

```json
{
  "metadata": {
    "curve_fit": {
      "note": "scipy not available, no curve fit performed"
    }
  }
}
```

The current JSON metadata does not specify curve-fit parameters or quality metrics. Historical dashboard language advertised a "clean exponential fit" with R²≈0.85.

### Required correction

**Replace the exponential-fit framing with band separation + nameplate caveat:**

1. **Remove:** Any reference to "clean exponential fit" or "R²≈0.85"
2. **Add metadata:**
   ```
   "curve_fit": {
     "type": "band_separation (not fitted curve)",
     "finding": "Nameplate-denominator data does not fit a single exponential function (R² < 0)",
     "steady_state_band": "72-87 workers/GWh (median 82)",
     "ramp_up_band": "125-188 workers/GWh",
     "denominator": "Nameplate capacity (announced); see iea_capacity_utilization_2022 for ~43% actual utilization context",
     "cite": "cell_labor_intensity_dataset_2026; Stage 5 claim QUANT-MATURITY-CURVE"
   }
   ```

3. **Facilities view:** Add note explaining that LGES Wroclaw progression (464→81 w/GWh) is illustrative of ramp-to-steady transition, not a predictive curve for all facilities.

4. **Documentation:** Link to `research/stage5/claim_language_boundaries.md` for full technical rationale.

### Why this matters

- Current framing implies labor-intensity improves predictably via a mathematical law (exponential decay)
- Reality: labor-intensity stabilizes in two bands (steady ~82, ramp ~150 median) with facility-specific variation
- Nameplate denominator overstates GWh figures vs. actual production; curve fitting on overstated denominators returns R² < 0
- Correct framing: band separation + nameplate caveat

---

## 2. Indirect Employment Multiplier

### Current state (site/data/global_jobs.json)

```json
{
  "assumptions": {
    "indirect_multiplier": 1.8
  }
}
```

Assumes 1.8x multiplier (direct jobs create 1.8x indirect/induced jobs).

### Required correction

**Replace single 1.8 multiplier with range and bias-correction note:**

```json
{
  "assumptions": {
    "indirect_multiplier": {
      "note": "Regional, never stacked",
      "reported_range": "2.2-3.4x (IMPLAN I-O models)",
      "bias_corrected_range": "1.6-2.5x (Upjohn empirical validation)",
      "cite": "upjohn_local_job_multipliers_2019; nevada_goed_fy24 (2.2x actual)",
      "regional_examples": {
        "nevada": 2.2,
        "midwest": 1.8,
        "southeast": 1.9
      }
    }
  }
}
```

### Critical caveat

"Never stacked" — multiplier effect is NOT cumulative across supply-chain segments. Do not multiply both direct cell manufacturing AND pack assembly multipliers in the same calculation.

### Why this matters

- IMPLAN and other I-O models systematically overstate local multipliers by 25-33%
- Upjohn research (2019) shows actual durable-goods multipliers are 1.6-2.5x, not 3.4x
- Nevada's reported 2.2x aligns with Upjohn findings
- Previous estimates using 3.4x multiplier are biased high; all workforce projections using C2ES-style IMPLAN should be downward-adjusted ~30%

---

## 3. Base Labor Intensity (workers/GWh)

### Current state (site/data/global_jobs.json)

```json
{
  "assumptions": {
    "base_workers_per_gwh": 120
  }
}
```

Single 120 w/GWh figure applied to all global demand. NEVER specify a single ~300 figure.

### Required correction

**Replace with two-tier structure:**

```json
{
  "assumptions": {
    "base_workers_per_gwh": {
      "note": "Two-tier structure; never use single ~300 reconciliation figure",
      "cell_plus_pack_tier": {
        "low": 95,
        "mid": 140,
        "high": 180,
        "cite": "icct_battery_jobs_2024; cell_labor_intensity_dataset_2026"
      },
      "full_chain_us": {
        "value": 310,
        "scope": "Mining, refining, cell, pack, assembly, recycling, distribution (2023 US baseline)",
        "cite": "upjohn_naatbatt_2023 (63.7k jobs / 200 GWh)",
        "caveat": "Pre-OBBBA upper bound; not applicable post-2025 policy changes"
      },
      "regional_variation": {
        "china_steady": 50,
        "western_mature": 80,
        "us_new_plants": 120,
        "cite": "cru_ritchie_china_intensity; cell_labor_intensity_dataset_2026"
      }
    }
  }
}
```

### Key rules

1. **Cell+pack tier (95-180):** Use for integrated battery manufacturing facility projections
2. **Full-chain US (~310):** Use ONLY for US value-chain context; do NOT mix with cell-tier figures
3. **NEVER use ~300 as a reconciliation figure** — this conflates two different scopes
4. **Regional variation:** China ~50, Western ~80-120, US new ~120-180 (depending on maturity)

### Why this matters

- Previous single 120 w/GWh figure was an arbitrary compromise between cell (95) and full-chain (310)
- Mixing scopes (cell vs. full-chain) in the same calculation produces misleading workforce projections
- Post-OBBBA, full-chain US ~310 may shift downward; cell-tier 95-180 is more robust to policy changes
- Stage-5 research explicitly separates scopes; dashboard/report must do the same

---

## 4. Global GWh Demand Anchor Points

### Current state (site/data/global_jobs.json)

```json
{
  "global_gwh_demand": [
    {"year": 2024, "gwh": 1000},
    {"year": 2050, "gwh": 12000}
  ]
}
```

Assumes smooth growth from 1,000 GWh (2024) to 12,000 GWh (2050).

### Required correction

**Anchor to demand band for 2030-2035; treat 2050 as scenario-dependent:**

```json
{
  "global_gwh_demand": [
    {
      "period": "2024",
      "gwh": 1000,
      "note": "Baseline (actual)"
    },
    {
      "period": "2030-2035",
      "scenario_floor": 3300,
      "scenario_ceiling": 5273,
      "floor_cite": "mckinsey_demand_outlook_2025 (fading momentum)",
      "ceiling_cite": "iea_gevo_2025 STEPS scenario",
      "note": "60% variance band; BNEF June 2025 cut -8% from prior outlook"
    },
    {
      "period": "2050",
      "value": 12000,
      "caveat": "Scenario endpoint, NOT a point forecast; actual demand depends on 2030-2033 policy outcome (45X phase-out timing, EV adoption rates)",
      "cite": "iea_gevo_2025; market_share/demand_band.csv"
    }
  ]
}
```

### Why this matters

- 2030-2035 band (3,300-5,273 GWh) frames realistic uncertainty
- Single pathway to 12,000 GWh (2050) implies false certainty
- 45X phase-out (2030-2033) creates policy cliff; 2050 outcome depends on post-2033 cost competitiveness
- Demand uncertainty (60% band width) is larger than regional allocation uncertainty; should be front-and-center in dashboard

---

## 5. US Market Share - Retire 14% Upper Bound

### Current state (site/data/global_jobs.json)

```json
{
  "scenarios": {
    "us_high": {
      "market_shares": {
        "US": [0.07, 0.09, 0.11, 0.13, 0.14, 0.14, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15]
      }
    }
  }
}
```

US share peaks at 0.15 (15%) in 2029+ in "us_high" scenario. This was pre-OBBBA projection.

### Required correction

**Retire 14-15% upper bound; replace with 7-10% realistic range:**

```json
{
  "scenarios": {
    "baseline_post_obbba": {
      "label": "Baseline (Post-OBBBA)",
      "market_shares": {
        "US": [0.07, 0.07, 0.08, 0.08, 0.09, 0.09, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
        "cite": "csis_new_phase_2026 (5% current capacity); nevada_goed_fy24 (2.2x multiplier suggests 7-10% employment share)"
      }
    },
    "us_high_pre_2025": {
      "label": "RETIRED: IRA High Growth (pre-OBBBA scenario)",
      "status": "obsolete",
      "note": "Pre-June 2025; 45X phase-out and 30D termination invalidate 14-15% projection. See baseline_post_obbba instead."
    }
  }
}
```

### Key citation

CSIS New Phase 2026: "US ~5% cell capacity (2026); 29-72% of announced capacity at risk of closure or indefinite delay."

### Why this matters

- 14-15% was pre-OBBBA policy assumption (45X continuous, 30D active)
- OBBBA (June 2025) enacted 45X phase-out 2030-2033, terminated 30D
- CSIS data (Q1 2026) shows 2025 investment cancellations ($11B) exceeded announcements ($8B)
- Realistic post-OBBBA range: 5-10% (central 7-10%), NOT 14-15%
- Report/dashboard must not cite 14-15% without explicitly dating it to pre-June 2025

---

## 6. Retire These Figures (Never Reappear)

The following figures contradicted by Stage-5 research and must not reappear in any form:

### ❌ Single ~300 workers/GWh "reconciliation"
- **Why:** Conflates cell-tier (95-180) with full-chain-US (~310). Use two-tier structure instead.

### ❌ 36% construction share
- **Why:** C2ES reports 36% construction for FULL supply chain (mining+refining+manufacturing+recycling). Battery CELL manufacturing is ~10-20% construction (mainly startup phase). IREC data shows battery STORAGE deployment is 52.3% construction (different scope entirely).

### ❌ BLS "48,000-52,500" baseline
- **Why:** Outdated figure. Current BLS NAICS 33591 (May 2026): 60,400 workers. Use this instead.

### ❌ Weng et al. for cell manufacturing labor intensity
- **Why:** Weng et al. (Nature Comms 2024) measures EV ASSEMBLY tier labor intensity, NOT cell manufacturing. Do not cite for cell-tier projections; use only for assembly-tier context.

### ❌ 14% US upper bound (post-June 2025)
- **Why:** Pre-OBBBA scenario. Replaced by 7-10% post-OBBBA baseline.

---

## 7. Cross-References for Context

**For detailed rationale, see:**
- `research/stage5/claim_language_boundaries.md` — full technical justification for all corrections
- `research/stage4/claim_status_updates.md` — how Stage 4 counterevidence shaped Stage 5 findings
- `data/processed/sources/cell_labor_intensity_dataset_2026.md` — 40-facility dataset documentation
- `data/processed/sources/upjohn_local_job_multipliers_2019.md` — multiplier bias explanation
- `data/processed/sources/csis_new_phase_2026.md` — post-OBBBA policy landscape

---

## 8. Approval Process

**Before implementing these corrections:**
1. Research team review and approval (sign-off on technical findings)
2. Coordinate with Volta Foundation leadership (policy/messaging implications)
3. Update dashboard, report, and any public-facing summary materials simultaneously (avoid version mismatch)
4. Archive superseded figures (document why they were replaced)
5. Update `Plan.md` to reflect dashboard/report phase completion

**Timeline:** Estimated 2-4 week turnaround for review + implementation, pending capacity.

---

## 9. Impact Summary

| Aspect | Current | Corrected | Impact |
|--------|---------|-----------|--------|
| Curve fit | Exponential R²≈0.85 | Band separation, R²<0, nameplate caveat | Honest framing of data limitations |
| Multiplier | 1.8x (single) | 1.6-2.5x (bias-corrected range) | ~15% downward adjustment to indirect jobs |
| Base w/GWh | 120 (single) | 95-180 cell tier; 310 full-chain US | Eliminates scope confusion; enables regional modeling |
| Demand 2050 | 12,000 GWh (deterministic) | Scenario-dependent with 2030-2035 band | Honest uncertainty quantification |
| US share 2035 | 10-15% | 7-10% | Reflects post-OBBBA policy retrenchment |
| Defensibility | 85/100 (contingent) | 85/100 (if corrections applied) | Validates research findings in live outputs |

---

## 10. Questions for Implementation Team

1. **Dashboard architecture:** Can the JSON structure be updated to include ranges/scenarios without breaking visualization logic?
2. **Report text:** Which sections reference current figures that will change? (e.g., executive summary, regional projections)
3. **GitHub Pages deployment:** What is the workflow for updating live site/ outputs? Need coordination to avoid intermediate inconsistency.
4. **Backward compatibility:** Should superseded figures be archived in `research/archive/` for reference, or deleted?
5. **Stakeholder communication:** Should research team publish a blog post / memo explaining the changes to external audiences?
