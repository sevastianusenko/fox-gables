import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectBySlug } from "@/content/projects";
import { services } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand, Gallery, ProjectsGrid } from "@/components/blocks";
import { JsonLd, articleSchema } from "@/components/Schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} | ${p.town}`,
    description: p.metaDescription,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: p.title, description: p.metaDescription, images: [{ url: p.cover.src }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const svc = p.services.map((s) => services.find((x) => x.path === s)).filter(Boolean);
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema({ title: p.title, description: p.metaDescription, path: `/projects/${p.slug}/`, image: p.cover.src, date: "2025-02-01", type: "Article" })} />
      <PageHero
        crumbs={[
          { name: "Projects", href: "/projects/" },
          { name: p.title, href: `/projects/${p.slug}/` },
        ]}
        eyebrow={`${p.town} · ${p.county}`}
        title={p.title}
        lede={p.short}
        image={p.cover.src}
        imageAlt={p.cover.alt}
        cta={false}
      >
        <dl className="mt-8 grid gap-4 border-t-2 border-ink pt-5 sm:grid-cols-2">
          {p.facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow text-ink-mute">{f.label}</dt>
              <dd className="mt-1 text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section tone="paper" tight>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="prose-fg text-ink-soft lg:col-span-7">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {p.quote && (
              <blockquote>
                {p.quote.text} <span className="not-italic text-ink-mute">({p.quote.name})</span>
              </blockquote>
            )}
          </div>
          <aside className="lg:col-span-5">
            <Eyebrow className="text-fox">Services on this job</Eyebrow>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {svc.map((s) => (
                <li key={s!.path}>
                  <Link href={s!.path} className="group block py-3.5">
                    <span className="font-display text-[1.1rem] font-semibold group-hover:text-fox">{s!.name}</span>
                    <span className="block text-[0.9rem] text-ink-mute">{s!.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {p.before && p.after && (
        <Section tone="shingle" edge>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <BeforeAfter before={p.before} after={p.after} ratio="3/4" className="reveal" />
            </div>
            <div className="lg:col-span-6">
              <Eyebrow className="text-fox">Before and after</Eyebrow>
              <h2 className="mt-3 text-white">Same room, same walls.</h2>
              <p className="lede mt-4 text-white/80">Drag the handle. The before photo was taken the week demolition started.</p>
            </div>
          </div>
        </Section>
      )}

      <Section tone="sky" edge={!(p.before && p.after)}>
        <Eyebrow className="text-fox">Photos</Eyebrow>
        <h2 className="mt-3 mb-8">Through the job</h2>
        <Gallery items={p.gallery} cols={p.gallery.length > 4 ? 4 : 3} />
      </Section>

      <Section tone="paper">
        <div className="mb-8">
          <Eyebrow className="text-fox">More work</Eyebrow>
          <h2 className="mt-3">Other projects</h2>
        </div>
        <ProjectsGrid slugs={others.map((o) => o.slug)} />
      </Section>

      <CtaBand source={`project-${p.slug}`} heading="Have something like this in mind?" />
    </>
  );
}
