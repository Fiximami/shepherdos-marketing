import { LockKeyhole, ShieldCheck, Target, UserRoundCheck } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { homeTrustItems } from "@/components/marketing/home/content"
import { SectionHeading } from "@/components/marketing/home/section-heading"

const trustIcons = [ShieldCheck, Target, LockKeyhole, UserRoundCheck]

export function TrustBenefitsSection() {
  return (
    <section className="bg-muted/30 py-18 sm:py-22">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust and benefits"
          title="Built for security, structure, and church accountability."
          description="ShepherdOS helps leadership teams steward data responsibly while creating clear internal processes that strengthen confidence across ministries."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeTrustItems.map((item, index) => {
            const Icon = trustIcons[index]
            return (
              <Card
                key={item.title}
                className="rounded-2xl border-border/70 bg-card/95 shadow-sm"
              >
                <CardHeader className="pb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
