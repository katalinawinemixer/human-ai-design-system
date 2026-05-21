export const citations = [
  {
    title: 'Protocol synopsis, Phase 2 dose expansion',
    source: 'Sponsor protocol, section 4.2',
    quote:
      'Eligibility excludes active autoimmune disease and recent systemic steroids.',
    confidence: 'High',
    tone: 'evidence',
  },
  {
    title: 'Enrollment feasibility assumption',
    source: 'ClinicalTrials.gov recruitment history',
    quote:
      'Comparable studies enrolled between 3.1 and 4.4 patients per site per month.',
    confidence: 'Medium',
    tone: 'caution',
  },
] as const

export const timeline = [
  ['Reading source set', 'Complete', 'done'],
  ['Checking missing context', '3 open questions', 'active'],
  ['Drafting review note', 'Waiting for approval', 'waiting'],
] as const

export const evalRows = [
  ['Grounding', 92, 'Strong citation discipline'],
  ['Calibration', 78, 'Two claims need softer language'],
  ['Usefulness', 86, 'Clear next-step framing'],
  ['Tone fit', 90, 'Expert without overclaiming'],
] as const

export const componentIndex = [
  'Source citation card',
  'Confidence meter',
  'Human feedback control',
  'Agent activity timeline',
  'Eval scorecard',
  'Prompt history panel',
  'Comparison workspace',
  'Human review banner',
] as const

export const designDecisions = [
  [
    'Trust is treated as a workflow',
    'Evidence, uncertainty, and review status appear inside the working surface instead of being pushed into notes or documentation.',
  ],
  [
    'Model behavior is inspectable',
    'Prompt history, eval scores, and response comparison make the system easier to debug with researchers and product teams.',
  ],
  [
    'Clinical examples stay grounded',
    'The sample content uses trial feasibility and eligibility risk because it connects the interface patterns to real operator judgment.',
  ],
] as const

export const reuseMap = [
  [
    'Model Behavior Studio',
    'Compare model outputs, score response quality, and tune behavior profiles with visible rubrics.',
    'Prompt history, response comparison, eval scorecard, feedback controls',
  ],
  [
    'TrialSense',
    'Review clinical-trial source material for feasibility, evidence gaps, and investor-relevant operational risk.',
    'Citation cards, confidence meter, human review banner, agent timeline',
  ],
] as const

export const scenarioLibrary = [
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
] as const

export const componentSpecs = [
  {
    name: 'Source citation card',
    role: 'Keeps each meaningful claim attached to source context, confidence, and evidence tone.',
    states: ['Supported', 'Inferred', 'Needs source'],
    reuse: 'TrialSense claim review, investor memo evidence trails, answer provenance.',
  },
  {
    name: 'Confidence meter',
    role: 'Explains what the system knows, where it is extrapolating, and why the answer should be trusted cautiously.',
    states: ['High', 'Moderate', 'Low', 'Blocked'],
    reuse: 'Clinical feasibility scoring, model response calibration, risk review.',
  },
  {
    name: 'Human feedback control',
    role: 'Captures user judgment as structured signal instead of leaving feedback as a generic thumbs-up event.',
    states: ['Useful', 'Speculative', 'Unhelpful'],
    reuse: 'Behavior tuning loops, eval dataset collection, reviewer triage.',
  },
  {
    name: 'Agent activity timeline',
    role: 'Shows the system work in progress so users can inspect what has been read, checked, or deferred.',
    states: ['Complete', 'Active', 'Waiting', 'Error'],
    reuse: 'Research agents, diligence workflows, source ingestion status.',
  },
  {
    name: 'Eval scorecard',
    role: 'Makes model quality legible through rubrics that product, research, and domain experts can discuss.',
    states: ['Passing', 'Needs attention', 'Regression'],
    reuse: 'Model Behavior Studio scoring, prompt iteration reviews, release checks.',
  },
  {
    name: 'Human review banner',
    role: 'Interrupts the workflow only when the cost of unchecked AI output is high enough to justify intervention.',
    states: ['Required', 'Recommended', 'Approved'],
    reuse: 'Memo approval, clinical-claim validation, high-risk output gates.',
  },
] as const

export const reviewChecklist = [
  [
    'Evidence',
    'Can the user see which source supports the claim and whether the claim is direct or inferred?',
  ],
  [
    'Calibration',
    'Does the interface explain confidence in plain language instead of hiding behind a score?',
  ],
  [
    'Control',
    'Can a human approve, challenge, or correct the model at the point where judgment matters?',
  ],
  [
    'Reuse',
    'Can the pattern move into Model Behavior Studio or TrialSense without being redesigned from scratch?',
  ],
] as const

