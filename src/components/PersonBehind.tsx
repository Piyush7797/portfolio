import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSPECTIVES } from '../data/portfolioData';
import type { PerspectiveId } from '../types';

export const PersonBehind: React.FC = () => {
  const [selectedPerspective, setSelectedPerspective] = useState<PerspectiveId>('analyze');

  const current = PERSPECTIVES.find((p) => p.id === selectedPerspective) || PERSPECTIVES[0];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">01 / THE PERSON BEHIND THE WORK</span>
          <span>DISCIPLINE & EXPLORATION</span>
        </div>

        {/* Section Headline */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight max-w-4xl">
            Curiosity starts with a question. <br />
            <span className="font-serif italic text-slate-200">
              Engineering turns it into something useful.
            </span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Story */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              My journey into data science began with a fundamental question: <span className="text-white font-normal">why do numbers behave the way they do?</span> Whether investigating retail transactions across 3,900 customer records or modeling carbon emissions, data offers an authentic mirror to human behavior.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Rather than viewing machine learning as an opaque shortcut, I value the step-by-step craftsmanship: auditing feature distributions, validating against class imbalance, writing structured relational queries, and building interfaces people can actually interact with.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              As a Computer Science Engineering graduate from Indore, I am motivated to join an engineering team where practical rigor and genuine problem-solving matter more than hype.
            </p>

            <div className="pt-6 border-t border-white/[0.06] flex items-center gap-6 font-mono text-xs text-slate-500">
              <span>B.TECH CSE (2022–2026)</span>
              <span>·</span>
              <span>INDORE, INDIA</span>
            </div>
          </div>

          {/* Right Column: Sleek Signal Explorer */}
          <div className="lg:col-span-6">
            <div className="clean-card p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 pb-4 border-b border-white/[0.06]">
                <span className="tracking-widest uppercase">THREE DISCIPLINES. ONE FOCUS.</span>
                <span>
                  {selectedPerspective === 'analyze' ? '01 / 03' : selectedPerspective === 'build' ? '02 / 03' : '03 / 03'}
                </span>
              </div>

              {/* Minimalist Abstract Graphic */}
              <div className="h-44 rounded-xl bg-[#030508] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                {selectedPerspective === 'analyze' && (
                  <div className="flex flex-col items-center justify-center gap-2 animate-in fade-in">
                    <div className="w-20 h-20 rounded-full border border-cyan-400/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-cyan-400/60 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-cyan-400" />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-cyan-300 uppercase mt-2">
                      PATTERN RECOGNITION
                    </span>
                  </div>
                )}

                {selectedPerspective === 'build' && (
                  <div className="flex flex-col items-center justify-center gap-2 animate-in fade-in">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-violet-400" />
                      <div className="w-16 h-[1px] bg-violet-400/50" />
                      <div className="w-5 h-5 rounded-md border border-violet-400 flex items-center justify-center text-[10px] text-violet-300 font-mono">
                        ML
                      </div>
                      <div className="w-16 h-[1px] bg-violet-400/50" />
                      <div className="w-3 h-3 rounded-full bg-violet-400" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-violet-300 uppercase mt-2">
                      PREDICTIVE MODELING
                    </span>
                  </div>
                )}

                {selectedPerspective === 'explore' && (
                  <div className="flex flex-col items-center justify-center gap-2 animate-in fade-in">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-spin" style={{ animationDuration: '8s' }} />
                      <div className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-300 font-mono">
                        AI
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-emerald-300 uppercase mt-2">
                      EXPERIMENTAL PROTOTYPING
                    </span>
                  </div>
                )}
              </div>

              {/* Perspective Selector Buttons */}
              <div className="flex gap-2">
                {PERSPECTIVES.map((p) => {
                  const isSelected = selectedPerspective === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPerspective(p.id)}
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-white text-slate-950 font-semibold'
                          : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      {p.label} ↗
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Explanation */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-medium text-white">
                  {current.headline}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                <span>PRACTICAL ORIENTATION</span>
                <a href="#projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <span>Explore the projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
