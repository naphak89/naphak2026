"use client";

import Image from "next/image";
import Link from "next/link";
import { GlassButton } from "./GlassButton";

interface Project {
  title: string;
  year: string;
  color: string;
  imageColor: string;
  image: string;
  mainPicture: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "CircleTicket",
    year: "2025",
    color: "from-neutral-200 to-neutral-300",
    imageColor: "bg-neutral-300",
    image: "/projectPictures/circleticket.png",
    mainPicture: "/mainProjectPictures/CircleticketMainPic.png",
    link: "https://circleticket.com/",
  },
  {
    title: "OUT!",
    year: "2025",
    color: "from-neutral-200 to-neutral-300",
    imageColor: "bg-neutral-300",
    image: "/projectPictures/out.png",
    mainPicture: "/mainProjectPictures/OUTMainPic.png",
    link: "https://out.naphak.com/",
  },
  {
    title: "StoryMap",
    year: "2024",
    color: "from-neutral-200 to-neutral-300",
    imageColor: "bg-neutral-300",
    image: "/projectPictures/storymap.png",
    mainPicture: "/mainProjectPictures/StoryMapMainPic.png",
    link: "https://github.com/naphak89/StoryMap-Preview",
  },
  {
    title: "AZAI Solution",
    year: "2024",
    color: "from-neutral-200 to-neutral-300",
    imageColor: "bg-neutral-300",
    image: "/projectPictures/azai.jpg",
    mainPicture: "/mainProjectPictures/AZAISolutionMainPic.png",
    link: "https://azai.naphak.com/",
  },
];

function ProjectCard({ project }: { project: Project; index: number }) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative rounded-[2.4rem] md:rounded-[2.5rem] bg-transparent ${project.color}  flex flex-col gap-3`}
      >
        {/* Project image */}
        <div
          className={`relative aspect-square rounded-4xl md:rounded-[2rem] ${project.imageColor} overflow-hidden`}
        >
          <Image
            src={project.mainPicture}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Card footer - inside card with GlassButton, absolute bottom */}
          <GlassButton
            onClick={() => window.open(project.link, "_blank")}
            className="!absolute md:!left-6 !left-4 md:!bottom-6 !bottom-4 z-10 !rounded-2xl md:!rounded-3xl"
            contentClassName="flex items-center gap-3 px-4 py-3 justify-between"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#101010] shrink-0 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base md:text-xl font-medium truncate">
                {project.title}
              </p>
              <p className="text-base md:text-xl font-medium text-foreground/50 shrink-0">
                {project.year}
              </p>
            </div>
          </GlassButton>
          {/* Arrow link button */}
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-end absolute md:top-6 md:right-6 top-4 right-4 z-10"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/70 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-45"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-[6.25%] pt-16 md:pt-32 pb-24 md:pb-40"
    >
      <h2 className="text-[clamp(3rem,10vw,8rem)] font-medium uppercase leading-none tracking-tight mb-12 md:mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
