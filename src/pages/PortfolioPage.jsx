import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Video,
  Mic,
  Mail,
  Send,
  Github,
  Linkedin,
  Download,
} from 'lucide-react';
import { accomplishments, moments, contactLinks, CV_URL } from '../data/portfolio';
import { projectPath } from '../router';

const XIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const CONTACT_ICONS = {
  'hello@rafaeltadesse.dev': Mail,
  'https://t.me/RafaelTadesse': Send,
  'https://x.com/RafaelTade522': XIcon,
  'https://github.com/rafaelEt': Github,
  'https://www.linkedin.com/in/rafael-tadesse-96274330b/': Linkedin,
};

const SECTION_OFFSET = { scrollMarginTop: '110px' };

function SectionHeading({ title, accent, subtitle }) {
  return (
    <div className="mb-14 space-y-2">
      <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
        {title} <span className="text-orange-500">{accent}</span>
      </h2>
      <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
        {subtitle}
      </p>
    </div>
  );
}

function GroupLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[10px] font-mono text-orange-500 tracking-[0.3em] uppercase">
        {children}
      </span>
      <div className="flex-1 h-[1px] bg-white/10" />
    </div>
  );
}

function AccomplishmentCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] border border-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_-15px_rgba(249,115,22,0.2)]"
    >
      {/* Visual Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-colors" />

      {/* Photo / Video Preview — left */}
      <div className="relative z-10 h-48 md:h-auto md:w-[40%] lg:w-[38%] shrink-0 rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/50 md:mb-0">
        <img
          src={item.image}
          alt={`${item.title} preview`}
          className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

        {item.video ? (
          <button
            type="button"
            onClick={() => window.open(item.video, '_blank', 'noopener,noreferrer')}
            aria-label={`Watch ${item.title} demo video`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-14 h-14 rounded-full bg-orange-500/90 text-black flex items-center justify-center shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform duration-300">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
        ) : (
          <a
            href={projectPath(item.slug)}
            aria-label={`View ${item.title} case study`}
            className="absolute inset-0"
          />
        )}

        <span className="absolute top-3 left-3 text-[10px] font-mono text-orange-500 bg-black/60 backdrop-blur-md border border-orange-500/20 px-2 py-1 rounded uppercase tracking-widest">
          {item.region} · {item.type}
        </span>
      </div>

      {/* Content — right */}
      <div className="relative z-10 flex flex-col flex-1 min-w-0">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-2xl font-bold tracking-tight group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        <span className="text-xs font-mono text-orange-500 whitespace-nowrap pt-1.5">
          {item.status}
        </span>
      </div>

      <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-6">
        {item.description}
      </p>

      {/* Key Achievements */}
      <div className="relative z-10 border-l-2 border-orange-500/10 pl-4 py-1 mb-6">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">
          Key Achievements
        </p>
        <ul className="space-y-2">
          {item.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-xs text-gray-400 font-light leading-relaxed">
              <CheckCircle2 size={13} className="text-orange-500 mt-[2px] shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {item.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-orange-500/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <a
        href={projectPath(item.slug)}
        className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
      >
        View Case Study
        <ArrowUpRight size={14} className="group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </a>
      </div>
    </motion.article>
  );
}

function MomentCard({ item, index }) {
  const isPhoto = Boolean(item.image);
  const isPlaceholder = Boolean(item.placeholder);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#0a0a0a] min-h-[300px] flex flex-col ${
        isPlaceholder ? 'border-dashed' : ''
      }`}
    >
      {/* Photo Moment */}
      {isPhoto && (
        <>
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </>
      )}

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          {item.type === 'VIDEO' && <Video size={14} className="text-orange-500" />}
          {item.type === 'PODCAST' && <Mic size={14} className="text-orange-500" />}
          {!isPhoto && item.type !== 'VIDEO' && item.type !== 'PODCAST' && (
            <Play size={14} className="text-orange-500" />
          )}
          <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
            {item.type}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          {item.description}
        </p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-mono text-orange-500 tracking-widest uppercase hover:text-white transition-colors"
          >
            Watch Video <ArrowUpRight size={14} />
          </a>
        )}

        {isPlaceholder && (
          <span className="mt-5 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
            — Placeholder —
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'Rafael Tadesse | Portfolio';
    return () => {
      document.title = 'Rafael Tadesse | Product Founder & Full-Stack Engineer';
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className=" min-h-[85vh] flex flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full flex flex-col items-center"
        >

          <h1 className="text-4xl sm:text-5xl md:text-[72px] text-center font-black tracking-[-0.05em] leading-[0.9] italic max-w-6xl">
            BUILDING BEYOND THE BOUNDARIES OF{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              WHERE I STARTED.
            </span>
          </h1>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="#accomplishments"
              className="h-16 px-10 bg-white text-black font-black rounded-2xl flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            >
              EXPLORE ACCOMPLISHMENTS{' '}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ACCOMPLISHMENTS */}
      <section id="accomplishments" style={SECTION_OFFSET} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="SELECTED"
            accent="ACCOMPLISHMENTS."
            subtitle="Local roots, global reach — every product built solo."
          />

          <GroupLabel>GLOBAL</GroupLabel>
          <div className="flex flex-col gap-6 mb-16">
            {accomplishments.global.map((item, i) => (
              <AccomplishmentCard key={item.slug} item={item} index={i} />
            ))}
          </div>

          <GroupLabel>LOCAL — ETHIOPIA</GroupLabel>
          <div className="flex flex-col gap-6">
            {accomplishments.local.map((item, i) => (
              <AccomplishmentCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section id="moments" style={SECTION_OFFSET} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="NOTABLE"
            accent="MOMENTS."
            subtitle="Podcasts, presentations and everything in between."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moments.map((item, i) => (
              <MomentCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={SECTION_OFFSET} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="LET'S"
            accent="TALK."
            subtitle="Open to partnerships, product work and conversations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = CONTACT_ICONS[link.href] ?? Mail;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex items-center gap-4 rounded-[24px] bg-[#0a0a0a] border border-white/5 p-6 hover:border-orange-500/40 transition-all duration-500"
                >
                  <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-colors">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase mb-1">
                      {link.label}
                    </span>
                    <span className="block text-sm font-bold truncate group-hover:text-orange-500 transition-colors">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
