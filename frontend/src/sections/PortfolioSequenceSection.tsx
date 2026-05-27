import { ArrowRight, Boxes, BrainCircuit, Stethoscope } from 'lucide-react'
import { SignalBadge } from '../components/SignalBadge'
import { portfolioSequence } from '../data/designSystemContent'

const sequenceIcons = [Boxes, BrainCircuit, Stethoscope] as const

export function PortfolioSequenceSection() {
  return (
    <section className="portfolio-sequence-section" id="portfolio-sequence">
      <div className="portfolio-sequence-heading">
        <div>
          <p className="eyebrow">Portfolio-ready product sequence</p>
          <h2>Three finished surfaces, one coherent AI product story.</h2>
        </div>
        <p>
          The project now reads as a sequence: a reusable component foundation,
          a model-behavior workflow, and a domain-specific clinical diligence
          concept. Each phase proves a different layer of product judgment.
        </p>
      </div>

      <div className="sequence-grid">
        {portfolioSequence.map((item, index) => {
          const Icon = sequenceIcons[index]

          return (
            <article className="sequence-card" key={item.title}>
              <div className="sequence-card-topline">
                <span>
                  <Icon size={18} />
                  {item.phase}
                </span>
                <SignalBadge tone={index === 2 ? 'evidence' : 'good'}>
                  {item.status}
                </SignalBadge>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="sequence-proof">
                <strong>Portfolio proof</strong>
                <p>{item.proof}</p>
              </div>
            </article>
          )
        })}
      </div>

      <a className="sequence-link" href="#trialsense">
        See the domain product concept <ArrowRight size={16} />
      </a>
    </section>
  )
}
