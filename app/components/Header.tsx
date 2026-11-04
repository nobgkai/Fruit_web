"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "สินค้า", href: "/products" },
  { label: "เรื่องราวของเรา", href: "/story" },
  { label: "รีวิว", href: "/reviews" },
  { label: "คำถาม", href: "/faq" },
  { label: "ติดต่อ", href: "/contact" },
];

const LINE_URL = "https://line.me/ti/p/~@buphachat";

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || solid
          ? "border-b border-[#e8d9c9] bg-white py-3 shadow-md"
          : "border-b border-white/20 bg-[#24170f]/45 py-5 shadow-sm backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" id="header-logo">
          <Image
            src="/Logo_BCP.svg"
            alt="บุปผาชาติ"
            width={48}
            height={48}
            priority
            className="h-12 w-12 shrink-0 object-contain transition-transform group-hover:scale-105"
          />
          <div className="min-w-0">
            <p
              className={`whitespace-nowrap font-bold text-sm leading-tight transition-colors sm:text-lg ${
                scrolled || solid ? "text-[#b91c1c]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              บุปผาชาติ
            </p>
            <p
              className={`whitespace-nowrap text-[10px] leading-tight transition-colors sm:text-xs ${
                scrolled || solid ? "text-[#7f1d1d]" : "text-white/80"
              }`}
            >
              Buphachat Premium Fruit
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-[#d4a853] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4a853] after:transition-all hover:after:w-full ${
                scrolled || solid
                  ? "text-[#1c1008]"
                  : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="header-line-cta"
            className="ml-2 inline-flex items-center gap-2 bg-[#00B900] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#009900] transition-colors line-btn-glow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.89c.50 0 .866.37.866.87 0 .49-.366.86-.866.86h-2.275v1.36h2.275c.5 0 .866.37.866.87s-.366.86-.866.86H16.22a.87.87 0 0 1-.866-.86V8.16c0-.48.366-.86.866-.86h3.145c.5 0 .866.38.866.87 0 .49-.366.86-.866.86h-2.279v.86h2.28zm-6.218 3.76c0 .34-.19.65-.488.79a.85.85 0 0 1-.928-.19L9.29 11.3v2.35c0 .48-.386.86-.866.86-.48 0-.866-.38-.866-.86V8.16c0-.34.19-.65.488-.8a.85.85 0 0 1 .928.2l2.441 2.94V8.16c0-.48.386-.86.866-.86.48 0 .866.38.866.86v5.49zM6.647 14.5H4.502a.87.87 0 0 1-.866-.86V8.16c0-.48.386-.86.866-.86.48 0 .866.38.866.86v4.63h1.279c.48 0 .866.38.866.87s-.386.84-.866.84zM24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
            </svg>
            ทัก LINE
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || solid ? "text-[#1c1008]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          id="mobile-menu-btn"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`lg:hidden overflow-y-auto transition-all duration-300 ${
          menuOpen ? "max-h-[calc(100dvh-5.5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="เมนูหลัก"
          className={`border-t px-4 py-4 flex flex-col gap-3 ${
            scrolled || solid
              ? "border-[#e8d9c9] bg-white"
              : "border-white/20 bg-[#24170f]/45 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-2 px-3 rounded-lg transition-colors ${
                scrolled || solid
                  ? "text-[#1c1008] hover:bg-[#fdf8f0] hover:text-[#b91c1c]"
                  : "text-white hover:bg-white/10 hover:text-[#f0c672]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-[#00B900] text-white font-semibold px-4 py-3 rounded-full"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 10.31C24 4.63 18.627 0 12 0S0 4.63 0 10.31c0 5.09 4.516 9.35 10.61 10.16.414.09.977.27 1.12.63.127.32.083.83.04 1.16l-.18 1.08c-.056.32-.262 1.27 1.11.69 1.37-.57 7.42-4.37 10.12-7.49C23.3 14.54 24 12.51 24 10.31z" />
            </svg>
            ทัก LINE ได้เลย
          </a>
        </nav>
      </div>
    </header>
  );
}
