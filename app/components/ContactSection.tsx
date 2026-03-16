"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { TextScramble } from "./TextScramble";

const contactLinks = [
  { label: "email", href: "mailto:naphak.jaengjaikul@gmail.com" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/naphak-jaengjaikul-8291b9240/",
  },
  { label: "github", href: "https://github.com/naphak89" },
  { label: "instagram", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

function ContactLink({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: false });
  const [triggerCount, setTriggerCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setTriggerCount(1);
    }
  }, [isInView]);

  const handleInteract = () => {
    setTriggerCount((c) => c + 1);
  };

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      onMouseEnter={handleInteract}
      onClick={handleInteract}
      className="text-[clamp(3rem,12vw,6rem)] font-medium uppercase leading-[1.1] text-foreground hover:opacity-60 transition-opacity w-max cursor-pointer"
    >
      <TextScramble
        as="span"
        trigger={triggerCount}
        duration={0.8}
        speed={0.04}
        className="inline"
      >
        {label}
      </TextScramble>
    </a>
  );
}

export function ContactSection() {
  return (
    <section
      id="contacts"
      className="relative py-0 pb-16 md:py-0 px-6 md:px-[6.25%] bg-background"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
        {/* Left: Contact links */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[1.5rem] font-medium uppercase tracking-tight text-foreground mb-8 md:mb-12">
            contacts
          </p>
          <div className="flex flex-col gap-2 md:gap-2">
            {contactLinks.map((link) => (
              <ContactLink
                key={link.label}
                label={link.label}
                href={link.href}
              />
            ))}
          </div>
        </div>

        {/* Right: Two image placeholders - matching Figma 536x305 */}
        {/* <div className="w-full md:w-[536px] flex flex-col gap-8 shrink-0">
          <div className="relative w-full aspect-[536/305] rounded-[20px] overflow-hidden bg-[#d9d9d9]">
            <Image
              src={dummyImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 536px"
            />
          </div>
          <div className="relative w-full aspect-[536/305] rounded-[20px] overflow-hidden bg-[#d9d9d9]">
            <Image
              src={dummyImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 536px"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
