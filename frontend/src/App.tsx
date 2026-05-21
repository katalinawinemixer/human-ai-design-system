import './App.css'
import { CaseStudySection } from './sections/CaseStudySection'
import { ComponentsSection } from './sections/ComponentsSection'
import { HeroSection } from './sections/HeroSection'
import { InventorySection } from './sections/InventorySection'
import { ModelBehaviorStudioSection } from './sections/ModelBehaviorStudioSection'
import { PrinciplesSection } from './sections/PrinciplesSection'
import { ScenarioLibrarySection } from './sections/ScenarioLibrarySection'
import { SpecificationsSection } from './sections/SpecificationsSection'
import { TrialSenseSection } from './sections/TrialSenseSection'

function App() {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <ScenarioLibrarySection />
      <ModelBehaviorStudioSection />
      <TrialSenseSection />
      <PrinciplesSection />
      <SpecificationsSection />
      <InventorySection />
      <ComponentsSection />
    </main>
  )
}

export default App
