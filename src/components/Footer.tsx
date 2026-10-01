import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const services = [
  ["Roofing", "/roofing/"],
  ["Roof replacement", "/roofing/roof-replacement/"],
  ["Roof repair", "/roofing/roof-repair/"],
  ["Metal roofing", "/roofing/metal-roofing/"],
  ["Siding", "/siding/"],
  ["Windows", "/windows/"],
  ["Doors", "/doors/"],
  ["Gutters, soffit and fascia", "/gutters/"],
  ["Decks and porches", "/decks-porches/"],
  ["Kitchen remodeling", "/remodeling/kitchen-remodeling/"],
  ["Bathroom remodeling", "/remodeling/bathroom-remodeling/"],
  ["Basement finishing", "/remodeling/basement-finishing/"],
  ["Home repair and carpentry", "/home-repair/"],
  ["Commercial and agricultural", "/commercial/"],
];

const towns = [
  ["Akron", "/service-areas/akron-pa/"],
  ["Ephrata", "/service-areas/ephrata-pa/"],
  ["Lititz", "/service-areas/lititz-pa/"],
  ["Denver", "/service-areas/denver-pa/"],
  ["Manheim", "/service-areas/manheim-pa/"],
  ["New Holland", "/service-areas/new-holland-pa/"],
  ["Lancaster", "/service-areas/lancaster-pa/"],
  ["Elizabethtown", "/service-areas/elizabethtown-pa/"],
  ["Mount Joy", "/service-areas/mount-joy-pa/"],
  ["Lebanon", "/service-areas/lebanon-pa/"],
  ["Myerstown", "/service-areas/myerstown-pa/"],
  ["Palmyra", "/service-areas/palmyra-pa/"],
  ["Womelsdorf", "/service-areas/womelsdorf-pa/"],
  ["Reading", "/service-areas/reading-pa/"],
];

const company = [
  ["About Josh Fox", "/about/"],
  ["Projects", "/projects/"],
  ["Reviews", "/reviews/"],
  ["Service areas", "/service-areas/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

export function Footer() {
  return (
    <footer className="bg-shingle-deep text-white">
      <div className="h-1 w-full bg-fox" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-white/75">
              Owner-operated roofing, siding, windows, doors, decks and remodeling. Based in Akron, serving Lancaster
              County, Lebanon County and nearby Berks County since {site.founded}.
            </p>
            <address className="mt-6 not-italic text-white/85">
              <a href={site.phoneHref} className="font-display text-[1.5rem] font-bold tracking-[-0.01em] text-white hover:text-fox tnum">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-fox">
                {site.email}
              </a>
              <br />
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <p className="mt-5 text-[0.9rem] text-white/60">{site.hoursText}</p>
            <p className="mt-4 border-l-4 border-fox pl-3 text-[0.9rem] text-white/85">
              PA Home Improvement Contractor #{site.hic}.{" "}
              <a href={site.hicUrl} className="underline underline-offset-4 hover:text-fox" rel="noopener" target="_blank">
                Verify at the PA Attorney General
              </a>
              . Insured.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-fox">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-white/85 hover:text-fox">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-fox">Where we work</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {towns.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-white/85 hover:text-fox">
                    {l}, PA
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.9rem] text-white/60">
              Plus Leola, Brownstown, Reinholds, Schaefferstown, Annville, Columbia and the townships in between.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-fox">Company</h2>
            <ul className="mt-4 space-y-2">
              {company.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-white/85 hover:text-fox">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="eyebrow mt-8 text-fox">Reviews</h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>
                <a href={site.ratings.homeadvisor.url} rel="noopener" target="_blank" className="hover:text-fox">
                  HomeAdvisor {site.ratings.homeadvisor.value}★
                </a>
              </li>
              <li>
                <a href={site.ratings.nextdoor.url} rel="noopener" target="_blank" className="hover:text-fox">
                  Nextdoor
                </a>
              </li>
              <li>
                <a href={site.ratings.facebook.url} rel="noopener" target="_blank" className="hover:text-fox">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.85rem] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy-policy/" className="hover:text-fox">
              Privacy policy
            </Link>
            <Link href="/terms/" className="hover:text-fox">
              Terms
            </Link>
            <span>
              Website by{" "}
              <a href={site.studio.url} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-fox">
                {site.studio.name}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
