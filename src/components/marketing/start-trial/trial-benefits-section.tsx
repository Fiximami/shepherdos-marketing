import { CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { trialBenefits } from "@/lib/constants/start-trial"

export function TrialBenefitsSection() {
  return (
    <SectionWrapper variant="band">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trial benefits"
          title="A thoughtful trial experience designed for church decisions."
          description="Understand ShepherdOS fit with clarity before full rollout by exploring real workflows in a guided structure."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {trialBenefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <p className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 className="size-4" />
                  Trial value
                </p>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
