import { NextStepsSection } from "@/components/marketing/start-trial/next-steps-section"
import { StartTrialPageHeroSection } from "@/components/marketing/start-trial/page-hero-section"
import { TrialBenefitsSection } from "@/components/marketing/start-trial/trial-benefits-section"
import { TrialSignupFormSection } from "@/components/marketing/start-trial/trial-signup-form-section"

export function StartTrialPageContent() {
  return (
    <div>
      <StartTrialPageHeroSection />
      <TrialBenefitsSection />
      <TrialSignupFormSection />
      <NextStepsSection />
    </div>
  )
}
