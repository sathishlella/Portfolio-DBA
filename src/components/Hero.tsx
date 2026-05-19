"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 80, damping: 22 });
  const smy = useSpring(my, { stiffness: 80, damping: 22 });
  const orbX = useTransform(smx, [0, 1], ["-8%", "8%"]);
  const orbY = useTransform(smy, [0, 1], ["-6%", "6%"]);
  const gradX = useTransform(smx, [0, 1], ["35%", "65%"]);
  const gradY = useTransform(smy, [0, 1], ["35%", "65%"]);
  const gradient = useTransform(
    [gradX, gradY] as never,
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255, 69, 0, 0.22), transparent 50%)`
  );

  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const sg = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(d);
      setTime(sg);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const headlineWords = ["I", "ship", "production"];
  const headlineWords2 = ["AI", "agents."];

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-20 md:pt-0"
    >
      {/* Cursor-tracking gradient mesh */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: gradient }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Floating orb */}
      <motion.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden md:block"
      >
        <div className="float-y relative">
          <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
            <defs>
              <radialGradient id="orb" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0B0908" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="orbInner" cx="40%" cy="40%" r="40%">
                <stop offset="0%" stopColor="#FFB037" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="180" cy="180" r="170" fill="url(#orb)" />
            <circle cx="160" cy="160" r="60" fill="url(#orbInner)" />
            {/* orbital rings */}
            <g
              fill="none"
              stroke="#F5F0E8"
              strokeOpacity="0.16"
              strokeWidth="0.8"
            >
              <ellipse cx="180" cy="180" rx="150" ry="50">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 180 180"
                  to="360 180 180"
                  dur="34s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="180" cy="180" rx="120" ry="40">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 180 180"
                  to="0 180 180"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="180" cy="180" rx="90" ry="28">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 180 180"
                  to="360 180 180"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>
            {/* satellite dots */}
            <g>
              <circle cx="330" cy="180" r="3.5" fill="#FF4500">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 180 180"
                  to="360 180 180"
                  dur="9s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="30" cy="180" r="3" fill="#00F0FF">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="180 180 180"
                  to="540 180 180"
                  dur="11s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="180" cy="30" r="2.8" fill="#FFB037">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="90 180 180"
                  to="450 180 180"
                  dur="13s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Top status bar — desktop only (navbar shows name on mobile) */}
      <div className="absolute left-0 right-0 top-0 z-20 hidden items-center justify-between px-8 py-6 md:flex md:px-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="kicker"
        >
          ★ Sathish Lella — Portfolio v2.6
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="dim-kicker"
        >
          Selangor → Singapore · SGT {time || "—"}
        </motion.div>
      </div>

      {/* Headline */}
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 pb-16 pt-12 md:min-h-[100svh] md:justify-end md:px-14 md:pb-24 md:pt-40">
        <div className="kicker mb-6 flex items-center gap-2">
          <span className="relative inline-block h-2 w-2 rounded-full bg-accent align-middle">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent" />
          </span>
          <span className="md:hidden">F1 Dream Jobs · Open to SG EP roles</span>
          <span className="hidden md:inline">
            Founding Engineer @ F1 Dream Jobs · Open to SG EP-sponsored roles
          </span>
        </div>

        <h1 className="headline mb-2 text-[clamp(3.5rem,12vw,12rem)] text-ink">
          {headlineWords.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline pr-[0.18em]">
              <motion.span
                initial={{ y: "110%", rotate: 6 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + i * 0.07,
                }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <h1 className="headline text-[clamp(3.5rem,12vw,12rem)] text-ink">
          {headlineWords2.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline pr-[0.18em]">
              <motion.span
                initial={{ y: "110%", rotate: -6 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.07,
                }}
                className={`inline-block ${i === 0 ? "headline-italic text-accent" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
          style={{ originX: 0 }}
          className="mt-8 h-px w-full max-w-[820px] bg-gradient-to-r from-accent via-violet to-cyan"
        />

        {/* Tagline + meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <p className="col-span-1 max-w-[640px] text-balance text-xl text-ink-dim md:col-span-7 md:text-2xl">
            <span className="font-display italic text-ink">Not demos. Not wrappers.</span>{" "}
            Founding Engineer who's shipped <span className="text-accent">15+ production AI agents</span> across multi-agent
            orchestration, RAG pipelines, and zero-LLM rule engines. Building one
            new agent every day, in public, for 100 days.
            <span className="caret ml-1 inline-block h-5 w-[3px] -translate-y-[2px] bg-accent" />
          </p>

          <div className="col-span-1 grid grid-cols-2 gap-6 md:col-span-5 md:gap-8">
            <Stat label="Production Agents" value="15+" />
            <Stat label="Publications" value="5" />
            <Stat label="GitHub Repos" value="56" />
            <Stat label="DBA · Taylor's" value="2026—29" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#agents" strength={0.4}>
            <span className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-bg transition-colors hover:bg-accent-warm">
              See the agents
              <span className="font-mono text-[10px] tracking-[0.2em] opacity-70 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </MagneticButton>
          <MagneticButton href="#contact" strength={0.3}>
            <span className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent">
              Hire me
              <span className="font-mono text-[10px] opacity-70">↘</span>
            </span>
          </MagneticButton>
          <a
            href="#manifesto"
            className="ml-2 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-dim hover:text-accent"
          >
            Scroll ↓
          </a>
        </motion.div>
      </div>

      {/* Corner registration marks */}
      <CornerMarks />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-ink md:text-4xl">{value}</div>
      <div className="dim-kicker mt-1">{label}</div>
    </div>
  );
}

function CornerMarks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Corner className="left-6 top-6" angle={0} />
      <Corner className="right-6 top-6" angle={90} />
      <Corner className="left-6 bottom-6" angle={270} />
      <Corner className="right-6 bottom-6" angle={180} />
    </div>
  );
}

function Corner({ className = "", angle = 0 }: { className?: string; angle?: number }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <path
        d="M2 2 L2 14 M2 2 L14 2"
        stroke="#F5F0E8"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
    </svg>
  );
}
