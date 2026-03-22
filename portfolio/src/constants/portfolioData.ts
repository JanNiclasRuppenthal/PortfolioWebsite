import type { SocialLink, ToolGroup, TimelineEntry } from '../types'

export const toolGroups: ToolGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        alt: 'Java logo',
        why: 'At the beginning of my studies in 2019 I began to learn the programming language Java. Throughout the years I learned to love this programming language. I like the class-based and object-oriented implementation.',
      },
      {
        name: 'C#',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        alt: 'C sharp logo',
        why: 'C# is the first programming language which I learned through a book on my own. The reason why I chose this language is because I wanted to program video games and C# is similar to Java.',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python logo',
        why: 'With Python I made my first steps in the programming world. In 2016/2017 I learned the basic concepts of coding with Python. It is not my favorite language because it is not a strictly typed language.',
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
        why: 'Back in 2021, I started to learn the Unity Engine through a book with a lot of tutorials. Today, I use it for creating interactive 3D and AR experiences that combine logic and creativity.',
      },
      {
        name: 'Notion',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
        alt: 'Notion logo',
        why: 'I use Notion alongside handwritten notes on my tablet to capture and organize all relevant information. Combining digital tools and manual input helps me stay flexible, efficient, and well-organized in my work.',
      },
      {
        name: 'Git / GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        alt: 'GitHub logo',
        why: 'I use GitHub extensively for version control to manage and track changes in my projects. It helps me collaborate efficiently and maintain a clear history of my code development.',
      },
    ],
  },
]

export const timeline: TimelineEntry[] = [
  {
    date: 'July 2025',
    title: 'Started My PhD Journey',
    description:
      'Currently, I am pursuing a PhD in computer science, focusing my research on software engineering and augmented reality to develop advanced methods for designing interactive and immersive systems.',
    icon: 'https://api.iconify.design/mdi/school-outline.svg',
    iconAlt: 'Education icon',
  },
  {
    date: 'May 2025',
    title: 'Master of Science',
    description:
      'I finished my M.Sc. in computer science. During my master’s studies, I specialized in software engineering, focusing on the design and development of complex, reliable software systems. In addition, I extended my knowledge of algorithms to address challenging computational problems with greater efficiency and precision.',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'Certificate icon',
  },
  {
    date: 'October 2024',
    title: 'EcoDive: Enhancing Presence and Ambient Environmental Awareness in a Virtual Reality Experience for Underwater Marine Debris Collection',
    description:
      'As part of the Master’s module "VR and 3D Interactions", we created a demo for the VRST conference held in Trier, Germany. The project aims to highlight the global risks and environmental dangers associated with water pollution. The demo was developed in Unity and implemented for the Meta Quest 3 VR headset.',
    icon: 'https://api.iconify.design/mdi/paper.svg',
    iconAlt: 'Paper icon',
    imageSrc: './img/EcoDivePreview.png',
    imageLabel: 'Screenshot of the EcoDive VR experience: Seeing the difference between the clean and polluted ocean under water.',
    link: 'https://dl.acm.org/doi/10.1145/3641825.3689502',
    linkLabel: 'View Publication'
  },
  {
    date: 'March 2023',
    title: 'Bachelor of Science',
    description:
      'I finished my B.Sc. in computer science. During my bachelor’s studies, I developed a broad foundation in computer science, covering programming, software development, algorithms, and information technology systems. This enabled me to analyze complex problems and create practical software solutions across various domains..',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'Certificate icon',
  },
  {
    date: 'August 2022',
    title: 'Portfolio Website Launched',
    description:
      'This website serves as a platform that showcases the diverse range of tools I proficiently work with, but also highlights the impressive projects I have accomplished.',
    icon: 'https://api.iconify.design/mdi/application-brackets-outline.svg',
    iconAlt: 'Developing website icon',
    link: 'https://github.com/JanNiclasRuppenthal/PortfolioWebsite',
    linkLabel: 'Show Repository on GitHub'
  },
  {
    date: 'September 2021',
    title: 'Developed CreARtion on Android',
    description:
      'CreARtion is an Android App which has been officially published on the Google PlayStore. In this App you can transform objects into sculptures in Augmented Reality. It was developed as part of a module called "Kleines Studienprojekt" at University Trier.',
    icon: 'https://api.iconify.design/mdi/cellphone.svg',
    iconAlt: 'Mobile app icon',
    imageSrc: './img/CreARtionPreview.png',
    imageLabel: 'Screenshot of the CreARtion App: Manipulating a virtual sphere in AR.',
    link: 'https://github.com/JanNiclasRuppenthal/CreARtion',
    linkLabel: 'Show Repository on GitHub'
  },
  {
    date: 'March 2019',
    title: 'Abitur',
    description:
      'Achieved the general qualification for university entrance.',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'Certificate icon'
  },
  {
    date: 'November 1999',
    title: 'Birthdate',
    description:
      'System.out.println("Hello World!")',
    icon: 'https://api.iconify.design/mdi/birthday-cake-outline.svg',
    iconAlt: 'Birthday cake icon'
  },
]

export const socialLinks: SocialLink[]  = [
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