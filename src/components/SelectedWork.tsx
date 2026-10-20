import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Sparkles, Sliders, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, GREENSHIFT_FACTORS } from '../data/portfolioData';
import type { ProjectCategory } from '../types';

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  // Carbon calculator state for interactive demo
  const [km, setKm] = useState(25);
  const [kwh, setKwh] = useState(8);
  const [diet, setDiet] = useState<'vegetarian' | 'average' | 'meatLover'>('average');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  // Real-time calculation
  const carEmission = km * GREENSHIFT_FACTORS.transport.car;
  const powerEmission = kwh * GREENSHIFT_FACTORS.energy.electricityKwh;
  const dietEmission = GREENSHIFT_FACTORS.diet[diet];
  const dailyTotal = carEmission + powerEmission + dietEmission;
  const annualTons = ((dailyTotal * 365) / 1000).toFixed(2);
  const trees = Math.ceil(Number(annualTons) * 45);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">02 / SELECTED PROJECTS</span>
          <span>{PROJECTS.length} VERIFIED REPOSITORIES</span>
        </div>

        {/* Section Headline & Clean Filter Pills */}
        <div className="py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              Interesting problems. <br />
              <span className="font-serif italic text-slate-200">
                Practical experiments. Real code.
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
              From exploratory data analysis on 3,900 customer records to SQL music store intelligence and AI sustainability platforms.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs">
            {(
              [
                { id: 'all', label: 'All Projects' },
                { id: 'analytics', label: 'Data Analytics & SQL' },
                { id: 'ai', label: 'AI Applications' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-white text-slate-950 font-medium'
                    : 'text-slate-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies */}
        <div className="space-y-8">
          {filtered.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className="clean-card p-6 sm:p-8 space-y-6"
              >
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-cyan-400">
                        {project.number}
                      </span>
                      <span className="text-slate-600">/</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light max-w-xl">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    {project.id === 'greenshift-ai' && (
                      <button
                        onClick={() => setDemoOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono transition-colors"
                      >
                        <Sliders className="w-3 h-3" />
                        <span>Interactive Demo</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500" />
                    </a>

                    <button
                      onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                      className="p-1.5 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Narrative Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-light">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
                      The Challenge
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                      The Implementation
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="pt-6 border-t border-white/[0.06] space-y-6 animate-in fade-in duration-200">
                    <div>
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-3">
                        Key Implemented Features
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                        {project.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 shrink-0">·</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-surface-300/50 border border-white/5">
                        <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider block mb-1">
                          Verified Outcome
                        </span>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-300/50 border border-white/5">
                        <span className="font-mono text-[11px] text-violet-400 uppercase tracking-wider block mb-1">
                          Key Learning
                        </span>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {project.learnings}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Modal: GreenShift AI Interactive Emissions Explorer */}
        {demoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
            onClick={() => setDemoOpen(false)}
          >
            <div
              className="bg-[#080c14] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GREENSHIFT AI · 5-STEP EMISSIONS ENGINE</span>
                </div>
                <button
                  onClick={() => setDemoOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                  aria-label="Close demo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-2">
                    <span>Daily Commute (km)</span>
                    <span className="text-cyan-300 font-bold">{km} km</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={km}
                    onChange={(e) => setKm(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-2">
                    <span>Daily Power Consumption</span>
                    <span className="text-cyan-300 font-bold">{kwh} kWh</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={kwh}
                    onChange={(e) => setKwh(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-2">
                    <span>Dietary Pattern</span>
                    <span className="text-cyan-300 font-bold capitalize">{diet}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['vegetarian', 'average', 'meatLover'] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => setDiet(d)}
                        className={`py-1.5 px-2 rounded-lg capitalize transition-colors ${
                          diet === d
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                            : 'bg-white/[0.03] text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface-300/80 border border-white/5 font-mono text-center">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Daily</span>
                  <span className="text-lg font-bold text-white">{dailyTotal.toFixed(2)} kg</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Annual</span>
                  <span className="text-lg font-bold text-violet-300">{annualTons} t</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Offset</span>
                  <span className="text-lg font-bold text-emerald-400">~{trees} trees</span>
                </div>
              </div>

              <p className="text-[10px] font-mono text-slate-500 text-center">
                * Based on GreenShift AI emission factors. Purely for demonstration.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
