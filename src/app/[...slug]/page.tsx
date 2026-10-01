import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { childrenOf, serviceBySlug, services, type Service } from "@/content/services";
import { PageHero, type Crumb } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { CtaBand, Gallery, ProcessSteps, ProjectsGrid, TownsStrip } from "@/components/blocks";
import { JsonLd, serviceSchema } from "@/components/Schema";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug.join("/"));
  if (!s) return {};
  return {
    title: { absolute: s.title },
    description: s.metaDescription,
    alternates: { canonical: s.path },
    openGraph: { title: s.title, description: s.metaDescription, images: [{ url: s.hero.src }] },
  };
}

function crumbsFor(s: Service): Crumb[] {
  const parent = s.parent ? serviceBySlug(s.parent) : undefined;
  return parent ? [{ name: parent.name, href: parent.path }, { name: s.name, href: s.path }] : [{ name: s.name, href: s.path }];
}

export default async function ServicePage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug.join("/"));
  if (!s) notFound();
  const kids = childrenOf(s.slug);
  const related = s.related.map((p) => services.find((x) => x.path === p)).filter(Boolean) as Service[];

  return (
    <>
      <JsonLd data={serviceSchema({ name: s.name, description: s.metaDescription, path: s.path, type: s.schemaType, image: s.hero.src })} />
      <PageHero crumbs={crumbsFor(s)} eyebrow={s.eyebrow} title={s.h1} lede={s.lede} image={s.hero.src} imageAlt={s.hero.alt} ratio={s.hero.ratio ?? "4/5"} />

      {kids.length > 0 && (
        <Section tone="sky" edge tight>
          <Eyebrow className="text-fox">{s.name} services</Eyebrow>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kids.map((k, i) => (
              <li key={k.slug} className="reveal" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <Link href={k.path} className="lift group block h-full border-t-4 border-ink bg-white p-5 shadow-[var(--shadow-frame)] hover:border-fox">
                  <h3 className="group-hover:text-fox">{k.name}</h3>
                  <p className="mt-2 text-[0.97rem] text-ink-soft">{k.short}</p>
                  <span className="mt-4 inline-block font-display text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-fox">Read more</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Intro */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-fox">In short</Eyebrow>
            <p className="mt-3 font-display text-[1.35rem] font-semibold leading-snug" style={{ fontStretch: "104%" }}>
              {s.intro[0]}
            </p>
          </div>
          <div className="prose-fg text-ink-soft lg:col-span-8">
            {s.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Sections */}
      {s.sections.map((sec, i) => (
        <Section key={sec.heading} tone={i % 2 === 1 ? "sky" : "paper"} edge={i % 2 === 1} tight>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="reveal">{sec.heading}</h2>
            </div>
            <div className="reveal lg:col-span-8" style={{ "--d": "90ms" } as React.CSSProperties}>
              <div className="prose-fg text-ink-soft">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {sec.bullets && (
                  <ul>
                    {sec.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
              {sec.table && (
                <div className="prose-fg mt-6 max-w-none overflow-x-auto">
                  <table>
                    {sec.table.caption && <caption className="pb-2 text-left font-display text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-ink-mute">{sec.table.caption}</caption>}
                    <thead>
                      <tr>
                        {sec.table.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((c, jj) => (
                            <td key={jj}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* Pricing */}
      {s.pricing && (
        <Section tone="shingle" edge>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Eyebrow className="text-fox">Price guide</Eyebrow>
              <h2 className="mt-3 text-white">What this usually costs</h2>
              <p className="mt-4 text-white/75">{s.pricing.intro}</p>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-white/15 border-y border-white/15">
                {s.pricing.rows.map(([item, price], i) => (
                  <div key={i} className="reveal grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-8" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                    <dt className="text-white/90">{item}</dt>
                    <dd className="font-display text-[1.15rem] font-bold text-fox tnum sm:text-right">{price}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[0.95rem] text-white/65">{s.pricing.outro}</p>
            </div>
          </div>
        </Section>
      )}

      {/* Signs */}
      {s.signs && (
        <Section tone="paper" tight>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2>{s.signs.heading}</h2>
            </div>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:col-span-8">
              {s.signs.items.map((it, i) => (
                <li key={i} className="reveal flex gap-3 text-ink-soft" style={{ "--d": `${i * 40}ms` } as React.CSSProperties}>
                  <svg width="18" height="18" viewBox="0 0 18 18" className="mt-1.5 shrink-0 text-fox" aria-hidden="true">
                    <path d="M1 15 L9 3 L17 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  </svg>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Gallery */}
      {s.gallery && s.gallery.length > 0 && (
        <Section tone="sky" edge tight>
          <Eyebrow className="text-fox">On the job</Eyebrow>
          <div className="mt-5">
            <Gallery items={s.gallery} cols={s.gallery.length >= 4 ? 4 : 3} />
          </div>
        </Section>
      )}

      {/* Process */}
      <Section tone="paper">
        <div className="mb-8 max-w-2xl">
          <Eyebrow className="text-fox">How a job goes</Eyebrow>
          <h2 className="mt-3">From the first call to the walkthrough</h2>
        </div>
        <ProcessSteps />
      </Section>

      {/* Projects */}
      {s.projects.length > 0 && (
        <Section tone="sky" edge>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow className="text-fox">Related projects</Eyebrow>
              <h2 className="mt-3">This work, on real houses</h2>
            </div>
            <Link href="/projects/" className="font-display font-semibold text-fox underline underline-offset-4">
              All projects
            </Link>
          </div>
          <ProjectsGrid slugs={s.projects} />
        </Section>
      )}

      {/* FAQ + related */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Faq items={s.faqs} />
          </div>
          <aside className="lg:col-span-4">
            <Eyebrow className="text-fox">Often done together</Eyebrow>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {related.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className="group block py-3.5">
                    <span className="font-display text-[1.1rem] font-semibold group-hover:text-fox">{r.name}</span>
                    <span className="block text-[0.9rem] text-ink-mute">{r.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-4 border-fox bg-sky p-5">
              <p className="font-display text-[1.1rem] font-semibold">Questions? Call Josh.</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-[1.6rem] font-bold tnum hover:text-fox">
                {site.phone}
              </a>
              <p className="mt-1 text-[0.9rem] text-ink-mute">{site.hoursText}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper" tight className="border-t border-line">
        <TownsStrip />
      </Section>

      <CtaBand service={s.jobType} source={s.slug} />
    </>
  );
}
