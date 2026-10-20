
import React, { useEffect, useRef } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
} from './Icons';;
import { PERSONAL_DETAILS, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  motionEnabled: boolean;
}

interface DataNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const Hero: React.FC<HeroProps> = ({ motionEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Ambient data-network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let nodes: DataNode[] = [];

    const initializeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodeCount = Math.min(
        100,
        Math.max(20, Math.floor(width / 14))
      );

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.2 + 0.6,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update node positions
      if (motionEnabled) {
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        });
      }

      // Draw network connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 115) {
            const opacity = (1 - distance / 115) * 0.10;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw data points
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.48)';
        ctx.fill();
      });

      if (motionEnabled) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    initializeCanvas();
    render();

    const resizeObserver = new ResizeObserver(() => {
      initializeCanvas();
      render();
    });

    resizeObserver.observe(canvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [motionEnabled]);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="clean-grid relative flex min-h-[92svh] flex-col justify-between overflow-hidden border-b border-white/[0.07] bg-[#05070a] px-6 pb-8 pt-32 sm:px-10 sm:pb-10 sm:pt-40 lg:px-16"
    >
      {/* Background Layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-[120px]"
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-6xl py-12 sm:py-16">

        {/* Introduction Label */}
        <div className="mb-9 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-300 sm:text-[11px]">
            <span className="live-dot" />
            Computer Science · AI · Data
          </span>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]">
            <MapPin className="h-3.5 w-3.5" />
            Indore, India
          </span>
        </div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="max-w-5xl text-5xl font-light leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[100px]"
        >
          Piyush
          <br />

          <span className="font-serif font-normal italic tracking-[-0.045em] text-slate-300">
            Vishvakrma
          </span>
          <span className="text-cyan-400">.</span>
        </h1>

        {/* Professional Headline */}
        <div className="mt-8 max-w-4xl sm:mt-10">
          <p className="text-xl font-light leading-snug tracking-tight text-slate-200 sm:text-3xl lg:text-4xl">
            Turning data into ideas.
            <br className="hidden sm:block" />

            <span className="text-slate-500">
              {' '}Building intelligence into action.
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-slate-400 sm:text-base sm:leading-8">
            {PERSONAL_DETAILS.bioOpening}
          </p>
        </div>

        {/* Professional Focus */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Areas of focus
          </span>

          {PERSONAL_DETAILS.targetRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-slate-300 transition-colors duration-200 hover:border-cyan-400/30 hover:text-cyan-200"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-medium text-[#05070a] transition-all duration-300 hover:bg-cyan-300 sm:px-6 sm:text-sm"
          >
            <span>Explore my work</span>

            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-3 text-xs text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white sm:px-6 sm:text-sm"
          >
            <span>Let's connect</span>

            <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:ml-2 sm:border-l sm:border-white/[0.10] sm:pl-4">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.05] hover:text-blue-300"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Subtle Value Statement */}
        <div className="mt-10 flex items-center gap-2 text-xs text-slate-500">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400/70" />

          <span className="font-light">
            Curious by nature. Analytical by approach. Practical by design.
          </span>
        </div>
      </div>

      {/* Bottom Information Strip */}
      <div className="relative z-10 mx-auto w-full max-w-6xl border-t border-white/[0.08] pt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Scroll Cue */}
          <a
            href="#about"
            className="group inline-flex w-fit items-center gap-3 text-slate-400 transition-colors hover:text-cyan-300"
          >
            <span className="h-px w-6 bg-slate-600 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              Scroll to discover
            </span>
          </a>

          {/* Education */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:text-[10px]">
            <span>Malwa Institute of Science & Technology</span>
            <span className="hidden text-slate-700 sm:inline">/</span>
            <span>RGPV Bhopal</span>
          </div>

          {/* Project Count */}
          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-400 transition-colors hover:text-cyan-200"
          >
            <span>
              {String(PROJECTS.length).padStart(2, '0')} Projects
            </span>

            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};