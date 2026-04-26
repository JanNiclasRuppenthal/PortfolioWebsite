<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '../constants/portfolioData'
import type { Project } from '../types/index'

const selectedCard = ref<Project | null>(null)

const openImage = (project: Project) => {
  if (!project.imageSrc) return
  selectedCard.value = project
  document.body.style.overflow = 'hidden'
}

const closeImage = () => {
  selectedCard.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="section reveal reveal-delay-1" data-reveal>
    <p class="eyebrow">{{ $t('projectsSubtitle') }}</p>
    <h2>{{ $t('projectsTitle') }}</h2>
    <div class="projects-grid">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div 
          v-if="project.imageSrc" 
          class="project-image-wrapper"
          @click="openImage(project)"
        >
          <img :src="project.imageSrc" :alt="$t(project.imageLabel || project.title)" class="project-image" />
          <div class="expand-overlay">
            <span>{{ $t('enlargeImage') }}</span>
          </div>
        </div>
        <div class="project-content">
          <h3>{{ $t(project.title) }}</h3>
          <p class="project-description">{{ $t(project.description) }}</p>
          <div class="project-actions">
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              {{ $t(project.linkLabel || 'View') }}
            </a>
            <a v-if="project.link2" :href="project.link2" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              {{ $t(project.linkLabel2 || 'View') }}
            </a>
          </div>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedCard" class="lightbox-backdrop" @click="closeImage">
          <button class="close-lightbox" aria-label="Close">&times;</button>
          
          <div class="lightbox-content" @click.stop>
            <img :src="selectedCard.imageSrc" :alt="$t(selectedCard.title)" />
            <div v-if="selectedCard.imageLabel" class="lightbox-caption">
              {{ $t(selectedCard.imageLabel) }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--accent-sky-rgb), 0.2);
  border-radius: 14px;
  background: var(--bg-surface);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  border-color: rgba(var(--accent-sky-rgb), 0.72);
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.2);
}

.project-image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-main);
  background: var(--bg-surface-alt);
  position: relative;
  cursor: zoom-in;
}

.expand-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.expand-overlay span {
  font-size: 0.8rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 12px;
  border-radius: 20px;
}

.project-image-wrapper:hover .expand-overlay {
  opacity: 1;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.03);
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-content h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: var(--text-bright);
}

.project-description {
  color: var(--text-tertiary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Lightbox Styling */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-caption {
  margin-top: 1rem;
  color: #e4e4e7;
  font-size: 1rem;
  text-align: center;
}

.close-lightbox {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
