<script lang="ts" src="./TimelineSection.ts"></script>

<template>
  <section class="section reveal reveal-delay-2" data-reveal>
    <p class="eyebrow">My journey and highlighted milestones.</p>
    <h2>Timeline</h2>
    <div class="timeline">
      <article v-for="entry in timeline" :key="entry.date + entry.title" class="timeline-entry">
        <div class="timeline-point" aria-hidden="true">
          <img :src="entry.icon" :alt="entry.iconAlt" />
        </div>
        
        <div class="timeline-content">
          <p class="timeline-date">{{ entry.date }}</p>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.description }}</p>

          <div 
            v-if="entry.imageSrc" 
            class="timeline-image" 
            @click="openImage(entry)"
          >
            <img 
              :src="entry.imageSrc" 
              :alt="entry.imageLabel || entry.title"
              class="timeline-photo"
            />
            <div class="expand-overlay">
              <span>Click to enlarge</span>
            </div>
          </div>

          <div v-if="entry.link" class="timeline-buttons">
            <a class="btn btn-timeline" :href="entry.link" target="_blank">
              {{ entry.linkLabel || 'Learn more' }}
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
            <img :src="selectedCard.imageSrc" :alt="selectedCard.title" />
            <div v-if="selectedCard.imageLabel" class="lightbox-caption">
              {{ selectedCard.imageLabel }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>


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

.timeline-image:hover .expand-overlay {
  opacity: 1;
}

.timeline-image:hover .timeline-photo {
  transform: scale(1.05);
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