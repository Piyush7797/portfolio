import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [selectedId, setSelectedId] = useState(SKILL_CATEGORIES[0].id);

  const current = SKILL_CATEGORIES.find((c) => c.id === selectedId) || SKILL_CATEGORIES[0];

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">04 / THE TOOLS BEHIND THE THINKING</span>
          <span>APPLIED COMPETENCIES</span>
        </div>

        {/* Section Headline */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Tools are useful. <br />
            <span className="font-serif italic text-slate-200">
              Knowing when to use them matters more.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
            Organized by practical project application rather than arbitrary percentage bars.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pb-8" role="tablist">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedId === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-white text-slate-950 font-semibold'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Category Body */}
        <div className="clean-card p-6 sm:p-10 space-y-8">
          <div className="pb-6 border-b border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-medium text-white">
                {current.headline}
              </h3>
              <p className="text-slate-400 text-sm font-light mt-1 max-w-2xl">
                {current.description}
              </p>
            </div>
            <span className="font-mono text-xs text-cyan-400 shrink-0">
              {current.skills.length} COMPETENCIES
            </span>
          </div>

          {/* Clean Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {skill.practicalUse}
                  </p>
                </div>

                {skill.relatedProject && (
                  <div className="pt-3 mt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Applied in:</span>
                    <a href="#projects" className="text-slate-300 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                      <span>{skill.relatedProject}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
