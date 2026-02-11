import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VlogSection from './components/VlogSection';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import JourneyGallery from './components/Gallery.jsx';

function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-orange-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <main className="relative z-10 max-w-7xl mx-auto px-2 space-y-10 md:space-y-16 pb-32">
        <section id="hero">
          <Hero />
        </section>
        <section id="vlog">
          <VlogSection />
        </section>
        <section id="roles">
          <ProjectShowcase />
        </section>
        <section id="gallery">
          <JourneyGallery />
        </section>
      </main>

      <footer className="py-8 text-center border-t border-white/5 text-gray-500 font-mono text-sm">
        <div className="text-[10px] font-mono text-gray-600 tracking-[0.3em] flex items-center justify-center gap-4">
            <span>© 2026</span>
          </div>
      </footer>
    </div>
  );
}

export default App;