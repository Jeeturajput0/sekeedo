export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Technology & Safety", href: "/technology" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Become a Distributor", href: "/become-a-distributor" },
  { label: "Contact Us", href: "/contact" },
];

export const productMenu: NavItem[] = [
  {
    label: "Steel Toe Safety Shoes",
    href: "/products?category=steel-toe",
    description: "Reinforced toe protection for industrial environments.",
  },
  {
    label: "Composite Toe Safety Shoes",
    href: "/products?category=composite-toe",
    description: "Non-metallic toe protection options.",
  },
  {
    label: "Safety Boots",
    href: "/products?category=safety-boots",
    description: "High-coverage footwear for demanding sites.",
  },
  {
    label: "Lightweight Safety Shoes",
    href: "/products?category=lightweight",
    description: "Comfort-focused designs for long shifts.",
  },
  {
    label: "View all products",
    href: "/products",
  },
];

export const industryMenu: NavItem[] = [
  { label: "Construction & Infrastructure", href: "/industries#construction" },
  { label: "Manufacturing & Factories", href: "/industries#manufacturing" },
  { label: "Logistics & Warehousing", href: "/industries#logistics" },
  { label: "Oil & Gas", href: "/industries#oil-gas" },
  { label: "All industries", href: "/industries" },
];
