import { COMPANY_INFO } from "@/data/company";
import { ROOFING_SERVICES } from "@/data/services";
import { REPAIR_PAGES } from "@/data/repairs";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreas";

export const dynamic = "force-static";

export function GET() {
  const base = COMPANY_INFO.domain;

  const lines: string[] = [
    `# ${COMPANY_INFO.name}`,
    "",
    `> Family-owned East Texas roofing contractor based in ${COMPANY_INFO.headquarters.city}, ${COMPANY_INFO.headquarters.state} (${COMPANY_INFO.headquarters.county}) since ${COMPANY_INFO.foundedYear}. Over ${COMPANY_INFO.experienceYears} years of hands-on residential and commercial roofing experience. Free same-day and next-day roof inspections, licensed, bonded, insured, and BBB Accredited (A+).`,
    "",
    "## Contact & Hours",
    "",
    `- Work Phone: ${COMPANY_INFO.phoneDisplay}`,
    `- Cell Phone: ${COMPANY_INFO.phoneSecondaryDisplay}`,
    `- Email: ${COMPANY_INFO.email}`,
    `- Headquarters: ${COMPANY_INFO.headquarters.city}, ${COMPANY_INFO.headquarters.state} ${COMPANY_INFO.headquarters.zip} (${COMPANY_INFO.headquarters.county})`,
    `- Hours: ${COMPANY_INFO.hours.weekdays} (${COMPANY_INFO.hours.emergency})`,
    `- [Request a Free Roof Inspection](${base}/contact): Book a same-day or next-day estimate online.`,
    "",
    "## Core Pages",
    "",
    `- [Home](${base}/): Overview of roofing systems, process, East Texas service map, customer reviews, and FAQs.`,
    `- [Roofing Services](${base}/services): Complete list of residential and commercial roofing installations and replacements.`,
    `- [Roof Repairs](${base}/repairs): Leak detection, storm damage, flashing, pipe boot, and decking repair services.`,
    `- [East Texas Service Areas](${base}/service-areas): Cities and counties served across East Texas.`,
    `- [Project Gallery](${base}/gallery): Photos of shingle, metal, and torch-down flat roof installations and our Gilmer crew.`,
    `- [About Raymond Hardin Roofing](${base}/about): Company story since ${COMPANY_INFO.foundedYear}, jobsite cleanup standards, and how to choose a roofer.`,
    `- [Contact & Free Estimate](${base}/contact): Direct phone numbers and online inspection request form.`,
    "",
    "## Roofing Services",
    "",
    ...ROOFING_SERVICES.map(
      (service) =>
        `- [${service.shortTitle}](${base}/services/${service.slug}): ${service.listSummary}`
    ),
    "",
    "## Roof Repairs",
    "",
    ...REPAIR_PAGES.map(
      (repair) =>
        `- [${repair.title}](${base}/repairs/${repair.slug}): ${repair.summary}`
    ),
    "",
    "## East Texas Service Areas",
    "",
    ...SERVICE_AREA_CITIES.map(
      (city) =>
        `- [${city.city}, TX Roofing](${base}/service-areas/${city.slug}): ${city.county} — ${city.cardLine}`
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
