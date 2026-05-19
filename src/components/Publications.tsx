"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Pub {
  status: "published" | "under-review";
  title: string;
  venue: string;
  year: string;
  href?: string;
  authors?: string;
}

const pubs: Pub[] = [
  {
    status: "published",
    title: "Real-Time Monitoring and Predictive Maintenance",
    venue: "CRC Press / Wiley — Chapter 7, Industry 4.0 and Smart Manufacturing",
    year: "2024",
    href: "https://doi.org/10.1002/9781394303601.ch14",
  },
  {
    status: "published",
    title:
      "Analysis of Received Signal Strength Based on User Position Locating by Using ML Method",
    venue: "Springer — Lecture Notes in Networks and Systems",
    year: "2021",
    href: "https://link.springer.com/chapter/10.1007/978-981-15-7511-2_22",
  },
  {
    status: "published",
    title:
      "Standardizing Denial Management in Behavioral Health: A Quantitative Audit Protocol for Practice Revenue-Cycle Maturity",
    venue: "Zenodo — v1.0",
    year: "2026",
    href: "https://doi.org/10.5281/zenodo.18453640",
    authors: "Lella, S., Amulya, G., & Ruthik Reddy, C.",
  },
  {
    status: "under-review",
    title:
      "SynthERA-835: An Open-Source Synthetic X12 835 EDI Generator for Healthcare Claims Denial-Prediction Research",
    venue: "IEEE JBHI",
    year: "2026",
  },
  {
    status: "under-review",
    title:
      "Advanced Image Segmentation Analysis: A Comparative Study of CNN, Segment Anything, and U-Net Techniques",
    venue: "Under review",
    year: "2026",
  },
];

export default function Publications() {
  return (
    <section id="research" className="relative px-6 py-32 md:px-14 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="kicker mb-4">// RESEARCH</div>
            <h2 className="headline text-[clamp(2.5rem,7vw,6rem)] text-ink">
              Published &{" "}
              <span className="headline-italic text-accent">under review.</span>
            </h2>
          </div>
          <p className="max-w-md text-balance text-ink-dim">
            Five peer-reviewed and pre-print contributions across healthcare AI,
            machine learning, and Industry 4.0.
          </p>
        </div>

        <div className="divide-y divide-ink/8 border-y border-ink/8">
          {pubs.map((p, i) => (
            <PubRow key={i} pub={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PubRow({ pub, index }: { pub: Pub; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const content = (
    <div className="grid grid-cols-12 items-center gap-4 py-7 md:gap-6 md:py-9">
      <div className="col-span-12 md:col-span-1">
        <span className="font-mono text-xs tracking-[0.25em] text-accent">0{index + 1}</span>
      </div>
      <div className="col-span-12 md:col-span-7">
        <h3 className="font-display text-[clamp(1.15rem,1.8vw,1.5rem)] font-semibold leading-snug text-ink">
          {pub.title}
        </h3>
        {pub.authors && (
          <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            {pub.authors}
          </div>
        )}
      </div>
      <div className="col-span-8 md:col-span-3">
        <div className="text-[13px] text-ink-dim">{pub.venue}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          {pub.year}
        </div>
      </div>
      <div className="col-span-4 md:col-span-1 text-right">
        {pub.status === "published" ? (
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Published
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/30" /> Review
          </span>
        )}
      </div>
    </div>
  );

  const wrapped = pub.href ? (
    <a href={pub.href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="group transition-colors hover:bg-ink/[0.03]"
    >
      {wrapped}
    </motion.div>
  );
}
