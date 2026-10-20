import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Play, Pause } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface NavbarProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ motionEnabled, onToggleMotion }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['top', 'about', 'projects', 'methodology', 'capabilities', 'data-lab', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Perspective' },
    { href: '#projects', label: 'Projects' },
    { href: '#methodology', label: 'Thinking' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#data-lab', label: 'Data Lab' },
    { href: '#journey', label: 'Journey' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 ${
          isScrolled
            ? 'glass-nav-scrolled py-3.5 shadow-xl shadow-black/30'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Identity & Status */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Piyush Vishvakrma"
          >
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {PERSONAL_DETAILS.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5 text-[11px] text-slate-400">
              <span className="live-dot" />
              <span>Indore, IN</span>
            </span>
          </a>

          {/* Desktop Links (Clean, Spacious, Minimal) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 text-xs text-slate-300"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-white font-medium border-b border-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Motion toggle */}
            <button
              onClick={onToggleMotion}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-slate-200 text-[11px] font-mono transition-colors"
              aria-label={motionEnabled ? "Disable motion" : "Enable motion"}
            >
              {motionEnabled ? (
                <>
                  <Pause className="w-2.5 h-2.5 text-cyan-400" />
                  <span>MOTION ON</span>
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5 text-slate-500" />
                  <span className="text-slate-500">MOTION OFF</span>
                </>
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-slate-950 hover:bg-cyan-300 text-xs font-medium transition-colors"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-slate-400 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-[#05070a]/95 backdrop-blur-2xl pt-24 px-8 flex flex-col justify-between pb-10"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono">
              Directory
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-slate-200 hover:text-cyan-300 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Indore, MP, India</span>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-cyan-400">
              {PERSONAL_DETAILS.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
