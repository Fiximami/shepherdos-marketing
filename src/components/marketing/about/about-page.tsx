import { AboutClosingCtaSection } from "@/components/marketing/about/closing-cta-section"
import { MissionVisionSection } from "@/components/marketing/about/mission-vision-section"
import { AboutPageHeroSection } from "@/components/marketing/about/page-hero-section"
import { ProductPhilosophySection } from "@/components/marketing/about/product-philosophy-section"
import { WhyExistsSection } from "@/components/marketing/about/why-exists-section"

export function AboutPageContent() {
  return (
    <div>
      <AboutPageHeroSection />
      <MissionVisionSection />
      <WhyExistsSection />
      <ProductPhilosophySection />
      <AboutClosingCtaSection />
    </div>
  )
}
