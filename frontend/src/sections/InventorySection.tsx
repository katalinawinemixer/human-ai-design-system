import type { ReactNode } from 'react'
import { Activity, GitBranch, Layers3, MessageSquare, Scale } from 'lucide-react'
import { AgentTimeline } from '../components/AgentTimeline'
import { CitationCard } from '../components/CitationCard'
import { ComparisonWorkspace } from '../components/ComparisonWorkspace'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { EvalScorecard } from '../components/EvalScorecard'
import { FeedbackBar } from '../components/FeedbackBar'
import { PromptHistory } from '../components/PromptHistory'
import { ReviewBanner } from '../components/ReviewBanner'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import {
  inventoryCitationStates,
  inventoryComparisonStates,
  inventoryConfidenceStates,
  inventoryEvalStates,
  inventoryFeedbackStates,
  inventoryPromptStates,
  inventoryReviewStates,
  inventoryTimelineStates,
} from '../data/designSystemContent'

export function InventorySection() {
  return (
    <section className="inventory-section" id="inventory">
      <SectionHeader
        eyebrow="Visual inventory"
        title="Component states are visible before they become product screens."
        body="This inventory shows the reusable primitives across the states that Model Behavior Studio and TrialSense will need: supported evidence, uncertainty, review gates, model feedback, and evaluation quality."
      />

      <div className="inventory-grid">
        <article className="inventory-card wide">
          <InventoryHeading
            icon={<Layers3 size={20} />}
            title="Citation states"
            badge="Evidence"
          />
          <div className="inventory-stack">
            {inventoryCitationStates.map((citation) => (
              <CitationCard citation={citation} key={citation.title} />
            ))}
          </div>
        </article>

        <article className="inventory-card">
          <InventoryHeading
            icon={<Activity size={20} />}
            title="Confidence states"
            badge="Calibration"
          />
          <div className="inventory-stack">
            {inventoryConfidenceStates.map(([label, value, description]) => (
              <ConfidenceMeter
                description={description}
                key={label}
                label={label}
                value={value}
              />
            ))}
          </div>
        </article>

        <article className="inventory-card">
          <InventoryHeading
            icon={<Activity size={20} />}
            title="Timeline states"
            badge="Agent work"
          />
          <div className="inventory-stack">
            {inventoryTimelineStates.map((entries) => (
              <AgentTimeline entries={entries} key={entries[0][0]} />
            ))}
          </div>
        </article>

        <article className="inventory-card">
          <InventoryHeading
            icon={<MessageSquare size={20} />}
            title="Feedback states"
            badge="Human signal"
          />
          <div className="inventory-stack compact">
            {inventoryFeedbackStates.map(([label, status, selected]) => (
              <div className="inventory-state-row" key={label}>
                <SignalBadge tone="neutral">{label}</SignalBadge>
                <FeedbackBar selected={selected} status={status} />
              </div>
            ))}
          </div>
        </article>

        <article className="inventory-card">
          <InventoryHeading
            icon={<Scale size={20} />}
            title="Eval states"
            badge="Quality"
          />
          <div className="inventory-stack">
            {inventoryEvalStates.map((rows) => (
              <EvalScorecard key={rows[0][0]} rows={rows} />
            ))}
          </div>
        </article>

        <article className="inventory-card">
          <InventoryHeading
            icon={<GitBranch size={20} />}
            title="Prompt history states"
            badge="Iteration"
          />
          <div className="inventory-stack">
            {inventoryPromptStates.map((items) => (
              <PromptHistory items={items} key={items[0][0]} />
            ))}
          </div>
        </article>

        <article className="inventory-card wide">
          <InventoryHeading
            icon={<Scale size={20} />}
            title="Response comparison states"
            badge="Choice"
          />
          <div className="inventory-stack">
            {inventoryComparisonStates.map((responses) => (
              <ComparisonWorkspace key={responses[0][2]} responses={responses} />
            ))}
          </div>
        </article>

        <article className="inventory-card wide">
          <InventoryHeading
            icon={<MessageSquare size={20} />}
            title="Review gate states"
            badge="Approval"
          />
          <div className="inventory-stack">
            {inventoryReviewStates.map(([title, body, actionLabel]) => (
              <ReviewBanner
                actionLabel={actionLabel}
                body={body}
                key={title}
                title={title}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function InventoryHeading({
  badge,
  icon,
  title,
}: {
  badge: string
  icon: ReactNode
  title: string
}) {
  return (
    <div className="inventory-heading">
      <div className="component-heading">
        {icon}
        <h3>{title}</h3>
      </div>
      <SignalBadge tone="evidence">{badge}</SignalBadge>
    </div>
  )
}
