import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Fox Gables Construction website and how estimates and contracts work under Pennsylvania law.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Terms", href: "/terms/" }]} />
          <h1 className="mt-6">Terms</h1>
          <p className="mt-3 text-ink-mute">Last updated October 1, 2026</p>
        </div>
      </section>
      <Section tone="paper" tight>
        <div className="prose-fg text-ink-soft">
          <h2>About this website</h2>
          <p>
            This site is published by {site.legalName}, a Pennsylvania limited liability company registered with the
            Pennsylvania Office of Attorney General as Home Improvement Contractor number {site.hic}. The site describes
            the services we offer and lets you request an estimate. Using the site does not create a contract for any
            work.
          </p>
          <h2>Prices on this site</h2>
          <p>
            The price ranges on the service pages are typical ranges for jobs in Lancaster and Lebanon counties at the
            time of writing. They are there so you have a sense of scale. They are not quotes. Every job is priced in
            a written estimate after Josh has seen it, and that estimate is the only price that applies to your job.
          </p>
          <h2>Estimates and contracts</h2>
          <p>
            Estimates are free and carry no obligation. Under the Pennsylvania Home Improvement Consumer Protection Act,
            any home improvement job priced over $500 must have a written contract signed by both sides before work
            begins, and that contract must include the contractor’s registration number, the scope of work, the
            materials, the total price, approximate start and finish dates, and the cancellation notice described below.
            Our contracts do.
          </p>
          <h2>Your right to cancel</h2>
          <p>
            For home improvement contracts, Pennsylvania law gives you the right to cancel without penalty until midnight
            of the third business day after you sign. You can cancel by any means that actually reaches us within that
            time, including a phone call, though a written notice by email or text is the clearest. If you cancel within
            that window, any deposit is returned within ten business days.
          </p>
          <h2>Deposits and payment</h2>
          <p>
            Deposit amounts are stated in each contract and follow the limits set by Pennsylvania law for contracts
            over $5,000. Final payment is due when the work is complete and you have walked through it with Josh.
          </p>
          <h2>Warranty</h2>
          <p>
            Manufacturer warranties on materials pass to you and are described in your contract. Fox Gables provides a
            workmanship warranty on its installation; its term is stated in your written estimate and contract. Warranty
            claims are handled by calling {site.phone}.
          </p>
          <h2>Website content</h2>
          <p>
            Text and photographs of our own work on this site belong to {site.legalName}. Town photographs credited to
            Wikimedia Commons contributors are used under the licenses stated beside them. Some photographs of
            materials and generic spaces are licensed stock images and are identified as such where used; the project
            pages show only our own work.
          </p>
          <h2>No guarantee of availability</h2>
          <p>
            Schedules fill. A request through this site does not reserve a date. Josh will confirm scheduling directly.
          </p>
          <h2>Governing law</h2>
          <p>These terms and any contract for work are governed by the laws of the Commonwealth of Pennsylvania.</p>
          <h2>Contact</h2>
          <p>
            {site.legalName}. {site.phone} · {site.email}
          </p>
        </div>
      </Section>
    </>
  );
}
