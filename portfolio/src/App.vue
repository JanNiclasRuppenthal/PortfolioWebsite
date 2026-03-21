<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ToolkitSection from './components/ToolkitSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import SocialsSection from './components/SocialsSection.vue'

const activeSection = ref('about')
const currentYear = new Date().getFullYear()

let revealObserver: IntersectionObserver | null = null
let scrollObserver: IntersectionObserver | null = null

onMounted(() => {
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
  const sections = document.querySelectorAll<HTMLElement>('main section[id]')
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

  // 2. Active Section Scroll Observer
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: [0.2, 0.5, 0.8], rootMargin: '-20% 0px -20% 0px' })

  sections.forEach((s) => scrollObserver?.observe(s))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  scrollObserver?.disconnect()
})
</script>

<template>
  <div class="page">
    <header class="site-header">
      <div class="brand">JNR#33</div>
      <nav class="site-nav">
        <a href="#about" :class="{ active: activeSection === 'about' }">About</a>
        <a href="#tools" :class="{ active: activeSection === 'tools' }">Tools</a>
        <a href="#timeline" :class="{ active: activeSection === 'timeline' }">Timeline</a>
        <a href="#socials" :class="{ active: activeSection === 'socials' }">Socials</a>
      </nav>
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
  background: #18181b;
  color: #f4f4f5;
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
  padding: 1rem clamp(1rem, 4vw, 4rem);
  border-bottom: 1px solid #3f3f46;
  background: rgba(24, 24, 27, 0.92);
  backdrop-filter: blur(8px);
}

.brand {
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: clamp(1.15rem, 2vw, 1.7rem);
  color: var(--accent-sky-soft);
  text-shadow: 0 0 16px rgba(125, 211, 252, 0.12);
}

.site-nav {
  display: flex;
  gap: 1rem;
}

.site-nav a {
  color: #e4e4e7;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--accent-sky-soft);
}

.site-nav a.active {
  color: #ffffff;
  text-shadow: 0 0 8px rgba(125, 211, 252, 0.24);
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  text-decoration-color: var(--accent-sky);
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

.about {
  display: grid;
  gap: 2rem;
  align-items: start;
  grid-template-columns: 260px 1fr;
}

.about-photo {
  margin-top: 2.6rem;
  height: calc(100% - 2.6rem);
  min-height: 300px;
  border-radius: 28px;
  border: 1px dashed #71717a;
  background: #27272a;
  display: grid;
  place-items: center;
  color: #a1a1aa;
  font-size: 1rem;
}

.eyebrow {
  color: #94a3b8;
  margin: 0 0 0.75rem;
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
  background: linear-gradient(90deg, #f4f4f5, #ffffff, #d4d4d8);
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
  color: #e4e4e7;
}

.about-content p {
  line-height: 1.75;
  color: #d4d4d8;
}

.about-highlight {
  border: 1px solid rgba(125, 211, 252, 0.28);
  background: rgba(125, 211, 252, 0.07);
  border-radius: 14px;
  padding: 1rem 1rem 0.35rem;
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.06);
}

.about-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
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
  background: rgba(167, 139, 250, 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(167, 139, 250, 0.5);
}

.btn-primary:hover {
  background: rgba(167, 139, 250, 0.24);
}

.btn-timeline {
  background: rgba(167, 139, 250, 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(167, 139, 250, 0.5);
  display: flex; /* Or block */
  margin-left: auto;
  margin-right: auto;
  width: max-content; /* Keeps the button from stretching to full width */
  margin-top: 1.5rem;
}

.btn-timeline:hover {
  background: rgba(167, 139, 250, 0.24);
}

.tool-sections {
  margin-top: 1.5rem;
  display: grid;
  gap: 2rem;
}

.group-title {
  margin: 0 0 0.85rem;
  font-size: 1rem;
  color: #cbd5e1;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.social-card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.tool-card {
  position: relative;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
  border-radius: 14px;
  padding: 1rem;
  min-height: 136px;
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.05);
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
  color: #e0f2fe;
}

.social-card {
  border: 1px solid #3f3f46;
  background: #27272a;
  border-radius: 14px;
  padding: 1rem;
  min-height: 120px;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.05);
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
  color: #e0f2fe;
}

.social-card:hover,
.social-card:focus-visible {
  border-color: rgba(125, 211, 252, 0.7);
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.22);
  transform: translateY(-2px);
}

.tool-why {
  position: absolute;
  inset: auto 1rem 1rem;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #d4d4d8;
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
  border-color: rgba(125, 211, 252, 0.7);
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.22);
}

.tool-card:hover .tool-why,
.tool-card:focus-within .tool-why {
  opacity: 1;
  transform: translateY(0);
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
  background: rgba(125, 211, 252, 0.4);
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
  border: 1px solid rgba(125, 211, 252, 0.45);
  background: #1f1f23;
  display: grid;
  place-items: center;
}

.timeline-point img {
  width: 16px;
  height: 16px;
  filter: invert(94%) sepia(4%) saturate(233%) hue-rotate(201deg) brightness(94%) contrast(89%);
}

.timeline-content {
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 14px;
  background: #27272a;
  padding: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.timeline-entry:hover .timeline-content,
.timeline-entry:focus-within .timeline-content {
  border-color: rgba(125, 211, 252, 0.72);
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.2);
}

.timeline-date {
  font-size: 0.86rem;
  color: #a1a1aa;
  margin-bottom: 0.45rem;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
}

.timeline-content p {
  margin-bottom: 0;
  line-height: 1.65;
  color: #d4d4d8;
}

.timeline-image {
  margin-top: 0.8rem;
  border: 1px dashed #71717a;
  border-radius: 12px;
  min-height: 115px;
  height: 400px;
  display: grid;
  place-items: center;
  color: #a1a1aa;
  font-size: 0.85rem;
  overflow: hidden;

  /* ADD THESE THREE LINES TO CENTER THE CONTENT */
  display: flex;
  align-items: center;     /* Vertical centering */
  justify-content: center;  /* Horizontal centering */
}

.timeline-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;
  display: block;
}

.site-footer {
  text-align: center;
  padding: 2.2rem 1rem 2rem;
  font-size: 0.85rem;
  color: #a1a1aa;
}

.site-footer span {
  color: #8f8f97;
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
    color: #f4f4f5;
    background: none;
  }
}
</style>
