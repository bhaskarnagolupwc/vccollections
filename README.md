# VC Collections

A Next.js (App Router) website for an interior design business — home, about, services, portfolio, testimonials, and contact sections.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.js`, `app/page.js`, `app/globals.css` — root layout, page, and styles
- `components/` — Header, Hero, About, Services, Portfolio, Testimonials, Contact, Footer

## Notes

- All copy and images are placeholders (Unsplash URLs) — swap in real content, photos, and contact details.
- The contact form (`components/Contact.js`) is client-side only. Wire it to an email service or a Next.js API route (`app/api/contact/route.js`) to actually receive submissions.
- `npm run build` produces a production build; verified working with Next.js 14.2.5.
