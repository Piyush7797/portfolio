import React from 'react';
import { CURIOSITY_ITEMS } from '../data/portfolioData';

export const Curiosity: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">07 / WHAT KEEPS ME CURIOUS</span>
          <span>CONTINUOUS EXPLORATION</span>
        </div>

        {/* Section Headline */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Technology is a journey <br />
            <span className="font-serif italic text-slate-200">
              of continuous discovery.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
            Questions that drive my personal reading, experimental notebooks, and technical interests.
          </p>
        </div>

        {/* Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURIOSITY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="clean-card p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-mono text-xs text-cyan-400 font-medium">
                  {item.id} / {item.label.toUpperCase()}
                </span>
                <h3 className="text-lg font-medium text-white mt-2">
                  {item.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-500 flex justify-between">
                <span>FOCUS AREA</span>
                <span className="text-slate-400">EXPLORE ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
