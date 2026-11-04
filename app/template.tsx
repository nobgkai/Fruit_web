import type { ReactNode } from "react";
import ScrollReveal from "./components/ScrollReveal";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="page-transition">
      <ScrollReveal>{children}</ScrollReveal>
    </div>
  );
}
