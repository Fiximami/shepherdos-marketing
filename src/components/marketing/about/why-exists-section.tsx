import { Lightbulb, Workflow } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { whyShepherdosExists } from "@/lib/constants/about"

export function WhyExistsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why ShepherdOS exists"
          title="Church leadership has become more complex, but tools often have not."
          description="ShepherdOS was created to bridge ministry care and modern operations with one coherent platform built specifically for churches."
        />
        <Card className="mt-10 rounded-3xl border-border/70 bg-card/95 shadow-sm">
          <CardHeader>
            <p className="flex items-center gap-2 text-sm font-medium text-primary">
              <Lightbulb className="size-4" />
              The core challenge
            </p>
            <CardTitle>Disconnected systems create avoidable ministry friction.</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {whyShepherdosExists.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/35 px-4 py-3 text-sm leading-6"
                >
                  <Workflow className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
