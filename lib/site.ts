import { siteConfig } from "@/lib/data/site";

/**
 * Compatibility export for shared UI components.
 * All values here are placeholders pending verified company information.
 */
export const site = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  contact: siteConfig.contact,
  certification: {
    status: "Verification pending",
    standard: "To be confirmed",
    licenceNumber: "To be confirmed",
    validity: "To be confirmed",
  },
};
