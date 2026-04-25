"use client"

import { useMemo, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/marketing/shared/section-heading"
import { SectionWrapper } from "@/components/marketing/shared/section-wrapper"

type ContactFormFields = {
  name: string
  email: string
  churchName: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>

const INITIAL_FIELDS: ContactFormFields = {
  name: "",
  email: "",
  churchName: "",
  message: "",
}

function validateFields(values: ContactFormFields): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) errors.name = "Please enter your name."
  if (!values.email.trim()) {
    errors.email = "Please enter your email address."
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }
  if (!values.churchName.trim())
    errors.churchName = "Please enter your church name."
  if (!values.message.trim()) {
    errors.message = "Please share a short message."
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters."
  }

  return errors
}

export function ContactFormSection() {
  const [fields, setFields] = useState<ContactFormFields>(INITIAL_FIELDS)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success">("idle")

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  const handleFieldChange =
    (field: keyof ContactFormFields) =>
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
    <SectionWrapper>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact form"
          title="Tell us about your church and what you are looking for."
          description="Share your context so we can provide practical guidance and relevant next steps."
        />
        <Card className="mt-10 rounded-3xl border-white/10 bg-card/90 shadow-lg shadow-black/25 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl">Start the conversation</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={handleFieldChange("name")}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleFieldChange("email")}
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
              </div>

              <div className="space-y-2">
                <label htmlFor="churchName" className="text-sm font-medium">
                  Church Name
                </label>
                <Input
                  id="churchName"
                  name="churchName"
                  value={fields.churchName}
                  onChange={handleFieldChange("churchName")}
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

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleFieldChange("message")}
                  placeholder="Tell us what your church needs and what you would like to explore."
                  className="min-h-32"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  No backend is connected yet. This form currently uses a mock
                  submit flow.
                </p>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {submitState === "success" ? (
                <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700">
                  Thanks for reaching out. Our team will respond shortly.
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
    </SectionWrapper>
  )
}
