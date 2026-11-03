import repairsContent from "../content/repairs.json";

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

export const REPAIR_PAGES = repairsContent.repairs as RepairPage[];

export function getRepairBySlug(slug: string): RepairPage | undefined {
  return REPAIR_PAGES.find((page) => page.slug === slug);
}
