import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Rocket, Users, Code, Terminal } from 'lucide-react';

const projects = [
  {
    title: "Orcha",
    metrics: "Goal-Oriented Meeting Engine",
    description: "Built to prioritize outcomes over transcripts. Handled end-to-end architecture and user scaling.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  },
  // Add 4 more projects here...
];

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-orange-500/30 font-sans px-6 py-12">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-5xl mx-auto space-y-32">
        
        {/* HERO: The "Founder" Hook */}
        <section className="pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-orange-500 font-mono tracking-widest uppercase text-sm">Available for scale</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">products,</span> <br />
              not just features.
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 leading-relaxed">
              Full-stack engineer and solo founder. I specialize in shipping end-to-end systems 
              that solve real user problems. 5+ launched projects, 0% bloat.
            </p>
          </motion.div>
        </section>

        {/* PROOF: The Interactive Project Grid */}
        <section id="projects">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Proof of Work</h2>
              <p className="text-gray-500">Selected ventures built from zero to one.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <GlassCard key={i} className="group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <Rocket size={24} />
                  </div>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-orange-400 text-sm font-mono mb-4">{project.metrics}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* PHILLOSOPHY: The Non-Standard Section */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold italic tracking-tight">The Stack is a means to an end.</h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <Users className="mb-4 text-blue-400" />
              <h4 className="font-bold mb-2">User First</h4>
              <p className="text-sm text-gray-400">If it doesn't solve a goal, it's technical debt. I build for the user, not for the resume.</p>
            </GlassCard>
            <GlassCard>
              <Terminal className="mb-4 text-green-400" />
              <h4 className="font-bold mb-2">Full-Cycle</h4>
              <p className="text-sm text-gray-400">From DB schema design to CSS animations and customer support. I own the whole pipe.</p>
            </GlassCard>
          </div>
        </section>

        {/* FOOTER: Quick Contact */}
        <footer className="pb-20 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-mono text-sm">© 2026 — Ship fast or die.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}