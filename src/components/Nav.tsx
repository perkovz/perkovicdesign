"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NextStart } from "@/components/NextStart";
import { BOOKING_LINK_PROPS, EMAIL, EMAIL_HREF, NAV_LINKS } from "@/content/site";
import { DEMO_NAV } from "@/content/demo";

const SCROLL_DEEPEN_PX = 24;
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Nav({ variant = "home" }: { variant?: "home" | "demo" } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pendingTarget = useRef<string | null>(null);

  // Glass deepens after 24px of scroll.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > SCROLL_DEEPEN_PX);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Sheet open: lock scroll, move focus to Close, trap Tab, Esc closes.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const trigger = triggerRef.current;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;
      const items = Array.from(sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!sheetRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      const target = pendingTarget.current;
      pendingTarget.current = null;
      if (target) {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
          history.pushState(null, "", `#${target}`);
          el.focus({ preventScroll: true });
          return;
        }
      }
      trigger?.focus();
    };
  }, [open]);

  // Close the sheet if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onSheetLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    pendingTarget.current = href.slice(1);
    setOpen(false);
  };

  return (
    <>
      <header className="nav-shell">
        <nav className={`nav${scrolled ? " is-scrolled" : ""}${variant === "demo" ? " nav--demo" : ""}`} aria-label="Main">
          {variant === "demo" ? (
            <Link className="logo" href="/" aria-label="Perkovic Design Studio, back to studio">
              Perkovic<small>Design Studio</small>
            </Link>
          ) : (
            <a className="logo" href="#top" aria-label="Perkovic Design Studio, back to top">
              Perkovic<small>Design Studio</small>
            </a>
          )}
          {variant === "demo" ? (
            <Link className="back back--mobile" href="/">
              ← {DEMO_NAV.back}
            </Link>
          ) : null}
          {variant === "demo" ? (
            <div className="nav-mid">
              <Link className="back" href="/">
                ← {DEMO_NAV.back}
              </Link>
              <span className="crumb">{DEMO_NAV.crumb}</span>
            </div>
          ) : (
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a className="navlink" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="nav-actions">
            <a className="btn btn--48 nav-cta" {...BOOKING_LINK_PROPS}>
              Book an intro call
            </a>
            <button
              ref={triggerRef}
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="menu-sheet"
              onClick={() => setOpen(true)}
            >
              <span className="menu-ic" aria-hidden="true">
                <i />
                <i />
              </span>
              Menu
            </button>
          </div>
        </nav>
      </header>

      <div className={`menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="menu-backdrop" onClick={close} aria-hidden="true" />
        <div
          ref={sheetRef}
          id="menu-sheet"
          className="menu-sheet"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="menu-bar">
            <span className="logo">Perkovic</span>
            <button ref={closeRef} type="button" className="menu-close" onClick={close}>
              <span className="menu-x" aria-hidden="true" />
              Close
            </button>
          </div>
          <ul className="menu-links">
            {variant === "demo" ? (
              <li>
                <Link className="menu-link" href="/">
                  {DEMO_NAV.back}
                  <span aria-hidden="true">00</span>
                </Link>
              </li>
            ) : null}
            {NAV_LINKS.map((l, i) => {
              const href = variant === "demo" ? `/${l.href}` : l.href;
              return (
                <li key={l.href}>
                  <Link className="menu-link" href={href} onClick={(e) => onSheetLink(e, href)}>
                    {l.label}
                    <span aria-hidden="true">0{i + 1}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="menu-actions">
            <a className="btn" {...BOOKING_LINK_PROPS}>
              Book an intro call
            </a>
            <a className="link" href={EMAIL_HREF}>
              {EMAIL}
            </a>
          </div>
          <div className="menu-foot">
            <NextStart />
          </div>
        </div>
      </div>
    </>
  );
}
