import type { SocialLink, ToolGroup, TimelineEntry } from '../types'

export const socialLinks: SocialLink[]  = [
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
    icon: 'https://cdn.jsdelivr.net/npm/social-media-icons@0.3.1/icons/linkedin.svg',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/stubbi_33/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/instagram.svg',
  },
]

export const toolGroups: ToolGroup[] = [
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

export const timeline: TimelineEntry[] = [
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