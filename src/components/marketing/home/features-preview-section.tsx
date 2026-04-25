import {
  BarChart3,
  CalendarCheck2,
  HandCoins,
  MessageSquareHeart,
  UsersRound,
  Workflow,
} from "lucide-react"

import { homeFeatures } from "@/components/marketing/home/content"
import { FeaturePreviewCard } from "@/components/marketing/home/feature-preview-card"
import { SectionHeading } from "@/components/marketing/home/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

const featureIcons = [
  UsersRound,
  HandCoins,
  Workflow,
  MessageSquareHeart,
  CalendarCheck2,
  BarChart3,
]

export function FeaturesPreviewSection() {
  return (
    <SectionWrapper density="relaxed">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Everything your church needs in one coherent platform."
          description="ShepherdOS helps teams run ministries with structure while keeping people at the center of every workflow."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature, index) => (
            <FeaturePreviewCard
              key={feature.title}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
