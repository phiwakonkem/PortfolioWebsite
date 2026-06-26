export const personal = {
  name: "Phiwakonke Mthethwa",
  title: "Full Stack Developer",
  tagline: "Building purposeful software for Africa and beyond.",
  bio: "I'm a Full-Stack Developer based in South Africa and I build things that solve real problems — from logistics platforms connecting carriers across the SADC region,to luxury booking systems for local guest houses. I care about clean architecture,thoughtful UX,and writing simple code. I'm continuously improving my skills in both Frontend and Backend Development while working on projects that challenge me to grow as a developer. I enjoy building applications that aren't only functional but also user-focused,responsive and scalable.",
  location: "Johannesburg, Gauteng, South Africa",
  email: "phiwakonkem@gmail.com",
  phone: "+27 83 596 5731",
  github: "https://github.com/phiwakonkem",
  linkedin: "https://www.linkedin.com/in/phiwakonke-mthethwa-97aa74331",
  whatsapp: "+27 83 596 5731",
  profileImage: "/images/profile.jpg",
};

export type ProjectStatus =
  | "Beta — Testing v2"
  | "Complete — v1"
  | "In Production — Incomplete"
  | "In Production — Incomplete";

export const projects = [
  {
    id: "afrihaul",
    name: "AfriHaul",
    tagline: "African logistics, reimagined.",
    description:
      "A logistics platform tackling freight fragmentation across South Africa and the SADC region. Features landmark-based addressing (for areas without formal street addresses), shipment creation, and carrier matching — built for the African context from the ground up.",
    status: "Beta — Testing v2",
    statusColor: "amber",
    stack: ["C# (.NET 10)", "MediatR (CQRS)", "EF Core", "SQLite → PostgreSQL", "Angular", "TailwindCSS", "GitHub Actions"],
    github: "https://github.com/phiwakonkem/AfriHaul.git",
    live: null,
  },
  {
    id: "devboard",
    name: "DevBoard",
    tagline: "Kanban that actually talks to a backend.",
    description:
      "A developer task board with drag-and-drop, priority filtering, and live data from a real REST API — not mocked state. Built full-stack with Go on the backend and a React/TypeScript frontend with proper server-state management.",
    status: "Complete — v1",
    statusColor: "green",
    stack: ["Go (Gin)", "React", "TypeScript", "TanStack Query", "Redux Toolkit", "TailwindCSS", "Vite"],
    github: "https://github.com/phiwakonkem/DevBoard.git",
    live: null,
  },
  {
    id: "solana-villas",
    name: "Solana Villas",
    tagline: "Luxury booking for HazyView's hidden gems.",
    description:
      "A full-featured booking platform for my mother's guest houses at Sabie River Eco Estate and De Rust Estate in HazyView. Multi-property listings, direct bookings with payment integration, admin dashboard, customer accounts, a housekeeper check-in log, and a webhook endpoint ready for Booking.com and LekkeSlaap integration.",
    status: "In Production — Incomplete",
    statusColor: "blue",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL (Neon)", "JWT + bcrypt", "Nodemailer", "Cloudinary"],
    github: "https://github.com/phiwakonkem/Solana-Villa.git",
    live: null,
  },
  {
    id: "datapulse",
    name: "DataPulse",
    tagline: "Live metrics,no refresh needed.",
    description:
      "A real-time analytics dashboard visualising live (simulated) metrics — revenue, active users, error rates — updating every few seconds. Built with a focus on smooth rendering and clean chart design.",
    status: "In Production — Incomplete",
    statusColor: "blue",
    stack: ["React", "TypeScript", "Recharts", "TanStack Query", "Vite"],
    github: "https://github.com/phiwakonkem/DataPulse.git",
    live: null,
  },
];

export const stack = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Angular", icon: "🔺" },
    { name: "TypeScript", icon: "🔷" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Vite", icon: "⚡" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Go (Gin)", icon: "🐹" },
    { name: "C# / .NET", icon: "🔵" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔗" },
    { name: "MediatR (CQRS)", icon: "📐" },
  ],
  "Databases & ORM": [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQLite", icon: "📦" },
    { name: "Prisma", icon: "🔮" },
    { name: "EF Core", icon: "🗄️" },
    { name: "Mongoose", icon: "🌿" },
  ],
  "Tools & DevOps": [
    { name: "Git / GitHub", icon: "🐙" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "Render", icon: "☁️" },
    { name: "Cloudinary", icon: "🖼️" },
  ],
};