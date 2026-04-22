export type SolutionCategory = {
  name:
    | "Growing Churches"
    | "Multi-Branch Churches"
    | "Financial Accountability"
    | "Member Engagement"
    | "Churches Going Digital"
  summary: string
  outcomes: string[]
}

export type ChurchScenario = {
  title: string
  context: string
  response: string
}

export type GrowthCapability = {
  title: string
  summary: string
  points: string[]
}

export const solutionCategories: SolutionCategory[] = [
  {
    name: "Growing Churches",
    summary:
      "Move from reactive ministry administration to repeatable systems that scale with your congregation.",
    outcomes: [
      "Standardized ministry workflows",
      "Clear ownership across teams",
      "Operational clarity as attendance grows",
    ],
  },
  {
    name: "Multi-Branch Churches",
    summary:
      "Coordinate multiple campuses with local flexibility and centralized leadership visibility.",
    outcomes: [
      "Cross-branch reporting alignment",
      "Shared processes with branch-level autonomy",
      "Consistent member experience across locations",
    ],
  },
  {
    name: "Financial Accountability",
    summary:
      "Strengthen trust with transparent processes for giving visibility, reporting, and stewardship oversight.",
    outcomes: [
      "Clear giving and fund tracking",
      "Audit-friendly workflows",
      "Finance-ready leadership reporting",
    ],
  },
  {
    name: "Member Engagement",
    summary:
      "Help people feel known through timely follow-up, care journeys, and stronger ministry participation.",
    outcomes: [
      "Structured first-time guest follow-up",
      "Volunteer and discipleship engagement tracking",
      "Improved care response coordination",
    ],
  },
  {
    name: "Churches Going Digital",
    summary:
      "Transition confidently to modern digital operations without losing the warmth and values of your church culture.",
    outcomes: [
      "Unified digital operations foundation",
      "Simpler communication touchpoints",
      "Easier adoption for teams and members",
    ],
  },
]

export const churchScenarios: ChurchScenario[] = [
  {
    title: "A pastor needs faster follow-up after Sunday",
    context:
      "Guest details, prayer requests, and care notes are spread across disconnected tools.",
    response:
      "ShepherdOS centralizes guest and care workflows so leaders can assign follow-up quickly and track completion.",
  },
  {
    title: "A church board asks for clearer ministry and finance visibility",
    context:
      "Leadership reports are delayed and require manual consolidation from multiple systems.",
    response:
      "ShepherdOS provides structured operational and giving visibility in one place for stronger board-level decisions.",
  },
  {
    title: "An administrator is overwhelmed by event and volunteer coordination",
    context:
      "Serving schedules, event planning, and communications are difficult to keep in sync.",
    response:
      "ShepherdOS connects events, teams, and communication flows so administrative execution stays reliable.",
  },
]

export const growthCapabilities: GrowthCapability[] = [
  {
    title: "Branch-level operations with central oversight",
    summary:
      "Balance local ministry context with unified leadership standards across campuses.",
    points: [
      "Shared framework for all locations",
      "Branch-aware reporting and visibility",
      "Consistent governance structures",
    ],
  },
  {
    title: "Scalable leadership decision support",
    summary:
      "Give executive teams a dependable view of church health and operational momentum.",
    points: [
      "Leadership-focused growth signals",
      "Cross-team accountability tracking",
      "Reliable data for strategic planning",
    ],
  },
  {
    title: "Member experience continuity as you grow",
    summary:
      "Keep care and engagement consistent even as congregation size and branch complexity expand.",
    points: [
      "Unified member journey context",
      "Stronger follow-up consistency",
      "Aligned ministry touchpoints across branches",
    ],
  },
]
