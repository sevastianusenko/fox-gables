import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { towns } from "@/content/towns";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/projects/", 0.7, "monthly"],
    ["/reviews/", 0.5, "monthly"],
    ["/about/", 0.6, "yearly"],
    ["/service-areas/", 0.7, "monthly"],
    ["/contact/", 0.8, "yearly"],
    ["/blog/", 0.6, "weekly"],
    ["/privacy-policy/", 0.1, "yearly"],
    ["/terms/", 0.1, "yearly"],
  ];
  return [
    ...statics.map(([path, priority, changeFrequency]) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority })),
    ...services.map((s) => ({ url: `${site.url}${s.path}`, lastModified: now, changeFrequency: "monthly" as const, priority: s.parent ? 0.8 : 0.9 })),
    ...towns.map((t) => ({ url: `${site.url}/service-areas/${t.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}/`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}/`, lastModified: new Date(p.updated ?? p.date), changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
