import { motion } from 'framer-motion';
import { projects as project } from '../data/projects';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProjectGrid () {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      className="relative group overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 transition-all hover:border-orange-500/30"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
            {/* <project.icon className="text-gray-400 group-hover:text-orange-500" /> */}
          </div>
          <span className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase">
            {project.year}
          </span>
        </div>

        <h3 className="text-3xl font-bold mb-3 tracking-tight">{project.name}</h3>
        <p className="text-gray-500 leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};