"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#agents", label: "Agents" },
  { href: "#receipts", label: "Receipts" },
  { href: "#experience", label: "Career" },
  { href: "#research", label: "Research" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "w-[min(720px,calc(100vw-2rem))]"
            : "w-[min(880px,calc(100vw-2rem))]"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-2.5 backdrop-blur-xl transition-colors ${
            scrolled ? "border-ink/12 bg-bg/80" : "border-ink/8 bg-bg-soft/40"
          }`}
        >
          <a
            href="#top"
            className="font-display text-base font-semibold tracking-tight text-ink"
          >
            Sathish <span className="text-accent italic">Lella.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bg transition-colors hover:bg-accent-warm"
          >
            Hire
          </a>
        </div>
      </motion.nav>

      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-accent via-violet to-cyan"
      />
    </>
  );
}
