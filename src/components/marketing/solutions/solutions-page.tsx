import { ChurchScenariosSection } from "@/components/marketing/solutions/church-scenarios-section"
import { SolutionsCtaSection } from "@/components/marketing/solutions/cta-section"
import { MultiBranchGrowthSection } from "@/components/marketing/solutions/multi-branch-growth-section"
import { SolutionsPageHeroSection } from "@/components/marketing/solutions/page-hero-section"
import { SolutionTypesSection } from "@/components/marketing/solutions/solution-types-section"

export function SolutionsPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(59,130,246,0.03)_30%,transparent_64%)]" />
      <SolutionsPageHeroSection />
      <SolutionTypesSection />
      <ChurchScenariosSection />
      <MultiBranchGrowthSection />
      <SolutionsCtaSection />
    </div>
  )
}
