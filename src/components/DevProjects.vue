<template>
  <section class="section dev-stack" id="dev-stack">
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
      <h2 class="section-title" style="text-align: center;">
        <span class="typewriter" ref="typewriterEl">{{ t('dev.projectsTitle') }}</span>
      </h2>
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
  }, 80)
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

<style scoped>
/* ============================================
   DEV — TECH STACK
   ============================================ */
.dev-stack {
	background-color: var(--bg-primary);
}

.stack-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	margin-bottom: 60px;
	justify-content: center;
}

.stack-badge {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 20px;
	background: var(--badge-bg);
	color: var(--badge-text);
	border-radius: 999px;
	font-size: 0.9rem;
	font-weight: 600;
	font-family: var(--font-mono);
	border: 1px solid transparent;
	transition: all 0.3s ease;
	cursor: default;
}

:global(.theme-dev) .stack-badge {
	border-color: var(--card-border);
}

.stack-badge:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 15px var(--accent-glow);
}

/* ============================================
   DEV — PROJECT CARDS
   ============================================ */
.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 28px;
	max-width: 1000px;
	margin: 0 auto;
}

.project-card {
	background: var(--card-bg);
	border: 1px solid var(--card-border);
	border-radius: var(--radius);
	padding: 0;
	overflow: hidden;
	box-shadow: var(--card-shadow);
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	opacity: 0;
	transform: translateY(30px);
	animation: fadeUpCard 0.6s ease forwards;
	position: relative;
	font-family: var(--font-mono);
}

.project-card:nth-child(1) {
	animation-delay: 0.1s;
}
.project-card:nth-child(2) {
	animation-delay: 0.25s;
}
.project-card:nth-child(3) {
	animation-delay: 0.4s;
}
.project-card:nth-child(4) {
	animation-delay: 0.55s;
}

@keyframes fadeUpCard {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.project-card:hover {
	transform: translateY(-6px) scale(1.02);
	box-shadow: var(--card-shadow-hover);
	border-color: var(--accent);
}

.project-card-header {
	padding: 28px 28px 0;
}

.project-card-tech {
	display: inline-block;
	font-size: 0.75rem;
	font-weight: 700;
	color: var(--accent);
	background: var(--accent-light);
	padding: 4px 12px;
	border-radius: 999px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: var(--font-mono);
	margin-bottom: 14px;
}

.project-card-title {
	font-size: 1.3rem;
	font-weight: 700;
	color: var(--text-primary);
	margin-bottom: 10px;
	transition: color var(--transition);
}

.project-card-body {
	padding: 0 28px 28px;
}

.project-card-desc {
	font-size: 0.9rem;
	color: var(--text-secondary);
	line-height: 1.7;
	transition: color var(--transition);
}

/* Neon glow on dev cards */
:global(.theme-dev) .project-card::after {
	content: '';
	position: absolute;
	inset: -1px;
	border-radius: var(--radius);
	background: linear-gradient(135deg, transparent 40%, var(--accent-glow) 100%);
	z-index: -1;
	opacity: 0;
	transition: opacity 0.4s ease;
}

:global(.theme-dev) .project-card:hover::after {
	opacity: 1;
}

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
.typewriter {
	display: inline;
	border-right: 5px solid var(--accent);
	animation: cursorBlink 1s step-end infinite;
}

@keyframes cursorBlink {
	0%,
	100% {
		border-color: var(--accent);
	}
	50% {
		border-color: transparent;
	}
}

@media (max-width: 768px) {
	.projects-grid {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>
