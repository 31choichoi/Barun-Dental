import { Phone, MessageCircle, Navigation, Calendar, ChevronDown } from 'lucide-react';

export default function QuickMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] hidden md:block">
      <div className="bg-[#E5D7C1] border-t border-brand-peach/20 shadow-2xl h-16">
        <div className="max-w-[1400px] mx-auto h-full px-4 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-6 flex-1">
            <span className="text-sm font-bold text-[#444] whitespace-nowrap">빠른 상담신청</span>
            
            <div className="flex items-center gap-2 flex-1 max-w-[800px]">
              <input 
                type="text" 
                placeholder="이름" 
                className="bg-white px-3 py-2 text-xs w-32 outline-none border-none placeholder:text-gray-300"
              />
              <input 
                type="text" 
                placeholder="연락처" 
                className="bg-white px-3 py-2 text-xs w-40 outline-none border-none placeholder:text-gray-300"
              />
              <div className="relative flex-1">
                <select className="appearance-none bg-white px-3 py-2 text-xs w-full outline-none border-none text-[#666]">
                  <option>상담 부위를 선택하세요</option>
                  <option>라미네이트</option>
                  <option>임플란트</option>
                  <option>치아교정</option>
                  <option>심미보철</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              </div>

              <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap ml-2">
                <input type="checkbox" className="w-4 h-4 rounded-none border-none" />
                <span className="text-[10px] text-[#555] font-medium">개인정보수집동의(자세히)</span>
              </label>

              <button className="bg-[#F89B7E] text-white px-6 py-2 text-xs font-bold hover:bg-[#e68a6d] transition-colors ml-4 whitespace-nowrap">
                상담신청
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 pl-6 border-l border-[#d4c6af]">
            <a href="#" className="flex items-center gap-1.5 group">
              <Phone size={18} className="text-[#F89B7E] fill-[#F89B7E]/20" />
              <span className="text-xs font-bold text-[#444] group-hover:text-brand-dark transition-colors">전화상담</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 group">
              <Calendar size={18} className="text-[#F89B7E] fill-[#F89B7E]/20" />
              <span className="text-xs font-bold text-[#444] group-hover:text-brand-dark transition-colors">네이버예약</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 group">
              <MessageCircle size={18} className="text-[#F89B7E] fill-[#F89B7E]/20" />
              <span className="text-xs font-bold text-[#444] group-hover:text-brand-dark transition-colors">카톡상담</span>
            </a>
            <a 
              href="#location" 
              className="flex items-center gap-1.5 group"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#location');
                if (target) {
                  const headerOffset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              <Navigation size={18} className="text-[#F89B7E] fill-[#F89B7E]/20" />
              <span className="text-xs font-bold text-[#444] group-hover:text-brand-dark transition-colors">오시는길</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
