"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "IEEE JBHI Publication",
    description: "Manuscript under review in IEEE Journal of Biomedical and Health Informatics.",
    venue: "IEEE JBHI",
    status: "Under Review",
    link: "#",
  },
  {
    title: "Zenodo DOI 10.5281/zenodo.18453640",
    description: "Published research dataset and methodology documentation.",
    venue: "Zenodo",
    status: "Published",
    link: "https://doi.org/10.5281/zenodo.18453640",
  },
  {
    title: "CRC Press — WILEY Publication",
    description: "Contributed chapter on applied AI systems in healthcare.",
    venue: "CRC Press / WILEY",
    status: "Published",
    link: "#",
  },
  {
    title: "Springer Publication",
    description: "Research on machine learning applications in business intelligence.",
    venue: "Springer",
    status: "Published",
    link: "#",
  },
];

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            Publications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Research & <span className="gradient-text">Publications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-border-hover transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-accent-violet/10 text-accent-violet">
                    <FileText size={18} />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      pub.status === "Published"
                        ? "bg-accent-teal/10 text-accent-teal"
                        : "bg-accent-cyan/10 text-accent-cyan"
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent-violet transition-colors">
                  {pub.title}
                </h3>
                <div className="text-xs text-accent-violet/80 font-medium mb-2">
                  {pub.venue}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {pub.description}
                </p>

                {pub.link !== "#" && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent-violet hover:text-accent-violet/80 transition-colors"
                  >
                    View Publication <ExternalLink size={13} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
