"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/content/nav";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const [lastPath, setLastPath] = useState(path);

  // Close the menu when the route changes (state derived from props, no effect needed).
  if (path !== lastPath) {
    setLastPath(path);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.requestAnimationFrame(onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-shingle text-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:bg-fox focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo tone="light" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 font-display text-[0.95rem] font-medium hover:text-fox ${
                    path.startsWith(item.href) && item.href !== "/" ? "text-fox" : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="opacity-70">
                      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-[300px] border-t-4 border-fox bg-white p-2 text-ink shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block px-3 py-2.5 hover:bg-sky">
                            <span className="block font-display text-[0.95rem] font-semibold">{c.label}</span>
                            {c.note && <span className="block text-[0.85rem] leading-snug text-ink-mute">{c.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={site.phoneHref} className="font-display text-[1.05rem] font-bold tracking-[-0.01em] hover:text-fox tnum">
            {site.phone}
          </a>
          <Button href="/contact/" variant="fox" className="hidden lg:inline-flex">
            Free estimate
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/30 xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/30 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
            <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <div className="h-1 w-full bg-fox" aria-hidden="true" />

      {/* Mobile / tablet menu */}
      <div
        className={`fixed inset-0 z-[70] bg-shingle text-white transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">
          <Logo tone="light" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/30"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="h-1 w-full bg-fox" aria-hidden="true" />
        <div className="h-[calc(100dvh-76px)] overflow-y-auto px-4 pb-28 pt-4 sm:px-6">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.href} className="py-3">
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 font-display text-[1.5rem] font-bold">
                      {item.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-open:rotate-180">
                        <path d="M2 5l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </summary>
                    <ul className="mb-2 mt-1 space-y-1 border-l-2 border-fox pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-1.5 font-display text-[1.05rem] text-white/90">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="block py-2 font-display text-[1.5rem] font-bold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Button href={site.phoneHref} variant="fox" className="w-full">
              Call {site.phone}
            </Button>
            <Button href="/contact/" variant="ghost-light" className="w-full">
              Request a free estimate
            </Button>
            <p className="pt-2 text-center text-[0.9rem] text-white/60">
              PA HIC #{site.hic} · Licensed and insured
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
