import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import FloatingSocialLinks from "./components/FloatingSocialLinks";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "บุปผาชาติ | ของขวัญผลไม้พรีเมียม ชลบุรี",
  description:
    "ร้านของขวัญผลไม้คัดพิเศษ เหมาะสำหรับทุกโอกาส วันเกิด เยี่ยมไข้ แสดงความยินดี และเทศกาล สั่งซื้อสะดวกผ่าน LINE",
  keywords: "ของขวัญผลไม้, ตะกร้าผลไม้, ผลไม้พรีเมียม, ชลบุรี, บุปผาชาติ",
  openGraph: {
    title: "บุปผาชาติ | ของขวัญผลไม้พรีเมียม",
    description: "คัดสรรผลไม้คุณภาพ จัดเป็นของขวัญสำหรับทุกโอกาส",
    locale: "th_TH",
    type: "website",
    images: ["/images/hero-bg.jpg"],
  },
  icons: {
    icon: "/Logo_BCP.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${ibmPlexSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdf8f0] text-[#1c1008]">
        {children}
        <FloatingSocialLinks />
      </body>
    </html>
  );
}
