export const profile = {
  name: "Saroj Dhungana",
  role: "Senior Software Engineer",
  location: "Bhaktapur, Nepal",
  intro:
    "Software Engineer with 8+ years of experience building scalable user interfaces with React, Redux, Next.js, and Node.js, complemented by 4+ years of DevSecOps experience deploying and managing infrastructure on GCP and AWS. Recent focus on Web3 — built production wallets for Sui and Solana, integrated Stellar into a DeFi SDK, and shipped consumer Web3 applications across React Native, browser extensions, and web.",
  email: "dhunganasaroj3@gmail.com",
  github: "https://github.com/dhunganasaroj3",
  githubAlt: "https://github.com/saroj0",
  gitlab: "https://gitlab.com/saroj4",
  linkedin: "https://linkedin.com/in/saroj-dhungana-5a5621b9",
  phone: "+977 984-307-4134",
  copyrightYear: "2026",
};

export type RoleProject = {
  name: string;
  description: string;
  stack: string[];
};

export type Position = {
  company: string;
  role: string;
  location: string;
  dates: string;
  highlights: string[];
  projects?: RoleProject[];
  stack: string[];
};

export const experience: Position[] = [
  {
    company: "Venture23 / iBriz",
    role: "Software Engineer",
    location: "US (Hybrid)",
    dates: "Jun 2024 – Present",
    highlights: [
      "Blockchain-focused company building Web3 products; contributed as a full-stack developer across multiple consumer and infrastructure projects.",
      "Worked on Hana Wallet across the Chrome extension, mobile app, and backend.",
      "Built complete wallets for the Sui and Solana chains end-to-end, and integrated the Stellar chain on the frontend, including contract interactions.",
      "Developed a TypeScript SDK for a cross-chain swap system and built a blockchain game on the Sui chain.",
      "Developed the frontend for Sports App, a Web3 sports prediction and trading platform (NFL, NBA, UFC, and more) with wallet integration and real-time order book functionality for US clients.",
      "Built the backend and contributed to the frontend for SkinHappy MD, a dermatology and skincare clinic platform with appointment scheduling, e-commerce, and patient management.",
      "Developed the frontend for MogulGames, an interactive online gaming destination platform.",
      "Implemented Stellar chain integration in the SODAX TypeScript SDK, a DeFi platform for cross-network asset swaps, savings, and borrowing.",
      "Extensive hands-on experience with AI tooling: Claude, Cursor, Antigravity, GitHub Copilot, Ollama, MCP servers, OpenClaw.",
    ],
    stack: [
      "React Native",
      "Chrome Extensions",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Web3",
      "TS SDKs",
      "Blockchain (Sui, Solana, EVM, Stellar, Bitcoin)",
    ],
  },
  {
    company: "Varicon",
    role: "Front-End Lead Engineer",
    location: "Melbourne, AU (Remote)",
    dates: "Aug 2021 – Aug 2024",
    highlights: [
      "Product company building construction-related solutions; developed React apps for construction budget forecasting.",
      "Led a team of front-end developers on front-end architecture design to create an optimized app.",
      "Drove the legacy JavaScript-to-TypeScript migration to a near-100% TS codebase (4,000+ typed modules), improving type safety, refactor confidence, and onboarding speed.",
      "Built data-intensive interfaces handling massive datasets — virtualized/editable complex tables, extensive multi-step forms with validation, and interactive charts/dashboards.",
      "Architected an optimized, modular front end using a Turborepo monorepo with Module Federation, enabling independently deployable feature domains and faster team-parallel delivery.",
      "Designed scalable state management with Redux + Redux-Saga (duck pattern via Reduxsauce, memoized selectors with Reselect) for predictable async flows across forecasting and tracking workflows.",
      "Operated within an EOS (Entrepreneurial Operating System) framework, translating company-level goals into quarterly front-end Rocks and tracking delivery against them via Level 10 meetings, scorecards, and the IDS process.",
    ],
    stack: [
      "React (Context API, custom hooks, class components)",
      "Turborepo with Module Federation",
      "Redux (duck pattern with sagas)",
      "Material UI v4/v5",
    ],
  },
  {
    company: "ESR Tech",
    role: "Software Engineer",
    location: "California, USA (Remote)",
    dates: "Mar 2020 – Aug 2021",
    highlights: [
      "Built React/Redux web apps across health, energy, and sports sectors as a front-end developer.",
      "Worked as a DevSecOps engineer focused on the Google Cloud Platform (GCP), and led a team of interns.",
    ],
    projects: [
      {
        name: "Otis Health",
        description:
          "Medical-records platform on a microservice architecture using Protobuf for client/server communication; deployed on GCP.",
        stack: ["React (hooks, custom hooks)", "Redux Toolkit with sagas", "Material UI", "Protobuf", "TypeScript", "GCP"],
      },
      {
        name: "Ally Know Your Load App",
        description:
          "Full-stack audit app for Ally Energy Solutions that calculates total energy load and generates optimization reports from input metrics; built the React/Redux frontend, Node.js backend modules, and deployed on GCP. Managed massive datasets, graphs, and forms across the stack.",
        stack: ["React", "Redux (sagas)", "Node.js", "Material UI", "TypeScript", "Protobuf", "GCP"],
      },
      {
        name: "Ally Audit App",
        description:
          "Audit app for Ally Energy Solutions calculating warehouse-level energy consumption and generating reports from input metrics; built the React/Redux frontend and deployed on GCP.",
        stack: ["React", "Redux (sagas)", "Material UI", "Protobuf", "TypeScript", "GCP"],
      },
      {
        name: "Global EMR",
        description:
          "EMR system improving hospital care and operations via automated appointment scheduling, doctor/nurse consultations through a Clinical Decision Support (CDS) system, and pharmacy/lab billing; deployed on GCP. Worked primarily on complex, data-intensive modules.",
        stack: ["React", "Redux (sagas)", "Bootstrap UI", "GCP"],
      },
      {
        name: "DOC Nepal",
        description:
          "Full-stack web app using a real-time video conferencing API to connect doctors with patients; deployed on GCP. Next.js app focused on SEO via SSR.",
        stack: ["Next.js (SSR)", "React (Context API, hooks)", "Node.js", "Twilio Video", "Material UI", "GCP"],
      },
      {
        name: "ESR Website",
        description:
          "Progressive web app built in Next.js and Node.js, focused on SEO/SSR; deployed via Firebase Cloud Functions.",
        stack: ["Next.js (SSR)", "Node.js", "React", "PWA", "Firebase Cloud Functions"],
      },
      {
        name: "DoubleTake",
        description:
          "Platform helping athletes create, edit, and manage video profiles, with Stripe payment integration and video upload/trim/join editing; deployed on AWS.",
        stack: ["React", "Redux (sagas)", "React-Player", "AWS Elastic Transcoder", "AWS"],
      },
    ],
    stack: ["React", "Redux", "Next.js", "Node.js", "Protobuf", "GCP", "AWS", "Firebase"],
  },
  {
    company: "BitsBeat IT Solution",
    role: "Front-End Engineer",
    location: "Pulchowk, Nepal",
    dates: "Jan 2018 – Feb 2020",
    highlights: [
      "Built decentralized apps (dApps) in React alongside web developers and blockchain engineers.",
      "Led a front-end team using React to build several web apps and their corresponding CMSs.",
      "Led training on JavaScript, React, and Redux for interns and trainees.",
    ],
    projects: [
      {
        name: "Everly Market",
        description:
          "Full-stack fintech app for companies building lasting customer relationships; set up the project boilerplate.",
        stack: ["React (hooks, functional and class-based)", "Redux (sagas)", "Node.js", "Protobuf"],
      },
      {
        name: "Plant Prefab (Customize & Explore in 3D)",
        description:
          "3D app to explore and customize home interiors; consumed API data and injected it into a WebGL 3D model.",
        stack: ["React (Context API, hooks)", "WebGL", "GraphQL"],
      },
      {
        name: "ICONBet Dice Roll Game",
        description: "Blockchain-based online betting game on the ICON platform.",
        stack: ["React", "Web3", "ICON coin as payment"],
      },
      {
        name: "Nodebeats",
        description: "Customizable CMS built on the MEAN stack; full-stack contribution.",
        stack: ["Angular 5", "Material UI", "Node.js"],
      },
      {
        name: "Xceltrip",
        description:
          "React frontend integrating a cryptocurrency-based flight booking system supporting multiple cryptocurrencies.",
        stack: ["React (class-based, pure components)", "Redux (sagas)", "Semantic UI"],
      },
      {
        name: "XcelPay v1",
        description:
          "React frontend for purchasing POS devices via cryptocurrency; integrated a socket-based payment gateway on frontend and backend.",
        stack: ["React", "Redux (sagas)"],
      },
      {
        name: "Icon Dice Roll",
        description:
          "Web3 React app built in 2 days, integrating the ICON RPC to communicate with the ICON blockchain.",
        stack: ["React", "ICON blockchain"],
      },
    ],
    stack: ["React", "Redux-Saga", "Node.js", "WebGL", "GraphQL", "Web3 (ICON)", "Angular"],
  },
  {
    company: "Reliance International Academy",
    role: "Lab Teacher",
    location: "Nepal",
    dates: "Jul 2017 – Oct 2017",
    highlights: ["Taught web fundamentals and C programming as a computer lab teacher."],
    stack: ["Web fundamentals", "C"],
  },
];

