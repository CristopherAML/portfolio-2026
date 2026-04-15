# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

There are no lint or test scripts configured.

## Architecture

This is a single-page cyberpunk/terminal-themed portfolio built with **Astro 5 + Tailwind CSS 3**.

### Key files

| File | Purpose |
|---|---|
| `src/pages/index.astro` | The entire portfolio — one large Astro page with all HTML markup |
| `src/scripts/terminal.ts` | All client-side logic (loaded inline via `<script>`) |
| `src/styles/global.css` | Tailwind directives + custom CSS for cyberpunk effects |
| `public/cv_cristopher_meza.pdf` | CV file linked from the page |
| `public/favicon.svg` | Site favicon |

### UX flow

The page has two containers that swap on user interaction:

1. **`#terminal-container`** — shown first; runs a boot sequence animation (`runBootSequence()` in `terminal.ts`) that types log lines with random delays, then reveals a `> ENTRAR AL SISTEMA` button.
2. **`#portfolio-container`** — hidden initially (`opacity-0`); fades in after the user clicks the boot button. Contains the actual portfolio content.

### i18n (bilingual ES/EN)

Translation is handled entirely client-side in `terminal.ts`:
- An `i18n` dictionary object holds all strings for both `"es"` and `"en"` locales.
- Any element with a `data-i18n="keyName"` attribute gets its `innerHTML` swapped by `updateLanguage()` when the language toggle button (`#lang-switch`) is clicked.
- Default language is Spanish (`"es"`).

### Contact form

Handled via Formspree (`https://formspree.io/f/xbdzdwll`). The form submission is fully async with visual feedback states on the submit button (sending / success / error).

### Styling conventions

- Color palette: black background, `green-500` (`#22c55e`) as primary accent, `gray-300/400` for body text, `white` for emphasis.
- Font: `font-mono` everywhere (monospace terminal aesthetic).
- CRT scanline overlay: `.crt-overlay` div fixed at `z-50`, pointer-events none.
- Glitch effects: `.glitch-hover` (text) and `.glitch-image-hover` (photo) — both defined in `global.css` with CSS animations using `clip-path` and `text-shadow`.
- Custom Tailwind animations (`animate-glitch-img-1`, `animate-glitch-img-2`, `animate-marquee`) are defined directly in `global.css` rather than in `tailwind.config.mjs`.

### Deployment

The project is deployed on Vercel (static output). No server-side rendering is configured.
