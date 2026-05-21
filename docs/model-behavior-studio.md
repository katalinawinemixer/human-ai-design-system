# Model Behavior Studio

Model Behavior Studio is Phase 2 of the portfolio sequence. It turns the reusable Human-AI Design System primitives into a product workflow for comparing, scoring, and tuning model response behavior.

## Current Surface

The first implementation lives in `frontend/src/sections/ModelBehaviorStudioSection.tsx` with product data in `frontend/src/data/modelBehaviorStudioContent.ts`.

It includes:

- Behavior profiles for different response strategies.
- Profile filters for baseline, review, and blocked behavior states.
- An editable prompt playground surface for the active profile.
- Three-way response comparison.
- A scoring rubric for grounding, calibration, usefulness, and tone.
- Prompt history tied to the active behavior profile.
- Human feedback state for reviewer judgment.
- An export-style eval report panel that records source set, run count, prompt state, decision, risk, next eval, and export scope.
- Desktop and mobile README screenshots for the current studio surface.

## Product Intent

The studio is meant to show model-behavior judgment, not just UI craft. The interface makes it possible to ask:

- Which response should become the preferred behavior?
- Does the answer stay grounded in source evidence?
- Is uncertainty visible enough for a human reviewer?
- What prompt change produced the better answer?
- What should be tested next before the behavior ships?

## Remaining Phase 2 Work

- Add selectable response winners instead of using fixture-selected winners only.
- Add prompt version creation when a draft is saved.
- Add a more realistic report export interaction.
- Refresh screenshots as the surface matures.
- Decide whether any backend is needed for saved evals, profiles, or report exports.
