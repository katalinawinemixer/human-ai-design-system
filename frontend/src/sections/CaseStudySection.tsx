import { ClipboardCheck, Scale } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { designDecisions, reuseMap } from '../data/designSystemContent'

export function CaseStudySection() {
  return (
    <section className="case-study-section" id="case-study">
      <SectionHeader
        eyebrow="Portfolio case study"
        title="A design system for AI products where trust has to be earned."
        body="This project packages three connected surfaces: a reusable AI design system, a model-behavior evaluation studio, and a clinical-trial diligence workbench."
      />

      <div className="case-study-grid">
        <article className="case-panel case-summary">
          <div className="component-heading">
            <ClipboardCheck size={20} />
            <h3>What this proves</h3>
          </div>
          <p>
            The system shows end-to-end AI product thinking: coded UI craft,
            reusable components, uncertainty design, human feedback loops, and a
            domain-specific point of view rooted in clinical operations.
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
                Product surface
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
