<template>
  <div :class="isDevMode ? 'theme-dev' : 'theme-sales'">
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
import { ref } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SalesTimeline from './components/SalesTimeline.vue'
import DevProjects from './components/DevProjects.vue'
import FooterSection from './components/FooterSection.vue'

const isDevMode = ref(false)
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

.theme-dev .lang-btn.active {
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
