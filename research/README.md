# Research Backbone — Battery Workforce Whitepaper

This directory holds the **synthesized research narrative** behind *"How Many Workers Are Needed for Battery Manufacturing?"* — the evidence matrices, claim memos, counterevidence pass, and gap registers produced across Stages 2–5. Machine-readable data stays under `data/processed/` (sources registry + sensitivity CSVs); this folder is the human-readable evidence trail the eventual whitepaper draws from.

> **Do not draft the whitepaper from these files yet.** They are a research synthesis. The eventual report/dashboard must first apply the corrections in [`CORRECTIONS_TODO.md`](CORRECTIONS_TODO.md).

## Reading order

1. **[`stage5/executive_synthesis.md`](stage5/executive_synthesis.md)** — start here. The central finding (no single number; a two-tier, scope-defined estimate) and the strongest defensible claims.
2. **[`stage5/claim_memo.md`](stage5/claim_memo.md)** — per-claim recommended status, evidence, and drafting notes.
3. **[`stage5/claim_language_boundaries.md`](stage5/claim_language_boundaries.md)** — the guardrail document: what can be said, what must be qualified, what must not be said.
4. **[`stage4/claim_status_updates.md`](stage4/claim_status_updates.md)** — the authoritative Stands/Qualified/Corrected/New ledger from the counterevidence pass.
5. **[`cell_labor_intensity_dataset.md`](cell_labor_intensity_dataset.md)** — the 40-facility ramp-vs-steady dataset (rendering of `data/processed/sensitivities/manufacturing_productivity/cell_labor_intensity_tiered.csv`).
6. **[`CORRECTIONS_TODO.md`](CORRECTIONS_TODO.md)** — deferred dashboard/JSON corrections that gate any report or dashboard update.

## Status of this directory

**Present (landed this pass — the load-bearing subset the data backbone references):**
- `stage5/executive_synthesis.md`, `stage5/claim_memo.md`, `stage5/claim_language_boundaries.md`
- `stage4/claim_status_updates.md`
- `cell_labor_intensity_dataset.md`
- `CORRECTIONS_TODO.md`

**Deferred (archival working memos — to be added by dropping in the clean original files):**
- `stage2/` — `evidence_collection.md`, `research_matrix_export.md`, `preliminary_evidence_matrix.md`, `open_questions.md`, `source_notes.md`, `dashboard_inputs.md`
- `stage3/` — `synthesis.md`, `claim_refinement.md`, `defensibility_update.md`, `searched_but_not_found.md`, `cell_dataset_source_notes.md`
- `stage4/` — `counterevidence_memo.md`, `negative_evidence_matrix.md`
- `stage5/` — `evidence_matrix.md`, `source_appendix.md`, `searched_but_not_found.md`, `open_research_questions.md`, `research_matrix_export.md`

## What each stage is

- **Stage 2 — Evidence collection.** First systematic source sweep; the three-tier workers/GWh structure and the dashboard input-sourcing map.
- **Stage 3 — Synthesis & refinement.** Claim-by-claim support classification, the sharpened ramp-vs-steady thesis, defensibility scoring, and the first searched-but-not-found register.
- **Stage 4 — Counterevidence pass.** Adversarial stress-test of every claim → Stands/Qualified/Corrected/New verdicts. Origin of the five corrections and eight new caveats.
- **Stage 5 — Final research package.** Executive synthesis, claim memo, evidence matrix, language boundaries, source appendix, and open-research-questions register.

## Key contingency

The package's overall **defensibility score is 85/100, contingent on the Stage-4 corrections propagating** into any draft and into the live dashboard data. Until `CORRECTIONS_TODO.md` is worked, the dashboard still shows superseded figures (a clean curve fit, `indirect_multiplier: 1.8`, a single demand trajectory, a single ~300 framing).
