import { Sparkles, ShieldCheck, UsersRound } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { startTrialHero } from "@/lib/constants/start-trial"

export function StartTrialPageHeroSection() {
  return (
    <SectionWrapper variant="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.14_264/0.22),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={startTrialHero.eyebrow}
          title={startTrialHero.title}
          description={startTrialHero.description}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4 text-primary" />
              Intelligent trial setup
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Built for structured evaluation without unnecessary friction.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <UsersRound className="size-4 text-primary" />
              Leadership-ready process
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Supports pastors, admins, and ministry teams from day one.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-primary" />
              Trust and structure
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              A calm, secure-looking flow that reflects church stewardship values.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
