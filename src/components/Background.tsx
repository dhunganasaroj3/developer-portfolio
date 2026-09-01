export default function Background() {
  const noise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(251,191,36,0.10),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(251,191,36,0.12),transparent_70%)]" />
      <div
        className="animate-aurora absolute -top-48 -left-48 h-[34rem] w-[34rem] rounded-full opacity-60 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(251,191,36,0.35), transparent 62%)",
        }}
      />
      <div
        className="animate-aurora absolute top-1/3 -right-56 h-[30rem] w-[30rem] rounded-full opacity-50 dark:opacity-30"
        style={{
          animationDelay: "-5s",
          background:
            "radial-gradient(circle at 40% 40%, rgba(251,113,133,0.30), transparent 62%)",
        }}
      />
      <div
        className="animate-aurora absolute -bottom-56 left-1/4 h-[34rem] w-[34rem] rounded-full opacity-50 dark:opacity-30"
        style={{
          animationDelay: "-10s",
          background:
            "radial-gradient(circle at 45% 45%, rgba(167,139,250,0.28), transparent 62%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,135,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,135,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: noise }}
      />
    </div>
  );
}
