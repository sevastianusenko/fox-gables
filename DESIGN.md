# Design system

Recorded from the built site on 2026-10-01. Ground truth is `src/app/globals.css` and `src/components`.

## World

The gable. A roofline at 6/12 pitch is the one shape the site is cut from: the hero line drawn on load, the photo frames (`HouseFrame`), the section edges (`GableEdge`), the right end of the primary button (`btn-gable`), the check marks in the "signs" lists. The fox from the client's logo sits on the ridge of the hero frame.

Visitor mode: Persuade. A homeowner should know in one viewport that this is one licensed man in Akron who does roofs, exteriors and remodels, that he answers the phone, and what to press.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-shingle` / `-deep` / `-soft` | `#23272b` / `#16191c` / `#2f353b` | header, hero, price band, before/after band, footer |
| `--color-sky` / `-deep` | `#e7edf1` / `#cfd9e0` | alternating section ground, facts strip, photo placeholder |
| `--color-paper` | `#ffffff` | page ground |
| `--color-ink` / `-soft` / `-mute` | `#16191c` / `#3d454c` / `#6b757d` | text |
| `--color-fox` / `-deep` / `-tint` | `#e3561d` / `#b23e0e` / `#fbe8de` | buttons, CTA band, eyebrows, ridge line, rule under header |
| `--color-line` | `#d7dfe5` | hairlines |

Strategy: charcoal is a field, not an accent. The light ground is cool, never cream. Orange is used as a field (CTA band, buttons) and as a 4px rule, never as a text color in body copy.

## Type

- Display: **Archivo** variable, width axis. H1 at 112% width, 800 weight; H2 110%, 700; H3 105%, 650. Tight tracking, line-height 0.95 to 1.1.
- Body: **Source Serif 4** variable, optical size axis. 17px base, 1.6 line height.
- Eyebrow: Archivo 600, uppercase, 0.16em tracking, 0.74rem.
- Numbers use tabular figures (`.tnum`).

## Components

`Header` (sticky charcoal, orange rule, mega-menu on xl, full-screen dialog below), `MobileBar` (fixed Call / Free estimate), `Hero` (drawn roofline, word-by-word headline, framed photo with fox mark), `ServiceShowcase` (numbered list with sticky crossfading house frame), `PhotoBand` (full-bleed review), `ProcessSteps` (five numbered steps, numbered because it is a sequence), `ProjectCard`/`ProjectsGrid`, `BeforeAfter` (range input slider), `RadiusDial` (towns at real bearing and distance from Akron, rings animate in), `ReviewsBlock`, `CtaBand` (orange, form in white card), `LicenseBlock`, `TownsStrip`, `Gallery`, `Faq` (native details), `PageHero` + `Breadcrumbs`, `Section` (tone + optional gable edge), `Button` (fox, ink, white, ghost, ghost-light).

## Motion

One authored moment: the hero. Roofline draws (1.5s), headline words rise with 55ms stagger, lede and buttons fade up, photo frame rises, fox pops onto the ridge. Elsewhere: `.reveal` fade-up on scroll with per-item `--d` delays, house-frame lift on hover, image zoom on hover, dial rings scale in. All collapse under `prefers-reduced-motion`.

## Rules

- Project pages show only Fox Gables' own photos. Stock (StockSnap CC0) is used only for generic material and space shots on service pages and blog heroes. Town photos are Wikimedia Commons with the credit printed under the photo.
- Every page carries the HIC number in the footer; services and towns also carry `LicenseBlock`.
- Reviews are real and attributed to their platform. No invented names, no AggregateRating schema until reviews live on the site in volume.
- No em dashes anywhere in copy. No emoji. No "transform your dream."
- Numbered markers appear only on the process (a sequence) and the service showcase (an ordered list of eight); nowhere as decoration.
