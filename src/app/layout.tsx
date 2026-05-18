import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sathish Lella — AI Engineer & Founder",
  description:
    "AI Engineer building multi-agent systems and production AI infrastructure. Founder of F1 Dream Jobs and Velden Health. 15+ AI agents shipped.",
  keywords: [
    "AI Engineer",
    "Multi-Agent Systems",
    "LLM",
    "Machine Learning",
    "Founder",
    "Singapore",
    "Sathish Lella",
  ],
  authors: [{ name: "Sathish Lella" }],
  openGraph: {
    title: "Sathish Lella — AI Engineer & Founder",
    description:
      "Building intelligent agents, RAG pipelines, and production AI systems. 15+ shipped agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
