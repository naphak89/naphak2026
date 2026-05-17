"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const aboutText =
  'Full-stack Developer that can design, specialized in mobile app and web app development. I help bring digital products to life with smooth, interactive and "premium" experience';

function ScrollRevealText({
  text,
  scrollYProgress,
}: {
  text: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const chars = text.split("");

  return (
    <p className="text-[clamp(1.8rem,4vw,4rem)] font-medium leading-[1.1] max-w-3xl">
      {chars.map((char, i) => (
        <ScrollChar
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function ScrollChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 md:pb-24 px-6 md:px-[6.25%]"
    >
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-10 md:gap-16 md:relative"
      >
        <div className="flex-1 md:pr-[calc(37%+4rem)]">
          <p className="text-sm font-medium uppercase tracking-widest text-[rgba(16,16,16,0.6)] mb-6">
            Myself
          </p>
          <ScrollRevealText
            text={aboutText}
            scrollYProgress={scrollYProgress}
          />
        </div>

        <div className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[37%]">
          <div className="rounded-2xl overflow-hidden h-full">
            <Image
              src="/kayakPic.jpg"
              alt="Naphak kayaking"
              width={708}
              height={431}
              className="w-full h-auto aspect-square md:h-full object-cover object-[100%_80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
