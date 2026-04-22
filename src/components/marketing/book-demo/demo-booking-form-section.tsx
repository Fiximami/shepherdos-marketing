"use client"

import { useMemo, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/marketing/shared/section-heading"

type DemoFormFields = {
  fullName: string
  churchName: string
  email: string
  phone: string
  churchSize: string
  preferredDate: string
  preferredTime: string
  notes: string
}

type DemoFormErrors = Partial<Record<keyof DemoFormFields, string>>

const INITIAL_FIELDS: DemoFormFields = {
  fullName: "",
  churchName: "",
  email: "",
  phone: "",
  churchSize: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
}

const CHURCH_SIZE_OPTIONS = [
  "1-100 members",
  "101-300 members",
  "301-700 members",
  "701-1500 members",
  "1500+ members",
]

function validateFields(values: DemoFormFields): DemoFormErrors {
  const errors: DemoFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phonePattern = /^[0-9()+\-\s]{7,}$/

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name."
  if (!values.churchName.trim())
    errors.churchName = "Please enter your church name."
  if (!values.email.trim()) {
    errors.email = "Please enter your email address."
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number."
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number."
  }
  if (!values.churchSize) errors.churchSize = "Please select your church size."
  if (!values.preferredDate) errors.preferredDate = "Please pick a preferred date."
  if (!values.preferredTime) errors.preferredTime = "Please pick a preferred time."
  if (!values.notes.trim()) {
    errors.notes = "Please share a short context note."
  } else if (values.notes.trim().length < 20) {
    errors.notes = "Please provide at least 20 characters."
  }

  return errors
}

export function DemoBookingFormSection() {
  const [fields, setFields] = useState<DemoFormFields>(INITIAL_FIELDS)
  const [errors, setErrors] = useState<DemoFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success">("idle")

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  const handleInputChange =
    (field: keyof DemoFormFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setFields((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => {
        if (!prev[field]) return prev
        const next = { ...prev }
        delete next[field]
        return next
      })
    }

  const handleSelectChange =
    (field: keyof DemoFormFields) => (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value
      setFields((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => {
        if (!prev[field]) return prev
        const next = { ...prev }
        delete next[field]
        return next
      })
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState("idle")

    const validationErrors = validateFields(fields)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitState("success")
    setFields(INITIAL_FIELDS)
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Demo booking form"
          title="Share your details and preferred schedule."
          description="This frontend-only form captures your request so we can coordinate the right demo conversation."
        />
        <Card className="mt-10 rounded-3xl border-border/70 bg-card/95 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Request your live demo</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={fields.fullName}
                    onChange={handleInputChange("fullName")}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? "full-name-error" : undefined
                    }
                  />
                  {errors.fullName ? (
                    <p id="full-name-error" className="text-xs text-destructive">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="churchName" className="text-sm font-medium">
                    Church Name
                  </label>
                  <Input
                    id="churchName"
                    name="churchName"
                    value={fields.churchName}
                    onChange={handleInputChange("churchName")}
                    placeholder="Your church name"
                    aria-invalid={Boolean(errors.churchName)}
                    aria-describedby={
                      errors.churchName ? "church-name-error" : undefined
                    }
                  />
                  {errors.churchName ? (
                    <p id="church-name-error" className="text-xs text-destructive">
                      {errors.churchName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleInputChange("email")}
                    placeholder="you@church.org"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={fields.phone}
                    onChange={handleInputChange("phone")}
                    placeholder="+1 (000) 000-0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="text-xs text-destructive">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2 sm:col-span-1">
                  <label htmlFor="churchSize" className="text-sm font-medium">
                    Church Size
                  </label>
                  <select
                    id="churchSize"
                    name="churchSize"
                    value={fields.churchSize}
                    onChange={handleSelectChange("churchSize")}
                    className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
                    aria-invalid={Boolean(errors.churchSize)}
                    aria-describedby={
                      errors.churchSize ? "church-size-error" : undefined
                    }
                  >
                    <option value="">Select church size</option>
                    {CHURCH_SIZE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.churchSize ? (
                    <p id="church-size-error" className="text-xs text-destructive">
                      {errors.churchSize}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="text-sm font-medium">
                    Preferred Date
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={fields.preferredDate}
                    onChange={handleInputChange("preferredDate")}
                    aria-invalid={Boolean(errors.preferredDate)}
                    aria-describedby={
                      errors.preferredDate ? "preferred-date-error" : undefined
                    }
                  />
                  {errors.preferredDate ? (
                    <p id="preferred-date-error" className="text-xs text-destructive">
                      {errors.preferredDate}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="text-sm font-medium">
                    Preferred Time
                  </label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={fields.preferredTime}
                    onChange={handleInputChange("preferredTime")}
                    aria-invalid={Boolean(errors.preferredTime)}
                    aria-describedby={
                      errors.preferredTime ? "preferred-time-error" : undefined
                    }
                  />
                  {errors.preferredTime ? (
                    <p id="preferred-time-error" className="text-xs text-destructive">
                      {errors.preferredTime}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Notes
                </label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={fields.notes}
                  onChange={handleInputChange("notes")}
                  placeholder="Share context: current tools, key ministry priorities, or what you want to see in the demo."
                  className="min-h-32"
                  aria-invalid={Boolean(errors.notes)}
                  aria-describedby={errors.notes ? "notes-error" : undefined}
                />
                {errors.notes ? (
                  <p id="notes-error" className="text-xs text-destructive">
                    {errors.notes}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  This is a frontend-only booking form with a mock submit state.
                </p>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>
              </div>

              {submitState === "success" ? (
                <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700">
                  Demo request received. Our team will contact you soon.
                </p>
              ) : null}

              {hasErrors ? (
                <p className="text-xs text-muted-foreground">
                  Please correct the highlighted fields before submitting.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