export const inventoryCitationStates = [
  {
    title: 'Direct source support',
    source: 'Protocol synopsis, section 4.2',
    quote: 'Eligibility language is directly present in the reviewed source.',
    confidence: 'High',
    tone: 'evidence',
  },
  {
    title: 'Inferred operational risk',
    source: 'Comparable trial enrollment patterns',
    quote: 'Screen-failure risk is inferred from analogous study criteria.',
    confidence: 'Medium',
    tone: 'caution',
  },
  {
    title: 'Missing source requirement',
    source: 'Source not attached',
    quote: 'The claim should not be used until a supporting document is linked.',
    confidence: 'Low',
    tone: 'caution',
  },
] as const

export const inventoryConfidenceStates = [
  [
    'High',
    92,
    'Direct source support is present and the answer stays within the evidence.',
  ],
  [
    'Moderate',
    68,
    'The answer is directionally useful, but one claim depends on comparable examples.',
  ],
  [
    'Low',
    34,
    'The model has partial context and should ask for more source material.',
  ],
  [
    'Blocked',
    8,
    'Required evidence is missing, so the system should not generate a final answer.',
  ],
] as const

export const inventoryTimelineStates = [
  [
    ['Source set reviewed', 'Complete', 'done'],
    ['Findings drafted', 'Complete', 'done'],
    ['Reviewer notified', 'Complete', 'done'],
  ],
  [
    ['Reading source set', 'Complete', 'done'],
    ['Checking contradictions', 'In progress', 'active'],
    ['Drafting output', 'Queued', 'waiting'],
  ],
  [
    ['Source upload detected', 'Complete', 'done'],
    ['Waiting for reviewer', 'Approval required', 'waiting'],
    ['Export summary', 'Blocked until approval', 'waiting'],
  ],
  [
    ['Source set reviewed', 'Complete', 'done'],
    ['Citation check failed', 'Missing source link', 'error'],
    ['Final answer', 'Stopped', 'waiting'],
  ],
] as const

export const inventoryFeedbackStates = [
  ['Useful', 'Feedback marked useful for behavior tuning', 'useful'],
  ['Speculative', 'Reviewer flagged unsupported inference', 'speculative'],
  ['Unhelpful', 'Reviewer rejected the response direction', 'unhelpful'],
] as const

export const inventoryEvalStates = [
  [
    ['Grounding', 94, 'Every claim has source support'],
    ['Calibration', 88, 'Uncertainty language matches evidence'],
    ['Usefulness', 91, 'Next action is clear'],
  ],
  [
    ['Grounding', 71, 'One claim needs a source'],
    ['Calibration', 62, 'Confidence should be softer'],
    ['Usefulness', 79, 'Good direction with review needed'],
  ],
  [
    ['Grounding', 48, 'Several claims are unsupported'],
    ['Calibration', 41, 'Output overstates certainty'],
    ['Usefulness', 52, 'Reviewer intervention required'],
  ],
] as const

export const inventoryPromptStates = [
  [
    ['v4', 'Require trial-specific source citations', true],
    ['v3', 'Ask for uncertainty on inferred risks', false],
    ['v2', 'Summarize feasibility risks', false],
  ],
  [
    ['v2', 'Compare answer tone for operator audience', true],
    ['v1', 'Generate an investor-style diligence note', false],
  ],
  [
    ['v1', 'Draft answer without source gating', false],
    ['archived', 'Removed after citation review failed', true],
  ],
] as const

export const inventoryComparisonStates = [
  [
    [
      'Needs review',
      'warn',
      'Response A',
      'Useful summary, but it implies enrollment confidence without citing source data.',
      false,
    ],
    [
      'Preferred',
      'good',
      'Response B',
      'Keeps feasibility language cautious and names the source gap clearly.',
      true,
    ],
  ],
  [
    [
      'Too vague',
      'danger',
      'Response A',
      'The trial may be feasible if enough sites are available.',
      false,
    ],
    [
      'More actionable',
      'evidence',
      'Response B',
      'Feasibility depends on site mix, screen-failure rate, and steroid exclusion volume.',
      true,
    ],
  ],
] as const

export const inventoryReviewStates = [
  [
    'Human review required',
    'Two inferred claims need source validation before this answer can be used.',
    'Review',
  ],
  [
    'Review recommended',
    'The answer is usable as a draft, but confidence language should be checked.',
    'Check',
  ],
  [
    'Approved for export',
    'Claims are sourced, uncertainty is labeled, and the reviewer accepted the output.',
    'Export',
  ],
] as const

export type Citation = {
  title: string
  source: string
  quote: string
  confidence: string
  tone: 'evidence' | 'caution'
}
