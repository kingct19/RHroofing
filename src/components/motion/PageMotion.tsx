"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const WAIT = "motion-wait";
const RISE = "motion-rise";
const FADE = "motion-fade";
const IN = "is-in";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function delayFor(index: number, total: number) {
  if (total <= 6) return index * 80;
  return (index % 3) * 80;
}

function isStaggerList(list: HTMLElement) {
  if (list.tagName === "A" || list.closest("a, [data-map]")) return false;

  const count = list.children.length;
  if (count < 2 || count > 48) return false;

  const first = list.children[0];
  if (!(first instanceof HTMLElement)) return false;

  const structural =
    list.classList.contains("grid") || list.tagName === "OL" || list.tagName === "UL";
  if (!structural) return false;

  const firstHeight = first.getBoundingClientRect().height;
  if (firstHeight < 64) return false;
  if (firstHeight < 140 && count > 8) return false;

  return true;
}

function pickStaggerList(section: HTMLElement) {
  const matches = Array.from(section.querySelectorAll<HTMLElement>("ol, ul, .grid")).filter(
    (list) => isStaggerList(list) && !list.querySelector("[data-map]"),
  );
  const outermost = matches.filter(
    (list) => !matches.some((other) => other !== list && other.contains(list)),
  );

  return outermost.sort((a, b) => b.children.length - a.children.length)[0];
}

export function PageMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const main = root.parentElement;
    main?.classList.add("page-clip");
    const releaseClip = () => main?.classList.remove("page-clip");
    root.addEventListener("animationend", releaseClip, { once: true });
    const clipTimer = window.setTimeout(releaseClip, 800);

    const armed: HTMLElement[] = [];

    const arm = (el: HTMLElement, delayMs: number, fade: boolean) => {
      el.classList.add(WAIT, fade ? FADE : RISE);
      el.style.transitionDelay = delayMs > 0 ? `${delayMs}ms` : "";
      armed.push(el);
    };

    const belowFold = (el: HTMLElement) =>
      el.getBoundingClientRect().top >= window.innerHeight - 32;

    for (const section of root.querySelectorAll<HTMLElement>("section")) {
      const hasMap = Boolean(section.querySelector("[data-map]"));
      const list = hasMap ? undefined : pickStaggerList(section);

      if (hasMap) {
        if (belowFold(section)) arm(section, 0, true);
        continue;
      }

      if (!list) {
        if (belowFold(section)) arm(section, 0, false);
        continue;
      }

      const total = list.children.length;
      Array.from(list.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement) || !belowFold(child)) return;
        arm(child, delayFor(index, total), false);
      });

      const parent = list.parentElement;
      if (!parent) continue;
      let passedList = false;
      for (const sibling of Array.from(parent.children)) {
        if (sibling === list) {
          passedList = true;
          continue;
        }
        if (!(sibling instanceof HTMLElement) || !belowFold(sibling)) continue;
        arm(sibling, passedList ? delayFor(Math.min(total, 6), total) : 0, false);
      }
    }

    let frame = 0;
    const reveal = () => {
      const limit = window.innerHeight * 0.88;
      for (const el of armed) {
        if (el.classList.contains(IN)) continue;
        if (el.getBoundingClientRect().top < limit) el.classList.add(IN);
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        reveal();
      });
    };

    reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      root.removeEventListener("animationend", releaseClip);
      window.clearTimeout(clipTimer);
      releaseClip();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      for (const el of armed) {
        el.classList.remove(WAIT, RISE, FADE, IN);
        el.style.transitionDelay = "";
      }
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className="page-enter">
      {children}
    </div>
  );
}
