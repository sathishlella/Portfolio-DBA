"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:px-14 md:py-48"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="kicker mb-8"
        >
          // Let&apos;s talk
        </motion.div>

        <h2 className="headline mb-8 text-[clamp(3rem,9vw,9rem)] text-ink">
          {["Hiring", "for", "an", "AI"].map((w, i) => (
            <Word key={i} word={w} delay={0.1 + i * 0.05} inView={inView} />
          ))}{" "}
          <span className="headline-italic text-accent">Engineer?</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mx-auto mb-14 max-w-[680px] text-balance text-lg text-ink-dim md:text-xl"
        >
          Multi-agent systems, RAG pipelines, production AI infrastructure.
          Open to <span className="text-accent">Singapore EP-sponsored</span> roles
          and remote work with Singapore-grade comp. I reply to every email within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="mailto:sathishlellaa@gmail.com" strength={0.4}>
            <span className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-5 text-[15px] font-semibold text-bg transition-colors hover:bg-accent-warm">
              sathishlellaa@gmail.com
              <span className="font-mono text-xs opacity-70 transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          </MagneticButton>
          <MagneticButton href="https://linkedin.com/in/sathishlella" strength={0.3}>
            <span className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-8 py-5 text-[15px] font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent">
              LinkedIn
              <span className="font-mono text-xs opacity-70">↗</span>
            </span>
          </MagneticButton>
          <MagneticButton href="https://github.com/sathishlella" strength={0.3}>
            <span className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-8 py-5 text-[15px] font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent">
              GitHub
              <span className="font-mono text-xs opacity-70">↗</span>
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 gap-8 text-left md:grid-cols-4"
        >
          <Meta label="Based in" value="Selangor, Malaysia" />
          <Meta label="Targeting" value="Singapore — On-site or EP-remote" />
          <Meta label="Time zone" value="GMT+8 (SGT/MYT)" />
          <Meta label="Phone" value="+60 11 1999 8931" />
        </motion.div>
      </div>
    </section>
  );
}

function Word({ word, delay, inView }: { word: string; delay: number; inView: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-baseline pr-[0.18em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">{label}</div>
      <div className="mt-1.5 text-[14px] text-ink">{value}</div>
    </div>
  );
}
