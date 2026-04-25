import { FeaturesCtaSection } from "@/components/marketing/features/cta-section"
import { FeaturesGridSection } from "@/components/marketing/features/features-grid-section"
import { FeaturesPageHeroSection } from "@/components/marketing/features/page-hero-section"
import { PlatformCapabilitiesSection } from "@/components/marketing/features/platform-capabilities-section"
import { RoleBasedCapabilitySection } from "@/components/marketing/features/role-based-capability-section"

export function FeaturesPageContent() {
  return (
    <div>
      <FeaturesPageHeroSection />
      <FeaturesGridSection />
      <RoleBasedCapabilitySection />
      <PlatformCapabilitiesSection />
      <FeaturesCtaSection />
    </div>
  )
}
