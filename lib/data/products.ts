/**
 * Product catalogue data.
 *
 * IMPORTANT: These are illustrative placeholders for catalogue design.
 * Names, imagery, sizes, sample availability, badges and safety feature
 * tags are demo values only. Certifications, safety ratings, licence
 * numbers and verified specifications must be replaced with actual,
 * approved product data before publication.
 */

/** Standard UK sizing options used by the catalogue demo. */
export const DEFAULT_PRODUCT_SIZES = ["6", "7", "8", "9", "10", "11", "12"] as const;

/** Compact badges that are safe to show without a certification claim. */
export type ProductBadge = "Bestseller" | "New Arrival" | "Lightweight" | "Steel Toe";

export type ProductCategorySlug =
  | "steel-toe"
  | "composite-toe"
  | "lightweight"
  | "safety-boots"
  | "high-ankle"
  | "waterproof"
  | "slip-resistant"
  | "industrial-sneakers"
  | "specialized";

export type ProductCategory = {
  slug: ProductCategorySlug;
  name: string;
  description: string;
};

export type Product = {
  id?: string;
  slug: string;
  name: string;
  sku?: string;
  category: ProductCategorySlug;
  image: string;
  imageAlt: string;
  imagePosition?: number;
  tone: "light" | "dark";
  tagline: string;
  /** Preferred short description. Falls back to `summary` when omitted. */
  description?: string;
  summary: string;
  features: string[];
  verifiedFeatures?: boolean;
  /** Short product labels such as "Steel Toe" or "Breathable". */
  safetyFeatures?: string[];
  /** Size options shown in the selector. Defaults to DEFAULT_PRODUCT_SIZES. */
  sizes?: string[];
  /** Demo availability: only these sizes are selectable when provided. */
  availableSizes?: string[];
  badge?: ProductBadge;
  industries?: string[];
  certification?: string;
  priceRange?: { min: number; max: number; currency: string };
  minimumOrderQuantity?: number;
  newArrival?: boolean;
  sizeRange: string;
  specificationStatus: string;
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "steel-toe",
    name: "Steel Toe Safety Shoes",
    description: "Toe protection for environments where impact and compression risks are present.",
  },
  {
    slug: "composite-toe",
    name: "Composite Toe Safety Shoes",
    description: "A non-metallic toe protection option for weight-sensitive applications.",
  },
  {
    slug: "lightweight",
    name: "Lightweight Safety Shoes",
    description: "Reduced-weight designs for long shifts and high-mobility roles.",
  },
  {
    slug: "safety-boots",
    name: "Safety Boots",
    description: "Coverage and support for demanding industrial environments.",
  },
  {
    slug: "high-ankle",
    name: "High-Ankle Safety Shoes",
    description: "Extended ankle coverage for uneven or demanding work surfaces.",
  },
  {
    slug: "waterproof",
    name: "Waterproof Safety Footwear",
    description: "Options for wet conditions and wash-down environments.",
  },
  {
    slug: "slip-resistant",
    name: "Slip-Resistant Footwear",
    description: "Outsole designs intended for improved grip on challenging surfaces.",
  },
  {
    slug: "industrial-sneakers",
    name: "Industrial Safety Sneakers",
    description: "Athletic-inspired profiles for active industrial teams.",
  },
  {
    slug: "specialized",
    name: "Specialized Safety Footwear",
    description: "Purpose-led designs for specific workplace requirements.",
  },
];

