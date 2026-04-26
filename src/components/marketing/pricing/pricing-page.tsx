import { FaqSnippetSection } from "@/components/marketing/pricing/faq-snippet-section"
import { PlanComparisonSection } from "@/components/marketing/pricing/plan-comparison-section"
import { PricingCardsSection } from "@/components/marketing/pricing/pricing-cards-section"
import { PricingCtaSection } from "@/components/marketing/pricing/cta-section"
import { PricingPageHeroSection } from "@/components/marketing/pricing/page-hero-section"

export function PricingPageContent() {
  return (
    <div>
      <PricingPageHeroSection />
      <PricingCardsSection />
      <PlanComparisonSection />
      <FaqSnippetSection />
      <PricingCtaSection />
    </div>
  )
}
