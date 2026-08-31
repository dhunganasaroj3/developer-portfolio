import ThemeToggle from "./theme";

const links = {
  github: "https://github.com/dhunganasaroj3",
  linkedin: "https://www.linkedin.com/in/saroj-dhungana-5a5621b9/",
  gitlab: "https://gitlab.com/saroj4",
  email: "dhunganasaroj3@gmail.com",
};

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux / Redux Toolkit", "React Native", "Micro-frontends", "Material UI"] },
  { group: "Backend & Data", items: ["Node.js", "Microservices", "Turborepo", "GraphQL", "Protobuf", "PostgreSQL"] },
  { group: "DevOps & Security", items: ["GCP", "AWS", "Docker", "Jenkins", "Linux", "OWASP", "Burp Suite", "SonarQube"] },
  { group: "Web3", items: ["Sui", "Solana", "EVM", "Stellar", "Bitcoin", "ICON", "Wallet & SDK dev"] },
  { group: "AI Tooling", items: ["Claude", "Gemini", "Cursor", "Antigravity", "GitHub Copilot", "Ollama", "MCP servers"] },
];

const jobs = [
  {
    company: "Venture23 / iBriz",
    role: "Software Engineer",
    dates: "Jun 2024 - Present",
    where: "US / Hybrid",
    bullets: [
      "Full-stack contributor across consumer Web3 products at a blockchain-focused company.",
      <>Shipped <b>Hana Wallet</b> end-to-end: Chrome extension, React Native app, and web.</>,
      <>Built complete wallets for <b>Sui</b> and <b>Solana</b> end-to-end; integrated <b>Stellar</b> including contract interactions.</>,
      <>Developed the frontend of <b>Sports App</b>, a Web3 sports prediction and trading platform with wallet integration and a real-time order book.</>,
      "Cross-chain swap TypeScript SDK, Sui blockchain game, and the Stellar integration in the SODAX DeFi SDK.",
    ],
    stack: "React Native · Chrome extensions · React · TypeScript · Node.js · Web3 (Sui, Solana, EVM, Stellar)",
  },
  {
    company: "Varicon",
    role: "Front-End Lead Engineer",
    dates: "Aug 2021 - Aug 2024",
    where: "Melbourne, AU / Remote",
    bullets: [
      "Led the frontend team building React apps for construction budget-forecasting software.",
      "Architected a Turborepo monorepo with Module Federation - independently deployable feature domains, faster parallel team delivery.",
      "Drove the JS-to-TS migration to a near-100% TypeScript codebase (4,000+ typed modules).",
      "Data-intensive UIs: virtualized/editable complex tables, multi-step forms with validation, interactive charts and dashboards.",
      "Scalable state with Redux + Redux-Saga (Reduxsauce duck pattern, Reselect memoized selectors) for forecasting and tracking flows.",
    ],
    stack: "React · Turborepo + Module Federation · Redux + Sagas · Material UI v4/v5",
  },
  {
    company: "ESR Tech",
    role: "Software Engineer / DevSecOps",
    dates: "Mar 2020 - Aug 2021",
    where: "California, USA / Remote",
    bullets: [
      "Built React/Redux web apps across health, energy, and sports; also a DevSecOps role focused on GCP.",
      "Led a team of interns; owned deployments on GCP.",
      <>Otis Health - medical-records platform on microservices with Protobuf client/server, deployed on GCP.</>,
      <>Ally Know Your Load - full-stack energy audit app (React/Redux + Node.js), managing large datasets and reports on GCP.</>,
      <>DOC Nepal - telemedicine app with real-time video (Next.js SSR for SEO, Twilio video).</>,
      "Global EMR - automated scheduling, Clinical Decision Support, and billing; GCP.",
      "DoubleTake - athlete video-profile platform with Stripe, React-Player, AWS Elastic Transcoder.",
    ],
    stack: "React · Next.js SSR · Node.js · Redux + Sagas · GCP · AWS · Firebase",
  },
  {
    company: "BitsBeat IT Solution",
    role: "Front-End Engineer / Team Lead",
    dates: "Jan 2018 - Feb 2020",
    where: "Pulchowk, Nepal",
    bullets: [
      "Led a frontend team building React web apps and their CMSs; trained interns in JS, React, Redux.",
      "Built dApps in React alongside blockchain engineers.",
      "Plant Prefab - 3D interior explorer/customizer; injected API data into a WebGL model.",
      "Xceltrip / XcelPay - crypto flight-booking frontend and POS sales with a socket-based payment gateway.",
      "ICONBet Dice Roll - Web3 betting game on ICON; separately built an ICON RPC React app in 2 days.",
    ],
    stack: "React · WebGL · GraphQL · Web3 (ICON) · Redux + Sagas",
  },
  {
    company: "Reliance International Academy",
    role: "Lab Teacher",
    dates: "Jul 2017 - Oct 2017",
    where: "Nepal",
    bullets: ["Taught web fundamentals and C programming as a computer lab teacher."],
    stack: "",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="inner">
          <span className="brand"><b>saroj</b>.dev</span>
          <ThemeToggle />
        </div>
      </header>

      <main className="container-wide">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="content">
            <div className="kicker">Senior Software Engineer</div>
            <h1>Saroj Dhungana</h1>
            <p className="role">
              8+ years building <b>full-stack and Web3 products</b> — React, Node,
              and GCP/AWS — with recent work shipping production wallets for
              Sui &amp; Solana.
            </p>
            <div className="links">
              <a href={links.github}>GitHub</a>
              <a href={links.linkedin}>LinkedIn</a>
              <a href={links.gitlab}>GitLab</a>
              <a href={`mailto:${links.email}`}>Email</a>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="rail-label">About</div>
          <div className="content">
            <h2>In one paragraph</h2>
            <p>
              I build interfaces that hold up under real workloads: React apps with
              Redux-based state, Turborepo monorepos with Module Federation, and
              data-intensive tables, charts, and forms running against
              microservices on GCP and AWS.
            </p>
            <p>
              For the last two years I've been shipping consumer Web3 — production
              wallets on Sui and Solana, contract integrations on Stellar, Chrome
              extensions, and React Native apps — across extension, mobile, and web
              surfaces.
            </p>
            <div className="stats">
              <div className="stat"><b>8+</b><span>years of engineering</span></div>
              <div className="stat"><b>4+</b><span>years DevSecOps (GCP/AWS)</span></div>
              <div className="stat"><b>4,000+</b><span>modules migrated to TS</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="rail-label">Skills</div>
          <div className="content">
            <h2>What I work with</h2>
            {skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <h3>{g.group}</h3>
                <div className="chips">
                  {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience">
          <div className="rail-label">Experience</div>
          <div className="content">
            <h2>Where I've worked</h2>
            {jobs.map((j) => (
              <div className="job" key={j.company}>
                <div className="head">
                  <div className="company">{j.company} <span>— {j.role}</span></div>
                  <div className="meta">{j.dates} · {j.where}</div>
                </div>
                <ul>
                  {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                {j.stack && <div className="stack">STACK · {j.stack}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <div className="rail-label">Contact</div>
          <div className="content">
            <h2>Get in touch</h2>
            <div className="row"><span className="k">email</span><a className="v" href={`mailto:${links.email}`}>{links.email}</a></div>
            <div className="row"><span className="k">github</span><a className="v" href={links.github}>github.com/dhunganasaroj3</a></div>
            <div className="row"><span className="k">linkedin</span><a className="v" href={links.linkedin}>in/saroj-dhungana-5a5621b9</a></div>
            <div className="row"><span className="k">gitlab</span><a className="v" href={links.gitlab}>gitlab.com/saroj4</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="inner">
          <span>Saroj Dhungana · Bhaktapur, Nepal</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}
