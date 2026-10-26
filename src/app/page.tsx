import React from "react";
import Link from "next/link";
import { CheckCircle2, Star, HardHat } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroCarousel } from "@/components/home/IntroCarousel";
import { RoofingSystemsSection } from "@/components/home/RoofingSystemsSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { GoogleGIcon } from "@/components/ui/TrustLogos";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildFAQSchema,
} from "@/components/seo/JsonLd";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from "@/data/testimonials";

const WORK_PHOTOS = [
  { src: "/images/rhr/slider-img2.png", title: "Shingle roof" },
  { src: "/images/rhr/slider-img1.png", title: "Metal roof" },
  { src: "/images/rhr/flat-1.jpg", title: "Torch-down roof" },
  { src: "/images/rhr/shingle-1.jpg", title: "Shingle roof" },
  { src: "/images/rhr/metal-3.jpg", title: "Metal roof" },
  { src: "/images/rhr/repair-page.jpg", title: "Tear-off" },
] as const;

const HOMEPAGE_12_FAQS = [
  {
    question:
      "What should I do if my roof is damaged by a severe storm in Gilmer or East Texas?",
    answer:
      "If you suspect storm damage, stay safe by staying off the roof and call Raymond Hardin Roofing first at (903) 797-2756 before you call your insurance company. We will make a thorough inspection of the damage and give your insurance company complete information to help you receive the most complete coverage allowed by your policy.",
  },
  {
    question:
      "How much experience does Raymond Hardin have in East Texas roofing?",
    answer:
      "Raymond Hardin has been installing and repairing roofs in East Texas for over 40 years. He learned the trade working for other roofing companies starting when he was just 17 years old, and in 1995 he started Raymond Hardin Roofing in Gilmer, TX to offer the highest quality roofing service at the best price.",
  },
  {
    question:
      "How do you protect my yard, landscaping, and pets during a roof tear-off?",
    answer:
      "We take good care of our customers! Before we begin any tear-off work, we lay down tarps to control the mess and protect landscaping. During the roofing process, we use a rolling magnet daily to collect stray nails that might injure people or pets, and we replace all turbines, pipes, and stacks to give your entire roof a brand new look.",
  },
  {
    question:
      "How do I know if I need a simple roof repair or a complete new roof?",
    answer:
      "Signs that your roof is failing include: sagging or buckling decking, missing/lifting/curling shingles, shingle granules in gutters, dark mold or moss, exposed nails, interior ceiling water stains, points of daylight showing around chimneys or vents in a dark attic, or a roof that is 20+ years old. We perform a free inspection and give you an honest assessment.",
  },
  {
    question:
      "Will you help me with permits and insurance payments in Gilmer, Longview, or Tyler?",
    answer:
      "Absolutely. With our free estimate, you'll know the exact cost of your roof installation or repair. We take care of all the necessary permits and work with you when you're waiting for insurance payments.",
  },
  {
    question:
      "Is Raymond Hardin Roofing licensed, bonded, insured, and BBB Accredited?",
    answer:
      "Yes! Raymond Hardin Roofing is licensed, bonded, insured, and is a BBB Accredited Business serving Gilmer and all surrounding East Texas towns since 1995.",
  },
  {
    question:
      "What is the difference between three-tab shingles and architectural shingles?",
    answer:
      "Three-tab shingles are single-layer strips that provide a flat, uniform look and are budget-friendly. Architectural (dimensional or laminate) shingles are thicker and heavier, made from multiple layers sealed together to create a three-dimensional look with greater durability and a longer warranty.",
  },
  {
    question:
      "Why is Torch-Down Rubber Roofing ideal for flat or low-pitch roofs?",
    answer:
      "Water tends to puddle on flat or low-pitch roofs (common on commercial buildings, carports, patios, and older homes). Torch-down rubber consists of two or three layers of an asphalt and rubber compound heated to form a watertight seal that expands and contracts with East Texas temperatures without cracking—and without the awful smell of hot tar.",
  },
  {
    question:
      "What are the benefits of installing a Metal Roof in East Texas?",
    answer:
      "Metal roofing is durable, long-lasting, fire resistant, low maintenance, and available in a wide variety of colors. It reflects the sun's rays to reduce summer heat (and may qualify for energy-saving tax credits), and its cost is recovered in both roof lifespan and increased property value.",
  },
  {
    question:
      "What is the difference between reroofing and a full roof replacement?",
    answer:
      "Reroofing adds new roofing over existing shingles (allowed only once by building codes, and only if the decking is solid with no leaks or decay). Because major problems often recur with reroofing, a full tear-off and roof replacement—which averages a 105% return on investment—is usually the better choice.",
  },
  {
    question:
      "How quickly will you respond when I request a free roofing estimate?",
    answer:
      "We respond to estimate requests as quickly as possible—usually within 24 hours. For even faster same-day service, call us directly at (903) 797-2756 or (903) 790-5693.",
  },
  {
    question:
      "What questions should I ask before letting any roofer on my roof?",
    answer:
      "Always check: (1) How much experience they have with your specific roof material; (2) Whether they are licensed, bonded, and insured; (3) Local referrals and photos of past work; (4) BBB accreditation and verified reviews; (5) That they never use high-pressure storm-chaser sales tactics; (6) Clear material and workmanship warranties; and (7) True value and quality at a fair price.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildFAQSchema(HOMEPAGE_12_FAQS),
        ]}
      />

      {/* DOM Elements 268ae89b & 78d04f1: Hero + 4-Column Divided Trust Strip */}
      <HeroSection />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <IntroCarousel />
          <div className="lg:pr-4">
            <h2 className="font-display text-[52px] sm:text-[68px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0e0e0e]">
              Your friendly, local East Texas roofers
            </h2>
            <p className="mt-6 text-[#3a3a3a] text-[17px] leading-relaxed max-w-md">
              We show up on time, explain the roof in plain language, and only recommend the work you actually need. No pressure. No gimmicks.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full border border-[#cfcfcf] flex items-center justify-center shrink-0 text-[#0e0e0e]">
                  <HardHat className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0e0e0e]">Experienced and careful</h3>
                  <p className="text-[#5c5c5c] text-[15px] leading-relaxed mt-1">
                    Tarps go down before a tear-off, and a rolling magnet picks up nails every day.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full border border-[#cfcfcf] flex items-center justify-center shrink-0 text-[#0e0e0e]">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0e0e0e]">Service with integrity</h3>
                  <p className="text-[#5c5c5c] text-[15px] leading-relaxed mt-1">
                    We only recommend what you need. Licensed, bonded, insured, and BBB accredited since 1995.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/about" className="inline-block mt-8 text-[#0e0e0e] underline underline-offset-4">
              About the company &gt;
            </Link>
          </div>
        </div>
      </section>

      <RoofingSystemsSection />

      <section className="bg-[#f6f5f2] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <p className="kicker mb-4">How it works</p>
              <h2 className="font-display text-[48px] sm:text-[64px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0e0e0e]">
                What you can expect
              </h2>
            </div>
            <p className="max-w-sm text-[#3a3a3a] text-[17px] leading-relaxed lg:pb-2">
              Three steps from the first call to a written price. Nothing starts until you say so.
            </p>
          </div>

          <ol className="grid grid-cols-1 border-t border-[#0e0e0e] md:grid-cols-3">
            {(
              [
                ["01", "Talk with us", "Call or send the form. We answer questions and set the inspection."],
                ["02", "We show up on time", "Same-day or next-day visits across Gilmer and the towns around it."],
                ["03", "A clear recommendation", "Options and a written price before any work starts. Nothing extra."],
              ] as const
            ).map(([step, title, copy], index) => (
              <li
                key={step}
                className={`py-8 md:py-10 md:pr-10 ${index > 0 ? "border-t border-[#d5d5d2] md:border-t-0 md:border-l md:pl-10" : ""}`}
              >
                <div className="font-display text-[42px] font-bold leading-none tracking-[-0.03em] text-[#0e0e0e]">
                  {step}
                </div>
                <h3 className="mt-5 font-display text-[32px] sm:text-[36px] font-bold leading-[0.95] text-[#0e0e0e]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-[16px] leading-relaxed text-[#5c5c5c]">
                  {copy}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/contact"
            className="mt-12 inline-block text-[#0e0e0e] underline underline-offset-4"
          >
            Book a free inspection &gt;
          </Link>
        </div>
      </section>

      {/* DOM Element 18d97ab8: Raymond Hardin Roofing in Gilmer + Map + Surrounding Areas Box */}
      <ServiceAreaSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Since 1995
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-[#e6e6e6] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-sm text-[#5c5c5c]">Founded</dt>
              <dd className="mt-1 text-lg font-semibold">1995 in Gilmer</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">On the roof</dt>
              <dd className="mt-1 text-lg font-semibold">40+ years</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">Credentials</dt>
              <dd className="mt-1 text-lg font-semibold">Licensed, bonded, and insured</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">BBB</dt>
              <dd className="mt-1 text-lg font-semibold">A+ Accredited</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* DOM Element 77e6a308 / 6fcbdfb5: "Why Homeowners Trust Raymond Hardin Roofing" Check-Circle Bar + 6 Authentic Customer Reviews */}
      <section id="reviews" className="bg-white py-16 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-[44px] sm:text-[60px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0e0e0e]">
            Real customers. Real experiences.
          </h2>
          <p className="mt-4 text-center text-[#5c5c5c]">
            4.6 from 5 Google reviews
          </p>

          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-5 md:grid-cols-2">
            {GOOGLE_REVIEWS.map((review) => (
              <article
                key={review.id}
                className="flex min-h-[280px] flex-col rounded-md border border-[#e6e6e6] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex text-[#f7c906]" aria-label={`${review.rating} stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#f7c906]" />
                    ))}
                  </div>
                  {review.date ? (
                    <span className="text-xs text-[#8a8a8a]">{review.date}</span>
                  ) : null}
                </div>
                <p className="mt-4 line-clamp-6 text-[15px] leading-relaxed text-[#3a3a3a]">
                  {review.quote}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-semibold text-[#0e0e0e]">{review.author}</span>
                  {review.date ? <GoogleGIcon className="h-5 w-5" /> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold text-[#0e0e0e]"
            >
              More reviews
            </a>
          </div>
        </div>
      </section>

      <section id="recent-projects" className="border-b border-[#e6e6e6] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            From the crew
          </h2>
          <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            Shingle, metal, torch-down, and tear-off work.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_PHOTOS.map((photo) => (
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
            See the gallery
          </Link>
        </div>
      </section>

      {/* DOM Element 3a6e45a7: Frequently Asked Questions (1–12 Accordion) */}
      <section id="faqs" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <h2 className="lg:col-span-7 font-display text-[48px] sm:text-[64px] font-bold uppercase leading-[0.9]">
              Frequently asked questions
            </h2>
            <p className="lg:col-span-5 text-[#3a3a3a]">
              Straight answers on storm damage, shingles, metal, torch-down rubber, and what a fair roof job looks like in East Texas.
            </p>
          </div>
          <FaqAccordion faqs={HOMEPAGE_12_FAQS} />
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
