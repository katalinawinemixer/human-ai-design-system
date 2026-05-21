# Usage Notes

These notes explain when each Human-AI Design System primitive should appear in a product workflow.

## Source Citation Card

Use citation cards when a user needs to inspect where a claim came from. The card should distinguish direct support from inferred claims and missing evidence.

Good fit:

- Clinical or diligence claims
- Research synthesis
- Product recommendations that cite source material
- Any answer that may be reused outside the current session

## Confidence Meter

Use the confidence meter when uncertainty changes the user's next action. Pair the score with plain-language rationale so confidence does not become decorative.

Good fit:

- Draft versus final answer decisions
- Source completeness checks
- Calibration reviews
- Risk or feasibility summaries

## Human Feedback Control

Use feedback controls when human judgment should become reusable model-behavior signal. Avoid vague reactions when the product needs structured tuning data.

Good fit:

- Marking an answer useful
- Flagging speculation
- Rejecting an unhelpful response direction
- Capturing reviewer preference between model outputs

## Agent Activity Timeline

Use the timeline when users need to understand what an agent has done, what is still running, and what is blocked.

Good fit:

- Source ingestion
- Multi-step research tasks
- Review queues
- Long-running analysis workflows

## Eval Scorecard

Use the scorecard when model quality needs to be discussed across product, research, design, and domain experts.

Good fit:

- Prompt iteration
- Model response reviews
- Regression checks
- Release readiness

## Prompt History Panel

Use prompt history when prompt changes are part of the product's decision trail. It should show meaningful behavior changes, not every minor wording edit.

Good fit:

- Behavior tuning
- Auditable prompt iteration
- Comparing old and new instruction sets

## Response Comparison Workspace

Use response comparison when a reviewer needs to choose between model behaviors, not only read one answer.

Good fit:

- Side-by-side answer review
- Tone and calibration checks
- Preferred response selection
- Eval dataset creation

## Human Review Banner

Use review banners when unchecked AI output carries enough risk to require human intervention before export or reuse.

Good fit:

- Inferred claims
- Missing evidence
- High-risk recommendations
- Outputs meant for external audiences
