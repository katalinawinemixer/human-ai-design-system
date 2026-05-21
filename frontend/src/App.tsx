import './App.css'
import { CaseStudySection } from './sections/CaseStudySection'
import { ComponentsSection } from './sections/ComponentsSection'
import { HeroSection } from './sections/HeroSection'
import { InventorySection } from './sections/InventorySection'
import { PrinciplesSection } from './sections/PrinciplesSection'
import { SpecificationsSection } from './sections/SpecificationsSection'

function App() {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <PrinciplesSection />
      <SpecificationsSection />
      <InventorySection />
      <ComponentsSection />
    </main>
  )
}

export default App
