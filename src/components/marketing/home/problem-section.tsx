import type { LucideIcon } from "lucide-react"
import {
  ChartSpline,
  ClipboardList,
  Files,
  Inbox,
  Landmark,
  MessagesSquare,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { homePainPoints } from "@/components/marketing/home/content"
import { SectionHeading } from "@/components/marketing/home/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

const painPointIcons: LucideIcon[] = [
  Files,
  Inbox,
  ClipboardList,
  Landmark,
  MessagesSquare,
  ChartSpline,
]

export function ProblemSection() {
  return (
    <SectionWrapper variant="band" density="relaxed">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real challenges"
          title="When systems drift, care and clarity are harder to sustain."
          description="Most teams are not short on heart—they are short on one steady place for people, money, and communication to live together."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {homePainPoints.map((painPoint, index) => {
            const Icon = painPointIcons[index]
            return (
              <Card
                key={painPoint.title}
                className="h-full border-transparent bg-gradient-to-b from-card/80 to-card/55 shadow-lg shadow-black/30 ring-1 ring-white/[0.07] backdrop-blur-md transition-[transform,box-shadow,ring-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40 hover:ring-white/[0.11]"
              >
                <CardHeader className="space-y-4 pb-2">
                  <span
                    className="flex size-9 items-center justify-center rounded-lg bg-white/[0.06] text-muted-foreground ring-1 ring-white/[0.06] transition-colors duration-300 group-hover/card:bg-primary/10 group-hover/card:text-primary/85"
                    aria-hidden
                  >
                    <Icon className="size-4 stroke-[1.5]" />
                  </span>
                  <CardTitle className="text-base font-medium leading-snug tracking-tight text-foreground/95">
                    {painPoint.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {painPoint.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
