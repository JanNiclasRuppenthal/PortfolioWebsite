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
  imageLabel?: string
}

export type SocialLink = {
  name: string
  href: string
  icon: string
}