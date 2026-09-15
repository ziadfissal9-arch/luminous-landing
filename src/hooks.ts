import { useEffect, useRef, useState } from "react";

// Fade-up reveal on scroll using IntersectionObserver.
// Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Counts from 0 up to a numeric target once the element scrolls into view.
// Keeps any prefix/suffix (%, K, +, M) intact.
export function useCountUp(raw: string, duration = 1600) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);

  // split "250K" -> number 250, suffix "K"
  const match = raw.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = String(target).includes(".")
    ? String(target).split(".")[1].length
    : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
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
  return [ref, display] as const;
}

// Password strength: 0-4 based on length + character variety.
export function scorePassword(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}
