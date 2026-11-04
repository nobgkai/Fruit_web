import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://line.me/ti/p/~@buphachat";

const footerLinks = [
  {
    heading: "สินค้า",
    links: [
      { label: "สินค้าทั้งหมด", href: "/products" },
      { label: "วันเกิด", href: "/products?occasion=birthday" },
      { label: "เยี่ยมไข้", href: "/products?occasion=get-well" },
      { label: "แสดงความยินดี", href: "/products?occasion=celebrate" },
      { label: "เทศกาล", href: "/products?occasion=festival" },
    ],
  },
  {
    heading: "เกี่ยวกับเรา",
    links: [
      { label: "เรื่องราวของเรา", href: "/story" },
      { label: "รีวิวลูกค้า", href: "/reviews" },
      { label: "คำถามที่พบบ่อย", href: "/faq" },
    ],
  },
  {
    heading: "ติดต่อ",
    links: [
      { label: "ติดต่อเรา", href: "/contact" },
      { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1c1008] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Logo_BCP.svg"
                alt="บุปผาชาติ"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div>
                <p
                  className="font-bold text-lg text-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  บุปผาชาติ
                </p>
                <p className="text-white/50 text-xs">Buphachat Premium Fruit</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              ของขวัญผลไม้คัดพิเศษ จัดส่งด้วยความใส่ใจ เหมาะสำหรับทุกโอกาส
            </p>

            {/* Social / Contact icons */}
            <div className="flex gap-3">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-line"
                className="w-9 h-9 rounded-full bg-[#00B900] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LINE"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/buphachat.chon"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 text-sm hover:text-[#d4a853] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <p>© บุปผาชาติ. สงวนลิขสิทธิ์</p>
          <Link href="/privacy" className="hover:text-white/60 transition-colors">
            นโยบายความเป็นส่วนตัว
          </Link>
        </div>
      </div>
    </footer>
  );
}
