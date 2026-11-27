import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MotionController } from "@/components/MotionController";
import { Nav } from "@/components/Nav";
import { PRIVACY, PRIVACY_META } from "@/content/privacy";
import { EMAIL_HREF, OG_IMAGE, SITE_NAME } from "@/content/site";

export const metadata: Metadata = {
  title: PRIVACY_META.title,
  description: PRIVACY_META.description,
  alternates: { canonical: PRIVACY_META.canonical },
  openGraph: {
    title: PRIVACY_META.title,
    description: PRIVACY_META.description,
    url: PRIVACY_META.canonical,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="page privacy-page" id="top">
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav variant="sub" crumb="/ Privacy" />
      <MotionController />

      <main id="main" className="wrap" tabIndex={-1}>
        <article className="privacy" aria-labelledby="privacy-title">
          <p className="eyebrow enter enter--1">{PRIVACY.eyebrow}</p>
          <h1 id="privacy-title" className="enter enter--1">
            {PRIVACY.title}
          </h1>
          <p className="lead enter enter--2">{PRIVACY.intro}</p>
          <ul className="privacy-list enter enter--2">
            {PRIVACY.items.map((item) => (
              <li key={item.label}>
                <b>{item.label}</b> {item.body}
              </li>
            ))}
            <li>
              <b>{PRIVACY.contactLabel}</b>{" "}
              <a className="link" href={EMAIL_HREF}>
                {PRIVACY.contact}
              </a>
            </li>
          </ul>
          <p className="privacy-updated">{PRIVACY.updated}</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
