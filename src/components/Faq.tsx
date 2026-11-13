"use client";

import { useState } from "react";
import { staggerMs } from "@/lib/motion";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const qid = `faq-q-${i + 1}`;
        const aid = `faq-a-${i + 1}`;
        return (
          <div
            key={qid}
            className="faq-item"
            data-open={isOpen ? "" : undefined}
            data-reveal=""
            style={{ "--d": `${staggerMs(i)}ms` } as React.CSSProperties}
          >
            <h3 className="faq-h">
              <button
                id={qid}
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={aid}
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <span className="faq-ic" aria-hidden="true" />
              </button>
            </h3>
            <div id={aid} role="region" aria-labelledby={qid} className="faq-panel">
              <div className="faq-panel-inner">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
