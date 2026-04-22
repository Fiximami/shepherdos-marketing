import { BookDemoPageHeroSection } from "@/components/marketing/book-demo/page-hero-section"
import { DemoBookingFormSection } from "@/components/marketing/book-demo/demo-booking-form-section"
import { TrustReassuranceSection } from "@/components/marketing/book-demo/trust-reassurance-section"
import { WhatToExpectSection } from "@/components/marketing/book-demo/what-to-expect-section"

export function BookDemoPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_32%,transparent_66%)]" />
      <BookDemoPageHeroSection />
      <WhatToExpectSection />
      <DemoBookingFormSection />
      <TrustReassuranceSection />
    </div>
  )
}
