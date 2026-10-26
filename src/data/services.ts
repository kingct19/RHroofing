export type ServiceCategory = "residential" | "commercial" | "both";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface RoofingService {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: ServiceCategory;
  imageUrl: string;
  secondaryImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  heroSummary: string;
  overviewParagraphs: string[];
  idealFor: string[];
  eastTexasBenefits: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  specs: ServiceSpec[];
  faqs: ServiceFAQ[];
}

export const ROOFING_SERVICES: RoofingService[] = [
  {
    slug: "shingle-roofing",
    title: "Shingle Roofing — Architectural & Three-Tab Systems",
    shortTitle: "Shingle Roofing",
    tagline:
      "About 75% of American homeowners—and many businesses—choose shingle roofing for its beauty, durability, and affordability.",
    category: "both",
    imageUrl: "/images/rhr/slider-img2.png",
    secondaryImageUrl: "/images/rhr/shingle-4.jpg",
    metaTitle:
      "Shingle Roofing in Gilmer, Longview & Tyler TX | Raymond Hardin Roofing",
    metaDescription:
      "Architectural and 3-tab shingle roof installation, tear-offs, re-decks, and repairs in Gilmer and East Texas. Over 40 years experience, family-owned since 1995. Call 903-797-2756.",
    heroSummary:
      "About 75% of American homeowners—and many businesses—choose shingle roofing. A shingle roof adds beauty, texture, and color, raising property value and curb appeal across Gilmer and East Texas.",
    overviewParagraphs: [
      "Shingles are the most popular roofing choice for homeowners and businesses across Gilmer, Longview, Tyler, and East Texas because of their wide variety of colors and styles, durability, adaptability to any style or shape of roof, noise reduction, and affordability.",
      "Three-tab shingles are single-layer strips divided into three equal sections or tabs. Tabbed shingles give the roof a uniform texture and a flat, even look. Tabbed shingles are budget-friendly but have a shorter warranty period.",
      "Architectural shingles (also known as dimensional or laminate shingles) are thicker and heavier than tabbed shingles. Their distinctive look and durability make them the preferred shingle choice. Architectural shingles are made from multiple layers sealed together with slight variations in color and thickness. The result is a three-dimensional look that reflects light and shadow and adds texture to your roof. Architectural shingles cost more than tabbed shingles, but they are more durable and have a longer warranty.",
      "Before we begin any tear-off work, we lay down tarps to control the mess and protect your landscaping. During the roofing process, we use a rolling magnet daily to collect stray nails that might injure people or pets, and we replace all turbines, pipes, and stacks to give your entire roof a brand new look.",
    ],
    idealFor: [
      "Single-family homes, ranch homes, and complex multi-gable roofs",
      "Churches, offices, and steep-slope commercial buildings",
      "Homeowners upgrading from 3-tab shingles to dimensional architectural shingles",
      "New home construction and full tear-off replacements (105% average ROI)",
    ],
    eastTexasBenefits: [
      {
        title: "Architectural Dimensional Durability",
        description:
          "Multi-layer laminated construction resists high winds and adds rich shadow and texture to your roofline.",
      },
      {
        title: "All New Turbines, Pipes & Stacks",
        description:
          "On every new roof, we replace all turbines, pipes, and stacks so your entire roof system looks and performs like new.",
      },
      {
        title: "Landscaping Tarps & Daily Magnet Sweeps",
        description:
          "We protect your flowerbeds with heavy tarps during tear-off and run rolling magnets daily so not a single stray nail is left behind.",
      },
      {
        title: "Full Tear-Offs & Solid Re-Decking",
        description:
          "We inspect the bare wood deck and replace any rotted boards or trim before installing fresh underlayment and shingles.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Free Inspection & Exact Cost Estimate",
        description:
          "With our free estimate, you'll know the exact cost of your shingle roof installation or repair—and we explain material and warranty options clearly.",
      },
      {
        step: "02",
        title: "Tarp Protection, Tear-Off & Re-Decking",
        description:
          "We lay down tarps to protect landscaping, strip old roofing, and replace any damaged boards, decking, or trim.",
      },
      {
        step: "03",
        title: "New Shingles, Turbines, Pipes & Stacks",
        description:
          "We install your chosen architectural or 3-tab shingles along with brand new turbines, pipe boots, and roof stacks.",
      },
      {
        step: "04",
        title: "Daily Rolling Magnet Cleanup",
        description:
          "We run a rolling magnet around your entire yard and driveway every day to collect stray nails that could injure family members or pets.",
      },
    ],
    specs: [
      { label: "Homeowner Popularity", value: "75% of U.S. Homes" },
      { label: "Shingle Options", value: "Architectural & 3-Tab" },
      { label: "Exterior Home ROI", value: "105% Average Return" },
      { label: "Hardware Included", value: "New Turbines, Pipes & Stacks" },
    ],
    faqs: [
      {
        question: "What is the difference between three-tab and architectural shingles?",
        answer:
          "Three-tab shingles are single-layer strips that give a flat, uniform look and are budget-friendly. Architectural (dimensional/laminate) shingles are thicker, heavier multi-layer shingles sealed together for a 3D shadow look, superior wind durability, and a longer warranty.",
      },
      {
        question: "Do you replace roof vents, pipes, and turbines during a new shingle roof?",
        answer:
          "Yes! We replace all turbines, pipes, and stacks on every new roof installation to give your entire roof a brand new look and prevent leaks around old worn penetrations.",
      },
      {
        question: "How do you keep nails out of my yard and flowerbeds?",
        answer:
          "Before we begin any tear-off work, we lay down tarps to control the mess and protect landscaping. During the roofing process, we use a rolling magnet daily to collect stray nails that might injure people or pets.",
      },
    ],
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing — Durable, Energy-Efficient & Attractive",
    shortTitle: "Metal Roofing",
    tagline:
      "Your roof never looked better! Durable, energy-efficient, fire-resistant, and low-maintenance metal roofs in a wide variety of colors.",
    category: "both",
    imageUrl: "/images/rhr/slider-img1.png",
    secondaryImageUrl: "/images/rhr/metal-15.jpg",
    metaTitle:
      "Metal Roofing in Gilmer, Longview & Tyler TX | Raymond Hardin Roofing",
    metaDescription:
      "Residential and commercial standing seam and ribbed metal roofing in Gilmer and East Texas. Energy efficient, fire resistant, and installed by 40+ year experienced roofers. Call 903-797-2756.",
    heroSummary:
      "Your Roof Never Looked Better! Metal roofing has been a long-time favorite for commercial buildings, and its durability, energy efficiency, fire resistance, and standout curb appeal make it a top choice for East Texas homeowners.",
    overviewParagraphs: [
      "Metal roofing has been a long-time favorite for commercial buildings, and its many benefits are making it increasingly popular with East Texas homeowners too: it is durable and long-lasting, available in a wide variety of color choices, energy efficient, fire resistant, and low maintenance.",
      "The many color choices alone make metal roofing an aesthetic value. Choose colors to blend into a naturalistic East Texas pine landscape or create contrast with accent colors. Metal roofing adds to your property's value and stand-out curb appeal.",
      "Metal is energy efficient; it reflects the sun's rays to reduce heat in your attic and may even be eligible for energy-saving tax credits. Because metal roofing is lighter weight than other roofing materials, it can sometimes be installed over an existing roof with proper ventilation pockets to prevent moisture and rot.",
      "Installing a metal roof requires a higher initial investment. However, the cost is recovered both in the multi-decade lifespan of the roof and in the increased property value. Metal roofing should be installed only by a qualified, experienced roofer like Raymond Hardin Roofing.",
    ],
    idealFor: [
      "East Texas country homes, log cabins, ranch houses, and residential subdivisions",
      "Commercial buildings, retail storefronts, churches, and industrial shops",
      "Wooded pine and oak properties seeking a low-maintenance, needle-shedding roof",
      "Homeowners looking to reflect summer solar heat and lower cooling costs",
    ],
    eastTexasBenefits: [
      {
        title: "Reflects Sun's Rays to Reduce Heat",
        description:
          "Metal roofing reflects solar radiation away from your home, lowering attic heat during hot East Texas summers.",
      },
      {
        title: "Stand-Out Curb Appeal & Color Variety",
        description:
          "Available in a wide range of colors—from forest green and charcoal to silver and bronze—to blend with nature or accent your home.",
      },
      {
        title: "Fire Resistant & Low Maintenance",
        description:
          "Non-combustible steel panels resist fire, rot, mildew, and pine needle buildup with minimal upkeep required.",
      },
      {
        title: "Lightweight & Long-Lasting Value",
        description:
          "Lighter than heavy tile or multi-layer shingles, recovering your investment through decades of lifespan and higher resale value.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Color, Profile & Deck Evaluation",
        description:
          "Along with your free estimate, we help you compare standing seam and ribbed metal profiles, colors, and deck or tear-off options.",
      },
      {
        step: "02",
        title: "Tear-Off or Vented Pocket Preparation",
        description:
          "We either perform a clean tear-off and re-deck or build a code-compliant ventilated pocket so moisture never collects underneath.",
      },
      {
        step: "03",
        title: "Precision Metal Panel & Trim Installation",
        description:
          "Our experienced metal roofers fasten panels, ridge caps, valleys, and all new pipe/stack flashings to exact specifications.",
      },
      {
        step: "04",
        title: "Thorough Cleanup & Final Inspection",
        description:
          "We clean the property completely, run rolling magnets for stray fasteners, and verify every seam is watertight.",
      },
    ],
    specs: [
      { label: "Lifespan", value: "40 – 60+ Years" },
      { label: "Energy Efficiency", value: "Reflects Solar Rays" },
      { label: "Safety Rating", value: "Fire Resistant Steel" },
      { label: "Maintenance", value: "Ultra-Low Maintenance" },
    ],
    faqs: [
      {
        question: "Can a metal roof be installed over my existing shingles?",
        answer:
          "Some local building codes allow metal roofing to be installed over existing shingles if the decking is solid. However, the roofer must use vented metal or build a ventilation pocket between the layers to avoid moisture from collecting and causing mold and rot. We will inspect your roof and advise whether a tear-off or overlay is best.",
      },
      {
        question: "Does a metal roof help with East Texas summer heat?",
        answer:
          "Yes! Metal is highly energy efficient because it reflects the sun's rays to reduce heat transfer into your attic, and it may even qualify for energy-saving tax credits.",
      },
      {
        question: "Is the higher initial investment of a metal roof worth it?",
        answer:
          "Yes. While installing a metal roof requires a higher initial investment than standard shingles, the cost is recovered both in the multi-decade lifespan of the roof and in increased property value and curb appeal.",
      },
    ],
  },
  {
    slug: "torch-down-rubber-roofing",
    title: "Torch-Down Rubber Roofing for Flat & Low-Pitch Roofs",
    shortTitle: "Torch-Down Rubber",
    tagline:
      "Stop flat-roof leaks permanently with heat-sealed multi-layer asphalt and rubber membranes—without the awful smell of tar.",
    category: "both",
    imageUrl: "/images/rhr/flat-1.jpg",
    secondaryImageUrl: "/images/rhr/flat-page.jpg",
    metaTitle:
      "Torch-Down Rubber & Flat Roofs in Gilmer, Longview & Tyler TX | Raymond Hardin Roofing",
    metaDescription:
      "Stop flat and low-pitch roof leaks with professional torch-down rubber roofing in Gilmer, Longview, Tyler, and East Texas. Commercial buildings, carports, patios & apartments. Call 903-797-2756.",
    heroSummary:
      "Have you worked in an office or walked through a store that had buckets catching water leaks during a rainstorm? That's because water tends to puddle on flatter roofs. Torch-down rubber roofing forms a heat-welded, watertight seal that stops flat-roof leaks.",
    overviewParagraphs: [
      "Commercial buildings often have flat or low-pitch (low-angle) roofs. While high-slope roof lines are common in new home construction, many older East Texas homes also have low-pitch roof areas, and flat or low-slope roof lines are very common on carports, patios, apartments, and condominiums.",
      "Because water tends to puddle on flatter roofs, standard shingles quickly deteriorate and leak. One of the most proven options for flat or low-pitch roofs is torch-down rubber roofing.",
      "The roofing material consists of two or three layers of an asphalt and rubber compound. As the material is heated during installation, it adheres directly to the roof and forms a continuous, watertight seal.",
      "Torch-down rubber has a high tolerance to both East Texas summer heat and winter cold. It expands and contracts as the temperature changes without cracking or melting—and it doesn't have the awful smell of hot tar roofing that is sometimes used on flat roofs. Because of the specialized heating process, torch-down rubber should be applied only by a professional, experienced roofing contractor like Raymond Hardin Roofing.",
    ],
    idealFor: [
      "Commercial buildings, downtown storefronts, offices, and warehouses",
      "Residential low-pitch roof areas, covered patios, sunrooms, and carports",
      "Apartments, condominiums, and multi-family low-slope roofs",
      "Flat roofs where ponding water has caused leaks or deterioration",
    ],
    eastTexasBenefits: [
      {
        title: "Heat-Welded Watertight Seal",
        description:
          "Two to three layers of asphalt and rubber compound are heated to fuse directly to the roof, stopping puddling water leaks.",
      },
      {
        title: "Expands & Contracts Without Cracking",
        description:
          "High tolerance to both 100°F+ Texas summer heat and winter freezes—expanding and contracting without cracking or melting.",
      },
      {
        title: "No Awful Tar Roofing Smell",
        description:
          "Unlike messy hot-tar roofs, torch-down rubber installs cleanly without noxious tar odors for your family, tenants, or customers.",
      },
      {
        title: "Installed by Experienced Specialists",
        description:
          "Torch application requires seasoned training and precision; Raymond Hardin has safely installed flat rubber roofs for over 40 years.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Flat Roof & Drainage Inspection",
        description:
          "We inspect ponding water areas, parapet walls, flashings, and deck condition to give you an exact written estimate.",
      },
      {
        step: "02",
        title: "Deck Repair & Base Layer Prep",
        description:
          "Damaged roofing and rotted decking are replaced, creating a clean, dry substrate for the multi-layer membrane.",
      },
      {
        step: "03",
        title: "Precision Torch-Down Rubber Application",
        description:
          "Our experienced crew heat-fuses the two- or three-layer asphalt and rubber compound into a seamless, watertight barrier.",
      },
      {
        step: "04",
        title: "Perimeter, Vent & Parapet Sealing",
        description:
          "All roof edges, parapet walls, stacks, and drains are sealed and inspected for long-term leak protection.",
      },
    ],
    specs: [
      { label: "Composition", value: "2–3 Layer Asphalt & Rubber" },
      { label: "Ideal Roof Pitch", value: "Flat & Low-Pitch Roofs" },
      { label: "Weather Tolerance", value: "Won't Crack or Melt" },
      { label: "Odor Profile", value: "No Tar Smell" },
    ],
    faqs: [
      {
        question: "Why do flat or low-pitch roofs leak so easily?",
        answer:
          "Water tends to puddle on flatter roofs rather than running off immediately. Standard shingles aren't sealed against standing water, whereas torch-down rubber is heat-welded into a watertight membrane specifically designed for flat and low-pitch surfaces.",
      },
      {
        question: "Does torch-down rubber smell like hot tar?",
        answer:
          "No! Torch-down rubber consists of an asphalt and rubber compound that is heated to adhere cleanly without the awful smell of traditional tar roofing.",
      },
      {
        question: "Can you install torch-down rubber on residential carports and patios?",
        answer:
          "Yes. In addition to commercial buildings, apartments, and condominiums, we frequently install torch-down rubber on residential low-pitch roof areas, carports, and patio covers.",
      },
    ],
  },
  {
    slug: "roof-repair-and-redecks",
    title: "Replacement, Tear-Offs, Re-Decks, Re-Roofing & Leaky Roof Repair",
    shortTitle: "Repair, Tear-Offs & Re-Decks",
    tagline:
      "Water is wonderful—but not when it's dripping through your ceiling. Honest leak tracing, storm damage repair, tear-offs, and structural re-decks.",
    category: "both",
    imageUrl: "/images/rhr/repair-page.jpg",
    secondaryImageUrl: "/images/rhr/crew-at-work.jpg",
    metaTitle:
      "Roof Repair, Leaky Roofs, Tear-Offs & Re-Decks in Gilmer TX | Raymond Hardin Roofing",
    metaDescription:
      "Leaky roof or storm damage in Gilmer or East Texas? Raymond Hardin Roofing specializes in tear-offs, structural re-decks, reroofing, and honest leak repairs. Call 903-797-2756.",
    heroSummary:
      "Even a small leak can mean big problems. Because the shape of a roof makes water travel, that stain on your ceiling may be the last few drops of a leak that started elsewhere. We pinpoint leaks, repair storm damage, and perform full tear-offs and re-decks.",
    overviewParagraphs: [
      "Water is wonderful, but not when it's dripping through your ceiling! Finding the source of a leak can be tricky because the shape of the roof makes water travel. If you see exterior signs (missing, cracked, curled, or 'bald' shingles, loose flashing around chimneys or stacks, mold where rooflines meet) or interior signs (ceiling stains, blistering paint, damp rafters, or points of daylight in your attic around chimneys and vents), call Raymond Hardin Roofing right away.",
      "When it comes to Reroofing vs. Roof Replacement: Reroofing adds new roofing over an existing shingle roof. Building codes allow only two layers of shingles, and reroofing is an option only if the decking is solid and free of major leaks or decay. Because hidden problems are likely to recur with reroofing, full tear-off and roof replacement is usually the better long-term option.",
      "A new roof adds value to your home and has the highest return on investment of all exterior home improvements—averaging 105%. We specialize in full tear-offs, structural wood re-decks, replacing boards and trim, and replacing all turbines, pipes, and stacks.",
      "If you suspect Storm Damage from heavy rain, tornadoes, hail, high winds, or fallen tree branches: stay safe by staying off the roof and call us first before you call your insurance company. We will make a thorough inspection of the damage and give your insurance company complete information to help you receive the most complete coverage allowed by your policy.",
    ],
    idealFor: [
      "Active ceiling leaks, damp attic rafters, and worn chimney/vent flashing",
      "Storm, hail ('dimples' in shingles/metal), high wind, and fallen tree limb damage",
      "Roofs 20+ years old showing sagging, buckling, curling, or granules in gutters",
      "Homes needing full multi-layer tear-offs and structural wood re-decking",
    ],
    eastTexasBenefits: [
      {
        title: "Call Us First Before Insurance After a Storm",
        description:
          "We thoroughly inspect hail dimples, lifted flashing, and wind damage and provide complete documentation to help you receive full policy coverage.",
      },
      {
        title: "Avoid Out-of-Town Storm Chasers",
        description:
          "Storm damage is a magnet for con artists. Don't be a victim twice—trust a local Gilmer contractor established in 1995.",
      },
      {
        title: "Complete Tear-Offs, Re-Decks & Trim",
        description:
          "We strip old shingles, replace rotted decking boards and fascia trim, and install new turbines, pipes, and stacks.",
      },
      {
        title: "8-Point Failing Roof & Attic Check",
        description:
          "We check for sagging decking, granule loss, exposed nails, and points of daylight around chimneys and vents inside your dark attic.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Exterior & Attic Leak / Storm Inspection",
        description:
          "Stay safe on the ground—our crew inspects your shingles, flashing, gutters, and attic rafters to trace the true source of leaks or storm damage.",
      },
      {
        step: "02",
        title: "Honest Repair vs. Replacement Assessment",
        description:
          "We give you straight answers and a free exact-cost estimate—and work with you while you wait on insurance payments.",
      },
      {
        step: "03",
        title: "Tarp Protection, Re-Decking & Restoration",
        description:
          "We tarp your landscaping, tear off damaged layers, replace rotted wood decking, and install new roofing and hardware.",
      },
      {
        step: "04",
        title: "Daily Magnet Sweep & Clean Property",
        description:
          "Every day on the job, we roll heavy-duty magnets across your lawn and driveway so your property is safe for family and pets.",
      },
    ],
    specs: [
      { label: "Exterior Home ROI", value: "105% Average ROI" },
      { label: "Estimate Turnaround", value: "Usually Within 24 Hours" },
      { label: "Storm Support", value: "Full Insurance Documentation" },
      { label: "Cleanup Standard", value: "Tarps + Daily Rolling Magnet" },
    ],
    faqs: [
      {
        question: "What are the signs that my roof is failing and needs replacement?",
        answer:
          "Key signs include: (1) The roof is sagging or buckling; (2) Shingles are missing, broken, lifting, or curling; (3) Shingle granules in gutters or on the ground; (4) Dark areas of mold, rot, or moss; (5) Loose, exposed nails; (6) Water stains on ceilings or walls; (7) Points of light showing around the chimney or vents when you go into the dark attic on a sunny day; or (8) The roof is 20 years old or older.",
      },
      {
        question: "Should I call Raymond Hardin Roofing before calling my insurance company after a storm?",
        answer:
          "Yes! If you see or suspect storm damage, call us first before you call your insurance company. We will make a thorough inspection of the damage and give your insurance company complete information to help you receive the most complete coverage allowed by your policy.",
      },
      {
        question: "Is it better to reroof over old shingles or tear them off?",
        answer:
          "Reroofing over existing shingles is only allowed once by building codes (maximum two layers) and only if the underlying decking is completely solid with no leaks or decay. Because hidden deck problems often recur with reroofing, a full tear-off and roof replacement is usually the better investment.",
      },
    ],
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing — Flat Torch-Down, Metal & Shingle",
    shortTitle: "Commercial Roofing",
    tagline:
      "Licensed, bonded, insured, and BBB Accredited commercial roofing for Gilmer, Longview, Tyler, and East Texas businesses.",
    category: "commercial",
    imageUrl: "/images/rhr/slider-img4.png",
    secondaryImageUrl: "/images/rhr/metal-3.jpg",
    metaTitle:
      "Commercial Roofing Contractor in Gilmer, Longview & Tyler TX | Raymond Hardin Roofing",
    metaDescription:
      "Commercial flat torch-down rubber roofs, metal building roofs, and shingle replacements across Gilmer, Longview, Tyler, and East Texas. Licensed, bonded & insured since 1995. Call 903-797-2756.",
    heroSummary:
      "Protect your business, inventory, church, or multi-family building with 40+ years of East Texas commercial roofing experience. We install and repair Torch-Down Rubber flat roofs, commercial Metal roofs, and steep-slope Shingle systems.",
    overviewParagraphs: [
      "Commercial buildings, offices, retail storefronts, apartments, and condominiums across East Texas often have flat or low-pitch roofs where water tends to puddle and cause leaks. Raymond Hardin Roofing specializes in heat-welded Torch-Down Rubber membranes that stop commercial flat-roof leaks without the awful smell of hot tar.",
      "We also install and repair long-lasting, fire-resistant commercial Metal roofing and steep-slope architectural Shingle roofs for churches, office complexes, and commercial properties throughout Gilmer, Longview, Tyler, Pittsburg, Mount Pleasant, and surrounding towns.",
      "Raymond Hardin Roofing is licensed, bonded, insured, and a BBB Accredited Business. We take care of all necessary building permits, protect your parking lot and grounds with tarps and daily magnetic nail sweeps, and deliver top-quality professional work at a fair price.",
    ],
    idealFor: [
      "Downtown commercial buildings and retail storefronts with flat roofs",
      "Churches, sanctuaries, fellowship halls, and professional offices",
      "Apartments, condominiums, and multi-family properties",
      "Warehouses, metal buildings, and industrial facilities across East Texas",
    ],
    eastTexasBenefits: [
      {
        title: "Licensed, Bonded, Insured & BBB Accredited",
        description:
          "Full commercial credentials and local permits handled seamlessly by an established 1995 Gilmer contractor.",
      },
      {
        title: "Odor-Free Torch-Down Flat Roofs",
        description:
          "Two- to three-layer asphalt and rubber compound fused watertight without disrupting your tenants or customers with tar fumes.",
      },
      {
        title: "Energy-Efficient Commercial Metal",
        description:
          "Fire-resistant, solar-reflective steel panels that lower cooling loads and require minimal maintenance.",
      },
      {
        title: "Clean, Safe Commercial Job Sites",
        description:
          "Daily rolling magnet sweeps across parking lots and entryways plus full tarp protection.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "On-Site Commercial Roof Inspection",
        description:
          "We inspect your flat membrane, metal seams, parapet walls, drains, and decking and provide an exact written cost estimate.",
      },
      {
        step: "02",
        title: "Permits & Insurance Coordination",
        description:
          "We handle all necessary local permits and provide complete documentation if your commercial roof suffered storm or hail damage.",
      },
      {
        step: "03",
        title: "Professional Installation",
        description:
          "Our experienced crew installs your torch-down rubber, metal, or shingle roof efficiently while protecting your property.",
      },
      {
        step: "04",
        title: "Daily Magnet Cleanup & Walkthrough",
        description:
          "We sweep parking areas daily with rolling magnets and ensure 100% customer satisfaction.",
      },
    ],
    specs: [
      { label: "Credentials", value: "Licensed, Bonded & Insured" },
      { label: "Accreditation", value: "BBB Accredited Business" },
      { label: "Systems", value: "Torch-Down, Metal & Shingle" },
      { label: "Experience", value: "40+ Years in East Texas" },
    ],
    faqs: [
      {
        question: "Do you handle building permits for commercial roofing jobs?",
        answer:
          "Yes! With our free estimate, you'll know the exact cost of your roof installation or repair, and we take care of all the necessary permits.",
      },
      {
        question: "Is Raymond Hardin Roofing licensed, bonded, and insured?",
        answer:
          "Yes. Raymond Hardin Roofing is licensed, bonded, insured, and is a BBB Accredited Business serving East Texas since 1995.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): RoofingService | undefined {
  return ROOFING_SERVICES.find((service) => service.slug === slug);
}

export function getServiceCategoryLabel(category: ServiceCategory): string {
  switch (category) {
    case "residential":
      return "Residential Roofing";
    case "commercial":
      return "Commercial Roofing";
    case "both":
      return "Residential & Commercial";
    default: {
      const _exhaustiveCheck: never = category;
      return _exhaustiveCheck;
    }
  }
}
