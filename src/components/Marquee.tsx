"use client";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ children, reverse = false, className = "" }: Props) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
