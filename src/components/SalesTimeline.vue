<template>
  <section class="section" id="sales-experience">
    <div class="container">
      <h2 class="section-title">{{ t('sales.sectionTitle') }}</h2>

      <div class="timeline" :key="'timeline-' + locale">
        <div
          v-for="(item, index) in t('sales.timeline')"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-dot"></div>
          <div
            class="timeline-card accordion-item"
            :class="{ active: activeIndex === index }"
            @click="toggleAccordion(index)"
          >
            <div class="accordion-header">
              <div class="accordion-header-main">
                <div v-if="item.logo" class="timeline-logo">
                  <img :src="getLogoUrl(item.logo)" :alt="item.company" />
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

            <div class="accordion-content">
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
  </section>

  <section class="section section-alt" id="sales-achievements">
    <div class="container">
      <h2 class="section-title" style="text-align: center;">{{ t('sales.achievementsTitle') }}</h2>
      <div style="height: 16px;"></div>

      <div class="achievements" :key="'ach-' + locale">
        <div
          v-for="(item, index) in t('sales.achievements')"
          :key="index"
          class="achievement-card"
        >
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

const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const getLogoUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<style scoped>
/* ============================================
   SALES — TIMELINE
   ============================================ */
.timeline {
	position: relative;
	padding-left: 40px;
	max-width: 800px;
	margin: 0 auto;
}

.timeline::before {
	content: '';
	position: absolute;
	left: 15px;
	top: 0;
	bottom: 0;
	width: 2px;
	background: var(--timeline-line);
	transition: background var(--transition);
}

.timeline-item {
	position: relative;
	padding-bottom: 48px;
	opacity: 0;
	transform: translateX(-20px);
	animation: slideInTimeline 0.6s ease forwards;
}

.timeline-item:nth-child(1) {
	animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
	animation-delay: 0.3s;
}
.timeline-item:nth-child(3) {
	animation-delay: 0.5s;
}

@keyframes slideInTimeline {
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.timeline-dot {
	position: absolute;
	left: -33px;
	top: 6px;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: var(--timeline-dot);
	border: 3px solid var(--bg-primary);
	box-shadow: 0 0 0 3px var(--accent-glow);
	transition:
		background var(--transition),
		border-color var(--transition);
}

.timeline-card {
	background: var(--card-bg);
	border: 1px solid var(--card-border);
	border-radius: var(--radius);
	padding: 0;
	box-shadow: var(--card-shadow);
	transition: all var(--transition);
	cursor: pointer;
	overflow: hidden;
}

.timeline-card:hover {
	box-shadow: var(--card-shadow-hover);
	transform: translateY(-2px);
}

.accordion-header {
	padding: 28px 32px;
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
	width: 120px;
	height: 60px;
	flex-shrink: 0;
	border-radius: var(--radius-sm);
	overflow: hidden;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--card-border);
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
	color: var(--accent);
	transition: transform 0.3s ease;
	margin-left: 20px;
}

.timeline-card.active .accordion-icon {
	transform: rotate(180deg);
}

.accordion-content {
	max-height: 0;
	padding: 0 32px;
	opacity: 0;
	visibility: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-card.active .accordion-content {
	max-height: 1000px;
	padding-bottom: 28px;
	opacity: 1;
	visibility: visible;
}

.timeline-period {
	font-size: 0.8rem;
	font-weight: 600;
	color: var(--accent);
	margin-bottom: 6px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	font-family: var(--font-mono);
}

.timeline-company {
	font-size: 1.3rem;
	font-weight: 700;
	color: var(--text-primary);
	margin-bottom: 4px;
	transition: color var(--transition);
}

.timeline-role {
	font-size: 0.95rem;
	color: var(--text-secondary);
	margin-bottom: 0;
	font-weight: 500;
	transition: color var(--transition);
}

.timeline-card.active .timeline-role {
	margin-bottom: 12px;
}

.timeline-desc {
	font-size: 0.9rem;
	color: var(--text-muted);
	line-height: 1.7;
	transition: color var(--transition);
}

.timeline-responsibilities {
	margin-top: 12px;
	padding-left: 0;
}

.timeline-responsibilities li {
	font-size: 0.85rem;
	color: var(--text-secondary);
	margin-bottom: 6px;
	position: relative;
	padding-left: 18px;
	line-height: 1.5;
	transition: color var(--transition);
}

.timeline-responsibilities li::before {
	content: '•';
	position: absolute;
	left: 0;
	color: var(--accent);
	font-weight: bold;
}

/* ============================================
   SALES — ACHIEVEMENTS GRID
   ============================================ */
.achievements {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 24px;
	max-width: 900px;
	margin: 0 auto;
}

.achievement-card {
	background: var(--card-bg);
	border: 1px solid var(--card-border);
	border-radius: var(--radius);
	padding: 32px 24px;
	text-align: center;
	box-shadow: var(--card-shadow);
	transition: all var(--transition);
	position: relative;
	overflow: hidden;
}

.achievement-card::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 3px;
	background: linear-gradient(90deg, var(--accent), var(--accent-hover));
}

.achievement-card:hover {
	transform: translateY(-4px);
	box-shadow: var(--card-shadow-hover);
}

.achievement-value {
	font-size: 2.4rem;
	font-weight: 800;
	color: var(--accent);
	margin-bottom: 8px;
	font-family: var(--font-heading);
	transition: color var(--transition);
}

.achievement-label {
	font-size: 0.9rem;
	color: var(--text-secondary);
	font-weight: 500;
	transition: color var(--transition);
}

@media (max-width: 768px) {
	.timeline {
		padding-left: 30px;
	}

	.timeline::before {
		left: 10px;
	}

	.timeline-dot {
		left: -27px;
	}

	.timeline-card {
		padding: 20px;
	}

	.achievements {
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
}

@media (max-width: 480px) {
	.achievements {
		grid-template-columns: 1fr 1fr;
	}

	.achievement-card {
		padding: 20px 16px;
	}

	.achievement-value {
		font-size: 1.8rem;
	}
}
</style>
