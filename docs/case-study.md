# Human-AI Design System Case Study

## Context

This project is a coded design-system prototype for AI-native product interfaces. It focuses on interface patterns that make model behavior easier to inspect: evidence, confidence, uncertainty, feedback, evaluation, prompt history, comparison, and human review.

The system is the foundation for two planned portfolio prototypes:

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

The example content uses clinical-trial diligence scenarios because they connect the interface patterns to real operational judgment: eligibility criteria, feasibility assumptions, source evidence, and claims that should be softened or reviewed.

The Phase 2 Model Behavior Studio turns the component system into a product workflow. It shows how a reviewer can edit a behavior prompt, save a prompt version, compare candidate responses, choose the winning behavior, score the output, and generate a downloadable eval report. This demonstrates model-behavior judgment as an interface problem: the product is not only displaying AI output, it is helping a human decide which behavior should be trusted, tuned, or blocked.

## What This Demonstrates

- Coded prototyping in React and TypeScript
- Design-system thinking for AI-specific interface needs
- Product judgment around trust, confidence, and review
- Model-behavior thinking beyond generic chatbot UI
- Organized documentation that turns UI ideas into reusable product rules
- Component states that can be reused in later product prototypes
- Scenario examples that show the system is not limited to one domain
- A domain-specific point of view grounded in clinical-trial operations

## Next Iterations

- Split each primitive into reusable component files.
- Add screenshots and a demo GIF.
- Turn the scenario library into reusable fixtures for follow-on prototypes.
- Adapt the clinical-trial patterns for TrialSense.