export const products: Product[] = [
  {
    slug: "sk-100-steel-toe-classic",
    name: "SK-100 Steel Toe Classic",
    id: "sk-100",
    sku: "SK-100",
    badge: "Bestseller",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11"],
    safetyFeatures: ["Steel Toe"],
    industries: [],
    category: "steel-toe",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with yellow eyelet details",
    imagePosition: 0,
    tone: "dark",
    tagline: "Everyday industrial protection",
    summary:
      "A versatile steel toe profile designed for general industrial duty and daily workforce use.",
    features: ["Reinforced toe area", "Cushioned footbed", "Durable industrial outsole", "Secure lace closure"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
    featured: true,
  },
  {
    slug: "sk-110-composite-motion",
    name: "SK-110 Composite Motion",
    id: "sk-110",
    sku: "SK-110",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    safetyFeatures: ["Composite Toe"],
    industries: [],
    category: "composite-toe",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with a yellow heel accent",
    imagePosition: 1,
    tone: "light",
    tagline: "Non-metallic toe protection option",
    summary:
      "A composite toe concept for teams that prefer a non-metallic construction in weight-sensitive roles.",
    features: ["Non-metallic toe protection option", "Padded collar", "Flexible underfoot feel", "Low-profile silhouette"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
    featured: true,
  },
  {
    slug: "sk-120-lightweight-series",
    name: "SK-120 Lightweight Series",
    id: "sk-120",
    sku: "SK-120",
    badge: "Lightweight",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11", "12"],
    safetyFeatures: ["Lightweight", "Breathable"],
    industries: [],
    category: "lightweight",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with reinforced lace loops",
    imagePosition: 2,
    tone: "light",
    tagline: "Comfort across long shifts",
    summary:
      "A lightweight safety footwear concept developed around mobility, breathability and all-day comfort.",
    features: ["Lightweight upper", "Breathable lining", "Shock-absorbing midsole", "Flexible forefoot"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
    featured: true,
  },
  {
    slug: "sk-200-industrial-boot",
    name: "SK-200 Industrial Boot",
    id: "sk-200",
    sku: "SK-200",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11", "12"],
    safetyFeatures: [],
    industries: [],
    category: "safety-boots",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black high-top safety shoe with silver lace loops",
    imagePosition: 3,
    tone: "light",
    tagline: "Built for demanding shifts",
    summary:
      "A robust industrial boot profile with extended coverage for tough worksite conditions.",
    features: ["Extended ankle coverage", "Grippy outsole pattern", "Padded inward collar", "Reinforced stitching"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
    featured: true,
  },
  {
    slug: "sk-210-high-ankle-pro",
    name: "SK-210 High Ankle Pro",
    id: "sk-210",
    sku: "SK-210",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["7", "8", "9", "10", "11"],
    safetyFeatures: ["High Ankle"],
    industries: [],
    category: "high-ankle",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black mesh-panel safety shoe",
    imagePosition: 4,
    tone: "light",
    tagline: "Added ankle support",
    summary:
      "A high-ankle profile created for roles where lateral support and coverage are priorities.",
    features: ["High-ankle design", "Supportive heel counter", "Durable upper material", "Secure fit"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-300-waterproof-guard",
    name: "SK-300 Waterproof Guard",
    id: "sk-300",
    sku: "SK-300",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11"],
    safetyFeatures: ["Water Resistant"],
    industries: [],
    category: "waterproof",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with a small red side accent",
    imagePosition: 5,
    tone: "light",
    tagline: "Ready for wet conditions",
    summary:
      "A waterproof footwear concept for outdoor work, wash-down areas and wet facilities.",
    features: ["Water-resistant upper construction", "Sealed seam detailing", "Easy-clean finish", "Slip-conscious outsole"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
    featured: true,
  },
  {
    slug: "sk-310-grip-series",
    name: "SK-310 Grip Series",
    id: "sk-310",
    sku: "SK-310",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11", "12"],
    safetyFeatures: ["Slip Resistant"],
    industries: [],
    category: "slip-resistant",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black high-top safety boot with a tan collar accent",
    imagePosition: 6,
    tone: "light",
    tagline: "Outsole-focused grip",
    summary:
      "An outsole-led design intended for workplaces where underfoot traction is a daily requirement.",
    features: ["Textured outsole", "Wide contact area", "Stable heel geometry", "Easy-clean tread"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-400-industrial-sneaker",
    name: "SK-400 Industrial Sneaker",
    id: "sk-400",
    sku: "SK-400",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["8", "9", "10", "11", "12"],
    safetyFeatures: ["Lightweight", "Breathable"],
    industries: [],
    category: "industrial-sneakers",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black safety shoe with a textured toe and red accent",
    imagePosition: 7,
    tone: "light",
    tagline: "Athletic feel, industrial purpose",
    summary:
      "A sneaker-inspired safety profile for teams that move constantly across active sites.",
    features: ["Athletic-inspired fit", "Flexible sole unit", "Breathable upper", "Lightweight construction"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-410-site-runner",
    name: "SK-410 Site Runner",
    id: "sk-410",
    sku: "SK-410",
    badge: "New Arrival",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10"],
    safetyFeatures: ["Breathable"],
    newArrival: true,
    industries: [],
    category: "industrial-sneakers",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with yellow eyelet details",
    imagePosition: 0,
    tone: "light",
    tagline: "Movement without compromise",
    summary:
      "A low-cut industrial shoe that balances everyday mobility with workplace-ready construction.",
    features: ["Low-cut profile", "Cushioned midsole", "Hard-wearing outsole", "Secure lace system"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-500-specialized-duty",
    name: "SK-500 Specialized Duty",
    id: "sk-500",
    sku: "SK-500",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11", "12"],
    safetyFeatures: [],
    industries: [],
    category: "specialized",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with a yellow heel accent",
    imagePosition: 1,
    tone: "dark",
    tagline: "For specific site requirements",
    summary:
      "A placeholder for purpose-led footwear developed around defined workplace hazards.",
    features: ["Application-specific design", "Reinforced high-wear zones", "Supportive fit", "Durable construction"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-510-puncture-guard",
    name: "SK-510 Puncture Guard",
    id: "sk-510",
    sku: "SK-510",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    safetyFeatures: [],
    industries: [],
    category: "specialized",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black low-cut safety shoe with reinforced lace loops",
    imagePosition: 2,
    tone: "dark",
    tagline: "Underfoot protection focus",
    summary:
      "An underfoot-protection concept for sites with sharp debris and uneven surfaces.",
    features: ["Reinforced midsole area", "Tough outsole", "Stable platform", "Rugged upper"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
  {
    slug: "sk-520-oil-shield",
    name: "SK-520 Oil Shield",
    id: "sk-520",
    sku: "SK-520",
    sizes: [...DEFAULT_PRODUCT_SIZES],
    availableSizes: ["6", "7", "8", "9", "10", "11"],
    safetyFeatures: ["Slip Resistant"],
    industries: [],
    category: "slip-resistant",
    image: "/images/clawz-shoes-sheet.png",
    imageAlt: "Black high-top safety shoe with silver lace loops",
    imagePosition: 3,
    tone: "dark",
    tagline: "For oily and dirty surfaces",
    summary:
      "A concept profile for environments where oil, grease and grime affect underfoot conditions.",
    features: ["Oil-conscious outsole compound", "Deep tread pattern", "Easy-clean upper", "Secure fit"],
    sizeRange: "Size availability to be confirmed",
    specificationStatus: "Illustrative listing; confirmed specifications available on request",
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
