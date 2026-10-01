import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { towns, moreTowns } from "@/content/towns";
import { townPhotoCredits } from "@/content/town-photo-credits";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { RadiusDial } from "@/components/RadiusDial";
import { CtaBand } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Lancaster & Lebanon Counties",
  description:
    "Fox Gables Construction serves Lancaster County, Lebanon County and nearby Berks County from Akron, PA. See the towns, distances and recent projects.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  const credit = townPhotoCredits["farm"];
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Service areas", href: "/service-areas/" }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Eyebrow className="text-fox">Where Josh works</Eyebrow>
              <h1 className="mt-3">Thirty miles around the shop in Akron</h1>
              <p className="lede measure mt-6 text-ink-soft">
                Fox Gables Construction is at {site.address.street} in Akron, in the northern part of Lancaster County.
                The rings show how far each town is as the crow flies. Ephrata, Lititz and Denver are minutes away.
                Lebanon, Lancaster and Manheim are a short drive. The far ring is where full roofs, siding, windows and
                decks make the trip worthwhile.
              </p>
            </div>
            <div className="reveal text-ink lg:col-span-6">
              <RadiusDial />
            </div>
          </div>
        </div>
      </section>

      <Section tone="sky" edge>
        <Eyebrow className="text-fox">Towns with their own page</Eyebrow>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((t, i) => (
            <li key={t.slug} className="reveal" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
              <Link href={`/service-areas/${t.slug}/`} className="lift group block h-full bg-white shadow-[var(--shadow-frame)]">
                {t.photo && (
                  <div className="relative aspect-[3/2] overflow-hidden zoom-img">
                    <Image src={`/photos/towns/${t.photo}.jpg`} alt={t.photoAlt ?? t.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="border-t-4 border-fox p-5">
                  <h2 className="text-[1.55rem] font-bold group-hover:text-fox" style={{ fontStretch: "100%" }}>
                    {t.name}, PA
                  </h2>
                  <p className="mt-1 text-[0.9rem] text-ink-mute">
                    {t.county} · <span className="font-display font-semibold tnum">{t.miles === 0 ? "the shop" : `${t.miles} mi from the shop`}</span>
                  </p>
                  <p className="mt-3 text-[0.97rem] text-ink-soft">{t.lede}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.8rem] text-ink-mute">
          Town photos via Wikimedia Commons under their stated licenses; photographer credits appear on each town page.
          {credit && ` Lancaster County barn photo: ${credit.artist}, ${credit.license}.`}
        </p>
      </Section>

      <Section tone="paper" tight>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2>Also served</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-ink-soft">
              {moreTowns.map((t) => (
                <li key={t.name} className="font-display font-semibold">
                  {t.name} <span className="font-serif font-normal text-ink-mute">({t.county.replace(" County", "")})</span>
                </li>
              ))}
            </ul>
            <p className="prose-fg mt-5 text-ink-soft">
              And the townships in between: Ephrata, West Earl, Warwick, East and West Cocalico, Clay, Penn, Rapho, Earl,
              East Earl, Manheim, East Hempfield, East Lampeter, North and South Lebanon, Jackson, Heidelberg and the rest.
              If you are inside the outer ring, call. If you are a little outside it and the job is a full roof, siding or a
              deck, call anyway.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand source="service-areas" />
    </>
  );
}
