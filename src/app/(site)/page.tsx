import React from "react";
import Link from "next/link";
import { CheckCircle2, HardHat } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroCarousel } from "@/components/home/IntroCarousel";
import { RoofingSystemsSection } from "@/components/home/RoofingSystemsSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { GoogleReviewQr } from "@/components/ui/GoogleReviewQr";
import { GoogleReviewCarousel } from "@/components/home/GoogleReviewCarousel";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildFAQSchema,
} from "@/components/seo/JsonLd";
import { GOOGLE_REVIEW_SUMMARY, GOOGLE_REVIEWS_URL } from "@/data/testimonials";
import { HOMEPAGE_FAQS } from "@/data/homepage";
import { HOME } from "@/data/sections";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildFAQSchema(HOMEPAGE_FAQS),
        ]}
      />

      {/* DOM Elements 268ae89b & 78d04f1: Hero + 4-Column Divided Trust Strip */}
      <HeroSection />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <IntroCarousel />
          <div className="lg:pr-4">
            <h2 className="font-display text-[52px] sm:text-[68px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0e0e0e]">
              {HOME.intro.title}
            </h2>
            <p className="mt-6 text-[#3a3a3a] text-[17px] leading-relaxed max-w-md">
              {HOME.intro.body}
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full border border-[#cfcfcf] flex items-center justify-center shrink-0 text-[#0e0e0e]">
                  <HardHat className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0e0e0e]">{HOME.intro.firstTitle}</h3>
                  <p className="text-[#5c5c5c] text-[15px] leading-relaxed mt-1">
                    {HOME.intro.firstBody}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full border border-[#cfcfcf] flex items-center justify-center shrink-0 text-[#0e0e0e]">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0e0e0e]">{HOME.intro.secondTitle}</h3>
                  <p className="text-[#5c5c5c] text-[15px] leading-relaxed mt-1">
                    {HOME.intro.secondBody}
                  </p>
                </div>
              </div>
            </div>
            <Link href="/about" className="inline-block mt-8 text-[#0e0e0e] underline underline-offset-4">
              {HOME.intro.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      <RoofingSystemsSection />

      <section className="bg-[#f6f5f2] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <p className="kicker mb-4">{HOME.process.kicker}</p>
              <h2 className="font-display text-[48px] sm:text-[64px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0e0e0e]">
                {HOME.process.title}
              </h2>
            </div>
            <p className="max-w-sm text-[#3a3a3a] text-[17px] leading-relaxed lg:pb-2">
              {HOME.process.body}
            </p>
          </div>

          <ol className="grid grid-cols-1 border-t border-[#0e0e0e] md:grid-cols-3">
            {HOME.process.steps.map((item, index) => (
              <li
                key={item.step}
                className={`py-8 md:py-10 md:pr-10 ${index > 0 ? "border-t border-[#d5d5d2] md:border-t-0 md:border-l md:pl-10" : ""}`}
              >
                <div className="font-display text-[42px] font-bold leading-none tracking-[-0.03em] text-[#0e0e0e]">
                  {item.step}
                </div>
                <h3 className="mt-5 font-display text-[32px] sm:text-[36px] font-bold leading-[0.95] text-[#0e0e0e]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-[16px] leading-relaxed text-[#5c5c5c]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/contact"
            className="mt-12 inline-block text-[#0e0e0e] underline underline-offset-4"
          >
            {HOME.process.linkLabel}
          </Link>
        </div>
      </section>

      {/* DOM Element 18d97ab8: Raymond Hardin Roofing in Gilmer + Map + Surrounding Areas Box */}
      <ServiceAreaSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            {HOME.stats.title}
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-[#e6e6e6] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOME.stats.items.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-[#5c5c5c]">{item.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* DOM Element 77e6a308 / 6fcbdfb5: "Why Homeowners Trust Raymond Hardin Roofing" Check-Circle Bar + 6 Authentic Customer Reviews */}
      <section id="reviews" className="bg-white py-16 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-[44px] sm:text-[60px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0e0e0e]">
            {HOME.reviews.title}
          </h2>
          <p className="mt-4 text-center text-[#5c5c5c]">{GOOGLE_REVIEW_SUMMARY}</p>

          <GoogleReviewCarousel />

          <div className="mt-10 flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold text-[#0e0e0e]"
            >
              {HOME.reviews.moreLabel}
            </a>
          </div>
          <GoogleReviewQr />
        </div>
      </section>

      <section id="recent-projects" className="border-b border-[#e6e6e6] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            {HOME.crew.title}
          </h2>
          <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            {HOME.crew.body}
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.crew.photos.map((photo) => (
              <li key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="aspect-[3/2] w-full object-cover"
                />
                <h3 className="mt-3 font-display text-[28px] font-bold leading-none">
                  {photo.title}
                </h3>
              </li>
            ))}
          </ul>
          <Link href="/gallery" className="mt-10 inline-block underline underline-offset-4">
            {HOME.crew.linkLabel}
          </Link>
        </div>
      </section>

      {/* DOM Element 3a6e45a7: Frequently Asked Questions (1–12 Accordion) */}
      <section id="faqs" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <h2 className="lg:col-span-7 font-display text-[48px] sm:text-[64px] font-bold uppercase leading-[0.9]">
              {HOME.faqHeading.title}
            </h2>
            <p className="lg:col-span-5 text-[#3a3a3a]">
              {HOME.faqHeading.body}
            </p>
          </div>
          <FaqAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <EstimateForm variant="card" />
        </div>
      </section>
    </>
  );
}
