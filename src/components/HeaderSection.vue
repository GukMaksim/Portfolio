<template>
  <header class="top-header">
    <div class="mode-switch">
      <span class="mode-label">{{ t('nav.mode') }}:</span>
      <div class="lang-toggle">
        <button
          class="lang-btn"
          :class="{ active: !isDevMode }"
          @click="setMode(false)"
        >
          {{ t('nav.manager') }}
        </button>
        <button
          class="lang-btn"
          :class="{ active: isDevMode }"
          @click="setMode(true)"
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
/* ============================================
   TOP HEADER BAR
   ============================================ */
.top-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 24px;
	padding: 12px 32px;
	background: var(--header-bg);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-bottom: 1px solid var(--header-border);
	transition:
		background var(--transition),
		border-color var(--transition);
}

.mode-switch {
	display: flex;
	align-items: center;
	gap: 10px;
}

.mode-label {
	font-size: 12px;
	font-weight: 700;
	font-family: var(--font-secondary);
	color: var(--text-muted);
	text-transform: uppercase;
	letter-spacing: 1px;
}

.lang-toggle {
	display: flex;
	align-items: center;
	gap: 0;
	border-radius: 999px;
	overflow: hidden;
	border: 1.5px solid var(--card-border);
	background: var(--bg-secondary);
	transition:
		border-color var(--transition),
		background var(--transition);
}

.lang-btn {
	padding: 6px 16px;
	font-size: 13px;
	font-weight: 600;
	font-family: var(--font-primary);
	border: none;
	background: transparent;
	color: var(--text-muted);
	cursor: pointer;
	transition: all 0.3s ease;
	letter-spacing: 0.5px;
}

.lang-btn.active {
	background: var(--accent);
	color: #fff;
}

:global(.theme-dev) .lang-btn.active {
	color: #0a0a1a;
}

@media (max-width: 768px) {
	.top-header {
		padding: 10px 16px;
	}
}

@media (max-width: 480px) {
	.mode-label {
		display: none;
	}
}
</style>
