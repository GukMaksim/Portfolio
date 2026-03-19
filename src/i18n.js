import { ref, computed } from 'vue'

export const locale = ref('ua')

const messages = {
  ua: {
    nav: {
      mode: 'режим',
      manager: 'Менеджер',
      developer: 'Розробник',
    },
    hero: {
      name: 'Максим Гук',
      salesTitle: 'Менеджер з продажу ІТ-рішень',
      devTitle: 'Веб-розробник',
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
          company: 'Integrity Systems, Київ (ІТ)',
          role: 'Менеджер по роботі з корпоративними замовниками',
          period: '2015 — дотепер',
          logo: 'logo_IS.jpg',
          description: 'Продаж комплексних ІТ-рішень для корпоративного та державного сектору. Робота з тендерами, B2B-продажами та стратегічними партнерами.',
          responsibilities: [
            'Пошук замовників та розвиток партнерської мережі',
            'Підтримка довгострокових відносин з замовниками',
            'Участь у тендерах, підготовка тендерної документації',
            'Підготовка комерційних пропозицій та укладення угод',
            'Підготовка та укладення договорів, підготовка та контроль первинної документації у проектах',
            'Супровід да контроль виконання проектів від виявлення потреби до відвантаження та оплати',
            'Участь в проведенні маркетингових заходів для замовників'
          ],
        },
        {
          company: 'AM Integrator Group, Київ (ІТ)',
          role: 'Менеджер з корпоративних продажів',
          period: '2012 — 2015',
          logo: 'logo_AMI.png',
          description: 'Розвиток клієнтської бази, ведення переговорів та укладання контрактів у сфері системної інтеграції.',
          responsibilities: [
            'Продаж комплексних ІТ-проєктів',
            'Участь у тендерах, підготовка тендерних пропозицій',
            'Побудова та розвиток партнерської мережі',
            'Ведення переговорів та укладання договорів',
            'Супровід да контроль виконання проектів'
          ],
        },
        {
          company: 'Bakotech, Київ (ІТ)',
          role: 'Спеціаліст з продажу та ліцензування ПЗ',
          period: '2011 — 2012',
          logo: 'logo_Bakotech.png',
          description: 'Управління ключовими акаунтами, розвиток партнерської мережі дистриб\'ютора ІТ-рішень.',
          responsibilities: [
            'Підтримка та розвиток партнерської мережі',
            'Продаж ліцензійного ПЗ',
            'Консультаційна підтримка партнерів щодо ліцензування ПЗ',
          ],
        },
        {
          company: 'Піцерія-бар «Da Favola», Київ (Готельно-ресторанний бізнес)',
          role: 'Директор',
          period: '2010 — 2011',
          logo: 'logo_no-logo.png',
          description: 'Операційне управління закладом, що охоплює фінансове планування, роботу з постачальниками, контроль стандартів сервісу та адміністрування кадрових і технічних процесів',
          responsibilities: [
            'Забезпечення стабільної роботи техніки та ПЗ',
            'Набір штату працівників',
            'Табелювання та нарахування премій за результатами роботи',
            'Контроль якості обслуговування гостей та роботи підрозділів',
            'Робота з постачальниками та контроль якості продукції',
            'Контроль фінансових показників закладу',
            'Розробка стандартів роботи співробітників та операційної звітності',
            'Планування бюджету із закупівлі товарів та ТМЦ',
            'Організація та контроль роботи персоналу'
          ],
        },
        {
          company: 'Комунальна служба перевезень ВО КМДА, Київ (Державні організації)',
          role: 'Спеціаліст 1 категорії відділу розвитку маршрутної інфраструктури',
          period: '2009 — 2009',
          logo: 'logo_KMDA.png',
          description: 'Забезпечення ІТ-інфраструктури підрозділу, розробка та адміністрування вебсайту Головного управління, а також технічний супровід і впровадження системи електронного документообігу',
          responsibilities: [
            'Розробка ТУ, впровадження та технічна підтримка СЕД',
            'Забезпечення працездатності компютерної техніки',
            'Розробка та впровадження сайту Головного управління транспорту Києва'
          ],
        },
        {
          company: 'Fozzy Group, Київ (Готельно-ресторанний бізнес)',
          role: 'Начальник операційного відділу ІТ, бізнес «Ресторани»',
          period: '2005 — 2009',
          logo: 'logo_Fozzy.png',
          description: '',
          responsibilities: [
            'Програмно-технічне забезпечення працездатності компютерної техніки, каналів звязку та організація інформаційних потоків торгових підрозділів мережі ресторанів',
            'Інформаційна підтримка ресторанів мережі',
            'Оперативний аналіз торгівельну діяльність підприємства',
            'Планування бюджету із закупівлі та модернізації компютерної техніки для співробітників',
            'Розробка ІТ стандартів роботи співробітників та операційної звітності',
            'Ведення технічної документації, підготовка та створення звітності про торговельну діяльність на основі вибірки даних із БД',
            'Інформаційно-технічна підтримка користувачів'
          ],
        },
      ],
      achievements: [
        { value: '50+', label: 'Успішних тендерів' },
        { value: '10+', label: 'Років у B2B продажах' },
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
      mode: 'mode',
      manager: 'Manager',
      developer: 'Developer',
    },
    hero: {
      name: 'Maksym Huk',
      salesTitle: 'IT Sales Manager',
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
          logo: 'logo_IS.jpg',
          description: 'Sales of complex IT solutions for the corporate sector. Working with tenders, B2B sales, and strategic partners.',
          responsibilities: [
            'Customer search and partner network development',
            'Maintaining long-term relationships with customers',
            'Participation in tenders, preparation of tender documentation',
          ],
        },
        {
          company: 'AM Integrator Group',
          role: 'Sales Manager',
          period: '2014 — 2016',
          logo: 'logo_IS.jpg',
          description: 'Client base development, negotiations and contract management in the system integration field.',
          responsibilities: [
            'Sales of complex IT projects',
            'Working with hardware and software manufacturers',
            'Negotiations and contracting',
          ],
        },
        {
          company: 'Bakotech',
          role: 'Account Manager',
          period: '2012 — 2014',
          logo: 'logo_IS.jpg',
          description: 'Key account management, development of the partner network for an IT solutions distributor.',
          responsibilities: [
            'Support and development of the partner network',
            'Working with vendors (F5, Palo Alto, Arista)',
            'Organizing marketing events for partners',
          ],
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
