import { NextStepsSection } from "@/components/marketing/start-trial/next-steps-section"
import { StartTrialPageHeroSection } from "@/components/marketing/start-trial/page-hero-section"
import { TrialBenefitsSection } from "@/components/marketing/start-trial/trial-benefits-section"
import { TrialSignupFormSection } from "@/components/marketing/start-trial/trial-signup-form-section"

export function StartTrialPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_32%,transparent_66%)]" />
      <StartTrialPageHeroSection />
      <TrialBenefitsSection />
      <TrialSignupFormSection />
      <NextStepsSection />
    </div>
  )
}
