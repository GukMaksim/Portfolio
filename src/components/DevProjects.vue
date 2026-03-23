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
          role="button"
          tabindex="0"
          @keydown.enter="openModal(project)"
        >
          <div class="project-image-container">
            <img :src="getAssetUrl(project.image)" :alt="project.title" class="project-card-image" loading="lazy" />
            <div class="project-overlay">
              <span class="view-btn">View Details</span>
            </div>
          </div>
          
          <div class="project-card-body">
            <div class="project-card-header">
              <span class="project-card-tech">{{ project.tech }}</span>
              <h3 class="project-card-title">{{ project.title }}</h3>
            </div>
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
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" @click="closeModal" aria-label="Close modal">&times;</button>
          
          <div class="modal-image-wrapper">
            <img :src="getAssetUrl(selectedProject.image)" :alt="selectedProject.title" class="modal-image" />
          </div>
          
          <div class="modal-body">
            <!-- <div class="modal-header">
              <span class="project-card-tech">{{ selectedProject.tech }}</span>
              <h3 class="modal-title">{{ selectedProject.title }}</h3>
            </div> -->
            
            <p class="modal-desc">{{ selectedProject.description }}</p>
            
            <div class="modal-actions">
              <a :href="selectedProject.demoLink" target="_blank" rel="noopener" class="btn btn-primary">
                Live Demo
              </a>
              <a :href="selectedProject.githubLink" target="_blank" rel="noopener" class="btn btn-secondary" v-if="selectedProject.githubLink">
                GitHub Repo
              </a>
              <span class="btn btn-private" v-else>Private Repo</span>
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
import { getAssetUrl } from '../utils/assets.js'

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
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
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
	margin-bottom: 20px;
	justify-content: center;
}

.stack-badge {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 16px;
	width: 100px;
	height: 100px;
	background: var(--bg-secondary);
	color: var(--text-secondary);
	border-radius: var(--radius);
	font-size: 0.8rem;
	font-weight: 600;
	font-family: var(--font-mono);
	border: 1px solid var(--card-border);
	transition: all 0.3s ease;
	cursor: default;
}

.stack-badge:hover {
	transform: translateY(-5px);
	border-color: var(--accent);
	color: var(--accent);
	box-shadow: 0 5px 15px var(--accent-light);
}

.tech-icon {
	width: 36px;
	height: 36px;
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
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 32px;
	max-width: 1200px;
	margin: 0 auto;
}

.project-card {
	background: var(--card-bg);
	border: 1px solid var(--card-border);
	border-radius: var(--radius);
	overflow: hidden;
	box-shadow: var(--card-shadow);
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	opacity: 0;
	transform: translateY(30px);
	animation: fadeUpCard 0.6s ease forwards;
	display: flex;
	flex-direction: column;
  cursor: pointer;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeUpCard {
	to { opacity: 1; transform: translateY(0); }
}

.project-card:hover {
	transform: translateY(-8px);
	box-shadow: var(--card-shadow-hover);
	border-color: var(--accent-light);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--card-border);
}

.project-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .project-card-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-btn {
  background: var(--accent);
  color: #fff;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

:global(.theme-dev) .view-btn {
  color: #000;
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

.project-card-body {
	padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card-header {
  margin-bottom: 12px;
}

.project-card-tech {
	display: inline-block;
	font-size: 0.7rem;
	font-weight: 700;
	color: var(--accent);
	background: var(--accent-light);
	padding: 4px 10px;
	border-radius: 6px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-family: var(--font-mono);
	margin-bottom: 12px;
}

.project-card-title {
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--text-primary);
	line-height: 1.3;
}

.project-card-desc {
	font-size: 0.95rem;
	color: var(--text-secondary);
	line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
.typewriter {
	display: inline;
	border-right: 3px solid var(--accent);
	animation: cursorBlink 1s step-end infinite;
}

@keyframes cursorBlink {
	0%, 100% { border-color: var(--accent); }
	50% { border-color: transparent; }
}

/* ============================================
   MODAL
   ============================================ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.modal-close:hover {
  background: var(--accent);
  color: #fff;
}

:global(.theme-dev) .modal-close:hover {
  color: #000;
}

.modal-image-wrapper {
  width: 100%;
  height: 370px;
  background: #000;
  flex-shrink: 0;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modal-body {
  padding: 32px;
  overflow-y: auto;
}

.modal-header {
  margin-bottom: 24px;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text-primary);
  margin-top: 8px;
}

.modal-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
  font-size: 1.05rem;
}

.modal-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  min-width: 140px;
  text-align: center;
  font-size: 0.9rem;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
}

:global(.theme-dev) .btn-primary {
  color: #000;
}

.btn-primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--accent-light);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--card-border);
  color: var(--text-primary);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.btn-private {
  background: var(--bg-tertiary);
  color: var(--text-muted);
  cursor: not-allowed;
  border: 1px solid var(--card-border);
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-content {
  animation: modalSlideIn 0.3s ease-out;
}

.modal-fade-leave-active .modal-content {
  animation: modalSlideIn 0.3s ease-in reverse;
}

@keyframes modalSlideIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .stack-grid {
    gap: 12px;
  }
  
  .stack-badge {
    width: 80px;
    height: 80px;
    padding: 10px;
    font-size: 0.7rem;
  }
  
  .modal-content {
    max-height: 95vh;
  }
  
  .modal-image-wrapper {
    height: 200px;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
