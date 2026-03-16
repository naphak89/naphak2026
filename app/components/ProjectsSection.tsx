'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface Project {
  title: string;
  year: string;
  color: string;
  imageColor: string;
}

const projects: Project[] = [
  {
    title: 'OUT - IRL Hangout App',
    year: '2025',
    color: 'from-neutral-200 to-neutral-300',
    imageColor: 'bg-neutral-300',
  },
  {
    title: 'Circleticket.com',
    year: '2025',
    color: 'from-neutral-200 to-neutral-300',
    imageColor: 'bg-neutral-300',
  },
  {
    title: 'FinTrack Dashboard',
    year: '2024',
    color: 'from-neutral-200 to-neutral-300',
    imageColor: 'bg-neutral-300',
  },
  {
    title: 'Moodboard AI',
    year: '2024',
    color: 'from-neutral-200 to-neutral-300',
    imageColor: 'bg-neutral-300',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end 0.8'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="flex flex-col"
    >
      <div
        className={`relative rounded-[2.5rem] md:rounded-[3.5rem] bg-linear-to-br ${project.color} p-5 md:p-7 aspect-square flex flex-col`}
      >
        {/* Arrow link button */}
        <div className="self-end mb-4">
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
        </div>

        {/* Placeholder image area */}
        <div
          className={`flex-1 rounded-4xl md:rounded-[2.5rem] ${project.imageColor} overflow-hidden`}
        >
          <div className="w-full h-full flex items-center justify-center text-foreground/20 text-lg font-medium">
            Preview
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center gap-3 mt-5 px-2">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-300 shrink-0 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-foreground/30 text-xs">
            {index + 1}
          </div>
        </div>
        <p className="text-lg md:text-2xl font-medium flex-1">{project.title}</p>
        <p className="text-lg md:text-2xl font-medium text-foreground/50">
          {project.year}
        </p>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 md:px-[6.25%] pt-16 md:pt-32 pb-24 md:pb-40">
      <h2 className="text-[clamp(3rem,10vw,8rem)] font-medium uppercase leading-none tracking-tight mb-12 md:mb-20">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
