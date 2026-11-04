"use client";

import { useEffect, type ReactNode } from "react";

const revealSelector = [
  "main > section",
  "main > article",
  "main > div:not(.fruit-loading)",
  "main .card-hover",
  "main details",
  "footer",
].join(", ");

export default function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const siblingIndex = Array.from(element.parentElement?.children ?? [])
              .filter((sibling) => sibling.matches(revealSelector))
              .indexOf(element);
            const animation = element.animate(
              [
                { opacity: 0, transform: "translate3d(0, 24px, 0) scale(0.99)" },
                { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
              ],
              {
                duration: 650,
                delay: Math.min(siblingIndex, 4) * 70,
                easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
                fill: "both",
              },
            );
            animation.onfinish = () => animation.cancel();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return children;
}
