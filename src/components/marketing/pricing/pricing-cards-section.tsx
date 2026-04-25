import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { pricingTiers } from "@/lib/constants/pricing"

export function PricingCardsSection() {
  return (
    <SectionWrapper variant="band">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing tiers"
          title="Choose the plan that matches your church operations."
          description="Each plan is designed to support ministry health, leadership clarity, and dependable day-to-day execution."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`rounded-3xl border-border/70 bg-card/95 shadow-sm ${
                tier.highlighted ? "ring-2 ring-primary/30" : ""
              }`}
            >
              <CardHeader>
                <p className="text-sm font-medium text-primary">
                  {tier.highlighted ? "Recommended for growing churches" : "Plan"}
                </p>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-3xl font-semibold tracking-tight">{tier.priceLabel}</p>
                <p className="text-sm text-muted-foreground">{tier.monthlyLabel}</p>
                <p className="text-xs text-muted-foreground">{tier.annualLabel}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{tier.summary}</p>
                <ul className="mt-5 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <Link href={tier.ctaHref}>{tier.ctaLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
