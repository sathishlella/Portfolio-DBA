import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Agents from "@/components/Agents";
import Receipts from "@/components/Receipts";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <Manifesto />
        <Agents />
        <Receipts />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
