import React, { useState } from 'react';
import type { WorkflowStepId } from '../types';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const ThinkingProcess: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<WorkflowStepId>('understand');

  const current = WORKFLOW_STEPS.find((s) => s.id === activeStepId) || WORKFLOW_STEPS[0];

  return (
    <section id="methodology" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">03 / FROM DATA TO DECISIONS</span>
          <span>SEQUENTIAL METHODOLOGY</span>
        </div>

        {/* Section Headline */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Good solutions start <br />
            <span className="font-serif italic text-slate-200">
              with better questions.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
            A disciplined, 5-stage framework for translating raw business or research questions into validated technical outcomes.
          </p>
        </div>

        {/* Minimalist 5-Step Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-10" role="tablist">
          {WORKFLOW_STEPS.map((s) => {
            const isSelected = activeStepId === s.id;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveStepId(s.id)}
                className={`p-3.5 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-white text-slate-950 font-medium shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                <span className={`font-mono text-xs block mb-1 ${isSelected ? 'text-cyan-700' : 'text-slate-500'}`}>
                  {s.number}
                </span>
                <span className="text-sm font-medium block">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Display */}
        <div className="clean-card p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Explanation */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider">
              <span>Stage {current.number}</span>
              <span className="text-slate-600">/</span>
              <span>{current.keyAction}</span>
            </div>

            <h3 className="text-2xl font-medium text-white">
              {current.shortDesc}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {current.detail}
            </p>

            <div className="pt-4">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Deliverables & Artifacts
              </span>
              <div className="flex flex-wrap gap-2">
                {current.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Graphic Preview */}
          <div className="md:col-span-4 p-5 rounded-xl bg-[#030508] border border-white/[0.06] flex flex-col justify-between h-full min-h-[200px]">
            <span className="font-mono text-[10px] text-slate-500 uppercase">
              PIPELINE FOCUS
            </span>

            <div className="my-auto py-4 text-center">
              <div className="text-3xl font-mono text-cyan-400 font-light mb-1">
                {current.number}
              </div>
              <div className="text-sm text-white font-medium">
                {current.title}
              </div>
              <span className="text-xs text-slate-500 font-mono mt-1 block">
                {current.id.toUpperCase()}
              </span>
            </div>

            <span className="font-mono text-[10px] text-slate-600 text-right">
              REPRODUCIBLE FLOW
            </span>
          </div>
        </div>

        <p className="font-mono text-[11px] text-slate-500 pt-6 text-center">
          * Preferred methodology across technical initiatives; adapted to specific problem scopes.
        </p>
      </div>
    </section>
  );
};
