"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import Marquee from "./Marquee";

interface Agent {
  num: string;
  title: string;
  blurb: string;
  metric: string;
  tags: string[];
  href?: string;
  repo: string;
  accent: "vermilion" | "violet" | "cyan" | "gold";
}

const agents: Agent[] = [
  {
    num: "01",
    title: "GitPulse AI",
    blurb:
      "4-agent due-diligence swarm — Planner, Coder, Reviewer, Scorer — turning a GitHub URL into an investment-grade dossier in 30 seconds. Replaces what costs a senior engineer 4–8 hours.",
    metric: "$25K → $0.05 / analysis",
    tags: ["Multi-Agent", "Node.js", "Groq", "GitHub API"],
    href: "https://gitpulse-ai.vercel.app",
    repo: "https://github.com/sathishlella/gitpulse-ai",
    accent: "vermilion",
  },
  {
    num: "02",
    title: "SelfHeal AI",
    blurb:
      "Production code error detection across 120+ patterns and 8 languages — Python, TS, Go, Rust, Java and more. A 200+ rule knowledge base does the heavy lifting; LLM is optional, not load-bearing.",
    metric: "Zero-LLM core engine",
    tags: ["Python", "Static Analysis", "Rule Engine"],
    repo: "https://github.com/sathishlella/selfheal",
    accent: "cyan",
  },
  {
    num: "03",
    title: "ContractScan AI",
    blurb:
      "Risk-scoring contract analyzer — 60+ clause-type parsing, 80+ red-flag detection, and a negotiation playbook generated in 3 seconds. Auditable scoring, no hallucinated legal advice.",
    metric: "Sign · negotiate · walk",
    tags: ["RAG", "Document AI", "Risk Scoring"],
    href: "https://contract-scan-gilt.vercel.app",
    repo: "https://github.com/sathishlella/ContractScan",
    accent: "gold",
  },
  {
    num: "04",
    title: "FlowMap AI",
    blurb:
      "Autonomous process discovery shipping as Chrome + VS Code extensions. Maps how you actually work, finds the bottleneck, and suggests where to automate. Replaces a four-week consulting engagement.",
    metric: "Replaces $50K–$200K consulting",
    tags: ["Chrome Ext", "Process Mining", "Automation"],
    repo: "https://github.com/sathishlella/FlowMap-AI",
    accent: "violet",
  },
  {
    num: "05",
    title: "ScenarioMind",
    blurb:
      "Multi-agent business simulation with debate, consensus, and confidence scoring across 9+ agents. Negotiation theory meets real-time orchestration — deployed on Groq + Vercel Serverless.",
    metric: "9+ agents · real-time",
    tags: ["TypeScript", "Groq", "Llama 3.3", "Vercel"],
    href: "https://scenario-mind.vercel.app",
    repo: "https://github.com/sathishlella/ScenarioMind",
    accent: "vermilion",
  },
  {
    num: "06",
    title: "F1 Dream Jobs Platform",
    blurb:
      "Fullstack AI CRM built from scratch as Founding Engineer — TypeScript + React + Node + Postgres + GPT-4. RAG-powered semantic candidate matching processes 200+ CVs daily. Reduced manual recruiter effort by 70%.",
    metric: "200+ CVs/day · 70% manual ↓",
    tags: ["Fullstack", "RAG", "GPT-4", "Vector DB"],
    repo: "https://github.com/sathishlella",
    accent: "cyan",
  },
];

const accentMap: Record<Agent["accent"], string> = {
  vermilion: "text-accent",
  violet: "text-violet",
  cyan: "text-cyan",
  gold: "text-accent-warm",
};

export default function Agents() {
  return (
    <section id="agents" className="relative px-6 py-32 md:px-14 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="kicker mb-4">// PRODUCTION AGENTS · SHIPPED · AUDITED · LIVE</div>
            <h2 className="headline text-[clamp(2.5rem,7vw,6rem)] text-ink">
              Six selected from{" "}
              <span className="headline-italic text-accent">fifteen</span>
            </h2>
          </div>
          <p className="max-w-md text-balance text-ink-dim">
            Each agent below is open-source, deployed, and verifiable. Every
            metric is real, every claim is checkable. No demos, no wrappers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <AgentCard key={a.num} agent={a} index={i} accentClass={accentMap[a.accent]} />
          ))}
        </div>

        <div className="mt-20">
          <Marquee>
            {[
              "MULTI-AGENT ORCHESTRATION",
              "RAG PIPELINES",
              "VECTOR DATABASES",
              "LLM EVAL",
              "PROMPT ENG",
              "PRODUCTION INFRA",
              "ZERO-LLM CORE",
              "AGENT FRAMEWORKS",
              "100 DAYS, 100 AGENTS",
            ].map((tok) => (
              <span
                key={tok}
                className="font-display text-[clamp(2.5rem,5vw,5rem)] italic text-ink-faint"
              >
                <span className="text-accent">×</span> {tok}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  agent,
  index,
  accentClass,
}: {
  agent: Agent;
  index: number;
  accentClass: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.05 + (index % 3) * 0.08,
      }}
      className="group"
    >
      <TiltCard intensity={6} className="h-full">
        <div className="card-edge relative flex h-full flex-col rounded-2xl p-7">
          <div className="mb-6 flex items-start justify-between">
            <span className={`font-mono text-xs tracking-[0.3em] ${accentClass}`}>
              [{agent.num}]
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-dim">
              {agent.metric}
            </span>
          </div>

          <h3 className="headline mb-4 text-[clamp(1.5rem,2.3vw,2rem)] text-ink">
            {agent.title}
          </h3>

          <p className="mb-7 text-[15px] leading-relaxed text-ink-dim">{agent.blurb}</p>

          <div className="mb-7 flex flex-wrap gap-2">
            {agent.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/8 px-3 py-1 font-mono text-[10px] tracking-widest text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-5 pt-4">
            {agent.href && (
              <a
                href={agent.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${accentClass} transition-transform group-hover:translate-x-0.5`}
              >
                Live demo
                <span className="font-mono text-[10px]">↗</span>
              </a>
            )}
            <a
              href={agent.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/80 transition-colors hover:text-ink"
            >
              Source
              <span className="font-mono text-[10px]">↗</span>
            </a>
          </div>

          {/* Decorative corner */}
          <svg
            aria-hidden
            className="absolute right-4 top-4 opacity-15"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M1 1 L13 1 L13 13"
              stroke="#F5F0E8"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </TiltCard>
    </motion.div>
  );
}
