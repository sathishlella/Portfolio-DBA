import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sathish Lella — AI Engineer × Multi-Agent Systems",
  description:
    "Founding Engineer at F1 Dream Jobs. Shipping 100 production AI agents in 100 days. Published in CRC Press & Springer. McKinsey Fast Forward alum. Open to Singapore EP-sponsored and remote AI Engineer roles.",
  keywords: [
    "AI Engineer",
    "Multi-Agent Systems",
    "LLM",
    "RAG",
    "Production AI",
    "Founder",
    "Singapore Employment Pass",
    "Sathish Lella",
  ],
  authors: [{ name: "Sathish Lella" }],
  openGraph: {
    title: "Sathish Lella — AI Engineer × Multi-Agent Systems",
    description:
      "Shipping production AI agents — not demos. Not wrappers. 100 agents in 100 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
