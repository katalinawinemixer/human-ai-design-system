import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { resourceLinks } from '../data/designSystemContent'

export function ResourcesSection() {
  return (
    <section className="resources-section" id="resources">
      <SectionHeader
        eyebrow="Resources"
        title="Docs that make the prototype usable after the first read."
        body="The project keeps implementation notes, usage guidance, accessibility decisions, and future work close to the working frontend."
      />

      <div className="resource-grid">
        {resourceLinks.map((resource) => (
          <a className="resource-card" href={resource.href} key={resource.title}>
            <div>
              <h3>{resource.title}</h3>
              <p>{resource.body}</p>
            </div>
            <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </section>
  )
}
