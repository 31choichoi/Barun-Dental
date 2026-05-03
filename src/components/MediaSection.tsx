import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function MediaSection() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4 uppercase tracking-[0.2em]">BARUN Media</h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[50px] overflow-hidden shadow-sm">
           <div className="relative aspect-video lg:aspect-square bg-brand-dark group cursor-pointer overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=1200"
                alt="Clinic Video"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                 <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300">
                    <Play className="text-white ml-1" size={32} fill="white" />
                 </div>
                 <div className="text-center">
                    <p className="text-white font-serif text-2xl italic tracking-wide">자연스러운 아름다움</p>
                    <p className="text-white/70 text-sm font-light">Barun Dental Story</p>
                 </div>
              </div>
           </div>

           <div className="p-12 lg:p-20 space-y-10">
              <div className="space-y-4">
                 <h3 className="text-3xl font-bold text-brand-dark leading-tight">
                    누구나 가지고 싶어 하는<br />
                    자연스러운 아름다움, 바른치과니까!
                 </h3>
                 <p className="text-brand-muted font-light leading-relaxed">
                    바른치과는 안정적이고 정확한 진료를 제공합니다.<br />
                    진정한 아름다움을 바른치과에서 만나보세요.
                 </p>
                 <button className="px-6 py-2 border border-brand-accent text-brand-accent text-[10px] font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-white transition-all">
                    리엔장 미디어
                 </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                 {[1,2,3].map((i) => (
                    <div key={i} className="aspect-video bg-brand-cream rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-brand-accent transition-all">
                       <img src={`https://picsum.photos/seed/thumb${i}/300/200`} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
