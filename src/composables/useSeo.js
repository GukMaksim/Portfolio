import { watch } from 'vue'
import { t, locale } from '../i18n'

export function useSeo(isDevMode) {
  watch([isDevMode, locale], () => {
    const themeClass = isDevMode.value ? 'theme-dev' : 'theme-sales'
    document.body.className = themeClass
    document.documentElement.lang = locale.value

    const title = isDevMode.value ? t('seo.devTitle') : t('seo.salesTitle')
    const desc = isDevMode.value ? t('seo.devDesc') : t('seo.salesDesc')

    document.title = title
    document.getElementById('meta-title').innerText = title
    document.getElementById('meta-desc').setAttribute('content', desc)
    document.getElementById('og-title').setAttribute('content', title)
    document.getElementById('og-desc').setAttribute('content', desc)
    document.getElementById('tw-title').setAttribute('content', title)
    document.getElementById('tw-desc').setAttribute('content', desc)

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: t('hero.name'),
      jobTitle: isDevMode.value ? t('hero.devTitle') : t('hero.salesTitle'),
      url: 'https://gukmaksim.github.io/Portfolio/',
      sameAs: ['https://github.com/GukMaksim'],
      description: desc,
    }
    document.getElementById('ld-json-person').textContent =
      JSON.stringify(personSchema)
  }, { immediate: true })
}
