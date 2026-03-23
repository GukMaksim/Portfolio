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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'

const isDevMode = ref(false)

// Dynamic theme management on the body element
watch(isDevMode, (val) => {
  const themeClass = val ? 'theme-dev' : 'theme-sales'
  document.body.className = themeClass
}, { immediate: true })
</script>

<style scoped>
/* App-specific global layout adjustments if needed, 
   otherwise keep empty or for very specific root styles */
</style>
