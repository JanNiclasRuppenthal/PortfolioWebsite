<script setup lang="ts">
import { socialLinks } from '../constants/portfolioData'
</script>

<template>
  <section class="section reveal reveal-delay-2" data-reveal>
    <p class="eyebrow">{{ $t('socialMediaSubtitle') }}</p>
    <h2>{{ $t('socialMediaTitle') }}</h2>
    <div class="social-card-grid">
      <a
        v-for="item in socialLinks"
        :key="'card-' + item.name"
        class="social-card"
        :href="item.href"
        :aria-label="item.name"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img :src="item.icon" :alt="item.name + ' logo'" />
        <h4>{{ item.name }}</h4>
      </a>
    </div>
  </section>
</template>

<style scoped>

.social-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.social-card {
  background: rgba(var(--accent-purple-rgb), 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(var(--accent-purple-rgb), 0.5);
  border-radius: 14px;
  padding: 1rem;
  min-height: 120px;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.05);
}

.social-card img {
  width: 38px;
  height: 38px;
  margin-bottom: 0.6rem;
  filter: invert(94%) sepia(4%) saturate(233%) hue-rotate(201deg) brightness(94%) contrast(89%);
}

.social-card h4 {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-sky-light);
}

.social-card:hover,
.social-card:focus-visible {
  box-shadow: inset 0 0 0 1px rgba(var(--accent-purple-rgb), 0.22);
  transform: translateY(-2px);
  background: rgba(var(--accent-purple-rgb), 0.24);
}

</style>