export type Project = {
  name: string;
  stack: string[];
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Hana Wallet",
    stack: ["Chrome Extension", "React Native", "Node.js", "Web3"],
    description:
      "Worked on Hana Wallet across the Chrome extension, mobile app, and backend — a consumer multi-chain crypto wallet.",
  },
  {
    name: "Sui & Solana Wallets",
    stack: ["Sui", "Solana", "TypeScript", "React"],
    description:
      "Built complete wallets for the Sui and Solana chains end-to-end, and integrated the Stellar chain on the frontend, including contract interactions.",
  },
  {
    name: "Sports App",
    stack: ["React", "TypeScript", "Web3", "Real-time"],
    description:
      "Web3 sports prediction and trading platform (NFL, NBA, UFC, and more) with wallet integration and real-time order book functionality, built for US clients.",
  },
  {
    name: "SODAX TypeScript SDK",
    stack: ["TypeScript", "Stellar", "DeFi"],
    description:
      "Implemented Stellar chain integration in the SODAX TypeScript SDK, a DeFi platform for cross-network asset swaps, savings, and borrowing.",
  },
  {
    name: "SkinHappy MD",
    stack: ["Node.js", "PostgreSQL", "React", "E-commerce"],
    description:
      "Dermatology and skincare clinic platform with appointment scheduling, e-commerce, and patient management; built the backend and contributed to the frontend.",
  },
  {
    name: "MogulGames",
    stack: ["React", "TypeScript"],
    description:
      "Developed the frontend for an interactive online gaming destination platform.",
  },
];

