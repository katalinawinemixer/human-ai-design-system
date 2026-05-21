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

export type Citation = (typeof citations)[number]
