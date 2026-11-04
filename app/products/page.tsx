import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "../components/PageFrame";
import PageIntro from "../components/PageIntro";
import FruitLoading from "../components/FruitLoading";
import ProductCard from "../components/ProductCard";
import { occasions } from "../components/OccasionSection";
import { products } from "../data/products";

const LINE_URL = "https://line.me/ti/p/~@buphachat";

export const metadata: Metadata = {
  title: "สินค้า | บุปผาชาติ",
  description: "เลือกชมกระเช้าผลไม้และของขวัญตามโอกาส พร้อมสอบถามรายละเอียดทาง LINE",
  openGraph: {
    title: "สินค้า | บุปผาชาติ",
    description: "เลือกชมกระเช้าผลไม้และของขวัญตามโอกาส",
    images: ["/images/hero-bg.jpg"],
  },
};

const occasionFilters = [
  { slug: "", label: "ทั้งหมด" },
  ...occasions.map(({ slug, label }) => ({ slug, label })),
];

function ProductGridFallback() {
  return (
    <FruitLoading compact />
  );
}

async function ProductResults({
  searchParams,
}: {
  searchParams: Promise<{ occasion?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedOccasion = Array.isArray(params.occasion)
    ? params.occasion[0]
    : params.occasion;
  const selectedOccasion = occasionFilters.some(({ slug }) => slug === requestedOccasion)
    ? requestedOccasion ?? ""
    : "";
  const filteredProducts = selectedOccasion
    ? products.filter((product) => product.occasionSlugs.includes(selectedOccasion))
    : products;

  return (
    <>
      <nav aria-label="กรองสินค้าตามโอกาส" className="mb-8 flex flex-wrap justify-center gap-2">
        {occasionFilters.map(({ slug, label }) => (
          <Link
            key={slug || "all"}
            href={slug ? `/products?occasion=${slug}` : "/products"}
            aria-current={selectedOccasion === slug ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              selectedOccasion === slug
                ? "border-[#b91c1c] bg-[#b91c1c] text-white"
                : "border-[#e8d9c9] bg-white text-[#4a3728] hover:border-[#b91c1c] hover:text-[#b91c1c]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#f5ebe0] bg-white px-6 py-12 text-center">
          <p className="text-lg font-semibold text-[#1c1008]">ยังไม่มีสินค้าในหมวดนี้</p>
          <p className="mt-2 text-sm text-[#7f5c48]">สอบถามหรือแจ้งความต้องการแบบพิเศษกับร้านได้ทาง LINE</p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#00B900] px-6 py-3 font-semibold text-white hover:bg-[#009900]"
          >
            สอบถามทาง LINE
          </a>
        </div>
      )}
    </>
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ occasion?: string | string[] }>;
}) {
  return (
    <PageFrame>
      <section className="bg-[#fdf8f0] px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <PageIntro
            eyebrow="เลือกของขวัญที่ใช่"
            title="สินค้าของเรา"
            description="เลือกชมกระเช้าผลไม้ตามโอกาส หรือทักมาสอบถามรายละเอียดและราคาได้โดยตรง"
          />
          <Suspense fallback={<ProductGridFallback />}>
            <ProductResults searchParams={searchParams} />
          </Suspense>
          <div className="mt-12 rounded-2xl bg-white p-6 text-center md:p-8">
            <h2 className="text-xl font-bold text-[#1c1008]">อยากได้แบบเฉพาะของคุณ?</h2>
            <p className="mt-2 text-[#7f5c48]">บอกโอกาสและความต้องการให้เราช่วยแนะนำได้</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-[#00B900] px-6 py-3 font-semibold text-white hover:bg-[#009900]"
            >
              สอบถามทาง LINE
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
