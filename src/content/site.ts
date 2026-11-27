// All visible copy for the studio site.
// Source of truth for wording: "Website copy v2: APPROVED by Guru (Nov 27)" in Notion
// (https://app.notion.com/p/4258a84e8a1481c8b675f3c8393076e1). Sections the approved copy
// does not cover keep the earlier v3 text from Figma file yYlAejAdIjD48nB8odzQgn.
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

// Trust line under intro-call CTAs. Apostrophe is U+2019, per the approved copy.
export const TRUST_LINE = "You\u2019ll talk with Zvonimir, the designer doing the work.";

export const SITE_URL = "https://www.perkovicdesign.com";
export const SITE_NAME = "Perkovic Design Studio";
// Header/footer wordmark (Guru, Nov 27): exactly "Perković studio". The legal and site
// names (Perkovic Design LLC, Perkovic Design Studio) stay as they are in metadata and privacy.
export const LOGO = { name: "Perković", sub: "studio", label: "Perković studio" } as const;
export const OG_IMAGE = {
  url: "/images/hero.jpg",
  width: 1200,
  height: 900,
  alt: "A ginkgo leaf and fern on soft ripples.",
} as const;

export const SLOTWISE_HREF = "/work/slotwise";
export const PRIVACY_HREF = "/privacy";

export const META = {
  title: "Perkovic Design Studio | Five versions of your AI assistant, one decision",
  description:
    "Your team generated five versions of your AI assistant. The Agent Behavior Blueprint gets you to one: an agreed autonomy contract, one signed-off flow and a 12-scenario eval. Six weeks, fixed price.",
};

export const NAV_LINKS = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Six weeks", href: "#six-weeks" },
  { label: "How to start", href: "#how-to-start" },
  { label: "Example", href: SLOTWISE_HREF },
  { label: "FAQs", href: "#faqs" },
] as const;

export const HERO = {
  eyebrow: "Generating is cheap now. Aligning isn't.",
  // Decided Nov 27: the H1 is the short line; the second line sits directly under it as
  // large display type (a styled <p>, so the H1 stays short for screen readers and SEO).
  headline: "AI that behaves beautifully.",
  headlineSecond: "Everyone on your team is an AI product owner now. I get them to one direction.",
  subline:
    "I work between leadership, product, design, engineering and QA to settle what your assistant should do, define what good looks like, and hand your team one spec they can build.",
  underSubline: "Your team already has the speed. I help you own the direction.",
  proof: "From the CEO to QA, your team generated five versions of your AI assistant. I get you to one.",
  proofShort: "Five owners, five versions. One direction.",
  // Offer card (Notion section 1: replaces the price card, no prices).
  offerCard: {
    kicker: "Agent Behavior Blueprint",
    sub: "Six weeks, one AI workflow, fixed scope. Start with an audit, credited in full if you continue.",
    button: "Start with an audit",
  },
  stripLabel: "For software teams of 30 to 500 shipping an AI assistant. Every Blueprint delivers:",
  chips: [
    "Divergence map",
    "Autonomy contract and behavior spec",
    "Handoff map and one signed-off flow",
    "12-scenario eval",
  ],
};

export const BEFORE_HIRE = {
  eyebrow: "Before you hire",
  title: "Get the decisions now. Make the hire later.",
  body: "You already have several people making product calls. Until you hire one AI product owner, I act as the bridge between them, so leadership, product, design, engineering and QA agree on what the assistant does alone, what needs a person, what it must never do, and the bar it has to pass before launch. Fixed scope, done in weeks. Your team keeps the spec when I'm done.",
};

export const PROBLEM = {
  eyebrow: "The direction problem",
  title: "When everyone can generate, everyone becomes a product owner.",
  lead: "Your CEO, product lead, designer, developers and QA share one requirements doc. Each of them prompts from it and makes product calls along the way. You end up with five owners, five assistants and no shared direction, because nobody wrote down how it should behave.",
  cards: [
    { ripple: "#B9D3E3", title: "Five owners, five versions.", body: "One version books meetings alone. Another asks every time. A third refuses. Each one is reasonable, and they cannot all ship." },
    { ripple: "#A9BFA3", title: "Reviews that contradict.", body: "Each owner reviews against their own version, so the feedback pulls the build five ways and nobody is there to settle it." },
    { ripple: "#D9A48F", title: "Behavior nobody tested.", body: "Without a written contract and an eval, nobody can say what the assistant will do with a messy request, or when a person should step in." },
  ],
};

export const GUARDRAILS = {
  eyebrow: "The consistency problem",
  title: "Your team's AI makes screens fast. Nobody keeps them consistent.",
  lead: "When PMs and others generate mockups and prototypes with AI tools, each screen looks fine on its own. Put a month of them side by side and the components, spacing, patterns and wording have all drifted, on top of design decisions nobody made on purpose.",
  example:
    "In Slotwise, three people generated the booking screen three ways: two button styles, three spacing scales, and \u201cBook\u201d, \u201cSchedule\u201d and \u201cSend invite\u201d for the same action.",
  cardsTitle: "I set up guardrails your AI tools follow.",
  cards: [
    { ripple: "#A9BFA3", title: "A small set of rules, tokens and components.", body: "Only what your product needs to look and read like one product. Not a full design system." },
    { ripple: "#B9D3E3", title: "Instructions your AI tools follow.", body: "Written guidance and context files for the AI design and coding tools your team already uses, so every new screen starts from the same rules." },
    { ripple: "#D9A48F", title: "A quick consistency review.", body: "A pass over what's already been generated: what drifted, what to keep, and what to fix first." },
  ],
  howTo:
    "The consistency review is part of the audit. The full guardrails setup is an optional add-on to the Blueprint, scoped after the audit.",
  closing: "Guardrails keep what your team generates consistent. The Blueprint decides what it should do.",
};

