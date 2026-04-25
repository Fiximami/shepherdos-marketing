import { cn } from "@/lib/utils"

type SectionVariant = "default" | "band" | "hero"
type SectionDensity = "default" | "relaxed" | "soft-end" | "cta-end" | "none"

type SectionWrapperProps = {
  children: React.ReactNode
  variant?: SectionVariant
  density?: SectionDensity
  className?: string
}

const variantClass: Record<SectionVariant, string> = {
  default: "",
  band: "border-y border-white/[0.06] bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent",
  hero: "relative overflow-hidden",
}

const densityClass: Record<SectionDensity, string> = {
  default: "py-16 sm:py-20",
  relaxed: "py-18 sm:py-22",
  "soft-end": "pb-16 pt-6 sm:pb-20",
  "cta-end": "pb-18 pt-8 sm:pb-22",
  none: "",
}

export function SectionWrapper({
  children,
  variant = "default",
  density = "default",
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        densityClass[density],
        variantClass[variant],
        className
      )}
    >
      {children}
    </section>
  )
}
