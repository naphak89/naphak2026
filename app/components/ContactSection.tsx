"use client";

import Image from "next/image";

const contactLinks = [
  { label: "email", href: "mailto:naphak.jaengjaikul@gmail.com" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/naphak-jaengjaikul-8291b9240/",
  },
  { label: "github", href: "https://github.com/naphak89" },
  { label: "instagram", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const dummyImage = "/mainProjectPictures/StoryMapMainPic.png";

export function ContactSection() {
  return (
    <section
      id="contacts"
      className="relative py-24 md:py-16 px-6 md:px-[6.25%] bg-background"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
        {/* Left: Contact links */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[1.5rem] font-medium uppercase tracking-tight text-foreground mb-8 md:mb-12">
            contacts
          </p>
          <div className="flex flex-col gap-2 md:gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-[clamp(3rem,12vw,6rem)] font-medium uppercase leading-[1.1] text-foreground hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
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
