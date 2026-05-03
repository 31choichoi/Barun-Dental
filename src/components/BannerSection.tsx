import { motion } from 'motion/react';

export default function BannerSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-brand-cream/30">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 space-y-8"
            >
              <h2 className="text-4xl font-serif text-brand-dark leading-tight">
                In one day, <span className="text-brand-accent italic">24 hour</span><br />
                만족스러운 치료 결과를 만날 시간<br />
                단, 하루
              </h2>
              <p className="text-brand-muted font-light leading-relaxed">
                바른치과의 디지털 기공소에서 주치의와의 긴밀한 소통을 통해<br />
                빠르고 정교한 보철물이 탄생합니다.
              </p>
              <button className="px-6 py-2 border border-brand-muted text-brand-muted text-[10px] font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-all">
                디지털기공소
              </button>
            </motion.div>
            
            <div className="relative h-[400px] overflow-hidden">
               <img
                 src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000&h=600"
                 alt="Digital Lab"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-brand-dark/20 flex items-center justify-center">
                  <span className="text-white font-serif text-4xl italic">1Day - Prosthetics</span>
               </div>
            </div>
          </div>
       </div>
    </section>
  );
}
