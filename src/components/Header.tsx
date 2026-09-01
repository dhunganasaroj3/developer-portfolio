import { profile } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-background/90 dark:border-zinc-800/80">
      <a
        href="#home"
        className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:rounded-md focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-zinc-500 dark:text-zinc-400">~/</span>
          {profile.name.toLowerCase().replace(/\s/g, "")}
          <span className="animate-blink ml-0.5 text-amber-500">_</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 sm:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
