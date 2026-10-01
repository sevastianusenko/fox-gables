import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { towns, townBySlug } from "@/content/towns";
import { townPhotoCredits } from "@/content/town-photo-credits";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { CtaBand, ProjectsGrid, ProcessSteps, LicenseBlock } from "@/components/blocks";
import { JsonLd, serviceSchema } from "@/components/Schema";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) return {};
  return {
    title: { absolute: t.title },
    description: t.metaDescription,
    alternates: { canonical: `/service-areas/${t.slug}/` },
    openGraph: { title: t.title, description: t.metaDescription, images: t.photo ? [{ url: `/photos/towns/${t.photo}.jpg` }] : undefined },
  };
}

export default async function TownPage({ params }: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) notFound();
  const credit = t.photo ? townPhotoCredits[t.photo] : undefined;
  const nearby = towns
    .filter((x) => x.slug !== t.slug)
    .map((x) => ({ ...x, d: Math.hypot(x.lat - t.lat, (x.lng - t.lng) * 0.76) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 5);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Roofing, siding, windows and remodeling in ${t.name}, PA`,
          description: t.metaDescription,
          path: `/service-areas/${t.slug}/`,
          type: "Home improvement contractor",
          image: t.photo ? `/photos/towns/${t.photo}.jpg` : undefined,
        })}
      />
      <PageHero
        crumbs={[
          { name: "Service areas", href: "/service-areas/" },
          { name: `${t.name}, PA`, href: `/service-areas/${t.slug}/` },
        ]}
        eyebrow={`${t.name}, ${t.county}`}
        title={t.h1}
        lede={t.lede}
        image={t.photo ? `/photos/towns/${t.photo}.jpg` : "/photos/jobs/metal-roof-farmhouse.jpg"}
        imageAlt={t.photoAlt ?? `${t.name}, Pennsylvania`}
        ratio="5/4"
        imageCaption={
          credit ? (
            <>
              Photo: {credit.artist}, {credit.license}, via{" "}
              <a href={credit.page} rel="noopener" target="_blank" className="underline">
                Wikimedia Commons
              </a>
            </>
          ) : undefined
        }
      />

      {/* Facts strip */}
      <div className="border-y border-line bg-sky">
        <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <dt className="eyebrow text-ink-mute">From the shop</dt>
            <dd className="mt-1 font-display text-[1.5rem] font-bold leading-none tnum">{t.miles === 0 ? "Here" : `About ${t.miles} miles`}</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-mute">Drive</dt>
            <dd className="mt-1 font-display text-[1.5rem] font-bold leading-none tnum">{t.minutes === 0 ? "Minutes" : `${t.minutes} min`}</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-mute">County</dt>
            <dd className="mt-1 font-display text-[1.5rem] font-bold leading-none">{t.county.replace(" County", "")}</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-mute">Estimates</dt>
            <dd className="mt-1 font-display text-[1.5rem] font-bold leading-none">Free, by Josh</dd>
          </div>
        </dl>
      </div>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="prose-fg text-ink-soft lg:col-span-7">
            {t.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "font-display text-[1.25rem] font-semibold leading-snug text-ink" : ""}>
                {p}
              </p>
            ))}
            <h2>Houses in {t.name} and what they need</h2>
            {t.housing.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>Permits in {t.name}</h2>
            <p>{t.permits}</p>
          </div>
          <aside className="lg:col-span-5">
            <div className="border-t-4 border-fox bg-sky p-6">
              <Eyebrow className="text-fox">Most requested in {t.name}</Eyebrow>
              <ul className="mt-4 divide-y divide-line">
                {t.popular.map((p) => (
                  <li key={p.path} className="py-3.5">
                    <Link href={p.path} className="group block">
                      <span className="font-display text-[1.1rem] font-semibold group-hover:text-fox">{p.service}</span>
                      <span className="block text-[0.92rem] text-ink-soft">{p.why}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-l-4 border-fox p-5">
              <p className="font-display text-[1.1rem] font-semibold">Call Josh</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-[1.7rem] font-bold tnum hover:text-fox">
                {site.phone}
              </a>
              <p className="mt-1 text-[0.9rem] text-ink-mute">{site.hoursText}</p>
            </div>
            <div className="mt-6">
              <LicenseBlock />
            </div>
          </aside>
        </div>
      </Section>

      {t.projects.length > 0 && (
        <Section tone="sky" edge>
          <div className="mb-8">
            <Eyebrow className="text-fox">Nearby work</Eyebrow>
            <h2 className="mt-3">Projects near {t.name}</h2>
          </div>
          <ProjectsGrid slugs={t.projects} />
        </Section>
      )}

      <Section tone="paper">
        <div className="mb-8 max-w-2xl">
          <Eyebrow className="text-fox">How a job goes</Eyebrow>
          <h2 className="mt-3">Same five steps in {t.name} as everywhere else</h2>
        </div>
        <ProcessSteps compact />
      </Section>

      <Section tone="paper" tight className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Faq items={t.faqs} title={`Questions from ${t.name} homeowners`} />
          </div>
          <aside className="lg:col-span-4">
            <Eyebrow className="text-fox">Nearby towns</Eyebrow>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link href={`/service-areas/${n.slug}/`} className="flex items-baseline justify-between py-3 font-display font-semibold hover:text-fox">
                    {n.name}, PA <span className="text-[0.85rem] font-normal text-ink-mute tnum">{n.miles} mi</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas/" className="block py-3 font-display font-semibold text-fox">
                  All service areas
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      <CtaBand source={`town-${t.slug}`} heading={`Free estimate in ${t.name}`} />
    </>
  );
}
