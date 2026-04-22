import { AlertCircle, Clock3, FileWarning, HandHeart, LayoutGrid, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { homePainPoints } from "@/components/marketing/home/content"
import { SectionHeading } from "@/components/marketing/home/section-heading"

const painPointIcons = [
  LayoutGrid,
  HandHeart,
  FileWarning,
  Users,
  Clock3,
  AlertCircle,
]

export function ProblemSection() {
  return (
    <section className="bg-muted/30 py-18 sm:py-22">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The challenge"
          title="Church teams carry deep responsibility with fragmented tools."
          description="From pastors to finance officers, leaders are expected to move quickly and steward wisely. Yet many churches still operate through disconnected systems and manual work."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePainPoints.map((painPoint, index) => {
            const Icon = painPointIcons[index]
            return (
              <Card
                key={painPoint.title}
                className="rounded-2xl border-border/70 bg-card/90 shadow-sm"
              >
                <CardHeader className="pb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <Icon className="size-4" />
                  </span>
                  <CardTitle>{painPoint.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {painPoint.description}
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
