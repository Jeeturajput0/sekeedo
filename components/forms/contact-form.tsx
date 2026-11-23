"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/forms";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[+\d][\d\s()-]{7,}$/, "Please enter a valid phone number"),
  enquiryType: z.enum(["quote", "bulk", "wholesale", "distributor", "general"]),
  message: z.string().min(10, "Please provide a little more detail"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const enquiryOptions: { value: ContactFormValues["enquiryType"]; label: string }[] = [
  { value: "quote", label: "Request a Quote" },
  { value: "bulk", label: "Bulk Order Enquiry" },
  { value: "wholesale", label: "Wholesale Enquiry" },
  { value: "distributor", label: "Distributor Enquiry" },
  { value: "general", label: "General Enquiry" },
];

export function ContactForm({ initialEnquiry = "quote", initialProducts }: { initialEnquiry?: string; initialProducts?: string }) {
  const [reference, setReference] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      enquiryType:
        enquiryOptions.find((option) => option.value === initialEnquiry)?.value ?? "quote",
      message: initialProducts ? `I'm interested in these products: ${initialProducts}. Please share availability and a bulk quote.` : "",
    },
  });

  useEffect(() => {
    if (enquiryOptions.some((option) => option.value === initialEnquiry)) {
      setValue("enquiryType", initialEnquiry as ContactFormValues["enquiryType"]);
    }
  }, [initialEnquiry, setValue]);

  useEffect(() => {
    if (initialProducts) {
      setValue("message", `I'm interested in these products: ${initialProducts}. Please share availability and a bulk quote.`);
    }
  }, [initialProducts, setValue]);

  async function onSubmit(values: ContactFormValues) {
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
          Enquiry received
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
          Thank you for reaching out. Your demo reference is{" "}
          <span className="font-semibold text-charcoal">{reference}</span>. Connect the backend
          integration to deliver submissions to the SEKEEDO team.
        </p>
        <button
          type="button"
          onClick={() => setReference(null)}
          className="btn-outline mt-7"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Full Name *
          </label>
          <input
            id="contact-name"
            className="field-control"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? <p className="field-error">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-company" className="field-label">
            Company *
          </label>
          <input
            id="contact-company"
            className="field-control"
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
          {errors.company ? <p className="field-error">{errors.company.message}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            className="field-control"
            placeholder="name@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-phone" className="field-label">
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="field-control"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-enquiry" className="field-label">
          Enquiry Type *
        </label>
        <select
          id="contact-enquiry"
          className="field-control"
          aria-invalid={Boolean(errors.enquiryType)}
          {...register("enquiryType")}
        >
          {enquiryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.enquiryType ? <p className="field-error">{errors.enquiryType.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="field-control resize-y"
          placeholder="Tell us about your requirement, quantities and timeline..."
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
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
        <p className="text-xs text-muted">Fields marked * are required.</p>
      </div>
    </form>
  );
}
