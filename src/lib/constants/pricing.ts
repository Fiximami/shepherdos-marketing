export type PricingTier = {
  name: "Starter" | "Growth" | "Enterprise"
  summary: string
  priceLabel: string
  monthlyLabel: string
  annualLabel: string
  highlighted?: boolean
  ctaLabel: string
  ctaHref: string
  features: string[]
}

export type PlanComparisonRow = {
  label: string
  starter: string
  growth: string
  enterprise: string
}

export type PricingFaqItem = {
  question: string
  answer: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    summary:
      "A practical foundation for churches streamlining operations and member care.",
    priceLabel: "$79",
    monthlyLabel: "$79/month",
    annualLabel: "$67/month billed annually",
    ctaLabel: "Start Free Trial",
    ctaHref: "/start-free-trial",
    features: [
      "Core church management workspace",
      "Member and household records",
      "Attendance and event tracking",
      "Standard communication tools",
    ],
  },
  {
    name: "Growth",
    summary:
      "Expanded capabilities for active ministries, stronger follow-up, and team coordination.",
    priceLabel: "$169",
    monthlyLabel: "$169/month",
    annualLabel: "$144/month billed annually",
    highlighted: true,
    ctaLabel: "Book Demo",
    ctaHref: "/book-demo",
    features: [
      "Everything in Starter",
      "Advanced ministry workflows",
      "Role-based dashboards",
      "Enhanced operational reporting",
    ],
  },
  {
    name: "Enterprise",
    summary:
      "Advanced controls and support for large, multi-branch, or highly structured churches.",
    priceLabel: "Custom",
    monthlyLabel: "Custom pricing",
    annualLabel: "Tailored annual plans",
    ctaLabel: "Book Demo",
    ctaHref: "/book-demo",
    features: [
      "Everything in Growth",
      "Multi-branch structure support",
      "Custom onboarding alignment",
      "Priority partnership support",
    ],
  },
]

export const planComparisonRows: PlanComparisonRow[] = [
  {
    label: "Member and household management",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    label: "Attendance and event operations",
    starter: "Included",
    growth: "Included",
    enterprise: "Included",
  },
  {
    label: "Finance reporting visibility",
    starter: "Core",
    growth: "Advanced",
    enterprise: "Advanced + tailored",
  },
  {
    label: "Ministry workflow automation",
    starter: "Basic",
    growth: "Expanded",
    enterprise: "Expanded + custom",
  },
  {
    label: "Role-based leadership dashboards",
    starter: "Limited",
    growth: "Full",
    enterprise: "Full",
  },
  {
    label: "Multi-branch coordination",
    starter: "Not included",
    growth: "Optional",
    enterprise: "Primary",
  },
  {
    label: "Support model",
    starter: "Standard",
    growth: "Priority",
    enterprise: "Priority + strategic",
  },
]

export const pricingFaqItems: PricingFaqItem[] = [
  {
    question: "Can we start small and upgrade later?",
    answer:
      "Yes. Many churches begin with Starter and move to Growth as teams, ministries, and reporting needs expand.",
  },
  {
    question: "Is ShepherdOS suitable for finance leaders and boards?",
    answer:
      "ShepherdOS is built with financial accountability in mind, offering clear visibility and structured operational reporting for leadership review.",
  },
  {
    question: "Do multi-branch churches need Enterprise?",
    answer:
      "Enterprise is usually the best fit for churches managing multiple campuses, centralized oversight, and tailored governance requirements.",
  },
  {
    question: "Is onboarding support available?",
    answer:
      "Yes. We provide guided onboarding pathways so pastors, administrators, and ministry teams can adopt ShepherdOS with confidence.",
  },
]
