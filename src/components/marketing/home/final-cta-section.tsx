import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

export function FinalCtaSection() {
  return (
    <SectionWrapper density="cta-end">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/90 px-6 py-10 shadow-xl shadow-black/30 backdrop-blur-md sm:px-10 sm:py-12">
          <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.12_84/0.2),transparent_62%)]" />
          <div className="relative">
            <p className="text-sm font-medium tracking-wide text-primary">
              Ready to lead with greater clarity?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Bring your ministry, teams, and operations into one trusted platform.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              See ShepherdOS in action, align your team, and start building a
              healthier digital foundation for your church.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </div>
    </SectionWrapper>
  )
}
