import { ref, computed } from 'vue'

export const locale = ref('ua')

const messages = {
  ua: {
    nav: {
      manager: 'Менеджер',
      developer: 'Розробник',
    },
    hero: {
      name: 'Максим Гук',
      salesTitle: 'Sales Manager',
      devTitle: 'Frontend Developer',
      salesTagline: 'B2B продажі • Тендери • Управління проєктами',
      devTagline: 'Vue.js • React • Node.js • Сучасний Web',
      toggleToSales: 'Режим менеджера',
      toggleToDev: 'Режим розробника',
    },
    sales: {
      sectionTitle: 'Професійний досвід',
      achievementsTitle: 'Ключові досягнення',
      timeline: [
        {
          company: 'Integrity Systems',
          role: 'Sales Manager / IT Sales',
          period: '2016 — дотепер',
          description: 'Продаж комплексних ІТ-рішень для корпоративного сектору. Робота з тендерами, B2B-продажами та стратегічними партнерами.',
        },
        {
          company: 'АМ Інтегратор Груп',
          role: 'Менеджер з продажу',
          period: '2014 — 2016',
          description: 'Розвиток клієнтської бази, ведення переговорів та укладання контрактів у сфері системної інтеграції.',
        },
        {
          company: 'Bakotech',
          role: 'Account Manager',
          period: '2012 — 2014',
          description: 'Управління ключовими акаунтами, розвиток партнерської мережі дистриб\'ютора ІТ-рішень.',
        },
      ],
      achievements: [
        { value: '50+', label: 'Успішних тендерів' },
        { value: '8+', label: 'Років у B2B продажах' },
        { value: '5', label: 'Ресторанів (Fozzy Group)' },
        { value: '100+', label: 'Корпоративних клієнтів' },
      ],
    },
    dev: {
      sectionTitle: 'Портфоліо проєктів',
      stackTitle: 'Технологічний стек',
      projectsTitle: 'Проєкти',
      projects: [
        {
          title: 'Online Store',
          tech: 'React / Redux',
          description: 'Повнофункціональний інтернет-магазин з кошиком, фільтрацією товарів та адаптивним дизайном.',
        },
        {
          title: 'IT-Mod',
          tech: 'Gulp / SCSS',
          description: 'Корпоративний сайт з автоматизованою збіркою, оптимізацією зображень та мінімізацією коду.',
        },
        {
          title: 'Cards SPA',
          tech: 'JavaScript',
          description: 'Односторінковий додаток для роботи з картками — динамічне завантаження, пошук та фільтрація даних.',
        },
        {
          title: 'Будівельна компанія',
          tech: 'Vue.js',
          description: 'Сайт будівельної компанії з каталогом проєктів, галереєю та формою зворотного зв\'язку.',
        },
      ],
    },
    footer: {
      educationTitle: 'Освіта',
      education: 'НТУУ «КПІ» — Радіоелектроніка',
      languagesTitle: 'Мови',
      languages: [
        { lang: 'Українська', level: 'Вільно' },
        { lang: 'English', level: 'Pre-Intermediate' },
      ],
      contactsTitle: 'Контакти',
      rights: '© 2024 Максим Гук. Усі права захищені.',
    },
  },
  en: {
    nav: {
      manager: 'Manager',
      developer: 'Developer',
    },
    hero: {
      name: 'Maksym Huk',
      salesTitle: 'Sales Manager',
      devTitle: 'Frontend Developer',
      salesTagline: 'B2B Sales • Tenders • Project Management',
      devTagline: 'Vue.js • React • Node.js • Modern Web',
      toggleToSales: 'Manager mode',
      toggleToDev: 'Developer mode',
    },
    sales: {
      sectionTitle: 'Professional Experience',
      achievementsTitle: 'Key Achievements',
      timeline: [
        {
          company: 'Integrity Systems',
          role: 'Sales Manager / IT Sales',
          period: '2016 — Present',
          description: 'Sales of complex IT solutions for the corporate sector. Working with tenders, B2B sales, and strategic partners.',
        },
        {
          company: 'AM Integrator Group',
          role: 'Sales Manager',
          period: '2014 — 2016',
          description: 'Client base development, negotiations and contract management in the system integration field.',
        },
        {
          company: 'Bakotech',
          role: 'Account Manager',
          period: '2012 — 2014',
          description: 'Key account management, development of the partner network for an IT solutions distributor.',
        },
      ],
      achievements: [
        { value: '50+', label: 'Successful Tenders' },
        { value: '8+', label: 'Years in B2B Sales' },
        { value: '5', label: 'Restaurants (Fozzy Group)' },
        { value: '100+', label: 'Corporate Clients' },
      ],
    },
    dev: {
      sectionTitle: 'Project Portfolio',
      stackTitle: 'Tech Stack',
      projectsTitle: 'Projects',
      projects: [
        {
          title: 'Online Store',
          tech: 'React / Redux',
          description: 'Full-featured e-commerce store with cart, product filtering, and responsive design.',
        },
        {
          title: 'IT-Mod',
          tech: 'Gulp / SCSS',
          description: 'Corporate website with automated build pipeline, image optimization, and code minification.',
        },
        {
          title: 'Cards SPA',
          tech: 'JavaScript',
          description: 'Single-page application for card management — dynamic loading, search, and data filtering.',
        },
        {
          title: 'Construction Co.',
          tech: 'Vue.js',
          description: 'Construction company website with project catalog, gallery, and contact form.',
        },
      ],
    },
    footer: {
      educationTitle: 'Education',
      education: 'NTUU "KPI" — Radioelectronics',
      languagesTitle: 'Languages',
      languages: [
        { lang: 'Ukrainian', level: 'Fluent' },
        { lang: 'English', level: 'Pre-Intermediate' },
      ],
      contactsTitle: 'Contacts',
      rights: '© 2024 Maksym Huk. All rights reserved.',
    },
  },
}

export function t(key) {
  const keys = key.split('.')
  let result = messages[locale.value]
  for (const k of keys) {
    if (result === undefined) return key
    result = result[k]
  }
  return result !== undefined ? result : key
}

export function toggleLocale() {
  locale.value = locale.value === 'ua' ? 'en' : 'ua'
}
