"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  "I",
  "have",
  "founded",
  "two",
  "companies,",
  "shipped",
  "15+",
  "production",
  "AI",
  "agents,",
  "and",
  "published",
  "in",
  "CRC",
  "Press",
  "&",
  "Springer.",
  "Right",
  "now",
  "I'm",
  "building",
  "one",
  "new",
  "agent",
  "every",
  "day,",
  "for",
  "100",
  "days,",
  "in",
  "public.",
];

const accented = new Set([
  "founded",
  "15+",
  "production",
  "AI",
  "agents,",
  "published",
  "100",
  "days,",
]);

export default function Manifesto() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section id="manifesto" className="relative px-6 py-32 md:px-14 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="kicker mb-12">// MANIFESTO</div>
        <div ref={ref} className="relative">
          <p className="headline text-balance text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.05] text-ink-faint md:max-w-[1100px]">
            {words.map((w, i) => (
              <Word
                key={i}
                word={w}
                index={i}
                total={words.length}
                progress={scrollYProgress}
                accent={accented.has(w)}
              />
            ))}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="rule h-px w-24" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-dim">
            — Sathish Lella · Selangor → Singapore · May 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  progress,
  accent,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  accent: boolean;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const color = useTransform(progress, [start, end], [
    accent ? "#5C5751" : "#5C5751",
    accent ? "#FF4500" : "#F5F0E8",
  ]);
  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.25em] inline-block"
    >
      {word}
    </motion.span>
  );
}
