export type PricingTier = {
  name: string
  summary: string
  priceLabel: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    summary: "A practical foundation for growing church teams.",
    priceLabel: "Contact us",
  },
  {
    name: "Growth",
    summary: "Expanded tools for active ministries and multi-team coordination.",
    priceLabel: "Contact us",
  },
  {
    name: "Enterprise",
    summary: "Advanced support and configuration for large church organizations.",
    priceLabel: "Contact us",
  },
]
