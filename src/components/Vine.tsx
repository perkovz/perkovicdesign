import type { CSSProperties } from "react";
import { SIX_WEEKS } from "@/content/site";
import { VINE_DESKTOP, VINE_MOBILE, VINE_STOPS, VINE_TABLET, type VineGeometry } from "@/content/vine";
import { vineDelayMs } from "@/lib/motion";

type Kind = "below" | "above" | "above-end" | "row";
const DESKTOP_KINDS: Kind[] = ["below", "above", "below", "above", "below", "above-end"];

const pct = (v: number, of: number) => `${((v / of) * 100).toFixed(3)}%`;

function Stem({ g, id }: { g: VineGeometry; id: string }) {
  return (
    <svg
      className="vine-svg"
      viewBox={`0 0 ${g.w} ${g.h}`}
      width={g.w}
      height={g.h}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        id={id}
        className="vine-stem"
        d={g.d}
        pathLength={1}
        stroke="#4F6B55"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {g.leaves.map((leaf, i) => {
        const mid = (VINE_STOPS[i] + VINE_STOPS[i + 1]) / 2;
        return (
          <g
            key={i}
            className={`vine-leaf vine-leaf-${i + 1}`}
            style={
              {
                transformOrigin: `${leaf.base[0]}px ${leaf.base[1]}px`,
                "--t": `${vineDelayMs(mid)}ms`,
              } as CSSProperties
            }
          >
            <path d={leaf.d} fill="#A9BFA3" />
            <path d={leaf.vein} stroke="#4F6B55" strokeWidth="1" strokeLinecap="round" opacity=".55" />
          </g>
        );
      })}
    </svg>
  );
}

function Week({ i, kind, style }: { i: number; kind: Kind; style: CSSProperties }) {
  const w = SIX_WEEKS.weeks[i];
  const node = <span className="wk-node" aria-hidden="true" />;
  const tick = kind === "row" ? null : <span className="wk-tick" aria-hidden="true" />;
  const label = (
    <span className="wk-lab">
      <span className="wk-n">{w.n}</span>
      <span className="wk-t">{w.t}</span>
      <span className="wk-d">{w.d}</span>
    </span>
  );
  const above = kind === "above" || kind === "above-end";
  return (
    <li
      className={`wk wk-${i + 1} wk--${kind}`}
      tabIndex={0}
      style={{ ...style, "--t": `${vineDelayMs(VINE_STOPS[i])}ms` } as CSSProperties}
    >
      {above ? (
        <>
          {label}
          {tick}
          {node}
        </>
      ) : (
        <>
          {node}
          {tick}
          {label}
        </>
      )}
    </li>
  );
}

function DesktopVine() {
  const g = VINE_DESKTOP;
  return (
    <div className="vine vine--h" data-vine="">
      <div className="vine-stage">
        <Stem g={g} id="vine-stem-h" />
        <ol className="vine-weeks" aria-label="Six week Blueprint timeline">
          {g.nodes.map(([x, y], i) => {
            const kind = DESKTOP_KINDS[i];
            let style: CSSProperties;
            if (kind === "below") style = { left: pct(x - 12, g.w), top: pct(y - 12, g.h) };
            else if (kind === "above") style = { left: pct(x - 12, g.w), bottom: pct(g.h - (y + 12), g.h) };
            else style = { right: pct(g.w - (x + 12), g.w), bottom: pct(g.h - (y + 12), g.h) };
            return <Week key={i} i={i} kind={kind} style={style} />;
          })}
        </ol>
      </div>
    </div>
  );
}

function VerticalVine({ g, variant }: { g: VineGeometry; variant: "tablet" | "mobile" }) {
  return (
    <div className={`vine vine--v vine--${variant}`} data-vine="" style={{ height: g.h }}>
      <Stem g={g} id={`vine-stem-${variant}`} />
      <ol className="vine-weeks" aria-label="Six week Blueprint timeline">
        {g.nodes.map(([x, y], i) => (
          <Week key={i} i={i} kind="row" style={{ left: `${(x - 12).toFixed(1)}px`, top: `${(y - 12).toFixed(1)}px` }} />
        ))}
      </ol>
    </div>
  );
}

/** Renders all three vine layouts; CSS shows the one that fits the breakpoint. */
export function Vine() {
  return (
    <>
      <DesktopVine />
      <VerticalVine g={VINE_TABLET} variant="tablet" />
      <VerticalVine g={VINE_MOBILE} variant="mobile" />
    </>
  );
}
