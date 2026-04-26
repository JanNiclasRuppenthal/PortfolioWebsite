<script lang="ts" src="./TimelineSection.ts"></script>

<template>
  <section class="section" id="timeline">
    <p class="eyebrow">{{ $t('timelineSubtitle') }}</p>
    <h2>{{ $t('timelineTitle') }}</h2>
    <div class="timeline">
      <article 
        v-for="(entry, index) in timeline" 
        :key="entry.date + entry.title" 
        class="timeline-entry reveal"
        data-reveal
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <div class="timeline-point" aria-hidden="true">
          <img :src="entry.icon" :alt="$t(entry.iconAlt)" />
        </div>
        
        <div 
          class="timeline-content spotlight-card"
          @mousemove="handleSpotlight"
        >
          <p class="timeline-date">{{ $t(entry.date) }}</p>
          <h3>{{ $t(entry.title) }}</h3>
          <p>{{ $t(entry.description) }}</p>

          <div 
            v-if="entry.imageSrc" 
            class="timeline-image" 
            @click="openImage(entry)"
          >
            <img 
              :src="entry.imageSrc" 
              :alt="entry.imageLabel || $t(entry.title)"
              class="timeline-photo"
            />
            <div class="expand-overlay">
              <span>{{ $t('enlargeImage') }}</span>
            </div>
          </div>

          <div class="timeline-actions">
            <div v-if="entry.link" class="timeline-buttons">
            <a class="btn btn-timeline" :href="entry.link" target="_blank">
              {{ $t(entry.linkLabel) }}
            </a>
            <a v-if="entry.link2" class="btn btn-timeline" :href="entry.link2" target="_blank">
              {{ $t(entry.linkLabel2) }}
            </a>
          </div>
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

.timeline-actions {
  display: flex;
  justify-content: center;
}

.timeline-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.btn-timeline {
  background: rgba(var(--accent-purple-rgb), 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(var(--accent-purple-rgb), 0.5);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-top: 1.5rem;
}

.btn-timeline:hover {
  background: rgba(var(--accent-purple-rgb), 0.24);
}

.timeline {
  position: relative;
  margin-top: 4rem;
  padding-left: 2.8rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 1px;
  background: rgba(var(--accent-sky-rgb), 0.4);
}

.timeline-entry {
  position: relative;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.timeline-point {
  position: absolute;
  left: -2.8rem;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgba(var(--accent-sky-rgb), 0.45);
  background: var(--bg-surface-alt);
  display: grid;
  place-items: center;
}

.timeline-point img {
  width: 16px;
  height: 16px;
  filter: invert(94%) sepia(4%) saturate(233%) hue-rotate(201deg) brightness(94%) contrast(89%);
}

.timeline-content {
  position: relative;
  border: 1px solid rgba(var(--accent-sky-rgb), 0.2);
  border-radius: 14px;
  background: var(--bg-surface);
  padding: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.55s ease, opacity 0.55s ease;
}

.timeline-entry:hover .timeline-content,
.timeline-entry:focus-within .timeline-content {
  border-color: rgba(var(--accent-sky-rgb), 0.72);
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.2);
}

.spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(var(--accent-sky-rgb), 0.08),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.spotlight-card:hover::before {
  opacity: 1;
}

.timeline-date {
  font-size: 0.86rem;
  color: var(--text-muted);
  margin-bottom: 0.45rem;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
}

.timeline-content p {
  margin-bottom: 0;
  line-height: 1.65;
  color: var(--text-tertiary);
}

.timeline-image {
  margin-top: 0.8rem;
  border: 1px dashed var(--border-muted);
  border-radius: 12px;
  min-height: 115px;
  height: 400px;
  display: grid;
  place-items: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  overflow: hidden; 
  cursor: zoom-in;
}

.timeline-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;
  display: block;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 760px) {
  .timeline-image {
    height: auto;
    aspect-ratio: 16 / 9;
  }
}
</style>