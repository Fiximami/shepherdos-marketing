import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { pricingFaqItems } from "@/lib/constants/pricing"

export function FaqSnippetSection() {
  return (
    <SectionWrapper variant="band">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ snippet"
          title="Questions churches often ask before choosing a plan."
          description="Quick answers to help pastors, church administrators, and finance leaders make an informed decision."
        />
        <div className="mt-8 rounded-3xl border border-border/70 bg-card/95 px-5 py-3 shadow-sm sm:px-6">
          <Accordion type="single" collapsible>
            {pricingFaqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  )
}
