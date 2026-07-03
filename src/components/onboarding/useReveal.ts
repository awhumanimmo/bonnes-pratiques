import { useEffect } from "react";

// Adds `.is-visible` to any [data-reveal] element once it enters the viewport.
// Respects prefers-reduced-motion via CSS.
export function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!els.length) return;
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Parallax engine.
 * For every element with `data-parallax` (speed factor, default 0.2),
 * translate on Y proportionally to how far its center is from the viewport
 * center. Also updates a global `--scroll-y` CSS var for background layers.
 * Optional attributes:
 *   data-parallax="0.35"        vertical speed (negative = reverse)
 *   data-parallax-x="0.15"      horizontal drift
 *   data-parallax-rotate="4"    max rotation in degrees at edges
 *   data-parallax-scale="0.05"  scale delta at edges
 */
export function useParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    els.forEach((el) => {
      el.style.willChange = "transform";
    });

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}`,
      );
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        // -1 when far above viewport, 0 when centered, 1 when far below
        const rel = (center - vh / 2) / vh;
        const sy = parseFloat(el.dataset.parallax || "0.2");
        const sx = parseFloat(el.dataset.parallaxX || "0");
        const rot = parseFloat(el.dataset.parallaxRotate || "0");
        const scl = parseFloat(el.dataset.parallaxScale || "0");
        const ty = rel * sy * vh;
        const tx = rel * sx * vh;
        const rz = rel * rot;
        const sc = 1 + rel * scl;
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rz.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);
}