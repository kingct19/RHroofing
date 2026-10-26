"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="bg-white border border-[#ececec]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="font-display text-lg sm:text-xl uppercase tracking-wide text-[#0e0e0e]">
                {faq.question}
              </span>
              {isOpen ? (
                <Minus className="w-5 h-5 shrink-0" />
              ) : (
                <Plus className="w-5 h-5 shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-[#3a3a3a] leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
