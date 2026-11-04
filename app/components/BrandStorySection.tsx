import Link from "next/link";
import Image from "next/image";

export default function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
              <Image
                src="/images/brand-story.jpg"
                alt="เบื้องหลังร้านบุปผาชาติ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-[#b91c1c] text-white rounded-xl shadow-xl p-5 text-center">
              <p className="text-lg font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                ใส่ใจ
              </p>
              <p className="text-xs text-white/80 mt-1">ในทุกช่วงเวลา</p>
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <span className="inline-block text-[#b91c1c] text-sm font-semibold tracking-widest uppercase mb-3">
              เรื่องราวของเรา
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1c1008] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              คัดสรรด้วยใจ<br />
              <span className="text-gradient-brand">เพื่อทุกช่วงเวลาพิเศษ</span>
            </h2>
            <p className="text-[#4a3728] text-base leading-relaxed mb-5">
              บุปผาชาติเริ่มต้นจากความตั้งใจเล็กๆ ที่อยากส่งมอบสิ่งดีๆ ให้กับทุกคน
              ด้วยผลไม้คัดพิเศษที่เราเลือกมาด้วยความใส่ใจ จัดวางอย่างสวยงาม
              เพื่อให้ทุกการมอบเป็นความประทับใจที่จดจำไม่ลืม
            </p>
            <p className="text-[#4a3728] text-base leading-relaxed mb-8">
              ไม่ว่าจะเป็นวันเกิด เยี่ยมคนป่วย แสดงความยินดี หรือเทศกาลใดๆ
              เราพร้อมช่วยให้คุณส่งความห่วงใยออกไปได้อย่างสมบูรณ์แบบ
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "คัดสรร", desc: "เลือกให้เหมาะกับโอกาส" },
                { value: "ใส่ใจ", desc: "จัดวางทุกชิ้น" },
                { value: "ส่งตรง", desc: "ถึงมือผู้รับ" },
              ].map((item) => (
                <div key={item.value} className="text-center p-3 rounded-xl bg-[#fdf8f0] border border-[#f5ebe0]">
                  <p className="font-bold text-[#b91c1c] text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.value}
                  </p>
                  <p className="text-xs text-[#7f5c48] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/story"
              id="brand-story-link"
              className="inline-flex items-center gap-2 text-[#b91c1c] font-semibold hover:gap-3 transition-all group"
            >
              อ่านเรื่องของเรา
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
