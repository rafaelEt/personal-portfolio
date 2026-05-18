import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Users } from 'lucide-react';

const projects = [
  {
    title: "Duelo",
    type: "REAL-TIME PLATFORM",
    description: "Real-time multiplayer chess platform with integrated video chat.",
    image: "/screenshots/duelo.png", // Replace with your screenshot path
    contributions: [
      "Built synchronized multiplayer chess gameplay",
      "Integrated peer-to-peer WebRTC video calls",
      "Engineered low-latency room and match handling"
    ],
    metrics: "Live Multiplayer Gameplay",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://duelo.rafaeltadesse.dev",
    status: "Live",
    span: "md:col-span-1"
  },
  {
    title: "Rafael's Relay",
    type: "COMMUNICATION PLATFORM",
    description: "Personal branded meeting platform for video calls and networking.",
    image: "/screenshots/relay.jpg",
    contributions: [
      "Built real-time video/audio meeting system",
      "Implemented screen sharing and live chat",
      "Designed branded meeting workflow with timer"
    ],
    metrics: "Built & Deployed in 1 Day",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://meet.rafaeltadesse.dev",
    status: "Live",
    span: "md:col-span-1"
  },
  {
    title: "Habesha Radio",
    type: "MEDIA PLATFORM",
    description: "Web platform for streaming Ethiopian radio stations online.",
    image: "/screenshots/fm.png",
    contributions: [
      "Built streaming-focused frontend experience",
      "Integrated multiple live radio streams",
      "Optimized lightweight responsive playback UI"
    ],
    metrics: "Multi-Station Streaming",
    tech: ["React", "Streaming APIs"],
    link: "https://www.lumi.et/profile/Habesha%20Radio",
    status: "Live",
    span: "md:col-span-1"
  },
  {
    title: "Lumi",
    type: "TECH COMPANY",
    description: "Technology company focused on building digital products, SaaS tools, and scalable infrastructure.",
    image: "/screenshots/lumi.jpg",
    contributions: [
      "Founded and leading product direction",
      "Built internal platforms and scalable systems",
      "Managing branding, deployment, and operations"
    ],
    metrics: "Multiple Products Under Ecosystem",
    tech: ["React", "Node.js", "Docker", "Supabase"],
    link: "https://lumi.et",
    status: "Live",
    span: "md:col-span-2"
  },
  {
    title: "Orcha",
    type: "SAAS / PRODUCT",
    description: "Meeting engine focused on goal-attainment. Built to solve the 'record quality vs goal hits' trade-off.",
    image: "/screenshots/orcha.jpeg",
    contributions: [
      "Engineered real-time goal tracking via WebRTC",
      "Architected automated outcome extraction",
      "Designed 'goal-first' UX for meeting focus"
    ],
    metrics: "300+ Waiting Users",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://join-orcha.vercel.app/waitlist",
    status: "Launching Soon",
    span: "md:col-span-1"
  },
  {
    title: "Linklok",
    type: "SAAS / PRODUCT",
    description: "Transforming standard links into dynamic growth and tracking tools.",
    image: "/screenshots/lok.jpg",
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
    image: "/screenshots/werefa.jpg",
    contributions: [
      "Digitized manual gov queue systems",
      "Built high-availability MongoDB schema",
      "Deployed via Docker for local server stability"
    ],
    metrics: "99.9% Uptime",
    tech: ["Node.js", "Docker", "MongoDB"],
    link: "https://www.linkedin.com/posts/rafael-tadesse-96274330b_telebirr-ethiopia-entrepreneurship-activity-7394026509990166528-YmC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE70IZoB5m26yvj9MyYZBiCtU5PiMSHOy4A",
    status: "Live",
    span: "md:col-span-2"
  },
  {
    title: "Interestly",
    type: "SAAS / SOCIAL",
    description: "Random video chat for professionals with shared interests.",
    image: "/screenshots/inter.jpg",
    contributions: [
      "Implemented interest-matching algorithm",
      "Optimized Socket.IO for low-latency pairing",
      "Integrated secure WebRTC peer connections"
    ],
    metrics: "3k+ Users",
    tech: ["React", "WebRTC", "Socket.IO", "Node.JS"],
    link: "https://youtu.be/PNBPV5HULHY?list=PL2x_Kjr88gJOBpevuJif0PGCjxYyrVMAn",
    status: "Down",
    span: "md:col-span-3"
  },
];

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
              Founding, Engineering & Architecting Value
            </p>
          </div>
          <div className="text-right">
             <span className="text-6xl font-black text-white/5 font-mono select-none">05+</span>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isWide = project.span !== "md:col-span-1";

            return (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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

                      {/* Contribution List */}
                      <div className="space-y-3 mt-6 border-l-2 border-orange-500/10 pl-4 py-1">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Key Contributions</p>
                        {project.contributions.map((contribution, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 size={12} className="text-orange-500/50" />
                            <p className="text-xs text-gray-400 font-light line-clamp-1">{contribution}</p>
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