<template>
  <div :class="isDevMode ? 'theme-dev' : 'theme-sales'">
    <!-- Top Header with Language Toggle -->
    <header class="top-header">
      <div class="lang-toggle">
        <button
          class="lang-btn"
          :class="{ active: locale === 'ua' }"
          @click="locale = 'ua'"
        >
          UA
        </button>
        <button
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          @click="locale = 'en'"
        >
          EN
        </button>
      </div>
    </header>

    <!-- Hero Split Screen -->
    <HeroSection :isDevMode="isDevMode" @toggle="toggleMode" />

    <!-- Content: Sales or Dev -->
    <Transition name="fade" mode="out-in">
      <div v-if="!isDevMode" key="sales">
        <SalesTimeline />
      </div>
      <div v-else key="dev">
        <DevProjects />
      </div>
    </Transition>

    <!-- Shared Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { locale } from './i18n.js'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'

const isDevMode = ref(false)

function toggleMode() {
  isDevMode.value = !isDevMode.value
}
</script>
