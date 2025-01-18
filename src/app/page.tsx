import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Summary } from "@/components/summary";
import { Skills } from "@/components/skills";
import { Header } from "@/components/header";
import { CommandMenu } from "@/components/command-menu";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
      id="main-content"
    >
      <Card className="p-4">
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="container w-full print:space-y-4"
          aria-label="Resume Content"
        >
          <Header />
          <div className="space-y-8 print:space-y-4">
            <Summary summary={RESUME_DATA.summary} />

            <WorkExperience work={RESUME_DATA.work} />

            <Education education={RESUME_DATA.education} />

            <Skills skills={RESUME_DATA.skills} />

            <Projects projects={RESUME_DATA.projects} />
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </Card>
    </main>
  );
}
