<template>
  <section class="hero" id="hero">
    <div class="hero-half hero-left" :class="{ active: !isDevMode }">
      <div class="hero-content">
        <div class="hero-icon">💼</div>
        <h1 class="hero-name">{{ t('hero.name') }}</h1>
        <p class="hero-title">{{ t('hero.salesTitle') }}</p>
        <p class="hero-tagline">{{ t('hero.salesTagline') }}</p>
      </div>
    </div>

    <!-- Toggle (desktop: absolute center, mobile: between halves) -->
    <div class="toggle-wrap">
      <button class="toggle-btn" @click="$emit('toggle')" :title="isDevMode ? t('hero.toggleToSales') : t('hero.toggleToDev')">
        <span class="toggle-icon">{{ isDevMode ? '💼' : '💻' }}</span>
      </button>
      <span class="toggle-label">{{ isDevMode ? t('hero.toggleToSales') : t('hero.toggleToDev') }}</span>
    </div>

    <div class="hero-half hero-right" :class="{ active: isDevMode }">
      <div class="hero-content">
        <div class="hero-icon">💻</div>
        <h1 class="hero-name">{{ t('hero.name') }}</h1>
        <p class="hero-title">{{ t('hero.devTitle') }}</p>
        <p class="hero-tagline">{{ t('hero.devTagline') }}</p>
      </div>
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
