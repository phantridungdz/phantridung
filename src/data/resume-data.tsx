import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
// import { PhanTriDung } from "@/images/avatar"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Phan Tri Dung",
  initials: "DP",
  location: "Ho Chi Minh City, Viet Nam",
  locationLink:
    "https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh",
  about: "Full Stack Web App Engineer.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems.
    </>
  ),
  avatarUrl: "avatar/phan-tri-dung.jpg",
  personalWebsiteUrl: "https://phantridung.vercel.app",
  contact: {
    email: "phantridungdz@gmail.com",
    tel: "0877464243",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/phantridungdz",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school:
        "Viet Nam - Korea University of Infomation And Comunication Technology",
      degree: "Information Technology Engineering Degree",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "https://www.maybank.com",
      badges: ["Remote", "Android", "Java", "Unity"],
      title: "Freelance Developer",
      logo: null,
      start: "02/2019",
      end: "08/2022",
      description: (
        <>
          Worked as a freelance developer for a self-organized team in the
          Philippines, specializing in Android game development with Java and 2D
          game development with Unity.
        </>
      ),
    },
    {
      company: "TechJDI",
      link: "https://techjdi.com",
      badges: [
        "Hybrid",
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "Full Stack",
      ],
      title: "Front-end Developer",
      logo: ConsultlyLogo,
      start: "08/2022",
      end: "04/2024",
      description: (
        <>
          Developed React Native, React, and Next.js applications, occasionally
          handling full-stack tasks. Collaborated directly with international
          clients on projects including Chrome extensions and web applications.
        </>
      ),
    },
    {
      company: "Maybank",
      link: "https://www.maybank.com",
      badges: ["On Site", "ExtJS", "C#", "Laravel"],
      title: "Software Developer",
      logo: null,
      start: "04/2024",
      end: "Present",
      description: (
        <>
          Developing web and back-office applications for Maybank, utilizing
          ExtJS, C#, Laravel, and Nuxt.js.
          <ul className="list-inside list-disc">
            <li>
              Built EMO: A finance task management application using ExtJS and
              C#
            </li>
            <li>Developed OAP: An online trading account opening platform</li>
            <li>
              Maintained and enhanced Maybank homepage with Laravel and Nuxt.js
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Unity",
    "ExtJS",
    "Laravel",
    "C#",
  ],
  projects: [
    {
      title: "Clarity",
      techStack: ["Chrome Extension", "AI"],
      description:
        "A Chrome extension for HR and KOLs to create LinkedIn posts powered by AI assistance.",
      logo: null,
      link: "https://talentjdi.com/",
    },
    {
      title: "TechJDI Talent Website",
      techStack: ["Next.js", "Payload CMS"],
      description:
        "Developed a talent management website for TechJDI using Next.js and Payload CMS.",
      logo: ConsultlyLogo,
      link: "https://talentjdi.com/",
    },
    {
      title: "EMO",
      techStack: ["ExtJS", "C#"],
      description:
        "Back-office application for managing finance-related tasks at Maybank.",
      logo: null,
    },
    {
      title: "OAP",
      techStack: ["Nextjs"],
      description: "Online trading account opening platform for Maybank.",
      logo: null,
    },
    {
      title: "Maybank Homepage",
      techStack: ["Laravel", "Nuxt.js", "NestJS"],
      description:
        "Full-stack development for Maybank's homepage, enhancing user experience and performance.",
      logo: null,
    },
  ],
} as const;
