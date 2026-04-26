import { ChurchScenariosSection } from "@/components/marketing/solutions/church-scenarios-section"
import { SolutionsCtaSection } from "@/components/marketing/solutions/cta-section"
import { MultiBranchGrowthSection } from "@/components/marketing/solutions/multi-branch-growth-section"
import { SolutionsPageHeroSection } from "@/components/marketing/solutions/page-hero-section"
import { SolutionTypesSection } from "@/components/marketing/solutions/solution-types-section"

export function SolutionsPageContent() {
  return (
    <div>
      <SolutionsPageHeroSection />
      <SolutionTypesSection />
      <ChurchScenariosSection />
      <MultiBranchGrowthSection />
      <SolutionsCtaSection />
    </div>
  )
}
