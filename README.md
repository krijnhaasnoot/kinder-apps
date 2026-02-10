# Kinder Apps

Landing pages and privacy policies for the Kinder app family: **Kinder**, **Moment**, **Birthflow**, and **Petnames**.

## Apps

| App | Description |
|---|---|
| **Kinder** | Baby name swiping for couples |
| **Moment** | Calm fertility & cycle tracking |
| **Birthflow** | Contraction timer for labor |
| **Petnames** | Pet name swiping |

## Tech Stack

- [Next.js 14](https://nextjs.org/) with App Router
- TypeScript
- CSS Modules
- [Poppins](https://fonts.google.com/specimen/Poppins) (headings) + [Geist](https://vercel.com/font) (body)
- [lucide-react](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx              # Homepage
  layout.tsx            # Root layout (nav, footer, SEO)
  sitemap.ts            # Auto-generated sitemap
  not-found.tsx         # Custom 404
  globals.css           # Global styles & CSS variables
  components/
    Nav.tsx             # Sticky pill navigation
  kinder/
    page.tsx            # Kinder app page
    privacy/page.tsx    # Kinder privacy policy
  moment/
    page.tsx            # Moment app page
    privacy/page.tsx    # Moment privacy policy
  birthflow/
    page.tsx            # Birthflow app page
    privacy/page.tsx    # Birthflow privacy policy
  petnames/
    page.tsx            # Petnames app page
    privacy/page.tsx    # Petnames privacy policy
  privacy/
    page.tsx            # General privacy policy
public/
  images/               # App icons
  robots.txt
```

## Deploy

Deploy on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect the repo to Vercel for automatic deployments.

## Contact

krijn.kinderapp@gmail.com
