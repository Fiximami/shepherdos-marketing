import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { demoReassurancePoints } from "@/lib/constants/book-demo"

export function TrustReassuranceSection() {
  return (
    <section className="pb-16 pt-6 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 px-6 py-10 shadow-lg sm:px-10">
          <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_66%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-wide text-primary">
                Trust and reassurance
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                A respectful process designed for church leadership teams.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                We focus on honest fit, operational clarity, and next steps that
                make sense for your church's stage and structure.
              </p>
              <Button asChild className="mt-7" size="lg" variant="outline">
                <Link href="/contact">
                  Ask a question first <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/80 p-5">
              <ul className="space-y-3">
                {demoReassurancePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6">
                    <CheckCircle2 className="mt-1 size-4 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
