import type { Metadata } from "next";
import { reviews } from "@/content/reviews";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBand, ReviewQuote } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews | Fox Gables Construction",
  description:
    "What homeowners in Lancaster and Lebanon counties say about Fox Gables Construction: HomeAdvisor reviews, Nextdoor recommendations and direct feedback on roofing, windows, doors and remodeling.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Reviews", href: "/reviews/" }]} />
          <Eyebrow className="mt-6 text-fox">Reviews</Eyebrow>
          <h1 className="mt-3">What people say after Josh leaves</h1>
          <p className="lede measure mt-6 text-ink-soft">
            Every quote on this page exists on the platform it is attributed to or came to Josh directly from the
            customer. Fox Gables is a small company and the review count is small too. Read them for what they say.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 border-y border-line py-5">
            <a href={site.ratings.homeadvisor.url} rel="noopener" target="_blank" className="group">
              <span className="block font-display text-[2rem] font-extrabold leading-none tnum group-hover:text-fox">{site.ratings.homeadvisor.value} of 5</span>
              <span className="block text-[0.9rem] text-ink-mute">HomeAdvisor, {site.ratings.homeadvisor.count} reviews, all five stars</span>
            </a>
            <a href={site.ratings.buildzoom.url} rel="noopener" target="_blank" className="group">
              <span className="block font-display text-[2rem] font-extrabold leading-none tnum group-hover:text-fox">92</span>
              <span className="block text-[0.9rem] text-ink-mute">BuildZoom score, top third of PA contractors</span>
            </a>
            <a href={site.ratings.nextdoor.url} rel="noopener" target="_blank" className="group">
              <span className="block font-display text-[2rem] font-extrabold leading-none group-hover:text-fox">Recommended</span>
              <span className="block text-[0.9rem] text-ink-mute">By neighbors on Nextdoor, Ephrata</span>
            </a>
          </div>
        </div>
      </section>

      <Section tone="sky" edge>
        <div className="grid gap-10 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div key={i} className="reveal bg-white p-6 shadow-[var(--shadow-frame)]" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
              <ReviewQuote r={r} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" tight>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2>Worked with Josh?</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="prose-fg text-ink-soft">
              A review on HomeAdvisor, Nextdoor or Facebook is the most useful thing a customer can do for a one-man
              company. If something was not right, call Josh first; he would rather fix it than read about it.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={site.ratings.homeadvisor.url} variant="ink" rel="noopener" target="_blank">
                Review on HomeAdvisor
              </Button>
              <Button href={site.ratings.facebook.url} variant="ghost" rel="noopener" target="_blank">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand source="reviews" />
    </>
  );
}
