import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";
import { faqGroups } from "../data/faqs";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | บุปผาชาติ",
  description: "คำตอบเบื้องต้นเกี่ยวกับการสั่งซื้อ กระเช้าผลไม้ และการจัดส่ง",
  openGraph: {
    title: "คำถามที่พบบ่อย | บุปผาชาติ",
    description: "คำตอบเบื้องต้นเกี่ยวกับการสั่งซื้อ กระเช้าผลไม้ และการจัดส่ง",
    images: ["/images/hero-bg.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  ),
};

export default function FAQPage() {
  return (
    <PageFrame>
      <section className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <PageIntro
            eyebrow="ช่วยให้สั่งซื้อได้ง่ายขึ้น"
            title="คำถามที่พบบ่อย"
            description="ข้อมูลบางอย่าง เช่น คิวจัดทำ พื้นที่จัดส่ง และเวลาทำการ อาจเปลี่ยนแปลงได้ กรุณายืนยันกับร้านก่อนสั่งซื้อ"
          />

          <section className="mb-12 rounded-2xl bg-[#7f1d1d] p-6 text-white md:p-8">
            <h2 className="text-center text-2xl font-bold">สั่งง่าย 3 ขั้นตอน</h2>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                "เลือกสินค้าที่สนใจ",
                "ทัก LINE แจ้งวันรับ ที่อยู่ และรายละเอียด",
                "ยืนยันคำสั่งซื้อและรอรับสินค้า",
              ].map((step, index) => (
                <li key={step} className="text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a853] font-bold">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="space-y-8">
            {faqGroups.map((group) => (
              <section key={group.title}>
                <h2 className="mb-3 text-xl font-bold text-[#1c1008]">{group.title}</h2>
                <div className="space-y-3">
                  {group.questions.map(({ question, answer }) => (
                    <details key={question} className="group rounded-xl border border-[#f5ebe0] bg-white p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#1c1008]">
                        {question}
                        <span className="text-xl text-[#b91c1c] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                      </summary>
                      <p className="mt-4 leading-relaxed text-[#7f5c48]">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#7f5c48]">ไม่พบคำตอบที่ต้องการ?</p>
            <Link href="/contact" className="mt-3 inline-flex rounded-full bg-[#00B900] px-6 py-3 font-semibold text-white hover:bg-[#009900]">
              ติดต่อร้าน
            </Link>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </PageFrame>
  );
}
