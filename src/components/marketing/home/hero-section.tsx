import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Bell, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

export function HeroSection() {
  return (
    <SectionWrapper variant="hero" density="none">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(100%,32rem)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.52_0.14_264/0.35),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(ellipse_70%_50%_at_70%_100%,oklch(0.72_0.12_85/0.12),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:gap-14 md:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-xl lg:max-w-none">
          <p className="text-sm font-medium tracking-wide text-primary">
            ShepherdOS
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Lead ministry with clarity, care, and confidence.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
            ShepherdOS unifies member care, operations, finance, and engagement
            into one intelligent platform.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/book-demo">
                Book Demo <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/start-trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[118%] w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-[radial-gradient(closest-side,oklch(0.55_0.16_264/0.28),transparent)] blur-2xl sm:h-[125%] sm:w-[110%]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-2 bottom-[18%] -z-10 h-32 w-48 rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.12_85/0.22),transparent)] blur-2xl"
            aria-hidden
          />

          <div
            className="absolute -right-1 top-10 -z-[1] hidden w-[88%] rounded-2xl border border-white/[0.06] bg-card/40 p-4 shadow-2xl shadow-black/50 backdrop-blur-sm sm:block sm:rotate-[2deg]"
            aria-hidden
          >
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <div className="flex gap-1">
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/10" />
                <span className="size-2 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
                Giving · week view
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-1/2 rounded-full bg-white/[0.07]" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-card/90 to-card/70 p-1 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] backdrop-blur-md">
            <div className="rounded-[1.35rem] bg-background/40 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
                    <BarChart3 className="size-4 text-primary" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold tracking-tight">
                      Ministry overview
                    </p>
                    <p className="text-xs text-muted-foreground">Live snapshot</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-inner shadow-black/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                    <Users className="size-3.5 opacity-80" aria-hidden />
                    Care queue
                  </div>
                  <p className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">
                    14
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">Awaiting follow-up</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-inner shadow-black/20">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                    <Bell className="size-3.5 opacity-80" aria-hidden />
                    This week
                  </div>
                  <p className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">
                    8
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">Key touchpoints</p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Recent activity
                </p>
                <ul className="mt-2.5 space-y-2.5 text-[13px] leading-snug">
                  <li className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-2">
                    <span className="text-foreground/90">New member intake · review</span>
                    <span className="shrink-0 text-xs text-muted-foreground">4m</span>
                  </li>
                  <li className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-2">
                    <span className="text-foreground/90">Pledge sync · finance</span>
                    <span className="shrink-0 text-xs text-muted-foreground">1h</span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <span className="text-foreground/90">Event RSVP · youth</span>
                    <span className="shrink-0 text-xs text-muted-foreground">3h</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-card/50 p-3 shadow-sm shadow-black/30">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                  <Image
                    src="/shepherdos-logo.png"
                    alt="ShepherdOS logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium">ShepherdOS</p>
                  <p className="truncate text-xs text-muted-foreground">
                    One workspace for your whole team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
