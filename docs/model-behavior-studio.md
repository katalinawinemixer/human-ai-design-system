# Model Behavior Studio

Model Behavior Studio is Phase 2 of the portfolio sequence. It turns the reusable Human-AI Design System primitives into a product workflow for comparing, scoring, and tuning model response behavior.

## Current Surface

The first implementation lives in `frontend/src/sections/ModelBehaviorStudioSection.tsx` with product data in `frontend/src/data/modelBehaviorStudioContent.ts`.

It includes:

- Behavior profiles for different response strategies.
- Profile filters for baseline, review, and blocked behavior states.
- An editable prompt playground surface for the active profile.
- Three-way response comparison.
- Selectable response winners.
- A scoring rubric for grounding, calibration, usefulness, and tone.
- Prompt history tied to the active behavior profile, including newly saved prompt drafts.
- Human feedback state for reviewer judgment.
- An export-style eval report panel that records source set, run count, prompt state, selected response, decision, risk, next eval, and export scope.
- Generated export preview for the active behavior profile.
- Downloadable `.txt` export artifact for the generated report.
- Desktop and mobile README screenshots for the current studio surface.

## Product Intent

The studio is meant to show model-behavior judgment, not just UI craft. The interface makes it possible to ask:

- Which response should become the preferred behavior?
- Does the answer stay grounded in source evidence?
- Is uncertainty visible enough for a human reviewer?
- What prompt change produced the better answer?
- What should be tested next before the behavior ships?

## Backend Decision

No backend is needed for the current Phase 2 portfolio baseline. Local state is enough to demonstrate the product workflow: edit a prompt, save a version, choose a winning response, and generate an export preview.

The reserved `backend/` folder should stay empty until the project needs durable saved evals, authenticated profile storage, real report downloads, or model-provider integrations.

## Future Polish

- Refresh screenshots when the visual surface changes.
- Add persistence only when saved eval history becomes important enough to justify backend scope.
