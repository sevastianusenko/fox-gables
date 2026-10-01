import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/posts";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Blog | Roofing, Siding and Remodeling Advice for Lancaster County",
  description:
    "Plain answers from a working contractor: what a roof costs in Pennsylvania, repair versus replacement, metal versus shingles, deck permits, aluminum trim wrap and how to check a contractor's license.",
  alternates: { canonical: "/blog/" },
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogIndex() {
  const [first, ...rest] = posts;
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog/" }]} />
          <Eyebrow className="mt-6 text-fox">Blog</Eyebrow>
          <h1 className="mt-3">Straight answers from the ladder</h1>
          <p className="lede measure mt-6 text-ink-soft">
            What things cost around here, when to repair and when to replace, and how to avoid getting burned. Written
            by Josh, for homeowners in Lancaster and Lebanon counties.
          </p>
        </div>
      </section>

      <Section tone="sky" edge>
        <Link href={`/blog/${first.slug}/`} className="reveal group grid gap-8 bg-white p-5 shadow-[var(--shadow-frame)] md:p-6 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[3/2] overflow-hidden zoom-img lg:col-span-6">
            <Image src={first.image} alt={first.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow text-fox">{first.serviceLabel}</p>
            <h2 className="mt-3 group-hover:text-fox">{first.title}</h2>
            <p className="mt-3 text-ink-soft">{first.description}</p>
            <p className="mt-4 text-[0.9rem] text-ink-mute">
              {fmt(first.date)} · {first.readMinutes} min read
            </p>
          </div>
        </Link>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <li key={p.slug} className="reveal" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
              <Link href={`/blog/${p.slug}/`} className="group block h-full bg-white shadow-[var(--shadow-frame)]">
                <div className="relative aspect-[3/2] overflow-hidden zoom-img">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="border-t-4 border-fox p-5">
                  <p className="eyebrow text-fox">{p.serviceLabel}</p>
                  <h2 className="mt-2 text-[1.3rem] group-hover:text-fox">{p.title}</h2>
                  <p className="mt-2 text-[0.95rem] text-ink-soft">{p.description}</p>
                  <p className="mt-3 text-[0.85rem] text-ink-mute">
                    {fmt(p.date)} · {p.readMinutes} min
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand source="blog" />
    </>
  );
}
