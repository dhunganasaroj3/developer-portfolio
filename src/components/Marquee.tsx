const TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "C++",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "Git",
];

function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-3 pr-10"
    >
      {TECH.map((t) => (
        <li
          key={t}
          className="flex items-center gap-3 text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div
      role="marquee"
      aria-label="Technologies"
      className="relative flex items-center overflow-hidden py-2"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max shrink-0 items-center">
        <Items />
        <Items hidden />
      </div>
    </div>
  );
}
