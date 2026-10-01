import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="eyebrow text-fox">404</p>
        <h1 className="mt-3">That page is not on this roof.</h1>
        <p className="lede measure mt-6 text-ink-soft">
          The address may have changed when the site was rebuilt. The services, projects and towns are all linked from
          the menu, or call {site.phone} and ask.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="fox">
            Back to the home page
          </Button>
          <Button href="/roofing/" variant="ghost">
            Roofing
          </Button>
          <Button href="/projects/" variant="ghost">
            Projects
          </Button>
        </div>
        <p className="mt-10 text-ink-mute">
          Looking for something specific? <Link href="/contact/" className="underline underline-offset-4 hover:text-fox">Send a note</Link>.
        </p>
      </div>
    </section>
  );
}
