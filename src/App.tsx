import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  ClipboardCheck,
  Code2,
  GitBranch,
  Layers3,
  MessageSquare,
  PanelRight,
  Scale,
  ShieldCheck,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react'
import type { ReactNode } from 'react'
import './App.css'

const citations = [
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
]

const timeline = [
  ['Reading source set', 'Complete', 'done'],
  ['Checking missing context', '3 open questions', 'active'],
  ['Drafting review note', 'Waiting for approval', 'waiting'],
]

const evalRows = [
  ['Grounding', 92, 'Strong citation discipline'],
  ['Calibration', 78, 'Two claims need softer language'],
  ['Usefulness', 86, 'Clear next-step framing'],
  ['Tone fit', 90, 'Expert without overclaiming'],
]

const components = [
  'Source citation card',
  'Confidence meter',
  'Human feedback control',
  'Agent activity timeline',
  'Eval scorecard',
  'Prompt history panel',
  'Comparison workspace',
  'Human review banner',
]

const designDecisions = [
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
]

const reuseMap = [
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
]

function SignalBadge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'good' | 'warn' | 'danger' | 'evidence'
}) {
  return <span className={`signal signal-${tone}`}>{children}</span>
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function CitationCard({
  citation,
}: {
  citation: (typeof citations)[number]
}) {
  return (
    <article className="citation-card">
      <div className="citation-topline">
        <SignalBadge tone={citation.tone === 'evidence' ? 'evidence' : 'warn'}>
          {citation.confidence} confidence
        </SignalBadge>
        <span>{citation.source}</span>
      </div>
      <h3>{citation.title}</h3>
      <p>{citation.quote}</p>
    </article>
  )
}

function ConfidenceMeter() {
  return (
    <div className="confidence-panel">
      <div>
        <div className="panel-label">Answer confidence</div>
        <strong>Moderate-high</strong>
      </div>
      <div className="meter" aria-label="Confidence 76 percent">
        <span style={{ width: '76%' }} />
      </div>
      <p>
        The model found direct support for the inclusion criteria, but market
        sizing remains inferred from comparable studies.
      </p>
    </div>
  )
}

function FeedbackBar() {
  return (
    <div className="feedback-bar" aria-label="Model feedback controls">
      <button type="button" aria-label="Mark useful">
        <ThumbsUp size={16} />
      </button>
      <button type="button" aria-label="Mark too speculative">
        <AlertTriangle size={16} />
      </button>
      <button type="button" aria-label="Mark unhelpful">
        <ThumbsDown size={16} />
      </button>
      <span>Feedback captured for behavior tuning</span>
    </div>
  )
}

function AgentTimeline() {
  return (
    <div className="timeline">
      {timeline.map(([label, detail, state]) => (
        <div className={`timeline-row timeline-${state}`} key={label}>
          <span className="timeline-dot" />
          <div>
            <strong>{label}</strong>
            <p>{detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function EvalScorecard() {
  return (
    <div className="scorecard">
      {evalRows.map(([label, score, note]) => (
        <div className="score-row" key={label}>
          <div>
            <strong>{label}</strong>
            <p>{note}</p>
          </div>
          <span>{score}</span>
        </div>
      ))}
    </div>
  )
}

function PromptHistory() {
  return (
    <div className="prompt-history">
      <div className="history-item current">
        <GitBranch size={16} />
        <span>v3: Require citations for every clinical claim</span>
      </div>
      <div className="history-item">
        <GitBranch size={16} />
        <span>v2: Add uncertainty labels to inferred risks</span>
      </div>
      <div className="history-item">
        <GitBranch size={16} />
        <span>v1: Summarize trial design and key exclusions</span>
      </div>
    </div>
  )
}

function ComparisonWorkspace() {
  return (
    <div className="comparison">
      <div className="response-column">
        <SignalBadge tone="warn">Needs review</SignalBadge>
        <h3>Response A</h3>
        <p>
          The trial appears feasible, but the screen-failure risk is likely
          understated because steroid exclusions are not discussed.
        </p>
      </div>
      <div className="response-column selected">
        <SignalBadge tone="good">Preferred</SignalBadge>
        <h3>Response B</h3>
        <p>
          Feasibility is plausible with caveats. The steroid and autoimmune
          exclusions should be validated against site-level screen logs.
        </p>
      </div>
    </div>
  )
}

function ReviewBanner() {
  return (
    <div className="review-banner">
      <ShieldCheck size={20} />
      <div>
        <strong>Human review required</strong>
        <p>
          Two claims are inferred from analog studies and should be checked
          before inclusion in an investor memo.
        </p>
      </div>
      <button type="button">
        Review <ArrowRight size={16} />
      </button>
    </div>
  )
}

function App() {
  return (
    <main>
      <header className="hero-section">
      <nav className="topbar" aria-label="Project">
        <div className="brand-lockup">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>Human-AI Design System</span>
        </div>
        <div className="topbar-links">
          <a href="#case-study">
            Case study <ChevronRight size={16} />
          </a>
          <a href="#components">
            Components <ChevronRight size={16} />
          </a>
        </div>
      </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Design primitives for AI products</p>
            <h1>Interfaces that make model behavior visible.</h1>
            <p>
              A reusable component system for source-grounded answers,
              uncertainty, human feedback, evals, and agent progress. Built as
              the foundation for future AI product prototypes.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#components">
                View system <ArrowRight size={16} />
              </a>
              <a className="secondary-action" href="#case-study">
                Portfolio story
              </a>
            </div>
          </div>

          <div className="hero-surface" aria-label="AI review workspace preview">
            <div className="surface-toolbar">
              <SignalBadge tone="evidence">Grounded answer</SignalBadge>
              <SignalBadge tone="warn">2 inferred claims</SignalBadge>
            </div>
            <ReviewBanner />
            <div className="surface-grid">
              <ConfidenceMeter />
              <AgentTimeline />
            </div>
            <FeedbackBar />
          </div>
        </div>
      </header>

      <section className="case-study-section" id="case-study">
        <SectionHeader
          eyebrow="Portfolio case study"
          title="A design system for AI products where trust has to be earned."
          body="This project packages the design language for two follow-on prototypes: a model-behavior evaluation studio and a clinical-trial diligence workbench."
        />

        <div className="case-study-grid">
          <article className="case-panel case-summary">
            <div className="component-heading">
              <ClipboardCheck size={20} />
              <h3>What this proves</h3>
            </div>
            <p>
              The system shows end-to-end AI product thinking: coded UI craft,
              reusable components, uncertainty design, human feedback loops, and
              a domain-specific point of view rooted in clinical operations.
            </p>
            <div className="proof-list">
              <span>Live React prototype</span>
              <span>AI-native interaction states</span>
              <span>Clinical diligence examples</span>
              <span>Reusable product foundation</span>
            </div>
          </article>

          <article className="case-panel">
            <div className="component-heading">
              <Scale size={20} />
              <h3>Design decisions</h3>
            </div>
            <div className="decision-list">
              {designDecisions.map(([title, body]) => (
                <div className="decision-row" key={title}>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="reuse-grid">
          {reuseMap.map(([title, body, primitives]) => (
            <article className="reuse-card" key={title}>
              <div>
                <SignalBadge tone={title === 'TrialSense' ? 'evidence' : 'good'}>
                  Next prototype
                </SignalBadge>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <div className="reuse-primitives">
                <span>Reuses</span>
                <p>{primitives}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section" id="principles">
        <SectionHeader
          eyebrow="System intent"
          title="The components are built around trust decisions."
          body="Each pattern answers a recurring question in AI interfaces: what did the model use, how sure is it, what is it doing now, and where should a human intervene?"
        />
        <div className="principles-grid">
          <article>
            <Bot size={22} />
            <h3>Behavior is part of the interface</h3>
            <p>
              Prompts, outputs, rubrics, and feedback states are treated as
              designed surfaces.
            </p>
          </article>
          <article>
            <Scale size={22} />
            <h3>Confidence is not decoration</h3>
            <p>
              Uncertainty appears next to the decision it affects, not hidden in
              a footnote.
            </p>
          </article>
          <article>
            <ClipboardCheck size={22} />
            <h3>Evaluation stays visible</h3>
            <p>
              Scorecards and review states make quality measurable while the
              prototype is still evolving.
            </p>
          </article>
        </div>
      </section>

      <section className="components-section" id="components">
        <SectionHeader
          eyebrow="Component library"
          title="Reusable patterns for AI-native workflows."
          body="This first pass focuses on the pieces we will reuse in Model Behavior Studio and TrialSense."
        />

        <div className="component-index">
          {components.map((component) => (
            <span key={component}>{component}</span>
          ))}
        </div>

        <div className="component-grid">
          <article className="component-specimen wide">
            <div className="component-heading">
              <Layers3 size={20} />
              <h3>Source Citation Cards</h3>
            </div>
            <div className="citation-stack">
              {citations.map((citation) => (
                <CitationCard citation={citation} key={citation.title} />
              ))}
            </div>
          </article>

          <article className="component-specimen">
            <div className="component-heading">
              <Activity size={20} />
              <h3>Confidence Meter</h3>
            </div>
            <ConfidenceMeter />
          </article>

          <article className="component-specimen">
            <div className="component-heading">
              <MessageSquare size={20} />
              <h3>Feedback Controls</h3>
            </div>
            <FeedbackBar />
          </article>

          <article className="component-specimen">
            <div className="component-heading">
              <PanelRight size={20} />
              <h3>Agent Activity Timeline</h3>
            </div>
            <AgentTimeline />
          </article>

          <article className="component-specimen">
            <div className="component-heading">
              <ClipboardCheck size={20} />
              <h3>Eval Scorecard</h3>
            </div>
            <EvalScorecard />
          </article>

          <article className="component-specimen wide">
            <div className="component-heading">
              <Code2 size={20} />
              <h3>Prompt History</h3>
            </div>
            <PromptHistory />
          </article>

          <article className="component-specimen wide">
            <div className="component-heading">
              <Scale size={20} />
              <h3>Response Comparison</h3>
            </div>
            <ComparisonWorkspace />
          </article>

          <article className="component-specimen wide">
            <div className="component-heading">
              <Check size={20} />
              <h3>Human Review Banner</h3>
            </div>
            <ReviewBanner />
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
