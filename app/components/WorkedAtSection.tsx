"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const companies = [
  { name: "HKU", logo: "/workatPictures/hkuLogo.png" },
  { name: "Algogene", logo: "/workatPictures/algogeneLogo.png" },
  {
    name: "Standard Chartered",
    logo: "/workatPictures/standardcharteredLogo.png",
  },
  { name: "0159", logo: "/workatPictures/0159Logo.png" },

  { name: "OUT", logo: "/workatPictures/OUTLogo.png" },
];

const repeatedCompanies = [
  ...companies,
  ...companies,
  ...companies,
  ...companies,
];

export function WorkedAtSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-8 md:py-12 overflow-hidden"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-foreground/60 text-center mb-10">
        Worked At
      </p>

      <div className="relative">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, transparent 8%, transparent 92%, var(--background) 100%)",
          }}
        />

        <div className="space-y-4">
          {/* Forward row */}
          <motion.div style={{ x: x1 }} className="flex md:gap-6 gap-2 w-max">
            {repeatedCompanies.map((company, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center px-0 py-5 rounded-2xl bg-linear-to-br backdrop-blur-sm min-w-[180px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Reverse row
          <motion.div style={{ x: x2 }} className="flex gap-6 w-max">
            {repeatedCompanies.map((company, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center px-10 py-5 rounded-2xl bg-linear-to-br backdrop-blur-sm min-w-[180px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
