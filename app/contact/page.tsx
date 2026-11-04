import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "ติดต่อเรา | บุปผาชาติ",
  description: "ติดต่อบุปผาชาติเพื่อสอบถามสินค้าและการสั่งซื้อผ่าน LINE หรือ Facebook",
  openGraph: {
    title: "ติดต่อเรา | บุปผาชาติ",
    description: "ติดต่อบุปผาชาติเพื่อสอบถามสินค้าและการสั่งซื้อ",
    images: ["/images/hero-bg.jpg"],
  },
};

const contacts = [
  {
    name: "LINE",
    description: "สอบถามสินค้าและสั่งซื้อ",
    href: "https://line.me/ti/p/~@buphachat",
    className: "bg-[#00B900] hover:bg-[#009900]",
  },
  {
    name: "Facebook",
    description: "ติดตามข่าวสารและติดต่อร้าน",
    href: "https://facebook.com/buphachat.chon",
    className: "bg-[#1877F2] hover:bg-[#1264d8]",
  },
];

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <PageIntro
            eyebrow="เราพร้อมช่วยแนะนำ"
            title="ติดต่อบุปผาชาติ"
            description="สอบถามสินค้า ราคา คิวจัดทำ และการจัดส่งได้ผ่านช่องทางออนไลน์ของร้าน"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl p-7 text-white shadow-sm transition-transform hover:-translate-y-1 ${contact.className}`}
              >
                <h2 className="text-2xl font-bold">{contact.name}</h2>
                <p className="mt-2 text-white/85">{contact.description}</p>
                <span className="mt-5 inline-block font-semibold underline underline-offset-4">เปิดช่องทางติดต่อ</span>
              </a>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#f5ebe0] bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#1c1008]">ที่อยู่และเวลาทำการ</h2>
            <p className="mt-3 leading-relaxed text-[#7f5c48]">
              ข้อมูลที่อยู่หน้าร้าน เวลาทำการ และพิกัดแผนที่ยังไม่ได้รับการยืนยัน
              กรุณาติดต่อร้านก่อนเดินทาง เพื่อให้ได้รับข้อมูลที่ถูกต้อง
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
