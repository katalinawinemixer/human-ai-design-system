import {
  Activity,
  Check,
  ClipboardCheck,
  Code2,
  Layers3,
  MessageSquare,
  PanelRight,
  Scale,
} from 'lucide-react'
import { AgentTimeline } from '../components/AgentTimeline'
import { CitationCard } from '../components/CitationCard'
import { ComparisonWorkspace } from '../components/ComparisonWorkspace'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { EvalScorecard } from '../components/EvalScorecard'
import { FeedbackBar } from '../components/FeedbackBar'
import { PromptHistory } from '../components/PromptHistory'
import { ReviewBanner } from '../components/ReviewBanner'
import { SectionHeader } from '../components/SectionHeader'
import { citations, componentIndex } from '../data/designSystemContent'

export function ComponentsSection() {
  return (
    <section className="components-section" id="components">
      <SectionHeader
        eyebrow="Component library"
        title="Reusable patterns for AI-native workflows."
        body="This first pass focuses on the pieces we will reuse in Model Behavior Studio and TrialSense."
      />

      <div className="component-index">
        {componentIndex.map((component) => (
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
  )
}
