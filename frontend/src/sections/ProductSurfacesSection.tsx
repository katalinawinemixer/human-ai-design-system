import { ArrowRight, Boxes, BrainCircuit, Stethoscope } from 'lucide-react'
import { SignalBadge } from '../components/SignalBadge'
import { productSurfaces } from '../data/designSystemContent'

const sequenceIcons = [Boxes, BrainCircuit, Stethoscope] as const

export function ProductSurfacesSection() {
  return (
    <section className="product-surfaces-section" id="product-surfaces">
      <div className="product-surfaces-heading">
        <div>
          <p className="eyebrow">Product surfaces</p>
          <h2>Three surfaces using the same AI review primitives.</h2>
        </div>
        <p>
          The app is organized as a sequence: a reusable component foundation,
          a model-behavior workflow, and a domain-specific clinical diligence
          concept. Each surface exercises a different part of the review flow.
        </p>
      </div>

      <div className="sequence-grid">
        {productSurfaces.map((item, index) => {
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
                <strong>Implemented behavior</strong>
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
