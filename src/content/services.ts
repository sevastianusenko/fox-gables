import type { Service } from "./service-types";
import { roofingServices } from "./services-roofing";
import { exteriorServices } from "./services-exteriors";
import { outdoorServices } from "./services-outdoor";
import { interiorServices } from "./services-interior";

export type { Service, ServiceSection, Table } from "./service-types";

export const services: Service[] = [...roofingServices, ...exteriorServices, ...outdoorServices, ...interiorServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceByPath = (path: string) => services.find((s) => s.path === path);
export const childrenOf = (slug: string) => services.filter((s) => s.parent === slug);
export const hubs = services.filter((s) => !s.parent);

/** How a job with Josh goes: the same five steps on every page. */
export const process = [
  {
    step: "Call or send the form",
    detail: "Josh calls back the same day, usually within a couple of hours. Tell him what is going on and he will ask a few questions.",
  },
  {
    step: "Josh comes out and looks",
    detail: "On the roof, in the attic, under the deck. He measures, takes photos, and brings samples in the truck. No sales presentation.",
  },
  {
    step: "You get a written estimate",
    detail: "Materials named by brand, the scope spelled out, a price that does not expire at midnight. Over $500 it is a written contract, as Pennsylvania requires.",
  },
  {
    step: "The work gets done",
    detail: "Materials delivered, the job done by Josh with help as the job needs, the site cleaned every day, permits and inspections handled.",
  },
  {
    step: "Walkthrough, then you pay",
    detail: "Josh walks the finished job with you. Anything on the list gets done. Final payment when you are satisfied.",
  },
];
