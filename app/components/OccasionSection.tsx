import Link from "next/link";
import Image from "next/image";

export const occasions = [
  {
    id: "birthday",
    slug: "birthday",
    label: "วันเกิด",
    tagline: "ส่งความสุขและรอยยิ้มในวันพิเศษ",
    emoji: "🎂",
    color: "from-rose-500 to-pink-400",
    image: "/images/occasion-birthday.jpg",
  },
  {
    id: "getwell",
    slug: "get-well",
    label: "เยี่ยมไข้",
    tagline: "ห่วงใยส่งถึงมือด้วยผลไม้สดใส",
    emoji: "💚",
    color: "from-emerald-600 to-green-400",
    image: "/images/occasion-getwell.jpg",
  },
  {
    id: "celebrate",
    slug: "celebrate",
    label: "แสดงความยินดี",
    tagline: "ร่วมยินดีในทุกความสำเร็จ",
    emoji: "🥂",
    color: "from-amber-600 to-yellow-400",
    image: "/images/occasion-celebrate.jpg",
  },
  {
    id: "festival",
    slug: "festival",
    label: "เทศกาล",
    tagline: "ตะกร้าผลไม้สวยงามสำหรับทุกเทศกาล",
    emoji: "🎊",
    color: "from-red-700 to-rose-500",
    image: "/images/occasion-festival.jpg",
  },
  {
    id: "corporate",
    slug: "corporate",
    label: "ของขวัญองค์กร",
    tagline: "ของขวัญพรีเมียมสำหรับลูกค้าและพาร์ทเนอร์",
    emoji: "🏢",
    color: "from-slate-700 to-slate-500",
    image: "/images/occasion-corporate.jpg",
  },
  {
    id: "custom",
    slug: "custom",
    label: "ออกแบบพิเศษ",
    tagline: "บอกความต้องการ เราจัดให้ตามใจคุณ",
    emoji: "✨",
    color: "from-purple-700 to-violet-500",
    image: "/images/occasion-custom.jpg",
  },
];

export default function OccasionSection() {
  return (
    <section id="occasions" className="py-20 md:py-28 bg-[#fdf8f0]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#b91c1c] text-sm font-semibold tracking-widest uppercase mb-3">
            ช้อปตามโอกาส
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1c1008] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            เลือกตามโอกาสที่คุณต้องการ
          </h2>
          <p className="text-[#7f5c48] max-w-lg mx-auto">
            ทุกโอกาสมีตะกร้าผลไม้ที่เหมาะสม คัดสรรพิเศษให้ตรงกับความรู้สึกที่อยากส่งต่อ
          </p>
        </div>

        {/* Grid — desktop 3 cols / mobile horizontal scroll */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {occasions.map((occ) => (
            <Link
              key={occ.id}
              href={`/products?occasion=${occ.slug}`}
              id={`occasion-card-${occ.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-md card-hover"
            >
              {/* Gradient bg placeholder (until real images loaded) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${occ.color} opacity-80`} />
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={occ.image}
                  alt={occ.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <span className="text-2xl mb-1">{occ.emoji}</span>
                <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  {occ.label}
                </h3>
                <p className="text-white/75 text-xs mt-1 leading-snug">
                  {occ.tagline}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[#f0c672] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  ดูสินค้า
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
