"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Cpu,
  Wrench,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Development": <Code className="w-5 h-5 text-blue-400" />,
    "Backend & API Services": <Server className="w-5 h-5 text-emerald-400" />,
    "Databases & Storage": <Database className="w-5 h-5 text-amber-400" />,
    "Core Engineering & Architecture": <Cpu className="w-5 h-5 text-cyan-400" />,
    "Developer Tools & Platforms": <Wrench className="w-5 h-5 text-purple-400" />,
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A production-tested technology stack focused on building reliable, responsive user interfaces and high-throughput backend services.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.category] || <Sparkles className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/70 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-blue-400/80 group-hover:translate-x-0.5 transition-transform">
                  Verified ✓
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
