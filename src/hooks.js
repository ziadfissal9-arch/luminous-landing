import { useEffect, useRef, useState } from "react";

// Fade-up reveal on scroll using IntersectionObserver.
// Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

// Counts from 0 up to a numeric target once the element scrolls into view.
// Returns [ref, displayValue]. Keeps any prefix/suffix (%, K, +, M) intact.
export function useCountUp(raw, duration = 1600) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  // split "250K" -> number 250, suffix "K"
  const match = String(raw).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = String(target).includes(".")
    ? String(target).split(".")[1].length
    : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setValue(target);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  const display = value.toFixed(decimals) + suffix;
  return [ref, display];
}
