import type { Metadata } from "next"

import { MarketingShell } from "@/components/marketing/layout/marketing-shell"
import { siteConfig } from "@/lib/constants/site"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

type MarketingLayoutProps = {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingShell>{children}</MarketingShell>
}
