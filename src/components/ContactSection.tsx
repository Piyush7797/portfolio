import React, { useState } from 'react';
import { Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Piyush,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Drafted message in your default mail client. You can also copy my email directly.');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">08 / THE NEXT CHAPTER</span>
          <span>AVAILABLE FOR 2026 ROLES</span>
        </div>

        {/* Section Headline */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-white font-light leading-tight">
            Let's build <br />
            <span className="font-serif italic text-slate-200">
              something meaningful.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
            I'm open to entry-level opportunities, collaborative projects, and conversations about data science, machine learning, analytics, and AI.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="clean-card p-6 space-y-3">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="text-base font-mono text-cyan-300 hover:text-white transition-colors break-all"
                >
                  {PERSONAL_DETAILS.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-white/10 hover:border-white/30 text-slate-400 hover:text-white text-xs font-mono transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Feel free to email me directly regarding full-time opportunities or project collaborations.
              </p>
            </div>

            {/* Profile Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noreferrer"
                className="clean-card p-4 hover:border-white/30 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 text-slate-300">
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="clean-card p-4 hover:border-white/30 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 text-slate-300">
                  <LinkedinIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={PERSONAL_DETAILS.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="clean-card p-4 hover:border-pink-400/40 transition-colors flex items-center justify-between group"
              >
              <div className="flex items-center gap-2.5 text-slate-300 group-hover:text-pink-300 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-300 transition-colors" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-slate-400 space-y-1">
              <span className="text-slate-300 block">Indore, Madhya Pradesh, India</span>
              <span className="text-[11px] text-slate-500 block">Open to Relocation & Remote</span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="clean-card p-6 sm:p-8">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block pb-4 border-b border-white/[0.06]">
                Compose a Message
              </span>

              <form onSubmit={handleSubmit} className="pt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Data Scientist / ML Developer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Brief description of the role, question, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600"
                  />
                </div>

                {statusMessage && (
                  <p className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 p-2.5 rounded-lg">
                    {statusMessage}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-cyan-300 text-slate-950 font-medium text-xs transition-colors"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    * Transmits directly via mail client
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            <span className="text-slate-300 font-semibold">{PERSONAL_DETAILS.name}</span>
            <span className="mx-2">·</span>
            <span>{PERSONAL_DETAILS.role}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Indore, India</span>
            <span>© 2026</span>
            <a href="#top" className="text-cyan-400 hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
