import { MonitorSmartphone, Smartphone } from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { platformCapabilities } from "@/lib/constants/features"

const platformIcons = {
  "Web Application": MonitorSmartphone,
  "Mobile Application": Smartphone,
}

export function PlatformCapabilitiesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform capabilities"
          title="Web and mobile experiences that stay connected."
          description="Run deep operations from desktop and keep ministry execution moving on mobile with one consistent ShepherdOS platform."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {platformCapabilities.map((platformCapability) => (
            <CapabilityCard
              key={platformCapability.platform}
              icon={
                platformIcons[
                  platformCapability.platform as keyof typeof platformIcons
                ]
              }
              title={platformCapability.platform}
              summary={platformCapability.summary}
              points={platformCapability.capabilities}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
