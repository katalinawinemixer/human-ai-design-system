import './App.css'
import { CaseStudySection } from './sections/CaseStudySection'
import { ComponentsSection } from './sections/ComponentsSection'
import { HeroSection } from './sections/HeroSection'
import { PrinciplesSection } from './sections/PrinciplesSection'

function App() {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <PrinciplesSection />
      <ComponentsSection />
    </main>
  )
}

export default App
