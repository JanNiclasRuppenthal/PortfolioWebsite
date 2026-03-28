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