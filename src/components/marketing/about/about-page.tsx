import { AboutClosingCtaSection } from "@/components/marketing/about/closing-cta-section"
import { MissionVisionSection } from "@/components/marketing/about/mission-vision-section"
import { AboutPageHeroSection } from "@/components/marketing/about/page-hero-section"
import { ProductPhilosophySection } from "@/components/marketing/about/product-philosophy-section"
import { WhyExistsSection } from "@/components/marketing/about/why-exists-section"

export function AboutPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_30%,transparent_66%)]" />
      <AboutPageHeroSection />
      <MissionVisionSection />
      <WhyExistsSection />
      <ProductPhilosophySection />
      <AboutClosingCtaSection />
    </div>
  )
}
