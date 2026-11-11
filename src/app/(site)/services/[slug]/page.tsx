import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import {
  ROOFING_SERVICES,
  getServiceBySlug,
  getServiceCategoryLabel,
} from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { GoogleReviewQr } from "@/components/ui/GoogleReviewQr";
import { GoogleReviewCarousel } from "@/components/home/GoogleReviewCarousel";
import { GOOGLE_REVIEW_SUMMARY, GOOGLE_REVIEWS_URL } from "@/data/testimonials";
import { fillTemplate, HOME, PAGES } from "@/data/sections";
import {
  JsonLd,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

const detail = PAGES.serviceDetail;

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Roofing Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${COMPANY_INFO.domain}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema(service),
          buildFAQSchema(service.faqs),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Roofing Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 pt-8 pb-16 sm:pt-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#5c5c5c]">
            <Link href="/" className="hover:underline">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[#0e0e0e]">{service.shortTitle}</span>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14">
            <div>
              <p className="kicker mb-4">{getServiceCategoryLabel(service.category)}</p>
              <h1 className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e]">
                <span className="block text-[46px] sm:text-[64px]">{service.shortTitle}</span>
                <span className="mt-2 block text-[28px] sm:text-[36px]">{detail.placeLine}</span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
                {service.heroSummary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/contact" className="btn-sun">{detail.bookButton}</Link>
                <a href={COMPANY_INFO.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e7ebea]">
              <Image
                src={service.imageUrl}
                alt={`${service.shortTitle} by Raymond Hardin Roofing`}
                fill
                priority
                sizes="(min-width: 1024px) 400px, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 border-t border-[#e6e6e6] pt-12">
            <h2 className="font-display text-[32px] font-bold leading-[0.95] sm:text-[40px]">
              {fillTemplate(detail.whyTitle, { service: service.shortTitle.toLowerCase() })}
            </h2>
            <div className="mt-6 max-w-[720px] space-y-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              {service.overviewParagraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">{detail.whereTitle}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <li key={item} className="flex gap-3 border border-[#e6e6e6] px-4 py-4 text-[16px] leading-relaxed text-[#3a3a3a]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#284078]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">{detail.weatherTitle}</h2>
            <div className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {service.eastTexasBenefits.map((benefit) => (
                <div key={benefit.title} className="border-t border-[#0e0e0e] pt-4">
                  <h3 className="text-lg font-semibold text-[#0e0e0e]">{benefit.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-[#e6e6e6] pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-sm text-[#5c5c5c]">{spec.label}</dt>
                <dd className="mt-1 font-semibold text-[#0e0e0e]">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <section className="bg-white pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <ol className="grid grid-cols-1 gap-10 border-t border-[#0e0e0e] pt-10 md:grid-cols-4">
            {service.processSteps.map((step) => (
              <li key={step.step}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c5c5c]">
                  {detail.stepLabel} {step.step}
                </p>
                <h2 className="mt-3 font-display text-[28px] font-bold leading-[0.95]">{step.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5c5c5c]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="font-display text-[40px] sm:text-[52px] font-bold leading-[0.95] tracking-[-0.03em]">
            {detail.promiseTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
            {detail.promiseBody}
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">{detail.clearTitle}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5c5c5c]">
                {detail.clearBody}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{detail.cleanTitle}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5c5c5c]">
                {detail.cleanBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-center font-display text-[40px] sm:text-[52px] font-bold leading-[0.95] tracking-[-0.03em]">
            {HOME.reviews.title}
          </h2>
          <p className="mt-4 text-center text-[#5c5c5c]">{GOOGLE_REVIEW_SUMMARY}</p>
          <GoogleReviewCarousel />
          <div className="mt-8 text-center">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold">
              {HOME.reviews.moreLabel}
            </a>
          </div>
          <GoogleReviewQr />
        </div>
      </section>

      <section className="bg-white pb-8">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="font-display text-[40px] sm:text-[52px] font-bold leading-[0.95] tracking-[-0.03em]">
            {detail.questionsTitle}
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="font-display text-[40px] sm:text-[52px] font-bold leading-[0.95] tracking-[-0.03em]">
            {detail.readyTitle}
          </h2>
          <p className="mt-4 text-[17px] text-[#3a3a3a]">
            Gilmer, TX {COMPANY_INFO.headquarters.zip}
          </p>
          <a href={COMPANY_INFO.phoneHref} className="mt-3 inline-flex items-center gap-2 text-lg font-semibold">
            <Phone className="h-5 w-5" />
            {COMPANY_INFO.phoneDisplay}
          </a>
          <div className="mt-8">
            <EstimateForm defaultService={service.shortTitle} compact />
          </div>
        </div>
      </section>
    </>
  );
}
