# Solaris CRM

A modern customer relationship management dashboard built for growing sales and success teams. Solaris CRM gives you a clean, fast interface to track contacts, monitor pipeline health, and stay on top of day-to-day work without drowning in tabs.

**Live demo:** https://shaisolaris.github.io/solaris-crm-demo/

## What's inside

- Dashboard overview with revenue, customer, and activity metrics
- Contacts, calendar, and profile views
- Tables, forms, charts, and UI building blocks
- Full light and dark mode
- Responsive layout from mobile to widescreen

## Tech stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS 4
- TypeScript
- ApexCharts, FullCalendar, jsVectorMap

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
```

Static files are emitted to `out/` and can be hosted on any static host (GitHub Pages, Vercel, Cloudflare Pages, Netlify, S3, etc.).

## Deployment

This repo deploys to GitHub Pages via GitHub Actions on every push to `main`. The workflow lives in `.github/workflows/deploy.yml`.

## Credits

UI scaffolding based on the open-source TailAdmin Next.js admin template, rebranded and extended for the Solaris product suite.
