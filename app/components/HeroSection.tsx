"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextScramble } from "./TextScramble";
import { GlassButton } from "./GlassButton";
import Link from "next/link";

const titles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Mobile App Developer",
  "Design Engineer",
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleScrambleComplete = () => {
    timerRef.current = setTimeout(() => {
      setTrigger(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      requestAnimationFrame(() => setTrigger(true));
    }, 2000);
  };

  const currentTitle = titles[titleIndex];
  const words = currentTitle.split(" ");
  const firstLine = words.length > 1 ? words.slice(0, -1).join(" ") : words[0];
  const secondLine = words.length > 1 ? words[words.length - 1] : "";
  const DottedBackground = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <defs>
        <pattern
          patternUnits="userSpaceOnUse"
          height="30"
          width="30"
          id="dottedGrid"
        >
          <circle
            fill="oklch(from var(--foreground) l c h / 30%)"
            r="1"
            cy="2"
            cx="2"
          ></circle>
        </pattern>
      </defs>
      <rect fill="url(#dottedGrid)" height="100%" width="100%"></rect>
    </svg>
  );
  return (
    <section
      id="home"
      className="relative flex md:min-h-screen min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden px-4"
    >
      <DottedBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <TextScramble
          as="h1"
          trigger={trigger}
          onScrambleComplete={handleScrambleComplete}
          duration={0.8}
          speed={0.04}
          className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(3rem,15vw,18rem)]"
        >
          {firstLine}
        </TextScramble>
        {secondLine && (
          <TextScramble
            as="h1"
            trigger={trigger}
            duration={0.8}
            speed={0.04}
            className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(3rem,15vw,18rem)]"
          >
            {secondLine}
          </TextScramble>
        )}
      </div>

      <div className="absolute bottom-0 translate-y-[20%]">
        <Image
          src="/profilePicture.png"
          alt="Naphak Jaengjaikul"
          width={800}
          height={1000}
          priority
          className="h-[50vh] md:h-[100vh] w-auto object-cover object-top drop-shadow-2xl"
        />
      </div>

      <div className="absolute bottom-[8%] z-20">
        <GlassButton size="lg">
          <Link href="/resume.pdf" target="_blank">
            View Resume
          </Link>
        </GlassButton>
      </div>
    </section>
  );
}
