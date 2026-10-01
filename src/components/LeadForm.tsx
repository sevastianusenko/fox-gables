"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

const jobs = [
  "Roof replacement",
  "Roof repair or leak",
  "Metal roof",
  "Siding or trim wrap",
  "Windows",
  "Doors",
  "Gutters, soffit, fascia",
  "Deck or porch",
  "Kitchen",
  "Bathroom",
  "Basement",
  "Repair or carpentry",
  "Commercial or barn",
  "Not sure yet",
];

export function LeadForm({
  source = "site",
  defaultService,
  tone = "light",
  compact = false,
}: {
  source?: string;
  defaultService?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "");
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Add a phone number with the area code so Josh can call you back.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone,
          email: data.get("email"),
          town: data.get("town"),
          service: data.get("service"),
          message: data.get("message"),
          company: data.get("company"),
          source,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(`The form did not go through. Call or text ${site.phone} and Josh will take it from there.`);
    }
  }

  const dark = tone === "dark";
  const label = `block font-display text-[0.86rem] font-semibold mb-1.5 ${dark ? "text-white/85" : "text-ink"}`;
  const input = `w-full border-2 px-3.5 py-3 text-[1rem] font-serif outline-none transition-colors ${
    dark
      ? "border-white/25 bg-white/5 text-white placeholder:text-white/40 focus:border-fox focus:bg-white/10"
      : "border-line bg-white text-ink placeholder:text-ink-mute focus:border-ink"
  }`;

  if (status === "sent") {
    return (
      <div className={`border-l-4 border-fox p-6 ${dark ? "bg-white/5" : "bg-sky"}`} role="status">
        <p className="font-display text-[1.6rem] font-bold leading-tight">Got it. Josh will call you.</p>
        <p className={`mt-2 ${dark ? "text-white/80" : "text-ink-soft"}`}>
          {site.callbackPromise}. If it is late in the evening, expect the call in the morning. In a hurry? Call{" "}
          <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`lf-name-${source}`} className={label}>
          Name
        </label>
        <input id={`lf-name-${source}`} name="name" required autoComplete="name" className={input} placeholder="First and last name" />
      </div>
      <div>
        <label htmlFor={`lf-phone-${source}`} className={label}>
          Phone
        </label>
        <input
          id={`lf-phone-${source}`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          className={input}
          placeholder="(717) 555-0100"
        />
      </div>
      <div>
        <label htmlFor={`lf-town-${source}`} className={label}>
          Town
        </label>
        <input id={`lf-town-${source}`} name="town" autoComplete="address-level2" className={input} placeholder="Ephrata, Lititz, Lebanon..." />
      </div>
      <div>
        <label htmlFor={`lf-service-${source}`} className={label}>
          What needs doing
        </label>
        <select id={`lf-service-${source}`} name="service" className={input} defaultValue={defaultService ?? ""}>
          <option value="" disabled>
            Pick one
          </option>
          {jobs.map((j) => (
            <option key={j} value={j} className="text-ink">
              {j}
            </option>
          ))}
        </select>
      </div>
      {!compact && (
        <div className="sm:col-span-2">
          <label htmlFor={`lf-email-${source}`} className={label}>
            Email <span className={`font-normal ${dark ? "text-white/50" : "text-ink-mute"}`}>(optional, for photos and the written estimate)</span>
          </label>
          <input id={`lf-email-${source}`} name="email" type="email" autoComplete="email" className={input} placeholder="you@example.com" />
        </div>
      )}
      <div className="sm:col-span-2">
        <label htmlFor={`lf-message-${source}`} className={label}>
          Details <span className={`font-normal ${dark ? "text-white/50" : "text-ink-mute"}`}>(optional)</span>
        </label>
        <textarea
          id={`lf-message-${source}`}
          name="message"
          rows={compact ? 2 : 3}
          className={input}
          placeholder="What is going on, how old the house is, when you would like it done"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === "error" && (
        <p className={`sm:col-span-2 text-[0.95rem] ${dark ? "text-fox" : "text-danger"}`} role="alert">
          {error}
        </p>
      )}
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <Button variant="fox" disabled={status === "sending"} aria-busy={status === "sending"}>
          {status === "sending" ? "Sending..." : "Request my free estimate"}
        </Button>
        <p className={`text-[0.9rem] ${dark ? "text-white/60" : "text-ink-mute"}`}>No sales visit. Josh comes out, measures, and gives you a number.</p>
      </div>
    </form>
  );
}
