import { Heart, ShieldCheck, Sparkles } from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { productPhilosophy } from "@/lib/constants/about"

const philosophyIcons = [Heart, Sparkles, ShieldCheck]

export function ProductPhilosophySection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product philosophy"
          title="The principles guiding every ShepherdOS product decision."
          description="Our philosophy keeps the platform warm, reliable, and strategic so churches can adopt modern systems without compromising mission values."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {productPhilosophy.map((item, index) => (
            <CapabilityCard
              key={item.title}
              icon={philosophyIcons[index]}
              title={item.title}
              summary={item.summary}
              points={item.points}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
