import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

import { AuditbarLogo, GoCharge, GymFit } from "@/public"

export const RESUME_DATA = {
  name: "Olamilekan Abiola",
  initials: "OA",
  location: "Lagos, NG",
  locationLink: "https://www.google.com/maps/place/Lagos",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary: "Very driven, passionate, fun individual.",
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
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Vite",
    "NodeJS",
    "NextJS",
    "TailwindCSS",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Kubernetes",
    "DrizzleORM",
    "Prisma",
    "Firebase",
    "Appwrite",
    "Python"
  ],
  work: [
    {
      company: "Auditbar",
      link: "https://auditbar.com",
      badges: ["Remote"],
      title: "Senior frontend engineer",
      logo: AuditbarLogo,
      start: "2023",
      end: "Present",
      description:
        "Spearheaded the design and development of customer-centric features for an e-commerce application, Conceptualized, designed and Implemented functionalities including an inventory and discount system, Designed and implemented the entire storefront frontend from scratch, contributing to a more efficient and user-friendly platform and more."
    },
    {
      company: "GoCharge",
      link: "https://gocharge.tech/",
      badges: ["Contract"],
      title: "Frontend engineer",
      logo: GoCharge,
      start: "10/2022",
      end: "12/2023",
      description:
        "Built responsive and scalable web applications using React, Next.js, and Typescript (leveraging MaterialUI framework), Collaborated closely with the backend teams to refine and define API requirements, ensuring efficient communication and seamless integration between frontend and backend systems."
    },
    {
      company: "GymFit",
      link: "https://auditbar.com",
      badges: ["Remote"],
      title: "Software engineer",
      logo: GymFit,
      start: "02/2021",
      end: "11/2022",
      description:
        "Designed and implemented solutions from scratch using ReactJS. This involved setting up essential tools such as linting, pre-commit hooks, and pre-push hooks, Recognizing the importance of staying up-to-date with industry trends, I introduced advanced React patterns and best practices to our development workflow."
    },
    {
      company: "Herlabytes",
      link: "https://www.herlabytes.com/",
      badges: ["Internship", "Hybrid"],
      title: "Frontend engineer",
      logo: AuditbarLogo,
      start: "09/2019",
      end: "03/2021",
      description:
        "Built responsive and scalable web applications using React, Next.js, and Typescript, Collaborated closely with the backend teams to refine and define API requirements, ensuring efficient communication and seamless integration between frontend and backend systems."
    }
  ],
  education: [
    {
      school: "Obafemi Awolowo University",
      degree: "BSc. Computer Science",
      start: "2015",
      end: "2022",
      activities:
        "Data Structures, Algorithms, Software Engineering, Systen analysis and design, Operating systens"
    },
    {
      school: "Obafemi Awolowo University International School",
      degree: "High School",
      start: "2008",
      end: "2014",
      activities: "Football, Chess club, Science club"
    }
  ]
} as const
