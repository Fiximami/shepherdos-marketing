import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SolutionsCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 px-6 py-10 shadow-lg sm:px-10">
          <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_66%)]" />
          <div className="relative">
            <p className="text-sm font-medium tracking-wide text-primary">
              Explore your best-fit solution
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              See how ShepherdOS can support your church's next season.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Book a guided walkthrough for your leadership team or start a free
              trial to experience ShepherdOS in your own ministry context.
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
    </section>
  )
}
