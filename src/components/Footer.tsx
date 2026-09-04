"use client";

import React from "react";
import { ArrowUp, Code2, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand / Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-white font-bold tracking-tight text-base">
                Jaya Chandra Prakash Pavan Kumar Putta
              </span>
              <span className="block text-xs text-slate-500">
                Full Stack Web Developer • MERN &amp; Next.js
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-slate-400"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-slate-400"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-slate-400"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-slate-400"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Jaya Chandra Prakash Pavan Kumar Putta. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with Next.js App Router, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
