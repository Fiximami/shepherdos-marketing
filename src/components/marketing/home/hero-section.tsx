import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(46,103,255,0.14),transparent_62%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary">
            ShepherdOS for modern churches
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Lead ministry with clarity, care, and confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            ShepherdOS unifies member care, operations, finance, and engagement
            into one warm and reliable platform so your church team can focus on
            people instead of patching systems together.
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

        <div className="relative">
          <div className="absolute -left-6 top-8 -z-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-8 bottom-8 -z-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="rounded-3xl border border-border/70 bg-card/90 p-5 shadow-xl sm:p-6">
            <div className="rounded-2xl border border-border/70 bg-background p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Sunday Experience Dashboard</p>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                  Live
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                  <p className="text-xs text-muted-foreground">First-time guests</p>
                  <p className="mt-2 text-2xl font-semibold">27</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                  <p className="text-xs text-muted-foreground">Follow-ups pending</p>
                  <p className="mt-2 text-2xl font-semibold">11</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-border/60 bg-muted/40 p-3">
                <p className="text-xs text-muted-foreground">Recent activity</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>New prayer request</span>
                    <span className="text-muted-foreground">2m ago</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Youth event registration</span>
                    <span className="text-muted-foreground">12m ago</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg ring-1 ring-border/70">
                <Image
                  src="/shepherdos-logo.png"
                  alt="ShepherdOS logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">ShepherdOS Mobile</p>
                <p className="text-xs text-muted-foreground">
                  Member care, tasks, and updates on the go
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
