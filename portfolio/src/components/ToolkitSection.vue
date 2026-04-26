<script setup lang="ts">
import { toolGroups } from '../constants/portfolioData'

const handleSpotlight = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  target.style.setProperty('--mouse-x', `${x}px`)
  target.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<template>
  <section class="section" id="tools">
    <p class="eyebrow">{{ $t('toolkitSubtitle') }}</p>
    <h2>{{ $t('toolkitTitle') }}</h2>
    <div class="tool-sections">
      <section 
        v-for="(group, index) in toolGroups" 
        :key="group.title" 
        class="tool-section reveal"
        data-reveal
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <h3 class="group-title">{{ $t(group.title) }}</h3>
        <div class="tool-grid">
          <article 
            v-for="tool in group.items" 
            :key="tool.name" 
            class="tool-card spotlight-card"
            @mousemove="handleSpotlight"
          >
            <div class="tool-main">
              <img :src="tool.logo" :alt="tool.alt" />
              <h4>{{ tool.name }}</h4>
            </div>
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
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.tool-card:hover {
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

.tool-main {
  text-align: center;
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

</style>