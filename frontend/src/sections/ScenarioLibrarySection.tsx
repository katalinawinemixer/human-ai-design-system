import { ClipboardCheck, Gauge, LibraryBig } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { scenarioLibrary } from '../data/designSystemContent'

export function ScenarioLibrarySection() {
  return (
    <section className="scenario-section" id="scenarios">
      <SectionHeader
        eyebrow="Scenario library"
        title="The same primitives can support more than one AI workflow."
        body="These examples show how evidence, confidence, evaluation, feedback, and review patterns adapt across clinical diligence, model-behavior review, and source synthesis."
      />

      <div className="scenario-grid">
        {scenarioLibrary.map((scenario) => (
          <article className="scenario-card" key={scenario.title}>
            <div className="scenario-card-header">
              <div className="component-heading">
                <LibraryBig size={20} />
                <h3>{scenario.title}</h3>
              </div>
              <SignalBadge tone="evidence">{scenario.review}</SignalBadge>
            </div>

            <p>{scenario.context}</p>

            <div className="scenario-question">
              <span>{scenario.question}</span>
            </div>

            <div className="scenario-meter">
              <div>
                <Gauge size={18} />
                <strong>{scenario.confidence}</strong>
              </div>
              <div
                className="meter"
                aria-label={`${scenario.title} confidence ${scenario.confidenceValue} percent`}
              >
                <span style={{ width: `${scenario.confidenceValue}%` }} />
              </div>
              <p>{scenario.evidence}</p>
            </div>

            <div className="scenario-claims">
              {scenario.sampleClaims.map(([state, claim]) => (
                <div className="scenario-claim" key={claim}>
                  <SignalBadge tone={state === 'Supported' ? 'good' : 'warn'}>
                    {state}
                  </SignalBadge>
                  <p>{claim}</p>
                </div>
              ))}
            </div>

            <div className="scenario-primitives">
              <div className="scenario-primitives-label">
                <ClipboardCheck size={16} />
                <span>Reusable primitives</span>
              </div>
              <div className="scenario-tags">
                {scenario.primitives.map((primitive) => (
                  <span key={primitive}>{primitive}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
