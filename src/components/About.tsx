"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";

const stats = [
  { icon: Rocket, label: "AI Agents Shipped", value: "15+" },
  { icon: Briefcase, label: "Companies Founded", value: "2" },
  { icon: GraduationCap, label: "Degrees", value: "MS + DBA" },
  { icon: MapPin, label: "Base", value: "Malaysia" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Founder. Engineer. <span className="gradient-text">Agent Builder.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                I am an <strong className="text-foreground">AI Engineer</strong> with
                founder-level ownership. Over the past two years, I have built and
                deployed <strong className="text-foreground">15+ AI agents</strong> into
                production — from multi-agent swarms for technical due diligence to
                RAG-powered candidate matching systems processing 200+ documents daily.
              </p>
              <p>
                As <strong className="text-foreground">CTO of F1 Dream Jobs</strong>, I
                architected a fullstack AI CRM from scratch (React, Node.js,
                PostgreSQL, GPT-4) and onboarded 220+ candidates onto LLM-powered
                tools. As founder of Velden Health, I built AI systems for healthcare
                revenue recovery handling 1,000+ insurance claims.
              </p>
              <p>
                I am currently pursuing a <strong className="text-foreground">Doctor of Business Administration</strong>{" "}
                at Taylor's University (weekend classes) to deepen my strategic
                leadership capabilities — with a 5-7 year trajectory toward CTO/CAO
                roles in AI-driven organizations.
              </p>
              <p>
                I am targeting <strong className="text-foreground">Singapore-based AI Engineering roles</strong>{" "}
                (with EP sponsorship) or remote contracts from Malaysia. My
                compensation target is SGD 96K–144K/year.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-border-hover transition-colors"
                >
                  <stat.icon className="text-accent-cyan mb-3" size={22} />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
