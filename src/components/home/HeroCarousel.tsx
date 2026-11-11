"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { HOME } from "@/data/sections";

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
    <div aria-hidden="true" className="absolute inset-0">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {HOME.heroSlides.map((slide, index) => (
            <div key={slide.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
    </div>
  );
}
