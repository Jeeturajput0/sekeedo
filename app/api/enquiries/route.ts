import { z } from "zod";

const contactEnquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().regex(/^[+\d][\d\s()-]{7,}$/).max(40),
  enquiryType: z.enum(["quote", "bulk", "product", "distributor", "technical", "certification", "general"]),
  message: z.string().trim().min(10).max(5000),
  consent: z.boolean().refine((value) => value),
});

const distributorEnquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  companyName: z.string().trim().min(2).max(160),
  businessEmail: z.string().trim().email().max(254),
  phoneNumber: z.string().trim().regex(/^[+\d][\d\s()-]{7,}$/).max(40),
  city: z.string().trim().min(2).max(120),
  state: z.string().trim().min(2).max(120),
  businessType: z.enum(["footwear-retailer", "industrial-supplier", "safety-distributor", "procurement", "other"]),
  experience: z.string().trim().min(10).max(3000),
  interestedProducts: z.array(z.string().max(120)).min(1).max(20),
  message: z.string().trim().min(10).max(5000),
});
const enquirySchema = z.union([contactEnquirySchema, distributorEnquirySchema]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Please submit a valid enquiry form." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, message: "Please check the required fields and try again." }, { status: 400 });
  }

  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { ok: false, message: "Enquiry delivery is not configured yet. Please contact the business team directly." },
      { status: 503 },
    );
  }

  try {
    const delivery = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.ENQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify({ source: "sekeedo-contact", submittedAt: new Date().toISOString(), enquiry: parsed.data }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!delivery.ok) throw new Error(`Webhook returned ${delivery.status}`);
    return Response.json({
      ok: true,
      reference: `SEK-${Date.now().toString(36).toUpperCase()}`,
      message: "Your enquiry was delivered successfully.",
    });
  } catch {
    return Response.json(
      { ok: false, message: "We could not deliver your enquiry just now. Your details are still here; please try again shortly." },
      { status: 502 },
    );
  }
}
