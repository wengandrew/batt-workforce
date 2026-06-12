# Stage 5 — Claim Language Boundaries

**Project:** Battery Workforce Whitepaper — *How Many Workers Are Needed for Battery Manufacturing?*
**Organization:** Volta Foundation · Research & Insights
**Stage:** 5 — Final Research Package
**Date:** June 12, 2026

**Purpose.** For each claim cluster, this file defines the *boundaries* of defensible language: what can be stated confidently, what must be qualified, what is hypothesis-only, what should not be said, and which specific terms/phrasings to avoid. It also records public-use readiness per cluster.

**This file deliberately does NOT contain whitepaper prose, and does NOT offer multiple polished wording variants.** It is a guardrail document for the drafter, not a draft. Each cluster gives one short example phrasing per tier only to illustrate the boundary — not as copy to lift.

**Readiness vocabulary:** Ready / Ready with qualification / Not yet public-ready / Internal only.

---

## Cluster A — Scope & Boundary Definition (SCOPE-01, SCOPE-02, SCOPE-04)

**Can state confidently:**
- Workforce figures are routinely quoted without their scope boundary in *secondary and popular* use.
- The FCAB Blueprint is the canonical taxonomy *in US federal-policy context*.
- Construction employment is transient and separable from steady-state operating headcount.

**Must qualify:**
- The disclosure indictment targets how figures are *quoted*, not how primary sources *produce* them — major primary sources (ICCT, Upjohn, IEA) do declare scope.
- FCAB is one taxonomy among several (Li-Bridge, IEA, BNEF, EU differ).
- Construction is ~52% of battery-*storage* jobs during build (IREC, Nov 2025) — a storage-installation scope, not cell-mfg.

**Hypothesis-only:** none.

**Do NOT say:**
- That the field *wholesale* fails to define scope (false — blame secondary usage).
- "~36% of jobs are construction" (superseded; was unsourced and ~1.5× too low — use ~52% with its scope).
- That FCAB is *the* universal/global taxonomy.

**Terms to avoid:** "the industry doesn't define scope"; "standard segmentation" (imply universality).

**Readiness:** Ready (SCOPE-01 reframed, UNDR boundary); Ready with qualification (SCOPE-02, SCOPE-04).

---

## Cluster B — Undercounting & Multiplier (UNDR-01, UNDR-02, UNDR-03)

**Can state confidently:**
- US cell-manufacturing-tier employment ≈ **60,400** (BLS NAICS 33591, May 2026, SA preliminary).
- Establishment counts in NAICS 33591 omit upstream (mining/refining) and parts of downstream.

**Must qualify:**
- NAICS 33591 includes non-Li-ion and some charger mfg (scope caveat, not a contradiction).
- The undercount applies specifically to BLS NAICS 33591 — research-grade studies already broaden beyond cell/pack.
- The employment multiplier is **regional and upper-bound-prone**: literature ~2.2–3.4×; bias-corrected ~1.6–2.5× (I-O models overstate ~25–33%, Upjohn/Bartik).

**Hypothesis-only:** none.

**Do NOT say:**
- "48,000–52,500" for US battery mfg (superseded — use 60,400).
- Apply the multiplier *on top of* the full-chain-direct headline (double-counts — never stack).
- Present any single multiplier as a national constant.

**Terms to avoid:** "the multiplier effect adds X jobs to the [full-chain] total"; "nationwide multiplier of 3.4×."

**Readiness:** Ready (UNDR-02); Ready with qualification (UNDR-01, UNDR-03).

---

## Cluster C — Quantitative Core (QUANT-HEADLINE, ROLE-02, QUANT-MATURITY-CURVE)

**Can state confidently:**
- Report **two tiers, each with denominator and geography** (NEW-01 rule):
  - cell+pack ≈ **95–180** w/GWh;
  - full-chain US ≈ **~310** w/GWh (upper bound, pre-OBBBA scenario).
