# Model Behavior Studio

Model Behavior Studio is Phase 2 of the portfolio sequence. It turns the reusable Human-AI Design System primitives into a product workflow for comparing, scoring, and tuning model response behavior.

## Current Surface

The first implementation lives in `frontend/src/sections/ModelBehaviorStudioSection.tsx` with product data in `frontend/src/data/modelBehaviorStudioContent.ts`.

It includes:

- Behavior profiles for different response strategies.
- A prompt playground surface for the active profile.
- Side-by-side response comparison.
- A scoring rubric for grounding, calibration, usefulness, and tone.
- Prompt history tied to the active behavior profile.
- Human feedback state for reviewer judgment.
- A lightweight eval report panel that records the decision, risk, and next eval.

## Product Intent

The studio is meant to show model-behavior judgment, not just UI craft. The interface makes it possible to ask:

- Which response should become the preferred behavior?
- Does the answer stay grounded in source evidence?
- Is uncertainty visible enough for a human reviewer?
- What prompt change produced the better answer?
- What should be tested next before the behavior ships?

## Remaining Phase 2 Work

- Make the prompt playground editable with local state.
- Add richer behavior-profile metadata and filter states.
- Expand response comparison beyond two candidates.
- Add a fuller exportable eval report view.
- Capture additional desktop and mobile screenshots as the surface matures.
- Decide whether any backend is needed for saved evals, profiles, or report exports.
