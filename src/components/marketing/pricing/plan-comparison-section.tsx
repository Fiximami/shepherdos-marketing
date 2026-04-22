import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { planComparisonRows } from "@/lib/constants/pricing"

export function PlanComparisonSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plan comparison"
          title="Compare key capabilities across Starter, Growth, and Enterprise."
          description="Use this quick comparison to evaluate which plan best aligns with your church's current structure and growth goals."
        />

        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-border/70 bg-card/95 shadow-sm md:block">
          <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] border-b border-border/70 bg-muted/35 px-4 py-3 text-sm font-semibold">
            <p>Capability</p>
            <p className="text-center">Starter</p>
            <p className="text-center">Growth</p>
            <p className="text-center">Enterprise</p>
          </div>
          <div>
            {planComparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.7fr_1fr_1fr_1fr] px-4 py-3 text-sm ${
                  index !== planComparisonRows.length - 1
                    ? "border-b border-border/60"
                    : ""
                }`}
              >
                <p className="font-medium">{row.label}</p>
                <p className="text-center text-muted-foreground">{row.starter}</p>
                <p className="text-center text-muted-foreground">{row.growth}</p>
                <p className="text-center text-muted-foreground">{row.enterprise}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {planComparisonRows.map((row) => (
            <article
              key={`mobile-${row.label}`}
              className="rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold">{row.label}</h3>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg bg-muted/40 p-2">
                  <p className="font-medium">Starter</p>
                  <p className="mt-1 text-muted-foreground">{row.starter}</p>
                </div>
                <div className="rounded-lg bg-muted/40 p-2">
                  <p className="font-medium">Growth</p>
                  <p className="mt-1 text-muted-foreground">{row.growth}</p>
                </div>
                <div className="rounded-lg bg-muted/40 p-2">
                  <p className="font-medium">Enterprise</p>
                  <p className="mt-1 text-muted-foreground">{row.enterprise}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
