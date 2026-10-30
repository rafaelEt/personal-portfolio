import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { CV_URL } from '../data/portfolio';

export default function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'ACCOMPLISHMENTS', href: '#accomplishments' },
    { label: 'MOMENTS', href: '#moments' },
  ];

  const downloadCv = (
    <a
      href={CV_URL}
      download
      target="_blank"
      rel="noreferrer"
      className="relative group overflow-hidden px-5 py-2 bg-white text-black text-xs font-black rounded-lg inline-flex items-center gap-2 transition-all hover:pr-8"
    >
      <span className="relative z-10">DOWNLOAD CV</span>
      <Download size={14} className="relative z-10" />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
        →
      </span>
    </a>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-300"
    >
      <div
        className={`
        mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl
        transition-all duration-500 border
        ${isScrolled
          ? 'backdrop-blur-xl bg-black/40 border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-transparent'}
      `}
      >
        {/* Branding */}
        <a href="/portfolio" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
          Rafael<span className="text-orange-500">.</span>Tadesse
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-8 text-[11px] font-bold tracking-[0.15em] text-gray-400">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {downloadCv}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-auto max-w-7xl overflow-hidden backdrop-blur-2xl bg-black/90 border border-white/10 rounded-2xl"
          >
            <div className="flex flex-col p-8 gap-6 font-bold tracking-tighter text-2xl">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/5" />
              {downloadCv}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
