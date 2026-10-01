"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ShowcaseItem = { name: string; href: string; short: string; image: string; alt: string };

export function ServiceShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ol className="lg:col-span-7">
        {items.map((it, i) => (
          <li key={it.href} className="border-t border-line last:border-b">
            <Link
              href={it.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-5 transition-colors sm:grid-cols-[3rem_1fr_auto] ${
                active === i ? "text-fox" : "text-ink"
              }`}
            >
              <span className="font-display text-[0.8rem] font-semibold tracking-[0.12em] text-ink-mute tnum">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-[clamp(1.5rem,1.2rem+1.6vw,2.4rem)] font-bold leading-none tracking-[-0.02em]" style={{ fontStretch: "108%" }}>
                {it.name}
              </span>
              <span className="col-start-2 mt-2 text-[0.98rem] text-ink-soft sm:col-start-2">{it.short}</span>
              <span
                aria-hidden="true"
                className={`hidden font-display text-[0.85rem] font-semibold uppercase tracking-[0.12em] transition-transform sm:block ${
                  active === i ? "translate-x-0 text-fox" : "translate-x-2 text-ink-mute"
                }`}
              >
                View
              </span>
            </Link>
            <div className="relative mb-5 aspect-[16/9] overflow-hidden lg:hidden">
              <Image src={it.image} alt={it.alt} fill sizes="100vw" className="object-cover" />
            </div>
          </li>
        ))}
      </ol>
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="house relative aspect-[4/5] shadow-[var(--shadow-frame)]" style={{ "--gh": "20%" } as React.CSSProperties}>
            {items.map((it, i) => (
              <Image
                key={it.href}
                src={it.image}
                alt={it.alt}
                fill
                sizes="40vw"
                className={`object-cover transition-opacity duration-700 ${active === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          <p className="mt-3 text-[0.9rem] text-ink-mute">{items[active]?.alt}</p>
        </div>
      </div>
    </div>
  );
}
