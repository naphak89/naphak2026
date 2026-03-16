"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassButton } from "./GlassButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 md:pt-8">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-3 rounded-full">
        {navLinks.map((link) => (
          <GlassButton
            key={link.href}
            onClick={() => scrollTo(link.href)}
            size="sm"
            contentClassName="px-5 py-2.5"
          >
            {link.label}
          </GlassButton>
        ))}
      </div>

      {/* Mobile nav toggle */}
      <div className="flex md:hidden w-full justify-end">
        <GlassButton
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="!rounded-2xl"
          contentClassName="p-0"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </GlassButton>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-panel absolute top-20 right-4 left-4 md:hidden flex flex-col items-stretch gap-3 rounded-3xl p-4"
          >
            {navLinks.map((link) => (
              <GlassButton
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="w-full !rounded-2xl"
                contentClassName="w-full text-center py-3"
              >
                {link.label}
              </GlassButton>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
