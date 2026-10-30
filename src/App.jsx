import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import PortfolioNavbar from './components/PortfolioNavbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import JourneyGallery from './components/Gallery.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import { useRoute, getSavedHomeScroll } from './router';

function App() {
  const route = useRoute();
  const isProject = route.name === 'project';
  const isPortfolio = route.name === 'portfolio';
  const wasProject = useRef(isProject);
  const prevRoute = useRef(route.name);

  useEffect(() => {
    if (isProject) {
      window.scrollTo({ top: 0 });
    } else if (route.anchor) {
      requestAnimationFrame(() => {
        document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else if (wasProject.current) {
      window.scrollTo({ top: getSavedHomeScroll() });
    } else if (prevRoute.current !== route.name) {
      window.scrollTo({ top: 0 });
    }

    wasProject.current = isProject;
    prevRoute.current = route.name;
  }, [isProject, route.name, route.anchor]);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-orange-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {isPortfolio ? <PortfolioNavbar /> : <Navbar />}

      {isPortfolio ? (
        <main className="relative z-10 pb-32">
          <PortfolioPage />
        </main>
      ) : isProject ? (
        <main className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 pb-32">
          <ProjectDetail slug={route.slug} />
        </main>
      ) : (
        <>
          <main className="relative z-10 max-w-7xl mx-auto px-2 space-y-10 md:space-y-16 pb-32">
            <section id="hero">
              <Hero />
            </section>
            <section id="products">
              <ProjectShowcase />
            </section>
            <section id="build-log">
              <JourneyGallery />
            </section>
          </main>
        </>
      )}

      <footer className="relative z-10 py-8 text-center border-t border-white/5 text-gray-500 font-mono text-sm">
        <div className="text-[10px] font-mono text-gray-600 tracking-[0.3em] flex items-center justify-center gap-4">
            <span>© 2026</span>
          </div>
      </footer>
    </div>
  );
}

export default App;
