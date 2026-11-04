import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | บุปผาชาติ",
  description: "ข้อมูลเกี่ยวกับความเป็นส่วนตัวเมื่อเยี่ยมชมเว็บไซต์และติดต่อร้าน",
  openGraph: {
    title: "นโยบายความเป็นส่วนตัว | บุปผาชาติ",
    description: "ข้อมูลเกี่ยวกับความเป็นส่วนตัวเมื่อเยี่ยมชมเว็บไซต์และติดต่อร้าน",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <article className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <PageIntro
            eyebrow="ข้อมูลสำหรับผู้เข้าชม"
            title="นโยบายความเป็นส่วนตัว"
            description="เว็บไซต์นี้เป็นช่องทางแนะนำสินค้าและช่องทางติดต่อของร้านบุปผาชาติ"
          />
          <div className="space-y-8 rounded-2xl border border-[#f5ebe0] bg-white p-6 leading-relaxed text-[#4a3728] md:p-10">
            <section>
              <h2 className="text-xl font-bold text-[#1c1008]">ข้อมูลที่เว็บไซต์เก็บรวบรวม</h2>
              <p className="mt-3">
                เว็บไซต์นี้ไม่มีแบบฟอร์มส่งข้อมูลส่วนบุคคล ขณะติดต่อร้านผ่าน LINE หรือ Facebook
                ข้อมูลที่คุณส่งจะถูกจัดการผ่านแพลตฟอร์มนั้นตามนโยบายของผู้ให้บริการ
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#1c1008]">วัตถุประสงค์ในการใช้ข้อมูล</h2>
              <p className="mt-3">
                ข้อมูลที่คุณเลือกส่งให้ร้านผ่านช่องทางติดต่อ ใช้เพื่อสนทนา ตอบคำถาม
                และดำเนินการเกี่ยวกับคำขอหรือคำสั่งซื้อของคุณ
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#1c1008]">ช่องทางติดต่อ</h2>
              <p className="mt-3">
                หากมีคำถามเกี่ยวกับข้อมูลส่วนบุคคล โปรดติดต่อร้านผ่านช่องทาง LINE หรือ Facebook
                ที่แสดงไว้บนเว็บไซต์
              </p>
            </section>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
