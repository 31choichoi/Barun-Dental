import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="http://mydrim.net/img/dental_main.png"
          alt="Beautiful smile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-accent font-serif uppercase tracking-[0.2em] text-sm mb-4">
            Barun Dental Clinic
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark leading-[0.9] mb-8 relative z-20">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0, -5, 0],
                rotate: [0, 1, -1, 0.5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Laminate
            </motion.span>
            <br />
            <motion.span
              className="inline-block italic text-brand-accent mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, 15, 0, 10, 0],
                rotate: [0, -2, 2, -1, 0],
                scale: [1, 1.02, 1, 1.01, 1]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              One Day
            </motion.span>
          </h1>
          <div className="h-px w-24 bg-brand-accent mb-8" />
          <p className="text-lg md:text-xl text-brand-dark/80 font-light leading-relaxed mb-10 max-w-md">
            Oneday Laminate<br />
            하루면 충분해<br />
            나를 위한 미소 업그레이드!
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-brand-dark text-white text-sm font-semibold tracking-wider hover:bg-brand-accent transition-all duration-300">
              상담하기
            </button>
            <button className="px-8 py-4 border border-brand-dark text-brand-dark text-sm font-semibold tracking-wider hover:bg-brand-dark hover:text-white transition-all duration-300">
              자세히보기
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent z-[5] backdrop-blur-[2px]" />
      <div className="absolute inset-y-0 left-0 w-[40%] bg-brand-cream/20 backdrop-blur-[4px] z-[4]" />
       <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-4">
        <span className="text-brand-muted text-xs font-semibold tracking-widest">01 / 04</span>
        <div className="flex gap-2">
          <div className="w-12 h-[2px] bg-brand-dark" />
          <div className="w-12 h-[2px] bg-brand-dark/20" />
        </div>
      </div>
    </section>
  );
}
