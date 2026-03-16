'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacts', href: '#contacts' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 md:pt-8">
      {/* Desktop nav */}
      <div className="glass-panel hidden md:flex items-center gap-10 rounded-full px-10 py-5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg font-medium text-foreground transition-opacity hover:opacity-60"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile nav toggle */}
      <div className="flex md:hidden w-full justify-end">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass-panel rounded-2xl p-3"
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
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass-panel absolute top-20 right-4 left-4 md:hidden flex flex-col items-center gap-4 rounded-3xl py-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-foreground transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
