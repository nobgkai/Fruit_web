import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageFrame from "../../components/PageFrame";
import ProductCard from "../../components/ProductCard";
import { getProductBySlug, products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const LINE_URL = "https://line.me/ti/p/~@buphachat";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "ไม่พบสินค้า | บุปผาชาติ" };
  }

  return {
    title: `${product.name} | บุปผาชาติ`,
    description: product.description,
    openGraph: {
      title: `${product.name} | บุปผาชาติ`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug && item.occasionSlugs.some((occasion) => product.occasionSlugs.includes(occasion)))
    .slice(0, 3);
  const lineMessage = encodeURIComponent(`สนใจ ${product.name} (${product.id})`);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.occasion,
  };

  return (
    <PageFrame>
      <article className="mx-auto max-w-6xl px-4 py-8 md:py-14">
        <nav aria-label="เส้นทางนำทาง" className="mb-6 text-sm text-[#7f5c48]">
          <Link href="/products" className="hover:text-[#b91c1c]">สินค้า</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5ebe0]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-widest text-[#b91c1c]">{product.occasion}</p>
            <h1
              className="mt-3 text-3xl font-bold text-[#1c1008] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {product.name}
            </h1>
            <p className="mt-4 leading-relaxed text-[#4a3728]">{product.description}</p>
            <p className="mt-5 text-xl font-bold text-[#b91c1c]">{product.price}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#7f5c48]">
              รายละเอียดผลไม้และราคาอาจเปลี่ยนตามฤดูกาล กรุณาสอบถามข้อมูลล่าสุดกับร้านก่อนสั่งซื้อ
            </p>
            <a
              href={`${LINE_URL}?text=${lineMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-full bg-[#00B900] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#009900]"
            >
              สอบถามทาง LINE
            </a>
            <Link href="/faq" className="mt-4 w-fit text-sm font-semibold text-[#b91c1c] hover:underline">
              ดูวิธีสั่งซื้อและคำถามที่พบบ่อย
            </Link>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-[#eadfce] pt-12">
            <h2 className="mb-7 text-2xl font-bold text-[#1c1008]">สินค้าอื่นที่อาจสนใจ</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </PageFrame>
  );
}
