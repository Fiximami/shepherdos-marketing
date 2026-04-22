import { Building2, Mail, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { contactInfoItems } from "@/lib/constants/contact"

const infoIcons = [Mail, Phone, Building2]

export function ContactInfoSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact information"
          title="Reach the ShepherdOS team through the channel that works best for you."
          description="Whether you are evaluating platform fit or planning implementation, we are here to help your church take confident next steps."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactInfoItems.map((item, index) => {
            const Icon = infoIcons[index]
            return (
              <Card
                key={item.title}
                className="rounded-2xl border-border/70 bg-card/95 shadow-sm"
              >
                <CardHeader>
                  <p className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Icon className="size-4" />
                    {item.title}
                  </p>
                  <CardTitle>{item.detail}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.helper}
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
