<template>
  <section class="section dev-stack" id="dev-stack">
    <div class="container">
      <h2 class="section-title" style="text-align: center;">
        <span class="typewriter" ref="typewriterEl">{{ displayedTitle }}</span>
      </h2>
      <div style="height: 48px;"></div>

      <!-- Tech Stack Badges -->
      <div class="stack-grid">
        <div v-for="tech in techStack" :key="tech.name" class="stack-badge">
          <svg class="tech-icon"><use :href="`${iconSprite}#${tech.icon}`"></use></svg>
          <span>{{ tech.name }}</span>
        </div>
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
          @click="openModal(project)"
        >
          <div class="project-card-header">
            <span class="project-card-tech">{{ project.tech }}</span>
            <img :src="getImageUrl(project.image)" :alt="project.title" class="project-card-image" loading="lazy" />
            <h3 class="project-card-title">{{ project.title }}</h3>
          </div>
          <div class="project-card-body">
            <p class="project-card-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Modal -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">&times;</button>
          
          <div class="modal-image-wrapper">
            <img :src="getImageUrl(selectedProject.image)" :alt="selectedProject.title" class="modal-image" />
          </div>
          
          <div class="modal-body">
            <span class="project-card-tech">{{ selectedProject.tech }}</span>
            <h3 class="modal-title">{{ selectedProject.title }}</h3>
            <p class="modal-desc">{{ selectedProject.description }}</p>
            
            <div class="modal-actions">
              <a :href="selectedProject.demoLink" target="_blank" rel="noopener" class="btn btn-primary">
                Demo
              </a>
              <a :href="selectedProject.githubLink" target="_blank" rel="noopener" class="btn btn-secondary" v-if="selectedProject.githubLink">
                GitHub
              </a>
              <p class="btn btn-secondary" v-else>private content</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { t, locale } from '../i18n.js'

const iconSprite = `${import.meta.env.BASE_URL}icons.svg`

const techStack = [
  { name: 'React', icon: 'react-icon' },
  { name: 'Vue.js', icon: 'vue-icon' },
  { name: 'Node.js', icon: 'node-icon' },
  { name: 'MongoDB', icon: 'mongodb-icon' },
  { name: 'JavaScript', icon: 'javascript-icon' },
  { name: 'SCSS', icon: 'scss-icon' },
  { name: 'HTML5', icon: 'html5-icon' },
  { name: 'CSS3', icon: 'css3-icon' },
  { name: 'Git', icon: 'git-icon' }
]

const displayedTitle = ref('')
const typewriterEl = ref(null)
let typewriterTimer = null

// Modal state
const selectedProject = ref(null)

function openModal(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
}

// Helper to resolve image path
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

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
	gap: 20px;
	margin-bottom: 60px;
	justify-content: center;
}

.stack-badge {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 16px;
	width: 110px;
	height: 110px;
	background: var(--badge-bg);
	color: var(--badge-text);
	border-radius: var(--radius);
	font-size: 0.85rem;
	font-weight: 600;
	font-family: var(--font-mono);
	border: 1px solid transparent;
	transition: all 0.3s ease;
	cursor: default;
}

.theme-dev .stack-badge {
	border-color: var(--card-border);
}

.stack-badge:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 20px var(--accent-glow);
	border-color: var(--accent);
}

.tech-icon {
	width: 40px;
	height: 40px;
	fill: currentColor;
	transition: transform 0.3s ease;
}

.stack-badge:hover .tech-icon {
	transform: scale(1.1);
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
  cursor: pointer;
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

.project-card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: top;
  border-radius: var(--radius-sm);
  margin: 14px 0;
  border: 1px solid var(--card-border);
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
.theme-dev .project-card::after {
	content: '';
	position: absolute;
	inset: -1px;
	border-radius: var(--radius);
	background: linear-gradient(135deg, transparent 40%, var(--accent-glow) 100%);
	z-index: -1;
	opacity: 0;
	transition: opacity 0.4s ease;
}

.theme-dev .project-card:hover::after {
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

/* ============================================
   MODAL
   ============================================ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

.modal-content {
  background: #161636;
  border: 1px solid #2a2a5a;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 255, 136, 0.12);
  animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-family: 'Fira Code', monospace;
  color: #e2e8f0;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.modal-close:hover {
  background: #00ff88;
}

.modal-image-wrapper {
  width: 100%;
  height: 320px;
  background: #000;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modal-body {
  padding: 20px;
}

.modal-title {
  font-family: 'Fira Code', monospace;
  font-size: 1.8rem;
  color: #e2e8f0;
  margin-bottom: 16px;
}

.modal-desc {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 32px;
}

.modal-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  flex: 1;
}

.btn-primary {
  background: #00ff88;
  color: #000;
}

.btn-primary:hover {
  background: #00cc6a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 1px solid #00ff88;
  color: #00ff88;
}

.btn-secondary:hover {
  background: rgba(0, 255, 136, 0.08);
  transform: translateY(-2px);
}

@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
	.projects-grid {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>
