import { FeaturesCtaSection } from "@/components/marketing/features/cta-section"
import { FeaturesGridSection } from "@/components/marketing/features/features-grid-section"
import { FeaturesPageHeroSection } from "@/components/marketing/features/page-hero-section"
import { PlatformCapabilitiesSection } from "@/components/marketing/features/platform-capabilities-section"
import { RoleBasedCapabilitySection } from "@/components/marketing/features/role-based-capability-section"

export function FeaturesPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_26%,transparent_62%)]" />
      <FeaturesPageHeroSection />
      <FeaturesGridSection />
      <RoleBasedCapabilitySection />
      <PlatformCapabilitiesSection />
      <FeaturesCtaSection />
    </div>
  )
}
