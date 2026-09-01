import { profile } from "@/lib/content";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  const initial = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-700 dark:text-emerald-400">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
                {profile.location} · open to new opportunities
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mb-3 text-lg font-medium text-amber-600 dark:text-amber-400">
                {initial}
                <span className="mx-4 hidden h-px w-16 bg-gradient-to-r from-amber-400/70 to-transparent sm:block" />
                Hi, I&apos;m
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="mb-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
                  {profile.name}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <h2 className="mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
                {profile.role}
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <p className="mb-8 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                {profile.intro}
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="group relative overflow-hidden rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(251,146,60,0.5)] dark:bg-white dark:text-zinc-900"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative">
                    View experience{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 dark:border-zinc-700 dark:hover:border-amber-500 dark:hover:text-amber-400"
                >
                  Get in touch
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm text-zinc-600 underline-offset-4 transition-colors hover:text-amber-600 hover:underline dark:text-zinc-400"
                >
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300} className="hidden sm:block">
            <TerminalCard />
          </Reveal>
        </div>

        <Reveal delay={550} className="mt-16 sm:mt-20">
          <Marquee />
        </Reveal>
      </div>
    </section>
  );
}
