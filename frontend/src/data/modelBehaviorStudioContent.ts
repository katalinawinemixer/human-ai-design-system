import type { SignalTone } from '../components/SignalBadge'

export type BehaviorProfile = {
  name: string
  status: string
  prompt: string
  objective: string
  feedbackStatus: string
  feedbackState: 'useful' | 'speculative' | 'unhelpful'
  responses: readonly (readonly [
    string,
    SignalTone,
    string,
    string,
    boolean,
  ])[]
  evalRows: readonly (readonly [string, number, string])[]
  promptHistory: readonly (readonly [string, string, boolean])[]
  reportRows: readonly (readonly [string, string])[]
}

export const behaviorProfiles = [
  {
    name: 'Evidence-first',
    status: 'Ready for baseline',
    prompt:
      'Answer the user with direct source grounding first. Name uncertainty clearly, separate supported claims from inferred claims, and ask for missing context before making a high-risk recommendation.',
    objective:
      'Best for diligence and research workflows where unsupported confidence is the highest product risk.',
    feedbackStatus: 'Preferred behavior saved for the baseline profile',
    feedbackState: 'useful',
    responses: [
      [
        'Needs review',
        'warn',
        'Response A',
        'The answer is useful, but it compresses the uncertainty into one caveat and does not separate source-backed claims from inferred recommendations.',
        false,
      ],
      [
        'Preferred',
        'good',
        'Response B',
        'The answer names direct evidence, labels the inferred operational risk, and asks for missing source context before recommending a final memo claim.',
        true,
      ],
    ],
    evalRows: [
      ['Grounding', 94, 'Claims are separated by evidence quality'],
      ['Calibration', 89, 'Uncertainty language matches source support'],
      ['Usefulness', 86, 'Next reviewer action is clear'],
      ['Tone fit', 91, 'Direct without overclaiming'],
    ],
    promptHistory: [
      ['v4', 'Separate supported and inferred claims', true],
      ['v3', 'Require citations for clinical claims', false],
      ['v2', 'Add uncertainty labels to risks', false],
    ],
    reportRows: [
      ['Decision', 'Promote Response B behavior to baseline'],
      ['Risk', 'Watch for answers that bury missing context'],
      ['Next eval', 'Run against three trial-feasibility prompts'],
    ],
  },
  {
    name: 'Concise operator',
    status: 'Needs tone pass',
    prompt:
      'Give an operator-facing answer that is brief, specific, and action-oriented. Preserve uncertainty, but keep the response scannable for a reviewer deciding what to do next.',
    objective:
      'Best for workflows where the user needs a short review note, not a long synthesis.',
    feedbackStatus: 'Reviewer flagged tone as useful but slightly too compressed',
    feedbackState: 'speculative',
    responses: [
      [
        'Too thin',
        'warn',
        'Response A',
        'Feasible with caveats. Check screen failures and protocol exclusions before using the claim.',
        false,
      ],
      [
        'Candidate',
        'evidence',
        'Response B',
        'Directionally feasible, but not memo-ready. Verify steroid exclusions, compare screen-failure patterns, and soften the enrollment claim.',
        true,
      ],
    ],
    evalRows: [
      ['Grounding', 82, 'Evidence requirements are named'],
      ['Calibration', 84, 'Caveats are visible'],
      ['Usefulness', 92, 'Reviewer action is immediate'],
      ['Tone fit', 76, 'Could use one more source detail'],
    ],
    promptHistory: [
      ['v3', 'Make next action explicit', true],
      ['v2', 'Limit answer to five sentences', false],
      ['v1', 'Summarize reviewer decision', false],
    ],
    reportRows: [
      ['Decision', 'Keep as a fast-review variant'],
      ['Risk', 'May lose too much evidence context'],
      ['Next eval', 'Test with longer source packets'],
    ],
  },
  {
    name: 'Research synthesizer',
    status: 'Eval required',
    prompt:
      'Synthesize a source packet into a shareable answer. Highlight what is known, what is inferred, what conflicts, and which claims should be blocked until stronger citations are attached.',
    objective:
      'Best for source-heavy work where the model needs to organize evidence without pretending the synthesis is final.',
    feedbackStatus: 'Report held until weak-citation behavior improves',
    feedbackState: 'unhelpful',
    responses: [
      [
        'Blocked',
        'danger',
        'Response A',
        'The synthesis is fluent, but two market implications are presented as facts without attached source support.',
        false,
      ],
      [
        'Safer',
        'warn',
        'Response B',
        'The synthesis is less polished, but it blocks the weak claims and asks for the missing source packet before finalizing.',
        true,
      ],
    ],
    evalRows: [
      ['Grounding', 68, 'Two claims still need source support'],
      ['Calibration', 79, 'Blocked claims are labeled'],
      ['Usefulness', 74, 'Needs a cleaner final recommendation'],
      ['Tone fit', 83, 'Appropriate caution for research work'],
    ],
    promptHistory: [
      ['v5', 'Block unsupported market claims', true],
      ['v4', 'Name conflicting sources', false],
      ['v3', 'Attach source labels to findings', false],
    ],
    reportRows: [
      ['Decision', 'Do not ship until grounding improves'],
      ['Risk', 'Fluent synthesis can hide weak citations'],
      ['Next eval', 'Add adversarial weak-source examples'],
    ],
  },
] as const satisfies readonly BehaviorProfile[]
