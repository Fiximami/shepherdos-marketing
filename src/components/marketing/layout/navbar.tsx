"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { marketingCtaNavigation, marketingNavigation } from "@/lib/constants/navigation"

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

export function MarketingNavbar() {
  const pathname = usePathname()
  const [bookDemoLink, startTrialLink] = marketingCtaNavigation

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl p-1 transition hover:bg-white/[0.06]"
          aria-label="ShepherdOS home"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white/[0.06] shadow-md shadow-black/30 ring-1 ring-white/15">
            <Image
              src="/shepherdos-logo.png"
              alt="ShepherdOS logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-none">
            <p className="text-lg font-semibold tracking-tight">ShepherdOS</p>
            <p className="text-xs text-muted-foreground">Church Technology</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {marketingNavigation.map((item) => {
            const active = isActiveRoute(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/15 text-primary shadow-sm shadow-primary/10"
                    : "text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href={bookDemoLink.href}>{bookDemoLink.label}</Link>
          </Button>
          <Button asChild>
            <Link href={startTrialLink.href}>{startTrialLink.label}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86%] max-w-sm border-l border-white/10 bg-background/95 p-0 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-white/10 px-5 py-4">
                <SheetTitle className="text-left">ShepherdOS</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 p-4">
                {marketingNavigation.map((item) => {
                  const active = isActiveRoute(pathname, item.href)
                  return (
                    <SheetClose key={`mobile-${item.href}`} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          active
                            ? "bg-primary/15 text-primary"
                            : "text-foreground/90 hover:bg-white/[0.08]"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>
              <div className="mt-auto space-y-2 border-t border-white/10 p-4">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={bookDemoLink.href}>{bookDemoLink.label}</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full" asChild>
                    <Link href={startTrialLink.href}>{startTrialLink.label}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
