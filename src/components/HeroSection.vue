<template>
  <section class="hero" id="hero">
    <!-- Sales Side -->
    <div 
      class="hero-half hero-left" 
      :class="{ active: !isDevMode, inactive: isDevMode }"
      @click="setMode(false)"
    >
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <div class="hero-visual">
          <div class="hero-photo-frame">
            <img :src="getAssetUrl('photo_manager.png')" alt="Sales manager" class="hero-photo">
          </div>
          <div class="hero-icon-badge">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-name">{{ t('hero.name') }}</h1>
          <p class="hero-role">{{ t('hero.salesTitle') }}</p>
          <p class="hero-tagline">{{ t('hero.salesTagline') }}</p>
          
          <button class="hero-cta" v-if="isDevMode">
            {{ t('hero.toggleToSales') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Dev Side -->
    <div 
      class="hero-half hero-right" 
      :class="{ active: isDevMode, inactive: !isDevMode }"
      @click="setMode(true)"
    >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-visual">
          <div class="hero-photo-frame">
            <img :src="getAssetUrl('photo_developer.png')" alt="Developer" class="hero-photo">
          </div>
          <div class="hero-icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
        </div>

        <div class="hero-text">
          <h1 class="hero-name">{{ t('hero.name') }}</h1>
          <p class="hero-role">{{ t('hero.devTitle') }}</p>
          <p class="hero-tagline">{{ t('hero.devTagline') }}</p>

          <button class="hero-cta" v-if="!isDevMode">
             {{ t('hero.toggleToDev') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
import { getAssetUrl } from '../utils/assets.js'

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
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  overflow: hidden;
  background: #000;
  margin-top: 0; /* Header is fixed/transparent */
}

.hero-half {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
  cursor: pointer;
}

/* Backgrounds */
.hero-left {
  background: var(--hero-sales-bg);
  color: #0f172a;
  z-index: 1;
}

.hero-right {
  background: var(--hero-dev-bg);
  color: #ffffff;
  z-index: 0;
}

/* Diagonal Split */
.hero-left::after {
  content: '';
  position: absolute;
  top: 0;
  right: -80px;
  width: 160px;
  height: 100%;
  background: inherit;
  transform: skewX(-12deg);
  z-index: 2;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.15);
  pointer-events: none; /* Let clicks pass through edge */
}

/* States */
.hero-half.active {
  flex: 2;
  cursor: default;
}

.hero-half.inactive {
  flex: 0.8;
  filter: grayscale(0.8) brightness(0.9);
}

.hero-half.inactive:hover {
  flex: 1;
  filter: grayscale(0) brightness(0.95);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.hero-half.inactive .hero-overlay {
  opacity: 1;
}

/* Content Layout */
.hero-content {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  padding: 0 20px;
  transition: transform 0.6s ease;
}

/* Visuals (Photo + Icon) */
.hero-visual {
  position: relative;
  margin-bottom: 32px;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-half.active .hero-visual {
  transform: scale(1);
}

.hero-half.inactive .hero-visual {
  transform: scale(0.8);
}

.hero-photo-frame {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255,255,255,0.2);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.hero-icon-badge {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 48px;
  height: 48px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border: 2px solid #fff;
}

:global(.theme-dev) .hero-icon-badge {
  color: #000;
  border-color: #111827;
}

/* Typography */
.hero-text {
  opacity: 0;
  transform: translateY(20px);
  animation: heroTextFade 0.8s ease forwards 0.2s;
}

@keyframes heroTextFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 8px;
  color: inherit;
}

.hero-role {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-tagline {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto 24px;
}

/* CTA Button for Inactive State */
.hero-cta {
  padding: 10px 24px;
  border-radius: 999px;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

.hero-half.inactive:hover .hero-cta {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
  
  .hero-left::after {
    display: none;
  }
  
  .hero-half {
    flex: 0 0 100px; /* Collapsed state height */
    min-height: 100px;
    padding: 20px;
    align-items: flex-start;
    overflow: hidden;
  }
  
  .hero-half.active {
    flex: 1; /* Expand to fill */
    min-height: 60vh;
    align-items: center;
    justify-content: center;
  }
  
  .hero-half.inactive {
    cursor: pointer;
  }
  
  .hero-half.inactive .hero-visual,
  .hero-half.inactive .hero-tagline,
  .hero-half.inactive .hero-cta {
    display: none;
  }
  
  .hero-half.inactive .hero-content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: none;
  }
  
  .hero-half.inactive .hero-text {
    opacity: 1;
    transform: none;
    animation: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .hero-half.inactive .hero-name {
    font-size: 1.2rem;
    margin: 0;
  }
  
  .hero-half.inactive .hero-role {
    font-size: 0.9rem;
    margin: 0;
  }
}
</style>
