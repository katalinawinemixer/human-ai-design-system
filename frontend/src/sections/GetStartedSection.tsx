import { ArrowRight, TerminalSquare } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { getStartedPaths } from '../data/designSystemContent'

export function GetStartedSection() {
  return (
    <section className="get-started-section" id="get-started">
      <SectionHeader
        eyebrow="Get started"
        title="Choose the shortest path into the system."
        body="The site is organized by task: understand the review model, inspect the components, open a workflow, or run the frontend locally."
      />

      <div className="get-started-grid">
        {getStartedPaths.map((path) => (
          <a className="start-card" href={path.href} key={path.title}>
            <div>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
            </div>
            <span>
              {path.action}
              <ArrowRight size={15} />
            </span>
          </a>
        ))}
      </div>

      <div className="run-locally-panel" id="run-locally">
        <div className="component-heading">
          <TerminalSquare size={20} />
          <h3>Run locally</h3>
        </div>
        <pre>{`cd frontend
bun install
bun dev`}</pre>
      </div>
    </section>
  )
}
