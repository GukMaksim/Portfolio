<template>
  <header class="top-header">
    <div class="header-content">
      <!-- Mode Switcher -->
      <div class="mode-switch-container">
        <span class="mode-label">{{ t('nav.mode') }}</span>
        <div class="segmented-control">
          <button
            class="segment-btn"
            :class="{ active: !isDevMode }"
            @click="setMode(false)"
            :aria-pressed="!isDevMode"
          >
            {{ t('nav.manager') }}
          </button>
          <button
            class="segment-btn"
            :class="{ active: isDevMode }"
            @click="setMode(true)"
            :aria-pressed="isDevMode"
          >
            {{ t('nav.developer') }}
          </button>
          <div class="segment-indicator" :class="{ right: isDevMode }"></div>
        </div>
      </div>

      <!-- Language Toggle -->
      <div class="lang-toggle">
        <button
          class="lang-btn"
          :class="{ active: locale === 'ua' }"
          @click="locale = 'ua'"
          aria-label="Switch to Ukrainian"
        >
          UA
        </button>
        <span class="lang-divider">/</span>
        <button
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          @click="locale = 'en'"
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { t, locale } from '../i18n.js'

const props = defineProps({
  isDevMode: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDevMode'])

const setMode = (val) => {
  if (props.isDevMode !== val) {
    emit('update:isDevMode', val)
  }
}
</script>

<style scoped>
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--header-border);
  transition: background 0.4s ease, border-color 0.4s ease;
}

.header-content {
  width: 100%;
  max-width: var(--container-max);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Mode Switcher */
.mode-switch-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.mode-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  font-family: var(--font-primary);
}

.segmented-control {
  position: relative;
  display: flex;
  background: var(--bg-tertiary);
  padding: 4px;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  overflow: hidden;
}

.segment-btn {
  position: relative;
  z-index: 2;
  flex: 1;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: var(--font-primary);
}

.segment-btn.active {
  color: #fff;
}

/* Theme specific button text colors */
:global(.theme-sales) .segment-btn.active {
  color: #fff;
}
:global(.theme-dev) .segment-btn.active {
  color: #000;
}

.segment-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: calc(50% - 4px);
  background: var(--accent);
  border-radius: 999px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.segment-indicator.right {
  transform: translateX(100%);
}

/* Language Toggle */
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.lang-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-weight: 500;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s ease;
}

.lang-btn:hover,
.lang-btn.active {
  color: var(--accent);
  font-weight: 700;
}

.lang-divider {
  color: var(--card-border);
}

@media (max-width: 768px) {
  .top-header {
    height: 60px;
    padding: 0 16px;
  }
  
  .mode-label {
    display: none;
  }
  
  .segment-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
