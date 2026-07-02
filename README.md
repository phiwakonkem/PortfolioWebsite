# Phiwakonke Mthethwa — Portfolio Website

My personal developer portfolio — built from scratch to showcase my projects, skills, and background as a full-stack developer based in South Africa. Includes a downloadable CV, a themeable UI, and a PIN-protected owner edit mode.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

---

## Features

- **Hero, About, Stack, and Projects sections** — single-page layout with smooth navigation
- **Project showcase** — pulls structured project data (name, tagline, description, status, tech stack, links) from a central data file
- **Live status badges** — each project shows its real state (Beta, Complete, In Production, etc.)
- **Dark/light theme toggle** — powered by `next-themes`
- **CV download** — serves a PDF directly from `/public/cv`
- **Contact section** — email, phone, WhatsApp, GitHub, and LinkedIn links
- **Owner edit mode** — a PIN-gated context (`EditContext.tsx`) for making quick content edits without redeploying code
- **Custom icon system** — hand-built `Icons.tsx` to work around SVG rendering quirks
- **Fully responsive** — built mobile-first with Tailwind CSS

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Icons | `lucide-react` + custom `Icons.tsx` |
| Theming | `next-themes` |

## Prerequisites

- Node.js 20 or later
- npm

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/phiwakonkem/PortfolioWebsite.git
cd PortfolioWebsite

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)

# 4. Start the dev server
npm run dev
```

The app will be running at `http://localhost:3000`.

## Environment Variables

The owner edit mode is gated by a PIN read from an environment variable. Create a `.env.local` file:

```env
NEXT_PUBLIC_EDIT_PIN="your-chosen-pin"
```

> Since this is a `NEXT_PUBLIC_` variable it's visible in client-side code — treat it as a light deterrent against casual editing, not real authentication.

## Project Structure

```
PortfolioWebsite/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── Connect.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── Icons.tsx          # Custom SVG icon workaround
│   │   ├── EditContext.tsx    # PIN-based owner edit mode
│   │   └── ThemeProvider.tsx
│   ├── lib/
│   │   └── data.ts             # Personal info + project data, single source of truth
│   ├── layout.tsx
│   └── page.tsx
└── public/
    └── cv/                      # Downloadable CV PDF
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Deployment

Deployed on [Vercel](https://vercel.com). Set `NEXT_PUBLIC_EDIT_PIN` in the Vercel project's environment variables before deploying.

## Development Notes

- This project was moved out of OneDrive during development to avoid filesystem sync conflicts with Next.js's build cache on Windows.
- Project data (bio, contact links, and the four featured projects — AfriHaul, DevBoard, Solana Villas, DataPulse) lives entirely in `app/lib/data.ts`, so updating content doesn't require touching component code.

## Author

**Phiwakonke Mthethwa** — Full-Stack Developer, South Africa
[GitHub](https://github.com/phiwakonkem) · [LinkedIn](https://www.linkedin.com/in/phiwakonke-mthethwa-97aa74331) · phiwakonkem@gmail.com

## License

MIT
