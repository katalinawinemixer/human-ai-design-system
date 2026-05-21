# Component Specifications

This document keeps the Human-AI Design System organized as a reusable product foundation, not only a visual gallery.

## Component Inventory

| Component | Job | Core states | Reuse path |
| --- | --- | --- | --- |
| Source citation card | Attach important claims to source context, confidence, and evidence tone. | Supported, inferred, needs source | TrialSense claim review, investor memo evidence trails, answer provenance |
| Confidence meter | Explain what the system knows, where it is extrapolating, and why the answer should be trusted cautiously. | High, moderate, low, blocked | Clinical feasibility scoring, model response calibration, risk review |
| Human feedback control | Capture user judgment as structured signal instead of a generic reaction. | Useful, speculative, unhelpful | Behavior tuning loops, eval dataset collection, reviewer triage |
| Agent activity timeline | Show work in progress so users can inspect what has been read, checked, or deferred. | Complete, active, waiting, error | Research agents, diligence workflows, source ingestion status |
| Eval scorecard | Make model quality legible through rubrics that product, research, and domain experts can discuss. | Passing, needs attention, regression | Model Behavior Studio scoring, prompt iteration reviews, release checks |
| Human review banner | Interrupt only when unchecked output carries enough risk to require intervention. | Required, recommended, approved | Memo approval, clinical-claim validation, high-risk output gates |

## Review Checklist

- **Evidence:** Can the user see which source supports the claim and whether the claim is direct or inferred?
- **Calibration:** Does the interface explain confidence in plain language instead of hiding behind a score?
- **Control:** Can a human approve, challenge, or correct the model at the point where judgment matters?
- **Reuse:** Can the pattern move into Model Behavior Studio or TrialSense without being redesigned from scratch?

## Implementation Notes

- UI examples live in `frontend/src/components/`.
- Static example content lives in `frontend/src/data/designSystemContent.ts`.
- Page-level presentation lives in `frontend/src/sections/`.
- This document should be updated whenever a component adds a new state, interaction, or reuse target.
