import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: '바른치과', href: '#home' },
    { name: '진료철학', href: '#values' },
    { name: '시그니처', href: '#signature' },
    { name: '디지털장비', href: '#technology' },
    { name: '전후사진', href: '#clinic' },
    { name: '오시는길', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Update URL hash
    window.history.pushState(null, '', href);
    
    // Small timeout to allow the menu close state to settle
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Height of the fixed navbar
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-peach/30">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-serif text-xl italic font-bold">
              B
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark">BARUN</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-dark/70">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-brand-accent transition-colors"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-brand-muted">
            <button className="flex items-center gap-1 cursor-pointer hover:text-brand-dark transition-colors">
              <Globe size={14} />
              <span>KOR</span>
            </button>
            <div className="w-px h-3 bg-brand-peach/30" />
            <a 
              href="#login" 
              className="hover:text-brand-dark transition-colors"
              onClick={(e) => { e.preventDefault(); alert('준비 중인 서비스입니다.'); }}
            >
              로그인
            </a>
            <a 
              href="#signup" 
              className="hover:text-brand-dark transition-colors"
              onClick={(e) => { e.preventDefault(); alert('준비 중인 서비스입니다.'); }}
            >
              회원가입
            </a>
          </div>
          <button 
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-peach/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-medium text-brand-dark hover:text-brand-accent transition-colors py-2"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-dark transition-colors w-fit">
                   <Globe size={14} />
                   <span>KOR / ENG</span>
                </button>
                <div className="flex gap-4">
                  <a 
                    href="#login" 
                    className="text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); alert('준비 중인 서비스입니다.'); }}
                  >
                    로그인
                  </a>
                  <a 
                    href="#signup" 
                    className="text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); alert('준비 중인 서비스입니다.'); }}
                  >
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
