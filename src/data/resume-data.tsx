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
  locationLink: "https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh",
  about:
    "Full Stack Web App Engineer.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems.
    </>
  ),
  avatarUrl: "/avatar/phan-tri-dung",
  personalWebsiteUrl: "https://jarocki.me",
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
      school: "Viet Nam -Korea University of Infomation And Comunication Technology",
      degree: "Information Technology Engineering Degree",
      start: "2018",
      end: "2025",
    },
  ],
  work: [
    {
      company: "TechJDI",
      link: "https://techjdi.com/",
      badges: ["Hybrid", "React", "Next.js", "TypeScript", "Node.js", "Unity"],
      title: "Front-end developer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "System Architecture",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
