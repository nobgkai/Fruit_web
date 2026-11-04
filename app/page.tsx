import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandStorySection from "./components/BrandStorySection";
import OccasionSection from "./components/OccasionSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import HighlightSection from "./components/HighlightSection";
import HowToOrderSection from "./components/HowToOrderSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Brand Story (เรื่องย่อ) */}
        <BrandStorySection />
        {/* 3. ช้อปตามโอกาส */}
        <OccasionSection />
        {/* 4. สินค้าแนะนำ */}
        <FeaturedProductsSection />
        {/* 5. จุดเด่น 3 ข้อ */}
        <HighlightSection />
        {/* 6. วิธีสั่ง 3 ขั้น */}
        <HowToOrderSection />
        {/* 7. CTA ปิดท้าย */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
