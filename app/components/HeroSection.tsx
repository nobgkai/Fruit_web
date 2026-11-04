import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/ti/p/~@buphachat";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90svh] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="ตะกร้าผลไม้พรีเมียมบุปผาชาติ"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — dark at bottom left */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pt-28 pb-20 sm:pt-32 md:pb-28">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#d4a853]/20 border border-[#d4a853]/50 text-[#f0c672] text-xs font-semibold px-3 py-1 rounded-full mb-5 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-pulse" />
            คัดสรรคุณภาพทุกชิ้น
          </span>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up animate-delay-100"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ของขวัญผลไม้<br />
            <span className="text-[#f0c672]">ที่ใส่ใจ</span>ทุกโอกาส
          </h1>

          {/* Sub-headline */}
          <p className="text-white/85 text-base md:text-lg mb-8 animate-fade-in-up animate-delay-200 leading-relaxed">
            ผลไม้คัดเกรดพรีเมียม จัดตะกร้าสวยงาม<br className="hidden sm:block" />
            เหมาะสำหรับวันเกิด เยี่ยมไข้ แสดงความยินดี และทุกเทศกาล
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-300">
            <Link
              href="/products"
              id="hero-view-products"
              className="inline-flex items-center justify-center gap-2 bg-[#b91c1c] hover:bg-[#7f1d1d] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ดูสินค้าทั้งหมด
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-line-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#00B900] hover:bg-[#009900] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg line-btn-glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
              </svg>
              ทัก LINE สั่งซื้อ
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap gap-6 animate-fade-in-up animate-delay-400">
          {[
            { icon: "🏆", text: "คุณภาพพรีเมียม" },
            { icon: "🚚", text: "จัดส่งถึงบ้าน" },
            { icon: "💬", text: "สั่งง่ายผ่าน LINE" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-white/80 text-sm">
              <span className="text-lg">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
