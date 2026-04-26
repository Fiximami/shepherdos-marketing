import { Cross, HeartHandshake, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { aboutHero } from "@/lib/constants/about"

export function AboutPageHeroSection() {
  return (
    <SectionWrapper variant="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.14_264/0.22),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={aboutHero.eyebrow}
          title={aboutHero.title}
          description={aboutHero.description}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Cross className="size-4 text-primary" />
              Ministry-aware foundation
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed around church leadership realities, not generic software assumptions.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <HeartHandshake className="size-4 text-primary" />
              Humane experience
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Product decisions prioritize care, clarity, and healthy team collaboration.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-primary" />
              Trustworthy operations
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Structured workflows support accountability for both ministry and stewardship.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
