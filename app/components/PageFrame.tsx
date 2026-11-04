import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <Header solid />
      <main className="min-h-[60vh] flex-1 pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
