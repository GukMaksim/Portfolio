<template>
  <div :class="isDevMode ? 'theme-dev' : 'theme-sales'">
    <HeaderSection v-model:isDevMode="isDevMode" />

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

    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'

const isDevMode = ref(false)

function toggleMode() {
  isDevMode.value = !isDevMode.value
}
</script>
