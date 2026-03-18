<template>
  <section class="hero" id="hero">
    <!-- Sales Side -->
    <div 
      class="hero-half hero-left" 
      :class="{ active: !isDevMode, clickable: isDevMode }"
      @click="isDevMode && $emit('toggle')"
    >
      <div class="hero-photo-wrapper" v-if="!isDevMode">
        <div class="hero-photo-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="placeholder-svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div class="hero-content">
        <div class="hero-icon">💼</div>
        <h1 class="hero-name">{{ t('hero.name') }}</h1>
        <p class="hero-title">{{ t('hero.salesTitle') }}</p>
        <p class="hero-tagline">{{ t('hero.salesTagline') }}</p>
      </div>
      <!-- <span class="switch-hint" v-if="isDevMode">{{ t('hero.toggleToSales') }}</span> -->
    </div>

    <!-- Dev Side -->
    <div 
      class="hero-half hero-right" 
      :class="{ active: isDevMode, clickable: !isDevMode }"
      @click="!isDevMode && $emit('toggle')"
    >
      <div class="hero-photo-wrapper" v-if="isDevMode">
        <div class="hero-photo-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="placeholder-svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div class="hero-content">
        <div class="hero-icon">💻</div>
        <h1 class="hero-name">{{ t('hero.name') }}</h1>
        <p class="hero-title">{{ t('hero.devTitle') }}</p>
        <p class="hero-tagline">{{ t('hero.devTagline') }}</p>
      </div>
      <!-- <span class="switch-hint" v-if="!isDevMode">{{ t('hero.toggleToDev') }}</span> -->
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'

defineProps({
  isDevMode: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggle'])
</script>
