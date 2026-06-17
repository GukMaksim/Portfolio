# AGENTS.md — Portfolio (Maksym Huk)

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

No lint, typecheck, or test scripts exist. CI runs `npm ci && npm run build` on push to `main` and deploys to GitHub Pages (`/Portfolio/` base in `vite.config.js`).

## Architecture

- **Vue 3 + Vite** SPA, Composition API with `<script setup>`, vanilla CSS. No router, no Pinia, no TypeScript.
- **Dual-mode** via `isDevMode` ref in `App.vue`. Body gets class `theme-sales` or `theme-dev`; all theming is CSS variable-driven. Content sections toggle with `v-if` — no routing.
- **Custom i18n** in `src/i18n.js` (not vue-i18n). All text in the `messages` object. Use `t('path.to.key')` and `toggleLocale()`. Locale is `'ua'` or `'en'`.
- **SEO** updated dynamically in `App.vue` watcher — title, meta tags, OG/Twitter cards, JSON-LD. Don't add separate SEO tooling.
- **PDF export** via `html2pdf.js` on hidden `<ResumeTemplate />`. Keep the element present in DOM with `display:none`.
- **Assets** use `new URL(path, import.meta.url)` pattern from `src/utils/assets.js`.

## Conventions

- All new text must go in the `messages` object in `src/i18n.js`, accessed via `t()`.
- Component styles: scoped for component-specific rules, `src/styles/main.css` for globals / design tokens.
- `GEMINI.md` is stale and unused by OpenCode — ignore it.
- VSCode extension: `Vue.volar`.
