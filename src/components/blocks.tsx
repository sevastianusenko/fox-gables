import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { reviews } from "@/content/reviews";
import { projects, type Project } from "@/content/projects";
import { process } from "@/content/services";
import { towns } from "@/content/towns";
import { HouseFrame } from "./ui/HouseFrame";
import { Section, Eyebrow } from "./ui/Section";
import { Button } from "./ui/Button";
import { LeadForm } from "./LeadForm";
import { GableEdge } from "./ui/GableEdge";

/* ---------- Project cards ---------- */

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <Link href={`/projects/${p.slug}/`} className="reveal group block" style={{ "--d": `${index * 80}ms` } as React.CSSProperties}>
      <div className="lift zoom-img">
        <HouseFrame src={p.cover.src} alt={p.cover.alt} ratio="4/5" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="shadow-[var(--shadow-frame)]" />
      </div>
      <p className="eyebrow mt-4 text-fox">
        {p.town} · {p.county}
      </p>
      <h3 className="mt-1.5 group-hover:text-fox">{p.title}</h3>
      <p className="mt-1.5 text-[0.97rem] text-ink-soft">{p.short}</p>
    </Link>
  );
}

export function ProjectsGrid({ slugs, limit = 3 }: { slugs?: string[]; limit?: number }) {
  const list = (slugs ? slugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) : projects).slice(0, limit) as Project[];
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <ProjectCard key={p.slug} p={p} index={i} />
      ))}
    </div>
  );
}

/* ---------- Process ---------- */

export function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`grid gap-8 ${compact ? "md:grid-cols-5" : "md:grid-cols-2 lg:grid-cols-5"}`}>
      {process.map((s, i) => (
        <li key={s.step} className="reveal relative border-t-4 border-fox pt-4" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
          <span className="font-display text-[2.4rem] font-extrabold leading-none text-fox tnum" style={{ fontStretch: "112%" }}>
            {i + 1}
          </span>
          <h3 className="mt-2 text-[1.15rem]">{s.step}</h3>
          {!compact && <p className="mt-2 text-[0.97rem] text-ink-soft">{s.detail}</p>}
        </li>
      ))}
    </ol>
  );
}

/* ---------- Reviews ---------- */

export function ReviewQuote({ r, tone = "light" }: { r: (typeof reviews)[number]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <figure className={`flex h-full flex-col border-l-4 border-fox pl-5 ${dark ? "text-white" : "text-ink"}`}>
      <blockquote className="flex-1 text-[1.05rem] leading-relaxed">“{r.quote}”</blockquote>
      <figcaption className={`mt-4 text-[0.9rem] ${dark ? "text-white/65" : "text-ink-mute"}`}>
        <span className={`font-display font-semibold ${dark ? "text-white" : "text-ink"}`}>{r.name}</span>
        {r.town ? `, ${r.town}` : ""} · {r.job} ·{" "}
        {r.url ? (
          <a href={r.url} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-fox">
            {r.source}
          </a>
        ) : (
          r.source
        )}
      </figcaption>
    </figure>
  );
}

export function ReviewsBlock({ tone = "light", limit = 3 }: { tone?: "light" | "dark"; limit?: number }) {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {reviews.slice(0, limit).map((r, i) => (
        <div key={i} className="reveal" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
          <ReviewQuote r={r} tone={tone} />
        </div>
      ))}
    </div>
  );
}

/* ---------- CTA band with form ---------- */

