import { FaqSnippetSection } from "@/components/marketing/pricing/faq-snippet-section"
import { PlanComparisonSection } from "@/components/marketing/pricing/plan-comparison-section"
import { PricingCardsSection } from "@/components/marketing/pricing/pricing-cards-section"
import { PricingCtaSection } from "@/components/marketing/pricing/cta-section"
import { PricingPageHeroSection } from "@/components/marketing/pricing/page-hero-section"

export function PricingPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_28%,transparent_62%)]" />
      <PricingPageHeroSection />
      <PricingCardsSection />
      <PlanComparisonSection />
      <FaqSnippetSection />
      <PricingCtaSection />
    </div>
  )
}
