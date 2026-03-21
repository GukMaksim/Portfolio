<template>
  <section class="hero" id="hero">
    <!-- Sales Side -->
    <div 
      class="hero-half hero-left" 
      :class="{ active: !isDevMode }"
      @click="$emit('toggle')"
    >
      <div class="hero-photo-wrapper" v-if="!isDevMode">
        <div class="hero-photo-placeholder">
<img src="../assets/photo_manager.png"" alt="Sales manager">
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
      :class="{ active: isDevMode }"
      @click="$emit('toggle')"
    >
      <div class="hero-photo-wrapper" v-if="isDevMode">
        <div class="hero-photo-placeholder">
          <img src="../assets/photo_developer.png" alt="Developer">
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

<style scoped>
/* ============================================
   HERO SECTION — SPLIT SCREEN
   ============================================ */
.hero {
	position: relative;
	height: 80vh;
	display: flex;
	overflow: hidden;
	background: #000;
}

.hero-half {
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 60px 40px;
	transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
	overflow: hidden;
  	cursor: pointer;
}

/* Base side backgrounds */
.hero-left {
	background: var(--hero-left-bg);
	z-index: 1;
	font-family: var(--font-primary);
}

.hero-right {
	background: var(--hero-right-bg);
	z-index: 0;
	font-family: var(--font-mono);
}

/* Modern Split Divider with constant angle */
.hero-left::after {
	content: '';
	position: absolute;
	top: 0;
	right: -50px;
	width: 100px;
	height: 100%;
	background: inherit;
	transform: skewX(-10deg);
	z-index: 1;
	box-shadow: 10px 0 30px rgba(0, 0, 0, 0.3);
}

/* Active & Clickable States */
.hero-half.active {
	flex: 2.5;
	opacity: 1;
}

.hero-half:not(.active) {
	flex: 0.5;
	/* opacity: 0.4; */
	filter: grayscale(0.5) blur(1.4px);
}

.hero-half:hover {
	opacity: 0.7;
	filter: grayscale(0) blur(0);
}

.hero-half:hover .hero-icon {
	transform: scale(1.2) rotate(10deg);
}

/* Content Layout with Photos */
.hero-half .hero-content {
	position: relative;
	z-index: 5;
	text-align: center;
	transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Photo Placeholders */
.hero-photo-wrapper {
	position: absolute;
	top: calc(50% + 30px);
	transform: translateY(-50%);
	width: 320px;
	height: 420px;
	z-index: 2;
	animation: photoFadeIn 1.2s ease-out forwards;
}

.hero-left .hero-photo-wrapper {
	left: 10%;
}

.hero-right .hero-photo-wrapper {
	right: 10%;
}

@keyframes photoFadeIn {
	from {
		opacity: 0;
		transform: translateY(-40%);
	}
	to {
		opacity: 1;
		transform: translateY(-50%);
	}
}

.hero-photo-placeholder {
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	border-radius: var(--radius);
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.4);
	font-weight: 700;
	font-size: 14px;
	letter-spacing: 2px;
	backdrop-filter: blur(10px);
}

.hero-photo-placeholder img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: var(--radius);
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.hero-icon {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 24px;
	font-size: 32px;
	background: rgba(255, 255, 255, 0.12);
	backdrop-filter: blur(10px);
	border: 1.5px solid rgba(255, 255, 255, 0.2);
	transition: all 0.5s ease;
}

.hero-name {
	font-size: clamp(1.8rem, 3vw, 2.4rem);
	font-weight: 800;
	color: #ffffff;
	margin-bottom: 8px;
	letter-spacing: -0.02em;
}

.hero-title {
	font-size: clamp(1rem, 1.8vw, 1.3rem);
	font-weight: 600;
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 16px;
}

.hero-tagline {
	font-size: clamp(0.8rem, 1.2vw, 0.95rem);
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.6;
}

.hero-half.active .hero-content {
	padding-left: 300px; /* Offset for photo on left active */
}

.hero-right.active .hero-content {
	padding-left: 0;
	padding-right: 300px; /* Offset for photo on right active */
}

/* Responsive adjustment for mobile */
@media (max-width: 1024px) {
	.hero-half.active .hero-content,
	.hero-right.active .hero-content {
		padding: 0;
	}
	.hero-photo-wrapper {
		display: none;
	}
}

@media (max-width: 768px) {
	.hero {
		flex-direction: column;
		height: auto;
		min-height: auto;
	}

	.hero-half {
		min-height: 50vh;
		flex: 1 !important;
		opacity: 1 !important;
		filter: none !important;
	}

	.hero-left::after {
		display: none;
	}

	.hero-half.active,
	.hero-half:not(.active) {
		flex: 1;
		opacity: 1;
	}

	.hero-half:not(.active) {
		display: none;
	}
}

@media (max-width: 480px) {
	.hero-content {
		padding: 0 8px;
	}

	.hero-name {
		font-size: 1.5rem;
	}

	.hero-title {
		font-size: 0.95rem;
	}
}
</style>
