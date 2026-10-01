"use client";

import Image from "next/image";
import { useId, useState } from "react";

export function BeforeAfter({
  before,
  after,
  ratio = "3/4",
  className = "",
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  ratio?: "3/4" | "4/3" | "1/1";
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className={`relative select-none ${className}`}>
      <div className="relative overflow-hidden bg-sky-deep" style={{ aspectRatio: ratio.replace("/", " / ") }}>
        <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: `${10000 / pos}%` }}>
            <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }} aria-hidden="true">
          <div className="h-full w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" />
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-fox text-white shadow-[var(--shadow-frame)]">
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              <path d="M7 1L1 7l6 6M15 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <span className="absolute left-3 top-3 bg-shingle/85 px-2.5 py-1 font-display text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white">Before</span>
        <span className="absolute right-3 top-3 bg-fox px-2.5 py-1 font-display text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white">After</span>
        <input
          id={id}
          type="range"
          min={2}
          max={98}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-[0.9rem] text-ink-mute">Drag to compare. {before.alt} / {after.alt}</figcaption>
    </figure>
  );
}
