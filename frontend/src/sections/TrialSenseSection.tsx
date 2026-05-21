import { useState } from 'react'
import {
  AlertTriangle,
  ClipboardList,
  FileText,
  HelpCircle,
  Stethoscope,
} from 'lucide-react'
import { AgentTimeline } from '../components/AgentTimeline'
import { CitationCard } from '../components/CitationCard'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { ReviewBanner } from '../components/ReviewBanner'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { trialSenseCases } from '../data/trialSenseContent'

export function TrialSenseSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([])
  const activeCase = trialSenseCases[activeCaseIndex]

  function toggleQuestion(question: string) {
    setAnsweredQuestions((currentQuestions) =>
      currentQuestions.includes(question)
        ? currentQuestions.filter((item) => item !== question)
        : [...currentQuestions, question],
    )
  }

  return (
    <section className="trialsense-section" id="trialsense">
      <SectionHeader
        eyebrow="Phase 3"
        title="TrialSense turns source-grounded primitives into a diligence workbench."
        body="The first TrialSense surface reviews protocol text for feasibility risk, missing context, eligibility pressure, and investor-ready diligence language."
      />

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
          </div>
        </div>
      </div>
    </section>
  )
}
