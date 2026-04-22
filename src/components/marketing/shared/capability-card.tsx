import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type CapabilityCardProps = {
  icon?: LucideIcon
  title: string
  summary: string
  points: string[]
}

export function CapabilityCard({
  icon: Icon,
  title,
  summary,
  points,
}: CapabilityCardProps) {
  return (
    <Card className="h-full rounded-2xl border-border/70 bg-card/95 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="pb-2">
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" />
          </span>
        ) : null}
        <CardTitle>{title}</CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{summary}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="rounded-lg border border-border/60 bg-muted/35 px-3 py-2 text-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
