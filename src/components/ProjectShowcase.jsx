import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { projectPath } from '../router';

export default function ProjectShowcase() {
  return (
    <section id="work" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
              SELECTED <br/> <span className="text-orange-500">SHIPMENTS.</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
              Products I built solo, with real users
            </p>
          </div>
          <div className="text-right flex justify-end gap-8 md:gap-10">
             <div>
               <p className="text-4xl md:text-5xl font-black font-mono text-white leading-none">08</p>
               <p className="text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase mt-2">Products Built</p>
             </div>
             <div>
               <p className="text-4xl md:text-5xl font-black font-mono text-orange-500 leading-none">4,000+</p>
               <p className="text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase mt-2">Users Reached</p>
             </div>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isWide = project.span !== "md:col-span-1";

            return (
              <motion.a
                key={i}
                href={projectPath(project.slug)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_-15px_rgba(249,115,22,0.2)] flex flex-col justify-between ${project.span}`}
              >
                {/* Visual Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-colors" />

                <div className={`relative z-10 h-full flex flex-col ${isWide ? 'md:flex-row md:gap-8' : ''}`}>
                  
                  {/* Left Column / Main Information Side */}
                  <div className={`flex flex-col h-full flex-1 ${isWide ? 'md:max-w-[55%]' : ''}`}>
                    {/* Top Bar */}
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-1 rounded uppercase tracking-widest">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' || project.status === 'Launching Soon' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-[10px] font-mono text-gray-500 uppercase">{project.status}</span>
                        <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                        {project.description}
                      </p>

                      {/* Why It Exists */}
                      <div className="mt-6 border-l-2 border-orange-500/10 pl-4 py-1">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">The Problem</p>
                        <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">{project.problem}</p>
                      </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="mt-auto pt-6 border-t border-white/5 mb-3 space-y-4">
                      <div>
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">The Result</p>
                        <p className="text-sm font-bold font-mono text-orange-500">{project.metrics}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-orange-500/20 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column / Screenshot Display Side */}
                  {project.image && (
                    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl mt-6 md:mt-0 border border-white/5 bg-neutral-900/50
                      ${isWide 
                        ? 'flex-1 min-h-[220px] md:h-full md:absolute md:-right-4 md:bottom-0 md:top-12 md:w-[40%] translate-y-4 group-hover:translate-y-1 transition-transform duration-500' 
                        : 'h-40 group-hover:scale-[1.02] transition-transform duration-500'
                      }`}
                    >
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`}
                        className={`w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
                      />
                      {/* Gradient mask to blend the bottom edge nicely */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
                    </div>
                  )}

                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}