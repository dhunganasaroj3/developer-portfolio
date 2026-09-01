import { skillCategories } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  const [featured, ...rest] = skillCategories;
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20"
    >
      <Reveal>
        <p className="font-mono text-sm text-amber-600 dark:text-amber-400">
          03 —
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
          The full toolkit I reach for — from interfaces to infra.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal className="sm:col-span-2">
          <div className="relative h-full overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-50 to-white p-6 dark:from-amber-500/[0.07] dark:to-zinc-900/80 dark:border-amber-500/30">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl"
            />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {featured.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {featured.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-amber-200/70 bg-white/70 px-3 py-1.5 text-sm font-medium shadow-sm dark:border-amber-500/25 dark:bg-zinc-900/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        {rest.map((cat, i) => (
          <Reveal key={cat.label} delay={(i + 1) * 60}>
            <div className="h-full rounded-2xl border border-zinc-200/80 bg-white/90 p-6 transition-colors hover:border-amber-400/50 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {cat.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
