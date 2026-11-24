export type EnquiryPayload = Record<string, string | boolean | string[]>;

export type EnquiryResponse = {
  ok: boolean;
  reference: string;
  message: string;
};

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = (await response.json()) as EnquiryResponse;
  if (!response.ok) throw new Error(result.message || "We could not submit your enquiry. Please try again.");
  return result;
}
