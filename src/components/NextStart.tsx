"use client";

import { useSyncExternalStore } from "react";
import { getNextStartLabel, NEXT_START_FALLBACK } from "@/lib/next-start";

const subscribe = () => () => {};

// Server snapshot is the January 2027 floor so SSR/prerender and hydration
// match. The client snapshot is computed in America/New_York so a stale
// static build still shows the live month after January 2027.
export function NextStart() {
  const label = useSyncExternalStore(subscribe, getNextStartLabel, () => NEXT_START_FALLBACK);

  return (
    <span className="pill">
      <span className="dot" aria-hidden="true" />
      {label}
    </span>
  );
}
