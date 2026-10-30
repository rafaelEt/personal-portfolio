export const projects = [
  {
    slug: "duelo",
    title: "Duelo",
    type: "REAL-TIME PLATFORM",
    description: "Real-time multiplayer chess platform with integrated video chat.",
    image: "/screenshots/duelo.png",
    problem:
      "Chess players who wanted to play a friend and talk at the same time had to juggle two tools — a board in one tab, a call in another — with nothing keeping the two in sync.",
    contributions: [
      "Built synchronized multiplayer chess gameplay",
      "Integrated peer-to-peer WebRTC video calls",
      "Engineered low-latency room and match handling"
    ],
    results: [
      { value: "Real-time", label: "Move sync across every connected player" },
      { value: "P2P", label: "Video chat inside the board — no second app" },
      { value: "Low latency", label: "Room and match state handled server-side" }
    ],
    metrics: "Live Multiplayer Gameplay",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://duelo.rafaeltadesse.dev",
    status: "Live",
    span: "md:col-span-1"
  },
  {
    slug: "relay",
    title: "Rafael's Relay",
    type: "COMMUNICATION PLATFORM",
    description: "Personal branded meeting platform for video calls and networking.",
    image: "/screenshots/relay.jpg",
    problem:
      "Founders and freelancers booking calls with strangers had no single space that felt like theirs — just a link from one tool, an invite from another, and a chat thread somewhere else.",
    contributions: [
      "Built real-time video/audio meeting system",
      "Implemented screen sharing and live chat",
      "Designed branded meeting workflow with timer"
    ],
    results: [
      { value: "1 Day", label: "From empty repo to deployed product" },
      { value: "Native", label: "Video, audio, screen share and chat in one room" },
      { value: "Branded", label: "Meeting flow with a live timer, owned end to end" }
    ],
    metrics: "Built & Deployed in 1 Day",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://meet.rafaeltadesse.dev",
    status: "Live",
    span: "md:col-span-1"
  },
  {
  slug: "wealth-circles",
  title: "Wealth Circles",
  type: "FINTECH PLATFORM",
  description: "Investment community platform that helps people build private circles, track watchlists, and work toward shared financial goals.",
  image: "/screenshots/wc.png",
  problem:
    "Investing can feel isolating. People need a private space to connect with trusted peers, follow investments, and stay accountable to their financial goals.",
  contributions: [
    "Built the full-stack MVP as a technical cofounder",
    "Developed private investment circles, watchlists, and financial goals",
    "Delivered a production-ready platform in 15 days ahead of the client's YC application"
  ],
  results: [
    { value: "15 Days", label: "MVP built and delivered" },
    { value: "Production-Ready", label: "Platform prepared for launch" },
    { value: "Lean", label: "Production costs kept to the domain expense" }
  ],
  metrics: "Production-Ready MVP in 15 Days",
  tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
  link: "https://wealth-circles.com",
  status: "Live",
  span: "md:col-span-2"
},
{
  slug: "shir-shir",
  title: "Shir Shir",
  type: "BUSINESS TECHNOLOGY",
  description: "Building and maintaining digital platforms and backend systems supporting services across a multi-business organization.",
  image: "/screenshots/shir.png",
  problem:
    "Multiple business services require reliable backend systems, integrated APIs, and maintainable infrastructure to support daily operations and growth.",
  contributions: [
    "Built and maintained backend APIs and core business platforms",
    "Developed and deployed a microservices architecture",
    "Worked across delivery, coffee services, portfolio management, referrals, and payments"
  ],
  results: [
    { value: "5+ Systems", label: "Business platforms and services supported" },
    { value: "35%", label: "Improvement in system reliability" },
    { value: "15%", label: "Improvement in deployment efficiency" }
  ],
  metrics: "Backend Systems & Business Platforms",
  tech: ["Node.js", "TypeScript", "React", "PostgreSQL", "Docker"],
  link: "",
  status: "Built",
  span: "md:col-span-2"
},
  {
    slug: "lumi",
    title: "Lumi",
    type: "TECH COMPANY",
    description: "Technology company focused on building digital products, SaaS tools, and scalable infrastructure.",
    image: "/screenshots/lumi.jpg",
    problem:
      "Every product built separately means rebuilding auth, deployment, branding and infrastructure from scratch — duplicated cost with none of the compounding.",
    contributions: [
      "Founded and leading product direction",
      "Built internal platforms and scalable systems",
      "Managing branding, deployment, and operations"
    ],
    results: [
      { value: "Ecosystem", label: "Multiple products shipping on shared infrastructure" },
      { value: "Founded", label: "Product direction, branding and operations owned end to end" },
      { value: "Scalable", label: "Internal platforms built once, reused across the stack" }
    ],
    metrics: "Multiple Products Under Ecosystem",
    tech: ["React", "Node.js", "Docker", "Supabase"],
    link: "https://lumi.et",
    status: "Live",
    span: "md:col-span-2"
  },
  {
    slug: "orcha",
    title: "Orcha",
    type: "SAAS / PRODUCT",
    description: "Meeting engine focused on goal-attainment. Built to solve the 'record quality vs goal hits' trade-off.",
    image: "/screenshots/orcha.jpg",
    problem:
      "Teams running meetings walked out with transcripts nobody reads and no honest answer to the only question that mattered: did we hit the goals?",
    contributions: [
      "Engineered real-time goal tracking via WebRTC",
      "Architected automated outcome extraction",
      "Designed 'goal-first' UX for meeting focus"
    ],
    results: [
      { value: "300+", label: "People on the waitlist before launch" },
      { value: "Goal-first", label: "UX that tracks outcomes instead of word count" },
      { value: "Automated", label: "Outcome extraction from every session" }
    ],
    metrics: "300+ Waiting Users",
    tech: ["React", "WebRTC", "Supabase"],
    link: "https://orcha.mrlabs.site",
    status: "Launching Soon",
    span: "md:col-span-1"
  },
  {
    slug: "linklok",
    title: "Linklok",
    type: "SAAS / PRODUCT",
    description: "Transforming standard links into dynamic growth and tracking tools.",
    image: "/screenshots/lok.jpg",
    problem:
      "Anyone sharing links for a living got a click count and nothing else — no idea where clicks came from, what converted, or whether the traffic was even real.",
    contributions: [
      "Built custom URL shortening engine",
      "Implemented real-time analytics with Redis",
      "Scaled Nginx config for high-traffic redirects"
    ],
    results: [
      { value: "1k+", label: "Users on the platform" },
      { value: "Real-time", label: "Analytics streamed through Redis" },
      { value: "High traffic", label: "Nginx scaled for redirect-heavy load" }
    ],
    metrics: "1k+ Users",
    tech: ["Node.JS", "Redis", "Nginx"],
    link: "https://youtu.be/pU6r2ZsFVfg",
    status: "Down",
    span: "md:col-span-1"
  },
  {
    slug: "werefa",
    title: "Werefa",
    type: "INFRASTRUCTURE",
    description: "Queue management software for government services.",
    image: "/screenshots/werefa.png",
    problem:
      "Citizens at government offices waited for hours with no idea where they stood, while staff ran the queue on paper and memory.",
    contributions: [
      "Digitized manual gov queue systems",
      "Built high-availability MongoDB schema",
      "Deployed via Docker for local server stability"
    ],
    results: [
      { value: "99.9%", label: "Uptime on the deployed system" },
      { value: "Digitized", label: "Paper queues replaced end to end" },
      { value: "Docker", label: "Deployed on local servers for stability" }
    ],
    metrics: "99.9% Uptime",
    tech: ["Node.js", "Docker", "MongoDB"],
    link: "https://www.linkedin.com/posts/rafael-tadesse-96274330b_telebirr-ethiopia-entrepreneurship-activity-7394026509990166528-YmC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE70IZoB5m26yvj9MyYZBiCtU5PiMSHOy4A",
    status: "Live",
    span: "md:col-span-2"
  },
  {
    slug: "interestly",
    title: "Interestly",
    type: "SAAS / SOCIAL",
    description: "Random video chat for professionals with shared interests.",
    image: "/screenshots/inter.jpg",
    problem:
      "Professionals trying to network were matched by job title instead of what they actually cared about — and cold outreach almost never turned into a real conversation.",
    contributions: [
      "Implemented interest-matching algorithm",
      "Optimized Socket.IO for low-latency pairing",
      "Integrated secure WebRTC peer connections"
    ],
    results: [
      { value: "3k+", label: "Users matched on the platform" },
      { value: "Interest-matched", label: "Pairing algorithm built from scratch" },
      { value: "Low latency", label: "Socket.IO pairing with secure WebRTC calls" }
    ],
    metrics: "3k+ Users",
    tech: ["React", "WebRTC", "Socket.IO", "Node.JS"],
    link: "https://youtu.be/PNBPV5HULHY?list=PL2x_Kjr88gJOBpevuJif0PGCjxYyrVMAn",
    status: "Down",
    span: "md:col-span-3"
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
