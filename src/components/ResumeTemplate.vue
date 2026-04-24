<template>
  <div class="resume-wrapper" id="resume-template">
    <!-- Resume Header -->
    <header class="resume-header">
      <div class="header-main">
        <h1>{{ t('hero.name') }}</h1>
        <p class="title">{{ t('hero.salesTitle') }} | {{ t('hero.devTitle') }}</p>
      </div>
      <div class="header-contacts">
        <p>+38 067 608-22-62</p>
        <p>maksim.guk@gmail.com</p>
        <p>linkedin.com/in/maksymhuk</p>
        <p>github.com/GukMaksim</p>
      </div>
    </header>

    <div class="resume-body">
      <!-- Main Column -->
      <div class="resume-main">
        <section class="resume-section">
          <h2 class="section-title">{{ isDevMode ? t('dev.sectionTitle') : t('sales.sectionTitle') }}</h2>
          <div class="experience-list">
            <template v-if="!isDevMode">
              <div v-for="(job, idx) in t('sales.timeline')" :key="idx" class="experience-item">
                <div class="experience-header">
                  <h3>{{ job.role }}</h3>
                  <span class="period">{{ job.period }}</span>
                </div>
                <p class="company">{{ job.company }}</p>
                <p class="description">{{ job.description }}</p>
                <ul class="responsibilities">
                  <li v-for="(resp, ridx) in job.responsibilities" :key="ridx">{{ resp }}</li>
                </ul>
              </div>
            </template>
            <template v-else>
              <div v-for="(project, idx) in t('dev.projects')" :key="idx" class="experience-item">
                <div class="experience-header">
                  <h3>{{ project.title }}</h3>
                  <span class="tech-tag">{{ project.tech }}</span>
                </div>
                <p class="description">{{ project.description }}</p>
              </div>
            </template>
          </div>
        </section>
      </div>

      <!-- Sidebar Column -->
      <aside class="resume-sidebar">
        <section class="resume-section" v-if="isDevMode">
          <h2 class="section-title">Tech Stack</h2>
          <div class="sidebar-list">
            <div class="tech-stack-container">
              <span v-for="tech in techStack" :key="tech.name" class="tech-tag-resume">{{ tech.name }}</span>
            </div>
          </div>
        </section>

        <section class="resume-section">
          <h2 class="section-title">{{ t('footer.languagesTitle') }}</h2>
          <div class="sidebar-list">
            <div v-for="(lang, idx) in t('footer.languages')" :key="idx" class="sidebar-item">
              <strong>{{ lang.lang }}</strong>: {{ lang.level }}
            </div>
          </div>
        </section>

        <section class="resume-section">
          <h2 class="section-title">{{ t('footer.educationTitle') }}</h2>
          <div class="sidebar-list">
            <div v-for="(edu, idx) in t('footer.education')" :key="idx" class="sidebar-item">
              {{ edu.edu }}
            </div>
          </div>
        </section>

        <section class="resume-section" v-if="!isDevMode">
          <h2 class="section-title">{{ t('sales.achievementsTitle') }}</h2>
          <div class="sidebar-list">
            <div v-for="(ach, idx) in t('sales.achievements')" :key="idx" class="sidebar-item">
              <strong>{{ ach.value }}</strong> {{ ach.label }}
            </div>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { t } from '../i18n.js'

defineProps({
  isDevMode: {
    type: Boolean,
    required: true
  }
})

const techStack = [
  { name: 'React' },
  { name: 'Vue.js' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'JavaScript' },
  { name: 'SCSS' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Git' }
]
</script>

<style scoped>
.resume-wrapper {
  padding: 20mm; /* Standard resume padding */
  background: white;
  color: #333;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
  width: 210mm;
  min-height: 297mm;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.header-main h1 {
  margin: 0;
  font-size: 24pt;
  font-weight: 800;
  color: #000;
  line-height: 1;
}

.header-main .title {
  margin: 8px 0 0;
  font-size: 13pt;
  color: #444;
  font-weight: 600;
}

.header-contacts {
  text-align: right;
  font-size: 9pt;
  color: #333;
  line-height: 1.3;
}

.resume-body {
  display: grid;
  grid-template-columns: 135mm 45mm; /* Explicit widths for A4 (210 - 40 padding - 10 gap) */
  gap: 10mm;
}

.resume-sidebar {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 12pt;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 15px;
  margin-top: 20px;
}

.experience-item {
  margin-bottom: 20px;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.experience-header h3 {
  margin: 0;
  font-size: 11pt;
  font-weight: 700;
}

.period {
  font-size: 9pt;
  color: #777;
}

.company {
  font-weight: 600;
  font-size: 10pt;
  margin: 2px 0 5px;
  color: #444;
}

.description {
  font-size: 9pt;
  margin-bottom: 8px;
}

.responsibilities {
  margin: 0;
  padding-left: 15px;
  font-size: 9pt;
}

.responsibilities li {
  margin-bottom: 3px;
}

.tech-tag {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 8pt;
  font-weight: 600;
}

.tech-stack-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tech-tag-resume {
  background: #f0f0f0;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 8pt;
  font-weight: 600;
  color: #333;
}

.sidebar-item {
  font-size: 9pt;
  margin-bottom: 10px;
}

/* Hide by default on screen */
@media screen {
  #resume-template {
    display: none;
  }
}

/* Print Specifics */
@media print {
  #resume-template {
    display: block !important;
    padding: 0;
    margin: 0;
    width: 100%;
  }
}
</style>
