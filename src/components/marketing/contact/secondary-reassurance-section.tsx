import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { contactReassurancePoints } from "@/lib/constants/contact"

export function SecondaryReassuranceSection() {
  return (
    <SectionWrapper density="cta-end">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/90 px-6 py-10 shadow-lg shadow-black/25 backdrop-blur-md sm:px-10">
          <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.14_85/0.18),transparent_66%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-wide text-primary">
                Reassurance
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                You will hear from a team that understands church leadership.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                If you prefer a guided walkthrough instead of form-based follow-up,
                you can book a live demo directly.
              </p>
              <Button asChild className="mt-7" size="lg">
                <Link href="/book-demo">
                  Book Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-5 backdrop-blur-sm">
              <ul className="space-y-3">
                {contactReassurancePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6">
                    <CheckCircle2 className="mt-1 size-4 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
