/**
 * Industry data.
 * Hazards and footwear considerations are general guidance only. They are not
 * product suitability claims. Always confirm against verified product specs.
 */

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  hazards: string[];
  considerations: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const industries: Industry[] = [
  {
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure",
    shortName: "Construction",
    description:
      "Dynamic sites with shifting surfaces, heavy plant and constantly changing exposure conditions.",
    hazards: ["Impact from falling objects", "Uneven and unstable ground", "Sharp debris underfoot"],
    considerations: ["Toe protection", "Puncture resistance", "Slip-resistant outsoles"],
    image: "/images/ind-construction.webp",
    imageAlt: "Construction worker on a reinforced steel site",
    featured: true,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Factories",
    shortName: "Manufacturing",
    description:
      "Production floors where long shifts, machinery and repeated movement shape footwear requirements.",
    hazards: ["Foot traffic and moving equipment", "Spill-prone surfaces", "Prolonged standing"],
    considerations: ["Comfort-focused design", "Slip resistance", "Durable uppers"],
    image: "/images/ind-manufacturing.webp",
    imageAlt: "Engineers on a modern manufacturing floor",
    featured: true,
  },
  {
    slug: "logistics-warehousing",
    name: "Logistics & Warehousing",
    shortName: "Logistics",
    description:
      "High-throughput distribution environments with constant movement across hard flooring.",
    hazards: ["Forklift and pallet traffic", "Long walking distances", "Occasional dropped goods"],
    considerations: ["Lightweight construction", "Cushioned footbeds", "Toe protection"],
    image: "/images/ind-warehouse.webp",
    imageAlt: "Large distribution warehouse with racking",
    featured: true,
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    shortName: "Pharmaceuticals",
    description:
      "Controlled facilities where hygiene, cleanability and enclosed production areas matter.",
    hazards: ["Spills in production areas", "Long shifts on hard floors", "Controlled-access zones"],
    considerations: ["Easy-clean uppers", "Slip-conscious outsoles", "Comfort-focused design"],
    image: "/images/ind-pharma.webp",
    imageAlt: "Modern pharmaceutical laboratory",
  },
  {
    slug: "chemical-petrochemical",
    name: "Chemical & Petrochemical",
    shortName: "Chemical",
    description:
      "Process environments that demand careful assessment of chemical exposure and surface conditions.",
    hazards: ["Liquid spills", "Corrosive substances", "Slippery surfaces"],
    considerations: ["Chemical-resistant material where verified", "Slip resistance", "Secure coverage"],
    image: "/images/ind-chemical.webp",
    imageAlt: "Industrial process piping in a chemical plant",
  },
  {
    slug: "electrical-power",
    name: "Electrical & Power",
    shortName: "Electrical",
    description:
      "Work around electrical systems where hazard-specific verification is essential.",
    hazards: ["Electrical exposure", "Overhead work", "Variable site conditions"],
    considerations: ["Electrical hazard properties where verified", "Non-metallic options", "Stable outsole"],
    image: "/images/ind-electrical.webp",
    imageAlt: "Electrician working on an electrical panel",
  },
  {
    slug: "automotive-workshops",
    name: "Automotive & Workshops",
    shortName: "Automotive",
    description:
      "Workshops and assembly areas with oil, tools and fast-moving operational demands.",
    hazards: ["Oil and grease on floors", "Dropped tools and parts", "Long standing periods"],
    considerations: ["Oil-resistant outsole where verified", "Toe protection", "Comfortable fit"],
    image: "/images/ind-automotive.webp",
    imageAlt: "Industrial welding work in a workshop",
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    shortName: "Food Processing",
    description:
      "Hygiene-sensitive production lines with frequent wash-downs and wet flooring.",
    hazards: ["Wet and slippery floors", "Frequent cleaning cycles", "Long shifts"],
    considerations: ["Waterproof features where verified", "Easy-clean design", "Slip resistance"],
    image: "/images/ind-food.webp",
    imageAlt: "Commercial food preparation facility",
  },
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    shortName: "Hospitality",
    description:
      "Back-of-house teams working across kitchens, housekeeping, maintenance and service areas.",
    hazards: ["Wet flooring", "Long hours on foot", "Service-area traffic"],
    considerations: ["Slip resistance", "All-day comfort", "Easy-clean finish"],
    image: "/images/ind-hospitality.webp",
    imageAlt: "Hospitality property with outdoor seating and pool",
  },
  {
    slug: "healthcare-facilities",
    name: "Healthcare Facilities",
    shortName: "Healthcare",
    description:
      "Hospitals and clinical facilities where staff comfort and floor safety are ongoing priorities.",
    hazards: ["Spill-prone corridors", "Extended shifts", "High footfall"],
    considerations: ["Slip-conscious outsoles", "Cushioned support", "Easy-clean uppers"],
    image: "/images/ind-healthcare.webp",
    imageAlt: "Healthcare professional in a clinical environment",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    shortName: "Agriculture",
    description:
      "Fields, farms and processing areas where mud, weather and uneven terrain are routine.",
    hazards: ["Muddy and uneven ground", "Weather exposure", "Heavy equipment"],
    considerations: ["Waterproof features where verified", "Deep-tread outsole", "Durable upper"],
    image: "/images/ind-agriculture.webp",
    imageAlt: "Agricultural field at sunset",
  },
  {
    slug: "mining-quarrying",
    name: "Mining & Quarrying",
    shortName: "Mining",
    description:
      "Heavy-duty extraction environments with abrasive surfaces and significant underfoot risk.",
    hazards: ["Rockfall and impact", "Sharp irregular ground", "Heavy machinery"],
    considerations: ["Toe protection", "Puncture resistance", "Robust outsole"],
    image: "/images/ind-mining.webp",
    imageAlt: "Heavy work boot on a rough industrial site",
  },
  {
    slug: "cement-building-materials",
    name: "Cement & Building Materials",
    shortName: "Cement",
    description:
      "Dusty production and handling environments with heavy materials and hard surfaces.",
    hazards: ["Dust and debris", "Heavy material handling", "Abrasive flooring"],
    considerations: ["Durable upper", "Easy-clean finish", "Stable outsole"],
    image: "/images/ind-construction-wide.webp",
    imageAlt: "Large construction and infrastructure site",
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    shortName: "Oil & Gas",
    description:
      "High-consequence sites where hazard assessment and verified certification are critical.",
    hazards: ["Flammable atmospheres", "Oil and chemical exposure", "Harsh outdoor conditions"],
    considerations: ["Hazard-specific verified specifications", "Slip resistance", "Durable construction"],
    image: "/images/ind-oil-gas.webp",
    imageAlt: "Industrial process plant piping",
  },
  {
    slug: "solar-renewable-energy",
    name: "Solar & Renewable Energy",
    shortName: "Renewables",
    description:
      "Outdoor installation and maintenance work across solar, wind and renewable infrastructure.",
    hazards: ["Roof and height exposure", "Variable weather", "Uneven terrain"],
    considerations: ["Slip resistance", "Lightweight construction", "Weather-ready features"],
    image: "/images/ind-solar.webp",
    imageAlt: "Solar panel array under a blue sky",
  },
  {
    slug: "engineering",
    name: "Engineering",
    shortName: "Engineering",
    description:
      "Technical roles spanning design, installation, maintenance and on-site supervision.",
    hazards: ["Mixed site conditions", "Tools and equipment", "Occasional uneven surfaces"],
    considerations: ["Comfort-focused design", "Flexible outsole", "Protective toe options"],
    image: "/images/ind-engineering.webp",
    imageAlt: "Engineer reviewing technical drawings",
  },
  {
    slug: "transport-fleet",
    name: "Transport & Fleet",
    shortName: "Transport",
    description:
      "Drivers, technicians and fleet teams moving between depots, vehicles and loading areas.",
    hazards: ["Vehicle movement", "Loading-area surfaces", "Long periods standing or seated"],
    considerations: ["Grip-focused outsole", "Comfortable footbed", "Flexible construction"],
    image: "/images/ind-transport.webp",
    imageAlt: "Container ship and port logistics operations",
  },
  {
    slug: "facility-management",
    name: "Facility Management",
    shortName: "Facilities",
    description:
      "Multi-skilled teams responsible for maintenance, cleaning and safe building operations.",
    hazards: ["Wet floors", "Maintenance tools", "Varied indoor and outdoor areas"],
    considerations: ["Slip resistance", "Easy-clean upper", "All-day comfort"],
    image: "/images/ind-telecom.webp",
    imageAlt: "Team working in a technical operations environment",
  },
  {
    slug: "telecom",
    name: "Telecom",
    shortName: "Telecom",
    description:
      "Network installation and maintenance across technical rooms, towers and field locations.",
    hazards: ["Uneven access routes", "Elevated work", "Tool handling"],
    considerations: ["Lightweight design", "Stable outsole", "Durable upper"],
    image: "/images/ind-telecom.webp",
    imageAlt: "Telecommunications and data operations workspace",
  },
  {
    slug: "aviation",
    name: "Aviation",
    shortName: "Aviation",
    description:
      "Ground operations, maintenance and baggage teams working around aircraft and infrastructure.",
    hazards: ["Apron surfaces", "Moving equipment", "Long shifts outdoors"],
    considerations: ["Slip resistance", "Durable construction", "Comfort-focused design"],
    image: "/images/ind-aviation.webp",
    imageAlt: "Aircraft wing in flight",
  },
  {
    slug: "marine-shipyards",
    name: "Marine & Shipyards",
    shortName: "Marine",
    description:
      "Ports, decks and shipyard environments exposed to water, cargo movement and steel structures.",
    hazards: ["Wet decks", "Moving cargo", "Steel and uneven surfaces"],
    considerations: ["Waterproof features where verified", "Slip resistance", "Reinforced toe options"],
    image: "/images/ind-marine.webp",
    imageAlt: "Cargo vessels at a container port",
  },
  {
    slug: "packaging-printing",
    name: "Packaging & Printing",
    shortName: "Packaging",
    description:
      "Production lines and warehouses where repetitive movement and material handling are constant.",
    hazards: ["Pallet and machinery traffic", "Repeated handling", "Hard flooring"],
    considerations: ["Cushioned support", "Slip-conscious outsole", "Durable upper"],
    image: "/images/ind-packaging.webp",
    imageAlt: "High-bay warehouse racking and inventory",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export const featuredIndustries = industries.filter((industry) => industry.featured);
