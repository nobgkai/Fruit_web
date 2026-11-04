const LINE_URL = "https://line.me/ti/p/~@buphachat";

export default function CtaSection() {
  return (
    <section
      id="cta-footer-section"
      className="py-20 md:py-24 bg-gradient-to-br from-[#b91c1c] via-[#991b1b] to-[#7f1d1d] relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <span className="inline-block text-[#f0c672] text-sm font-semibold tracking-widest uppercase mb-5">
          พร้อมสั่งซื้อแล้วหรือยัง?
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ส่งความห่วงใย<br />
          ผ่านผลไม้พรีเมียม
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          บอกเราถึงโอกาส งบประมาณ และวันที่ต้องการ<br />
          เราจะจัดตะกร้าที่สวยงามและเหมาะสมให้คุณ
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-section-line-btn"
          className="inline-flex items-center gap-3 bg-[#00B900] hover:bg-[#009900] text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl line-btn-glow"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
          </svg>
          ทักหาเราผ่าน LINE
        </a>
      </div>
    </section>
  );
}
