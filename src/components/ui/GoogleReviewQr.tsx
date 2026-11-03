import { GOOGLE_REVIEW_URL } from "@/data/testimonials";
import { PAGES } from "@/data/sections";

const reviewQr = PAGES.reviewQr;

export function GoogleReviewQr() {
  return (
    <div className="mx-auto mt-10 flex max-w-[680px] flex-col items-center gap-6 border border-[#e6e6e6] bg-[#f6f5f2] px-6 py-8 sm:flex-row sm:items-center sm:px-8">
      <img
        src={reviewQr.image}
        alt={reviewQr.imageAlt}
        width={160}
        height={160}
        className="h-40 w-40 shrink-0 bg-white p-2"
      />
      <div className="text-center sm:text-left">
        <h3 className="font-display text-[32px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0e0e0e]">
          {reviewQr.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3a3a3a]">
          {reviewQr.body}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0e0e0e] px-6 py-2.5 text-sm font-semibold text-white"
          >
            {reviewQr.writeLabel}
          </a>
          <a
            href={reviewQr.image}
            download="raymond-hardin-google-review-qr.png"
            className="rounded-full border border-[#0e0e0e] px-6 py-2.5 text-sm font-semibold text-[#0e0e0e]"
          >
            {reviewQr.downloadLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
