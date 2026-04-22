import Image from "next/image"
import Link from "next/link"

import { marketingNavigation } from "@/lib/constants/navigation"
import { siteConfig } from "@/lib/constants/site"

const contactItems = [
  "support@shepherdos.com",
  "+1 (000) 000-0000",
  "Mon-Fri, 9:00 AM - 5:00 PM",
]

export function MarketingFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-background shadow-sm ring-1 ring-border/70">
                <Image
                  src="/shepherdos-logo.png"
                  alt="ShepherdOS logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                ShepherdOS
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              ShepherdOS is a warm, reliable technology platform designed to help
              churches serve people with greater clarity, consistency, and care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {marketingNavigation.map((item) => (
                <li key={`quick-${item.href}`}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {contactItems.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
          <p className="text-xs text-muted-foreground sm:text-sm">
            {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
