<script setup lang="ts">
import { timeline } from '../constants/portfolioData'
</script>

<template>
  <section class="section reveal reveal-delay-2" data-reveal>
    <h2>Journey &amp; Milestones</h2>
    <div class="timeline">
      <article v-for="entry in timeline" :key="entry.date + entry.title" class="timeline-entry">
        <div class="timeline-point" aria-hidden="true">
          <img :src="entry.icon" :alt="entry.iconAlt" />
        </div>
        <div class="timeline-content">
          <p class="timeline-date">{{ entry.date }}</p>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.description }}</p>
          <div v-if="entry.imageLabel" class="timeline-image">
            {{ entry.imageLabel }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>