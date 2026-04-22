export type FeatureHighlight = {
  title: string
  description: string
}

export type FeatureCategory = {
  name:
    | "Church Management"
    | "Membership Management"
    | "Attendance Management"
    | "Finance Management"
    | "Communication"
    | "Events"
    | "Engagement"
    | "Analytics"
    | "Settings & Branding"
  summary: string
  capabilities: string[]
}

export type RoleCapability = {
  role: string
  summary: string
  capabilities: string[]
}

export type PlatformCapability = {
  platform: string
  summary: string
  capabilities: string[]
}

export const featureHighlights: FeatureHighlight[] = [
  {
    title: "Unified Church Operations",
    description:
      "Bring communication, administration, and ministry workflows into one consistent platform.",
  },
  {
    title: "People-First Member Experience",
    description:
      "Design interactions that feel personal, helpful, and easy for every generation in your church.",
  },
  {
    title: "Reliable Ministry Insights",
    description:
      "See what is working across teams with clear visibility into engagement and follow-up.",
  },
]

export const featureCategories: FeatureCategory[] = [
  {
    name: "Church Management",
    summary:
      "Coordinate ministries, teams, and operational workflows in one organized command center.",
    capabilities: [
      "Multi-team workspace management",
      "Ministry workflows and ownership tracking",
      "Role-aware task coordination",
    ],
  },
  {
    name: "Membership Management",
    summary:
      "Maintain structured member and household records with context for meaningful care.",
    capabilities: [
      "Member and family profiles",
      "Lifecycle notes and care history",
      "Segmentation for targeted follow-up",
    ],
  },
  {
    name: "Attendance Management",
    summary:
      "Track attendance trends across services, groups, and ministry programs with clarity.",
    capabilities: [
      "Service and group attendance logs",
      "Consistency and re-engagement indicators",
      "Attendance insight by ministry area",
    ],
  },
  {
    name: "Finance Management",
    summary:
      "Support responsible stewardship with transparent workflows for giving and reporting.",
    capabilities: [
      "Giving and contribution records",
      "Fund and category visibility",
      "Finance-ready summary reporting",
    ],
  },
  {
    name: "Communication",
    summary:
      "Keep your church informed and cared for through purposeful, timely communication tools.",
    capabilities: [
      "Broadcast and segmented messaging",
      "Ministry-specific announcements",
      "Follow-up reminders for care teams",
    ],
  },
  {
    name: "Events",
    summary:
      "Plan and manage church events with shared ownership and coordinated execution.",
    capabilities: [
      "Event planning workflows",
      "Registration and participation tracking",
      "Team responsibilities and checklists",
    ],
  },
  {
    name: "Engagement",
    summary:
      "Strengthen community involvement by tracking and nurturing meaningful participation.",
    capabilities: [
      "Volunteer engagement tracking",
      "Discipleship journey touchpoints",
      "Care and connection follow-up cues",
    ],
  },
  {
    name: "Analytics",
    summary:
      "Enable stronger ministry decisions with clear, practical visibility into church activity.",
    capabilities: [
      "Leadership-friendly dashboards",
      "Cross-ministry performance snapshots",
      "Trend visibility across key indicators",
    ],
  },
  {
    name: "Settings & Branding",
    summary:
      "Configure ShepherdOS to fit your church identity, governance, and operational structure.",
    capabilities: [
      "Workspace configuration controls",
      "Brand-aware interface settings",
      "Structured role and permission setup",
    ],
  },
]

export const roleCapabilities: RoleCapability[] = [
  {
    role: "Pastors",
    summary:
      "Stay close to people and ministry priorities with better visibility into care and engagement.",
    capabilities: [
      "Care journey insights",
      "Ministry health snapshots",
      "Follow-up clarity across teams",
    ],
  },
  {
    role: "Administrators",
    summary:
      "Run day-to-day operations with less friction and stronger process consistency.",
    capabilities: [
      "Workflow coordination tools",
      "Member and event operations",
      "Cross-team activity oversight",
    ],
  },
  {
    role: "Church Founders",
    summary:
      "Build scalable foundations early with structure that supports long-term growth.",
    capabilities: [
      "Operational standardization",
      "Team role clarity",
      "Growth-focused visibility",
    ],
  },
  {
    role: "Decision-Makers",
    summary:
      "Make strategic choices with confidence using dependable, unified operational insight.",
    capabilities: [
      "Executive-level dashboards",
      "Ministry and finance alignment",
      "Performance trend context",
    ],
  },
]

export const platformCapabilities: PlatformCapability[] = [
  {
    platform: "Web Application",
    summary:
      "A complete workspace for structured church operations, leadership visibility, and team collaboration.",
    capabilities: [
      "Comprehensive operational dashboard",
      "Multi-team management workflows",
      "Administration and reporting tools",
    ],
  },
  {
    platform: "Mobile Application",
    summary:
      "On-the-go execution for ministry teams who need fast access to tasks, updates, and member context.",
    capabilities: [
      "Quick follow-up actions",
      "Volunteer and team updates",
      "Mobile-ready engagement workflows",
    ],
  },
]
