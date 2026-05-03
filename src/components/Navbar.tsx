import { motion } from 'motion/react';
import { Menu, Globe, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-peach/30">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-serif text-xl italic font-bold">
              B
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark">BARUN</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-dark/70">
            <a href="#" className="hover:text-brand-accent transition-colors">바른치과</a>
            <a href="#" className="hover:text-brand-accent transition-colors">원데이클리닉</a>
            <a href="#" className="hover:text-brand-accent transition-colors">라미네이트</a>
            <a href="#" className="hover:text-brand-accent transition-colors">임플란트</a>
            <a href="#" className="hover:text-brand-accent transition-colors">치아성형</a>
            <a href="#" className="hover:text-brand-accent transition-colors">고객센터</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-brand-muted">
            <div className="flex items-center gap-1 cursor-pointer hover:text-brand-dark">
              <Globe size={14} />
              <span>KOR</span>
            </div>
            <a href="#" className="hover:text-brand-dark">로그인</a>
            <a href="#" className="hover:text-brand-dark">회원가입</a>
          </div>
          <button className="lg:hidden p-2 text-brand-dark">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
