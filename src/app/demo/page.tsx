import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { DemoTabs } from "@/components/DemoTabs";
import { HandoffArt } from "@/components/HandoffArt";
import { MotionController } from "@/components/MotionController";
import { Nav } from "@/components/Nav";
import {
  BOOKING_LINK_PROPS,
  EMAIL,
  EMAIL_HREF,
  FOOTER,
} from "@/content/site";
import {
  DEMO_AGENT,
  DEMO_BA,
  DEMO_BROKE,
  DEMO_CTA,
  DEMO_HERO,
  DEMO_MATRIX,
  DEMO_META,
} from "@/content/demo";
import { staggerMs } from "@/lib/motion";
import "./demo.css";

const d = (i: number) => ({ "--d": `${staggerMs(i)}ms` }) as CSSProperties;

export const metadata: Metadata = {
  title: DEMO_META.title,
  description: DEMO_META.description,
  alternates: { canonical: DEMO_META.canonical },
  openGraph: {
    title: DEMO_META.title,
    description: DEMO_META.description,
    url: DEMO_META.canonical,
    siteName: "Perkovic Design Studio",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 900, alt: "A ginkgo leaf and fern on soft ripples." }],
    type: "website",
  },
};

function ph(text: string): ReactNode {
  const parts = text.split(/(\[(?:COMING SOON|N)\])/g);
  return parts.map((part, i) =>
    part === "[COMING SOON]" || part === "[N]" ? (
      <span key={i} className="demo-ph">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function Chip({ kind }: { kind: "pass" | "flag" | "fail" }) {
  return (
    <span className={`demo-chip ${kind}`}>
      <i aria-hidden="true" />
      {kind}
    </span>
  );
}

export default function DemoPage() {
  return (
    <div className="page demo-page" id="top">
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav variant="demo" />
      <MotionController />

      <main id="main" className="wrap" tabIndex={-1}>
        <section className="demo-hero" aria-labelledby="demo-title">
          <div className="demo-hero-text">
            <p className="eyebrow enter enter--1">{DEMO_HERO.eyebrow}</p>
            <h1 id="demo-title" className="enter enter--1">
              {DEMO_HERO.headline}
            </h1>
            <p className="demo-sub enter enter--2">
              {DEMO_HERO.subtitleBefore}
              {DEMO_AGENT}
              {DEMO_HERO.subtitleAfter}
            </p>
            <div className="demo-pills enter enter--2">
              {DEMO_HERO.pills.map((p) => (
                <span key={p.label} className="pill">
                  {p.dot ? <span className="dot" aria-hidden="true" /> : null}
                  {ph(p.label)}
                </span>
              ))}
              <span className="demo-ex">{DEMO_HERO.exampleFlow}</span>
            </div>
            <div className="demo-status enter enter--2">
              <span className="demo-info" aria-hidden="true">
                i
              </span>
              <div>
                <b>{DEMO_HERO.statusKicker}</b> {ph(DEMO_HERO.status)}
              </div>
            </div>
          </div>
          <div className="enter enter--art">
            <HandoffArt />
          </div>
        </section>

        <section className="demo-sec" aria-labelledby="broke-title">
          <div className="sec-head" data-reveal="">
            <div className="sec-head-l">
              <p className="eyebrow">{DEMO_BROKE.eyebrow}</p>
              <h2 id="broke-title">{DEMO_BROKE.title}</h2>
            </div>
            <p className="sec-head-p">{DEMO_BROKE.lead}</p>
          </div>
          <div className="demo-broke">
            {DEMO_BROKE.cards.map((c, i) => (
              <article key={c.n} className="card" data-reveal="" style={d(i)}>
                <div className="demo-num">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="demo-look">{c.look}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-sec" aria-labelledby="ba-title">
          <div className="sec-head" data-reveal="">
            <div className="sec-head-l">
              <p className="eyebrow">{DEMO_BA.eyebrow}</p>
              <h2 id="ba-title">{DEMO_BA.title}</h2>
            </div>
            <p className="sec-head-p">{DEMO_BA.lead}</p>
          </div>
          <div data-reveal="">
            <DemoTabs />
          </div>
        </section>

        <section className="demo-sec" aria-labelledby="matrix-title">
          <div className="sec-head" data-reveal="">
            <div className="sec-head-l">
              <p className="eyebrow">{ph(DEMO_MATRIX.eyebrow)}</p>
              <h2 id="matrix-title">{DEMO_MATRIX.title}</h2>
            </div>
            <p className="sec-head-p">{DEMO_MATRIX.lead}</p>
          </div>
          <div className="demo-matrix-label" data-reveal="">
            <span className="demo-ex">{DEMO_MATRIX.exampleLabel}</span>
          </div>
          <div className="demo-matrix" data-reveal="">
            <div className="demo-mrow head">
              <div className="c1">{DEMO_MATRIX.columns[0]}</div>
              <div className="c2">{DEMO_MATRIX.columns[1]}</div>
              <div className="c3">{DEMO_MATRIX.columns[2]}</div>
              <div className="c4">{DEMO_MATRIX.columns[3]}</div>
            </div>
            {DEMO_MATRIX.rows.map((row) => (
              <div key={row.category} className="demo-mrow">
                <div className="c1 demo-cat">{row.category}</div>
                <div className="c2 demo-what">{row.what}</div>
                <div className="c3">
                  <Chip kind={row.before} />
                </div>
                <div className="c4">
                  <Chip kind={row.after} />
                </div>
              </div>
            ))}
            <div className="demo-mnote">
              <div>{ph(DEMO_MATRIX.note)}</div>
              <div className="demo-legend">
                <Chip kind="pass" />
                <Chip kind="flag" />
                <Chip kind="fail" />
              </div>
            </div>
          </div>
        </section>

        <section className="cta" aria-labelledby="demo-cta-title" data-reveal="">
          <div className="cta-bg" data-parallax="0.06" data-parallax-max="24" aria-hidden="true">
            <Image src="/images/topo.jpg" alt="" fill sizes="(min-width: 1024px) 1200px, 100vw" />
          </div>
          <div className="cta-inner">
            <p className="eyebrow">{DEMO_CTA.eyebrow}</p>
            <h2 id="demo-cta-title">{DEMO_CTA.title}</h2>
            <p className="lead">{DEMO_CTA.lead}</p>
            <div className="cta-row">
              <a className="btn" {...BOOKING_LINK_PROPS}>
                Book an intro call
              </a>
              <span className="or">
                or email{" "}
                <a className="link" href={EMAIL_HREF}>
                  {EMAIL}
                </a>
              </span>
            </div>
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
          <a className="link" href="https://www.perkovicdesign.com">
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
