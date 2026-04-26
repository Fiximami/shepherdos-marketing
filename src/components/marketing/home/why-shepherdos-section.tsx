import { CheckCircle2 } from "lucide-react"

import { homeAdvantages } from "@/components/marketing/home/content"
import { SectionHeading } from "@/components/marketing/home/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

export function WhyShepherdosSection() {
  return (
    <SectionWrapper density="relaxed">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why ShepherdOS"
            title="A strategic platform for churches that want to grow with integrity."
            description="ShepherdOS combines humane product design with practical operational depth so church leadership can move faster without losing care, accountability, or vision."
          />
          <div className="space-y-4">
            {homeAdvantages.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
