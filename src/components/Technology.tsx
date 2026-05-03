import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const techs = [
  {
    title: '무통마취기',
    desc: '마취부터 아프지 않게 편안한 진료를 약속합니다.',
    tag: '통증 제로에 도전하다',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: '고압증기 멸균기',
    desc: '포자까지 완전히 멸균하는 시스템으로 안심하고 진료받으실 수 있습니다.',
    tag: '세균 걱정 없는 안심 진료',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'iTero Lumina',
    desc: '구강 안을 그대로 재현하여 정확하게 진단하고 치료합니다.',
    tag: '아이테로 구강스캐너',
    image: 'https://images.unsplash.com/photo-1598256989490-efd9260d926e?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export default function Technology() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold text-brand-dark">
              디지털에<br />
              실력을 더하다
            </h2>
            <p className="text-brand-muted font-light">바른치과는 3D 디지털 기술로 빠른 만큼 정확합니다.</p>
          </motion.div>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-brand-peach/50 flex items-center justify-center text-brand-muted hover:bg-brand-peach hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-peach/50 flex items-center justify-center text-brand-muted hover:bg-brand-peach hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6 p-8 border border-transparent hover:border-brand-peach/30 transition-all rounded-3xl group"
            >
              <div className="w-40 h-40 flex-shrink-0">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-accent tracking-tighter block uppercase opacity-80">
                  {tech.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-dark">{tech.title}</h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
