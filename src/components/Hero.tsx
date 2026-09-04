"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  MapPin,
  FileCode2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-200">
            Available for Full-Time Roles & Immediate Joining
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-blue-400 font-medium">
            <MapPin className="w-3 h-3" /> AP, India
          </span>
        </motion.div>

        {/* Candidate Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Jaya Chandra Prakash <br className="hidden sm:inline" />
          <span className="text-gradient-accent">Pavan Kumar</span> Putta
        </motion.h1>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-400/90 mb-4 tracking-wide flex items-center justify-center gap-2">
            <FileCode2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 hidden sm:inline" />
            Full Stack Web Developer <span className="text-slate-500 font-normal">|</span> MERN &amp; Next.js
          </h2>
        </motion.div>

        {/* Sub-headline / Elevator Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-normal"
        >
          Building scalable, high-performance web applications with clean component architecture, robust backend APIs, and production-ready technologies like <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">PostgreSQL</span>.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* Primary CTA: View Projects */}
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-base"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Download Resume (Pulsing) */}
          <a
            href={PERSONAL_INFO.resumePath}
            download={PERSONAL_INFO.resumeFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border-2 border-blue-500/60 hover:border-blue-400 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-base pulse-button-glow"
            title="Download Jaya Chandra Prakash Pavan Kumar's Resume (.PDF)"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
            <span className="text-[11px] font-mono uppercase bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
              PDF
            </span>
          </a>
        </motion.div>

        {/* Direct Social & Quick Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-medium shadow-sm hover:shadow"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-medium shadow-sm hover:shadow"
          >
            <Github className="w-4 h-4 text-slate-100" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-medium shadow-sm hover:shadow"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-medium shadow-sm hover:shadow"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </motion.div>

        {/* Recruiter Quick Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center hover:border-slate-700/80 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{stat.value}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
