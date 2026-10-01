import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "fox" | "ink" | "white" | "ghost" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-[0.01em] text-[0.98rem] leading-none px-6 py-[1.05rem] transition-colors duration-200 whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  fox: "bg-fox text-white hover:bg-fox-deep btn-gable",
  ink: "bg-ink text-white hover:bg-shingle-soft btn-gable",
  white: "bg-white text-ink hover:bg-sky btn-gable",
  ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  "ghost-light": "border-2 border-white/80 text-white hover:bg-white hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "fox",
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Record<string, unknown>) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="submit" className={cls} {...rest}>
      {children}
    </button>
  );
}
