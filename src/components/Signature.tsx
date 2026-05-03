import { motion } from 'motion/react';

const services = [
  {
    id: '01',
    title: 'CUSTOM LAMINATE',
    krTitle: '리엔펄라미네이트',
    tag: '나에게 맞는 스마일라인',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '02',
    title: 'PERFECT LAMINATE',
    krTitle: '원데이올래미네이트',
    tag: '자연스러운 얼굴의 조화',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '03',
    title: 'DIGITAL IMPLANT',
    krTitle: '원데이임플란트',
    tag: '믿을 수 있는 정확한 진료',
    image: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '04',
    title: 'SAFE IMPLANT',
    krTitle: '수면임플란트',
    tag: '편안하고 안전한 진료',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400&h=500'
  }
];

export default function Signature() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-brand-dark tracking-widest uppercase mb-4">BARUN Signature</h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-cream">
                <img
                  src={service.image}
                  alt={service.krTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-brand-muted bg-white/80 px-2 py-1">
                  SIGNATURE {service.id}
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xs font-bold tracking-widest text-brand-accent mb-1">{service.title}</h3>
                <h4 className="text-xl font-bold text-brand-dark">{service.krTitle}</h4>
                <p className="text-sm text-brand-muted font-light">{service.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
