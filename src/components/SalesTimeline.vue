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
          <div class="timeline-card">
            <div class="timeline-period">{{ item.period }}</div>
            <h3 class="timeline-company">{{ item.company }}</h3>
            <p class="timeline-role">{{ item.role }}</p>
            <p class="timeline-desc">{{ item.description }}</p>
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
import { t, locale } from '../i18n.js'
</script>
