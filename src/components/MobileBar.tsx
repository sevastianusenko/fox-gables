import Link from "next/link";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-shingle text-white md:hidden">
      <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-4 font-display text-[1rem] font-bold">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call Josh
      </a>
      <Link href="/contact/" className="flex items-center justify-center bg-fox py-4 font-display text-[1rem] font-bold">
        Free estimate
      </Link>
    </div>
  );
}
