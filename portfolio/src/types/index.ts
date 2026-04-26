export type Tool = {
  name: string
  logo: string
  alt: string
  why: string
}

export type ToolGroup = {
  title: string
  items: Tool[]
}

export type TimelineEntry = {
  date: string
  title: string
  description: string
  icon: string
  iconAlt: string
  imageSrc?: string
  imageLabel?: string
  link?: string
  linkLabel: string,
  link2?: string
  linkLabel2: string
}

export type SocialLink = {
  name: string
  href: string
  icon: string
}

export type Project = {
  title: string
  description: string
  imageSrc?: string
  imageLabel?: string
  link?: string
  linkLabel?: string
  link2?: string
  linkLabel2?: string
}