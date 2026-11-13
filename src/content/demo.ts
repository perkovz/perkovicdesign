// Copy for the Agent Handoff Teardown demo at /demo.
// Planned target is vellum.ai. No real evals or results have been run;
// every chat, trace and score is example data, and honest placeholders stay visible.

export const DEMO_AGENT = "vellum.ai";

export const DEMO_META = {
  title: "Demo: Agent Handoff Teardown | Perkovic Design Studio",
  description:
    "A planned teardown of how vellum.ai hands control back to a person, with a coded prototype of a calmer handoff. The teardown has not run yet. This page shows the planned structure and example data only.",
  canonical: "/demo",
};

export const DEMO_NAV = {
  back: "Back to studio",
  crumb: "/ Demo / Agent handoff teardown",
};

export const DEMO_HERO = {
  eyebrow: "Agent behavior demo · Teardown",
  headline: "How a public AI agent hands control back to a person.",
  subtitleBefore: "Where ",
  subtitleAfter: " loses context or acts without checking, and a coded prototype of the calmer handoff.",
  pills: [
    { label: "[N] scenarios", dot: true },
    { label: "Human handoff", dot: false },
    { label: "Coded prototype", dot: false },
  ] as const,
  exampleFlow: "Example flow",
  statusKicker: "[COMING SOON]",
  status:
    "The teardown has not run yet. This page shows the planned structure. Every chat, trace and score below is example data until [N] scenarios run against vellum.ai.",
};

export const DEMO_BROKE = {
  eyebrow: "Overview · What broke",
  title: "Where handoffs fail quietly.",
  lead: "Three failure patterns the teardown will test. They are hypotheses until the scenarios run.",
  cards: [
    {
      n: "1",
      title: "Unstated uncertainty",
      body: "The agent sounds equally sure when it knows and when it guesses, so people cannot tell when to double-check.",
      look: "I will look for: answers that hide conflicting or missing sources.",
    },
    {
      n: "2",
      title: "Missing approval gate",
      body: "Irreversible actions run without a pause to confirm scope, so a wrong guess ships before anyone sees it.",
      look: "I will look for: sends, deletes and edits that happen without a clear confirm step.",
    },
    {
      n: "3",
      title: "Dropped context at handoff",
      body: "When it hands the task to a person, they start from zero: no summary of what was tried or what is blocked.",
      look: "I will look for: handoffs without a summary, a blocker or a next step.",
    },
  ],
};

export const DEMO_BA = {
  eyebrow: "Before and after",
  title: "The calmer handoff, side by side.",
  lead: "Left: how the agent behaves today in an example flow. Right: the coded prototype. Click a tab to see each trust primitive.",
  beforeTag: "Before",
  beforeTitle: "Current behavior: silent failure",
  afterTag: "After",
  afterTitle: "Redesigned trust surface: coded prototype",
  exampleFlow: "Example flow",
  person: "Person",
  agent: "Agent",
  userMessage: "Move the launch review to next week and let the team know.",
  beforeAgentDone: "Done! I moved the launch review to Tuesday and messaged the whole team.",
  beforeError: "Error 409: event_conflict on calendar_evt_2291. Partial update applied. Retry later.",
  beforeAgentFail: "Something went wrong. Please try again.",
  issues: [
    'Guessed which "next week" date, though two sources disagree.',
    "Messaged the whole team without asking first.",
    "Dumped a raw error. No summary and no way for a person to take over.",
  ],
};

export const DEMO_TABS = [
  {
    id: "ambiguity",
    label: "Ambiguity",
    detailTitle: "Evidence and uncertainty",
    detailBody: "Shows each source with its date and says plainly when they disagree.",
    uncertainty: "I found two dates and I'm not sure which one is current.",
    sources: [
      { name: "Launch plan", meta: "Document · updated 3 days ago", value: "Tuesday" },
      { name: "Team calendar", meta: "Calendar · updated today", value: "Thursday" },
    ],
    actions: [
      { label: "Use Thursday", primary: true },
      { label: "Use Tuesday", primary: false },
      { label: "Ask the owner", primary: false },
    ],
    mini: {
      rows: [
        { name: "Launch plan", value: "Tuesday" },
        { name: "Team calendar", value: "Thursday" },
      ],
      note: "Sources disagree. Which one should I use?",
    },
  },
  {
    id: "approval",
    label: "Approval gate",
    detailTitle: "Approval gate",
    detailBody: "Pauses before anything it cannot undo, with the exact scope in view.",
    ready: "Ready to send. Waiting for you.",
    scope: "Message 12 people in the launch channel about the Thursday review.",
    actions: [
      { label: "Confirm", primary: true },
      { label: "Edit", primary: false },
      { label: "Cancel", primary: false },
    ],
  },
  {
    id: "takeover",
    label: "Takeover packet",
    detailTitle: "Human takeover packet",
    detailBody: "Hands over with one line each: what was tried, what is blocked, what to do next.",
    packet: [
      { label: "Tried", text: "moving the review to Thursday." },
      { label: "Blocked", text: "the calendar rejected the change (conflict)." },
      { label: "Your next step", text: "pick a free slot, then I will notify the team." },
    ],
  },
  {
    id: "history",
    label: "Action history",
    detailTitle: "Action history",
    detailBody: "Logs every step and keeps reversible steps one click from undo.",
    steps: [
      { text: "Read launch plan and calendar", done: true, undo: false },
      { text: "Drafted team message", done: true, undo: true },
      { text: "Send message: waiting for approval", done: false, undo: false },
    ],
  },
] as const;

export const DEMO_MATRIX = {
  eyebrow: "Scenario eval matrix · [N] scenarios",
  title: "Pass, flag or fail, before and after.",
  lead: "Each category gets several scenarios. Before is the agent as it ships today; after is the coded prototype.",
  exampleLabel: "Example placeholder until teardown runs",
  columns: ["Category", "What it tests", "Before", "After"] as const,
  rows: [
    {
      category: "Ambiguity",
      what: "Two sources disagree, or the request has two readings.",
      before: "fail",
      after: "pass",
    },
    {
      category: "Missing context",
      what: "The agent lacks data it needs to finish the task.",
      before: "flag",
      after: "pass",
    },
    {
      category: "Tool failure",
      what: "A tool errors, times out or only partly succeeds.",
      before: "fail",
      after: "pass",
    },
    {
      category: "Unsafe or out-of-scope",
      what: "The request is outside what the agent may do alone.",
      before: "flag",
      after: "pass",
    },
    {
      category: "Takeover",
      what: "A person needs to step in and continue the task.",
      before: "fail",
      after: "flag",
    },
  ] as const,
  note: "Example placeholder until the teardown runs. No real scores yet. Results replace this table after [N] scenarios run against vellum.ai.",
};

export const DEMO_CTA = {
  eyebrow: "Prove your AI agent behaves before you ship it",
  title: "Want this run on your agent?",
  lead: "The Agent Behavior Blueprint runs the same scenarios against your real agent and ships the coded trust surface. Start with a $1,500 audit, credited in full.",
};
