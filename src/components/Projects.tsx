import { personalProjects, projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="h-full">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <span
          aria-hidden
          className="flex gap-1.5"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
          >
            {s}
          </span>
        ))}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-amber-700 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-amber-400"
          >
            View source
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20"
    >
      <Reveal>
        <p className="font-mono text-sm text-amber-600 dark:text-amber-400">
          02 —
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          Selected Projects
        </h2>
        <p className="mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
          Selected work across Web3 wallets, DeFi SDKs, and consumer platforms.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h3 className="mt-16 text-2xl font-bold tracking-tight">
          Personal Projects
        </h3>
        <p className="mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
          Things I&apos;ve built from scratch — tutors, automation, and
          on-device AI.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {personalProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
