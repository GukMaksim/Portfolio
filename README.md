# Portfolio - Maksym Huk

A professional, dual-mode portfolio application showcasing expertise in both **IT Sales/Management** and **Frontend Development**.

## 🚀 Project Overview

This project is a personal portfolio for **Maksym Huk**, designed to present a comprehensive view of a career spanning two distinct but complementary fields. Visitors can seamlessly toggle between two professional personas to see relevant experience, projects, and skills.

### Key Features

-   **Dual-Mode Switcher**: Effortlessly switch between "Manager" (IT Sales) and "Developer" (Frontend) views.
-   **Internationalization (i18n)**: Full support for Ukrainian (UA) and English (EN) via a custom lightweight implementation.
-   **Responsive Design**: Modern, mobile-first UI built with vanilla CSS.
-   **Interactive Timeline**: Visual representation of sales experience and tender achievements.
-   **Project Showcase**: Categorized list of development projects with tech stack details.
-   **PDF Resume Export**: Built-in functionality to download a professional resume.

## 🛠 Tech Stack

-   **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: Vanilla CSS (Global & Scoped)
-   **Utilities**: `html2pdf.js` for resume generation.

## 📂 Project Structure

```text
src/
├── App.vue             # Root component managing global state (mode and language)
├── main.js             # Application entry point
├── i18n.js             # Centralized translation store and utilities
├── components/         # Reusable Vue components
│   ├── HeroSection.vue     # Mode-specific identity and intro
│   ├── SalesTimeline.vue   # IT Sales experience and achievements
│   ├── DevProjects.vue     # Frontend Developer projects and stack
│   ├── ResumeTemplate.vue  # Template for PDF export
│   └── FooterSection.vue   # Shared contact and background info
├── styles/
│   └── main.css        # Global styles and design tokens
└── assets/             # Project-specific images and logos
```

## 🏃 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (Latest LTS recommended)
-   `npm` or `yarn`

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/huk-maksym/Portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Portfolio
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production-ready build:
```bash
npm run build
```

## 🌍 Internationalization

The app uses a custom i18n implementation located in `src/i18n.js`. It provides a reactive `locale` state and a `t()` helper function to access translated messages. Content is managed in the `messages` object, ensuring easy maintenance for both Ukrainian and English versions.

## 🌓 Dual-Mode Identity

The core of this portfolio is the `isDevMode` state.
-   **Manager Mode**: Focuses on B2B sales, tender management, business development, and IT infrastructure projects.
-   **Developer Mode**: Highlights frontend skills (Vue, JS, CSS), web development projects, and technical problem-solving.

## 🚢 Deployment

The project is configured for deployment on **GitHub Pages**. The `vite.config.js` includes the `base: '/Portfolio/'` setting to ensure all assets are correctly resolved when hosted in a subdirectory.
