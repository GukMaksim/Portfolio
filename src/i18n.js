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
          company: 'Integrity Systems - (ІТ)',
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
          company: 'AM Integrator Group - (ІТ)',
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
          company: 'Bakotech - (ІТ)',
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
          company: 'Піцерія-бар «Da Favola» - (Готельно-ресторанний бізнес)',
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
          company: 'Комунальна служба перевезень ВО КМДА - (Державні організації)',
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
          company: 'Fozzy Group - (Готельно-ресторанний бізнес)',
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
          title: 'Faina Pich',
          tech: 'Vue.js / Node.js',
          image: 'test_image.jpg',
          description: 'Повноцінний застосунок (PWA-ready): Frontend: Vue 3 + Vite + Pinia + Axios, Backend: Node.js + Express + Mongoose + Cloudinary',
          demoLink: 'https://faina-pich.vercel.app/',          
        },
        {
          title: 'FKS',
          tech: 'JavaScript / HTML / CSS',
          image: 'project_FKS.jpg',
          description: 'Вебсайт-візитівка компанії, що займається продажем каменю та виробів з нього',
          demoLink: 'https://gukmaksim.github.io/FKS_Vite/',
          githubLink: 'https://github.com/GukMaksim/FKS_Vite',
        },
        {
          title: 'Лендінг ІТ компанії',
          tech: 'JavaScript / HTML / SCSS',
          image: 'project_ITcompany.jpg',
          description: 'Повністю функціональний та адаптивний сайт-візитівка IT компанії. Використані технології: Gulp, Webpack, SCSS, Javascript.',
          demoLink: 'https://gukmaksim.github.io/IT-Mod_site/',
          githubLink: 'https://github.com/GukMaksim/IT-MOd',
        },
        {
          title: 'Будівельна компанія',
          tech: 'Vue.js',
          image: 'test_image.jpg',
          description: 'Сайт будівельної компанії з каталогом проєктів, галереєю та формою зворотного зв\'язку.',
          demoLink: '#',
          githubLink: '#',
        },
      ],
    },
    footer: {
      educationTitle: 'Освіта',
      education: [
        {edu: '1999 - 2004 НТУУ «КПІ» — Радіоелектроніка (Конструювання та виробництво електрообчислювальної апаратури), Магістр'},
        {edu: '2022 - 2023 DAN.IT Education — Frontend Developer', certificate: 'https://certificates.dan-it.com.ua/certificates/frontend/maksym-huk'},
      ],
      languagesTitle: 'Мови',
      languages: [
        { lang: 'Українська', level: 'Вільно' },
        { lang: 'English', level: 'Pre-Intermediate' },
      ],
      contactsTitle: 'Контакти',
      rights: '© 2026 Максим Гук. Усі права захищені.',
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
          company: 'Integrity Systems - (IT)',
          role: 'Corporate Account Manager',
          period: '2015 — Present',
          logo: 'logo_IS.jpg',
          description: 'Selling comprehensive IT solutions for the corporate and public sectors. Working with tenders, B2B sales and strategic partners.',
          responsibilities: [
            'Customer search and partner network development',
            'Maintaining long-term relationships with customers',
            'Participation in tenders, preparation of tender documentation',
            'Preparation of commercial offers and conclusion of agreements',
            'Preparation and conclusion of contracts, preparation and control of primary documentation in projects',
            'Support and control of project implementation from identifying the need to shipment and payment',
            'Participation in marketing events for customers'
          ],
        },
        {
          company: 'AM Integrator Group - (IT)',
          role: 'Corporate Sales Manager',
          period: '2012 — 2015',
          logo: 'logo_AMI.png',
          description: 'Development of the client base, negotiations and conclusion of contracts in the field of system integration.',
          responsibilities: [
            'Sales of complex IT projects',
            'Participation in tenders, preparation of tender proposals',
            'Building and developing a partner network',
            'Negotiations and conclusion of contracts',
            'Support and control of project implementation'
          ],
        },
        {
          company: 'Bakotech - (IT)',
          role: 'Software Sales and Licensing Specialist',
          period: '2011 — 2012',
          logo: 'logo_Bakotech.png',
          description: 'Key account management, development of the partner network of the IT solutions distributor.',
          responsibilities: [
            'Support and development of the partner network',
            'Sale of licensed software',
            'Consultative support for partners on software licensing',
          ],
        },
        {
          company: 'Da Favola - (Restaurant business)',
          role: 'Director',
          period: '2010 — 2011',
          logo: 'logo_no-logo.png',
          description: 'Operational management of the establishment, covering financial planning, work with suppliers, control of service standards and administration of personnel and technical processes',
          responsibilities: [
            'Ensuring stable operation of equipment and software',
            'Recruitment of staff',
            'Timekeeping and bonus calculation based on work results',
            'Quality control of guest service and department operations',
            'Work with suppliers and control of product quality',
            'Control of financial performance of the establishment',
            'Development of employee standards and operational reporting',
            'Budget planning for the purchase of goods and inventory',
            'Organization and control of personnel work'
          ],
        },
        {
          company: 'Communal Transport Service of Kyiv City State Administration - (State organizations)',
          role: 'Specialist of the 1st category of the Department of Transport Route Infrastructure Development',
          period: '2009 — 2009',
          logo: 'logo_KMDA.png',
          description: 'Ensuring the IT infrastructure of the department, development and administration of the Main Department website, as well as technical support and implementation of the electronic document management system',
          responsibilities: [
            'Development of technical specifications, implementation and technical support of the electronic document management system',
            'Ensuring the operability of computer equipment',
            'Development and implementation of the website of the Main Department of Transport of Kyiv'
          ],
        },
        {
          company: 'Fozzy Group - (Restaurant business)',
          role: 'Head of IT Operations Department, Restaurants Business',
          period: '2005 — 2009',
          logo: 'logo_Fozzy.png',
          description: '',
          responsibilities: [
            'Software and technical support of computer equipment, communication channels and organization of information flows of sales departments of a restaurant chain',
            'Information support of chain restaurants',
            'Operational analysis of the company\'s trading activities',
            'Budget planning for the purchase and modernization of computer equipment for employees',
            'Development of IT standards for employee work and operational reporting',
            'Maintaining technical documentation, preparing and creating reports on trading activities based on data sampling from the database',
            'Information and technical support of users'
          ],
        },
      ],
      achievements: [
        { value: '50+', label: 'Successful Tenders' },
        { value: '10+', label: 'Years in B2B Sales' },
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
          image: 'test_image.jpg',
          description: 'Full-featured e-commerce store with cart, product filtering, and responsive design.',
          demoLink: '#',
          githubLink: '#',
        },
        {
          title: 'IT-Mod',
          tech: 'Gulp / SCSS',
          image: 'test_image.jpg',
          description: 'Corporate website with automated build pipeline, image optimization, and code minification.',
          demoLink: '#',
          githubLink: '#',
        },
        {
          title: 'Cards SPA',
          tech: 'JavaScript',
          image: 'test_image.jpg',
          description: 'Single-page application for card management — dynamic loading, search, and data filtering.',
          demoLink: '#',
          githubLink: '#',
        },
        {
          title: 'Construction Co.',
          tech: 'Vue.js',
          image: 'test_image.jpg',
          description: 'Construction company website with project catalog, gallery, and contact form.',
          demoLink: '#',
          githubLink: '#',
        },
      ],
    },
    footer: {
      educationTitle: 'Education',
      education: [
        {edu: '1999 - 2004 NTUU "KPI" — Radioelectronics (Design and production of electronic computing equipment), Master'},
        {edu: '2022 - 2023 DAN.IT Education — Frontend Developer', certificate: 'https://certificates.dan-it.com.ua/certificates/frontend/maksym-huk'},
      ],
      languagesTitle: 'Languages',
      languages: [
        { lang: 'Ukrainian', level: 'Fluent' },
        { lang: 'English', level: 'Pre-Intermediate' },
      ],
      contactsTitle: 'Contacts',
      rights: '© 2026 Maksym Huk. All rights reserved.',
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
