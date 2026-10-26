import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import {
  SERVICE_AREA_CITIES,
  getCityBySlug,
} from "@/data/serviceAreas";
import { ROOFING_SERVICES } from "@/data/services";
import { CITY_CARD_LINES, cityPhoto } from "@/data/cityPhotos";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

const resources = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Repairs", href: "/repairs" },
  { label: "Contact", href: "/contact" },
];

export async function generateStaticParams() {
  return SERVICE_AREA_CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);

  if (!cityData) {
    return { title: "Service Area Not Found" };
  }

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: {
      canonical: `/service-areas/${cityData.slug}`,
    },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url: `${COMPANY_INFO.domain}/service-areas/${cityData.slug}`,
    },
  };
}

export default async function CityServiceAreaPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const photo = cityPhoto(city.slug);
  const others = SERVICE_AREA_CITIES.filter((item) => item.slug !== city.slug);

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(city),
          buildFAQSchema(city.faqs),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service areas", path: "/service-areas" },
            { name: city.city, path: `/service-areas/${city.slug}` },
          ]),
        ]}
      />

      <div className="mx-auto grid max-w-[1100px] items-start gap-12 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
        <article>
          <nav className="flex items-center gap-2 text-sm text-[#5c5c5c]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:underline">Service areas</Link>
            <span>/</span>
            <span className="text-[#0e0e0e]">{city.city}</span>
          </nav>

          <p className="mt-8 text-sm font-semibold text-[#5c5c5c]">
            East Texas · {city.county}
          </p>
          <h1 className="mt-3 font-display text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[#0e0e0e] sm:text-[52px]">
            Roofing in {city.city}, TX, and surrounding areas
          </h1>

          {photo ? (
            <figure className="mt-8">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[16/9] w-full object-cover"
              />
              <figcaption className="mt-2 text-sm text-[#5c5c5c]">
                Photo:{" "}
                <a href={photo.href} className="underline" rel="noopener noreferrer">
                  {photo.credit}
                </a>
                , {photo.license}
              </figcaption>
            </figure>
          ) : null}

          <div className="mt-8 max-w-[720px] space-y-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            <p>{CITY_CARD_LINES[city.slug]}</p>
            <p>{city.localContextParagraph}</p>
            <p>{city.popularServicesNote}</p>
          </div>

          <section className="mt-12">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">
              What the roofs need here
            </h2>
            <div className="mt-6 max-w-[720px] space-y-6">
              {city.localRoofChallenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="text-lg font-semibold text-[#0e0e0e]">{challenge.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">
              Surrounding areas
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/service-areas/${item.slug}`} className="font-semibold underline underline-offset-4">
                    {item.city}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 max-w-[720px]">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">
              {city.city} questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={city.faqs} />
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <nav className="bg-[#284078] p-6 text-white" aria-label="Our services">
            <h2 className="font-display text-[28px] font-bold uppercase leading-none">Our services</h2>
            <ul className="mt-2">
              {ROOFING_SERVICES.map((service) => (
                <li key={service.slug} className="border-b border-white/25">
                  <Link
                    href={`/services/${service.slug}`}
                    className="block py-3 font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="bg-[#284078] p-6 text-white" aria-label="Resources">
            <h2 className="font-display text-[28px] font-bold uppercase leading-none">Resources</h2>
            <ul className="mt-2">
              {resources.map((item) => (
                <li key={item.href} className="border-b border-white/25">
                  <Link
                    href={item.href}
                    className="block py-3 font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Book a visit in {city.city}
          </h2>
          <a href={COMPANY_INFO.phoneHref} className="mt-4 inline-flex items-center gap-2 text-lg font-semibold">
            <Phone className="h-5 w-5" />
            {COMPANY_INFO.phoneDisplay}
          </a>
          <div className="mt-8">
            <EstimateForm defaultCity={city.city} compact />
          </div>
        </div>
      </section>
    </>
  );
}
