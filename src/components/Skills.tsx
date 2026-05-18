"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Agent & LLM",
    skills: [
      "LangChain",
      "LangGraph",
      "ReAct",
      "RAG",
      "Vector DBs",
      "Prompt Engineering",
      "Multi-Agent Orchestration",
      "Tool Calling",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Go (Learning)"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Vector DBs", "Redis"],
  },
  {
    title: "AI/ML Models",
    skills: ["GPT-4", "Claude", "Llama", "Mistral", "Embeddings", "Fine-tuning APIs"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Vercel", "CI/CD", "Docker", "GitHub Actions", "Cloud Bootcamp"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="gradient-text">stack</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
