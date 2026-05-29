import {
  Boxes,
  ClipboardList,
  Component,
  FileText,
  Gauge,
  Layers3,
  MonitorCog,
  PlayCircle,
  Sparkles,
} from 'lucide-react'
import { navigationItems } from '../data/designSystemContent'

const navIcons = [
  Sparkles,
  PlayCircle,
  Boxes,
  Component,
  Gauge,
  Layers3,
  MonitorCog,
  ClipboardList,
  FileText,
] as const

export function SiteNav() {
  return (
    <aside className="site-rail" aria-label="Site sections">
      <a className="rail-brand" href="#main-content" aria-label="Human-AI Design System home">
        <Sparkles size={20} />
      </a>
      <nav className="rail-links" aria-label="Primary sections">
        {navigationItems.map(([label, href], index) => {
          const Icon = navIcons[index] ?? FileText

          return (
            <a href={href} key={href}>
              <Icon size={18} />
              <span>{label}</span>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
