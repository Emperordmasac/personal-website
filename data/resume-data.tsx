import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Olamilekan Abiola",
  initials: "OA",
  location: "Lagos, NG",
  locationLink: "https://www.google.com/maps/place/Lagos",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary: "My summary",
  avatarUrl: "https://avatars.githubusercontent.com/u/37250437?v=4",
  personalWebsiteUrl: "https://personal-website-alpha-blue.vercel.app",
  contact: {
    email: "horlaymilekan.dev@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Emperordmasac",
        icon: GitHubIcon
      },
      {
        name: "X",
        url: "https://x.com/horlaymilekan",
        icon: XIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olamilekanabiola/",
        icon: LinkedInIcon
      }
    ]
  }
} as const
