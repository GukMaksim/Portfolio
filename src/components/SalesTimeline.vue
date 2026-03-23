<template>
  <section class="section" id="sales-experience">
    <div class="container">
      <h2 class="section-title">{{ t('sales.sectionTitle') }}</h2>

      <div class="timeline" :key="'timeline-' + locale">
        <div v-for="(item, index) in t('sales.timeline')" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div 
            class="timeline-card accordion-item" 
            :class="{ active: activeIndex === index }"
            @click="toggleAccordion(index)"
            @keydown.enter="toggleAccordion(index)"
            role="button"
            :aria-expanded="activeIndex === index"
            tabindex="0"
          >
            <div class="accordion-header">
              <div class="accordion-header-main">
                <div v-if="item.logo" class="timeline-logo">
                  <img :src="getAssetUrl(item.logo)" :alt="item.company" loading="lazy" />
                </div>
                <div class="timeline-info">
                  <div class="timeline-period">{{ item.period }}</div>
                  <h3 class="timeline-company">{{ item.company }}</h3>
                  <p class="timeline-role">{{ item.role }}</p>
                </div>
              </div>
              <div class="accordion-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>

            <div class="accordion-content" :style="{ maxHeight: activeIndex === index ? '1000px' : '0' }">
              <div class="accordion-inner">
                <p class="timeline-desc">{{ item.description }}</p>
                <ul v-if="item.responsibilities" class="timeline-responsibilities">
                  <li v-for="(resp, i) in item.responsibilities" :key="i">
                    {{ resp }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="sales-achievements">
    <div class="container">
      <h2 class="section-title" style="text-align: center;">{{ t('sales.achievementsTitle') }}</h2>
      <div style="height: 32px;"></div>

      <div class="achievements" :key="'ach-' + locale">
        <div v-for="(item, index) in t('sales.achievements')" :key="index" class="achievement-card">
          <div class="achievement-value">{{ item.value }}</div>
          <div class="achievement-label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { t, locale } from '../i18n.js'
import { getAssetUrl } from '../utils/assets.js'

const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* ============================================
   SALES — TIMELINE
   ============================================ */
.timeline {
  position: relative;
  padding-left: 48px;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--timeline-line);
  opacity: 0.5;
}

.timeline-item {
  position: relative;
  padding-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideInTimeline 0.6s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInTimeline {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-dot {
  position: absolute;
  left: -37px;
  top: 24px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 4px solid var(--timeline-dot);
  box-shadow: 0 0 0 4px var(--bg-primary); 
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-card.active ~ .timeline-dot,
.timeline-card:hover ~ .timeline-dot {
  transform: scale(1.2);
  border-color: var(--accent);
}

.timeline-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.timeline-card:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
  border-color: var(--accent-light);
}

.timeline-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.accordion-header {
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-header-main {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.timeline-logo {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--card-border);
  padding: 8px;
}

.timeline-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timeline-info {
  flex: 1;
}

.accordion-icon {
  color: var(--text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-tertiary);
}

.timeline-card:hover .accordion-icon {
  color: var(--accent);
  background: var(--accent-light);
}

.timeline-card.active .accordion-icon {
  transform: rotate(180deg);
  background: var(--accent);
  color: #fff;
}

/* Accordion Content */
.accordion-content {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-inner {
  padding: 0 24px 24px;
  border-top: 1px solid var(--bg-tertiary);
  margin-top: -8px; 
  padding-top: 24px;
}

.timeline-period {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--font-mono);
}

.timeline-company {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.2;
}

.timeline-role {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.timeline-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.timeline-responsibilities {
  padding-left: 0;
}

.timeline-responsibilities li {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
  line-height: 1.5;
}

.timeline-responsibilities li::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

/* ============================================
   SALES — ACHIEVEMENTS GRID
   ============================================ */
.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.achievement-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 40px 24px;
  text-align: center;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--accent-light);
}

.achievement-value {
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 8px;
  font-family: var(--font-display);
  line-height: 1;
}

.achievement-label {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 32px;
  }

  .timeline::before {
    left: 10px;
  }

  .timeline-dot {
    left: -29px;
    top: 20px;
    width: 14px;
    height: 14px;
  }

  .accordion-header {
    padding: 16px;
  }

  .accordion-header-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .timeline-logo {
    width: 60px;
    height: 60px;
  }

  .achievements {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .achievements {
    grid-template-columns: 1fr;
  }
  
  .achievement-value {
    font-size: 2.5rem;
  }
}
</style>
