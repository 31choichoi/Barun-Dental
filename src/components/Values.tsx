import { motion } from 'motion/react';

export default function Values() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Professional care"
              className="w-full h-[600px] object-cover rounded-tl-[100px] rounded-br-[100px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-brand-peach/50 -z-10" />
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-serif text-brand-dark">Thoroughness</h2>
              <p className="text-brand-accent font-medium italic">기본을 자랑하지 않는 바른치과</p>
              <p className="text-brand-muted leading-relaxed font-light">
                청결과 안전은 병원의 기본이기에<br />
                철저히 지키고 타협하지 않습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-serif text-brand-dark">Responsibility</h2>
              <p className="text-brand-accent font-medium italic">치료가 끝이 아닌 책임의 시작으로</p>
              <p className="text-brand-muted leading-relaxed font-light">
                책임감 있는 치료로 안심<br />
                안정적인 유지 관리로 한 번 더 안심할 수 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
