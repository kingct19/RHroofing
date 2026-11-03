"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { ALL_GALLERY_PHOTOS } from "@/data/testimonials";
import { COMPANY_INFO } from "@/data/company";
import { PAGES } from "@/data/sections";

const gallery = PAGES.gallery;

function galleryBadge(category: "shingle" | "metal" | "flat" | "crew"): string {
  switch (category) {
    case "shingle":
      return gallery.shingleLabel;
    case "metal":
      return gallery.metalLabel;
    case "flat":
      return gallery.flatLabel;
    case "crew":
      return gallery.crewLabel;
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "shingle" | "metal" | "flat" | "crew">("all");

  const filteredPhotos =
    filter === "all"
      ? ALL_GALLERY_PHOTOS
      : ALL_GALLERY_PHOTOS.filter((p) => p.category === filter);

  return (
    <>
      <PageIntro kicker={gallery.kicker} title={gallery.title}>
        {gallery.intro}
      </PageIntro>

      {/* Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: "all", label: `${gallery.allLabel} (${ALL_GALLERY_PHOTOS.length})` },
              { id: "shingle", label: gallery.shingleLabel },
              { id: "metal", label: gallery.metalLabel },
              { id: "flat", label: gallery.flatLabel },
              { id: "crew", label: gallery.crewLabel },
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
                    {galleryBadge(photo.category)}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-2 bg-[#F4F6FA]">
                  <span className="text-sm font-bold text-[#181617]">
                    {photo.title}
                  </span>
                  <img
                    src={COMPANY_INFO.logo}
                    alt={COMPANY_INFO.logoAlt}
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
                {gallery.ctaTitle}
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-1">
                {gallery.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-white text-[#0e0e0e] font-bold text-sm uppercase"
              >
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-[#181617] text-white font-bold text-sm uppercase"
              >
                {gallery.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
