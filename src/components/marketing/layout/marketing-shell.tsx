import { MarketingFooter } from "@/components/marketing/layout/footer"
import { MarketingNavbar } from "@/components/marketing/layout/navbar"

type MarketingShellProps = {
  children: React.ReactNode
}

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/30">
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  )
}
