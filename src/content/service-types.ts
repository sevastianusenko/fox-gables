import type { Faq } from "@/lib/site";

export type Table = { caption?: string; head: string[]; rows: string[][] };

export type ServiceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  table?: Table;
};

export type Service = {
  slug: string; // "roofing" or "roofing/roof-repair"
  path: string; // "/roofing/roof-repair/"
  parent?: string; // parent slug
  group: "roofing" | "exteriors" | "outdoor" | "interior";
  name: string; // "Roof repair"
  short: string; // one line for cards and menus
  eyebrow: string;
  title: string;
  metaDescription: string;
  h1: string;
  lede: string;
  hero: { src: string; alt: string; ratio?: "4/5" | "1/1" | "3/2" | "5/4" };
  intro: string[];
  sections: ServiceSection[];
  pricing?: { intro: string; rows: string[][]; outro: string };
  signs?: { heading: string; items: string[] };
  faqs: Faq[];
  related: string[]; // service paths
  projects: string[]; // project slugs
  gallery?: { src: string; alt: string; caption?: string }[];
  schemaType: string;
  jobType: string; // default LeadForm option
};
