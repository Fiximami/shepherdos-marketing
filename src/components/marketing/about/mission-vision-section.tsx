import { Compass, Target } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { missionVision } from "@/lib/constants/about"

export function MissionVisionSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mission and vision"
          title="Why ShepherdOS is being built."
          description="We believe church leaders deserve technology that strengthens ministry outcomes while honoring people, trust, and spiritual purpose."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card className="rounded-2xl border-border/70 bg-card/95 shadow-sm">
            <CardHeader>
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Target className="size-4" />
                Mission
              </p>
              <CardTitle>Serve ministry with practical excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {missionVision.mission}
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-border/70 bg-card/95 shadow-sm">
            <CardHeader>
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Compass className="size-4" />
                Vision
              </p>
              <CardTitle>Help churches lead confidently at scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {missionVision.vision}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
