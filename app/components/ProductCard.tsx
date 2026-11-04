import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

const LINE_URL = "https://line.me/ti/p/~@buphachat";

const badgeColors: Record<NonNullable<Product["badge"]>, string> = {
  ขายดี: "bg-[#b91c1c] text-white",
  ใหม่: "bg-[#4d7c0f] text-white",
  พรีเมียม: "bg-[#d4a853] text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group card-hover overflow-hidden rounded-xl border border-[#eee9e2] bg-white">
      <Link href={`/products/${product.slug}`} aria-label={`ดูรายละเอียด${product.name}`}>
        <div className="relative aspect-square overflow-hidden bg-[#f5f2ec]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.badge && (
            <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold ${badgeColors[product.badge]}`}>
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-3 md:p-4">
        <p className="mb-1 text-xs text-[#7f5c48]">{product.occasion}</p>
        <h2 className="mb-1 text-sm font-semibold leading-tight text-[#1c1008]">
          {product.name}
        </h2>
        <p className="mb-3 text-sm font-bold text-[#b91c1c]">{product.price}</p>
        <a
          href={`${LINE_URL}?text=${encodeURIComponent(`สนใจ ${product.name} (${product.id})`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`สอบถามราคา ${product.name} ทาง LINE`}
          className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#00B900] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#009900]"
        >
          สอบถามราคา
        </a>
      </div>
    </article>
  );
}
