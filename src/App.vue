<template>
  <div>
    <HeaderSection v-model:isDevMode="isDevMode" />

    <HeroSection v-model:isDevMode="isDevMode" />

    <!-- Content: Sales or Dev -->
    <Transition name="fade" mode="out-in">
      <div v-if="!isDevMode" key="sales">
        <SalesTimeline />
      </div>
      <div v-else key="dev">
        <DevProjects />
      </div>
    </Transition>

    <FooterSection />

    <!-- Hidden Resume Template for Print/PDF -->
    <ResumeTemplate :isDevMode="isDevMode" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { t, locale } from './i18n'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'
import ResumeTemplate from './components/ResumeTemplate.vue'

const isDevMode = ref(false)

// Dynamic theme and SEO management
watch([isDevMode, locale], () => {
  // Update Theme
  const themeClass = isDevMode.value ? 'theme-dev' : 'theme-sales'
  document.body.className = themeClass
  
  // Update Lang
  document.documentElement.lang = locale.value

  // SEO: Title & Description
  const title = isDevMode.value ? t('seo.devTitle') : t('seo.salesTitle')
  const desc = isDevMode.value ? t('seo.devDesc') : t('seo.salesDesc')
  
  document.title = title
  document.getElementById('meta-title').innerText = title
  document.getElementById('meta-desc').setAttribute('content', desc)
  
  // SEO: OG & Twitter
  document.getElementById('og-title').setAttribute('content', title)
  document.getElementById('og-desc').setAttribute('content', desc)
  document.getElementById('tw-title').setAttribute('content', title)
  document.getElementById('tw-desc').setAttribute('content', desc)

  // SEO: Structured Data (JSON-LD)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": t('hero.name'),
    "jobTitle": isDevMode.value ? t('hero.devTitle') : t('hero.salesTitle'),
    "url": "https://gukmaksim.github.io/Portfolio/",
    "sameAs": [
      "https://github.com/GukMaksim"
    ],
    "description": desc
  }
  document.getElementById('ld-json-person').textContent = JSON.stringify(personSchema)
}, { immediate: true })

onMounted(() => {
  // Ensure theme is set correctly after mount if needed, 
  // though watcher with immediate: true handles it.
})
</script>

<style scoped>
/* App-specific global layout adjustments if needed, 
   otherwise keep empty or for very specific root styles */
</style>
