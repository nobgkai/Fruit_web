import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const collections = [
  {
    number: "01",
    label: "เลือกตามโอกาส",
    title: "ของขวัญวันพิเศษ",
    description:
      "กระเช้าผลไม้ที่เลือกเป็นของขวัญได้ในหลายช่วงเวลา พร้อมสอบถามและเลือกแบบที่เหมาะกับผู้รับ",
    occasion: "birthday",
    productSlugs: ["premium-tropical-mix", "golden-mango-basket"],
  },
  {
    number: "02",
    label: "ส่งต่อความห่วงใย",
    title: "เติมกำลังใจให้คนสำคัญ",
    description:
      "เลือกกระเช้าผลไม้เพื่อส่งความรู้สึกดี ๆ ในวันที่อยากดูแลและระลึกถึงกัน",
    occasion: "get-well",
    productSlugs: ["wellness-green-basket"],
  },
  {
    number: "03",
    label: "ร่วมยินดีกับก้าวใหม่",
    title: "ของขวัญแทนคำยินดี",
    description:
      "ส่งมอบความประทับใจให้กับความสำเร็จ วันเริ่มต้นใหม่ หรือช่วงเวลาที่น่าจดจำ",
    occasion: "celebrate",
    productSlugs: ["celebration-grand"],
  },
];

const LINE_URL = "https://line.me/ti/p/~@buphachat";

function CollectionInquiryCard() {
  return (
    <div className="flex min-h-full flex-col justify-between rounded-xl border border-dashed border-[#d8cbb8] bg-[#f7f5ef] p-6 md:p-7">
      <div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#9a7656]">
          +
        </span>
        <h4 className="mt-5 text-lg font-semibold text-[#302d29]">
          อยากได้แบบที่เข้ากับผู้รับเป็นพิเศษ?
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-[#71685d]">
          บอกโอกาสและงบประมาณให้ร้านช่วยแนะนำรูปแบบที่เหมาะกับคุณ
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#735b42] hover:text-[#b91c1c]"
      >
        คุยกับเรา
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function FeaturedProductsSection() {
  return (
    <section id="best-selling" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 flex flex-col gap-5 border-b border-[#e9e4dc] pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#927657]">
              BUPHACHAT / GIFT COLLECTION
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight text-[#302d29] md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              สินค้าขายดี
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#71685d] md:text-base">
              เลือกชมกระเช้าผลไม้ตามความรู้สึกที่อยากส่งต่อ แล้วให้เราช่วยดูแลรายละเอียด
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#927657] pb-1 text-sm font-semibold text-[#735b42] transition-colors hover:border-[#b91c1c] hover:text-[#b91c1c]"
          >
            ดูสินค้าทั้งหมด
            <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className="space-y-12 md:space-y-16">
          {collections.map((collection) => {
            const collectionProducts = collection.productSlugs.flatMap((slug) => {
              const product = products.find((item) => item.slug === slug);
              return product ? [product] : [];
            });

            return (
              <section
                key={collection.number}
                aria-labelledby={`collection-${collection.number}`}
                className="grid gap-6 border-b border-[#eee9e2] pb-12 last:border-0 last:pb-0 md:gap-10 lg:grid-cols-[0.8fr_1.7fr]"
              >
                <div className="flex flex-col items-start">
                  <span className="font-display text-4xl font-light tracking-tight text-[#c5b7a5] md:text-5xl">
                    {collection.number}
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#927657]">
                    {collection.label}
                  </p>
                  <h3
                    id={`collection-${collection.number}`}
                    className="mt-2 text-2xl font-semibold tracking-tight text-[#302d29] md:text-3xl"
                  >
                    {collection.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#71685d]">
                    {collection.description}
                  </p>
                  <Link
                    href={`/products?occasion=${collection.occasion}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#735b42] hover:text-[#b91c1c]"
                  >
                    เลือกชมตามโอกาส
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-5">
                  {collectionProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                  {collectionProducts.length === 1 && <CollectionInquiryCard />}
                </div>
              </section>
            );
          })}
        </div>

        <aside className="mt-16 overflow-hidden rounded-2xl bg-[#343c32] text-white md:mt-20">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#d8c7a6]">
                LOOKING FOR A HEALTHY GIFT?
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                มองหาชุดรังนกหรือของขวัญเพื่อสุขภาพ?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                สอบถามรายการสินค้าและความพร้อมกับร้านได้โดยตรง
                เนื่องจากข้อมูลสินค้าและราคาต้องยืนยันก่อนสั่งซื้อ
              </p>
            </div>
            <a
              href={`${LINE_URL}?text=${encodeURIComponent("สอบถามชุดรังนกและของขวัญเพื่อสุขภาพ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#343c32] transition-colors hover:bg-[#eee9e2]"
            >
              สอบถามทาง LINE
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
