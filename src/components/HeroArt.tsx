"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HERO } from "@/content/site";

// Pointer-reactive depth: 2 to 4px drift and under 1deg tilt toward the pointer,
// smoothed over about 600ms, fine pointers on desktop only, off under reduced motion.
const MAX_SHIFT = 4;
const MAX_TILT = 0.8;
const SMOOTH_MS = 140; // exponential time constant; ~600ms to settle

export function HeroArt() {
  const artRef = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const art = artRef.current;
    const depth = depthRef.current;
    const tag = tagRef.current;
    if (!art || !depth || !tag) return;

    // Pause the ambient sway when the hero is off screen.
    const io = new IntersectionObserver(([entry]) => {
      art.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    io.observe(art);

    const mq = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const hero = art.closest(".hero") as HTMLElement | null;
    let target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;

    const tick = (now: number) => {
      const dt = last ? now - last : 16;
      last = now;
      const a = 1 - Math.exp(-dt / SMOOTH_MS);
      cur.x += (target.x - cur.x) * a;
      cur.y += (target.y - cur.y) * a;
      depth.style.transform = `translate3d(${(cur.x * MAX_SHIFT).toFixed(2)}px, ${(cur.y * MAX_SHIFT).toFixed(2)}px, 0) rotate(${(cur.x * MAX_TILT).toFixed(3)}deg)`;
      tag.style.transform = `translate3d(${(cur.x * -1.5).toFixed(2)}px, ${(cur.y * -1.5).toFixed(2)}px, 0)`;
      if (Math.abs(target.x - cur.x) > 0.001 || Math.abs(target.y - cur.y) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
        last = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      const r = art.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      target = { x: Math.max(-1, Math.min(1, nx)), y: Math.max(-1, Math.min(1, ny)) };
      kick();
    };
    const onLeave = () => {
      target = { x: 0, y: 0 };
      kick();
    };

    let bound = false;
    const bind = () => {
      if (mq.matches && hero && !bound) {
        hero.addEventListener("pointermove", onMove);
        hero.addEventListener("pointerleave", onLeave);
        bound = true;
      } else if (!mq.matches && bound && hero) {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        bound = false;
        onLeave();
      }
    };
    bind();
    mq.addEventListener("change", bind);

    return () => {
      io.disconnect();
      mq.removeEventListener("change", bind);
      if (hero && bound) {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-art" ref={artRef}>
      <div className="hero-img enter enter--art">
        <div className="hero-depth" ref={depthRef}>
          <div className="hero-sway">
            <Image
              src="/images/hero.jpg"
              alt="A ginkgo leaf and fern resting on soft ripples of sky blue and sand."
              fill
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 90vw, 100vw"
            />
          </div>
        </div>
      </div>
      <div className="price-tag-wrap enter enter--tag">
        <div className="price-tag" ref={tagRef}>
          <div className="k">{HERO.priceCard.kicker}</div>
          <div className="v">{HERO.priceCard.value}</div>
          <div className="s">{HERO.priceCard.sub}</div>
        </div>
      </div>
    </div>
  );
}
