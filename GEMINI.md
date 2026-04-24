# GEMINI Context: Portfolio - Maksym Huk

This project is a professional, dual-mode portfolio application for **Maksym Huk**, showcasing expertise in both **IT Sales/Management** and **Frontend Development**.

## Project Overview

- **Purpose**: A personal portfolio that allows visitors to switch between two professional personas: "Manager" (IT Sales) and "Developer" (Frontend).
- **Core Features**:
  - **Dual-Mode Switcher**: Toggles content between Sales (Experience/Tenders) and Development (Projects/Tech Stack).
  - **Internationalization (i18n)**: Supports Ukrainian (UA) and English (EN) via a custom lightweight implementation.
  - **Responsive Design**: Built with modern CSS for cross-device compatibility.
- **Main Technologies**:
  - **Framework**: Vue 3 (Composition API, `<script setup>`).
  - **Build Tool**: Vite.
  - **Styling**: Vanilla CSS (Global styles in `src/styles/main.css`).
  - **i18n**: Custom reactive store in `src/i18n.js`.

## Architecture & Structure

- `src/App.vue`: Root component managing global state (mode and language).
- `src/i18n.js`: Centralized translation store and utilities.
- `src/components/`:
  - `HeroSection.vue`: Visual entry point with mode-specific identity.
  - `SalesTimeline.vue`: Content for the IT Sales persona.
  - `DevProjects.vue`: Content for the Frontend Developer persona.
  - `FooterSection.vue`: Shared contact and background information.
- `public/`: Static assets including icons and favicons.
- `vite.config.js`: Configured with `base: '/Portfolio/'` for GitHub Pages deployment.

## Building and Running

- **Development Server**:
  ```bash
  npm run dev
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

## Development Conventions

- **Component Design**: Prefer SFCs (Single File Components) with `<script setup>`.
- **Internationalization**: All text content must be added to the `messages` object in `src/i18n.js` and accessed via the `t()` helper.
- **Styling**: Use descriptive class names and keep component-specific styles either scoped or within the main CSS file using consistent naming conventions.
- **Mode Switching**: Use the `isDevMode` ref to conditionally render or style components.
- **Deployment**: The project is configured for GitHub Pages (`/Portfolio/` base path). Ensure any new assets or links respect this base path.
