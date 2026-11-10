"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME } from "@/data/sections";

export function IntroCarousel() {
  const slides = HOME.introSlides;
  const [index, setIndex] = useState(0);
  const count = slides.length;

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div>
      <div className="relative overflow-hidden bg-[#e7ebea] h-[280px] sm:h-[360px] lg:h-[400px]">
        {slides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={slideIndex !== index}
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
          <ChevronLeft aria-hidden="true" className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 text-[#0e0e0e] flex items-center justify-center"
        >
          <ChevronRight aria-hidden="true" className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${slideIndex + 1}`}
            aria-pressed={slideIndex === index}
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