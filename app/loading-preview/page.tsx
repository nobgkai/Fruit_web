import type { Metadata } from "next";
import Link from "next/link";
import FruitLoading from "../components/FruitLoading";

export const metadata: Metadata = {
  title: "ตัวอย่างหน้า Loading | บุปผาชาติ",
  description: "ตัวอย่างหน้าสถานะกำลังโหลดของเว็บไซต์บุปผาชาติ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoadingPreviewPage() {
  return (
    <main className="loading-preview">
      <FruitLoading progress={100} />
      <Link href="/" className="loading-preview__home">
        กลับหน้าแรก <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
