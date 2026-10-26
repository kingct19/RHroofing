"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const SLIDES = [
  {
    src: "/images/rhr/slider-img1.png",
    alt: "Standing-seam metal roof on an East Texas home",
  },
  {
    src: "/images/rhr/slider-img2.png",
    alt: "Raymond Hardin Roofing crew installing a residential roof",
  },
  {
    src: "/images/rhr/slider-img3.png",
    alt: "Architectural shingle roof in Gilmer, Texas",
  },
  {
    src: "/images/rhr/slider-img4.png",
    alt: "Completed Raymond Hardin Roofing project",
  },
];

/**
 * Full-bleed hero using the shadcn carousel engine (Embla) plus its autoplay
 * plugin, with a fade transition so the roof photos crossfade in place.
 */
export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Fade(),
    Autoplay({ delay: 6500, stopOnInteraction: false }),
  ]);

  return (
    <div className="absolute inset-0">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div key={slide.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
    </div>
  );
}
