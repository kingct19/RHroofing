import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from "@/data/testimonials";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { GoogleGIcon } from "@/components/ui/TrustLogos";
import {
  JsonLd,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "About Raymond Hardin Roofing & How to Choose a Roofer | Gilmer, TX (Est. 1995)",
  description:
    "Raymond Hardin has been installing and repairing roofs in East Texas for over 40 years (since age 17) and founded Raymond Hardin Roofing in 1995. Licensed, bonded, insured & BBB Accredited.",
  alternates: {
    canonical: "/about",
  },
};

const HOW_TO_CHOOSE = [
  {
    question: "How much experience does the roofer have, and with which materials?",
    answer:
      "Raymond Hardin has been on East Texas roofs for more than 40 years, working with shingle, metal, and torch-down rubber.",
  },
  {
    question: "Is the roofer licensed, bonded, and insured?",
    answer:
      "Raymond Hardin Roofing is licensed, bonded, insured, and a BBB Accredited business.",
  },
  {
    question: "Can they show you finished work?",
    answer:
      "Ask to see roofs they have already done, and for customers you can call.",
  },
  {
    question: "What do other people say?",
    answer:
      "Read the Better Business Bureau listing and the reviews from people in East Texas.",
  },
  {
    question: "Are they pushing you to sign after a storm?",
    answer:
      "Do not sign a contract or pay anyone who shows up at the door promising to fix the roof. Check who they are first.",
  },
  {
    question: "Can they explain the materials and the warranty?",
    answer:
      "A roofer should be able to tell you the tradeoffs of the material, what the manufacturer warranty covers, and what they stand behind.",
  },
  {
    question: "Is the lowest price the right one?",
    answer:
      "A cheap job from an inexperienced crew can cost more later. Hire the contractor whose work and reputation you trust.",
  },
];

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
          <p className="kicker mb-4">About</p>
          <h1 className="font-display text-[48px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
            Raymond Hardin
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            Family-owned in Gilmer since 1995. He started roofing at 17 and has been on East Texas roofs for more than 40 years.
          </p>

          <div className="mt-12 grid items-start gap-10 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-12">
            <img
              src="/images/rhr/raymondh.jpg"
              alt="Raymond Hardin"
              width={227}
              height={323}
              className="h-auto w-[210px] max-w-full rounded-full"
            />
            <div className="max-w-[640px] space-y-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              <p>{COMPANY_INFO.storySummary}</p>
              <p>
                We install and repair shingle, metal, and torch-down rubber roofs, including tear-offs and re-decks. The estimate is written before the work starts. We pull the permits and stay with you while an insurance payment is pending.
              </p>
              <p>{COMPANY_INFO.carePromise}</p>
              <p>{COMPANY_INFO.credentialsSummary}</p>
            </div>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-[#e6e6e6] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-sm text-[#5c5c5c]">Founded</dt>
              <dd className="mt-1 font-semibold">1995, in Gilmer</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">On the roof</dt>
              <dd className="mt-1 font-semibold">40+ years</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">Credentials</dt>
              <dd className="mt-1 font-semibold">Licensed, bonded, insured</dd>
            </div>
            <div>
              <dt className="text-sm text-[#5c5c5c]">BBB</dt>
              <dd className="mt-1 font-semibold">Accredited</dd>
            </div>
          </dl>

          <img
            src="/images/rhr/slider-img2.png"
            alt="A shingle roof installed by Raymond Hardin Roofing"
            className="mt-14 aspect-[16/7] w-full object-cover"
          />
        </div>
      </article>

      <section id="how-to-choose-a-roofer" className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            How to choose a roofer
          </h2>
          <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
            Ask these before you let someone on the roof.
          </p>
          <ol className="mt-10 border-t border-[#0e0e0e]">
            {HOW_TO_CHOOSE.map((item, index) => (
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
            Real customers. Real experiences.
          </h2>
          <p className="mt-4 text-center text-[#5c5c5c]">4.6 from 5 Google reviews</p>
          <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-5 md:grid-cols-2">
            {GOOGLE_REVIEWS.map((review) => (
              <article key={review.id} className="flex min-h-[240px] flex-col rounded-md border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f7c906]" aria-label={`${review.rating} stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#f7c906]" />
                    ))}
                  </div>
                  {review.date ? <span className="text-xs text-[#8a8a8a]">{review.date}</span> : null}
                </div>
                <p className="mt-4 line-clamp-6 text-[15px] leading-relaxed text-[#3a3a3a]">{review.quote}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-semibold">{review.author}</span>
                  {review.date ? <GoogleGIcon className="h-5 w-5" /> : null}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold"
            >
              More reviews
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Talk to Raymond
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold">
            <a href={COMPANY_INFO.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a href={COMPANY_INFO.phoneSecondaryHref}>{COMPANY_INFO.phoneSecondaryDisplay}</a>
          </div>
          <div className="mt-8">
            <EstimateForm compact variant="card" />
          </div>
          <p className="mt-6 text-sm text-[#5c5c5c]">
            Or <Link href="/contact" className="underline underline-offset-4">send a note</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
