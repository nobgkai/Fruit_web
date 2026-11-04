export type Product = {
  id: string;
  slug: string;
  name: string;
  occasion: string;
  occasionSlugs: string[];
  price: string;
  badge: "ขายดี" | "ใหม่" | "พรีเมียม" | null;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "p01",
    slug: "premium-tropical-mix",
    name: "พรีเมียมทรอปิคัลมิกซ์",
    occasion: "ทุกโอกาส",
    occasionSlugs: ["birthday", "get-well", "celebrate", "festival", "corporate"],
    price: "เริ่มต้น ฿850",
    badge: "ขายดี",
    image: "/images/product-01.jpg",
    description: "กระเช้าผลไม้สำหรับส่งต่อความรู้สึกดี ๆ ในโอกาสที่คุณเลือก",
  },
  {
    id: "p02",
    slug: "golden-mango-basket",
    name: "ตะกร้ามะม่วงทองคำ",
    occasion: "วันเกิด",
    occasionSlugs: ["birthday"],
    price: "เริ่มต้น ฿1,200",
    badge: "ใหม่",
    image: "/images/product-02.jpg",
    description: "ตะกร้าผลไม้สำหรับมอบเป็นของขวัญวันเกิด",
  },
  {
    id: "p03",
    slug: "wellness-green-basket",
    name: "เวลเนสกรีนบาสเก็ต",
    occasion: "เยี่ยมไข้",
    occasionSlugs: ["get-well"],
    price: "เริ่มต้น ฿750",
    badge: null,
    image: "/images/product-03.jpg",
    description: "กระเช้าผลไม้สำหรับส่งความห่วงใยให้คนสำคัญ",
  },
  {
    id: "p04",
    slug: "celebration-grand",
    name: "เซเลเบรชันแกรนด์",
    occasion: "แสดงความยินดี",
    occasionSlugs: ["celebrate", "corporate"],
    price: "เริ่มต้น ฿2,200",
    badge: "พรีเมียม",
    image: "/images/product-04.jpg",
    description: "กระเช้าผลไม้สำหรับร่วมแสดงความยินดีในโอกาสพิเศษ",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
