"use client";

import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/8 bg-bg">
      <Marquee className="border-b border-ink/8 py-10" reverse>
        {[
          "AVAILABLE FOR HIRE",
          "SINGAPORE EP-SPONSORED",
          "REMOTE WORLDWIDE",
          "AI ENGINEER",
          "MULTI-AGENT SYSTEMS",
          "100 DAYS, 100 AGENTS",
          "MAY 2026",
        ].map((tok) => (
          <span
            key={tok}
            className="font-display text-[clamp(3rem,7vw,7rem)] italic text-ink-faint"
          >
            <span className="text-accent">·</span> {tok}
          </span>
        ))}
      </Marquee>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:px-14">
        <div className="md:col-span-5">
          <div className="font-display text-3xl text-ink">
            Sathish <span className="italic text-accent">Lella.</span>
          </div>
          <p className="mt-4 max-w-md text-[14px] text-ink-dim">
            AI Engineer · Multi-Agent Systems · Founding Engineer @ F1 Dream Jobs.
            Shipping production AI agents — not demos. Not wrappers.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="dim-kicker mb-4">Sections</div>
          <ul className="space-y-2 text-[13px]">
            <li><a href="#manifesto" className="text-ink hover:text-accent">Manifesto</a></li>
            <li><a href="#agents" className="text-ink hover:text-accent">Agents</a></li>
            <li><a href="#receipts" className="text-ink hover:text-accent">Receipts</a></li>
            <li><a href="#experience" className="text-ink hover:text-accent">Career</a></li>
            <li><a href="#research" className="text-ink hover:text-accent">Research</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="dim-kicker mb-4">Channels</div>
          <ul className="space-y-2 text-[13px]">
            <li>
              <a href="https://github.com/sathishlella" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/sathishlella" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:sathishlellaa@gmail.com" className="text-ink hover:text-accent">Email</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="dim-kicker mb-4">Updated</div>
          <p className="text-[13px] text-ink-dim">
            Portfolio v2.6 · May 18, 2026 · Built with Next.js 16, Framer Motion,
            and an unreasonable amount of attention to type.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-ink/8 px-6 py-6 text-[11px] text-ink-faint md:flex-row md:items-center md:justify-between md:px-14">
        <div className="font-mono uppercase tracking-[0.25em]">
          © 2026 Sathish Lella · All rights reserved
        </div>
        <div className="font-mono uppercase tracking-[0.25em]">
          Selangor, Malaysia → Singapore
        </div>
      </div>
    </footer>
  );
}
