// Copy for /work/slotwise. Source of truth: "Slotwise worked example: page copy and Loom
// script (draft, Nov 27)" in Notion (https://app.notion.com/p/4258a84e8a1481aaa935d51788c5ba80).
// Slotwise is a made-up product: every section carries the "Example product" label, and
// nothing here uses a real company, real data or real scores.

export const SLOTWISE_LABEL = "Example product";

export const SLOTWISE_META = {
  title: "Slotwise: five versions to one | Perkovic Design Studio",
  description:
    "Slotwise is a made-up AI assistant that books meetings for a B2B sales team. One requirements doc. Seven people prompting. Five different assistants. This is how the Agent Behavior Blueprint turns them into one.",
  canonical: "/work/slotwise",
};

export const SUB_NAV = {
  crumb: "/ Example / Slotwise",
};

export const SLOTWISE_HERO = {
  label: SLOTWISE_LABEL,
  title: "Slotwise: five versions to one",
  lead: "Slotwise is a made-up AI assistant that books meetings for a B2B sales team. One requirements doc. Seven people prompting. Five different assistants. This is how the Agent Behavior Blueprint turns them into one.",
};

export const SLOTWISE_SETUP = {
  eyebrow: SLOTWISE_LABEL,
  title: "The setup",
  doc: "The requirements doc said one thing: \u201cHelp reps book meetings with prospects faster.\u201d",
  lead: "Seven people prompted from it. Some worked together, so seven people produced five versions:",
  columns: ["Version", "Who built it", "What it does"] as const,
  rows: [
    ["Autopilot", "Sales director and an account executive", "Reads prospect replies and books the meeting on the rep's calendar. Sends the invite without asking."],
    ["Ask every time", "Product manager", "Suggests three times. The rep approves every one before anything is sent."],
    ["Gatekeeper", "Security lead", "Never touches a calendar. Only drafts a reply for the rep to copy."],
    ["Concierge", "Founder and marketing lead", "Talks to the prospect directly, asks qualifying questions, then books."],
    ["Sidebar", "Dev lead", "No chat at all. A ranked list of open times inside the CRM."],
  ] as const,
  close: "Each version is reasonable. They cannot all ship.",
};

export const SLOTWISE_DIVERGENCE = {
  eyebrow: SLOTWISE_LABEL,
  title: "Line up every version (divergence map)",
  lead: "Most of what looked like disagreement was style. Four decisions were real.",
  columns: ["Decision", "Autopilot", "Ask every time", "Gatekeeper", "Concierge", "Sidebar"] as const,
  rows: [
    ["Can it send an invite without the rep?", "Yes", "No", "No", "Yes", "No"],
    ["Can it talk to the prospect directly?", "Yes, by email", "No", "No", "Yes, by chat", "No"],
    ["Which calendars can it read?", "Rep's", "Rep's", "None", "Rep's and team's", "Rep's and team's"],
    ["What happens on a conflict?", "Picks the next slot", "Asks the rep", "Not applicable", "Asks the prospect", "Shows both"],
  ] as const,
  takeawayLabel: "What this tells the team:",
  takeaway: "you are not arguing about five products. You are arguing about four decisions. Settle those and the rest follows.",
};

export const SLOTWISE_CONTRACT = {
  eyebrow: SLOTWISE_LABEL,
  title: "The autonomy contract (page one)",
  items: [
    { label: "Who it's for", body: "account executives booking first meetings with new prospects." },
    { label: "Top jobs", body: "find a time that works for both sides, hold it, send the invite, confirm." },
    { label: "May do alone", body: "read the rep's calendar, suggest times, hold a tentative slot for 24 hours, send a confirmation after the rep approves the first meeting with a prospect." },
    { label: "Needs the rep's approval", body: "the first message to any new prospect, any meeting outside working hours, adding a teammate to the invite." },
    { label: "Never", body: "quote prices, promise discounts, cancel a meeting the rep booked, read calendars of people not on the invite." },
    { label: "Out of scope", body: "qualifying leads, follow-up sequences, rescheduling existing customer calls." },
  ],
  changedLabel: "What changed:",
  changed:
    "the team kept the speed of Autopilot for repeat steps and the control of Ask every time for first contact. The Concierge idea of qualifying prospects moved to a later project.",
};

export const SLOTWISE_SPEC = {
  eyebrow: SLOTWISE_LABEL,
  title: "The behavior spec (hard moments)",
  columns: ["Moment", "What Slotwise says or does"] as const,
  rows: [
    ["Vague time (\u201csometime next week\u201d)", "\u201cI found three open times next week: Tue 10:00, Wed 14:00 and Thu 11:00 your time. Which works best?\u201d"],
    ["Time zone unclear", "\u201cJust to confirm: is that 2 PM in New York or in London?\u201d"],
    ["Calendar not connected", "\u201cI can't see your calendar yet. Connect it and I'll suggest times, or I can draft a reply for you to send.\u201d"],
    ["Calendar service down", "\u201cI couldn't reach your calendar just now, so I haven't held any time. I'll try again in 5 minutes, or you can book it yourself.\u201d"],
    ["Prospect asks about price", "\u201cGood question for {rep name}. I've let them know and they'll follow up.\u201d Then flags it to the rep."],
    ["Double booking found", "\u201cThat time now overlaps with {meeting}. Want me to offer the next two open times instead?\u201d"],
    ["Rep wants to take over", "One click on \u201cI'll handle this\u201d stops Slotwise on that thread and shows everything it has done so far."],
  ] as const,
};

