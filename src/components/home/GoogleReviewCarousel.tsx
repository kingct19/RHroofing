"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleGIcon } from "@/components/ui/TrustLogos";
import { GOOGLE_REVIEWS } from "@/data/testimonials";

export function GoogleReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mx-auto mt-10 max-w-[820px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="min-w-0 flex-[0_0_100%] px-2.5 md:flex-[0_0_50%]"
            >
              <article className="flex h-full min-h-[260px] flex-col rounded-md border border-[#e6e6e6] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <div
                    role="img"
                    className="flex text-[#f7c906]"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} aria-hidden="true" className="h-4 w-4 fill-[#f7c906]" />
                    ))}
                  </div>
                  {review.date ? (
                    <span className="text-xs text-[#8a8a8a]">{review.date}</span>
                  ) : null}
                </div>
                {review.quote ? (
                  <p className="mt-4 line-clamp-6 text-[15px] leading-relaxed text-[#3a3a3a]">
                    {review.quote}
                  </p>
                ) : null}
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-semibold text-[#0e0e0e]">{review.author}</span>
                  <GoogleGIcon className="h-5 w-5" decorative />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={scrollPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0e0e0e] text-[#0e0e0e]"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          onClick={scrollNext}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0e0e0e] text-[#0e0e0e]"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
