import Link from "next/link"

import { marketingNavigation } from "@/lib/constants/navigation"
import { siteConfig } from "@/lib/constants/site"

export function MarketingFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {marketingNavigation.map((item) => (
            <Link
              key={`footer-${item.href}`}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {siteConfig.name}. Built to serve churches
          with clarity and care.
        </p>
      </div>
    </footer>
  )
}
