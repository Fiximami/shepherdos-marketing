import { CalendarClock, Handshake, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { bookDemoHero } from "@/lib/constants/book-demo"

export function BookDemoPageHeroSection() {
  return (
    <SectionWrapper variant="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.14_264/0.22),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={bookDemoHero.eyebrow}
          title={bookDemoHero.title}
          description={bookDemoHero.description}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <CalendarClock className="size-4 text-primary" />
              Clear scheduling flow
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your preferred time and we will coordinate a live session.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Handshake className="size-4 text-primary" />
              Human-first conversation
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Expect practical discussion, not a scripted or robotic product pitch.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/80 p-4 shadow-md shadow-black/20 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-primary" />
              Trusted process
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We respect your time and tailor each demo to your church's needs.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
