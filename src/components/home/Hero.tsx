import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { HouseFrame } from "@/components/ui/HouseFrame";
import { FoxMark } from "@/components/Logo";

const words = ["Roofs,", "siding,", "windows", "and", "decks.", "One", "licensed", "contractor,", "from", "Akron."];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-shingle text-white">
      <Image
        src="/photos/jobs/metal-roof-commercial.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_40%] opacity-[0.28]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-shingle via-shingle/85 to-shingle/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-shingle to-transparent" aria-hidden="true" />

      {/* The roofline: drawn on load, peak above the headline. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <path
          d="M-40 720 L560 70 L1480 720"
          pathLength={1}
          className="hero-line"
          stroke="#e3561d"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="eyebrow hero-fade text-fox" style={{ "--d": "0.2s" } as React.CSSProperties}>
            Owner-operated. PA HIC #{site.hic}. Lancaster and Lebanon counties.
          </p>
          <h1 className="mt-5 text-white">
            {words.map((w, i) => (
              <span key={i} className="hero-word" style={{ "--i": i } as React.CSSProperties}>
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="lede hero-fade measure mt-7 text-white/80" style={{ "--d": "1s" } as React.CSSProperties}>
            Josh Fox inspects the job, writes the estimate and does the work himself. No sales reps, no crews you have
            never met, no price that expires at midnight. Fifteen years of roofs, exteriors and remodels across
            Ephrata, Lititz, Lebanon and the townships between.
          </p>
          <div className="hero-fade mt-9 flex flex-wrap items-center gap-4" style={{ "--d": "1.15s" } as React.CSSProperties}>
            <Button href="/contact/" variant="fox">
              Request a free estimate
            </Button>
            <Button href={site.phoneHref} variant="ghost-light">
              Call {site.phone}
            </Button>
          </div>
          <dl className="hero-fade mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6" style={{ "--d": "1.3s" } as React.CSSProperties}>
            <div>
              <dt className="eyebrow text-white/55">Experience</dt>
              <dd className="mt-1 font-display text-[1.6rem] font-bold leading-none tnum">15+ years</dd>
            </div>
            <div>
              <dt className="eyebrow text-white/55">HomeAdvisor</dt>
              <dd className="mt-1 font-display text-[1.6rem] font-bold leading-none tnum">4.9 of 5</dd>
            </div>
            <div>
              <dt className="eyebrow text-white/55">Estimates</dt>
              <dd className="mt-1 font-display text-[1.6rem] font-bold leading-none">Free, by Josh</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="hero-frame relative">
            <HouseFrame
              src="/photos/jobs/shingle-roof-cape-cod.jpg"
              alt="A Cape Cod in northern Lancaster County the day its new architectural shingle roof went on"
              ratio="4/5"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="shadow-[var(--shadow-frame-lift)]"
            />
            <FoxMark className="hero-fox absolute left-1/2 top-0 h-10 w-auto -translate-x-1/2 -translate-y-[60%] text-fox drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]" />
            <p className="mt-3 text-center text-[0.85rem] text-white/60">
              Real job: shingle roof replacement on a Cape Cod with dormers.{" "}
              <Link href="/projects/shingle-roof-replacement-cape-cod/" className="underline underline-offset-4 hover:text-fox">
                See the project
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
