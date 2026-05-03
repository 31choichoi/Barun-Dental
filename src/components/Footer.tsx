export default function Footer() {
  return (
    <footer className="pt-20 pb-32 bg-white border-t border-brand-peach/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-serif text-lg italic font-bold">
                B
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-brand-dark uppercase">BARUN DENTAL CLINIC</span>
            </div>
            <div className="text-[11px] text-brand-muted leading-relaxed font-light uppercase tracking-tight">
              서울특별시 서초구 강남대로 403, 343강남타워 13F (서초동807-3) | 사업자번호 : 123-45-67890 | 대표전화 : 02-6258-2875<br />
              의료기관명칭 : 바른치과의원 | 대표원장 : 홍길동 | 의료광고심의번호 : 제123456호
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-[11px] font-bold text-brand-muted tracking-widest uppercase">
            <a href="#" className="hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark">Personal Information Policy</a>
            <a href="#" className="hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark">Terms of Service</a>
            <a href="#" className="hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark">Admin</a>
          </div>
        </div>

        <div className="text-center md:text-left">
           <p className="text-[10px] text-brand-muted/50 tracking-tighter uppercase font-light">
             &copy; 2026 BARUN DENTAL CLINIC. ALL RIGHTS RESERVED. DESIGN BY BARUN.
           </p>
        </div>
      </div>
    </footer>
  );
}
