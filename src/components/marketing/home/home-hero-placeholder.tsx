import { featureHighlights } from "@/lib/constants/features"

export function HomeHeroPlaceholder() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-sm sm:p-10">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          Welcome to ShepherdOS
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          A humane platform for modern church ministry and operations.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          This is a starter home section. The full marketing narrative, visuals,
          and conversion content will be added in the next phase.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border/70 bg-background p-5 shadow-sm"
            >
              <h2 className="text-base font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
