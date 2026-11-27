// Privacy note for /privacy. Draft for Guru to review before it goes live.
// Lines marked "Notion" come from section 13 of the approved copy page; the intro and the
// hosting line were added for the preview because the note has to cover Vercel hosting.
import { EMAIL } from "./site";

export const PRIVACY_META = {
  title: "Privacy | Perkovic Design Studio",
  description: "How Perkovic Design LLC handles what you send through perkovicdesign.com.",
  canonical: "/privacy",
};

export const PRIVACY = {
  eyebrow: "Perkovic Design LLC",
  title: "Privacy", // Notion
  intro: "This note covers perkovicdesign.com, run by Perkovic Design LLC as Perkovic Design Studio.",
  items: [
    {
      // Notion
      label: "What I collect.",
      body: "Only what you send me: your name, email and anything you write when you email me or book a call. Booking uses Proton Calendar.",
    },
    {
      // Notion
      label: "How I use it.",
      body: "To reply to you, schedule calls and do the work we agree on. I don't sell or rent your information, and I don't add you to a mailing list unless you ask.",
    },
    {
      // Notion
      label: "Your materials.",
      body: "Anything you share for an audit or Blueprint stays confidential and is used only for your project.",
    },
    {
      // Added for the preview (not in Notion): hosting, cookies and analytics.
      label: "Hosting.",
      body: "This site is hosted on Vercel, which keeps standard server logs, such as IP addresses and request times, to run and protect the site. The site sets no cookies and uses no analytics. The booking page is run by Proton, under Proton's own privacy policy.",
    },
    {
      // Notion
      label: "Your choices.",
      body: "Email me to see, correct or delete what I have about you.",
    },
  ],
  contactLabel: "Contact.", // Notion
  contact: EMAIL,
  // Notion says "Last updated: (date of publishing)". Set this to the publish date.
  updated: "Last updated: November 27, 2026",
};
