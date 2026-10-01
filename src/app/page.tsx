import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HouseFrame } from "@/components/ui/HouseFrame";
import { BeforeAfter } from "@/components/BeforeAfter";
import { RadiusDial } from "@/components/RadiusDial";
import { CtaBand, PhotoBand, ProcessSteps, ProjectsGrid, ReviewsBlock, LicenseBlock } from "@/components/blocks";
import { projectBySlug } from "@/content/projects";
import { reviews } from "@/content/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Roofing, Siding, Windows & Remodeling | ${site.name}`,
  description:
    "Fox Gables Construction is an owner-operated, PA-licensed contractor serving Lancaster and Lebanon counties. Roofing, siding, windows, doors, decks and remodeling. Free estimates.",
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/photos/jobs/metal-roof-farmhouse.jpg", width: 960, height: 540 }] },
};

const showcase = [
  { name: "Roofing", href: "/roofing/", short: "Shingle and metal, repair and replacement.", image: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Farmhouse with a new charcoal metal roof" },
  { name: "Siding and trim", href: "/siding/", short: "Vinyl, fiber cement, and aluminum wrap so nothing needs paint.", image: "/photos/stock/clapboard-house.jpg", alt: "White clapboard house with crisp trim" },
  { name: "Windows", href: "/windows/", short: "Installed by the owner, trim wrapped, no sales rep.", image: "/photos/jobs/yard-sign-house.jpg", alt: "Home with new windows and a Fox Gables yard sign" },
  { name: "Doors", href: "/doors/", short: "Entry, patio, storm, bulkhead and whole-house interior doors.", image: "/photos/jobs/entry-door-sidelights.jpg", alt: "Fiberglass entry door with decorative glass and sidelights" },
  { name: "Gutters, soffit, fascia", href: "/gutters/", short: "Seamless gutters and a sealed roof edge.", image: "/photos/jobs/laundromat-porch-2.jpg", alt: "New soffit, fascia and gutters under a porch roof" },
  { name: "Decks and porches", href: "/decks-porches/", short: "Footings below frost, bolted ledgers, railings that do not wobble.", image: "/photos/jobs/laundromat-porch-3.jpg", alt: "Covered porch with railing across a storefront" },
  { name: "Remodeling", href: "/remodeling/", short: "Kitchens, bathrooms, basements, whole interiors.", image: "/photos/jobs/kitchen-white-shaker-1.jpg", alt: "Remodeled kitchen with white shaker cabinets" },
  { name: "Repairs and carpentry", href: "/home-repair/", short: "The jobs that need a carpenter, not a company.", image: "/photos/jobs/stair-railing.jpg", alt: "Rebuilt staircase railing with metal balusters" },
];

export default function HomePage() {
  const bath = projectBySlug("bathroom-remodel-jet-tub-tile")!;
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 text-[0.9rem] text-ink-soft sm:px-6 lg:px-8">
          <span className="font-display font-semibold text-ink">PA HIC #{site.hic}</span>
          <span>Licensed and insured</span>
          <span>Owner-operated since {site.founded}</span>
          <span>Serving Lancaster and Lebanon counties</span>
          <a href={site.ratings.homeadvisor.url} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-fox">
            HomeAdvisor {site.ratings.homeadvisor.value}★, all five-star
          </a>
        </div>
      </div>

      {/* Services */}
      <Section tone="paper">
        <div className="mb-10 max-w-2xl">
          <Eyebrow className="text-fox">What Josh does</Eyebrow>
          <h2 className="mt-3">Everything on the outside of the house, and most of the inside.</h2>
          <p className="lede mt-4 text-ink-soft">
            One contractor for the roof, the siding, the windows and the porch means one person responsible for how
            they meet. That is where most houses leak.
          </p>
        </div>
        <ServiceShowcase items={showcase} />
      </Section>

      {/* Photo band with a review */}
      <PhotoBand src="/photos/jobs/metal-roof-commercial.jpg" alt="A long new metal roof on a Lancaster County agricultural building under a clear sky" position="50% 60%">
        <div className="max-w-3xl">
          <Eyebrow className="text-fox">From a HomeAdvisor review</Eyebrow>
          <blockquote className="mt-4 font-display text-[clamp(1.5rem,1.1rem+2vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.015em]" style={{ fontStretch: "106%" }}>
            “{reviews[0].quote}”
          </blockquote>
          <p className="mt-5 text-white/75">
            {reviews[0].job} ·{" "}
            <Link href="/reviews/" className="underline underline-offset-4 hover:text-fox">
              Read all reviews
            </Link>
          </p>
        </div>
      </PhotoBand>

      {/* Why one guy */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <HouseFrame src="/photos/jobs/roofer-silhouette.jpg" alt="Josh kneeling on a roof at sunrise, nail gun in hand" ratio="1/1" rise={6} sizes="(min-width: 1024px) 40vw, 100vw" className="reveal shadow-[var(--shadow-frame)]" />
            <p className="mt-3 text-[0.9rem] text-ink-mute">Josh, on a roof, early.</p>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow className="text-fox">Why a one-man company</Eyebrow>
            <h2 className="mt-3">The person who quotes your roof is the person on the ladder.</h2>
            <div className="prose-fg mt-6 text-ink-soft">
              <p>
                Big exterior companies work like this: a salesperson visits, a project manager schedules, a crew you have
                never met shows up, and when something is wrong afterward you talk to a call center. The price covers all
                of those people.
              </p>
              <p>
                Fox Gables works like this: Josh Fox answers the phone, comes out, gets on the roof or under the deck, and
                writes an estimate with the materials named. Then he does the job, with help when the job needs it. If
                something comes up a year later, you call the same number and get the same person.
              </p>
              <p>
                He has been doing this in Lancaster County for fifteen years. The company is registered with the
                Pennsylvania Attorney General and insured. A HomeAdvisor customer wrote that his crew repaired the spot
                in the yard where the delivery truck went off the driveway. That is the level of care you get when the
                owner is on site.
              </p>
            </div>
            <div className="mt-8">
              <LicenseBlock />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about/" variant="ink">
                More about Josh
              </Button>
              <Button href="/reviews/" variant="ghost">
                Reviews
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="sky" edge>
        <div className="mb-10 max-w-2xl">
          <Eyebrow className="text-fox">How a job goes</Eyebrow>
          <h2 className="mt-3">Five steps, no surprises.</h2>
        </div>
        <ProcessSteps />
      </Section>

      {/* Projects */}
      <Section tone="paper">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow className="text-fox">Recent work</Eyebrow>
            <h2 className="mt-3">Real jobs, real photos.</h2>
          </div>
          <Button href="/projects/" variant="ghost">
            All projects
          </Button>
        </div>
        <ProjectsGrid slugs={["shingle-roof-replacement-cape-cod", "womelsdorf-laundromat-porch-exterior", "entry-door-replacement"]} />
      </Section>

      {/* Before / after */}
      <Section tone="shingle" edge>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <BeforeAfter before={bath.before!} after={bath.after!} ratio="3/4" className="reveal" />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow className="text-fox">Before and after</Eyebrow>
            <h2 className="mt-3 text-white">A 1970s bathroom, down to the studs and back.</h2>
            <p className="lede mt-5 text-white/80">
              Jetted tub, subway tile to the ceiling, a sheet waterproofing membrane behind every tile, new vanity,
              lighting and a floor you will not slip on. Two weeks.
            </p>
            <div className="mt-8">
              <Button href={`/projects/${bath.slug}/`} variant="fox">
                See the whole project
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Service area */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="text-fox">Where Josh works</Eyebrow>
            <h2 className="mt-3">Thirty miles around the shop.</h2>
            <p className="lede mt-5 text-ink-soft">
              Ephrata, Lititz and Denver are minutes away. Lebanon, Lancaster and Manheim are a short drive. Elizabethtown,
              Palmyra, Reading and Womelsdorf are the far edge, where the bigger jobs make the trip worthwhile.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["ephrata-pa", "lititz-pa", "lebanon-pa", "denver-pa", "manheim-pa", "lancaster-pa"].map((s) => (
                <li key={s}>
                  <Link href={`/service-areas/${s}/`} className="font-display font-semibold underline decoration-fox/50 decoration-2 underline-offset-4 hover:text-fox">
                    {s.replace("-pa", "").replace(/\b\w/g, (c) => c.toUpperCase())}, PA
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas/" className="font-display font-semibold text-fox">
                  All 13 towns
                </Link>
              </li>
            </ul>
          </div>
          <div className="reveal text-ink lg:col-span-7">
            <RadiusDial />
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section tone="sky" edge>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow className="text-fox">Reviews</Eyebrow>
            <h2 className="mt-3">What homeowners say afterward.</h2>
          </div>
          <Button href="/reviews/" variant="ghost">
            All reviews
          </Button>
        </div>
        <ReviewsBlock limit={3} />
      </Section>

      <CtaBand source="home" />
    </>
  );
}
