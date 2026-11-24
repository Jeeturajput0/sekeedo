"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/forms";
import { productCategories } from "@/lib/data/products";

const distributorSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(2, "Please enter your company name"),
  businessEmail: z.string().email("Please enter a valid business email"),
  phoneNumber: z.string().regex(/^[+\d][\d\s()-]{7,}$/, "Please enter a valid phone number"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state or region"),
  businessType: z.enum([
    "footwear-retailer",
    "industrial-supplier",
    "safety-distributor",
    "procurement",
    "other",
  ]),
  experience: z.string().min(10, "Tell us briefly about your business experience"),
  interestedProducts: z.array(z.string()).min(1, "Select at least one product category"),
  message: z.string().min(10, "Please provide a little more detail"),
});

type DistributorFormValues = z.infer<typeof distributorSchema>;

const businessTypes: { value: DistributorFormValues["businessType"]; label: string }[] = [
  { value: "footwear-retailer", label: "Footwear retailer" },
  { value: "industrial-supplier", label: "Industrial supplier" },
  { value: "safety-distributor", label: "Safety equipment distributor" },
  { value: "procurement", label: "Procurement / sourcing business" },
  { value: "other", label: "Other" },
];

export function DistributorForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DistributorFormValues>({
    resolver: zodResolver(distributorSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      businessEmail: "",
      phoneNumber: "",
      city: "",
      state: "",
      experience: "",
      interestedProducts: [],
      message: "",
    },
  });

  async function onSubmit(values: DistributorFormValues) {
    setSubmitError(null);
    try {
      const response = await submitEnquiry(values);
      if (!response.ok) throw new Error(response.message);
      setReference(response.reference);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "We could not submit your enquiry. Please try again.",
      );
    }
  }

  if (reference) {
    return (
      <div className="border border-brand/30 bg-brand/5 p-8 sm:p-10">
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">
          Partnership enquiry received
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
          Your enquiry reference is <span className="font-semibold text-charcoal">{reference}</span>.
          Our team has received your partnership enquiry and will follow up using your contact details.
        </p>
        <button type="button" onClick={() => setReference(null)} className="btn-outline mt-7">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          { name: "fullName" as const, label: "Full Name *", placeholder: "Your name", auto: "name" },
          {
            name: "companyName" as const,
            label: "Company Name *",
            placeholder: "Registered business name",
            auto: "organization",
          },
          {
            name: "businessEmail" as const,
            label: "Business Email *",
            placeholder: "name@company.com",
            auto: "email",
          },
          {
            name: "phoneNumber" as const,
            label: "Phone Number *",
            placeholder: "+91 00000 00000",
            auto: "tel",
          },
          { name: "city" as const, label: "City *", placeholder: "City", auto: "address-level2" },
          {
            name: "state" as const,
            label: "State *",
            placeholder: "State or region",
            auto: "address-level1",
          },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={`dist-${field.name}`} className="field-label">
              {field.label}
            </label>
            <input
              id={`dist-${field.name}`}
              type={field.name === "businessEmail" ? "email" : field.name === "phoneNumber" ? "tel" : "text"}
              autoComplete={field.auto}
              className="field-control"
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              {...register(field.name)}
            />
            {errors[field.name] ? (
              <p className="field-error">{errors[field.name]?.message}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="dist-businessType" className="field-label">
          Business Type *
        </label>
        <select
          id="dist-businessType"
          className="field-control"
          aria-invalid={Boolean(errors.businessType)}
          {...register("businessType")}
        >
          <option value="">Select business type</option>
          {businessTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.businessType ? <p className="field-error">{errors.businessType.message}</p> : null}
      </div>

      <fieldset>
        <legend className="field-label">Interested Products *</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {productCategories.map((category) => (
            <label
              key={category.slug}
              className="flex cursor-pointer items-start gap-2.5 border border-line px-3 py-2.5 text-xs text-charcoal/75 transition-colors hover:border-brand"
            >
              <input
                type="checkbox"
                value={category.name}
                className="mt-0.5 h-3.5 w-3.5 accent-[#F4512C]"
                {...register("interestedProducts")}
              />
              {category.name}
            </label>
          ))}
        </div>
        {errors.interestedProducts ? (
          <p className="field-error">{errors.interestedProducts.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="dist-experience" className="field-label">
          Existing Business / Experience *
        </label>
        <textarea
          id="dist-experience"
          rows={3}
          className="field-control resize-y"
          placeholder="Tell us about your current business, market and experience..."
          aria-invalid={Boolean(errors.experience)}
          {...register("experience")}
        />
        {errors.experience ? <p className="field-error">{errors.experience.message}</p> : null}
      </div>

      <div>
        <label htmlFor="dist-message" className="field-label">
          Message *
        </label>
        <textarea
          id="dist-message"
          rows={4}
          className="field-control resize-y"
          placeholder="Anything else we should know about your partnership enquiry?"
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? <p className="field-error">{errors.message.message}</p> : null}
      </div>

      {submitError ? (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Submitting..." : "Submit Partnership Enquiry"}
        </button>
        <p className="text-xs text-muted">Fields marked * are required.</p>
      </div>
    </form>
  );
}
