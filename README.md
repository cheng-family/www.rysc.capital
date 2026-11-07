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
  globals.css           Design tokens and base element styles
  page.tsx              Home
  about/                About
  team/                 Team
  join/                 Join
  portfolio/            Portfolio index and category pages
components/             Shared UI components (each with a CSS module)
public/images/          Site imagery and portfolio logos
```

Styling uses CSS Modules. The layout has a single responsive breakpoint at
`max-width: 1400px`, below which the header, footer and content sections stack
vertically.

### Editing content

- Portfolio companies live in `app/portfolio/startups/page.tsx` and
  `app/portfolio/crypto/page.tsx` as plain arrays.
- Navigation links live in `components/SiteHeader.tsx` and
  `components/SiteFooter.tsx`.
