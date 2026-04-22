import {
  ArrowUpRight,
  Building2,
  HandCoins,
  HeartHandshake,
  LaptopMinimal,
} from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { solutionCategories } from "@/lib/constants/solutions"

const solutionIcons = {
  "Growing Churches": ArrowUpRight,
  "Multi-Branch Churches": Building2,
  "Financial Accountability": HandCoins,
  "Member Engagement": HeartHandshake,
  "Churches Going Digital": LaptopMinimal,
}

export function SolutionTypesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solution types"
          title="Five high-impact solution tracks for modern churches."
          description="ShepherdOS is structured around the challenges church leaders face most often, helping teams respond with confidence and consistency."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionCategories.map((solutionCategory) => (
            <CapabilityCard
              key={solutionCategory.name}
              icon={solutionIcons[solutionCategory.name]}
              title={solutionCategory.name}
              summary={solutionCategory.summary}
              points={solutionCategory.outcomes}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
