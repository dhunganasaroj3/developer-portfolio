"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const target = useRef(0);
  const pos = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apply = () => {
      raf.current = 0;
      pos.current = reduced ? target.current : pos.current + (target.current - pos.current) * 0.18;
      if (Math.abs(target.current - pos.current) < 0.001) pos.current = target.current;
      if (bar.current) bar.current.style.transform = `scaleX(${pos.current})`;
      if (pos.current !== target.current) raf.current = requestAnimationFrame(apply);
    };
    const onScroll = () => {
      const h = document.documentElement;
      target.current = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5"
    >
      <div
        ref={bar}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"
      />
    </div>
  );
}
