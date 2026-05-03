/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Signature from './components/Signature';
import Technology from './components/Technology';
import BannerSection from './components/BannerSection';
import MediaSection from './components/MediaSection';
import Location from './components/Location';
import Footer from './components/Footer';
import QuickMenu from './components/QuickMenu';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="values"><Values /></div>
        <div id="signature"><Signature /></div>
        <div id="technology"><Technology /></div>
        <BannerSection />
        
        {/* Before & After Section (Simple Mock) */}
        <section id="clinic" className="py-24 bg-white border-y border-brand-peach/20">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="space-y-4 text-center md:text-left">
                   <h2 className="text-4xl font-serif text-brand-dark">Before & After</h2>
                   <p className="text-brand-muted italic">치료결과로 말하는 바른치과</p>
                </div>
                <div className="flex gap-4">
                   <div className="w-64 aspect-[4/3] bg-brand-cream rounded-2xl overflow-hidden relative group cursor-pointer">
                      <img src="https://picsum.photos/seed/ba1/400/300" alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-white/80 text-[8px] font-bold tracking-tighter">BEFORE</div>
                   </div>
                   <div className="w-64 aspect-[4/3] bg-brand-cream rounded-2xl overflow-hidden relative group cursor-pointer">
                      <img src="https://picsum.photos/seed/ba2/400/300" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-brand-accent text-white text-[8px] font-bold tracking-tighter">AFTER</div>
                   </div>
                </div>
                <div className="hidden lg:block">
                   <div className="flex flex-col items-center gap-4">
                      <div className="px-10 py-16 bg-slate-100 rounded-2xl flex flex-col items-center gap-6 border border-brand-peach/20">
                        <p className="text-[10px] text-brand-muted font-bold tracking-widest text-center">로그인 후 확인 가능합니다.<br/>의료법을 준수합니다.</p>
                        <button className="px-8 py-3 bg-brand-dark text-white text-[10px] font-bold tracking-widest uppercase hover:bg-brand-accent transition-all">
                           LOGIN
                        </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <MediaSection />
        <div id="location"><Location /></div>
      </main>
      <Footer />
      <QuickMenu />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-[110] w-12 h-12 bg-white border border-brand-peach/50 rounded-full flex items-center justify-center text-brand-dark shadow-lg hover:bg-brand-accent hover:text-white transition-all duration-300"
            id="back-to-top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}


