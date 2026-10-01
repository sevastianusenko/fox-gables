import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, postBySlug } from "@/content/posts";
import { services } from "@/content/services";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Markdown } from "@/components/Markdown";
import { CtaBand } from "@/components/blocks";
import { JsonLd, articleSchema } from "@/components/Schema";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", title: p.title, description: p.description, images: [{ url: p.image }], publishedTime: p.date, modifiedTime: p.updated ?? p.date },
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();
  const svc = services.find((s) => s.path === p.service);
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema({ title: p.title, description: p.description, path: `/blog/${p.slug}/`, image: p.image, date: p.date, updated: p.updated })} />
      <article>
        <header className="bg-paper">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-8 sm:px-6 md:pt-10 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog/" },
                { name: p.title, href: `/blog/${p.slug}/` },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow className="text-fox">{p.serviceLabel}</Eyebrow>
              <h1 className="mt-3 text-[clamp(2rem,1.4rem+3vw,3.8rem)]">{p.title}</h1>
              <p className="lede mt-5 text-ink-soft">{p.description}</p>
              <p className="mt-5 text-[0.9rem] text-ink-mute">
                By {site.owner}, {site.name} · {fmt(p.date)}
                {p.updated ? ` · Updated ${fmt(p.updated)}` : ""} · {p.readMinutes} min read
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[21/9] overflow-hidden bg-sky-deep">
              <Image src={p.image} alt={p.imageAlt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
            </div>
          </div>
        </header>

        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Markdown source={p.body} />
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {svc && (
                  <div className="border-t-4 border-fox bg-sky p-5">
                    <p className="eyebrow text-fox">Related service</p>
                    <Link href={svc.path} className="mt-2 block font-display text-[1.25rem] font-bold hover:text-fox">
                      {svc.name}
                    </Link>
                    <p className="mt-1 text-[0.92rem] text-ink-soft">{svc.short}</p>
                  </div>
                )}
                <div className="border-l-4 border-fox p-5">
                  <p className="font-display text-[1.1rem] font-semibold">Questions about your house?</p>
                  <a href={site.phoneHref} className="mt-1 block font-display text-[1.6rem] font-bold tnum hover:text-fox">
                    {site.phone}
                  </a>
                  <p className="mt-1 text-[0.9rem] text-ink-mute">Josh answers. Estimates are free.</p>
                </div>
                <div>
                  <p className="eyebrow text-ink-mute">More from the blog</p>
                  <ul className="mt-3 divide-y divide-line border-y border-line">
                    {more.map((m) => (
                      <li key={m.slug}>
                        <Link href={`/blog/${m.slug}/`} className="block py-3 font-display font-semibold leading-snug hover:text-fox">
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Section>
      </article>
      <CtaBand service={svc?.jobType} source={`post-${p.slug}`} />
    </>
  );
}
