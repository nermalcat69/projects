export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nermalcat69",
  description: "Nermalcat69's Projects",
  mainNav: [
    {
      title: "",
      href: "/",
    },
  ],
  links: {
    contribute: "https://github.com/nermalcat69/projects",
    twitter: "https://twitter.com/nermalcat69",
    github: "https://github.com/nermalcat69",
  },
}

export const Projects = {
  fields: {
    title: { type: "string", required: true },
  },
}
