export interface RepairPage {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  points: string[];
  pointsHeading: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const REPAIR_PAGES: RepairPage[] = [
  {
    slug: "storm-hail-damage",
    title: "Storm and hail damage",
    summary:
      "Stay off the roof. We inspect hail, wind, and limb damage, then write it up for your insurance company.",
    imageUrl: "/images/rhr/repair-page.jpg",
    metaTitle: "Storm and Hail Roof Damage in Gilmer TX | Raymond Hardin Roofing",
    metaDescription:
      "Hail, wind, and fallen-limb roof inspections in Gilmer and East Texas. We document the damage for your insurance company. Call 903-797-2756.",
    intro:
      "Heavy rain, hail, high wind, and fallen limbs are common in East Texas. Stay off the roof. Call us and we will inspect the damage, then give your insurance company a written account of what we found.",
    sections: [
      {
        heading: "Call us before the insurance company",
        paragraphs: [
          "If you suspect storm damage, call us before you call your insurance company. We inspect the roof and give the adjuster a complete account of the damage so the claim can be filed against what is actually there.",
          "We work with you while you wait on the insurance payment, and we pull the permits for the repair or the replacement.",
        ],
      },
    ],
    pointsHeading: "What we look for",
    points: [
      "Hail marks in shingles and dimples in metal",
      "Lifted or loose flashing",
      "Shingles missing after wind",
      "Broken decking from limbs",
    ],
    faqs: [
      {
        question: "Should I call Raymond Hardin Roofing before my insurance company?",
        answer:
          "Yes. We inspect the damage first and give your insurance company a complete account of what we found, so the claim matches the roof.",
      },
      {
        question: "Should I get on the roof after a storm?",
        answer:
          "No. Stay on the ground. Wet shingles and a damaged deck are not safe to walk, and we will do the inspection.",
      },
    ],
  },
  {
    slug: "leaky-roof-repair",
    title: "Leaky roof repair",
    summary:
      "A ceiling stain is often the end of the leak, not the start. We trace the water and repair the source.",
    imageUrl: "/images/rhr/shingle-1.jpg",
    metaTitle: "Leaky Roof Repair in Gilmer TX | Raymond Hardin Roofing",
    metaDescription:
      "Leak tracing and roof repair in Gilmer and East Texas. We find where the water is getting in, then fix that spot. Call 903-797-2756.",
    intro:
      "A stain on the ceiling is often the last place the water shows up. It runs along the deck before it comes through. We trace it from the attic and the roof, then repair the source.",
    sections: [
      {
        heading: "A small leak is still a wet deck",
        paragraphs: [
          "Finding the source takes time because the shape of the roof moves the water away from the hole. We check the shingles, the flashing at chimneys and stacks, and the attic before we decide whether it is a repair or a bigger job.",
          "If the wood under the leak is soft, a patch on top will not hold. In that case we replace the bad decking as part of the repair.",
        ],
      },
    ],
    pointsHeading: "Signs the roof is letting water in",
    points: [
      "Missing, cracked, or curling shingles",
      "Loose flashing at chimneys and stacks",
      "Ceiling stains or blistered paint",
      "Damp rafters",
      "Daylight in the attic around chimneys and vents",
    ],
    faqs: [
      {
        question: "Why is the stain not under the hole?",
        answer:
          "Water travels along the deck and the rafters before it drips. The stain on the ceiling is often several feet from where the roof is open.",
      },
      {
        question: "Can a leak be repaired without replacing the whole roof?",
        answer:
          "Often, yes, if the deck is still solid and the rest of the roof has life left. We will tell you when a patch is enough and when the wood needs to come out.",
      },
    ],
  },
  {
    slug: "new-roof-or-repair",
    title: "Do I need a new roof?",
    summary:
      "A repair is right when the deck is sound. A replacement is right when the roof is worn out or the wood is rotten.",
    imageUrl: "/images/rhr/slider-img2.png",
    metaTitle: "Repair or New Roof in Gilmer TX | Raymond Hardin Roofing",
    metaDescription:
      "Honest repair-or-replace advice for Gilmer and East Texas roofs. We inspect the shingles and the deck before we recommend a tear-off. Call 903-797-2756.",
    intro:
      "We will tell you if the roof can be repaired. A new roof is the better job when the shingles are used up or the deck underneath has started to go.",
    sections: [
      {
        heading: "Repair, reroof, or tear-off",
        paragraphs: [
          "Building codes allow only two layers of shingles. Laying a new roof over an old one is an option only when the deck is solid and dry. Hidden rot usually comes back, so a full tear-off is the longer-lasting job when the wood is questionable.",
          "A tear-off includes the bad decking, the trim that has rotted, and new turbines, pipes, and stacks. Tarps go down before we start, and we run a magnet over the yard each day for nails.",
        ],
      },
    ],
    pointsHeading: "Signs it is time to replace",
    points: [
      "The roof is sagging or buckling",
      "Shingles are missing, lifting, or curling",
      "Granules in the gutters",
      "Dark mold, rot, or moss",
      "Loose or exposed nails",
      "Water stains inside",
      "Daylight around the chimney or vents in a dark attic",
      "The roof is 20 years old or older",
    ],
    faqs: [
      {
        question: "Is it better to roof over old shingles or tear them off?",
        answer:
          "Roofing over old shingles is only allowed once, and only if the deck is solid with no leaks or decay. A tear-off is usually the better job because it lets us replace rotten wood.",
      },
      {
        question: "Will you tell me if I only need a repair?",
        answer:
          "Yes. If the deck is sound and the problem is local, we repair it. We recommend a replacement when the roof is worn out or the wood is gone.",
      },
    ],
  },
];

export function getRepairBySlug(slug: string): RepairPage | undefined {
  return REPAIR_PAGES.find((page) => page.slug === slug);
}
