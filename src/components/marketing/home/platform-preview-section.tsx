import { MonitorSmartphone, Smartphone, TabletSmartphone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/home/section-heading"

export function PlatformPreviewSection() {
  return (
    <section className="bg-muted/30 py-18 sm:py-22">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform preview"
          title="One ShepherdOS experience across web and mobile."
          description="Your team can lead from the office or on the move with synchronized workflows that stay consistent across devices."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card className="rounded-3xl border-border/70 bg-card/90 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Web Application</Badge>
                <MonitorSmartphone className="size-5 text-primary" />
              </div>
              <CardTitle className="text-xl">
                Command center for church operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">Attendance</p>
                    <p className="mt-1 text-xl font-semibold">1,248</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">Active teams</p>
                    <p className="mt-1 text-xl font-semibold">19</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">Open tasks</p>
                    <p className="mt-1 text-xl font-semibold">36</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/70 bg-card/90 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Mobile Application</Badge>
                <Smartphone className="size-5 text-primary" />
              </div>
              <CardTitle className="text-xl">
                Ministry execution in the field
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TabletSmartphone className="size-4" />
                    Mobile workflow
                  </div>
                  <p className="mt-3 text-sm leading-6">
                    Capture notes, update follow-ups, and coordinate teams from
                    anywhere.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background p-4">
                  <p className="text-xs text-muted-foreground">Today</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>3 guest follow-ups assigned</li>
                    <li>2 care visits logged</li>
                    <li>6 volunteer confirmations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
