import servicesContent from "../content/services.json";
import { PAGES } from "@/data/sections";

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
  listSummary: string;
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

export const ROOFING_SERVICES = servicesContent.services as RoofingService[];

export function getServiceBySlug(slug: string): RoofingService | undefined {
  return ROOFING_SERVICES.find((service) => service.slug === slug);
}

export function getServiceCategoryLabel(category: ServiceCategory): string {
  switch (category) {
    case "residential":
      return PAGES.serviceDetail.residentialLabel;
    case "commercial":
      return PAGES.serviceDetail.commercialLabel;
    case "both":
      return PAGES.serviceDetail.bothLabel;
    default: {
      const _exhaustiveCheck: never = category;
      return _exhaustiveCheck;
    }
  }
}
