import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { DemoTabs } from "@/components/DemoTabs";
import { Footer } from "@/components/Footer";
import { HandoffArt } from "@/components/HandoffArt";
import { MotionController } from "@/components/MotionController";
import { Nav } from "@/components/Nav";
import { BOOKING_LINK_PROPS, EMAIL, EMAIL_HREF, OG_IMAGE, SITE_NAME } from "@/content/site";
import {
  SLOTWISE_CONTRACT,
  SLOTWISE_CTA,
  SLOTWISE_DIVERGENCE,
  SLOTWISE_EVAL,
  SLOTWISE_FLOW,
  SLOTWISE_HERO,
  SLOTWISE_LABEL,
  SLOTWISE_META,
  SLOTWISE_READOUT,
  SLOTWISE_SETUP,
  SLOTWISE_SPEC,
  SUB_NAV,
} from "@/content/slotwise";
import { staggerMs } from "@/lib/motion";
import "./slotwise.css";

const d = (i: number) => ({ "--d": `${staggerMs(i)}ms` }) as CSSProperties;

export const metadata: Metadata = {
  title: SLOTWISE_META.title,
  description: SLOTWISE_META.description,
  alternates: { canonical: SLOTWISE_META.canonical },
  openGraph: {
    title: SLOTWISE_META.title,
    description: SLOTWISE_META.description,
    url: SLOTWISE_META.canonical,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    type: "article",
  },
};

function Head({ id, eyebrow, title, lead }: { id: string; eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="sec-head" data-reveal="">
      <div className="sec-head-l">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {lead ? <p className="sec-head-p">{lead}</p> : null}
    </div>
  );
}

function Table({
  caption,
  columns,
  rows,
  className,
}: {
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  className?: string;
}) {
  return (
    <div className={`sw-table-wrap${className ? ` ${className}` : ""}`} data-reveal="" tabIndex={0} role="region" aria-label={caption}>
      <span className="demo-ex sw-table-label">{SLOTWISE_LABEL}</span>
      <table className="sw-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={i}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SlotwisePage() {
  return (
    <div className="page demo-page" id="top">
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav variant="sub" crumb={SUB_NAV.crumb} />
      <MotionController />

      <main id="main" className="wrap" tabIndex={-1}>
        <section className="demo-hero" aria-labelledby="sw-title">
          <div className="demo-hero-text">
            <p className="enter enter--1">
              <span className="pill sw-label">
                <span className="dot" aria-hidden="true" />
                {SLOTWISE_HERO.label}
              </span>
            </p>
            <h1 id="sw-title" className="enter enter--1">
              {SLOTWISE_HERO.title}
            </h1>
            <p className="demo-sub enter enter--2">{SLOTWISE_HERO.lead}</p>
          </div>
          <div className="enter enter--art sw-art">
            <HandoffArt />
            <span className="demo-ex sw-art-label">{SLOTWISE_LABEL}</span>
          </div>
        </section>

        <section className="demo-sec" aria-labelledby="setup-title">
          <Head id="setup-title" eyebrow={SLOTWISE_SETUP.eyebrow} title={SLOTWISE_SETUP.title} />
          <div className="sw-prose" data-reveal="">
            <p className="sw-quote">{SLOTWISE_SETUP.doc}</p>
            <p>{SLOTWISE_SETUP.lead}</p>
          </div>
          <Table caption="The five versions" columns={SLOTWISE_SETUP.columns} rows={SLOTWISE_SETUP.rows} />
          <p className="sw-close" data-reveal="">
            {SLOTWISE_SETUP.close}
          </p>
        </section>

        <section className="demo-sec" aria-labelledby="div-title">
          <Head
            id="div-title"
            eyebrow={SLOTWISE_DIVERGENCE.eyebrow}
            title={SLOTWISE_DIVERGENCE.title}
            lead={SLOTWISE_DIVERGENCE.lead}
          />
          <Table
            caption="Divergence map: four real decisions across five versions"
            columns={SLOTWISE_DIVERGENCE.columns}
            rows={SLOTWISE_DIVERGENCE.rows}
            className="sw-table-wide"
          />
          <p className="sw-close" data-reveal="">
            <b>{SLOTWISE_DIVERGENCE.takeawayLabel}</b> {SLOTWISE_DIVERGENCE.takeaway}
          </p>
        </section>

        <section className="demo-sec" aria-labelledby="contract-title">
          <Head id="contract-title" eyebrow={SLOTWISE_CONTRACT.eyebrow} title={SLOTWISE_CONTRACT.title} />
          <ul className="sw-contract">
            {SLOTWISE_CONTRACT.items.map((item, i) => (
              <li key={item.label} className="card" data-reveal="" style={d(i)}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="sw-close" data-reveal="">
            <b>{SLOTWISE_CONTRACT.changedLabel}</b> {SLOTWISE_CONTRACT.changed}
          </p>
        </section>

        <section className="demo-sec" aria-labelledby="spec-title">
          <Head id="spec-title" eyebrow={SLOTWISE_SPEC.eyebrow} title={SLOTWISE_SPEC.title} />
          <Table caption="Behavior spec for hard moments" columns={SLOTWISE_SPEC.columns} rows={SLOTWISE_SPEC.rows} />
        </section>

        <section className="demo-sec" aria-labelledby="flow-title">
          <Head id="flow-title" eyebrow={SLOTWISE_FLOW.eyebrow} title={SLOTWISE_FLOW.title} lead={SLOTWISE_FLOW.lead} />
          <Table caption="Stakeholder sign-off" columns={SLOTWISE_FLOW.columns} rows={SLOTWISE_FLOW.rows} />
        </section>

        <section className="demo-sec" aria-labelledby="eval-title">
          <Head id="eval-title" eyebrow={SLOTWISE_EVAL.eyebrow} title={SLOTWISE_EVAL.title} lead={SLOTWISE_EVAL.lead} />
          <ol className="sw-scenarios" data-reveal="">
            {SLOTWISE_EVAL.scenarios.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="sw-close" data-reveal="">
            <b>{SLOTWISE_EVAL.passLabel}</b> {SLOTWISE_EVAL.pass}
          </p>
          <div className="sw-tabs" data-reveal="">
            <DemoTabs />
          </div>
        </section>

        <section className="demo-sec" aria-labelledby="readout-title">
          <Head id="readout-title" eyebrow={SLOTWISE_READOUT.eyebrow} title={SLOTWISE_READOUT.title} />
          <p className="sw-prose sw-close" data-reveal="">
            {SLOTWISE_READOUT.body}
          </p>
        </section>

        <section className="cta" aria-labelledby="sw-cta-title" data-reveal="">
          <div className="cta-bg" data-parallax="0.06" data-parallax-max="24" aria-hidden="true">
            <Image src="/images/topo.jpg" alt="" fill sizes="(min-width: 1024px) 1200px, 100vw" />
          </div>
          <div className="cta-inner">
            <p className="eyebrow">{SLOTWISE_CTA.eyebrow}</p>
            <h2 id="sw-cta-title">{SLOTWISE_CTA.title}</h2>
            <p className="lead">{SLOTWISE_CTA.lead}</p>
            <p className="cta-under">{SLOTWISE_CTA.under}</p>
            <div className="cta-row">
              <a className="btn" {...BOOKING_LINK_PROPS}>
                {SLOTWISE_CTA.button}
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

      <Footer />
    </div>
  );
}
