"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Bot, FileSearch, Brain, GitBranch, Workflow, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "GitPulse AI",
    description:
      "4-agent swarm for GitHub technical due diligence. Planner, Coder, Reviewer, and Scorer agents collaborate to replace $25K manual audits at $0.05 per analysis.",
    tags: ["Multi-Agent", "Node.js", "Groq", "GitHub API"],
    icon: GitBranch,
    metric: "$25K → $0.05",
    link: "#",
  },
  {
    title: "F1 Dream Jobs CRM",
    description:
      "Fullstack AI CRM built from scratch. RAG-powered semantic candidate matching, GPT-4 integration, and automated outreach. Processes 200+ CVs daily.",
    tags: ["React", "Node.js", "GPT-4", "Vector DB"],
    icon: Bot,
    metric: "200+ CVs/day",
    link: "#",
  },
  {
    title: "ScenarioMind",
    description:
      "Multi-agent business simulation engine with debate architecture. Agents negotiate, strategize, and adapt based on opponent moves — deployed on Vercel Serverless.",
    tags: ["TypeScript", "Vercel", "Groq", "Simulation"],
    icon: Brain,
    metric: "Real-time",
    link: "#",
  },
  {
    title: "ContractScan AI",
    description:
      "60+ clause contract parsing with 80+ red flag detection and transparent risk scoring (0-100). RAG-based legal context retrieval.",
    tags: ["Python", "NLP", "Document AI"],
    icon: FileSearch,
    metric: "80+ red flags",
    link: "#",
  },
  {
    title: "SelfHeal AI",
    description:
      "Production code error detection with 200+ rule knowledge base and zero LLM dependency core. Reliable, auditable, and hallucination-free.",
    tags: ["Python", "Static Analysis", "Rule Engine"],
    icon: Workflow,
    metric: "Zero LLM core",
    link: "#",
  },
  {
    title: "FlowMap",
    description:
      "AI-powered process mining for business automation. Identifies bottlenecks, suggests optimizations, and generates improvement reports.",
    tags: ["Python", "Process Mining", "Automation"],
    icon: BarChart3,
    metric: "Auto-optimize",
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            100 AI Agents in <span className="gradient-text">100 Days</span>
          </h2>
          <p className="text-muted mb-12 max-w-2xl">
            A subset of the 15+ agents shipped into production. Each project demonstrates
            a different facet of AI engineering — from multi-agent orchestration to
            document intelligence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative p-6 rounded-xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                    <project.icon size={20} />
                  </div>
                  <span className="text-xs font-mono text-accent-violet bg-accent-violet/10 px-2 py-1 rounded">
                    {project.metric}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
