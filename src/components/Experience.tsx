import { education, experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20"
    >
      <Reveal>
        <p className="font-mono text-sm text-amber-600 dark:text-amber-400">
          01 —
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
          8+ years shipping production web apps across frontend, DevSecOps, and
          Web3.
        </p>
      </Reveal>
      <div className="relative mt-12 space-y-10">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/70 via-zinc-300 dark:via-zinc-700 to-transparent"
        />
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.dates}`} delay={i * 80}>
            <div className="relative pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center"
              >
                {i === 0 && (
                  <span className="animate-pulse-dot absolute h-full w-full rounded-full bg-emerald-500" />
                )}
                <span className="relative h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-background dark:ring-zinc-950" />
              </span>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 p-6 transition-colors hover:border-amber-400/60 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/50">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-amber-700 dark:text-amber-400">
                  {job.role} · {job.location}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-500"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                {job.projects && (
                  <div className="mt-5 space-y-4 border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                    {job.projects.map((p) => (
                      <div key={p.name}>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {p.name}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                          {p.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-400"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight">Education</h3>
          {education.map((e) => (
            <div
              key={e.school}
              className="mt-5 rounded-2xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-semibold tracking-tight">{e.school}</h4>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                  {e.dates}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-amber-700 dark:text-amber-400">
                {e.degree}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {e.details}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
