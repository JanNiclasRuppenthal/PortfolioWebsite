<script setup lang="ts">
import { toolGroups } from '../constants/portfolioData'
</script>

<template>
  <section class="section reveal reveal-delay-1" data-reveal>
    <p class="eyebrow">{{ $t('toolkitSubtitle') }}</p>
    <h2>{{ $t('toolkitTitle') }}</h2>
    <div class="tool-sections">
      <section v-for="group in toolGroups" :key="group.title" class="tool-section">
        <h3 class="group-title">{{ $t(group.title) }}</h3>
        <div class="tool-grid">
          <article v-for="tool in group.items" :key="tool.name" class="tool-card">
            <div class="tool-main">
              <img :src="tool.logo" :alt="tool.alt" />
              <h4>{{ tool.name }}</h4>
            </div>
            <p class="tool-why">{{ $t(tool.why) }}</p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>