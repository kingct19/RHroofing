import React from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-white pt-10 pb-4 sm:pt-14">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker mb-4">{kicker}</p>
            <h1 className="font-display text-[52px] sm:text-[68px] lg:text-[76px] font-bold uppercase leading-[0.9] text-[#0e0e0e]">
              {title}
            </h1>
          </div>
          {children ? (
            <div className="lg:col-span-5 text-[#3a3a3a] text-base sm:text-lg leading-relaxed pb-1">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
