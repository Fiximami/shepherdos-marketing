import { CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { demoExpectations } from "@/lib/constants/book-demo"

export function WhatToExpectSection() {
  return (
    <SectionWrapper variant="band">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What to expect"
          title="A calm, practical demo experience for church decision-makers."
          description="Your session is designed to clarify platform fit and answer the questions that matter most for your team."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {demoExpectations.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <p className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 className="size-4" />
                  Demo value
                </p>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
