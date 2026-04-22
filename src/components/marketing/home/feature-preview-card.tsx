import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FeaturePreviewCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeaturePreviewCard({
  icon: Icon,
  title,
  description,
}: FeaturePreviewCardProps) {
  return (
    <Card className="h-full rounded-2xl border-border/70 bg-card/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="pb-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
