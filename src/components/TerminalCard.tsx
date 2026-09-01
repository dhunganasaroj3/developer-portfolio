const LINES = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "saroj-dhungana — full-stack engineer · 8+ yrs" },
  { prompt: true, text: "stack --current" },
  { prompt: false, text: "TypeScript · Next.js · Node · PostgreSQL · C++" },
  { prompt: true, text: "status" },
  { prompt: false, text: "shipping production · AWS / GCP" },
];

export default function TerminalCard() {
  return (
    <div className="animate-float relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_30%_20%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(ellipse_at_80%_90%,rgba(167,139,250,0.2),transparent_60%)]" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-[13px] shadow-2xl dark:border-zinc-800">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-zinc-500">saroj@bhaktapur — zsh</span>
        </div>
        <div className="space-y-2 px-4 py-4">
          {LINES.map((l, i) =>
            l.prompt ? (
              <div key={i} className="text-zinc-300">
                <span className="text-emerald-400">➜</span>{" "}
                <span className="text-sky-400">~</span> {l.text}
              </div>
            ) : (
              <div key={i} className="pl-5 text-zinc-500">
                {l.text}
                {i === LINES.length - 1 && (
                  <span className="animate-blink ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-emerald-400" />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
