"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  FolderGit2,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Radio,
  Search,
} from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Glow highlight */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Production-Grade Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Real-world applications showcasing scalable architecture, secure authentication, async job processing, and responsive UI design.
          </motion.p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Preview / Tech Header Banner */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-[#0c1322] to-slate-900 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 relative overflow-hidden">
                    {/* Background accent ring */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      {/* Badges Bar */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {project.category}
                        </span>

                        {project.timeline && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20">
                            <Calendar className="w-3 h-3" />
                            {project.timeline}
                          </span>
                        )}

                        <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                          Live &amp; Deployed
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mb-6">
                        {project.subtitle}
                      </p>

                      {/* Mockup Card / Architecture Preview Preview Box */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 shadow-inner space-y-2">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
                          <span className="text-slate-500 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                            Production Status
                          </span>
                          <span className="text-cyan-400">200 OK</span>
                        </div>

                        {project.id === "eh-cart" ? (
                          <div className="space-y-1.5 text-[11px] pt-1 text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                              <span>JWT RBAC: Admin &amp; Vendor Portals</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Stripe Webhooks &amp; Automated Checkout</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Radio className="w-3.5 h-3.5 text-amber-400" />
                              <span>BullMQ / Redis Async Job Queues</span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1.5 text-[11px] pt-1 text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <Search className="w-3.5 h-3.5 text-blue-400" />
                              <span>Fast Real-time Job Search &amp; Filters</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Responsive Mobile-First UI Architecture</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Optimized Client-side State Transitions</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/70">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                  {/* Details, Architecture, Highlights & Tech Stack */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Overview */}
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technical Accomplishments */}
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Key Engineering Highlights
                      </h4>

                      <ul className="space-y-2.5 mb-6">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Technologies &amp; Libraries
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
