"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  MessageSquare,
  Clock,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import confetti from "canvas-confetti";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // Confetti fallback
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try emailing directly.");
    }
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `Message from ${formData.name || "Recruiter"}`
  )}&body=${encodeURIComponent(
    `Hi Pavan,\n\n${formData.message || ""}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Let&apos;s Connect &amp; Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Actively interviewing for full-time Full Stack / Frontend Developer opportunities. Feel free to send a message or reach out directly!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex items-start gap-4 group block backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                  Direct Email
                </span>
                <span className="text-sm sm:text-base font-medium text-white group-hover:text-blue-400 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  Click to open default mail client →
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 flex items-start gap-4 group block backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                  Direct Call / WhatsApp
                </span>
                <span className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  Available Mon-Sat for discussions →
                </span>
              </div>
            </a>

            {/* Social profiles card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Professional Networks
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-blue-500/40 text-slate-200 hover:text-white text-xs font-semibold transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-semibold transition-all group"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                Typical response time: <strong className="text-white">Within 24 Hours</strong>.
              </span>
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>Send a Direct Message</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Recruiters and hiring managers can submit job specs or interview invitations directly here.
            </p>

            {status === "success" ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! Pavan Kumar will review your message and respond promptly.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={mailtoUrl}
                    className="px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-colors border border-emerald-500/30"
                  >
                    Send via Email App
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <div className="flex-1">
                      <span>{errorMessage}</span>
                      <div className="mt-1">
                        <a
                          href={mailtoUrl}
                          className="underline hover:text-white font-medium inline-block"
                        >
                          Click here to send directly via mailto: →
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins (HR Manager)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-100 placeholder-slate-500 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@techcompany.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-100 placeholder-slate-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opening / Technical Interview"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-100 placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Message / Job Details <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Pavan, we came across your portfolio and would like to invite you for an interview..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-slate-100 placeholder-slate-500 transition-all outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 order-2 sm:order-1">
                    Direct inquiries also welcomed at <span className="text-slate-400">{PERSONAL_INFO.email}</span>
                  </span>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