export const WHAT_I_DO = {
  eyebrow: "What I do",
  title: "Calm, clear agent behavior.",
  lead: "I help teams decide what their AI agent should do on its own, when it should ask, and when a person steps in. Then I prove it with evals and a working prototype.",
  services: [
    ["Stakeholder alignment", "Blueprint"],
    ["Behavior specs and handoff maps", "Blueprint"],
    ["Agent evals and release bars", "Blueprint"],
    ["AI audit and design guardrails", "Audit first, guardrails as an add-on"],
  ] as const,
  getEyebrow: "What you get",
  getTitle: "One senior product designer with a frontend background: behavior design, evals and code in one place.",
  get: [
    { title: "A decision, not more options.", body: "One written behavior everyone signed, instead of another round of prototypes." },
    { title: "Design and code in one person.", body: "A senior product designer who prototypes in code and writes the behavior and eval specs for AI assistants in production. You work directly with me." },
    { title: "Async by default.", body: "Written weekly updates and Loom walkthroughs instead of standing meetings." },
    { title: "Fixed scope, fixed price.", body: "You know the cost before we start." },
  ],
  who: [
    {
      tone: "sage",
      title: "Who this is for",
      body: "Software companies of 30 to 500 people shipping an AI assistant or agent, with more stakeholders than designers. You have a requirements doc and engineers who can build. What you are missing is one agreed answer to how it should behave.",
    },
    { tone: "sky", title: "Capacity", body: "I take on up to five Blueprint clients a year, so each one gets my full attention." },
    { tone: "clay", title: "What you provide", body: "One product owner, staging access to your agent (or recorded transcripts), and a list of its tools and permissions." },
  ] as const,
  fitTitle: "It's a fit if:",
  fit: [
    "Several people are prompting or prototyping their own version.",
    "Reviews keep reopening the same decisions.",
    "You have one or no designers on the AI work.",
    "You plan to launch or expand the feature in the next quarter.",
    "Screens your team generates with AI no longer look or read like one product.",
  ],
  notFor:
    "It's not for: landing pages or websites, building the production agent or its orchestration, training models, a full design system, or an ongoing leadership seat.",
};

export const SIX_WEEKS = {
  eyebrow: "The Agent Behavior Blueprint",
  title: "Six weeks from five versions to one.",
  lead: "One agent workflow, fixed scope. Each stage leaves you with a real deliverable, and a written update every week.",
  weeks: data.weeks,
  path: [
    {
      n: "1",
      title: "Audit, about two weeks.",
      body: "I review your current versions and a sample of outputs, plus a quick consistency check of the screens your team has generated, and show you where they disagree and what to fix first. Credited in full if you continue.",
    },
    {
      n: "2",
      title: "Agent Behavior Blueprint, six weeks, fixed scope.",
      body: "",
    },
    {
      n: "3",
      title: "Keep it on track (optional).",
      body: "Monthly eval reruns and fixes as models and prompts change. Pause or cancel monthly.",
    },
    {
      n: "+",
      title: "Add-on (optional). AI design guardrails setup.",
      body: "A small set of design rules, tokens and components, plus the written instructions and context files your AI design and coding tools follow, so everything your team generates stays consistent. Scoped after the audit.",
    },
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

// "How to start" replaces the Pricing section (Notion section 11, Guru Nov 27: no prices on the site).
// Neither button has a target in Notion, so both open the existing Proton booking link.
export const HOW_TO_START = {
  id: "how-to-start",
  title: "How to start",
  lead: "Start with an audit. Go deeper with the Blueprint. Keep it on track if you need to.",
  primary: "Start with an audit",
  secondary: "Book a call",
};

export const PROOF = {
  eyebrow: "Example",
  title: "See it on an example product.",
  lead: "Slotwise is a made-up meeting scheduling assistant for a B2B sales team. Same doc, seven people prompting, five versions. Here is how the Blueprint gets it to one.",
  card: {
    kicker: "Example product",
    title: "Slotwise worked example",
    button: "See the example",
    href: SLOTWISE_HREF,
  },
  small: "Client case studies are added with permission as projects finish.",
};

export const ABOUT = {
  eyebrow: "About",
  title: "Who you'll work with",
  body: "I'm Zvonimir Perkovic, a senior product designer based in Cleveland. I prototype in code and write the behavior and eval specs for AI assistants in production. I spent ten years across design and frontend development before focusing on AI. I help teams that build AI features agree on how they should behave, then prove it before launch. You work with me directly, from the first call to the readout.",
};

export const FAQ = {
  eyebrow: "FAQs",
  title: "Questions and answers.",
  lead: "Tap a question to open it. Common questions about how I work.",
  items: data.faq,
};

export const FINAL_CTA = {
  title: "Prove your AI agent behaves before you ship it.",
  lead: "In a 20 minute call, tell me what your assistant does and who is prompting it. I'll tell you where the versions disagree and whether the audit is worth it.",
  under: "Start with an audit, credited in full toward the Blueprint.",
};

export const FOOTER = {
  line1: "Perkovic Design Studio, a Perkovic Design LLC company",
  line2: "Cleveland, Ohio. Run by Zvonimir Perkovic.",
  site: "perkovicdesign.com",
  privacy: "Privacy",
  copyright: "© 2026 Perkovic Design LLC. All rights reserved.",
};
