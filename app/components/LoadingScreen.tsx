"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TextScramble } from "./TextScramble";

const LOOP_TEXT = "Naphak Jaengjaikul";

export function LoadingScreen() {
  const [triggerCount, setTriggerCount] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleScrambleComplete = () => {
    timerRef.current = setTimeout(() => {
      setTriggerCount((c) => c + 1);
    }, 2000);
  };

  const words = LOOP_TEXT.split(" ");
  const firstLine = words.length > 1 ? words.slice(0, -1).join(" ") : words[0];
  const secondLine = words.length > 1 ? words[words.length - 1] : "";

  return (
    <motion.div
      initial={false}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Dotted background - same as hero */}
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
            id="loadingDottedGrid"
          >
            <circle
              fill="oklch(from var(--foreground) l c h / 30%)"
              r="1"
              cy="2"
              cx="2"
            />
          </pattern>
        </defs>
        <rect fill="url(#loadingDottedGrid)" height="100%" width="100%" />
      </svg>
      {/* Looping text - same structure & animation as hero */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none select-none">
        <TextScramble
          as="h1"
          trigger={triggerCount}
          onScrambleComplete={handleScrambleComplete}
          duration={0.8}
          speed={0.04}
          className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(2.5rem,13vw,16rem)]"
        >
          {firstLine}
        </TextScramble>
        {secondLine && (
          <TextScramble
            as="h1"
            trigger={triggerCount}
            duration={0.8}
            speed={0.04}
            className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(2.5rem,13vw,16rem)]"
          >
            {secondLine}
          </TextScramble>
        )}
      </div>
    </motion.div>
  );
}