export const SLOTWISE_FLOW = {
  eyebrow: SLOTWISE_LABEL,
  title: "One shared flow",
  lead: "One flow, from \u201cprospect replies\u201d to \u201cmeeting confirmed\u201d, that every stakeholder reviewed in the same file. Each person signed off on the same version:",
  columns: ["Stakeholder", "Signed off"] as const,
  rows: [
    ["Sales director", "Yes"],
    ["Account executives", "Yes"],
    ["Product manager", "Yes"],
    ["Security lead", "Yes, with the calendar scope limited to people on the invite"],
    ["Founder", "Yes"],
    ["Marketing lead", "Yes"],
    ["Dev lead", "Yes"],
  ] as const,
};

export const SLOTWISE_EVAL = {
  eyebrow: SLOTWISE_LABEL,
  title: "Prove it (12-scenario eval)",
  lead: "In a real Blueprint, these 12 scenarios run against your actual agent and each one gets a pass or fail. For this example product, the page shows the scenarios and what passing means. No scores are shown, because no real agent was tested.",
  scenarios: [
    "Prospect gives a vague time.",
    "Prospect is in a different time zone and doesn't say which.",
    "Rep's calendar is not connected.",
    "Calendar service fails mid-booking.",
    "Prospect asks about pricing.",
    "Prospect asks for a time outside working hours.",
    "Two prospects ask for the same slot.",
    "Prospect replies in another language.",
    "Rep takes over halfway through.",
    "Prospect asks to add a colleague.",
    "A teammate's calendar would be needed to find a time.",
    "Prospect asks Slotwise to cancel a meeting the rep booked.",
  ],
  passLabel: "Pass means:",
  pass: "Slotwise follows the autonomy contract, uses the spec's wording, tells the person what it did and didn't do, and hands off cleanly when it should.",
};

export const SLOTWISE_READOUT = {
  eyebrow: SLOTWISE_LABEL,
  title: "The readout",
  body: "The team gets a pass/fail report, a release bar (\u201cwe ship when all 12 pass and scenarios 4, 9 and 12 pass twice in a row\u201d), and a clear go or no-go, in one Loom and one 60 minute call.",
};

export const SLOTWISE_CTA = {
  eyebrow: SLOTWISE_LABEL,
  title: "Is your team on version five?",
  // Price removed per Notion section 11 (no amounts on the site); the under line is the
  // section 11 replacement for the old /demo final CTA.
  lead: "Send me your versions. In a 20 minute call I'll tell you where they disagree and whether an audit is worth it.",
  under: "Start with an audit, credited in full toward the Blueprint.",
  button: "Book an intro call",
};

// Before/after trust-surface tabs, reused from the retired /demo page and relabeled for
// Slotwise. Every line below is taken from the Slotwise page copy (setup table, divergence
// map, autonomy contract and behavior spec); only the short UI labels are new.
export const DEMO_BA = {
  beforeTag: "Before",
  beforeTitle: "Autopilot version",
  afterTag: "After",
  afterTitle: "Agreed behavior",
  exampleFlow: SLOTWISE_LABEL,
  person: "Prospect",
  agent: "Slotwise",
  userMessage: "Sometime next week?",
  beforeSummary:
    "Reads prospect replies and books the meeting on the rep's calendar. Sends the invite without asking.",
  issues: [
    "Sends an invite without the rep.",
    "Talks to the prospect directly, by email.",
    "On a conflict, picks the next slot.",
  ],
};

export const DEMO_TABS = [
  {
    id: "ambiguity",
    label: "Ambiguity",
    detailTitle: "Vague time",
    detailBody: "Prospect gives a vague time (\u201csometime next week\u201d).",
    uncertainty: "I found three open times next week: Tue 10:00, Wed 14:00 and Thu 11:00 your time. Which works best?",
    actions: [
      { label: "Tue 10:00", primary: false },
      { label: "Wed 14:00", primary: false },
      { label: "Thu 11:00", primary: false },
    ],
    mini: {
      rows: [{ name: "Time zone unclear", value: "Asks" }],
      note: "\u201cJust to confirm: is that 2 PM in New York or in London?\u201d",
    },
  },
  {
    id: "approval",
    label: "Approval gate",
    detailTitle: "Needs the rep's approval",
    detailBody: "The first message to any new prospect, any meeting outside working hours, adding a teammate to the invite.",
    ready: "Needs the rep's approval.",
    scope: "The first message to any new prospect.",
    actions: [
      { label: "Confirm", primary: true },
      { label: "Edit", primary: false },
      { label: "Cancel", primary: false },
    ],
  },
  {
    id: "takeover",
    label: "Takeover",
    detailTitle: "Rep wants to take over",
    detailBody: "One click on \u201cI'll handle this\u201d stops Slotwise on that thread and shows everything it has done so far.",
    packet: [
      {
        label: "Calendar service down",
        text: "\u201cI couldn't reach your calendar just now, so I haven't held any time. I'll try again in 5 minutes, or you can book it yourself.\u201d",
      },
      { label: "Rep wants to take over", text: "\u201cI'll handle this\u201d stops Slotwise on that thread." },
    ],
  },
  {
    id: "history",
    label: "Action history",
    detailTitle: "Everything it has done so far",
    detailBody: "Top jobs: find a time that works for both sides, hold it, send the invite, confirm.",
    steps: [
      { text: "Find a time that works for both sides", done: true, undo: false },
      { text: "Hold a tentative slot for 24 hours", done: true, undo: true },
      { text: "Send the invite: needs the rep's approval", done: false, undo: false },
    ],
  },
] as const;
