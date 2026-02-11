import { motion } from 'framer-motion';
import { ExternalLink, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Orcha",
    type: "SAAS / PRODUCT",
    description: "Meeting engine focused on goal-attainment. Built to solve the 'record quality vs goal hits' trade-off.",
    contributions: [
      "Engineered real-time goal tracking via WebRTC",
      "Architected automated outcome extraction",
      "Designed 'goal-first' UX for meeting focus"
    ],
    metrics: "300+ Waiting Users",
    tech: ["React", "WebRTC", "Postgres"],
    link: "https://join-orcha.vercel.app/waitlist",
    status: "Launching Soon",
    span: "md:col-span-2"
  },
  {
    title: "Linklok",
    type: "SAAS / PRODUCT",
    description: "Transforming standard links into dynamic growth and tracking tools.",
    contributions: [
      "Built custom URL shortening engine",
      "Implemented real-time analytics with Redis",
      "Scaled Nginx config for high-traffic redirects"
    ],
    metrics: "1k+ Users",
    tech: ["Node.JS", "Redis", "Nginx"],
    link: "https://youtu.be/pU6r2ZsFVfg",
    status: "Down",
    span: "md:col-span-1"
  },
  {
    title: "Werefa",
    type: "INFRASTRUCTURE",
    description: "Queue management software for government services.",
    contributions: [
      "Digitized manual gov queue systems",
      "Built high-availability MongoDB schema",
      "Deployed via Docker for local server stability"
    ],
    metrics: "99.9% Uptime",
    tech: ["Node.js", "Docker", "MongoDB"],
    link: "https://www.linkedin.com/posts/rafael-tadesse-...",
    status: "Live",
    span: "md:col-span-1"
  },
  {
    title: "Interestly",
    type: "SAAS / SOCIAL",
    description: "Random video chat for professionals with shared interests.",
    contributions: [
      "Implemented interest-matching algorithm",
      "Optimized Socket.IO for low-latency pairing",
      "Integrated secure WebRTC peer connections"
    ],
    metrics: "3k+ Users",
    tech: ["React", "WebRTC", "Socket.IO"],
    link: "https://join-orcha.vercel.app/waitlist",
    status: "Down",
    span: "md:col-span-2"
  }
];

export default function ProjectShowcase() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
              SELECTED <br/> <span className="text-orange-500">SHIPMENTS.</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
              Founding, Engineering & Architecting Value
            </p>
          </div>
          <div className="text-right">
             <span className="text-6xl font-black text-white/5 font-mono select-none">05+</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_-15px_rgba(249,115,22,0.2)] ${project.span}`}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-colors" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-start mb-10">
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

                  {/* Contribution List - Only shows clearly on larger cards/hovers */}
                  <div className="space-y-3 mt-6 border-l-2 border-orange-500/10 pl-4 py-1">
                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Key Contributions</p>
                    {project.contributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-orange-500/50" />
                        <p className="text-xs text-gray-400 font-light">{contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gray-600" />
                    <span className="text-xs font-bold font-mono text-gray-400">{project.metrics}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-orange-500/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}