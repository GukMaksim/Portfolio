<template>
  <header class="top-header">
    <div class="mode-switch">
      <span class="mode-label">{{ t('nav.mode') }}:</span>
      <div class="lang-toggle">
        <button
          class="lang-btn"
          :class="{ active: !isDevMode }"
          @click="isDevMode = false"
        >
          {{ t('nav.manager') }}
        </button>
        <button
          class="lang-btn"
          :class="{ active: isDevMode }"
          @click="isDevMode = true"
        >
          {{ t('nav.developer') }}
        </button>
      </div>
    </div>

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
</template>

<script setup>
import { t, locale } from '../i18n.js'

const isDevMode = defineModel('isDevMode', { required: true, type: Boolean })
</script>
