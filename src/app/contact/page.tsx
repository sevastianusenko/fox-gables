import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LeadForm } from "@/components/LeadForm";
import { LicenseBlock } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Estimate | Fox Gables Construction, Akron PA",
  description:
    "Request a free estimate from Fox Gables Construction in Akron, PA. Call (717) 598-7728 or send the form. Josh calls back the same day. Roofing, siding, windows, doors, decks and remodeling.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const mapQ = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`);
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact/" }]} />
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="text-fox">Free estimate</Eyebrow>
              <h1 className="mt-3">Tell Josh what the house needs.</h1>
              <p className="lede mt-6 text-ink-soft">
                Call, text or send the form. {site.callbackPromise}. He will ask a few questions, come out to look, and
                give you a written number.
              </p>
              <a href={site.phoneHref} className="mt-8 block font-display text-[clamp(2rem,1.5rem+2.5vw,3rem)] font-extrabold leading-none tracking-[-0.02em] tnum hover:text-fox" style={{ fontStretch: "110%" }}>
                {site.phone}
              </a>
              <p className="mt-2 text-ink-mute">{site.hoursText}</p>
              <address className="mt-8 not-italic text-ink-soft">
                <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4 hover:text-fox">
                  {site.email}
                </a>
                <br />
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-4 text-[0.9rem] text-ink-mute">There is no showroom. Samples come to your house in the truck.</p>
              <div className="mt-8">
                <LicenseBlock />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t-4 border-fox bg-white p-6 shadow-[var(--shadow-frame)] md:p-8">
                <h2 className="text-[1.5rem]">Request a free estimate</h2>
                <p className="mt-2 mb-6 text-ink-soft">Takes a minute. Photos can be sent by text afterward.</p>
                <LeadForm source="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="sky" edge tight>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2>What happens next</h2>
            <ol className="mt-5 space-y-4 text-ink-soft">
              <li className="flex gap-4">
                <span className="font-display text-[1.6rem] font-extrabold leading-none text-fox tnum">1</span>
                <span>Josh calls back, usually within a couple of hours, and asks what is going on.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-[1.6rem] font-extrabold leading-none text-fox tnum">2</span>
                <span>He comes out at a time that suits you, measures and looks at the roof, attic, deck or room.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-[1.6rem] font-extrabold leading-none text-fox tnum">3</span>
                <span>You get a written estimate with materials named. No pressure, no expiring price.</span>
              </li>
            </ol>
          </div>
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden border-2 border-line bg-white">
              <iframe
                title="Map of Fox Gables Construction in Akron, PA"
                src={`https://www.google.com/maps?q=${mapQ}&z=11&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mt-2 text-[0.85rem] text-ink-mute">Akron is between Ephrata and Lititz, just off Route 272.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
