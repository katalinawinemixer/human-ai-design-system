import { useState } from 'react'
import {
  AlertTriangle,
  ClipboardList,
  Download,
  FileText,
  HelpCircle,
  LibraryBig,
  Target,
  Stethoscope,
} from 'lucide-react'
import { AgentTimeline } from '../components/AgentTimeline'
import { CitationCard } from '../components/CitationCard'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { ReviewBanner } from '../components/ReviewBanner'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import {
  trialSenseCases,
  trialSenseProductBrief,
} from '../data/trialSenseContent'

export function TrialSenseSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([])
  const [summaryStatus, setSummaryStatus] = useState('Draft summary')
  const activeCase = trialSenseCases[activeCaseIndex]
  const summaryText = [
    'TrialSense diligence summary',
    `Case: ${activeCase.title}`,
    `Phase: ${activeCase.phase}`,
    `Status: ${activeCase.status}`,
    `Confidence: ${activeCase.confidenceLabel} (${activeCase.confidenceValue}%)`,
    '',
    'Summary',
    ...activeCase.summaryRows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Risk flags',
    ...activeCase.riskFlags.map(
      ([category, title, body]) => `${category} - ${title}: ${body}`,
    ),
    '',
    'Open questions',
    ...activeCase.questions.map((question) =>
      answeredQuestions.includes(question)
        ? `[answered] ${question}`
        : `[open] ${question}`,
    ),
    '',
    'Source packet',
    ...activeCase.sourcePacket.map(
      ([label, status, detail]) => `${label} (${status}): ${detail}`,
    ),
  ].join('\n')
  const summaryHref = `data:text/plain;charset=utf-8,${encodeURIComponent(
    summaryText,
  )}`
  const summaryFilename = `trialsense-${activeCase.title
    .toLowerCase()
    .replaceAll(' ', '-')}.txt`

  function toggleQuestion(question: string) {
    setAnsweredQuestions((currentQuestions) =>
      currentQuestions.includes(question)
        ? currentQuestions.filter((item) => item !== question)
        : [...currentQuestions, question],
    )
    setSummaryStatus('Draft summary')
  }

  return (
    <section className="trialsense-section" id="trialsense">
      <SectionHeader
        eyebrow="Clinical diligence workflow"
        title="TrialSense turns source-grounded primitives into a diligence workbench."
        body="The TrialSense surface reviews protocol text for feasibility risk, missing context, eligibility pressure, and cautious diligence summary language."
      />

      <div className="trialsense-product-brief">
        <div className="studio-panel-heading">
          <Target size={18} />
          <strong>Standalone product concept</strong>
        </div>
        <div className="product-brief-grid">
          {trialSenseProductBrief.map(([label, body]) => (
            <article className="product-brief-card" key={label}>
              <span>{label}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="trialsense-shell">
        <div className="trial-intake-panel">
          <div className="component-heading">
            <Stethoscope size={20} />
            <h3>Trial intake</h3>
          </div>
          <div className="trial-case-list" aria-label="TrialSense cases">
            {trialSenseCases.map((trialCase, index) => (
              <button
                className={index === activeCaseIndex ? 'active' : undefined}
                key={trialCase.title}
                onClick={() => {
                  setActiveCaseIndex(index)
                  setAnsweredQuestions([])
                  setSummaryStatus('Draft summary')
                }}
                type="button"
              >
                <span>{trialCase.title}</span>
                <small>{trialCase.phase}</small>
              </button>
            ))}
          </div>
          <textarea
            aria-label={`${activeCase.title} trial intake text`}
            readOnly
            value={activeCase.intake}
          />
        </div>

        <div className="trialsense-workspace">
          <div className="trialsense-topline">
            <SignalBadge tone="evidence">{activeCase.phase}</SignalBadge>
            <SignalBadge tone="warn">{activeCase.status}</SignalBadge>
          </div>

          <ReviewBanner
            actionLabel={activeCase.actionLabel}
            body={activeCase.reviewBody}
            title={activeCase.reviewTitle}
          />

          <div className="trial-review-grid">
            <ConfidenceMeter
              description={activeCase.confidenceDescription}
              label={activeCase.confidenceLabel}
              value={activeCase.confidenceValue}
            />
            <AgentTimeline entries={activeCase.timeline} />
          </div>

          <div className="trial-risk-grid">
            {activeCase.riskFlags.map(([category, title, body, tone]) => (
              <article className="risk-card" key={title}>
                <div>
                  <AlertTriangle size={18} />
                  <SignalBadge tone={tone}>{category}</SignalBadge>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="trial-evidence-layout">
            <div className="trial-panel">
              <div className="studio-panel-heading">
                <LibraryBig size={18} />
                <strong>Source packet</strong>
              </div>
              <div className="source-packet-list">
                {activeCase.sourcePacket.map(([label, status, detail, tone]) => (
                  <div className="source-packet-row" key={label}>
                    <SignalBadge tone={tone}>{status}</SignalBadge>
                    <div>
                      <strong>{label}</strong>
                      <p>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trial-panel">
              <div className="studio-panel-heading">
                <FileText size={18} />
                <strong>Evidence trail</strong>
              </div>
              <div className="citation-stack">
                {activeCase.citations.map((citation) => (
                  <CitationCard citation={citation} key={citation.title} />
                ))}
              </div>
            </div>

            <div className="trial-panel">
              <div className="studio-panel-heading">
                <HelpCircle size={18} />
                <strong>Missing-context questions</strong>
              </div>
              <div className="question-list">
                {activeCase.questions.map((question) => (
                  <button
                    aria-pressed={answeredQuestions.includes(question)}
                    key={question}
                    onClick={() => toggleQuestion(question)}
                    type="button"
                  >
                    <span />
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="trial-panel">
            <div className="studio-panel-heading">
              <ClipboardList size={18} />
              <strong>Investor diligence summary</strong>
            </div>
            <div className="summary-rows">
              {activeCase.summaryRows.map(([label, value]) => (
                <div className="summary-row" key={label}>
                  <span>{label}</span>
                  <p>{value}</p>
                </div>
              ))}
            </div>
            <div className="summary-actions">
              <button
                className="report-button"
                onClick={() => setSummaryStatus('Summary ready')}
                type="button"
              >
                {summaryStatus}
              </button>
              {summaryStatus === 'Summary ready' ? (
                <a
                  className="download-link"
                  download={summaryFilename}
                  href={summaryHref}
                >
                  <Download size={15} />
                  Download .txt
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
