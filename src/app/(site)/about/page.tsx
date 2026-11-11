import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { GOOGLE_REVIEW_SUMMARY, GOOGLE_REVIEWS_URL } from "@/data/testimonials";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { GoogleReviewQr } from "@/components/ui/GoogleReviewQr";
import { GoogleReviewCarousel } from "@/components/home/GoogleReviewCarousel";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { HOME, PAGES } from "@/data/sections";

const about = PAGES.about;

export const metadata: Metadata = {
  title: about.metaTitle,
  description: about.metaDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${about.metaTitle} | ${COMPANY_INFO.name}`,
    description: about.metaDescription,
    url: `${COMPANY_INFO.domain}/about`,
  },
  twitter: {
    title: `${about.metaTitle} | ${COMPANY_INFO.name}`,
    description: about.metaDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />

      <article className="bg-white pt-10 pb-16 sm:pt-14">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="kicker mb-4">{about.kicker}</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            {about.title}
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            {about.intro}
          </p>

          <div className="mt-12 grid items-start gap-10 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-12">
            <Image
              src={about.portrait}
              alt={about.portraitAlt}
              width={227}
              height={323}
              priority
              className="h-auto w-[210px] max-w-full rounded-full"
            />
            <div className="max-w-[640px] space-y-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              <p>{COMPANY_INFO.storySummary}</p>
              <p>{about.extraParagraph}</p>
              <p>{COMPANY_INFO.carePromise}</p>
              <p>{COMPANY_INFO.credentialsSummary}</p>
            </div>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-[#e6e6e6] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.stats.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-[#5c5c5c]">{item.label}</dt>
                <dd className="mt-1 font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-14 aspect-[16/7] w-full overflow-hidden bg-[#e7ebea]">
            <Image
              src={about.photo}
              alt={about.photoAlt}
              fill
              sizes="(min-width: 1140px) 1052px, 100vw"
              quality={80}
              className="object-cover"
            />
          </div>
        </div>
      </article>

      <section id="how-to-choose-a-roofer" className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            {about.chooseTitle}
          </h2>
          <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            {about.chooseIntro}
          </p>
          <ol className="mt-10 border-t border-[#0e0e0e]">
            {about.chooseItems.map((item, index) => (
              <li
                key={item.question}
                className="grid gap-3 border-b border-[#0e0e0e]/15 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-8"
              >
                <span className="font-display text-[28px] font-bold leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0e0e0e]">{item.question}</h3>
                  <p className="mt-2 max-w-[40rem] text-[16px] leading-relaxed text-[#3a3a3a]">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            {HOME.reviews.title}
          </h2>
          <p className="mt-4 text-center text-[#5c5c5c]">{GOOGLE_REVIEW_SUMMARY}</p>
          <GoogleReviewCarousel />
          <div className="mt-8 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold"
            >
              {HOME.reviews.moreLabel}
            </a>
          </div>
          <GoogleReviewQr />
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            {about.contactTitle}
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold">
            <a href={COMPANY_INFO.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {COMPANY_INFO.phoneDisplay}
              <span className="text-sm font-medium text-[#5c5c5c]">{COMPANY_INFO.phoneLabel}</span>
            </a>
            <a href={COMPANY_INFO.phoneSecondaryHref} className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {COMPANY_INFO.phoneSecondaryDisplay}
              <span className="text-sm font-medium text-[#5c5c5c]">{COMPANY_INFO.phoneSecondaryLabel}</span>
            </a>
            <a href={COMPANY_INFO.emailHref} className="inline-flex items-center gap-2">
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="mt-8">
            <EstimateForm compact variant="card" />
          </div>
          <p className="mt-6 text-sm text-[#5c5c5c]">
            Or <Link href="/contact" className="underline underline-offset-4">{about.contactNote}</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
