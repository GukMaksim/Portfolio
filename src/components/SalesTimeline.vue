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
