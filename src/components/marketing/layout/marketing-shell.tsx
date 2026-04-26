import { MarketingFooter } from "@/components/marketing/layout/footer"
import { MarketingNavbar } from "@/components/marketing/layout/navbar"

type MarketingShellProps = {
  children: React.ReactNode
}

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="marketing-canvas flex min-h-screen flex-col">
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  )
}
