import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  town?: string;
  service?: string;
  message?: string;
  source?: string;
  page?: string;
  company?: string;
};

const clean = (v: unknown, max = 500) =>
  typeof v === "string" ? v.replace(/[<>]/g, "").trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden company field. Pretend success.
  if (clean(body.company, 10)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    town: clean(body.town, 80),
    service: clean(body.service, 80),
    message: clean(body.message, 2000),
    source: clean(body.source, 60),
    page: clean(body.page, 200),
  };

  if (!lead.name || lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 422 });
  }

  const text = [
    `New estimate request from ${site.url}`,
    ``,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "(not given)"}`,
    `Town: ${lead.town || "(not given)"}`,
    `Job: ${lead.service || "(not given)"}`,
    `Details: ${lead.message || "(none)"}`,
    ``,
    `Page: ${lead.page}  Source: ${lead.source}`,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO || site.email;
  const from = process.env.LEAD_FROM || `Fox Gables Website <leads@${new URL(site.url).hostname}>`;

  if (key) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: lead.email || undefined,
          subject: `Estimate request: ${lead.name}${lead.town ? ` (${lead.town})` : ""}${lead.service ? ` · ${lead.service}` : ""}`,
          text,
        }),
      });
      if (!r.ok) {
        console.error("Resend error", r.status, await r.text());
        return NextResponse.json({ ok: false }, { status: 502 });
      }
    } catch (e) {
      console.error("Resend fetch failed", e);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.log("[lead] (no RESEND_API_KEY set)\n" + text);
  }

  return NextResponse.json({ ok: true });
}
