// All visible copy for the v3 "Beautiful world" studio site.
// Source of truth: Perks Principal's Figma file yYlAejAdIjD48nB8odzQgn (v3p export).
// Keep remaining [PLACEHOLDER], [N] and [COMING SOON] tokens visible until Guru fills them.
import data from "./copy-data.json";

export const EMAIL = "zvonimir@perkovicdesign.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const BOOKING_HREF =
  "https://calendar.proton.me/bookings#QB0OhkzL_e31LOTjyUPIAUnW6vUAegGZfzPlOfrMGDM=";
export const BOOKING_LINK_PROPS = {
  href: BOOKING_HREF,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const NAV_LINKS = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Six weeks", href: "#six-weeks" },
  { label: "Principles", href: "#principles" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
] as const;

export const HERO = {
  eyebrow: "Designing a beautiful world with AI",
  headline: "AI that behaves beautifully.",
  promise: "Prove your AI agent behaves before you ship it.",
  subtitle:
    "I design how your AI agent acts, explains itself and asks for help, then prove it with evals and a coded prototype before you ship. One senior designer, fixed prices.",
  priceCard: {
    kicker: "Agent Behavior Blueprint",
    value: "$18,000 fixed",
    sub: "Six weeks, one agent workflow. Start with the $1,500 audit, credited in full.",
  },
  stripLabel: "For AI startups and dev shops shipping agents. Every Blueprint delivers:",
  chips: ["Autonomy contract", "Behavior spec", "12-scenario eval", "Coded trust-surface prototype"],
};

export const PROBLEM = {
  eyebrow: "The problem",
  title: "Most agents fail quietly: they overstep, guess, or hide what they don't know.",
  lead: "Real users bring ambiguity, missing context, conflicting sources and tool failures. Without written autonomy rules and evals, nobody can say how the agent will behave or when a person should step in.",
  cards: [
    { ripple: "#B9D3E3", title: "It oversteps", body: "Nobody has written down what the agent may do alone, what needs approval, and what it must never do." },
    { ripple: "#A9BFA3", title: "It guesses", body: "Behavior is judged by demos and gut feel, not by evals against real scenarios." },
    { ripple: "#D9A48F", title: "It hides what it doesn't know", body: "When the agent is unsure or fails, users are not told, and a person cannot easily take over." },
  ],
};

export const WHAT_I_DO = {
  eyebrow: "What I do",
  title: "Calm, clear agent behavior.",
  lead: "I help teams decide what their AI agent should do on its own, when it should ask, and when a person steps in. Then I prove it with evals and a working prototype.",
  services: [
    ["AI agents", "Behavior"],
    ["AI assistants", "Behavior"],
    ["Agent evals", "Evidence"],
    ["AI UX audits", "$1,500"],
    ["Behavior specs", "Blueprint"],
    ["Coded prototypes", "Blueprint"],
    ["Autonomy rules and approvals", "Blueprint"],
    ["Trust and handoff design", "Blueprint"],
  ] as const,
  getEyebrow: "What you get",
  getTitle: "One senior product designer with a frontend background: behavior design, evals and code in one place.",
  get: [
    { title: "Design, evals and code", body: "Senior product designer and former frontend developer with 10 years of experience. You work directly with me." },
    { title: "Real prototypes", body: "A working coded prototype of your agent's trust moments: evidence, approvals, action history and human takeover." },
    { title: "Async by default", body: "Written updates and Loom walkthroughs instead of standing meetings. Fewer calls, clearer decisions." },
    { title: "Fixed scope, fixed price", body: "Every engagement has a clear scope and price up front. The retainer can be paused or ended monthly." },
  ],
  who: [
    { tone: "sage", title: "Who this is for", body: "Seed and Series A AI startups and AI dev shops with an agent or assistant that acts for users. You have engineers building it. You need to know it behaves well before more people rely on it." },
    { tone: "sky", title: "Capacity", body: "I take on up to five Blueprint clients a year, so each one gets my full attention." },
    { tone: "clay", title: "What you provide", body: "One product owner, staging access to your agent (or recorded transcripts), and a list of its tools and permissions." },
  ] as const,
};

export const SIX_WEEKS = {
  eyebrow: "The Agent Behavior Blueprint",
  title: "Six weeks, grown in the open.",
  lead: "One agent workflow, $18,000 fixed. Each stage leaves you with a real deliverable, and a written update every week.",
  weeks: data.weeks,
  path: [
    { n: "1", title: "Audit", body: "$1,500. A review of your agent's experience and a sample of its outputs, with a prioritized fix list. Credited if you continue." },
    { n: "2", title: "Blueprint", body: "Six weeks, $18k fixed. Autonomy contract, behavior spec, 12-scenario eval and a coded prototype." },
    { n: "3", title: "Decide", body: "A pass/fail eval report, release-gate recommendations and a clear go or no-go." },
    { n: "4", title: "Keep it on track", body: "Optional retainer: monthly eval reruns and fixes when behavior drifts after model or prompt changes." },
  ],
};

export const PRINCIPLES = {
  eyebrow: "Principles",
  title: "What beautiful means here.",
  lead: "Soft on the surface, strict underneath. These rules shape every engagement.",
  cards: [
    { title: "Honest about uncertainty", body: "Every answer separates what is known from what is guessed, with sources and dates. No decorative confidence scores." },
    { title: "Predictable under pressure", body: "The agent can suggest and draft. Reliable systems calculate, approve and write, even when inputs get messy." },
    { title: "Respectful of people's time", body: "Short, clear answers. High-stakes actions use clear approvals and buttons, not a typed \"yes\"." },
    { title: "Knows when to hand off", body: "When something fails or the stakes rise, the agent says so and hands control to a person. \"The update was not published\" beats a quiet error." },
  ],
};

export const PRICING = {
  eyebrow: "Pricing",
  title: "Fixed prices: you know the cost before we start.",
  lead: "Start with an audit. Go deeper only when the need and the scope are clear.",
  plans: data.prices,
  note: "2026 prices. One agent workflow per Blueprint.",
};

export const DEMO = {
  eyebrow: "Demo",
  title: "See how I work.",
  lead: "Client case studies will be added as projects finish. Until then, here is the method applied to public examples.",
  cards: [
    {
      kicker: "[COMING SOON]",
      title: "Teardown: how a public AI agent hands control back to a person",
      body: "[PLACEHOLDER: demo to build, write after it exists] Draft: I ran [N] scenarios against a public agent, found where its handoff breaks, wrote the fix, and built a coded prototype of the better flow. Watch the Loom.",
      tags: ["Human handoff", "Evals", "Coded prototype"],
      art: "sky",
      href: "/demo",
    },
    {
      kicker: "Worked example",
      title: "A document assistant",
      body: "Two source documents disagree about a deadline. The assistant shows both sources and their dates, flags the conflict, and asks the owner to choose. It can draft an update but cannot publish without approval. If publishing fails, it says \"The update was not published.\"",
      tags: ["Conflicting evidence", "Approvals", "Audit trail"],
      art: "sage",
    },
  ] as const,
};

export const FAQ = {
  eyebrow: "FAQs",
  title: "Questions and answers.",
  lead: "Tap a question to open it. Common questions about how I work.",
  items: data.faq,
};

export const FINAL_CTA = {
  eyebrow: "Prove your AI agent behaves before you ship it",
  title: "Let's make your agent something people trust.",
  lead: "Book a 20 minute call. Tell me what your agent does, and I'll suggest where to start.",
};

export const FOOTER = {
  line1: "Perkovic Design Studio, a Perkovic Design LLC company",
  line2: "Cleveland, Ohio. Run by Zvonimir Perkovic.",
  site: "perkovicdesign.com",
  copyright: "© 2026 Perkovic Design LLC. All rights reserved.",
};