- Every w/GWh figure must state whether the denominator is **nameplate** or **utilized** capacity (NEW-02).
- Ramp-stage intensity exceeds steady-state intensity, *directionally*, on a nameplate basis (band separation: steady ~72–87 vs ramp ~125–188 w/GWh).

**Must qualify:**
- The full-chain-US ~310 rests on Upjohn's single pre-OBBBA 2030 scenario.
- Ramp figures are nameplate-denominated and may partly be a utilization artifact, not pure staffing.
- A "Western floor" of ~97 w/GWh is an estimate, not a universal minimum (models imply ~64–68 cells-only; CATL implies higher).

**Hypothesis-only:**
- The fitted master scaling equation **L(t)** — provisional exponential fit R² < 0; present band separation, not a fitted law. Treat the equation as a methodological contribution awaiting utilized-capacity data.

**Do NOT say:**
- A single triangulated "~300 workers/GWh" headline (superseded — the ~300 was definitional scope-matching, and the 2.15 breadth factor is unvalidated).
- Cite **Weng et al. (Nat. Comms 2024) ">10×"** for *cell manufacturing* (it studies BEV vehicle *assembly*).
- Present the maturity curve as a fitted/validated equation.
- Treat 67–97 w/GWh as a *global* automation minimum (it is Western/US).

**Terms to avoid:** "the benchmark is ~300 workers per GWh"; "we fit a labor-intensity curve"; "automation floors at ~97."

**Readiness:** Ready with qualification (QUANT-HEADLINE, ROLE-02 band separation); Not yet public-ready as a fitted equation (QUANT-MATURITY-CURVE).

---

## Cluster D — Automation & Chemistry (AUTO-01, AUTO-02, AUTO-03)

**Can state confidently:**
- Substantial direct labor persists even in highly automated plants.
- Dry-electrode processing materially reduces electrode-stage labor (PCIMag; Tesla 4680 scaled FY2025).

**Must qualify:**
- The Western/US mature-plant floor (~67–97 w/GWh) must be **geography-tagged**; BYD's most-automated ≈ 50 vs US ≈ 315 implies a ~6× US–China spread.
- Labor as ~7% of cell cost is a **China-context** figure; do not use it as a global bound on process change.
- Na-ion is **not yet a clean drop-in**; chemistry shifts are labor-relevant, not neutral.

**Hypothesis-only:**
- Solid-state is *more* labor-intensive (NEW-07) — single practitioner source; a **2050-scenario** upward risk only.

**Do NOT say:**
- That automation has driven, or will drive, labor to a single global minimum.
- Bound process-change effects by the 7% labor-share figure.
- That next-gen chemistries are labor-neutral "drop-ins."
- "≤6% staffing shift" unless a source is found (currently unsourced).

**Terms to avoid:** "automation has solved the labor question"; "chemistry-agnostic labor intensity"; "Na-ion drops into existing lines."

**Readiness:** Ready with qualification (AUTO-01, AUTO-02, AUTO-03); Not yet public-ready (NEW-07 solid-state).

---

## Cluster E — Demand & Scenario (DEMAND-01, SCEN-02, SCEN-GLOBAL-WF)

**Can state confidently:**
- 2030–2035 demand band ≈ **3,300 (floor) to 5,100–5,273 GWh (ceiling)**.
- US cell-manufacturing capacity ≈ **~5%** of global (CSIS).

**Must qualify:**
- BNEF cut its 2025–2035 outlook ~8% (−3.4 TWh, mostly US) — flag the US-driven downside; ESS partially offsets.
- US employment share ≈ **7–10%** (the 14% upper bound is retired); condition on the post-OBBBA reset.
- 2025 US cancellations (~$11B) exceeded announcements (~$8B); a third-party study cites 29–72% closure risk (CSIS).
- Global *direct manufacturing* workforce ≈ **600K–1.2M** — a **derived range**, not a point estimate.

**Hypothesis-only:** none in this cluster, but the global figure is derived (not measured).

**Do NOT say:**
- "14%" US employment share (retired upper bound).
- Compare the derived ~600K–1.2M to the GBA "10 million" or McKinsey "18 million" as if same scope — those are **full-chain incl. existing jobs**; differentiate explicitly.
- Present any single demand number without its scenario.

