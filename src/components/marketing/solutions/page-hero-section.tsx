import { Church, Compass, Sparkles } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

export function SolutionsPageHeroSection() {
  return (
    <SectionWrapper variant="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.14_264/0.22),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ShepherdOS Solutions"
          title="Practical solutions for real church growth and operational complexity."
          description="From growing congregations to multi-branch coordination, ShepherdOS helps church leaders solve the challenges that matter most with structure, warmth, and clarity."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Church className="size-4 text-primary" />
              Church-specific by design
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Purpose-built for church teams, boards, and ministry operations.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Compass className="size-4 text-primary" />
              Strategy + execution
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Align leadership goals with practical day-to-day workflows.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4 text-primary" />
              Warm, modern experience
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional systems that still feel relational and church-aware.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