export function CtaBand({ service, source = "cta", heading, intro }: { service?: string; source?: string; heading?: string; intro?: string }) {
  return (
    <section className="relative flow-root bg-fox text-white">
      <GableEdge className="text-fox" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <Eyebrow className="text-white/80">Free estimate</Eyebrow>
          <h2 className="mt-3 text-white">{heading ?? "Get a number, not a pitch."}</h2>
          <p className="lede mt-5 text-white/90">
            {intro ??
              "Tell Josh what the house needs. He will call back, come out, measure, and give you a written estimate with the materials named."}
          </p>
          <a href={site.phoneHref} className="mt-8 block font-display text-[clamp(2rem,1.5rem+2.5vw,3.2rem)] font-extrabold leading-none tracking-[-0.02em] tnum hover:underline" style={{ fontStretch: "110%" }}>
            {site.phone}
          </a>
          <p className="mt-3 text-white/80">{site.hoursText}</p>
          <p className="mt-6 border-t border-white/25 pt-4 text-[0.9rem] text-white/80">
            PA HIC #{site.hic} · Insured · {site.address.street}, {site.address.city}, {site.address.state}
          </p>
        </div>
        <div className="bg-white p-6 text-ink shadow-[var(--shadow-frame-lift)] md:p-8 lg:col-span-7">
          <LeadForm source={source} defaultService={service} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Towns strip ---------- */

export function TownsStrip({ heading = "Where this work gets done", current }: { heading?: string; current?: string }) {
  return (
    <div>
      <h2 className="text-[clamp(1.5rem,1.2rem+1.4vw,2.2rem)]">{heading}</h2>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
        {towns
          .filter((t) => t.slug !== current)
          .map((t) => (
            <li key={t.slug}>
              <Link href={`/service-areas/${t.slug}/`} className="font-display text-[1.02rem] font-semibold text-ink underline decoration-fox/50 decoration-2 underline-offset-4 hover:text-fox">
                {t.name}, PA
              </Link>
            </li>
          ))}
        <li>
          <Link href="/service-areas/" className="font-display text-[1.02rem] font-semibold text-fox">
            All service areas
          </Link>
        </li>
      </ul>
    </div>
  );
}

/* ---------- Photo band ---------- */

export function PhotoBand({
  src,
  alt,
  children,
  position = "center",
}: {
  src: string;
  alt: string;
  children: ReactNode;
  position?: string;
}) {
  return (
    <section className="relative flow-root bg-shingle text-white">
      <GableEdge className="text-shingle" />
      <div className="relative min-h-[70vh] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
        <div className="absolute inset-0 bg-gradient-to-t from-shingle via-shingle/60 to-shingle/10" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-4 pb-14 pt-24 sm:px-6 lg:px-8">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Simple gallery ---------- */

export function Gallery({ items, cols = 3 }: { items: { src: string; alt: string; caption?: string }[]; cols?: 2 | 3 | 4 }) {
  const colCls = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={`grid gap-6 ${colCls}`}>
      {items.map((g, i) => (
        <li key={g.src + i} className="reveal" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-sky-deep zoom-img">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            {g.caption && <figcaption className="mt-2 text-[0.9rem] text-ink-mute">{g.caption}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}

/* ---------- License block ---------- */

export function LicenseBlock({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`grid gap-6 border-y-2 py-6 sm:grid-cols-3 ${dark ? "border-white/20" : "border-ink"}`}>
      <div>
        <p className="eyebrow text-fox">PA registration</p>
        <p className="mt-1 font-display text-[1.4rem] font-bold leading-none">{site.hic}</p>
        <a href={site.hicUrl} rel="noopener" target="_blank" className={`mt-1 inline-block text-[0.9rem] underline underline-offset-4 ${dark ? "text-white/70" : "text-ink-mute"} hover:text-fox`}>
          Verify at the Attorney General
        </a>
      </div>
      <div>
        <p className="eyebrow text-fox">Insured</p>
        <p className="mt-1 font-display text-[1.4rem] font-bold leading-none">Liability coverage</p>
        <p className={`mt-1 text-[0.9rem] ${dark ? "text-white/70" : "text-ink-mute"}`}>{site.insurer}. Certificate on request.</p>
      </div>
      <div>
        <p className="eyebrow text-fox">Contracts</p>
        <p className="mt-1 font-display text-[1.4rem] font-bold leading-none">Written, over $500</p>
        <p className={`mt-1 text-[0.9rem] ${dark ? "text-white/70" : "text-ink-mute"}`}>As Pennsylvania’s HICPA requires, with a three-day right to cancel.</p>
      </div>
    </div>
  );
}

export { Section, Eyebrow, Button, HouseFrame };
