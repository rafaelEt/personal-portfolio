import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects, getProject } from '../data/projects';
import { projectPath, goBack } from '../router';

const statusDot = (status) =>
  status === 'Live' || status === 'Launching Soon'
    ? 'bg-green-500 animate-pulse'
    : 'bg-red-500';

export default function ProjectDetail({ slug }) {
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-orange-500 uppercase">404 // Unknown Shipment</p>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter">
          NO PROJECT <span className="text-orange-500">FOUND.</span>
        </h1>
        <button
          onClick={goBack}
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-black rounded-lg hover:bg-orange-500 hover:text-white transition-all"
        >
          <ArrowLeft size={16} /> ALL SHIPMENTS
        </button>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.slug === slug) + 1;
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 md:pt-32">
      {/* Back Bar */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={goBack}
          aria-label="Back to all shipments"
          title="Back to all shipments"
          className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase select-none">
          {String(index).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8 text-center"
      >
        <div className="space-y-8 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
              {project.type}
            </span>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${statusDot(project.status)}`} />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.status}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[92px] font-black tracking-[-0.05em] leading-[0.85] italic uppercase break-words max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-snug max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 px-8 bg-white text-black font-black rounded-2xl items-center gap-3 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            VISIT PROJECT
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.header>

      {/* Full-width Hero Screenshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative mt-16 max-w-5xl mx-auto"
      >
        <div className="absolute -top-6 -right-4 md:-right-8 w-full h-full border border-orange-500/20 rounded-[40px] rotate-2 hidden md:block" />
        <div className="relative rounded-[40px] border border-white/10 p-3 bg-white/5 backdrop-blur-3xl overflow-hidden">
          <div className="relative aspect-[16/9] rounded-[30px] overflow-hidden bg-neutral-900">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 p-5 sm:p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono text-orange-500 tracking-[0.2em] mb-1 uppercase">Key Result</p>
                  <h4 className="font-bold text-lg leading-tight">{project.metrics}</h4>
                </div>
                <ArrowUpRight className="text-orange-500 shrink-0" size={24} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Problem + Results */}
      <div className="grid lg:grid-cols-12 gap-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <p className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-6">01 // The Problem</p>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
              {project.problem}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="lg:col-span-7 rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 md:p-10"
        >
          <p className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-6">02 // The Results</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {project.results.map((result) => (
              <div key={result.label} className="border-l-2 border-orange-500/20 pl-4">
                <p className="text-3xl font-black tracking-tight text-white mb-2">{result.value}</p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* What I Built */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 md:p-10"
      >
        <p className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-8">03 // What I Built</p>
        <div className="grid md:grid-cols-3 gap-6">
          {project.contributions.map((contribution, idx) => (
            <div key={idx} className="flex items-start gap-3 border-t border-white/5 pt-6">
              <CheckCircle2 size={16} className="text-orange-500/60 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 font-light leading-relaxed">{contribution}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* More Shipments */}
      <section className="mt-24 border-t border-white/5 pt-16">
        <div className="flex items-end justify-between mb-10 gap-4">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
            More <span className="text-orange-500">Shipments.</span>
          </h2>
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">Keep Exploring</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {others.map((other) => (
            <a
              key={other.slug}
              href={projectPath(other.slug)}
              className="group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] border border-white/5 p-6 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_-15px_rgba(249,115,22,0.2)]"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-1 rounded uppercase tracking-widest">
                    {other.type}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-orange-500 transition-colors mb-3">
                  {other.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">{other.description}</p>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] group-hover:text-orange-500 transition-colors">
                  View Case <ArrowRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
