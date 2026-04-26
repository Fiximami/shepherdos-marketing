import { Building2, Cross, ShieldUser, UserCog } from "lucide-react"

import { CapabilityCard } from "@/components/marketing/shared/capability-card"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"
import { roleCapabilities } from "@/lib/constants/features"

const roleIcons = {
  Pastors: Cross,
  Administrators: UserCog,
  "Church Founders": Building2,
  "Decision-Makers": ShieldUser,
}

export function RoleBasedCapabilitySection() {
  return (
    <SectionWrapper>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Role-based capabilities"
          title="Purpose-built for each leadership role in your church."
          description="ShepherdOS gives every team the context they need while preserving alignment across ministries and decision layers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roleCapabilities.map((roleCapability) => (
            <CapabilityCard
              key={roleCapability.role}
              icon={roleIcons[roleCapability.role as keyof typeof roleIcons]}
              title={roleCapability.role}
              summary={roleCapability.summary}
              points={roleCapability.capabilities}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
