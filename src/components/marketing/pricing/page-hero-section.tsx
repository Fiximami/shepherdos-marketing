import { BadgeCheck, HandCoins, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"

export function PricingPageHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.14),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ShepherdOS Pricing"
          title="Simple, trustworthy pricing for churches at every stage."
          description="Choose the plan that matches your ministry complexity today, with room to grow as your teams, operations, and stewardship needs expand."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <HandCoins className="size-4 text-primary" />
              Built for stewardship
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pricing designed for church realities, not aggressive growth tactics.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-primary" />
              Clear and accountable
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Transparent plan structure for pastors, admins, and finance leaders.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <BadgeCheck className="size-4 text-primary" />
              Flexible to grow
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Start with what you need now, then scale as your church expands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
