"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const target = useRef({ x: -500, y: -500 });
  const glowPos = useRef({ x: -500, y: -500 });
  const dotPos = useRef({ x: -500, y: -500 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      raf.current = 0;
      const k = reduced ? 1 : 0.14;
      glowPos.current.x += (target.current.x - glowPos.current.x) * k;
      glowPos.current.y += (target.current.y - glowPos.current.y) * k;
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.4;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.4;
      if (glow.current)
        glow.current.style.transform = `translate3d(${glowPos.current.x - 100}px, ${glowPos.current.y - 100}px, 0)`;
      if (dot.current)
        dot.current.style.transform = `translate3d(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px, 0)`;
      raf.current = requestAnimationFrame(apply);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(apply);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80] hidden select-none lg:block">
      <div
        ref={glow}
        className="fixed left-0 top-0 h-50 w-50 rounded-full opacity-40 mix-blend-screen dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.35), transparent 60%)",
        }}
      />
      <div
        ref={dot}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-amber-400 mix-blend-difference"
      />
    </div>
  );
}
