import { useState } from 'react'
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'
import { AgentTimeline } from '../components/AgentTimeline'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { FeedbackBar } from '../components/FeedbackBar'
import { ReviewBanner } from '../components/ReviewBanner'
import { SignalBadge } from '../components/SignalBadge'
import { scenarioLibrary } from '../data/designSystemContent'

export function HeroSection() {
  const [activeScenario, setActiveScenario] = useState(0)
  const scenario = scenarioLibrary[activeScenario]

  return (
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
          <a href="#scenarios">
            Scenarios <ChevronRight size={16} />
          </a>
          <a href="#model-studio">
            Studio <ChevronRight size={16} />
          </a>
          <a href="#trialsense">
            TrialSense <ChevronRight size={16} />
          </a>
          <a href="#specs">
            Specs <ChevronRight size={16} />
          </a>
          <a href="#inventory">
            Inventory <ChevronRight size={16} />
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
          <div className="scenario-switcher" aria-label="Preview scenario">
            {scenarioLibrary.map((item, index) => (
              <button
                className={index === activeScenario ? 'active' : undefined}
                key={item.title}
                onClick={() => setActiveScenario(index)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-surface" aria-label="AI review workspace preview">
          <div className="surface-toolbar">
            <SignalBadge tone="evidence">{scenario.title}</SignalBadge>
            <SignalBadge tone="warn">{scenario.secondarySignal}</SignalBadge>
          </div>
          <ReviewBanner
            actionLabel={scenario.actionLabel}
            body={scenario.context}
            title={scenario.review}
          />
          <div className="surface-grid">
            <ConfidenceMeter
              description={scenario.evidence}
              label={scenario.confidence}
              value={scenario.confidenceValue}
            />
            <AgentTimeline entries={scenario.activity} />
          </div>
          <FeedbackBar
            selected={scenario.feedbackState}
            status={scenario.feedback}
          />
        </div>
      </div>
    </header>
  )
}
