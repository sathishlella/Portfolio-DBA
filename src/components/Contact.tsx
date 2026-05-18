"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Globe, Code, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sathishlellaa@gmail.com",
    href: "mailto:sathishlellaa@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+60 1119998931",
    href: "tel:+601119998931",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Selangor, Malaysia",
    href: "#",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/sathishlella",
    href: "https://linkedin.com/in/sathishlella",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "github.com/sathishlella",
    href: "https://github.com/sathishlella",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="text-muted mb-12 max-w-xl">
            I am actively interviewing for AI Engineering roles in Singapore and
            remote positions. If you are hiring or want to collaborate, reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-border-hover transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                    <method.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-dark">{method.label}</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-accent-cyan transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-surface border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Message
              </h3>
              <p className="text-sm text-muted mb-4">
                Prefer to send a quick note? Click below to open your email client
                with a pre-filled subject.
              </p>
              <a
                href="mailto:sathishlellaa@gmail.com?subject=Opportunity%20for%20Sathish%20Lella"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-cyan text-background font-semibold hover:bg-accent-cyan/90 transition-colors"
              >
                <Send size={16} />
                Send Email
              </a>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs text-muted-dark mb-2">
                  Availability
                </div>
                <div className="text-sm text-foreground">
                  Monday – Friday: Full-time
                </div>
                <div className="text-sm text-muted">
                  Saturday – Sunday: DBA classes (Taylor&apos;s University)
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
