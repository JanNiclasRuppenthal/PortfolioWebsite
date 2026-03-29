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

<style scoped>

.tool-sections {
  margin-top: 1.5rem;
  display: grid;
  gap: 2rem;
}

.group-title {
  margin: 0 0 0.85rem;
  font-size: 1rem;
  color: var(--text-slate-light);
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.tool-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-main);
  background: var(--bg-surface);
  border-radius: 14px;
  padding: 1rem;
  min-height: 136px;
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.tool-main {
  text-align: center;
  transition: transform 0.25s ease, opacity 0.25s ease;
  margin-top: 1rem;
}

.tool-card img {
  width: 38px;
  height: 38px;
  margin-bottom: 0.6rem;
}

.tool-card h4 {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-sky-light);
}

.tool-why {
  position: absolute;
  inset: auto 1rem 1rem;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: var(--text-tertiary);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.tool-card:hover .tool-main,
.tool-card:focus-within .tool-main {
  transform: translateY(-6px);
  opacity: 0.2;
}

.tool-card:hover,
.tool-card:focus-within {
  border-color: rgba(var(--accent-sky-rgb), 0.7);
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.22);
}

.tool-card:hover .tool-why,
.tool-card:focus-within .tool-why {
  opacity: 1;
  transform: translateY(0);
}

</style>