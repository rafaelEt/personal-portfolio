import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-28 md:pt-20">
      {/* 1. Background Layers: Grid + Interactive Glows */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT: The Narrative */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] font-mono tracking-[0.2em] text-orange-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  SOLO FOUNDER · ADDIS ABABA
                </div>
                <div className="h-[1px] w-12 bg-white/10" />
                <div className="flex gap-4 text-gray-500">
                  <a href="https://www.linkedin.com/in/rafael-tadesse-96274330b/" target='_blank' className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[80px] font-black tracking-[-0.05em] leading-[0.85] italic">
                SOLO FOUNDER. <br />
                8 PRODUCTS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                  4,000+ USERS.
                </span>
              </h1>
              
              <p className="text-xl md:text-xl text-gray-400 font-light leading-snug max-w-xl">
  <span className="text-white font-medium italic">5 live today</span>, used by chess players, radio listeners, and government offices. I design, code, and ship every one myself, then get on calls with the people using it to decide what to build next.
</p>

            </div>

            <div className="flex flex-wrap gap-5">
              <a href='#products' className="h-16 px-10 bg-white text-black font-black rounded-2xl flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all duration-300 group">
                EXPLORE SHIPMENTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE: The "Founder" Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative aspect-[4/5] md:w-[390px] mx-auto"
            >
              {/* Image Container with Custom Border Glow */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 p-3 bg-white/5 backdrop-blur-3xl overflow-hidden group">
                <img
                  src="/pic.jpg" 
                  alt="Founder Portrait"
                  className="w-full h-full object-cover rounded-[30px] transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="text-[10px] font-mono text-orange-500 tracking-[0.2em] mb-1 uppercase">Current Status</p>
                         <h4 className="font-bold text-lg">Building Orcha</h4>
                      </div>
                      <Award className="text-orange-500" size={24} />
                   </div>
                   <p className="text-xs text-gray-400 font-light leading-snug mt-3 pt-3 border-t border-white/10">
                     An AI meeting orchestrator, in its early stage.
                   </p>
                </div>
              </div>

              {/* Decorative background element behind image */}
              <div className="absolute -z-10 -top-10 -right-10 w-full h-full border border-orange-500/20 rounded-[40px] rotate-6" />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}