"use client";

import { useCallback, useId, useRef, useState, type KeyboardEvent } from "react";
import { DEMO_BA, DEMO_TABS } from "@/content/demo";

type Tab = (typeof DEMO_TABS)[number];

function MiniBtn({ label, primary }: { label: string; primary?: boolean }) {
  return <span className={`demo-mini${primary ? " is-primary" : ""}`}>{label}</span>;
}

function AmbiguityPanel(tab: Extract<Tab, { id: "ambiguity" }>) {
  return (
    <>
      <p className="demo-unsure">
        <i aria-hidden="true" />
        {tab.uncertainty}
      </p>
      {tab.sources.map((s) => (
        <div key={s.name} className="demo-src">
          <div>
            <div className="demo-src-name">{s.name}</div>
            <div className="demo-src-meta">{s.meta}</div>
          </div>
          <div className="demo-src-val">{s.value}</div>
        </div>
      ))}
      <div className="demo-acts">
        {tab.actions.map((a) => (
          <MiniBtn key={a.label} label={a.label} primary={a.primary} />
        ))}
      </div>
    </>
  );
}

function ApprovalPanel(tab: Extract<Tab, { id: "approval" }>) {
  return (
    <div className="demo-ui">
      <div className="demo-ui-h">{tab.ready}</div>
      <div className="demo-ui-k">{tab.scope}</div>
      <div className="demo-acts">
        {tab.actions.map((a) => (
          <MiniBtn key={a.label} label={a.label} primary={a.primary} />
        ))}
      </div>
    </div>
  );
}

function TakeoverPanel(tab: Extract<Tab, { id: "takeover" }>) {
  return (
    <div className="demo-ui">
      {tab.packet.map((row) => (
        <div key={row.label}>
          <span className="demo-ui-h">{row.label}:</span> {row.text}
        </div>
      ))}
    </div>
  );
}

function HistoryPanel(tab: Extract<Tab, { id: "history" }>) {
  return (
    <div className="demo-ui">
      {tab.steps.map((step) => (
        <div key={step.text} className="demo-step">
          <span className={step.done ? "demo-dot-on" : "demo-dot-off"} aria-hidden="true" />
          <div className="demo-step-t">{step.text}</div>
          {step.undo ? <span className="demo-undo">Undo</span> : null}
        </div>
      ))}
    </div>
  );
}

function AfterBody({ tab }: { tab: Tab }) {
  switch (tab.id) {
    case "ambiguity":
      return <AmbiguityPanel {...tab} />;
    case "approval":
      return <ApprovalPanel {...tab} />;
    case "takeover":
      return <TakeoverPanel {...tab} />;
    case "history":
      return <HistoryPanel {...tab} />;
  }
}

function PrimitiveMini({ tab }: { tab: Tab }) {
  if (tab.id === "ambiguity") {
    return (
      <div className="demo-ui">
        {tab.mini.rows.map((row) => (
          <div key={row.name} className="demo-ui-row">
            <span className="demo-ui-h">{row.name}</span>
            <span>{row.value}</span>
          </div>
        ))}
        <div className="demo-ui-k">{tab.mini.note}</div>
      </div>
    );
  }
  return <AfterBody tab={tab} />;
}

export function DemoTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const uid = useId();

  const select = useCallback((index: number) => {
    setActive(index);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = DEMO_TABS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next == null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const tab = DEMO_TABS[active];

  return (
    <>
      <div className="demo-ba">
        <BeforePanel />
        <div className="demo-panel is-after">
          <div className="demo-ph-head">
            <div>
              <p className="demo-tagline">{DEMO_BA.afterTag}</p>
              <h3>{DEMO_BA.afterTitle}</h3>
            </div>
            <span className="demo-ex">{DEMO_BA.exampleFlow}</span>
          </div>
          <div className="demo-ph-body">
            <div
              className="demo-tabs"
              role="tablist"
              aria-label="Scenario tabs"
              onKeyDown={onKeyDown}
            >
              {DEMO_TABS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className={`demo-tab${i === active ? " is-on" : ""}`}
                  role="tab"
                  id={`${uid}-tab-${t.id}`}
                  aria-selected={i === active}
                  aria-controls={`${uid}-panel-${t.id}`}
                  tabIndex={i === active ? 0 : -1}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  onClick={() => select(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="demo-msg is-user">
              <div className="demo-who">{DEMO_BA.person}</div>
              {DEMO_BA.userMessage}
            </div>
            <div
              key={tab.id}
              className="demo-tabpanel"
              role="tabpanel"
              id={`${uid}-panel-${tab.id}`}
              aria-labelledby={`${uid}-tab-${tab.id}`}
              tabIndex={0}
            >
              <AfterBody tab={tab} />
            </div>
          </div>
        </div>
      </div>
      <div className="demo-prims">
        {DEMO_TABS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={`demo-prim${i === active ? " is-on" : ""}`}
            onClick={() => select(i)}
            aria-pressed={i === active}
          >
            <p className="demo-tagline">
              Tab {i + 1} · {t.label}
            </p>
            <h4>{t.detailTitle}</h4>
            <p className="demo-prim-d">{t.detailBody}</p>
            <PrimitiveMini tab={t} />
          </button>
        ))}
      </div>
    </>
  );
}

function BeforePanel() {
  return (
    <div className="demo-panel">
      <div className="demo-ph-head">
        <div>
          <p className="demo-tagline is-muted">{DEMO_BA.beforeTag}</p>
          <h3>{DEMO_BA.beforeTitle}</h3>
        </div>
        <span className="demo-ex">{DEMO_BA.exampleFlow}</span>
      </div>
      <div className="demo-ph-body">
        <div className="demo-msg is-user">
          <div className="demo-who">{DEMO_BA.person}</div>
          {DEMO_BA.userMessage}
        </div>
        <div className="demo-msg is-agent">
          <div className="demo-who">{DEMO_BA.agent}</div>
          {DEMO_BA.beforeAgentDone}
        </div>
        <div className="demo-raw">{DEMO_BA.beforeError}</div>
        <div className="demo-msg is-agent">
          <div className="demo-who">{DEMO_BA.agent}</div>
          {DEMO_BA.beforeAgentFail}
        </div>
        {DEMO_BA.issues.map((issue, i) => (
          <div key={issue} className="demo-issue">
            <span className="demo-mk" aria-hidden="true">
              {i + 1}
            </span>
            {issue}
          </div>
        ))}
      </div>
    </div>
  );
}
