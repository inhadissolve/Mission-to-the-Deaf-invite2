// src/hooks/useScrollReveal.js
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (els.length === 0) return;

    els.forEach((el) => {
      const d = el.getAttribute("data-delay");
      // [수정] (el as HTMLElement) -> el
      if (d) el.style.setProperty("--delay", d);
    });

    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}