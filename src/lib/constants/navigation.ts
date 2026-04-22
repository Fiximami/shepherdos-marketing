export type MarketingNavItem = {
  label: string
  href: string
}

export const marketingNavigation: MarketingNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const marketingCtaNavigation: MarketingNavItem[] = [
  { label: "Book Demo", href: "/book-demo" },
  { label: "Start Free Trial", href: "/start-free-trial" },
]
