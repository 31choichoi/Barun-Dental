import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">Location</h2>
          <p className="text-brand-muted italic">찾아오시는 길</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 aspect-video bg-white rounded-3xl overflow-hidden shadow-sm shadow-brand-peach/20"
          >
            {/* Fake Map Representation */}
            <div className="w-full h-full bg-slate-100 relative group cursor-pointer">
              <img
                src="https://picsum.photos/seed/map_dental/1200/800"
                alt="Map location"
                className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="text-brand-accent" size={24} fill="currentColor" fillOpacity={0.2} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 p-4 rounded-xl flex items-center justify-between text-xs backdrop-blur-sm shadow-sm group-hover:bg-white transition-all">
                <span className="font-semibold text-brand-dark">서울특별 서초구 강남대로 403 343강남타워 13F</span>
                <button className="px-4 py-2 bg-brand-accent text-white rounded-lg font-bold">지도보기</button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent">
                <Phone size={20} />
                <span className="text-sm font-bold tracking-widest uppercase">Phone</span>
              </div>
              <p className="text-3xl font-serif text-brand-dark">02-6258-2875</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent">
                <Clock size={20} />
                <span className="text-sm font-bold tracking-widest uppercase">Opening Hours</span>
              </div>
              <div className="space-y-2 text-sm text-brand-muted font-light">
                <div className="flex justify-between border-b border-brand-peach/20 pb-2">
                  <span>화 수 목</span>
                  <span className="text-brand-dark font-medium">10:00 am - 07:00 pm</span>
                </div>
                <div className="flex justify-between border-b border-brand-peach/20 pb-2">
                  <span>월 금</span>
                  <span className="text-brand-dark font-medium">10:00 am - 09:00 pm (야간진료)</span>
                </div>
                <div className="flex justify-between border-b border-brand-peach/20 pb-2">
                  <span>토 요 일</span>
                  <span className="text-brand-dark font-medium">10:00 am - 04:00 pm</span>
                </div>
                <p className="text-[10px] text-brand-accent mt-2 font-bold tracking-tighter">일요일/공휴일 휴무</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
