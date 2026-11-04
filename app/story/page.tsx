import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "เรื่องราวของเรา | บุปผาชาติ",
  description: "ทำความรู้จักกับแนวคิดการเลือกและจัดกระเช้าผลไม้ของบุปผาชาติ",
  openGraph: {
    title: "เรื่องราวของเรา | บุปผาชาติ",
    description: "ทำความรู้จักกับแนวคิดการเลือกและจัดกระเช้าผลไม้ของบุปผาชาติ",
    images: ["/images/brand-story.jpg"],
  },
};

const values = [
  {
    title: "คัดสรร",
    description: "ใส่ใจเลือกผลไม้สำหรับจัดเป็นของขวัญ",
  },
  {
    title: "ใส่ใจ",
    description: "จัดวางองค์ประกอบให้เหมาะกับโอกาสที่ต้องการ",
  },
  {
    title: "ส่งต่อ",
    description: "ตั้งใจให้ของขวัญเป็นตัวแทนความรู้สึกดี ๆ",
  },
];

export default function StoryPage() {
  return (
    <PageFrame>
      <article className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <PageIntro
            eyebrow="เรื่องราวของเรา"
            title="ของขวัญที่เลือกด้วยความใส่ใจ"
            description="บุปผาชาติจัดกระเช้าผลไม้สำหรับส่งต่อความรู้สึกดี ๆ ในวันสำคัญและโอกาสต่าง ๆ"
          />

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/brand-story.jpg"
                alt="ภาพบรรยากาศและการจัดกระเช้าผลไม้"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1c1008]">ตั้งใจในทุกรายละเอียด</h2>
              <p className="mt-4 leading-relaxed text-[#4a3728]">
                กระเช้าผลไม้เป็นมากกว่าของฝาก เราอยากช่วยให้คุณเลือกของขวัญที่เหมาะกับคนรับ
                ไม่ว่าจะเป็นวันเกิด เยี่ยมไข้ แสดงความยินดี หรือเทศกาล
              </p>
              <p className="mt-4 leading-relaxed text-[#4a3728]">
                หากต้องการทราบที่มาของร้าน ขั้นตอนการคัดเลือกผลไม้ หรือข้อมูลทีมงานเพิ่มเติม
                สามารถสอบถามรายละเอียดจากร้านได้โดยตรง
              </p>
            </div>
          </div>

          <section className="mt-16 rounded-2xl bg-white px-6 py-10 md:px-10">
            <h2 className="text-center text-2xl font-bold text-[#1c1008]">สิ่งที่เราให้ความสำคัญ</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <div key={value.title} className="rounded-xl border border-[#f5ebe0] bg-[#fdf8f0] p-6">
                  <p className="text-sm font-semibold text-[#d4a853]">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-[#b91c1c]">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#7f5c48]">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="rounded-full bg-[#b91c1c] px-6 py-3 font-semibold text-white hover:bg-[#7f1d1d]">
              ดูสินค้า
            </Link>
            <a
              href="https://line.me/ti/p/~@buphachat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#00B900] px-6 py-3 font-semibold text-white hover:bg-[#009900]"
            >
              สอบถามทาง LINE
            </a>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
