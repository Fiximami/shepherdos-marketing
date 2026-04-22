export const contactHero = {
  eyebrow: "Contact ShepherdOS",
  title: "Let's discuss how ShepherdOS can support your church.",
  description:
    "Connect with our team for ministry-fit guidance, platform questions, and practical next steps tailored to your church operations.",
}

export type ContactInfoItem = {
  title: string
  detail: string
  helper: string
}

export const contactInfoItems: ContactInfoItem[] = [
  {
    title: "Email",
    detail: "hello@shepherdos.com",
    helper: "Best for general questions and partnership inquiries.",
  },
  {
    title: "Phone",
    detail: "+1 (000) 000-0000",
    helper: "Available Monday to Friday, 9:00 AM to 5:00 PM.",
  },
  {
    title: "Headquarters",
    detail: "Remote-first support team",
    helper: "Serving churches across regions and time zones.",
  },
]

export const contactReassurancePoints = [
  "Response from a real team member",
  "Church-aware guidance from first conversation",
  "No pressure, just practical direction",
]
