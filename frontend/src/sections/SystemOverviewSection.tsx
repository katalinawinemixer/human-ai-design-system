import { ClipboardCheck, Scale } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { designDecisions, reuseMap } from '../data/designSystemContent'

export function SystemOverviewSection() {
  return (
    <section className="system-overview-section" id="system-overview">
      <SectionHeader
        eyebrow="System overview"
        title="A design system for AI products where trust has to be earned."
        body="This project packages three connected surfaces: a reusable AI design system, a model-behavior evaluation studio, and a clinical-trial diligence workbench."
      />

      <div className="system-overview-grid">
        <article className="overview-panel overview-summary">
          <div className="component-heading">
            <ClipboardCheck size={20} />
            <h3>What is implemented</h3>
          </div>
          <p>
            The system includes reusable components, uncertainty states, human
            feedback loops, eval views, and clinical examples that keep AI
            output tied to source evidence.
          </p>
          <div className="proof-list">
            <span>Live React prototype</span>
            <span>AI review states</span>
            <span>Clinical diligence examples</span>
            <span>Reusable product foundation</span>
          </div>
        </article>

        <article className="overview-panel">
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
                Product workflow
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
  )
}
