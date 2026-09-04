"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { TIMELINE } from "@/data/portfolio-data";

export function Timeline() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Experience &amp; Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A timeline of academic foundation, hands-on internships, and continuous technical growth.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central spine line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-800" />

          <div className="space-y-10">
            {TIMELINE.map((item, index) => {
              const isWork = item.type === "experience";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline icon node */}
                  <div
                    className={`absolute left-1 sm:left-5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center -translate-x-1/2 border-2 ${
                      isWork
                        ? "bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-500/40"
                        : "bg-slate-900 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-500/30"
                    }`}
                  >
                    {isWork ? (
                      <Briefcase className="w-3.5 h-3.5" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/5 group">
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                            isWork
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          }`}
                        >
                          {item.badge}
                        </span>

                        {item.scoreOrDuration && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25">
                            <Award className="w-3 h-3" />
                            {item.scoreOrDuration}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Role / Degree */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Organization / Institution */}
                    <p className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.organization}</span>
                    </p>

                    {/* Description bullet points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
