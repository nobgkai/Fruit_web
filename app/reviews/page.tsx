import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "รีวิวจากลูกค้า | บุปผาชาติ",
  description: "รีวิวจากลูกค้าที่อนุญาตให้เผยแพร่บนเว็บไซต์บุปผาชาติ",
  openGraph: {
    title: "รีวิวจากลูกค้า | บุปผาชาติ",
    description: "รีวิวจากลูกค้าที่อนุญาตให้เผยแพร่บนเว็บไซต์บุปผาชาติ",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function ReviewsPage() {
  return (
    <PageFrame>
      <section className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <PageIntro
            eyebrow="เสียงจากลูกค้า"
            title="รีวิวจากลูกค้า"
            description="เราจะแสดงรีวิวเมื่อได้รับความยินยอมจากลูกค้าแล้วเท่านั้น"
          />
          <div className="rounded-2xl border border-[#f5ebe0] bg-white px-6 py-12 text-center">
            <p className="text-lg font-semibold text-[#1c1008]">ยังไม่มีรีวิวที่พร้อมเผยแพร่</p>
            <p className="mt-2 leading-relaxed text-[#7f5c48]">
              ขณะนี้ยังไม่มีรีวิวที่ได้รับอนุญาตให้นำมาแสดงบนเว็บไซต์
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-[#b91c1c] px-6 py-3 font-semibold text-white hover:bg-[#7f1d1d]"
            >
              ดูสินค้า
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
