import Image from "next/image";
import type { CSSProperties } from "react";
import { FaqList } from "@/components/Faq";
import { HeroArt } from "@/components/HeroArt";
import { DemoArtSage, DemoArtSky, LeafIcon, PRINCIPLE_ICONS, Ripple } from "@/components/Icons";
import { MotionController } from "@/components/MotionController";
import { Nav } from "@/components/Nav";
import { NextStart } from "@/components/NextStart";
import { Vine } from "@/components/Vine";
import {
  BOOKING_HREF,
  DEMO,
  EMAIL,
  EMAIL_HREF,
  FAQ,
  FINAL_CTA,
  FOOTER,
  HERO,
  PRICING,
  PRINCIPLES,
  PROBLEM,
  SIX_WEEKS,
  WHAT_I_DO,
} from "@/content/site";
import { staggerMs } from "@/lib/motion";

const d = (i: number) => ({ "--d": `${staggerMs(i)}ms` }) as CSSProperties;

function SectionHead({ eyebrow, title, lead, id }: { eyebrow: string; title: string; lead: string; id: string }) {
  return (
    <div className="sec-head" data-reveal="">
      <div className="sec-head-l">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <p className="sec-head-p">{lead}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page" id="top">
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <MotionController />

      <main id="main" className="wrap" tabIndex={-1}>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="eyebrow enter enter--1">{HERO.eyebrow}</p>
            <h1 id="hero-title" className="enter enter--1">
              {HERO.headline}
            </h1>
            <div className="hero-body enter enter--2">
              <p className="promise">
                <LeafIcon />
                <span>{HERO.promise}</span>
              </p>
              <p className="lead">{HERO.subtitle}</p>
              <div className="ctas">
                <a className="btn" href={BOOKING_HREF}>
                  Book an intro call
                </a>
                <a className="link" href="#pricing">
                  See pricing
                </a>
              </div>
              <NextStart />
            </div>
          </div>
          <HeroArt />
        </section>
        <div className="strip" data-reveal="">
          <p className="strip-lbl">{HERO.stripLabel}</p>
          <ul className="chips">
            {HERO.chips.map((c) => (
              <li key={c} className="pill">
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Problem */}
        <section className="section problem" aria-labelledby="problem-title">
          <div className="problem-q" data-reveal="">
            <p className="eyebrow">{PROBLEM.eyebrow}</p>
            <h2 id="problem-title">{PROBLEM.title}</h2>
            <p className="lead">{PROBLEM.lead}</p>
          </div>
          <div className="cards3">
            {PROBLEM.cards.map((c, i) => (
              <article key={c.title} className="card card--problem" data-reveal="" style={d(i)}>
                <div className="ripple-wrap" data-parallax="0.05" data-parallax-max="12">
                  <Ripple color={c.ripple} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* What I do */}
        <section className="section" id="what-i-do" tabIndex={-1} aria-labelledby="what-title">
          <div className="two">
            <div className="svc" data-reveal="">
              <p className="eyebrow">{WHAT_I_DO.eyebrow}</p>
              <h2 id="what-title">{WHAT_I_DO.title}</h2>
              <p className="lead">{WHAT_I_DO.lead}</p>
              <ul className="svc-list">
                {WHAT_I_DO.services.map(([a, b]) => (
                  <li key={a}>
                    {a}
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="get">
              <article className="card card--sky get-wide" data-reveal="" style={d(0)}>
                <p className="eyebrow">{WHAT_I_DO.getEyebrow}</p>
                <h3 className="big">{WHAT_I_DO.getTitle}</h3>
              </article>
              {WHAT_I_DO.get.map((c, i) => (
                <article key={c.title} className="card" data-reveal="" style={d(i + 1)}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="who">
            {WHAT_I_DO.who.map((c, i) => (
              <article key={c.title} className={`card card--${c.tone}`} data-reveal="" style={d(i)}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Six weeks */}
        <section className="section" id="six-weeks" tabIndex={-1} aria-labelledby="weeks-title">
          <SectionHead id="weeks-title" eyebrow={SIX_WEEKS.eyebrow} title={SIX_WEEKS.title} lead={SIX_WEEKS.lead} />
          <Vine />
          <div className="path">
            {SIX_WEEKS.path.map((c, i) => (
              <article key={c.n} className="card" data-reveal="" style={d(i)}>
                <div className="path-n" aria-hidden="true">
                  {c.n}
                </div>
                <h3>
                  <span className="sr-only">Step {c.n}: </span>
                  {c.title}
                </h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="section" id="principles" tabIndex={-1} aria-labelledby="principles-title">
          <SectionHead
            id="principles-title"
            eyebrow={PRINCIPLES.eyebrow}
            title={PRINCIPLES.title}
            lead={PRINCIPLES.lead}
          />
          <div className="princ">
            {PRINCIPLES.cards.map((c, i) => (
              <article key={c.title} className="card" data-reveal="" style={d(i)}>
                {PRINCIPLE_ICONS[i]}
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="section" id="pricing" tabIndex={-1} aria-labelledby="pricing-title">
          <SectionHead id="pricing-title" eyebrow={PRICING.eyebrow} title={PRICING.title} lead={PRICING.lead} />
          <div className="prices">
            {PRICING.plans.map((p, i) => (
              <article
                key={p.id}
                className={`pc${p.featured ? " pc--feat" : ""}`}
                data-reveal=""
                style={d(i)}
                aria-labelledby={`${p.id}-name`}
              >
                {p.featured && <p className="pc-tag">Flagship</p>}
                <h3 className="pc-nm" id={`${p.id}-name`}>
                  {p.name}
                </h3>
                <p className="pc-pr">{p.price}</p>
                <p className="pc-sub">{p.sub}</p>
                <p className="pc-desc">{p.desc}</p>
                <ul className="pc-list">
                  {p.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="pc-actions">
                  <a className="btn" href={BOOKING_HREF} aria-describedby={`${p.id}-name`}>
                    Book an intro call
                  </a>
                  <p className="pc-em">
                    or email <a className="link link--quiet" href={EMAIL_HREF}>{EMAIL}</a>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="note" data-reveal="">
            {PRICING.note}
          </p>
        </section>

        {/* Demo */}
        <section className="section" id="demo" aria-labelledby="demo-title">
          <SectionHead id="demo-title" eyebrow={DEMO.eyebrow} title={DEMO.title} lead={DEMO.lead} />
          <div className="demo">
            {DEMO.cards.map((c, i) => (
              <article key={c.title} className="card demo-card" data-reveal="" style={d(i)}>
                <div className={`demo-art demo-art--${c.art}`}>{c.art === "sky" ? <DemoArtSky /> : <DemoArtSage />}</div>
                <div className="demo-body">
                  <p className="demo-k">{c.kicker}</p>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <ul className="tags" aria-label="Topics">
                    {c.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs" tabIndex={-1} aria-labelledby="faq-title">
          <div className="faqwrap">
            <SectionHead id="faq-title" eyebrow={FAQ.eyebrow} title={FAQ.title} lead={FAQ.lead} />
            <FaqList items={FAQ.items} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta" aria-labelledby="cta-title" data-reveal="">
          <div className="cta-bg" data-parallax="0.06" data-parallax-max="24" aria-hidden="true">
            <Image src="/images/topo.jpg" alt="" fill sizes="(min-width: 1024px) 1200px, 100vw" />
          </div>
          <div className="cta-inner">
            <p className="eyebrow">{FINAL_CTA.eyebrow}</p>
            <h2 id="cta-title">{FINAL_CTA.title}</h2>
            <p className="lead">{FINAL_CTA.lead}</p>
            <div className="cta-row">
              <a className="btn" href={BOOKING_HREF}>
                Book an intro call
              </a>
              <span className="or">
                or email{" "}
                <a className="link" href={EMAIL_HREF}>
                  {EMAIL}
                </a>
              </span>
            </div>
            <NextStart />
          </div>
        </section>
      </main>

      <footer className="wrap footer" data-reveal="">
        <div className="footer-l">
          <p className="logo flogo">Perkovic</p>
          <p className="footer-c">
            <span>{FOOTER.line1}</span>
            <span>{FOOTER.line2}</span>
          </p>
        </div>
        <div className="footer-c footer-r">
          <a className="link" href="https://perkovicdesign.com">
            {FOOTER.site}
          </a>
          <a className="link" href={EMAIL_HREF}>
            {EMAIL}
          </a>
          <span>{FOOTER.copyright}</span>
        </div>
      </footer>
    </div>
  );
}
