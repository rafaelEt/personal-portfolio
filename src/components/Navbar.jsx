import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Github, Send } from 'lucide-react';

const XIcon = ({ size = 18, className = "" }) => (
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glass-morphism intensity
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    const email = "hello@rafaeltadesse.dev";
    const subject = encodeURIComponent("Project Inquiry: Your title");
    const body = encodeURIComponent("Hi Rafael,\n\nI saw your portfolio and I'm interested in discussing...");
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };
  

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-300"
    >
      <div className={`
        mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl
        transition-all duration-500 border
        ${isScrolled 
          ? 'backdrop-blur-xl bg-black/40 border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'}
      `}>
        
        {/* Branding - Founder Identity */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
            Rafael<span className="text-orange-500">.</span>Tadesse
          </div>
          <div className="hidden lg:block h-4 w-[1px] bg-white/10 mx-2" />
          <div className="hidden lg:flex items-center gap-4 text-gray-500">
            <a href="https://t.me/RafaelTadesse" target='_blank' className="hover:text-white transition-colors"><Send size={16} /></a>
            <a href="https://x.com/RafaelTade522" target='_blank' className="hover:text-white transition-colors"><XIcon size={18} /></a>
            <a href="https://github.com/rafaelEt" target='_blank' className="hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-8 text-[11px] font-bold tracking-[0.15em] text-gray-400">
            {[{ label: 'PRODUCTS', href: '#products' }, { label: 'BUILD LOG', href: '#build-log' }].map((item) => (
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
          
          <button onClick={handleContact} className="relative group overflow-hidden px-5 py-2 bg-white text-black text-xs font-black rounded-lg transition-all hover:pr-8">
            <span className="relative z-10">TALK TO ME</span>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
               →
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>PRODUCTS</a>
              <a href="#build-log" onClick={() => setMobileMenuOpen(false)}>BUILD LOG</a>
              <hr className="border-white/5" />
              <div className="flex gap-6 text-gray-400">
                 <Linkedin /> <Github />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}