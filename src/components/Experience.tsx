"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    company: "F1 Dream Jobs",
    title: "Chief Technology Officer",
    period: "Feb 2026 – Present",
    location: "Remote",
    highlights: [
      "Built fullstack AI CRM from scratch (React, Node.js, PostgreSQL, GPT-4)",
      "RAG pipeline processing 200+ CVs/day with semantic matching",
      "Onboarded 220+ candidates onto LLM-powered tools",
      "Reduced manual screening effort by 70%+",
    ],
  },
  {
    company: "Velden Health",
    title: "Founder & Technical Lead",
    period: "Jun 2025 – Apr 2026",
    location: "Greater Chicago Area · Hybrid",
    highlights: [
      "Built AI-powered revenue recovery system for healthcare",
      "Predictive scoring and automated dashboards for 1,000+ insurance claims",
      "Managed stakeholder relationships with healthcare professionals",
    ],
  },
  {
    company: "Freelance",
    title: "AI Solutions Engineer & Data Specialist",
    period: "May 2024 – May 2025",
    location: "Remote",
    highlights: [
      "Delivered custom AI solutions to multiple enterprise clients",
      "AI resume ranker + job matching bot (GPT-4, vector DB)",
      "GPT-based interview agent with 4.7/5 avg rating from 50+ users",
    ],
  },
  {
    company: "Mphasis",
    title: "Associate Software Engineer",
    period: "Aug 2021 – Dec 2022",
    location: "Bangalore, India",
    highlights: [
      "UI enhancements with JavaScript → 20% increase in user engagement",
      "API key generation scripts (SQL + NoSQL) → 50% reduction in manual effort",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I have <span className="gradient-text">built</span>
          </h2>

          <div className="space-y-10">
            {roles.map((role, i) => (
              <motion.div
                key={role.company + role.period}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-[140px] top-2 bottom-0 w-px bg-border" />
                <div className="hidden md:block absolute left-[136px] top-2 w-2.5 h-2.5 rounded-full bg-accent-cyan ring-4 ring-accent-cyan/20" />

                <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
                  <div className="text-sm text-muted font-mono mb-2 md:mb-0 md:text-right">
                    {role.period}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <div className="text-sm text-accent-violet font-medium mb-1">
                      {role.company}
                    </div>
                    <div className="text-xs text-muted-dark mb-3">
                      {role.location}
                    </div>
                    <ul className="space-y-1.5">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-muted leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent-cyan mt-1.5">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
