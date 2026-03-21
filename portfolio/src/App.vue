<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Tool = {
  name: string
  logo: string
  alt: string
  why: string
}

type ToolGroup = {
  title: string
  items: Tool[]
}

type TimelineEntry = {
  date: string
  title: string
  description: string
  icon: string
  iconAlt: string
  imageLabel?: string
}

const socialLinks = [
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/your-handle.bsky.social',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/bluesky.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/JanNiclasRuppenthal',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jan-niclas-ruppenthal-27369a289/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/linkedin.svg',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/stubbi_33/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/instagram.svg',
  },
]

const toolGroups: ToolGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        alt: 'Java logo',
        why: 'For structured, object-oriented systems and reliable backend logic.',
      },
      {
        name: 'C#',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        alt: 'C sharp logo',
        why: 'For clean desktop/game workflows and strongly typed architecture.',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python logo',
        why: 'For rapid prototyping, scripting, and research-focused experiments.',
      },
    ],
  },
  {
    title: 'Dev Tools & Platforms',
    items: [
      {
        name: 'Unity',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        alt: 'Unity logo',
        why: 'For interactive 3D and AR experiences that combine logic and creativity.',
      },
      {
        name: 'Notion',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
        alt: 'Notion logo',
        why: 'For keeping ideas, tasks, and project notes organized and actionable.',
      },
      {
        name: 'Git / GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        alt: 'GitHub logo',
        why: 'For version control, collaboration, and documenting project progress.',
      },
    ],
  },
]

const timeline: TimelineEntry[] = [
  {
    date: 'July 2025',
    title: 'Started My PhD Journey',
    description:
      'I began my PhD in computer science, focusing on software engineering and augmented reality. I am learning how to ask better research questions and turn ideas into concrete outcomes.',
    icon: 'https://api.iconify.design/mdi/school-outline.svg',
    iconAlt: 'Education icon',
    imageLabel: 'Publication or lab screenshot',
  },
  {
    date: 'May 2025',
    title: 'Master of Science Completed',
    description:
      'I finished my M.Sc. in computer science. This stage sharpened my thinking around clean architecture and practical problem-solving in real projects.',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'Certificate icon',
  },
  {
    date: 'September 2021',
    title: 'Released CreARtion on Android',
    description:
      'I built and published an AR app on the Play Store. It taught me how much polish, testing, and iteration matter when moving from prototype to public release.',
    icon: 'https://api.iconify.design/mdi/cellphone.svg',
    iconAlt: 'Mobile app icon',
    imageLabel: 'App screenshot placeholder',
  },
  {
    date: 'August 2022',
    title: 'Built My First Portfolio Website',
    description:
      'I created my first personal website to document projects and progress. It was not perfect, but it gave me a place to share what I build and how I think.',
    icon: 'https://api.iconify.design/mdi/web.svg',
    iconAlt: 'Website icon',
    imageLabel: 'Project preview placeholder',
  },
]

let observer: IntersectionObserver | null = null
let sectionObserver: IntersectionObserver | null = null
const activeSection = ref('about')
const currentYear = new Date().getFullYear()

onMounted(() => {
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
  const trackedSections = document.querySelectorAll<HTMLElement>('main section[id]')
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
  } else {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer?.observe(element))
  }

  sectionObserver = new IntersectionObserver(
    (entries) => {
      let mostVisibleId = activeSection.value
      let highestRatio = 0

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const sectionId = (entry.target as HTMLElement).id
        if (entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio
          mostVisibleId = sectionId
        }
      })

      activeSection.value = mostVisibleId
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.7],
      rootMargin: '-25% 0px -35% 0px',
    },
  )

  trackedSections.forEach((section) => sectionObserver?.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  sectionObserver?.disconnect()
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
      <section id="about" class="section about reveal" data-reveal>
        <div class="about-photo" aria-label="Profile photo placeholder">
          <span>Photo</span>
        </div>
        <div class="about-content">
          <p class="eyebrow">Hello, my name is</p>
          <h1 class="name-title">Jan Niclas Ruppenthal</h1>
          <div class="about-highlight">
            <p class="lead">
              I enjoy learning by building, breaking, and improving. My focus is on solving problems in
              a way that is practical, readable, and useful for real people.
            </p>
            <p>
              I like exploring different technologies, from the logic and structure of Java to the
              creative side of Unity. Every project teaches me something new, and that is what keeps me
              motivated.
            </p>
          </div>
          <div class="about-actions">
            <a class="btn btn-primary" href="mailto:janniclas99.jnr@gmail.com">Contact me</a>
            <a class="btn btn-secondary" href="/cv.pdf" target="_blank" rel="noreferrer noopener">
              Download CV
            </a>
          </div>
        </div>
      </section>
      <section id="tools" class="section reveal reveal-delay-1" data-reveal>
        <p class="eyebrow">Tools I use to bring ideas to life.</p>
        <h2>My Toolkit</h2>
        <div class="tool-sections">
          <section v-for="group in toolGroups" :key="group.title" class="tool-section">
            <h3 class="group-title">{{ group.title }}</h3>
            <div class="tool-grid">
              <article v-for="tool in group.items" :key="tool.name" class="tool-card">
                <div class="tool-main">
                  <img :src="tool.logo" :alt="tool.alt" />
                  <h4>{{ tool.name }}</h4>
                </div>
                <p class="tool-why">{{ tool.why }}</p>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section id="timeline" class="section reveal reveal-delay-2" data-reveal>
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

      <section id="socials" class="section reveal reveal-delay-2" data-reveal>
        <p class="eyebrow">Let us connect.</p>
        <h2>Social Media</h2>
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
    </main>
    <footer class="site-footer">© {{ currentYear }} Jan Niclas Ruppenthal. <span>Built with Vue.</span></footer>
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

.btn-secondary {
  background: rgba(167, 139, 250, 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(167, 139, 250, 0.5);
}

.btn-secondary:hover {
  background: rgba(167, 139, 250, 0.24);
  border-color: rgba(167, 139, 250, 0.65);
  color: #f3f0ff;
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
  margin-top: 1.5rem;
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
  margin-bottom: 1.7rem;
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
  display: grid;
  place-items: center;
  color: #a1a1aa;
  font-size: 0.85rem;
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
