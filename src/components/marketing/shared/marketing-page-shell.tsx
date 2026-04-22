type MarketingPageShellProps = {
  title: string
  description: string
}

export function MarketingPageShell({
  title,
  description,
}: MarketingPageShellProps) {
  return (
    <section className="flex min-h-[55vh] items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl rounded-3xl border border-border/80 bg-card/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            ShepherdOS Marketing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
