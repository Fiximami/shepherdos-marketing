import Link from "next/link"

import { Button } from "@/components/ui/button"
import { marketingCtaNavigation, marketingNavigation } from "@/lib/constants/navigation"

export function MarketingNavbar() {
  const [bookDemoLink, startTrialLink] = marketingCtaNavigation

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          ShepherdOS
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {marketingNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" asChild>
            <Link href={bookDemoLink.href}>{bookDemoLink.label}</Link>
          </Button>
          <Button asChild>
            <Link href={startTrialLink.href}>{startTrialLink.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
