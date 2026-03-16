"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassButton } from "./GlassButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex md:justify-center justify-end px-4 pt-6 md:pt-8 w-full">
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
      <div className="flex md:hidden justify-end flex-col-reverse min-w-full">
        {/* Mobile menu - full width with small gap, single toggle (top-right) closes */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-panel fixed  md:hidden flex flex-col rounded-3xl p-4 gap-2 mt-2  bg-white/10 backdrop-blur-md "
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="rounded-2xl py-4 px-5 text-center text-lg font-medium text-foreground "
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Mobile nav toggle - hamburger when closed, compact square button */}
        <div className="flex md:hidden justify-end">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="glass-panel w-11 h-11 rounded-xl flex items-center justify-center shrink-0  bg-white/10 backdrop-blur-md"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="22"
              height="22"
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
          </button>
        </div>
      </div>
    </nav>
  );
}
