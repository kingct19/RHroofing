"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/images/rhr/slider-img1.png",
    alt: "Standing-seam metal roof on an East Texas home",
  },
  {
    src: "/images/rhr/slider-img2.png",
    alt: "Architectural shingle roof in Gilmer",
  },
  {
    src: "/images/rhr/slider-img3.png",
    alt: "New shingle roof by Raymond Hardin Roofing",
  },
  {
    src: "/images/rhr/slider-img4.png",
    alt: "Completed Raymond Hardin Roofing project",
  },
];

export function IntroCarousel() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div>
      <div className="relative overflow-hidden bg-[#e7ebea] h-[280px] sm:h-[360px] lg:h-[400px]">
        {SLIDES.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 text-[#0e0e0e] flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 text-[#0e0e0e] flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-[3px] rounded-full transition-all ${
              slideIndex === index ? "w-8 bg-[#0e0e0e]" : "w-6 bg-[#d5d5d5]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}