import React from "react";
import Link from "next/link";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroReviewStack } from "@/components/ui/TrustLogos";

export function HeroSection() {
  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#0e0e0e]">
      <HeroCarousel />

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="max-w-[620px]">
          <h1 className="font-display text-white font-bold uppercase leading-[0.88] text-[52px] sm:text-[72px] lg:text-[80px]">
            Top roofing in Gilmer & East Texas
          </h1>
          <p className="mt-5 max-w-md text-white text-base sm:text-lg leading-relaxed">
            Honest, experienced roofing for your home or business. Family-owned in Gilmer since 1995.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="btn-sun text-[13px] px-5 py-2.5">
              Book now
            </Link>
            <Link
              href="/services"
              className="text-white text-base underline underline-offset-4 decoration-white/80 hover:text-[#9aafdf]"
            >
              See our roofing services &gt;
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-16 shrink-0">
          <HeroReviewStack />
        </div>
      </div>
    </section>
  );
}