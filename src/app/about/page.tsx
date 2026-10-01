import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { HouseFrame } from "@/components/ui/HouseFrame";
import { Button } from "@/components/ui/Button";
import { CtaBand, Gallery, LicenseBlock, ProcessSteps, ReviewsBlock } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Josh Fox | Licensed Contractor in Akron, PA",
  description:
    "Josh Fox runs Fox Gables Construction from Akron, PA: an owner-operated, PA-licensed (HIC PA125031) and insured contractor doing roofing, siding, windows, doors, decks and remodeling across Lancaster and Lebanon counties.",
  alternates: { canonical: "/about/" },
  openGraph: { images: [{ url: "/photos/jobs/roofer-silhouette.jpg" }] },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ name: "About", href: "/about/" }]} />
            <Eyebrow className="mt-6 text-fox">About Fox Gables Construction</Eyebrow>
            <h1 className="mt-3">Josh Fox. Akron, Pennsylvania. On the job since 2011.</h1>
            <p className="lede measure mt-6 text-ink-soft">
              Fox Gables Construction is one licensed contractor, a truck, a shop on Bomberger Road and fifteen years of
              roofs, siding, windows, doors, decks, porches and remodels across Lancaster County and Lebanon County.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact/" variant="fox">
                Request a free estimate
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HouseFrame src="/photos/jobs/roofer-silhouette.jpg" alt="Josh Fox kneeling on a roof at sunrise" ratio="4/5" priority sizes="(min-width: 1024px) 40vw, 100vw" className="shadow-[var(--shadow-frame)]" />
          </div>
        </div>
      </section>

      <Section tone="sky" edge>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2>Why the company is one person</h2>
          </div>
          <div className="prose-fg text-ink-soft lg:col-span-8">
            <p>
              Most exterior companies grow by adding salespeople and crews. The salesperson’s job is to close; the crew’s
              job is to finish fast; the owner’s job is to keep both busy. The homeowner meets three or four people and
              the person who promised the result is never the person on the roof.
            </p>
            <p>
              Fox Gables stays small on purpose. Josh takes the call, does the estimate, orders the materials and does
              the work, bringing in help when a roof or a deck needs more hands, and licensed plumbers and electricians
              when a remodel needs them. He is on every job, every day it runs. The price covers a contractor, not a
              sales department.
            </p>
            <p>
              The trade-off is the calendar. Josh books a few weeks out for roofs in the busy seasons and a few months
              out for kitchens. If you need it done tomorrow by a crew of twelve, a bigger company is the right call.
              If you want it done right by someone who will still be here in ten years, this is.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2>Licensed, insured, in writing</h2>
          </div>
          <div className="lg:col-span-8">
            <LicenseBlock />
            <div className="prose-fg mt-6 text-ink-soft">
              <p>
                Pennsylvania requires any contractor doing more than $5,000 a year of home improvement work to register
                with the Attorney General and to put that number on every ad, estimate and contract. Fox Gables
                Construction, LLC is registered as PA125031. You can check it, and any other contractor, at the
                Attorney General’s{" "}
                <a href={site.hicUrl} rel="noopener" target="_blank">
                  Home Improvement Contractor search
                </a>
                . Liability insurance is through {site.insurer}; a certificate can be issued to you before work starts.
              </p>
              <p>
                Any job over $500 gets a written contract with the scope, materials, price, schedule and the three-day
                right to cancel that the law gives you. Josh’s estimates name materials by brand so you can compare them
                line by line with anyone else’s.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sky" edge>
        <Eyebrow className="text-fox">The work</Eyebrow>
        <h2 className="mt-3 mb-8">Roofs, exteriors, porches and the inside of the house</h2>
        <Gallery
          cols={4}
          items={[
            { src: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Farmhouse with a new metal roof", caption: "Metal roofing" },
            { src: "/photos/jobs/entry-door-sidelights.jpg", alt: "New entry door with sidelights", caption: "Doors and windows" },
            { src: "/photos/jobs/laundromat-porch-3.jpg", alt: "Storefront porch in Womelsdorf", caption: "Porches, residential and commercial" },
            { src: "/photos/jobs/kitchen-white-shaker-2.jpg", alt: "Remodeled kitchen", caption: "Kitchens and bathrooms" },
            { src: "/photos/jobs/yard-sign-house.jpg", alt: "Fox Gables yard sign in front of a home", caption: "The sign goes up for a week" },
            { src: "/photos/jobs/timber-frame-interior.jpg", alt: "Timber-frame interior", caption: "Carpentry at any scale" },
            { src: "/photos/jobs/bathroom-subway-tile-1.jpg", alt: "Tiled bathroom", caption: "Tile with real waterproofing" },
            { src: "/photos/jobs/shingle-roof-cape-cod.jpg", alt: "Cape Cod with a new shingle roof", caption: "Shingle roofing" },
          ]}
        />
        <p className="mt-6 text-ink-soft">
          See the <Link href="/projects/" className="font-semibold text-fox underline underline-offset-4">projects page</Link> for the full stories.
        </p>
      </Section>

      <Section tone="paper">
        <div className="mb-8 max-w-2xl">
          <Eyebrow className="text-fox">How a job goes</Eyebrow>
          <h2 className="mt-3">The same five steps on every job</h2>
        </div>
        <ProcessSteps />
      </Section>

      <Section tone="sky" edge>
        <div className="mb-8">
          <Eyebrow className="text-fox">Reviews</Eyebrow>
          <h2 className="mt-3">From the people who hired him</h2>
        </div>
        <ReviewsBlock limit={3} />
      </Section>

      <CtaBand source="about" />
    </>
  );
}
