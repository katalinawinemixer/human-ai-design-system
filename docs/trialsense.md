# TrialSense

TrialSense is Phase 3 of the portfolio sequence. It turns the source-grounding and review primitives into a clinical-trial diligence workbench for feasibility, eligibility, missing context, and investor-facing risk language.

## Current Surface

The first implementation lives in `frontend/src/sections/TrialSenseSection.tsx` with product data in `frontend/src/data/trialSenseContent.ts`.

It includes:

- Trial text intake with multiple diligence scenarios.
- Eligibility, feasibility, operations, startup, monitoring, and evidence risk flags.
- Confidence scoring tied to source completeness.
- Agent activity timeline for the diligence review flow.
- Fuller source packet view for attached, partial, and missing diligence inputs.
- Evidence trail using source citation cards.
- Missing-context questions with reviewer checkoff state.
- Investor diligence summary with feasibility, eligibility, and investor note rows.
- Downloadable `.txt` diligence summary output for the active trial case.
- Human review gate for claims that should not move into memo language yet.

## Product Intent

TrialSense is meant to show domain-specific AI product judgment. The interface makes it possible to ask:

- Which trial claims are directly supported by the source set?
- Which feasibility assumptions are inferred or unsupported?
- What missing context should a reviewer request before accepting the sponsor narrative?
- How should operational risk be translated into investor-readable diligence language?
- Where should the system stop and require human review?

## Current Backend Decision

No backend is needed for the current TrialSense portfolio baseline. Static fixtures, local UI state, and a downloadable text artifact are enough to demonstrate the diligence workflow, state model, and reuse of the Phase 1 primitives.

The reserved `backend/` folder should remain available for future trial document upload, source parsing, saved diligence reviews, or model-provider integration.

## Future Phase 3 Polish

- Refresh screenshots when TrialSense changes.
- Add persistence only if saved review history becomes part of the product story.
