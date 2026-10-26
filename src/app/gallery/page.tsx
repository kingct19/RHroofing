"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { ALL_GALLERY_PHOTOS } from "@/data/testimonials";
import { COMPANY_INFO } from "@/data/company";

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "shingle" | "metal" | "flat" | "crew">("all");

  const filteredPhotos =
    filter === "all"
      ? ALL_GALLERY_PHOTOS
      : ALL_GALLERY_PHOTOS.filter((p) => p.category === filter);

  return (
    <>
      <PageIntro kicker="Gallery" title="Our work">
        Real shingle, metal, and torch-down rubber roofs installed by Raymond Hardin and his crew across Gilmer, Longview, Tyler, and the rest of East Texas.
      </PageIntro>

      {/* Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: "all", label: `All Projects (${ALL_GALLERY_PHOTOS.length})` },
              { id: "shingle", label: "Shingle Roofs" },
              { id: "metal", label: "Metal Roofs" },
              { id: "flat", label: "Torch-Down Flat Roofs" },
              { id: "crew", label: "RHR Crew & Tear-Offs" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setFilter(tab.id as "all" | "shingle" | "metal" | "flat" | "crew")
                }
                className={`px-5 py-2.5 rounded-[5px] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#0e0e0e] text-white shadow-md"
                    : "bg-[#F4F6FA] text-[#181617] hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.src}
                className="bg-white rounded-[5px] overflow-hidden shadow-md border border-slate-200 group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0e0e0e] text-white text-[10px] font-bold uppercase tracking-wider">
                    {photo.category === "flat"
                      ? "Torch-Down Rubber"
                      : photo.category === "crew"
                      ? "RHR Crew at Work"
                      : `${photo.category} Roof`}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-2 bg-[#F4F6FA]">
                  <span className="text-sm font-bold text-[#181617]">
                    {photo.title}
                  </span>
                  <img
                    src="/images/rhr-logo.jpg"
                    alt="RHR"
                    className="h-5 w-auto object-contain shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#0e0e0e] text-white p-8 sm:p-10 rounded-[5px] flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                You&apos;re Going to LOVE Your New Roof!
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-1">
                Call Raymond Hardin Roofing today for your free inspection and exact-cost estimate.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-white text-[#0e0e0e] font-bold text-sm uppercase"
              >
                <Phone className="w-4 h-4" />
                (903) 797-2756
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-[#181617] text-white font-bold text-sm uppercase"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
