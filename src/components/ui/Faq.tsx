import type { Faq as FaqItem } from "@/lib/site";
import { JsonLd, faqSchema } from "@/components/Schema";

export function Faq({ items, title = "Questions people ask", withSchema = true }: { items: FaqItem[]; title?: string; withSchema?: boolean }) {
  if (!items.length) return null;
  return (
    <div>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <h2 className="mb-8">{title}</h2>
      <div className="divide-y divide-line border-y border-line">
        {items.map((it, i) => (
          <details key={i} className="group py-5">
            <summary className="flex items-start justify-between gap-6 font-display text-[1.1rem] font-semibold leading-snug">
              <span>{it.q}</span>
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink text-ink transition-transform group-open:rotate-45"
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </summary>
            <p className="measure mt-3 text-ink-soft">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
