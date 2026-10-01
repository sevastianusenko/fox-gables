import type { ReactNode } from "react";
import { GableEdge } from "./GableEdge";

type Tone = "paper" | "sky" | "shingle" | "fox";

const tones: Record<Tone, { bg: string; edge: string; text: string }> = {
  paper: { bg: "bg-paper", edge: "text-paper", text: "text-ink" },
  sky: { bg: "bg-sky", edge: "text-sky", text: "text-ink" },
  shingle: { bg: "bg-shingle", edge: "text-shingle", text: "text-white on-dark" },
  fox: { bg: "bg-fox", edge: "text-fox", text: "text-white on-dark" },
};

export function Section({
  tone = "paper",
  edge = false,
  tight = false,
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  edge?: boolean;
  tight?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const t = tones[tone];
  return (
    <section id={id} className={`relative flow-root ${t.bg} ${t.text} ${className}`}>
      {edge && <GableEdge className={t.edge} />}
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${tight ? "py-12 md:py-16" : "py-16 md:py-24"}`}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
