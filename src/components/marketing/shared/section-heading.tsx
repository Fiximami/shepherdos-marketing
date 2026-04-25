type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left"

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  )
}
