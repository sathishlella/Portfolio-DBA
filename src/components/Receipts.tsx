"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";

const stats = [
  { value: 15, suffix: "+", label: "Production AI agents shipped", caption: "across multi-agent, RAG, and rule-engine architectures" },
  { value: 695, suffix: "", label: "GitHub contributions, last 12 months", caption: "649 commits across 56 public repos" },
  { value: 1494, suffix: "", label: "LinkedIn impressions on Day 6", caption: "GitPulse AI launch · 100 Days, 100 Agents" },
  { value: 210, suffix: "+", label: "AI students mentored", caption: "real-time agent projects, multi-month engagements" },
  { value: 5, suffix: "", label: "Publications", caption: "CRC Press / Wiley · Springer · Zenodo · IEEE JBHI (under review)" },
  { value: 70, suffix: "%", label: "Manual recruiter effort eliminated", caption: "at F1 Dream Jobs, via AI candidate matching" },
];

export default function Receipts() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="receipts" className="relative px-6 py-32 md:px-14 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="kicker mb-4">// RECEIPTS</div>
            <h2 className="headline text-[clamp(2.5rem,7vw,6rem)] text-ink">
              Numbers,{" "}
              <span className="headline-italic text-accent">verified.</span>
            </h2>
          </div>
          <p className="max-w-md text-balance text-ink-dim">
            Every figure below is auditable from public sources — GitHub, LinkedIn,
            published papers, and live deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.06,
              }}
              className="relative bg-bg p-8 md:p-10"
            >
              <div className="dim-kicker mb-4">{`0${i + 1}`}</div>
              <div className="headline mb-3 text-[clamp(3rem,5.5vw,5.5rem)] text-ink">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[15px] font-semibold text-ink">{s.label}</div>
              <div className="mt-2 text-[13px] text-ink-dim">{s.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
