"use client";

import { useEffect } from "react";

// One controller for scroll-linked motion: reveals (play once at ~18% visibility),
// the vine draw (35% of the panel), and gentle desktop-only parallax (max 24px).
const REVEAL_RATIO = 0.18;
const VINE_RATIO = 0.35;
const THRESHOLDS = [0, 0.05, 0.1, 0.18, 0.25, 0.35, 0.5, 0.75, 1];

function onceObserver(selector: string, ratio: number, cls: string, onHit?: (el: Element) => void) {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add(cls));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        // Tall elements on short screens: also fire once a good chunk of the viewport is filled.
        const enough =
          e.intersectionRatio >= ratio || e.intersectionRect.height >= window.innerHeight * 0.4;
        if (enough) {
          e.target.classList.add(cls);
          onHit?.(e.target);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: THRESHOLDS },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

function parallax() {
  const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (const el of els) {
      if (!mq.matches) {
        el.style.transform = "";
        continue;
      }
      const host = el.parentElement ?? el;
      const r = host.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const factor = Number(el.dataset.parallax) || 0.06; // under 10%
      const max = Number(el.dataset.parallaxMax) || 24;
      const offset = (r.top + r.height / 2 - vh / 2) * -factor;
      const y = Math.max(-max, Math.min(max, offset));
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    }
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  mq.addEventListener("change", onScroll);
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    mq.removeEventListener("change", onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}

export function MotionController() {
  useEffect(() => {
    const offReveal = onceObserver("[data-reveal]", REVEAL_RATIO, "is-in");
    // Once the draw has finished, hover responses drop the entrance delays.
    const timers: number[] = [];
    const offVine = onceObserver("[data-vine]", VINE_RATIO, "is-drawn", (el) => {
      timers.push(window.setTimeout(() => el.classList.add("is-settled"), 2000));
    });
    const offParallax = parallax();
    return () => {
      offReveal();
      offVine();
      offParallax();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
  return null;
}
