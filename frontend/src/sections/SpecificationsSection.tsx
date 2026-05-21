import { FileCheck2, PanelsTopLeft } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { componentSpecs, reviewChecklist } from '../data/designSystemContent'

export function SpecificationsSection() {
  return (
    <section className="specifications-section" id="specs">
      <SectionHeader
        eyebrow="System specs"
        title="Each primitive has a job, state model, and reuse path."
        body="The system is documented like a product foundation: what the component does, which states it supports, and where it will appear in the next prototypes."
      />

      <div className="spec-layout">
        <div className="spec-grid">
          {componentSpecs.map((spec) => (
            <article className="spec-card" key={spec.name}>
              <div className="spec-card-topline">
                <PanelsTopLeft size={18} />
                <h3>{spec.name}</h3>
              </div>
              <p>{spec.role}</p>
              <div className="spec-states" aria-label={`${spec.name} states`}>
                {spec.states.map((state) => (
                  <span key={state}>{state}</span>
                ))}
              </div>
              <div className="spec-reuse">
                <span>Reuse path</span>
                <p>{spec.reuse}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="review-checklist" aria-label="Review checklist">
          <SignalBadge tone="evidence">Design review</SignalBadge>
          <div className="component-heading">
            <FileCheck2 size={20} />
            <h3>Trust-pattern checklist</h3>
          </div>
          <div className="checklist-rows">
            {reviewChecklist.map(([title, body]) => (
              <div className="checklist-row" key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
