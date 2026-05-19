"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface Role {
  status: "active" | "past";
  title: string;
  company: string;
  period: string;
  location: string;
  body: string;
  stack: string[];
}

const roles: Role[] = [
  {
    status: "active",
    title: "Founding Engineer",
    company: "F1 Dream Jobs",
    period: "Feb 2026 — Present",
    location: "India · Remote",
    body: "Sole technical owner of an AI-powered recruiting platform. Built a fullstack CRM from scratch (TypeScript + React + Node + Postgres + GPT-4) processing 200+ CVs/day. Designed a RAG pipeline with vector DB for semantic candidate matching. AI agents for outreach, interview prep, and screening reduced manual recruiter effort by 70%+.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "GPT-4", "Claude API", "Vercel"],
  },
  {
    status: "past",
    title: "Founder & Technical Lead",
    company: "Velden Health",
    period: "Jun 2025 — Apr 2026",
    location: "Greater Chicago · Hybrid · Wound down",
    body: "Founded a healthcare revenue recovery firm for outpatient behavioral-health practices. Built the entire technical infrastructure — a custom OS tracking 1,000+ insurance claims across the full denial lifecycle, A/R aging dashboards, denial-pattern automation, and predictive recovery scoring.",
    stack: ["Python", "JavaScript", "Power BI", "SQL", "REST APIs"],
  },
  {
    status: "past",
    title: "AI Solutions Engineer & Data Specialist",
    company: "Freelance",
    period: "May 2024 — May 2025",
    location: "Remote",
    body: "Built and deployed a GPT-4 + vector-DB resume ranker auto-screening 200+ CVs/day with 78% manual-time reduction. Delivered a GPT-based interview agent rated 4.7/5 by 50+ users. Automated weekly Power BI reports eliminating ~10 hours/month of manual Excel work for clients.",
    stack: ["GPT-4", "Vector DB", "Python", "Power BI"],
  },
  {
    status: "past",
    title: "Academic Graduate Assistant",
    company: "Lewis University",
    period: "Jan 2024 — May 2024",
    location: "Romeoville, Illinois · On-site",
    body: "Instructed undergraduates in data analytics and Big Data programming. Collaborated on advanced data-science research initiatives with faculty.",
    stack: ["Python", "Data Analytics", "Research"],
  },
  {
    status: "past",
    title: "Associate Software Engineer",
    company: "Mphasis",
    period: "Aug 2021 — Dec 2022",
    location: "Bangalore, India",
    body: "UI enhancements with JavaScript + database integration → 20% user-engagement lift, 15% load-time reduction. Built SQL + NoSQL API-key generation scripts cutting manual authentication effort by 50%. Postman endpoint testing in a Scrum/Agile framework with Git.",
    stack: ["JavaScript", "SQL", "NoSQL", "Postman", "Git"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.3", "end 0.7"],
  });
  const lineY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 24,
  });

  return (
    <section ref={ref} id="experience" className="relative px-6 py-32 md:px-14 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <div className="kicker mb-4">// TRAJECTORY</div>
          <h2 className="headline text-[clamp(2.5rem,7vw,6rem)] text-ink">
            Five years.{" "}
            <span className="headline-italic text-accent">Three companies.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-[200px_1fr] md:gap-12">
          <div className="pointer-events-none absolute left-2 top-2 hidden h-full w-px bg-ink/8 md:block md:left-[8px]">
            <motion.div
              style={{ height: lineY }}
              className="w-px origin-top bg-gradient-to-b from-accent via-violet to-cyan"
            />
          </div>

          <div className="hidden md:block" aria-hidden />
          <div className="space-y-24">
            {roles.map((role, i) => (
              <RoleBlock key={i} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleBlock({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 * index }}
      className="relative"
    >
      <div className="absolute -left-[44px] top-3 hidden md:block">
        <div
          className={`relative h-4 w-4 rounded-full ${
            role.status === "active" ? "bg-accent" : "bg-ink/15"
          }`}
        >
          {role.status === "active" && (
            <div className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-12">
        <div className="md:w-[180px] md:pt-1">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
            {role.period}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
            {role.location}
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="headline text-[clamp(1.5rem,2.8vw,2.4rem)] text-ink">
              {role.title}
            </h3>
            <span className="font-display text-2xl italic text-accent">@ {role.company}</span>
          </div>

          <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-ink-dim">
            {role.body}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {role.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink/8 px-3 py-1 font-mono text-[10px] tracking-widest text-ink-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
