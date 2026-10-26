import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { REPAIR_PAGES, getRepairBySlug } from "@/data/repairs";
import { COMPANY_INFO } from "@/data/company";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import {
  JsonLd,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/JsonLd";

interface RepairPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REPAIR_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: RepairPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getRepairBySlug(slug);

  if (!page) {
    return { title: "Repair Page Not Found" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/repairs/${page.slug}`,
    },
  };
}

export default async function RepairDetailPage({ params }: RepairPageProps) {
  const { slug } = await params;
  const page = getRepairBySlug(slug);

  if (!page) {
    notFound();
  }

  const others = REPAIR_PAGES.filter((item) => item.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={[
          buildFAQSchema(page.faqs),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Repairs", path: "/repairs" },
            { name: page.title, path: `/repairs/${page.slug}` },
          ]),
        ]}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 pt-8 pb-16 sm:pt-12">
          <nav className="flex items-center gap-2 text-sm text-[#5c5c5c]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/repairs" className="hover:underline">Repairs</Link>
            <span>/</span>
            <span className="text-[#0e0e0e]">{page.title}</span>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14">
            <div>
              <p className="kicker mb-4">Repairs</p>
              <h1 className="font-display text-[46px] font-bold leading-[0.92] tracking-[-0.03em] text-[#0e0e0e] sm:text-[64px]">
                {page.title}
              </h1>
              <p className="mt-6 max-w-[36rem] text-[17px] leading-relaxed text-[#3a3a3a]">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/contact" className="btn-sun">Book a free inspection</Link>
                <a href={COMPANY_INFO.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
            <img
              src={page.imageUrl}
              alt={`${page.title} by Raymond Hardin Roofing`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          {page.sections.map((section) => (
            <div key={section.heading} className="mt-16 border-t border-[#e6e6e6] pt-12">
              <h2 className="font-display text-[32px] font-bold leading-[0.95] sm:text-[40px]">
                {section.heading}
              </h2>
              <div className="mt-6 max-w-[720px] space-y-4 text-[17px] leading-relaxed text-[#3a3a3a]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">
              {page.pointsHeading}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.points.map((point) => (
                <li key={point} className="border border-[#e6e6e6] px-4 py-4 text-[16px] leading-relaxed text-[#3a3a3a]">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 border-t border-[#e6e6e6] pt-12">
            <h2 className="font-display text-[32px] font-bold leading-[0.95]">Questions</h2>
            <div className="mt-6 max-w-[720px]">
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>

          <div className="mt-16 border-t border-[#e6e6e6] pt-8">
            <p className="text-sm text-[#5c5c5c]">Also</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {others.map((other) => (
                <Link key={other.slug} href={`/repairs/${other.slug}`} className="font-semibold underline underline-offset-4">
                  {other.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[#f6f5f2] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
            Ready when you are
          </h2>
          <a href={COMPANY_INFO.phoneHref} className="mt-4 inline-flex items-center gap-2 text-lg font-semibold">
            <Phone className="h-5 w-5" />
            {COMPANY_INFO.phoneDisplay}
          </a>
          <div className="mt-8">
            <EstimateForm defaultService="Roof Repair / Leak Fix" compact />
          </div>
        </div>
      </section>
    </>
  );
}
