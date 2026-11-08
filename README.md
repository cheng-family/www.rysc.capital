# rysc.capital

The website for [rysc.capital](https://www.rysc.capital), built with [Next.js](https://nextjs.org) (App Router) and React, and exported as a static site.

## Getting started

```bash
pnpm install
pnpm dev        # start the dev server at http://localhost:3000
pnpm build      # static export to ./out
pnpm start      # build and serve ./out
pnpm typecheck  # type-check the project
```

Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY` to enable Google Analytics.

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, analytics, header + footer
  globals.css           Design tokens and shared utility classes
  page.tsx              Home
  about/                About
  portfolio/            Portfolio (startups + crypto on one page)
  team/                 Team (not linked from the nav)
  join/, portfolio/*/   Redirects from old URLs to their new locations
components/             Shared UI components (each with a CSS module)
lib/                    Config (contact forms, analytics) and portfolio data
public/images/          Site imagery and portfolio logos
```

Styling uses CSS Modules plus a few global utilities (`.container`,
`.eyebrow`, `.photo-band`). Type is Instrument Serif (display), Inter (body)
and JetBrains Mono (labels). Layouts use wrapping flex rows, so they stack on
narrow screens.

### Editing content

- Portfolio companies live in `lib/portfolio.ts` as plain arrays.
- Contact form links live in `lib/config.ts`.
- Navigation links live in `components/SiteHeader.tsx` and
  `components/SiteFooter.tsx`.
