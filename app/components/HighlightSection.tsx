const highlights = [
  {
    id: "quality",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "ผลไม้เกรด A+",
    desc: "คัดสรรทุกชิ้นด้วยตัวเอง รับรองคุณภาพความสดใหม่ก่อนจัดส่ง",
  },
  {
    id: "care",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "จัดด้วยใจทุกครั้ง",
    desc: "ทุกตะกร้าถูกออกแบบและจัดวางอย่างพิถีพิถัน เหมือนให้เองมือต่อมือ",
  },
  {
    id: "delivery",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "ส่งถึงมือผู้รับ",
    desc: "จัดส่งตามวันและเวลาที่นัด ทั้งพื้นที่ชลบุรีและพื้นที่ใกล้เคียง",
  },
];

export default function HighlightSection() {
  return (
    <section id="highlights" className="py-20 bg-[#fdf8f0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-[#b91c1c] text-sm font-semibold tracking-widest uppercase mb-3">
            ทำไมต้องเลือกเรา
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1c1008]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            จุดเด่นที่ทำให้เราแตกต่าง
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              id={`highlight-${item.id}`}
              className="text-center group p-8 rounded-2xl bg-white border border-[#f5ebe0] shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#b91c1c]/10 text-[#b91c1c] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#b91c1c] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3
                className="text-xl font-bold text-[#1c1008] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-[#7f5c48] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
