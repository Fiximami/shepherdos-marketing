import { FeaturesPreviewSection } from "@/components/marketing/home/features-preview-section"
import { FinalCtaSection } from "@/components/marketing/home/final-cta-section"
import { HeroSection } from "@/components/marketing/home/hero-section"
import { PlatformPreviewSection } from "@/components/marketing/home/platform-preview-section"
import { PricingPreviewSection } from "@/components/marketing/home/pricing-preview-section"
import { ProblemSection } from "@/components/marketing/home/problem-section"
import { TrustBenefitsSection } from "@/components/marketing/home/trust-benefits-section"
import { WhyShepherdosSection } from "@/components/marketing/home/why-shepherdos-section"

export function MarketingHomePage() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <FeaturesPreviewSection />
      <PlatformPreviewSection />
      <WhyShepherdosSection />
      <TrustBenefitsSection />
      <PricingPreviewSection />
      <FinalCtaSection />
    </div>
  )
}
