/**
 * Central site configuration.
 * Business contact details are deliberately placeholders — replace with
 * verified company information before publishing.
 */

import type { LucideIcon } from "lucide-react";
import {
  Construction,
  Factory,
  Fuel,
  Grid2X2,
  Pickaxe,
  Warehouse,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
  }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    
  },
  { label: "Technology & Safety", href: "/technology-safety" },
  {
    label: "Industries We Serve",
    href: "/industries",
    children: [
      {
        label: "All industries",
        href: "/industries",
        description: "Explore every sector we serve.",
        icon: Grid2X2,
      },
      {
        label: "Construction & Infrastructure",
        href: "/industries/construction-infrastructure",
        description: "Sites, projects and infrastructure crews.",
        icon: Construction,
      },
      {
        label: "Manufacturing & Factories",
        href: "/industries/manufacturing",
        description: "Production floors and plant teams.",
        icon: Factory,
      },
      {
        label: "Logistics & Warehousing",
        href: "/industries/logistics-warehousing",
        description: "Warehouses, fleets and distribution.",
        icon: Warehouse,
      },
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
        description: "Refineries, rigs and energy operations.",
        icon: Fuel,
      },
      {
        label: "Mining & Heavy Industries",
        href: "/industries/mining-quarrying",
        description: "Mining sites and heavy-duty work.",
        icon: Pickaxe,
      },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
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
      { label: "Blog & Guides", href: "/blog" },
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
