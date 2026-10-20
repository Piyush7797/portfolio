import React from 'react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#05070a] px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-400 sm:text-xs">
              06 — The Journey
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:text-xs">
            Education / Exploration / Evolution
          </span>
        </div>

        {/* Section Introduction */}
        <div className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              A continuous process of becoming
            </p>

            <h2
              id="journey-title"
              className="text-4xl font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
            >
              Built on curiosity.
              <br />

              <span className="font-serif italic text-slate-400">
                Driven by discovery.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-7 text-slate-400 sm:text-base lg:pb-2">
            From computer science fundamentals to exploring data,
            machine learning, and intelligent systems — every step
            has been an opportunity to learn, experiment, and build
            something meaningful.
          </p>
        </div>

        {/* Timeline Header */}
        <div className="mb-10 flex items-center justify-between border-b border-white/[0.07] pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Milestones & Foundations
          </span>

          <span className="font-mono text-[10px] text-slate-600">
            {String(TIMELINE_MILESTONES.length).padStart(2, '0')} ENTRIES
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[5px] top-4 w-px bg-gradient-to-b from-cyan-400/50 via-white/[0.10] to-transparent sm:left-[7px]"
          />

          <div className="space-y-4 sm:space-y-5">
            {TIMELINE_MILESTONES.map((milestone, index) => (
              <article
                key={`${milestone.year}-${milestone.title}`}
                className="group relative grid grid-cols-1 gap-5 pl-8 sm:gap-8 sm:pl-12 lg:grid-cols-[150px_1fr]"
              >
                {/* Timeline Node */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-7 z-10 flex h-[11px] w-[11px] items-center justify-center rounded-full border border-cyan-400/60 bg-[#05070a] transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_14px_rgba(34,211,238,0.35)]"
                />

                {/* Year Column */}
                <div className="pt-6 lg:pt-8">
                  <span className="font-mono text-xs tracking-wide text-cyan-400">
                    {milestone.year}
                  </span>

                  {milestone.location && (
                    <p className="mt-2 text-xs font-light text-slate-500">
                      {milestone.location}
                    </p>
                  )}
                </div>

                {/* Milestone Card */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-5 transition-all duration-300 group-hover:border-white/[0.13] group-hover:bg-white/[0.025] sm:p-7 lg:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                       Chapter {String(index + 1).padStart(2, '0')}
                    </p>

                      <h3 className="text-xl font-normal tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                        {milestone.title}
                      </h3>
                    </div>

                    {milestone.institution && (
                      <span className="w-fit rounded-md border border-white/[0.08] px-3 py-1.5 text-[10px] font-mono leading-relaxed text-slate-400">
                        {milestone.institution}
                      </span>
                    )}
                  </div>

                  {milestone.subtitle && (
                    <p className="mt-3 text-xs font-mono leading-relaxed text-slate-400 sm:text-sm">
                      {milestone.subtitle}
                    </p>
                  )}

                  <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-slate-400 sm:text-[15px]">
                    {milestone.description}
                  </p>

                  {milestone.tags?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.07] bg-black/20 px-2.5 py-1.5 font-mono text-[10px] text-slate-500 transition-colors duration-200 group-hover:border-cyan-400/20 group-hover:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm font-light leading-7 text-slate-500">
            Still learning. Still experimenting. Always building
            toward what comes next.
          </p>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            The journey continues <span className="text-cyan-400">↗</span>
          </span>
        </div>

      </div>
    </section>
  );
};