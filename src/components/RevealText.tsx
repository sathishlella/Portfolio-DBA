"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: string;
  className?: string;
  delay?: number;
  staggerWords?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  staggerWords = true,
  as = "p",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Tag = motion[as] as React.ElementType;

  if (!staggerWords) {
    return (
      <Tag
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
        className={className}
      >
        {children}
      </Tag>
    );
  }

  const words = children.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em]">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.05,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
