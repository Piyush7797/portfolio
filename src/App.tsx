import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonBehind } from './components/PersonBehind';
import { SelectedWork } from './components/SelectedWork';
import { ThinkingProcess } from './components/ThinkingProcess';
import { Capabilities } from './components/Capabilities';
import { DataExplorer } from './components/DataExplorer';
import { LearningJourney } from './components/LearningJourney';
import { Curiosity } from './components/Curiosity';
import { ContactSection } from './components/ContactSection';

export function App() {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('pv_motion_preference');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    if (motionEnabled) {
      document.body.classList.remove('motion-off');
    } else {
      document.body.classList.add('motion-off');
    }
    localStorage.setItem('pv_motion_preference', String(motionEnabled));
  }, [motionEnabled]);

  const toggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-400 text-slate-950 font-editorial-mono text-xs rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Floating Glass Navigation */}
      <Navbar motionEnabled={motionEnabled} onToggleMotion={toggleMotion} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* Section 01: The opening experience */}
        <Hero motionEnabled={motionEnabled} />

        {/* Section 02: The person behind the projects */}
        <PersonBehind />

        {/* Section 03: Selected work */}
        <SelectedWork />

        {/* Section 04: How I think and work */}
        <ThinkingProcess />

        {/* Section 05: Technical capabilities */}
        <Capabilities />

        {/* Section 06: Interactive data experience */}
        <DataExplorer />

        {/* Section 07: My learning journey */}
        <LearningJourney />

        {/* Section 08: Beyond the code */}
        <Curiosity />

        {/* Section 09: Contact and the next chapter */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
