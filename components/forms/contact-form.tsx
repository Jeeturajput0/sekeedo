"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { submitEnquiry } from "@/lib/forms";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[+\d][\d\s()-]{7,}$/, "Please enter a valid phone number"),
  enquiryType: z.enum(["quote", "bulk", "product", "distributor", "technical", "certification", "general"]),
  message: z.string().min(10, "Please provide a little more detail"),
  consent: z.boolean().refine((value) => value, "Please agree to be contacted about your enquiry"),
});

type ContactFormValues = z.infer<typeof contactSchema>;
const enquiryOptions: { value: ContactFormValues["enquiryType"]; label: string }[] = [
  { value: "quote", label: "Request a Quote" },
  { value: "bulk", label: "Bulk Order" },
  { value: "product", label: "Product Enquiry" },
  { value: "distributor", label: "Distributor Enquiry" },
  { value: "technical", label: "Technical Support" },
  { value: "certification", label: "Certification Enquiry" },
  { value: "general", label: "General Enquiry" },
];

const labelClass = "field-label !mb-1 !text-xs !font-semibold !tracking-normal !normal-case !text-charcoal";
const inputClass = "field-control rounded-md !py-2.5";

export function ContactForm({ initialEnquiry = "quote", initialProducts }: { initialEnquiry?: string; initialProducts?: string }) {
  const [reference, setReference] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "", company: "", email: "", phone: "", consent: false,
      enquiryType: enquiryOptions.find((option) => option.value === initialEnquiry)?.value ?? "quote",
      message: initialProducts ? `I'm interested in these products: ${initialProducts}. Please share availability and a bulk quote.` : "",
    },
  });

  useEffect(() => {
    if (enquiryOptions.some((option) => option.value === initialEnquiry)) setValue("enquiryType", initialEnquiry as ContactFormValues["enquiryType"]);
  }, [initialEnquiry, setValue]);
  useEffect(() => {
    if (initialProducts) setValue("message", `I'm interested in these products: ${initialProducts}. Please share availability and a bulk quote.`);
  }, [initialProducts, setValue]);

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const response = await submitEnquiry(values);
      if (!response.ok) throw new Error(response.message);
      setReference(response.reference);
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again.");
    }
  }

  if (reference) return (
    <div className="border border-brand/30 bg-brand/5 p-8 sm:p-10" role="status">
      <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">Enquiry received</h3>
      <p className="mt-3 max-w-lg text-sm leading-7 text-muted">Thank you for reaching out. Your enquiry reference is <span className="font-semibold text-charcoal">{reference}</span>. Our team has received your message and will follow up using your contact details.</p>
      <button type="button" onClick={() => { setReference(null); reset(); }} className="btn-outline mt-7">Send another enquiry</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <div><label htmlFor="contact-name" className={labelClass}>Full Name *</label><input id="contact-name" className={inputClass} placeholder="Enter your name" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name")} />{errors.name && <p className="field-error">{errors.name.message}</p>}</div>
        <div><label htmlFor="contact-company" className={labelClass}>Company *</label><input id="contact-company" className={inputClass} placeholder="Enter company name" autoComplete="organization" aria-invalid={Boolean(errors.company)} {...register("company")} />{errors.company && <p className="field-error">{errors.company.message}</p>}</div>
        <div><label htmlFor="contact-email" className={labelClass}>Email *</label><input id="contact-email" type="email" className={inputClass} placeholder="Enter your email" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} />{errors.email && <p className="field-error">{errors.email.message}</p>}</div>
        <div><label htmlFor="contact-phone" className={labelClass}>Phone *</label><input id="contact-phone" type="tel" className={inputClass} placeholder="Enter your phone number" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone")} />{errors.phone && <p className="field-error">{errors.phone.message}</p>}</div>
      </div>
      <div><label htmlFor="contact-enquiry" className={labelClass}>Enquiry Type *</label><select id="contact-enquiry" className={inputClass} aria-invalid={Boolean(errors.enquiryType)} {...register("enquiryType")}>{enquiryOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>{errors.enquiryType && <p className="field-error">{errors.enquiryType.message}</p>}</div>
      <div><label htmlFor="contact-message" className={labelClass}>Message *</label><textarea id="contact-message" rows={4} className="field-control resize-y rounded-md" placeholder="Tell us about your requirement, quantities and location." aria-invalid={Boolean(errors.message)} {...register("message")} />{errors.message && <p className="field-error">{errors.message.message}</p>}</div>
      {submitError && <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>}
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">{isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}{isSubmitting ? "Sending..." : "Send Enquiry"}</button>
        <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-charcoal/85"><input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#f4512c]" aria-invalid={Boolean(errors.consent)} {...register("consent")} /><span>I agree to be contacted by SEKEEDO regarding my enquiry.{errors.consent && <span className="block text-red-700">{errors.consent.message}</span>}</span></label>
      </div>
    </form>
  );
}
