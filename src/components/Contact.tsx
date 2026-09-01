import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20"
    >
      <Reveal>
        <p className="font-mono text-sm text-amber-600 dark:text-amber-400">
          04 —
        </p>
        <h2 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something,
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            together.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
          Open to full-stack roles, consulting, and interesting problems that
          span the whole stack.{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {profile.phone}
          </span>
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${profile.email}`}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-4 text-left font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative">
              <span className="block text-xs uppercase tracking-wider opacity-70">
                Email
              </span>
              <span className="mt-1 block truncate font-semibold">
                {profile.email}
              </span>
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-zinc-200 bg-white/90 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/50"
          >
            <span className="block text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              GitHub
            </span>
            <span className="mt-1 block font-semibold">
              @dhunganasaroj3
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </a>
          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-zinc-200 bg-white/90 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/50"
          >
            <span className="block text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              GitLab
            </span>
            <span className="mt-1 block font-semibold">
              @saroj4
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-zinc-200 bg-white/90 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-amber-500/50"
          >
            <span className="block text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              LinkedIn
            </span>
            <span className="mt-1 block font-semibold">
              {profile.name}
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </a>
        </div>
      </Reveal>
      <footer className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-600 sm:flex-row dark:border-zinc-800 dark:text-zinc-400">
        <span>
          © {profile.copyrightYear} {profile.name} · {profile.location}
        </span>
        <span className="font-mono text-xs">
          built with Next.js
          <span className="text-amber-500"> · </span>
          tailwind v4
        </span>
      </footer>
    </section>
  );
}
