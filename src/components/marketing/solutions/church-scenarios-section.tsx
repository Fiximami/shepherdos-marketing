import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { churchScenarios } from "@/lib/constants/solutions"

export function ChurchScenariosSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Church scenarios"
          title="How ShepherdOS solves day-to-day ministry realities."
          description="These common church scenarios show how ShepherdOS turns complexity into clear, repeatable action for pastors, boards, and operations teams."
        />
        <div className="mt-10 space-y-4">
          {churchScenarios.map((scenario) => (
            <Card
              key={scenario.title}
              className="rounded-2xl border-border/70 bg-card/95 shadow-sm"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{scenario.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-muted/35 p-4">
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-6">{scenario.context}</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-primary/5 p-4">
                  <p className="text-xs font-semibold tracking-wide text-primary">
                    ShepherdOS response
                  </p>
                  <p className="mt-2 text-sm leading-6">{scenario.response}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
