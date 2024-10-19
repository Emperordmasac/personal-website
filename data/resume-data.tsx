import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon
} from "@/components/icons"

import { AuditbarLogo, GoCharge, GymFit, TaskLite, Oau } from "@/public"

export const RESUME_DATA = {
  name: "Olamilekan Abiola",
  initials: "OA",
  location: "Lagos, NG",
  locationLink: "https://www.google.com/maps/place/Lagos",
  about:
    "Hi I'm Ola, a full stack engineer focused on building products with extra attention to detail | building TaskLite",
  aboutBulletPoints: [
    "Building scalable web apps with React, Next.js, and Vite.",
    "Experienced in seamless API integration and data management.",
    "Experienced in leading teams and managing projects, from ideation to deployment.",
    "Passionate about creating visually appealing interfaces and custom components for smooth user experiences",
    "Team Lead @Auditbar",
    "Avid reader, writer, and learner."
  ],
  summary: "Very driven, passionate, fun individual.",
  avatarUrl1: "https://avatars.githubusercontent.com/u/37250437?v=4",
  avatarUrl2: "https://avatars.githubusercontent.com/u/96183717?v=4",
  personalWebsiteUrl: "https://personal-website-alpha-blue.vercel.app",
  contact: {
    email: null,
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olamilekanabiola/",
        icon: LinkedInIcon
      },
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
        name: "Instagram",
        url: "https://instagram.com/horlarmi__lekan",
        icon: InstagramIcon
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
    "ShadcnUI"
  ],
  currentlyBuilding: [
    {
      name: "TaskLite",
      link: "https://jira-clone-orcin.vercel.app",
      badges: ["Startup", "Nextjs", "Appwrite", "Task management tool"],
      title: "A super easy to use online project and task management tool",
      logo: TaskLite,
      date: "Since October 2024",
      videoLink: "https://www.youtube.com/watch?v=Av9C7xlV0fA&list=PPSV",
      description:
        "TaskLite is a streamlined project and task management tool designed for teams seeking simplicity without sacrificing functionality. Unlike other complex tools, this app provides an intuitive platform where you can focus solely on your projects, tasks, and team members. Built with modern technologies like Next.js and Appwrite, it offers a user-friendly interface and essential features that keep project management easy and efficient, so you can get things done faster and without unnecessary complexity.",
      projectDetailsLink: "https://jira-clone-orcin.vercel.app"
    }
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
      logo: Oau,
      activities:
        "Data Structures, Algorithms, Software Engineering, Systen analysis and design, Operating systens"
    },
    {
      school: "Obafemi Awolowo University International School",
      degree: "High School",
      start: "2008",
      logo: Oau,
      end: "2014",
      activities: "Football, Chess club, Science club"
    }
  ]
} as const
