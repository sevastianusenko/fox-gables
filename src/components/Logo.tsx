import Link from "next/link";
import { FOX_PATH, FOX_VIEWBOX } from "./fox-path";

export function FoxMark({ className = "h-9 w-auto", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox={FOX_VIEWBOX} className={className} aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title && <title>{title}</title>}
      <path d={FOX_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="Fox Gables Construction, home">
      <FoxMark className="h-9 w-auto text-fox shrink-0" />
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="font-display font-extrabold text-[1.15rem] tracking-[-0.01em]" style={{ fontStretch: "112%" }}>
          FOX GABLES
        </span>
        <span className="font-display font-medium text-[0.62rem] tracking-[0.32em] mt-[3px]">CONSTRUCTION</span>
      </span>
    </Link>
  );
}
