import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/marketing/home/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pricingTiers } from "@/lib/constants/pricing"

export function PricingPreviewSection() {
  return (
    <SectionWrapper density="relaxed">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Pricing preview"
            title="Flexible plans designed for churches at every stage."
            description="Start with the right tier for your team today and scale confidently as your ministry grows."
          />
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/pricing">
              View Full Pricing <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className="rounded-2xl border-border/70 bg-card/95 shadow-sm"
            >
              <CardHeader>
                <p className="text-sm font-medium text-primary">
                  {index === 1 ? "Most popular" : "Plan"}
                </p>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-3xl font-semibold tracking-tight">{tier.priceLabel}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {tier.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
