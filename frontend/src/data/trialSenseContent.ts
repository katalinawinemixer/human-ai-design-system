import type { Citation } from './designSystemContent'

export type TrialSenseCase = {
  title: string
  status: string
  phase: string
  intake: string
  confidenceLabel: string
  confidenceValue: number
  confidenceDescription: string
  reviewTitle: string
  reviewBody: string
  actionLabel: string
  timeline: readonly (readonly [string, string, string])[]
  citations: readonly Citation[]
  riskFlags: readonly (readonly [string, string, string, 'warn' | 'danger' | 'evidence'])[]
  questions: readonly string[]
  summaryRows: readonly (readonly [string, string])[]
}

export const trialSenseCases = [
  {
    title: 'Dose expansion feasibility',
    status: 'Review required',
    phase: 'Phase 2 oncology',
    intake:
      'Phase 2 dose expansion in metastatic solid tumors. Key exclusions include active autoimmune disease, recent systemic steroids, uncontrolled CNS metastases, and unresolved grade 2 immune-related toxicity. Sponsor assumes 4.0 patients per site per month across 18 US sites.',
    confidenceLabel: 'Moderate',
    confidenceValue: 67,
    confidenceDescription:
      'Eligibility risk is visible, but enrollment confidence depends on site mix and historical screen-failure data that is not attached.',
    reviewTitle: 'Human review required',
    reviewBody:
      'The feasibility claim should not move into an investor memo until screen-failure assumptions and site mix are checked.',
    actionLabel: 'Review',
    timeline: [
      ['Protocol intake parsed', 'Complete', 'done'],
      ['Eligibility risks flagged', '4 flags', 'done'],
      ['Screen-failure evidence', 'Missing source', 'active'],
      ['Investor memo summary', 'Waiting for review', 'waiting'],
    ],
    citations: [
      {
        title: 'Steroid exclusion may narrow eligible pool',
        source: 'Protocol synopsis, section 4.2',
        quote:
          'Recent systemic steroid use and active autoimmune disease are exclusion criteria.',
        confidence: 'High',
        tone: 'evidence',
      },
      {
        title: 'Enrollment pace is an inferred assumption',
        source: 'Sponsor feasibility model',
        quote:
          'The model assumes 4.0 patients per site per month without attached screen logs.',
        confidence: 'Medium',
        tone: 'warn',
      },
    ],
    riskFlags: [
      [
        'Eligibility',
        'High screen-failure exposure',
        'Autoimmune and steroid exclusions may remove common real-world patients.',
        'warn',
      ],
      [
        'Feasibility',
        'Enrollment rate needs support',
        'The sponsor assumption is plausible but not sourced to comparable site data.',
        'danger',
      ],
      [
        'Operations',
        'Site mix is not defined',
        'US-only startup plan may depend on a small number of high-volume centers.',
        'warn',
      ],
    ],
    questions: [
      'What screen-failure rate did comparable trials see for steroid exclusions?',
      'Which sites are assumed to carry most enrollment volume?',
      'Are CNS metastasis exclusions aligned with the target population?',
    ],
    summaryRows: [
      [
        'Feasibility read',
        'Directionally possible, but not memo-ready without screen-failure evidence.',
      ],
      [
        'Eligibility risk',
        'Steroid, autoimmune, and CNS criteria may narrow the eligible pool.',
      ],
      [
        'Investor note',
        'Use cautious language and request site-level support before accepting the sponsor pace.',
      ],
    ],
  },
  {
    title: 'First-in-human startup risk',
    status: 'Source check needed',
    phase: 'Phase 1 immunology',
    intake:
      'First-in-human study with sentinel dosing, inpatient monitoring for the first cohort, and biomarker confirmation before escalation. Startup plan assumes rapid IRB approval and no additional safety committee review.',
    confidenceLabel: 'Low-moderate',
    confidenceValue: 48,
    confidenceDescription:
      'The operational risk is clear, but the source set does not include IRB timing, monitoring burden, or safety committee precedent.',
    reviewTitle: 'Source check needed',
    reviewBody:
      'The startup timeline should be treated as speculative until governance and monitoring evidence is attached.',
    actionLabel: 'Check',
    timeline: [
      ['Protocol intake parsed', 'Complete', 'done'],
      ['Monitoring burden tagged', 'Complete', 'done'],
      ['Governance assumptions', 'Needs source', 'error'],
      ['Startup risk summary', 'Paused', 'waiting'],
    ],
    citations: [
      {
        title: 'Sentinel dosing adds operational drag',
        source: 'Draft protocol, dose escalation plan',
        quote:
          'Initial cohorts require sentinel dosing and inpatient observation before escalation.',
        confidence: 'High',
        tone: 'evidence',
      },
      {
        title: 'IRB timing is unsupported',
        source: 'Timeline model',
        quote:
          'Rapid approval is assumed without evidence from comparable first-in-human studies.',
        confidence: 'Low',
        tone: 'warn',
      },
    ],
    riskFlags: [
      [
        'Startup',
        'Timeline may be optimistic',
        'Governance assumptions are not supported by comparable approval data.',
        'danger',
      ],
      [
        'Monitoring',
        'Inpatient observation burden',
        'Early cohorts may require higher site coordination than the model assumes.',
        'warn',
      ],
      [
        'Evidence',
        'Missing committee precedent',
        'Safety review expectations should be validated before diligence language is finalized.',
        'warn',
      ],
    ],
    questions: [
      'What IRB timing did comparable first-in-human trials experience?',
      'Will a safety committee review be required before escalation?',
      'Which sites can support inpatient observation for early cohorts?',
    ],
    summaryRows: [
      [
        'Feasibility read',
        'Startup timeline is high risk until governance assumptions are validated.',
      ],
      [
        'Eligibility risk',
        'Eligibility is less concerning than monitoring and escalation logistics.',
      ],
      [
        'Investor note',
        'Highlight operational drag and request evidence before underwriting a fast startup.',
      ],
    ],
  },
] as const satisfies readonly TrialSenseCase[]
