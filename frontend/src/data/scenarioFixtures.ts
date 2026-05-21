export type TimelineState = 'done' | 'active' | 'waiting' | 'error'
export type FeedbackState = 'useful' | 'speculative' | 'unhelpful'

export type ScenarioFixture = {
  title: string
  context: string
  question: string
  confidence: string
  confidenceValue: number
  evidence: string
  review: string
  actionLabel: string
  secondarySignal: string
  feedback: string
  feedbackState: FeedbackState
  activity: readonly (readonly [string, string, TimelineState])[]
  primitives: readonly string[]
  sampleClaims: readonly (readonly [string, string])[]
}

export const scenarioFixtures = [
  {
    title: 'Clinical-trial diligence',
    context:
      'Review trial feasibility and eligibility risk before the output becomes an investor-facing note.',
    question: 'Can this claim be used in a diligence memo?',
    confidence: 'Moderate-high',
    confidenceValue: 76,
    evidence:
      'Eligibility criteria are sourced, but enrollment feasibility still depends on comparable studies.',
    review: 'Human review required',
    actionLabel: 'Review',
    secondarySignal: '2 inferred claims',
    feedback: 'Reviewer flagged inferred feasibility assumption',
    feedbackState: 'speculative',
    activity: [
      ['Reading source set', 'Complete', 'done'],
      ['Checking missing context', '3 open questions', 'active'],
      ['Drafting review note', 'Waiting for approval', 'waiting'],
    ],
    primitives: [
      'Citation cards',
      'Confidence meter',
      'Agent timeline',
      'Human review banner',
    ],
    sampleClaims: [
      ['Supported', 'Steroid exclusion appears in the source protocol.'],
      ['Inferred', 'Enrollment pace is based on comparable oncology trials.'],
    ],
  },
  {
    title: 'Model behavior review',
    context:
      'Compare two model answers and decide which behavior should become the preferred response pattern.',
    question: 'Which answer is better calibrated?',
    confidence: 'Medium',
    confidenceValue: 64,
    evidence:
      'One response is more useful, but the evaluator flags tone and evidence discipline for review.',
    review: 'Review recommended',
    actionLabel: 'Compare',
    secondarySignal: 'Tone drift found',
    feedback: 'Preferred answer captured for behavior tuning',
    feedbackState: 'useful',
    activity: [
      ['Running eval rubric', 'Complete', 'done'],
      ['Comparing responses', '2 candidates', 'active'],
      ['Saving behavior note', 'Queued', 'waiting'],
    ],
    primitives: [
      'Response comparison',
      'Eval scorecard',
      'Feedback controls',
      'Prompt history',
    ],
    sampleClaims: [
      ['Preferred', 'Answer B names uncertainty and asks for missing context.'],
      ['Needs work', 'Answer A sounds confident without enough support.'],
    ],
  },
  {
    title: 'Research synthesis',
    context:
      'Summarize a source set while making citation quality, missing context, and uncertainty visible.',
    question: 'Is this synthesis ready to share?',
    confidence: 'Low-moderate',
    confidenceValue: 48,
    evidence:
      'The system found useful source material, but two assertions require stronger citations.',
    review: 'Source check needed',
    actionLabel: 'Check',
    secondarySignal: '2 weak citations',
    feedback: 'Reviewer requested stronger source support',
    feedbackState: 'speculative',
    activity: [
      ['Reading source packet', 'Complete', 'done'],
      ['Checking citation quality', 'Needs source', 'error'],
      ['Preparing synthesis', 'Paused', 'waiting'],
    ],
    primitives: [
      'Citation cards',
      'Eval scorecard',
      'Agent timeline',
      'Review banner',
    ],
    sampleClaims: [
      ['Supported', 'Primary source confirms the central finding.'],
      ['Needs source', 'Market implication is not directly supported.'],
    ],
  },
] as const satisfies readonly ScenarioFixture[]
