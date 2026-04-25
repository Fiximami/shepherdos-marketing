import { ArrowRightCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { trialNextSteps } from "@/lib/constants/start-trial"

export function NextStepsSection() {
  return (
    <SectionWrapper density="soft-end">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Next steps"
          title="What happens after you submit your trial request."
          description="A simple, transparent process to move your church from signup to guided trial activation."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {trialNextSteps.map((step, index) => (
            <Card key={step}>
              <CardHeader>
                <p className="flex items-center gap-2 text-sm font-medium text-primary">
                  <ArrowRightCircle className="size-4" />
                  Step {index + 1}
                </p>
                <CardTitle>Next step {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
