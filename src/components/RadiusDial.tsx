import Link from "next/link";
import { site } from "@/lib/site";
import { moreTowns, towns } from "@/content/towns";

type Pos = "left" | "right" | "above" | "below";

/** Label placement per town so names do not collide on the dial. */
const labelPos: Record<string, Pos> = {
  "akron-pa": "right",
  "ephrata-pa": "right",
  "lititz-pa": "above",
  "denver-pa": "right",
  "manheim-pa": "left",
  "new-holland-pa": "right",
  "lancaster-pa": "right",
  "elizabethtown-pa": "left",
  "mount-joy-pa": "left",
  "lebanon-pa": "left",
  "myerstown-pa": "left",
  "palmyra-pa": "left",
  "reading-pa": "right",
  "womelsdorf-pa": "above",
  Leola: "right",
  Brownstown: "left",
  Reinholds: "right",
  Reamstown: "right",
  Schaefferstown: "right",
  Annville: "below",
  Columbia: "left",
  Millersville: "below",
  Strasburg: "right",
  Robesonia: "right",
  Wyomissing: "below",
};

function labelAttrs(pos: Pos, x: number, y: number, r: number) {
  switch (pos) {
    case "left":
      return { x: x - r - 6, y: y + 5, anchor: "end" as const };
    case "right":
      return { x: x + r + 6, y: y + 5, anchor: "start" as const };
    case "above":
      return { x, y: y - r - 7, anchor: "middle" as const };
    case "below":
    default:
      return { x, y: y + r + 16, anchor: "middle" as const };
  }
}

/**
 * Where Josh works, drawn as rings of distance from the shop in Akron.
 * Each town sits at its real bearing and straight-line distance.
 */
export function RadiusDial({ className = "" }: { className?: string }) {
  const size = 640;
  const c = size / 2;
  const maxMiles = 30;
  const pxPerMile = (c - 40) / maxMiles;
  const home = site.geo;
  const toXY = (t: { lat: number; lng: number }) => {
    const dx = (t.lng - home.lng) * Math.cos((home.lat * Math.PI) / 180) * 69.17;
    const dy = (t.lat - home.lat) * 69.05;
    return { x: c + dx * pxPerMile, y: c - dy * pxPerMile };
  };
  const rings = [5, 10, 20, 30];
  const pageTowns = towns.filter((t) => t.slug !== "akron-pa").map((t) => ({ ...t, ...toXY(t) }));
  const others = moreTowns.map((t) => ({ ...t, ...toXY(t) }));

  return (
    <div className={`dial ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-labelledby="dial-title dial-desc">
        <title id="dial-title">Service area around Akron, Pennsylvania</title>
        <desc id="dial-desc">
          Rings at 5, 10, 20 and 30 miles from the shop in Akron with the towns Fox Gables serves placed at their real
          distance and direction.
        </desc>
        {rings.map((r, i) => (
          <g key={r} className="ring" style={{ transitionDelay: `${i * 120}ms` }}>
            <circle cx={c} cy={c} r={r * pxPerMile} fill="none" stroke="currentColor" strokeOpacity={0.18} strokeWidth={1} strokeDasharray={i === rings.length - 1 ? "0" : "4 6"} />
            <text x={c + 6} y={c - r * pxPerMile - 6} className="fill-current font-display text-[13px] font-semibold tracking-[0.1em]" fillOpacity={0.55}>
              {r} MI
            </text>
          </g>
        ))}
        <text x={c} y={22} textAnchor="middle" className="fill-current font-display text-[12px] font-semibold tracking-[0.2em]" fillOpacity={0.5}>
          N
        </text>
        {others.map((t) => {
          const l = labelAttrs(labelPos[t.name] ?? "right", t.x, t.y, 3);
          return (
            <g key={t.name}>
              <circle cx={t.x} cy={t.y} r={3} fill="currentColor" fillOpacity={0.45} />
              <text x={l.x} y={l.y} textAnchor={l.anchor} className="fill-current font-serif text-[12px]" fillOpacity={0.6}>
                {t.name}
              </text>
            </g>
          );
        })}
        {pageTowns.map((t) => {
          const l = labelAttrs(labelPos[t.slug] ?? "right", t.x, t.y, 7);
          return (
            <Link key={t.slug} href={`/service-areas/${t.slug}/`} className="group">
              <circle cx={t.x} cy={t.y} r={7} fill="#e3561d" className="transition-transform group-hover:scale-150" style={{ transformOrigin: `${t.x}px ${t.y}px` }} />
              <text x={l.x} y={l.y} textAnchor={l.anchor} className="fill-current font-display text-[15px] font-bold group-hover:fill-[#e3561d]">
                {t.name}
              </text>
            </Link>
          );
        })}
        <Link href="/service-areas/akron-pa/" className="group">
          <circle cx={c} cy={c} r={11} fill="#e3561d" />
          <circle cx={c} cy={c} r={4} fill="#fff" />
          <text x={c + 17} y={c + 5} textAnchor="start" className="fill-current font-display text-[15px] font-bold group-hover:fill-[#e3561d]">
            Akron
          </text>
          <text x={c + 17} y={c + 20} textAnchor="start" className="fill-current font-display text-[10px] font-semibold tracking-[0.12em]" fillOpacity={0.6}>
            THE SHOP
          </text>
        </Link>
      </svg>
      <style>{`
        .js-anim .dial .ring { transform: scale(0.2); opacity: 0; transform-origin: 50% 50%; transition: transform 1.1s var(--ease-expo), opacity 0.6s; }
        .js-anim .reveal.is-in .dial .ring, .js-anim .dial.is-in .ring { transform: scale(1); opacity: 1; }
        @media (prefers-reduced-motion: reduce) { .js-anim .dial .ring { transform: none; opacity: 1; transition: none; } }
      `}</style>
    </div>
  );
}