export const personalProjects: Project[] = [
  {
    name: "TypeShala",
    stack: ["React 19", "TypeScript", "Vite", "Zustand"],
    description:
      "A gamified typing tutor for English and Nepali, with a hand-rolled Roman-to-Devanagari transliteration engine, real-time WPM/accuracy tracking, canvas mini-games, and per-key error heatmaps. Unit-tested with Vitest.",
    link: "https://github.com/dhunganasaroj3",
  },
  {
    name: "Nepal News Bot",
    stack: ["Python", "APScheduler", "Streamlit", "SQLite"],
    description:
      "An automated news pipeline that fetches RSS feeds, ranks stories by relevance, generates summaries and TTS audio, and publishes on a schedule — with a Streamlit dashboard and a systemd service for unattended runs.",
    link: "https://github.com/dhunganasaroj3",
  },
  {
    name: "On-Device LLM Work",
    stack: ["Python", "Transformers", "PEFT/LoRA", "ROCm"],
    description:
      "LoRA fine-tuning of Gemma on Nepali instruction data on a single consumer GPU (RX 7900 XTX), and an offline Nepali legal-assistant design using on-device RAG over Nepal's statutes so answers stay grounded and citable.",
  },
  {
    name: "Pomodoro Timer & QuickNote",
    stack: ["React 19", "Vanilla JS"],
    description:
      "Two small, dependency-light apps shipped to GitHub Pages: a polished Pomodoro timer (Web Audio chimes, desktop notifications, keyboard shortcuts) and a local-first markdown notes app — built for speed and accessibility.",
    link: "https://github.com/dhunganasaroj3",
  },
];

export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux / Redux Toolkit",
      "TypeScript",
      "React Native",
      "Micro-frontends",
      "Material UI",
    ],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Microservices", "Turborepo", "GraphQL", "Protobuf", "PostgreSQL"],
  },
  {
    label: "DevOps & Security",
    items: ["GCP", "AWS", "Docker", "Jenkins", "Linux", "OWASP", "Burp Suite", "SonarQube"],
  },
  {
    label: "Web3",
    items: ["Sui", "Solana", "EVM", "Stellar", "Bitcoin", "ICON", "Wallet & SDK development"],
  },
  {
    label: "Tooling",
    items: ["Git", "Jira", "Trello", "WebStorm", "Postman", "Insomnia", "Swagger"],
  },
  {
    label: "AI",
    items: ["Claude", "Gemini", "Cursor", "Antigravity", "GitHub Copilot", "Ollama", "MCP servers", "OpenClaw"],
  },
];

export type Education = {
  school: string;
  degree: string;
  dates: string;
  details: string;
};

export const education: Education[] = [
  {
    school: "College of Information Technology and Engineering, Kathmandu",
    degree: "B.Sc. Information Technology",
    dates: "2014 – 2018",
    details:
      "Completed multiple semester projects using C, C++, PHP, Java, JavaScript, Bash, and socket programming in C.",
  },
];
