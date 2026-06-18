# Iulian — Photographer Portfolio (Single Page)

A premium dark-mode single-page site built in the existing TanStack Start + Tailwind v4 project, on the `/` route. All 10 sections per your spec, fully responsive.

## Design tokens (src/styles.css)
- `--background: #2d2d2d`, `--foreground: #ffffff`, `--muted-foreground: #cccccc`
- `--accent: #F6AD1A`, `--accent-foreground: #2d2d2d`
- `--card: #383838` (testimonials)
- Fonts registered via `@theme`:
  - `--font-display: "Mariella Noeve"` (self-hosted from your uploaded TTF, via `@font-face` in styles.css)
  - `--font-sans: "Poppins"` (loaded via `<link>` to Google Fonts in `__root.tsx` head — weights 300/400/500/600/700)
- Apply `font-sans` to body, `font-display` to all H1–H3.

## Assets
- Photographer cutout (`Iulian_Corbu.png`) → uploaded as Lovable asset → hero portrait.
- `Mariella Noeve.ttf` → copied to `src/assets/fonts/` and loaded with `@font-face`.
- All other photos (awards, latest stories, about, contact, blog thumbs, testimonial avatars) → generated via `imagegen` (wedding/portrait/event photography, warm cinematic), saved under `src/assets/`.

## Component structure
Single route `src/routes/index.tsx` composing section components in `src/components/site/`:
1. `Header.tsx` — fixed; transparent → blurred `#2d2d2d/80` on scroll (scroll listener + `backdrop-blur`); desktop centered nav links + right CTA "Programează"; mobile hamburger → shadcn `Sheet` offcanvas.
2. `Hero.tsx` — 100vh, layered: giant outlined "POVEȘTILE LUI IULIAN" text (background, white 5% / stroke), centered photographer portrait, bottom-center CTA pair ("Ai nevoie de un fotograf?" solid accent + "Cine sunt eu" outline w/ hover to accent).
3. `About.tsx` — 2-col grid, portrait left, "Despre mine" copy right.
4. `Awards.tsx` — masonry/CSS columns grid of award photos; hover zoom + gradient overlay with award title.
5. `Testimonials.tsx` — 3-col grid of `#383838` cards with accent quote icon, italic Poppins quote, couple name.
6. `Benefits.tsx` — 4-col grid, Lucide outline icons tinted accent (Camera, Truck, Award, Sparkles), H3 + short text.
7. `LatestStories.tsx` — 3-col borderless photo grid; hover darken + centered event name fade-in.
8. `Contact.tsx` — 50/50 split; lifestyle image left, form right with floating labels, bottom-border-only inputs that turn accent on focus, full-width accent submit.
9. `Blog.tsx` — 3-col cards (thumb, display-font title, excerpt, "Citește mai mult →" link, accent hover).
10. `Faq.tsx` — shadcn `Accordion`, max-w-800px, +/− indicator turning accent when open.
11. `Footer.tsx` — minimalist; logo, quick links, social icons (accent hover), copyright. Plus floating `BackToTop.tsx` (accent circle, bottom-right, appears after scroll).

Smooth in-page anchor scrolling for nav links (`#despre`, `#portofoliu`, `#testimoniale`, `#contact`).

## Responsiveness
- Mobile-first; grids collapse to 1 col (mobile) / 2 col (tablet) / 3–4 col (desktop).
- Hero text scales with `clamp()`; portrait max-h capped on mobile.
- Hamburger replaces nav under `md`.
- Section padding `py-24 md:py-32` (≈100px+ on desktop).

## SEO
- Update route `head()`: title "Iulian Corbu — Fotograf de nuntă", Romanian meta description, og:title/description, og:image = hero portrait.

## Technical notes
- Purely presentational; no backend, no form submission wiring (form is UI-only, logs to console on submit). Say so if you want real email/DB later — would require enabling Lovable Cloud.
- No new dependencies needed (shadcn Sheet/Accordion already in project, lucide-react already present).
- Font loading: `@font-face` for Mariella Noeve (woff/ttf), `<link>` for Poppins — never `@import` remote URLs in styles.css (Tailwind v4 constraint).

## Out of scope (ask if you want these)
- Real backend for the contact form (Lovable Cloud).
- Actual photo content — placeholders will be AI-generated stock-style wedding photos until you provide your own.
- Multi-language toggle (FR/EN shown in reference) — site will be Romanian only.
