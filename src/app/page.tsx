import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Resume CTA and metrics */}
        <Hero />

        {/* Skills & Competencies */}
        <Skills />

        {/* Featured Projects (EH_CART, Job Portal) */}
        <Projects />

        {/* Vertical Timeline (AICTE Internship & Education) */}
        <Timeline />

        {/* Direct Contact & Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
