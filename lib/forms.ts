export type EnquiryPayload = Record<string, string | string[]>;

export type EnquiryResponse = {
  ok: boolean;
  reference: string;
  message: string;
};

/**
 * BACKEND INTEGRATION PLACEHOLDER
 * --------------------------------
 * Replace the simulated request below with a real API call, e.g.:
 *
 * const response = await fetch("/api/enquiries", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify(payload),
 * });
 * return response.json();
 *
 * The form UI already handles success, error and pending states.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    ok: true,
    reference: `SEK-${Date.now().toString(36).toUpperCase()}`,
    message:
      "Thank you. Your enquiry has been captured in this demo. Connect the backend integration to receive submissions.",
  };
}
