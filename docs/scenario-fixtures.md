# Scenario Fixtures

The scenario examples live in `frontend/src/data/scenarioFixtures.ts` so follow-on projects can reuse them without mixing example data into the broader design-system content file.

## Fixture Shape

Each scenario includes:

- `title`: scenario name shown in the hero and library.
- `context`: short workflow framing.
- `question`: decision the user is trying to answer.
- `confidence` and `confidenceValue`: readable confidence state and numeric meter value.
- `evidence`: explanation of what supports or limits the output.
- `review`, `actionLabel`, and `secondarySignal`: review-gate copy for the banner pattern.
- `feedback` and `feedbackState`: human feedback state for behavior tuning.
- `activity`: agent timeline rows with a label, status text, and state token.
- `primitives`: design-system primitives used by the scenario.
- `sampleClaims`: claim examples that show supported, inferred, or weak-source states.

## Reuse Pattern

Use the fixtures as product-context adapters. A follow-on project can keep the primitive components stable while swapping scenario data for the workflow being prototyped.

Recommended organization:

- Keep shared fixture types in `frontend/src/data/scenarioFixtures.ts`.
- Add new scenario groups as separate exports when a project needs product-specific examples.
- Keep component behavior in `frontend/src/components/`; fixtures should describe content and state, not presentation logic.
- Document any new scenario group in `docs/` before it becomes part of the public README.

## Current Scenario Groups

- Clinical-trial diligence
- Model behavior review
- Research synthesis
