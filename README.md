# FIGA Botswana 2026 — Website

Frontend for Africa Gastronomy Botswana / FIGA Botswana 2026 (11–14 November 2026, Gaborone).
React + TypeScript + Vite + Tailwind CSS v4, fully i18n-driven, Font Awesome icons throughout.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
```

## Architecture

- `src/data/` — all content that will eventually come from a CMS (programmes,
  registration categories, countries, chefs, partners, FAQ). Each file is a
  single typed array; a CMS integration only needs to replace these with API
  calls, no component changes required.
- `src/i18n/locales/en/common.json` — every string on the site. English is the
  only shipped language, but every component reads through `useTranslation()`,
  so adding a language is: drop in `locales/<code>/common.json`, register it in
  `src/i18n/index.ts`. The `LanguageSwitcher` component already supports a list
  of languages.
- `src/components/ui/` — the design system: `Button`/`LinkButton`, `Card`,
  `Badge`, `SectionHeading`, `Container`, `CountdownTimer`, `PageHero`,
  `StepIndicator`, `LanguageSwitcher`.
- `src/sections/home/` — homepage sections, composed in `src/pages/Home.tsx`.
- `src/pages/register/` + `src/context/RegistrationContext.tsx` — the
  registration flow: Programme → Details → Category → Summary → Payment →
  Confirmation, matching the required user journey.
- `src/lib/images.ts` — auto-loads every photo dropped into
  `src/assets/food/` or `src/assets/kitchen/` via `import.meta.glob`, no manual
  imports needed when new photography arrives.
- `src/lib/icons.ts` — the single place mapping semantic names to Font Awesome
  icons (`@fortawesome/react-fontawesome`, free solid + brands sets).

## What's placeholder vs. real

- **Real:** logo, all photography (from the supplied WhatsApp exports), event
  dates/location, page structure (matches the supplied brief exactly), all UI
  copy.
- **Placeholder, flagged in code/UI for CMS replacement:** chef & speaker
  names/bios (photos are real, but no biographical data was supplied — see
  `src/data/chefs.ts`), partner/sponsor logos (no logos supplied —
  `src/data/partners.ts`), the participating-countries confirmed/invited
  status (`src/data/countries.ts`), pricing shown in BWP on the registration
  categories.

## Not yet built (needs a backend decision)

This is a static frontend. To go live it needs:

1. **CMS** — headless CMS (e.g. Sanity, Strapi) or a custom admin, feeding the
   arrays in `src/data/`. Up to 10 CMS users as specified in the brief.
2. **Registration persistence** — the registration flow currently walks
   through all 6 steps client-side and generates a mock reference; it needs a
   real API to store registrations and send confirmation emails.
3. **Payment gateway** — the payment step is a UI shell (card / mobile money /
   bank transfer selectors); wiring a real processor (Stripe, PayGate, DPO, or
   a Botswana-specific provider) is the next step.
4. **Contact form** — currently client-side only; needs an endpoint or email
   service (e.g. Resend, SendGrid) to actually deliver messages.

## Design system

- Colours: terracotta (`--color-terracotta-*`) drawn from the FIGA emblem,
  deep espresso ink for dark sections, warm cream background, gold/forest/teal
  as supporting accents. Defined in `src/index.css` via Tailwind v4 `@theme`.
- Type: Playfair Display (headings) + Manrope (body), loaded via Google Fonts
  in `index.html`.
- Fully responsive: every section built mobile-first and checked at
  390px / 1440px.
