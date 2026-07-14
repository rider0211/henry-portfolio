export const globalConfig = {
  site: {
    name: "Henry Lee",
    author: "Henry Lee",
    description: "Henry Lee portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/about"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026  All rights reserved ",
    social: {
      github: "https://github.com/rider0211",
      email: "altafdas3989989@outlook.com"
    }
  }
} as const; 