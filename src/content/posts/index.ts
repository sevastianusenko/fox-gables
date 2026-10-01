export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  updated?: string;
  image: string;
  imageAlt: string;
  service: string; // path of the related service
  serviceLabel: string;
  readMinutes: number;
  body: string; // markdown
};

import { roofCostPa } from "./roof-cost-pennsylvania";
import { repairVsReplace } from "./roof-repair-vs-replacement";
import { metalVsShingles } from "./metal-roof-vs-shingles";
import { aluminumCapping } from "./aluminum-capping-trim";
import { deckPermit } from "./deck-permit-lancaster-county";
import { checkLicense } from "./check-pa-contractor-license";

export const posts: Post[] = [roofCostPa, repairVsReplace, metalVsShingles, aluminumCapping, deckPermit, checkLicense].sort(
  (a, b) => (a.date < b.date ? 1 : -1),
);

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
