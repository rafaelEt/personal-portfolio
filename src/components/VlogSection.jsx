import { motion } from 'framer-motion';

export default function VlogSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 italic tracking-tight">The Build Journey</h2>
            <p className="text-gray-400">
              I don't just ship code; I share the methodology. From DB schema design to 
              user acquisition strategies - recorded live.
            </p>
          </div>
          <a href="#" className="text-orange-500 font-mono text-sm border-b border-orange-500/20 pb-1 hover:border-orange-500 transition-all">
            VIEW CHANNEL // 1.4k+ SUBS
          </a>
        </div>

        {/* Cinematic Video Wrapper */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          {/* Glass Overlay for "YC" feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
          
          <iframe 
            className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            src="https://www.youtube.com/embed/PNBPV5HULHY"
            title="Building a Solo Startup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-8 left-8 z-20">
            <span className="bg-white text-black px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Featured Journey</span>
            <h3 className="text-2xl font-bold mt-2">Launching Interestly</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}