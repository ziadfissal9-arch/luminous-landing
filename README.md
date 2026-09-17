# Luminous

A marketing site for a fintech product — hero, trusted-by strip, feature grid, live stats, product experience section, pricing, testimonials, and auth pages (login/signup). Built as a portfolio project to demonstrate a distinctive, fully custom visual identity and production-grade front-end engineering: strict TypeScript, real component tests, accessibility basics, and route-based code splitting.

**Live demo:** [https://luminous-landing.vercel.app](https://luminous-landing.vercel.app)

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/tested%20with-Vitest-6e9f18?logo=vitest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black)

## Design

A **Bold Neo-Brutalist Fintech** identity — thick black borders, hard offset shadows (no blur), a warm paper background, a single high-contrast lime accent, Space Grotesk for display type and JetBrains Mono for numerals/labels. Deliberately distinct from a "safe" SaaS look: buttons physically press down on hover/active, cards sit on flat drop shadows instead of soft blurs, and stat numbers count up as they scroll into view.

## Features

- **Full marketing site** — hero, trusted-by logos, animated stat counters, feature grid, product experience section, pricing tiers, testimonials, and a newsletter-capture footer.
- **Auth pages** — login and signup screens with client-side validation, a live password-strength meter, and an honest "this is a portfolio demo" disclaimer instead of pretending to create a real account.
- **Scroll-reveal animations** — sections and stat counters animate in via `IntersectionObserver`, respecting reduced-motion in spirit (no motion is required to read the content).
- **Route-based code splitting** — `Landing`, `Login`, and `Signup` are all lazily loaded with `React.lazy` + `Suspense`.
- **Accessible basics** — a skip-to-content link, labelled form fields, and distinct `aria-label`s on every icon-only social link.
- **Fully typed** — shared `NavLink` / `Stat` / `Feature` / `Plan` / `Testimonial` models in `src/types.ts`.

## Tech stack

| Layer       | Choice                                         |
| ----------- | ----------------------------------------------- |
| UI          | React 19, React Router 7                        |
| Language    | TypeScript (strict mode)                        |
| Build tool  | Vite 8                                           |
| Styling     | Hand-written CSS (design tokens, no framework)   |
| Icons       | lucide-react + hand-drawn brand SVGs             |
| Testing     | Vitest, React Testing Library, jsdom             |
| Linting     | oxlint                                           |
| Deployment  | Vercel                                           |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

Other scripts:

```bash
npm run build        # type-check (tsc -b) then build for production
npm run preview      # preview the production build locally
npm run test          # run the test suite once
npm run test:watch    # run the test suite in watch mode
npm run lint          # run oxlint
```

## Project structure

```
src/
├── components/       # Navbar, Hero, Stats, Features, Experience, Pricing, Testimonials, Footer, ...
├── pages/            # Landing, Login, Signup
├── test/             # Vitest setup (jsdom polyfills)
├── data.ts           # Static site content (nav links, stats, plans, testimonials)
├── hooks.ts          # useReveal (scroll-in animation), useCountUp, scorePassword
├── types.ts          # Shared NavLink / Stat / Feature / Plan / Testimonial types
└── main.tsx          # App entry point (BrowserRouter, StrictMode)
```

## Testing

The suite covers the logic most likely to break silently: password-strength scoring (`scorePassword`), the signup form's validation and success states, the dynamic-year/social-link footer, and the `Stats` component's per-card hook usage (guarding against a Rules-of-Hooks regression).

```bash
npm run test
```

## Deployment

The project is configured for [Vercel](https://vercel.com) — a static Vite build with client-side routing (`vercel.json` rewrites all routes to `index.html`). Push to a Vercel-linked Git repo or run `vercel --prod`.

## Notes

This is a portfolio demo: the signup/login flows validate input and show real UI states, but no account is created and no data is sent anywhere.

## License

MIT — see [LICENSE](./LICENSE).
