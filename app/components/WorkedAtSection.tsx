'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const companies = [
  { name: 'Standard Chartered', abbr: 'SC' },
  { name: '069', abbr: '069' },
  { name: 'HKU', abbr: 'HKU' },
  { name: 'Algogene', abbr: 'ALGO' },
  { name: 'OUT', abbr: 'OUT' },
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
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-foreground/60 text-center mb-10">
        Worked At
      </p>

      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background z-10 pointer-events-none" />

        <div className="space-y-4">
          {/* Forward row */}
          <motion.div style={{ x: x1 }} className="flex gap-6 w-max">
            {repeatedCompanies.map((company, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center px-10 py-5 rounded-2xl bg-linear-to-br from-white/80 to-white/30 border border-white/50 backdrop-blur-sm min-w-[180px]"
              >
                <span className="text-xl font-semibold text-foreground/80 tracking-tight whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Reverse row */}
          <motion.div style={{ x: x2 }} className="flex gap-6 w-max">
            {repeatedCompanies.map((company, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center px-10 py-5 rounded-2xl bg-linear-to-br from-white/80 to-white/30 border border-white/50 backdrop-blur-sm min-w-[180px]"
              >
                <span className="text-xl font-semibold text-foreground/80 tracking-tight whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
