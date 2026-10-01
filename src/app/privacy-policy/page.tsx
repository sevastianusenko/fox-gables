import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Fox Gables Construction handles the information you send through this website.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Privacy policy", href: "/privacy-policy/" }]} />
          <h1 className="mt-6">Privacy policy</h1>
          <p className="mt-3 text-ink-mute">Last updated October 1, 2026</p>
        </div>
      </section>
      <Section tone="paper" tight>
        <div className="prose-fg text-ink-soft">
          <p>
            This website is operated by {site.legalName}, {site.address.street}, {site.address.city}, {site.address.state}{" "}
            {site.address.zip}. This page explains what information the site collects and what is done with it. It is
            written in plain language because that is how we talk to customers.
          </p>
          <h2>What we collect</h2>
          <p>
            When you send the estimate form, we receive what you type: your name, phone number, town, the kind of work
            you want, and anything you write in the details box, plus your email address if you give it. The form also
            records which page you sent it from so Josh knows what you were looking at.
          </p>
          <p>
            When you call or text, we have your phone number and whatever you tell us. When you email, we have your email
            address and message.
          </p>
          <p>
            The website itself does not use advertising trackers. The hosting provider keeps standard server logs (IP
            address, browser type, pages requested, time) for security and to keep the site running. If we add a
            traffic measurement tool such as Google Analytics in the future, this page will be updated to say so.
          </p>
          <h2>What we do with it</h2>
          <p>
            We use your information to call you back, come out for an estimate, write the estimate, do the work, and
            follow up about that work. That is all. We do not sell it, rent it, or share it with marketers. We may share
            it with a supplier or a licensed subcontractor only as needed to do your job, for example to order
            materials delivered to your address.
          </p>
          <p>
            Form submissions are delivered by email through a transactional email service. That service processes the
            message to deliver it and does not use the contents for its own purposes.
          </p>
          <h2>How long we keep it</h2>
          <p>
            Estimate requests and job records are kept as long as needed for the job, the warranty, and the records
            Pennsylvania requires contractors to keep. If you ask us to delete your information and there is no open job
            or warranty, we will.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask what information we have about you, ask for it to be corrected, or ask for it to be deleted by
            emailing {site.email} or calling {site.phone}. We do not sell personal information, so there is nothing to
            opt out of in that respect.
          </p>
          <h2>Cookies</h2>
          <p>
            The site does not set tracking cookies. The before-and-after slider and the menu remember their state only
            while the page is open. If embedded maps are shown, Google may set its own cookies when the map loads; that
            is governed by Google’s privacy policy.
          </p>
          <h2>Children</h2>
          <p>This site is for homeowners and businesses and is not directed at children under 13. We do not knowingly collect information from them.</p>
          <h2>Changes</h2>
          <p>If this policy changes, the date at the top changes with it. Material changes will be noted here.</p>
          <h2>Contact</h2>
          <p>
            {site.legalName}
            <br />
            {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            {site.phone} · {site.email}
          </p>
        </div>
      </Section>
    </>
  );
}
