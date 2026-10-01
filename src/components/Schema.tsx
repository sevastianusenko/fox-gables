import { site, type Faq } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const orgId = `${site.url}/#business`;
export const personId = `${site.url}/#josh-fox`;

const areaServed = [
  { "@type": "AdministrativeArea", name: "Lancaster County, PA" },
  { "@type": "AdministrativeArea", name: "Lebanon County, PA" },
  { "@type": "AdministrativeArea", name: "Berks County, PA" },
  ...[
    "Akron",
    "Ephrata",
    "Lititz",
    "Denver",
    "Manheim",
    "New Holland",
    "Lancaster",
    "Elizabethtown",
    "Mount Joy",
    "Lebanon",
    "Myerstown",
    "Palmyra",
    "Womelsdorf",
    "Reading",
  ].map((c) => ({ "@type": "City", name: `${c}, PA` })),
];

export function businessNode() {
  return {
    "@type": ["HomeAndConstructionBusiness", "RoofingContractor", "GeneralContractor", "LocalBusiness"],
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/photos/jobs/metal-roof-farmhouse.jpg`,
    logo: `${site.url}/brand/logo-dark.svg`,
    priceRange: "$$",
    foundingDate: String(site.founded),
    founder: { "@id": personId },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Pennsylvania Home Improvement Contractor Registration ${site.hic}`,
      recognizedBy: { "@type": "GovernmentOrganization", name: "Pennsylvania Office of Attorney General" },
    },
    sameAs: [
      site.ratings.homeadvisor.url,
      site.ratings.nextdoor.url,
      site.ratings.buildzoom.url,
      site.ratings.facebook.url,
    ],
    knowsAbout: [
      "Roof replacement",
      "Roof repair",
      "Metal roofing",
      "Asphalt shingle roofing",
      "Siding installation",
      "Replacement windows",
      "Door installation",
      "Gutters, soffit and fascia",
      "Deck building",
      "Porch construction",
      "Kitchen remodeling",
      "Bathroom remodeling",
      "Basement finishing",
    ],
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": personId,
    name: site.ownerFull,
    givenName: "Joshua",
    familyName: "Fox",
    jobTitle: "Owner and lead contractor",
    worksFor: { "@id": orgId },
    url: `${site.url}/about/`,
  };
}

export function OrgSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          businessNode(),
          personNode(),
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            publisher: { "@id": orgId },
          },
        ],
      }}
    />
  );
}

export function breadcrumbs(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; type?: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.type ?? opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    image: opts.image ? `${site.url}${opts.image}` : undefined,
    provider: { "@id": orgId },
    areaServed,
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  updated?: string;
  type?: "BlogPosting" | "Article";
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: `${site.url}${opts.image}`,
    datePublished: opts.date,
    dateModified: opts.updated ?? opts.date,
    author: { "@id": personId },
    publisher: { "@id": orgId },
    mainEntityOfPage: `${site.url}${opts.path}`,
  };
}
