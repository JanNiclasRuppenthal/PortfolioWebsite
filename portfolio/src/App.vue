<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ChangeLanguageSection from './components/LanguageSection.vue'
import AboutSection from './components/AboutSection.vue'
import ToolkitSection from './components/ToolkitSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import SocialsSection from './components/SocialsSection.vue'

const currentYear = new Date().getFullYear()

let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // 1. Reveal Animations Observer
  if (!prefersReducedMotion) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    revealElements.forEach((el) => revealObserver?.observe(el))
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'))
  }
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
</script>

<template>
  <div class="page">
    <header class="site-header">
      <div class="brand">JNR#33</div>
      <nav class="site-nav">
        <a href="#about">{{ $t('siteNavAbout') }}</a>
        <a href="#tools">{{ $t('siteNavToolkit') }}</a>
        <a href="#timeline">{{ $t('siteNavTimeline') }}</a>
        <a href="#socials">{{ $t('siteNavSocialMedia') }}</a>
      </nav>
      <ChangeLanguageSection/>
    </header>

    <main>
      <AboutSection id="about" />
      <ToolkitSection id="tools" />
      <TimelineSection id="timeline" />
      <SocialsSection id="socials" />
    </main>

    <footer class="site-footer">
      © {{ currentYear }} Jan Niclas Ruppenthal. <span>Built with Vue.</span>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  color-scheme: dark;
  
  --accent-sky: #7dd3fc;
  --accent-sky-soft: #bae6fd;
  --accent-purple: #a78bfa;
  --accent-purple-soft: #ddd6fe;
  
  --accent-sky-rgb: 125, 211, 252;
  --accent-purple-rgb: 167, 139, 250;

  --bg-base: #18181b;
  --bg-base-rgb: 24, 24, 27; /* blurring the header */
  --bg-surface: #27272a;
  --bg-surface-alt: #1f1f23; 

  --text-main: #f4f4f5;
  --text-bright: #ffffff;
  --text-secondary: #e4e4e7;
  --text-tertiary: #d4d4d8;
  --text-muted: #a1a1aa;
  --text-footer-span: #8f8f97;
  --text-slate-light: #cbd5e1;
  --text-slate-dark: #94a3b8;
  --text-sky-light: #e0f2fe;

  --border-main: #3f3f46;
  --border-muted: #71717a;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: var(--bg-base);
  color: var(--text-main);
}

.page {
  min-height: 100vh;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(2rem, 2vw, 8rem);
  border-bottom: 1px solid var(--border-main);
  background: rgba(var(--bg-base-rgb), 0.92);
  backdrop-filter: blur(8px);
}

.brand {
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: clamp(1.15rem, 2vw, 1.7rem);
  color: var(--accent-sky-soft);
  text-shadow: 0 0 16px rgba(var(--accent-sky-rgb), 0.12);
}

.site-nav {
  display: flex;
  gap: 1rem;
}

.site-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.25rem;
  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--accent-sky-soft);
}

.section {
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem);
}

.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  will-change: opacity, transform;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 {
  transition-delay: 0.06s;
}

.reveal-delay-2 {
  transition-delay: 0.12s;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
}

.name-title {
  display: inline-block;
  background: linear-gradient(90deg, var(--text-main), var(--text-bright), var(--text-tertiary));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: nameFadeIn 0.8s ease-out both, nameGlowShift 4s ease-in-out 0.8s infinite;
}

h2 {
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  margin-bottom: 1.25rem;
  color: var(--accent-sky-soft);
}

.lead {
  color: var(--text-secondary);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: rgba(var(--accent-purple-rgb), 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(var(--accent-purple-rgb), 0.5);
}

.btn-primary:hover {
  background: rgba(var(--accent-purple-rgb), 0.24);
}

.site-footer {
  text-align: center;
  padding: 2.2rem 1rem 2rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.site-footer span {
  color: var(--text-footer-span);
}

@keyframes nameFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes nameGlowShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 760px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about-photo {
    margin-top: 0;
    height: auto;
    aspect-ratio: 1 / 1;
    max-width: 240px;
  }

  .tool-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .social-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .site-header {
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .site-nav {
    gap: 0.7rem;
  }

  .site-nav a {
    font-size: 0.88rem;
  }

  .tool-grid {
    grid-template-columns: 1fr;
  }

  .social-card-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal,
  .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .name-title {
    animation: none;
    color: var(--text-main);
    background: none;
  }
}
</style>
