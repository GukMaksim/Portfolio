<template>
  <section class="section" id="dev-stack">
    <div class="container">
      <h2 class="section-title" style="text-align: center;">
        <span class="typewriter" ref="typewriterEl">{{ displayedTitle }}</span>
      </h2>
      <div style="height: 48px;"></div>

      <!-- Tech Stack Badges -->
      <div class="stack-grid">
        <span v-for="tech in techStack" :key="tech" class="stack-badge">
          {{ tech }}
        </span>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="dev-projects">
    <div class="container">
      <h2 class="section-title" style="text-align: center;">{{ t('dev.projectsTitle') }}</h2>
      <div style="height: 48px;"></div>

      <div class="projects-grid" :key="'proj-' + locale">
        <div
          v-for="(project, index) in t('dev.projects')"
          :key="index"
          class="project-card"
        >
          <div class="project-card-header">
            <span class="project-card-tech">{{ project.tech }}</span>
            <h3 class="project-card-title">{{ project.title }}</h3>
          </div>
          <div class="project-card-body">
            <p class="project-card-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { t, locale } from '../i18n.js'

const techStack = ['React', 'Vue.js', 'Node.js', 'MongoDB', 'JavaScript', 'SCSS', 'HTML5', 'CSS3', 'Git']

const displayedTitle = ref('')
const typewriterEl = ref(null)
let typewriterTimer = null

function typewrite(text) {
  displayedTitle.value = ''
  let i = 0
  clearInterval(typewriterTimer)
  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      displayedTitle.value += text[i]
      i++
    } else {
      clearInterval(typewriterTimer)
    }
  }, 60)
}

onMounted(() => {
  typewrite(t('dev.stackTitle'))
})

watch(locale, () => {
  typewrite(t('dev.stackTitle'))
})

onUnmounted(() => {
  clearInterval(typewriterTimer)
})
</script>
