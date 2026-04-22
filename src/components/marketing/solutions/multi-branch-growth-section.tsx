import { Building2, LineChart, Users } from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { growthCapabilities } from "@/lib/constants/solutions"

const growthIcons = [Building2, LineChart, Users]

export function MultiBranchGrowthSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Multi-branch and growth"
          title="Scale ministry without losing accountability or care quality."
          description="As churches expand, ShepherdOS helps maintain governance, visibility, and consistent member experience across branches and teams."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {growthCapabilities.map((growthCapability, index) => (
            <CapabilityCard
              key={growthCapability.title}
              icon={growthIcons[index]}
              title={growthCapability.title}
              summary={growthCapability.summary}
              points={growthCapability.points}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
