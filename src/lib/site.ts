export const site = {
  name: "Fox Gables Construction",
  legalName: "Fox Gables Construction, LLC",
  owner: "Josh Fox",
  ownerFull: "Joshua V. Fox",
  url: "https://www.foxgables.com",
  phone: "(717) 598-7728",
  phoneHref: "tel:+17175987728",
  phoneE164: "+1-717-598-7728",
  email: "contact@foxgables.com",
  // Service-area business: no street address is published. Region only.
  address: { state: "PA", country: "US" },
  // Used only to place towns on the service-area dial. Never output as schema or text.
  geo: { lat: 40.1565, lng: -76.203 },
  hic: "PA125031",
  hicUrl: "https://hicsearch.attorneygeneral.gov/",
  insurer: "Frederick Mutual Insurance Company",
  yearsExperience: 15,
  founded: 2011,
  hoursText: "Calls and texts answered seven days a week. Estimates by appointment, Monday to Saturday.",
  ratings: {
    homeadvisor: {
      value: 4.9,
      count: 6,
      url: "https://www.homeadvisor.com/rated.FoxGablesConstruction.41574845.html",
    },
    nextdoor: { url: "https://nextdoor.com/pages/fox-gables-construction-ephrata-pa/" },
    buildzoom: { url: "https://www.buildzoom.com/contractor/fox-gables-construction" },
    facebook: { url: "https://www.facebook.com/foxgables/" },
  },
  counties: ["Lancaster County", "Lebanon County", "Berks County"],
  callbackPromise: "Josh calls back the same day, usually within a couple of hours",
  studio: { name: "Seva Web Studio", url: "https://seva-web-studio.com/" },
} as const;

export type Faq = { q: string; a: string };
