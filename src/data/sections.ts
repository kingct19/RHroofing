import heroContent from "../content/home/hero.json";
import introContent from "../content/home/intro.json";
import systems from "../content/home/systems.json";
import process from "../content/home/process.json";
import serviceArea from "../content/home/towns.json";
import stats from "../content/home/facts.json";
import crew from "../content/home/crew.json";
import questions from "../content/home/questions.json";
import reviewsContent from "../content/reviews.json";
import about from "../content/copy/about.json";
import contact from "../content/copy/contact.json";
import gallery from "../content/copy/gallery.json";
import services from "../content/copy/services.json";
import repairs from "../content/copy/repairs.json";
import serviceAreas from "../content/copy/serviceAreas.json";
import serviceDetail from "../content/copy/serviceDetail.json";
import repairDetail from "../content/copy/repairDetail.json";
import cityDetail from "../content/copy/cityDetail.json";
import estimate from "../content/copy/estimate.json";
import reviewQr from "../content/copy/reviewQr.json";
import notFound from "../content/copy/notFound.json";
import footer from "../content/copy/footer.json";
import navigation from "../content/copy/navigation.json";

const { slides: heroSlides, ...hero } = heroContent;
const { slides: introSlides, ...intro } = introContent;
const { faqs, ...faqHeading } = questions;

export const HOME = {
  hero,
  heroSlides,
  intro,
  introSlides,
  systems,
  process,
  serviceArea,
  stats,
  reviews: {
    title: reviewsContent.title,
    moreLabel: reviewsContent.moreLabel,
  },
  crew,
  faqHeading,
  faqs,
};

export const PAGES = {
  about,
  contact,
  gallery,
  services,
  repairs,
  serviceAreas,
  serviceDetail,
  repairDetail,
  cityDetail,
  estimate,
  reviewQr,
  notFound,
  footer,
  navigation,
};

export function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => values[key] ?? "");
}
