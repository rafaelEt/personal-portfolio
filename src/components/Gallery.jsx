import { motion } from 'framer-motion';
import { Camera, BookOpen, Quote } from 'lucide-react';

const journeyItems = [
  {
    type: 'photo',
    title: 'Pitching For Government Officials',
    description: 'Presenting the solution I had for queue issues in government sectors',
    image: '/nifas.jpg',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    type: 'story',
    title: 'The Solo Founder Mindset',
    quote: "Products don’t grow from ideas. They grow from shipped decisions.",
    description: 'How I managed 5 projects while maintaining a high uptime.',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    type: 'photo',
    title: 'Second Strategic Partnership',
    description: 'The moment for the second partnership signing for Interestly',
    image: '/jasper.png', 
    span: 'md:col-span-1 md:row-span-2',
  }
];

export default function JourneyGallery() {
  return (
    <section id="journey" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
            THE <span className="text-orange-500 font-outline text-transparent" style={{ WebkitTextStroke: '1px #f97316' }}>LOG</span> JOURNEY.
          </h2>
          <p className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">
            Documenting the raw process of building and scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {journeyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${item.span} group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#0a0a0a]`}
            >
              {/* PHOTO CARD */}
              {item.type === 'photo' && (
                <div className="relative h-full w-full">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                       <Camera size={14} className="text-orange-500" />
                       <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">Moment</span>
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              )}

              {/* STORY CARD */}
              {item.type === 'story' && (
                <div className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-orange-500/10 to-transparent">
                  <Quote size={142} className="text-orange-500 opacity-20" />
                  <div>
                    <p className="text-lg font-medium italic text-gray-200 mb-4 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Founder Philosophy</span>
                    <BookOpen size={14} className="text-gray-600" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}