import { Bot, ClipboardCheck, Scale } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'

export function PrinciplesSection() {
  return (
    <section className="principles-section" id="principles">
      <SectionHeader
        eyebrow="System intent"
        title="The components are built around trust decisions."
        body="Each pattern answers a recurring question in AI interfaces: what did the model use, how sure is it, what is it doing now, and where should a human intervene?"
      />
      <div className="principles-grid">
        <article>
          <Bot size={22} />
          <h3>Behavior is part of the interface</h3>
          <p>
            Prompts, outputs, rubrics, and feedback states are treated as
            designed surfaces.
          </p>
        </article>
        <article>
          <Scale size={22} />
          <h3>Confidence is not decoration</h3>
          <p>
            Uncertainty appears next to the decision it affects, not hidden in a
            footnote.
          </p>
        </article>
        <article>
          <ClipboardCheck size={22} />
          <h3>Evaluation stays visible</h3>
          <p>
            Scorecards and review states make quality measurable while the
            prototype is still evolving.
          </p>
        </article>
      </div>
    </section>
  )
}
