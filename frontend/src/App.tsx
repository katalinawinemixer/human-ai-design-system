import './App.css'
import { ComponentsSection } from './sections/ComponentsSection'
import { GetStartedSection } from './sections/GetStartedSection'
import { HeroSection } from './sections/HeroSection'
import { InventorySection } from './sections/InventorySection'
import { ModelBehaviorStudioSection } from './sections/ModelBehaviorStudioSection'
import { ProductSurfacesSection } from './sections/ProductSurfacesSection'
import { PrinciplesSection } from './sections/PrinciplesSection'
import { ResourcesSection } from './sections/ResourcesSection'
import { ScenarioLibrarySection } from './sections/ScenarioLibrarySection'
import { SiteNav } from './sections/SiteNav'
import { SpecificationsSection } from './sections/SpecificationsSection'
import { StatesMotionSection } from './sections/StatesMotionSection'
import { SystemOverviewSection } from './sections/SystemOverviewSection'
import { TrialSenseSection } from './sections/TrialSenseSection'

function App() {
  return (
    <div className="app-shell">
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <GetStartedSection />
        <ProductSurfacesSection />
        <SystemOverviewSection />
        <ComponentsSection />
        <StatesMotionSection />
        <ScenarioLibrarySection />
        <ModelBehaviorStudioSection />
        <TrialSenseSection />
        <PrinciplesSection />
        <SpecificationsSection />
        <InventorySection />
        <ResourcesSection />
      </main>
    </div>
  )
}

export default App
