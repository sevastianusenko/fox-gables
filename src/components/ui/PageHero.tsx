import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd, breadcrumbs } from "@/components/Schema";
import { HouseFrame } from "./HouseFrame";
import { Button } from "./Button";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.85rem] ${tone === "dark" ? "text-white/60" : "text-ink-mute"}`}>
      <JsonLd data={breadcrumbs(all)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-fox">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className={tone === "dark" ? "text-white/85" : "text-ink"}>
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Standard inner-page opening: light ground, breadcrumb, eyebrow, H1, lede,
 * two calls to action, and a house-framed photo on the right.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  ratio = "4/5",
  children,
  cta = true,
  imageCaption,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  image: string;
  imageAlt: string;
  ratio?: "4/5" | "1/1" | "3/2" | "5/4";
  children?: ReactNode;
  cta?: boolean;
  imageCaption?: ReactNode;
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
        <div className="lg:col-span-7">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow mt-6 text-fox">{eyebrow}</p>}
          <h1 className="mt-3">{title}</h1>
          {lede && <p className="lede measure mt-6 text-ink-soft">{lede}</p>}
          {cta && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact/" variant="fox">
                Request a free estimate
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </Button>
            </div>
          )}
          {children}
        </div>
        <div className="lg:col-span-5">
          <HouseFrame src={image} alt={imageAlt} ratio={ratio} priority sizes="(min-width: 1024px) 40vw, 100vw" className="shadow-[var(--shadow-frame)]" />
          {imageCaption && <p className="mt-3 text-right text-[0.78rem] text-ink-mute">{imageCaption}</p>}
        </div>
      </div>
    </section>
  );
}
