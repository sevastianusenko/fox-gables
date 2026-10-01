# foxgables.com

Next.js 16 (App Router, Turbopack), Tailwind 4, TypeScript. Static site with one API route for the lead form.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` for the lead form to deliver email. Without it the route logs the lead on the server and still returns success.

## Where things live

| Path | What |
|---|---|
| `src/lib/site.ts` | NAP, phone, HIC number, hours, ratings, geo. Change business facts here only. |
| `src/content/services-*.ts` | Every service page: copy, pricing, FAQs, related links. One object per page. |
| `src/content/towns.ts` | 14 service-area pages with per-town copy and FAQs; `moreTowns` for the dial. |
| `src/content/projects.ts` | Project case studies with galleries and before/after. |
| `src/content/reviews.ts` | Real reviews with platform attribution. |
| `src/content/posts/*.ts` | Blog posts in light markdown (rendered by `components/Markdown.tsx`). |
| `src/content/nav.ts` | Header menu. |
| `src/app/[...slug]/page.tsx` | Renders every service page from the content files. |
| `src/components/` | UI. See `DESIGN.md` for the system. |
| `public/photos/jobs/` | Client's own photos. `public/photos/stock/` StockSnap CC0. `public/photos/towns/` Wikimedia (credits in `town-photo-credits.ts`). |
| `public/brand/` | Traced logo SVGs. |
| `next.config.ts` | 301 redirects from the old WordPress URLs, security headers. |

## Adding content

- New service: add an object to the right `services-*.ts` file. The route, sitemap, nav footer and schema pick it up. Add it to `nav.ts` and `Footer.tsx` by hand.
- New town: add to `towns.ts`, drop a photo in `public/photos/towns/<key>.jpg`, add a credit in `town-photo-credits.ts`, add the footer link.
- New project: add to `projects.ts` with photos in `public/photos/jobs/`.
- New post: create `src/content/posts/<name>.ts` and import it in `posts/index.ts`.

## Deploy

Vercel, production branch `main`. Domain `foxgables.com` to be moved from the WordPress host after launch checklist in `../README.md`.
