import { BadgeCheck, Sparkles } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

export function FeaturesPageHeroSection() {
  return (
    <SectionWrapper variant="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.14_264/0.22),transparent_65%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ShepherdOS Features"
          title="A complete church platform built for people, stewardship, and growth."
          description="Explore the full ShepherdOS feature set designed to help pastors, administrators, founders, and decision-makers lead with clarity and confidence."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <BadgeCheck className="size-4 text-primary" />
              Unified operations
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Reduce tool sprawl and align church teams in one clear workflow.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <BadgeCheck className="size-4 text-primary" />
              Ministry-centered design
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Built around real church rhythms, not generic enterprise software.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4 text-primary" />
              Warm and modern experience
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional interfaces that still feel humane, calm, and trustworthy.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
