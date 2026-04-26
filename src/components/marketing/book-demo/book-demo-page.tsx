import { BookDemoPageHeroSection } from "@/components/marketing/book-demo/page-hero-section"
import { DemoBookingFormSection } from "@/components/marketing/book-demo/demo-booking-form-section"
import { TrustReassuranceSection } from "@/components/marketing/book-demo/trust-reassurance-section"
import { WhatToExpectSection } from "@/components/marketing/book-demo/what-to-expect-section"

export function BookDemoPageContent() {
  return (
    <div>
      <BookDemoPageHeroSection />
      <WhatToExpectSection />
      <DemoBookingFormSection />
      <TrustReassuranceSection />
    </div>
  )
}
