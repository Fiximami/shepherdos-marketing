"use client"

import { useMemo, useState } from "react"
import type { ChangeEvent, ComponentProps, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionHeading } from "@/components/marketing/shared/section-heading"

type TrialFormFields = {
  churchName: string
  adminFullName: string
  adminEmail: string
  phone: string
  denomination: string
  country: string
  city: string
  numberOfMembers: string
  password: string
  confirmPassword: string
}

type TrialFormErrors = Partial<Record<keyof TrialFormFields, string>>

const INITIAL_FIELDS: TrialFormFields = {
  churchName: "",
  adminFullName: "",
  adminEmail: "",
  phone: "",
  denomination: "",
  country: "",
  city: "",
  numberOfMembers: "",
  password: "",
  confirmPassword: "",
}

function validateFields(values: TrialFormFields): TrialFormErrors {
  const errors: TrialFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phonePattern = /^[0-9()+\-\s]{7,}$/

  if (!values.churchName.trim())
    errors.churchName = "Please enter your church name."
  if (!values.adminFullName.trim())
    errors.adminFullName = "Please enter the admin full name."
  if (!values.adminEmail.trim()) {
    errors.adminEmail = "Please enter the admin email."
  } else if (!emailPattern.test(values.adminEmail.trim())) {
    errors.adminEmail = "Please enter a valid email address."
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number."
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number."
  }
  if (!values.denomination.trim())
    errors.denomination = "Please enter denomination information."
  if (!values.country.trim()) errors.country = "Please enter country."
  if (!values.city.trim()) errors.city = "Please enter city."
  if (!values.numberOfMembers.trim()) {
    errors.numberOfMembers = "Please enter number of members."
  } else if (Number.isNaN(Number(values.numberOfMembers.trim()))) {
    errors.numberOfMembers = "Members must be a number."
  }
  if (!values.password) {
    errors.password = "Please create a password."
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters."
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password."
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match."
  }

  return errors
}

export function TrialSignupFormSection() {
  const [fields, setFields] = useState<TrialFormFields>(INITIAL_FIELDS)
  const [errors, setErrors] = useState<TrialFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success">("idle")

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  const handleChange =
    (field: keyof TrialFormFields) => (event: ChangeEvent<HTMLInputElement>) => {
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
          eyebrow="Trial signup form"
          title="Set up your trial request in one structured step."
          description="This frontend-only form captures your setup details and is ready for backend integration in the next phase."
        />
        <Card className="mt-10 rounded-3xl border-border/70 bg-card/95 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Create your trial request</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="churchName"
                  label="Church Name"
                  value={fields.churchName}
                  onChange={handleChange("churchName")}
                  error={errors.churchName}
                  placeholder="Your church name"
                />
                <Field
                  id="adminFullName"
                  label="Admin Full Name"
                  value={fields.adminFullName}
                  onChange={handleChange("adminFullName")}
                  error={errors.adminFullName}
                  placeholder="Admin full name"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="adminEmail"
                  label="Admin Email"
                  type="email"
                  value={fields.adminEmail}
                  onChange={handleChange("adminEmail")}
                  error={errors.adminEmail}
                  placeholder="admin@church.org"
                />
                <Field
                  id="phone"
                  label="Phone"
                  value={fields.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  placeholder="+1 (000) 000-0000"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field
                  id="denomination"
                  label="Denomination"
                  value={fields.denomination}
                  onChange={handleChange("denomination")}
                  error={errors.denomination}
                  placeholder="e.g. Non-denominational"
                />
                <Field
                  id="country"
                  label="Country"
                  value={fields.country}
                  onChange={handleChange("country")}
                  error={errors.country}
                  placeholder="Country"
                />
                <Field
                  id="city"
                  label="City"
                  value={fields.city}
                  onChange={handleChange("city")}
                  error={errors.city}
                  placeholder="City"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field
                  id="numberOfMembers"
                  label="Number of Members"
                  type="number"
                  value={fields.numberOfMembers}
                  onChange={handleChange("numberOfMembers")}
                  error={errors.numberOfMembers}
                  placeholder="e.g. 350"
                />
                <Field
                  id="password"
                  label="Password"
                  type="password"
                  value={fields.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  placeholder="Create password"
                />
                <Field
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={fields.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  error={errors.confirmPassword}
                  placeholder="Confirm password"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  No backend is connected yet. This form currently uses a mock
                  submit flow.
                </p>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Start Free Trial"}
                </Button>
              </div>

              {submitState === "success" ? (
                <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700">
                  Trial request submitted. Our team will send your next steps
                  shortly.
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

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  type?: ComponentProps<typeof Input>["type"]
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: FieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
