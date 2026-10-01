import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Breadcrumbs } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CtaBand, ProjectCard } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Our Work | Roofing, Remodeling & Exterior Projects",
  description:
    "Recent roofing, porch, door, bathroom and whole-house remodeling projects by Fox Gables Construction in Lancaster, Lebanon and Berks counties. Real jobs, real photos.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <Breadcrumbs items={[{ name: "Projects", href: "/projects/" }]} />
          <Eyebrow className="mt-6 text-fox">Recent work</Eyebrow>
          <h1 className="mt-3">Real jobs, photographed by the person who did them</h1>
          <p className="lede measure mt-6 text-ink-soft">
            No stock photos of houses in other states. These are Lancaster, Lebanon and Berks county jobs, with the
            before, the middle and the after where there are pictures of them.
          </p>
        </div>
      </section>
      <Section tone="sky" edge>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </Section>
      <CtaBand source="projects" heading="Want yours on this page?" />
    </>
  );
}
