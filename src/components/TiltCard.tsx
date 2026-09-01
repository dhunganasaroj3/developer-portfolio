"use client";

import { useCallback, useRef, type ReactNode, type MouseEvent } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const raf = useRef(0);
  const target = useRef({ px: 0.5, py: 0.5 });

  const apply = useCallback(() => {
    raf.current = 0;
    const el = ref.current;
    if (!el) return;
    const { px, py } = target.current;
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 6;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }, []);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = rect.current;
    if (!r) return;
    target.current = {
      px: (e.clientX - r.left) / r.width,
      py: (e.clientY - r.top) / r.height,
    };
    if (!raf.current) raf.current = requestAnimationFrame(apply);
  }

  function onEnter() {
    const el = ref.current;
    if (el) rect.current = el.getBoundingClientRect();
  }

  function onLeave() {
    const el = ref.current;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = 0;
    if (el) {
      el.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`group relative rounded-2xl border border-zinc-200/80 bg-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,border-color,box-shadow] duration-200 ease-out will-change-transform hover:border-amber-400/70 hover:shadow-[0_20px_50px_-20px_rgba(251,146,60,0.35)] dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/60 dark:hover:shadow-[0_20px_50px_-20px_rgba(251,191,36,0.25)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx,50%) var(--my,50%), rgba(251,191,36,0.10), transparent 45%)",
        }}
      />
      <div className="relative p-6">{children}</div>
    </div>
  );
}
