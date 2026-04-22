import { HeartHandshake, MessageCircleHeart, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { contactHero } from "@/lib/constants/contact"

export function ContactPageHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.14),transparent_66%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contactHero.eyebrow}
          title={contactHero.title}
          description={contactHero.description}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <HeartHandshake className="size-4 text-primary" />
              Welcoming conversations
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We listen first and recommend what genuinely fits your church context.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-primary" />
              Trustworthy communication
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear, respectful guidance for pastors, administrators, and finance leaders.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2 text-sm font-medium">
              <MessageCircleHeart className="size-4 text-primary" />
              Practical next steps
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Whether you are exploring or ready to move, we can help you map a path.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
