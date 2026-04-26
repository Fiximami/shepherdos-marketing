import {
  BarChart3,
  CalendarDays,
  Church,
  HandCoins,
  Megaphone,
  Settings2,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { featureCategories } from "@/lib/constants/features"

const categoryIcons = {
  "Church Management": Church,
  "Membership Management": UserRound,
  "Attendance Management": Users,
  "Finance Management": HandCoins,
  Communication: Megaphone,
  Events: CalendarDays,
  Engagement: ShieldCheck,
  Analytics: BarChart3,
  "Settings & Branding": Settings2,
}

export function FeaturesGridSection() {
  return (
    <SectionWrapper variant="band">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Feature categories"
          title="Every core capability your church team needs."
          description="From ministry operations to finance visibility, ShepherdOS provides an integrated feature foundation for healthy church growth."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featureCategories.map((category) => (
            <CapabilityCard
              key={category.name}
              icon={categoryIcons[category.name]}
              title={category.name}
              summary={category.summary}
              points={category.capabilities}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
