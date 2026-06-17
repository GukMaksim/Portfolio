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
import { ref } from 'vue'
import { useSeo } from './composables/useSeo'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'
import ResumeTemplate from './components/ResumeTemplate.vue'

const isDevMode = ref(false)

useSeo(isDevMode)
</script>

