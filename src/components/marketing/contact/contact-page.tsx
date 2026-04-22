import { ContactFormSection } from "@/components/marketing/contact/contact-form-section"
import { ContactInfoSection } from "@/components/marketing/contact/contact-info-section"
import { ContactPageHeroSection } from "@/components/marketing/contact/page-hero-section"
import { SecondaryReassuranceSection } from "@/components/marketing/contact/secondary-reassurance-section"

export function ContactPageContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,64,175,0.03)_32%,transparent_65%)]" />
      <ContactPageHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <SecondaryReassuranceSection />
    </div>
  )
}