**Terms to avoid:** "the industry will employ 10 million by 2030" (without the boom-era/full-chain caveat); "demand will reach [single number] GWh."

**Readiness:** Ready (DEMAND-01); Ready with qualification (SCEN-02); Not yet public-ready as a point estimate (SCEN-GLOBAL-WF — usable as a derived range).

---

## Cluster F — Regional, Policy & Analog (REGION-01–04, POLICY-01, POLICY-03, ANALOG-01)

**Can state confidently:**
- Siting is multi-factor; **power access is now a top-tier (#1, per Voit) industrial siting criterion** alongside OEM proximity.
- The subsidy–workforce link is **mechanism-level** (job-quality conditions), with **no statutory job-count minimum** in §45X/§48C.
- OBBBA produced a **mixed** outcome: §45X survived with the same 2030–2033 phase-out plus FEOC/content rules; §30D ended 9/30/25; ATVM repealed (Miller Chevalier).
- No published **total-supply-chain** workers/GWh benchmark exists (re-scoped POLICY-03).
- The semiconductor crosswalk is the best transferable *method* analog.

**Must qualify:**
- A **cell-operations** benchmark *does* exist (McKinsey ~30–40 FTE/GWh; Faraday ~180) — acknowledge it so novelty is not overstated (NEW-05).
- Power-primacy and the ~6× spread rest on single sources (Voit; CRU) — flag for a second source.
- Training throughput is a **solvable lead-time bottleneck**, not universal incapacity; distinguish regions with vs without established training infrastructure.
- Skilled-trades shortfall (REGION-02) is **all-trades**, not battery-specific; the 82% figure is boom-era.
- The semiconductor 67k gap is **stale (Jul 2023)**; borrow the *method*, not the magnitudes; pair with McKinsey 2024.

**Hypothesis-only:**
- Infrastructure strain *binds* workforce build-out pace (REGION-03 causal version, Q-08) — observational only; BlueOval City finished on schedule with market-driven delays.

**Do NOT say:**
- "There is no analyst benchmark for battery workforce" (false at the cell-ops level — use the re-scoped wording).
- That OBBBA "terminated" battery incentives wholesale (over-simplifies the mixed outcome).
- That infrastructure strain *caused* build-out delays.
- That aerospace/cybersecurity offer transferable workers-per-unit methods (dropped — no production-unit-to-labor model).
- Quote the 67k semiconductor gap as current without the Jul-2023 flag.

**Terms to avoid:** "incentives were the primary siting driver"; "OBBBA repealed the battery credits"; "strain delayed the plant"; "no benchmark exists."

**Readiness:** Ready (POLICY-01, POLICY-03 re-scoped); Ready with qualification (REGION-01, REGION-04, ANALOG-01, NEW-08); Background only (REGION-02); Not yet public-ready (REGION-03 causal link).

---

## Cross-cutting language rules (apply throughout)

1. **Always state scope + denominator + geography** on every workforce or w/GWh figure.
2. **Never stack** the multiplier on the full-chain headline.
3. **Two-tier rule** for the quantitative core — never one triangulated headline.
4. **Differentiate** the GBA 10M / McKinsey 18M full-chain scenarios from direct-mfg estimates.
5. **Geography-tag** all intensity figures (Western/US vs China).
6. **Hypothesis flagging:** the L(t) curve, ROLE-03 composition shift, REGION-03 causal link, and NEW-07 solid-state must be presented as anticipated/derived, not measured.
7. **Superseded figures must not reappear:** single ~300 reconciliation, ~36% construction share, 48,000–52,500 BLS, 14% US upper bound, Weng-for-cells.
8. The defensibility score (85/100) is **contingent on these Stage-4 corrections propagating into the draft** — state that contingency in the synthesis.

*Companion files: `claim_memo.md`, `evidence_matrix.md`, `searched_but_not_found.md`, `open_research_questions.md`.*
