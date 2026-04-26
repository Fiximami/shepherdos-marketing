import { ContactFormSection } from "@/components/marketing/contact/contact-form-section"
import { ContactInfoSection } from "@/components/marketing/contact/contact-info-section"
import { ContactPageHeroSection } from "@/components/marketing/contact/page-hero-section"
import { SecondaryReassuranceSection } from "@/components/marketing/contact/secondary-reassurance-section"

export function ContactPageContent() {
  return (
    <div>
      <ContactPageHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <SecondaryReassuranceSection />
    </div>
  )
}
