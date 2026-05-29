# TrialSense

TrialSense turns the source-grounding and review primitives into a clinical-trial diligence workbench for feasibility, eligibility, missing context, and cautious risk language.

## Product Concept

TrialSense is a focused diligence workbench for people who need to pressure-test the story around a clinical trial before unsupported claims move into summary or operating language.

Primary users:

- Clinical operations teams checking whether the proposed enrollment or startup plan is realistic.
- Diligence reviewers checking operational risk before summary language is reused.
- Product and research teams exploring how AI interfaces can keep clinical claims tied to source evidence.

Core job:

- Turn protocol details, feasibility assumptions, source packets, and operational constraints into a cautious review surface.
- Separate directly supported claims from inferred or unsupported claims.
- Give the reviewer a clear exportable summary without pretending the AI has more evidence than it does.

The concept is intentionally narrow. It does not claim to replace clinical, regulatory, medical, or investment judgment; it shows how AI product interfaces can make that judgment easier to inspect.

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
- Diligence summary with feasibility, eligibility, and note rows.
- Downloadable `.txt` diligence summary output for the active trial case.
- Human review gate for claims that should not move into memo language yet.

## Product Intent

TrialSense makes domain-specific review decisions inspectable. The interface makes it possible to ask:

- Which trial claims are directly supported by the source set?
- Which feasibility assumptions are inferred or unsupported?
- What missing context should a reviewer request before accepting the sponsor narrative?
- How should operational risk be translated into cautious diligence language?
- Where should the system stop and require human review?

## Current Backend Decision

No backend is needed for the current static prototype. Static fixtures, local UI state, and a downloadable text artifact are enough to support the diligence workflow, state model, and reuse of the shared primitives.

The reserved `backend/` folder should remain available for future trial document upload, source parsing, saved diligence reviews, or model-provider integration.

## Future Polish

- Refresh screenshots when TrialSense changes.
- Add persistence only if saved review history becomes part of the implemented workflow.
