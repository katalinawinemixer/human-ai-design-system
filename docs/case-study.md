# Human-AI Design System Case Study

## Context

This project is a coded design-system prototype for AI product interfaces. It focuses on interface patterns that make model behavior easier to inspect: evidence, confidence, uncertainty, feedback, evaluation, prompt history, comparison, and human review.

The prototype currently includes three connected surfaces:

- **Human-AI Design System**: reusable AI interface primitives for evidence, uncertainty, feedback, evaluation, comparison, agent activity, and review.
- **Model Behavior Studio**: a workspace for comparing, scoring, and tuning AI response behavior.
- **TrialSense**: a clinical-trial diligence workbench for source-grounded review of trial design, feasibility, and operational risk.

## Problem

Most AI interfaces show the answer but hide the conditions around the answer. Users often cannot tell what evidence was used, which claims are inferred, how confident the model is, or when a human should intervene.

That makes trust feel binary: accept the output or reject it. This design system treats trust as a workflow with visible states.

## Design Goals

- Make source grounding visible at the claim level.
- Put uncertainty near the decision it affects.
- Give humans clear ways to challenge, approve, or improve AI outputs.
- Show model activity and evaluation as first-class product surfaces.
- Reuse the same primitives across multiple AI product concepts.

## Current Prototype

The current app includes:

- Source citation cards
- Confidence meter
- Human feedback controls
- Agent activity timeline
- Evaluation scorecard
- Prompt history panel
- Response comparison workspace
- Human review banner
- Component specification section with jobs, states, and reuse paths
- Visual inventory section for checking component states
- Scenario library with clinical diligence, model-behavior review, and research synthesis examples
- Model Behavior Studio for behavior comparison, prompt iteration, scoring, and export
- TrialSense for protocol intake, risk flags, missing context, source packet status, evidence trails, downloadable output, and investor diligence summaries

The example content uses clinical-trial diligence scenarios because they connect the interface patterns to real operational judgment: eligibility criteria, feasibility assumptions, source evidence, and claims that should be softened or reviewed.

Model Behavior Studio turns the component system into a product workflow. It lets a reviewer edit a behavior prompt, save a prompt version, compare candidate responses, choose the winning behavior, score the output, and generate a downloadable eval report.

TrialSense applies the same primitives to clinical-trial diligence. It translates protocol intake into feasibility risk, eligibility pressure, missing-context questions, source-backed evidence, source packet completeness, downloadable diligence output, and cautious summary language.

## Implemented Capabilities

- React and TypeScript frontend with static fixtures and local UI state
- Reusable patterns for AI-specific interface needs
- Trust, confidence, evidence, and review states
- Model-behavior review beyond generic chatbot UI
- Organized documentation that turns UI ideas into reusable product rules
- Component states that can be reused in related product workflows
- Scenario examples that show the system is not limited to one domain
- Clinical-trial examples grounded in eligibility, feasibility, and source-review constraints

## Next Iterations

- Refresh screenshots when product surfaces change.
- Add persistence only if saved TrialSense review history becomes part of the product story.
