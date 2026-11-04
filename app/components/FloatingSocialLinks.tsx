"use client";

import { useEffect, useState } from "react";

const LINE_URL = "https://line.me/ti/p/~@buphachat";
const FACEBOOK_URL = "https://facebook.com/buphachat.chon";

export default function FloatingSocialLinks() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 320);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <aside
      aria-label="ช่องทางติดต่อ"
      className="floating-social-links fixed right-3 z-40 flex flex-col gap-2 sm:right-6 sm:gap-3"
    >
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="เลื่อนกลับขึ้นด้านบน"
          title="กลับขึ้นด้านบน"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eadfce] bg-white text-[#7f1d1d] shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b91c1c]"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      )}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อร้านทาง LINE"
        className="social-link social-link--line"
      >
        <svg className="social-link__icon h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
        </svg>
        <span className="social-link__label" aria-hidden="true">ทักหาเรา</span>
      </a>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดตามร้านทาง Facebook"
        className="social-link social-link--facebook"
      >
        <svg className="social-link__icon h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span className="social-link__label" aria-hidden="true">ติดตามเรา</span>
      </a>
    </aside>
  );
}
