/**
 * Central site configuration.
 * Business contact details are deliberately placeholders — replace with
 * verified company information before publishing.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All products", href: "/products", description: "Browse the full catalogue" },
      { label: "Steel toe safety shoes", href: "/products?category=steel-toe" },
      { label: "Safety boots", href: "/products?category=safety-boots" },
      { label: "Waterproof footwear", href: "/products?category=waterproof" },
    ],
  },
  { label: "Technology & Safety", href: "/technology-safety" },
  {
    label: "Industries We Serve",
    href: "/industries",
    children: [
      { label: "All industries", href: "/industries", description: "Explore every sector" },
      { label: "Construction & Infrastructure", href: "/industries/construction-infrastructure" },
      { label: "Manufacturing & Factories", href: "/industries/manufacturing" },
      { label: "Logistics & Warehousing", href: "/industries/logistics-warehousing" },
    ],
  },
  { label: "Become a Distributor", href: "/become-a-distributor" },
  { label: "Contact Us", href: "/contact" },
];

export const siteConfig = {
  name: "SEKEEDO",
  tagline: "Built for the Work That Matters.",
  description:
    "SEKEEDO is a wholesale supplier of industrial safety footwear, serving contractors, factories, distributors and workforce procurement teams.",
  url: "https://sekeedo.example",
  announcement: "Wholesale & bulk enquiries open — request a quotation for your workforce.",
  contact: {
    email: "business@sekeedo.example",
    wholesaleEmail: "wholesale@sekeedo.example",
    distributorEmail: "partners@sekeedo.example",
    phone: "+91 — — — — — — — — —",
    whatsapp: "https://wa.me/0000000000000",
    address: "Registered address to be added",
    city: "City to be added",
    hours: "Monday – Saturday, 9:30 AM – 6:30 PM (to be confirmed)",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
};

export const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About SEKEEDO", href: "/about" },
      { label: "Technology & Safety", href: "/technology-safety" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Steel Toe Safety Shoes", href: "/products?category=steel-toe" },
      { label: "Composite Toe Safety Shoes", href: "/products?category=composite-toe" },
      { label: "Safety Boots", href: "/products?category=safety-boots" },
      { label: "Waterproof Footwear", href: "/products?category=waterproof" },
      { label: "View all products", href: "/products" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Request a Quote", href: "/contact?enquiry=bulk" },
      { label: "Become a Distributor", href: "/become-a-distributor" },
      { label: "Wholesale Enquiries", href: "/contact?enquiry=wholesale" },
      { label: "Contact Our Team", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Construction", href: "/industries/construction-infrastructure" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Logistics", href: "/industries/logistics-warehousing" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "All industries", href: "/industries" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];
