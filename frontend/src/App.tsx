import './App.css'
import { CaseStudySection } from './sections/CaseStudySection'
import { ComponentsSection } from './sections/ComponentsSection'
import { HeroSection } from './sections/HeroSection'
import { PrinciplesSection } from './sections/PrinciplesSection'
import { SpecificationsSection } from './sections/SpecificationsSection'

function App() {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <PrinciplesSection />
      <SpecificationsSection />
      <ComponentsSection />
    </main>
  )
}

export default App
