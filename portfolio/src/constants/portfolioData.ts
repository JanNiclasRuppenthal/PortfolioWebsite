import type { SocialLink, ToolGroup, TimelineEntry } from '../types'

export const toolGroups: ToolGroup[] = [
  {
    title: 'toolTitleProgrammingLanguages',
    items: [
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        alt: 'Java Logo',
        why: 'toolJava',
      },
      {
        name: 'C#',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        alt: 'C# Logo',
        why: 'toolCSharp',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python Logo',
        why: 'toolPython',
      },
    ],
  },
  {
    title: 'toolTitlePlatforms',
    items: [
      {
        name: 'Unity',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        alt: 'Unity Logo',
        why: 'toolUnity',
      },
      {
        name: 'Meta SDK',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg',
        alt: 'Meta Logo',
        why: 'toolMetaSDK',
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        alt: 'Docker Logo',
        why: 'toolDocker',
      },
      {
        name: 'Git / GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        alt: 'GitHub Logo',
        why: 'toolGit',
      },
    ],
  },
  {
    title: 'IDEs & Editors',
    items: [
      {
        name: 'IntelliJ IDEA',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        alt: 'IntelliJ IDEA Logo',
        why: 'toolIntelliJ',
      },
      {
        name: 'PyCharm',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
        alt: 'PyCharm Logo',
        why: 'toolPyCharm',
      },
      {
        name: 'Rider',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rider/rider-original.svg',
        alt: 'Rider Logo',
        why: 'toolRider',
      },
      {
        name: 'Visual Studio Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        alt: 'Visual Studio Code Logo',
        why: 'toolVSCode',
      },
    ],
  },
  {
    title: 'Other Tools',
    items: [
      {
        name: 'Notion',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
        alt: 'Notion Logo',
        why: 'toolNotion',
      },
      {
        name: 'FreeCAD',
        logo: 'https://raw.githubusercontent.com/FreeCAD/FreeCAD/refs/heads/main/src/Main/icon.ico',
        alt: 'FreeCAD Logo',
        why: 'toolFreeCAD',
      },
      {
        name: 'Bambu Studio',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bambulab.svg',
        alt: 'Bambu Studio Logo',
        why: 'toolBambuStudio',
      },
    ],
  },
]

export const timeline: TimelineEntry[] = [
  {
    date: 'timelinePhDDate',
    title: 'timelinePhDTitle',
    description:
      'timelinePhDDescription',
    icon: 'https://api.iconify.design/mdi/school-outline.svg',
    iconAlt: 'timelinePhDIconAlt',
    linkLabel: ''
  },
  {
    date: 'timelineMScDate',
    title: 'timelineMScTitle',
    description:
      'timelineMScDescription',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'timelineMScIconAlt',
    linkLabel: ''
  },
  {
    date: 'timelineEcoDiveDate',
    title: 'timelineEcoDiveTitle',
    description:
      'timelineEcoDiveDescription',
    icon: 'https://api.iconify.design/mdi/paper.svg',
    iconAlt: 'timelineEcoDiveIconAlt',
    imageSrc: './img/EcoDivePreview.png',
    imageLabel: 'timelineEcoDiveImageAlt',
    link: 'https://dl.acm.org/doi/10.1145/3641825.3689502',
    linkLabel: 'showPublication'
  },
  {
    date: 'timelineBScDate',
    title: 'timelineBScTitle',
    description:
      'timelineBScDescription',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'timelineBScIconAlt',
    linkLabel: ''
  },
  {
    date: 'timelinePortfolioWebsiteDate',
    title: 'timelinePortfolioWebsiteTitle',
    description:
      'timelinePortfolioWebsiteDescription',
    icon: 'https://api.iconify.design/mdi/application-brackets-outline.svg',
    iconAlt: 'Developing website icon',
    link: 'https://github.com/JanNiclasRuppenthal/PortfolioWebsite',
    linkLabel: 'showRepository'
  },
  {
    date: 'timelineCreARtionDate',
    title: 'timelineCreARtionTitle',
    description:
      'timelineCreARtionDescription',
    icon: 'https://api.iconify.design/mdi/cellphone.svg',
    iconAlt: 'Mobile app icon',
    imageSrc: './img/CreARtionPreview.png',
    imageLabel: 'timelineCreARtionImageLabel',
    link: 'https://github.com/JanNiclasRuppenthal/CreARtion',
    linkLabel: 'showRepository'
  },
  {
    date: 'timelineAbiturDate',
    title: 'timelineAbiturTitle',
    description:
      'timelineAbiturDescription',
    icon: 'https://api.iconify.design/mdi/certificate-outline.svg',
    iconAlt: 'timelineAbiturIconAlt',
    linkLabel: ''
  },
  {
    date: 'timelineBirthdateDate',
    title: 'timelineBirthdateTitle',
    description:
      'timelineBirthdateDescription',
    icon: 'https://api.iconify.design/mdi/birthday-cake-outline.svg',
    iconAlt: 'timelineBirthdateIconAlt',
    linkLabel: ''
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