// =========================================================
// ALL SITE CONTENT LIVES HERE.
// Edit text in this file; the components turn it into HTML.
// Search for "TODO" to find placeholders.
// =========================================================

export const profile = {
  name: "Changye Jin",
  email: "jinchy05@gmail.com",
  github: "https://github.com/Jin-chy",
  linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn profile URL
  resume: "/resume.pdf", // file lives in public/resume.pdf
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const facts = [
  {
    title: "Education",
    lines: [
      "University at Buffalo, SUNY",
      "B.S. IT & Management (4+1 MS MIS)",
      "Cybersecurity Minor · Aug 2023 – May 2027",
    ],
  },
  {
    title: "Coursework",
    lines: [
      "Database Management Systems, Big Data Technologies, Network & Cloud Infrastructure, Systems Security, Statistical Decisions in Management",
    ],
  },
  { title: "Certifications", lines: ["IBM Data Analyst (Coursera)", "Intermediate SQL (DataCamp)"] },
  { title: "Awards", lines: ["Dean's List × 4 semesters", "UB Hackathon, 3rd place"] },
];

export const experience = [
  {
    role: "Project Client Intern",
    company: "University at Buffalo",
    dates: "Aug 2026 – Present",
    points: [
      "Helped build a nonprofit's CRM from scratch: 10 modules, 30+ custom fields, cutting administrative time by 30%.",
      "Wrote data-entry and data-transfer guidelines, and coordinated a HIPAA Business Associate Agreement.",
    ],
  },
  {
    role: "Data Management Intern",
    company: "Sevenson Environmental",
    dates: "May 2026 – Aug 2026",
    points: [
      "Built an automated Power BI dashboard on dredging project status, helping cut startup time by 10%.",
      "Standardized and migrated 300+ project records from 50+ project managers into a central SharePoint database.",
      "Built a PTO system with automatic notifications, cutting coordination emails by 20%.",
    ],
  },
  {
    role: "App Development & Data Analyst Intern",
    company: "Cloud and Field Inc.",
    dates: "Jan 2026 – May 2026",
    points: [
      "Analyzed U.S. farm density, activity, and injury data to identify target users and regions.",
      "Designed the UI/UX of a mobile management app with React Native and SQLite.",
    ],
  },
  {
    role: "Manager",
    company: "OG Dumpling House",
    dates: "Jul 2024 – Present",
    points: [
      "Analyzed monthly inventory turnover and optimized restocking, reducing spending by 20%.",
      "Led social media advertising, increasing customer traffic by 20%, and supervised a 10-person team.",
    ],
  },
];

// Real numbers from the resume. Add an object to add a bar to the chart.
export const impact = [
  { label: "Admin time saved", source: "Nonprofit CRM · UB", value: 30 },
  { label: "Inventory spending cut", source: "OG Dumpling House", value: 20 },
  { label: "Customer traffic increase", source: "Social media ads", value: 20 },
  { label: "Fewer coordination emails", source: "PTO system · Sevenson", value: 20 },
  { label: "Research time cut", source: "Personal AI agent", value: 20 },
  { label: "Faster project startup", source: "Power BI dashboard · Sevenson", value: 10 },
];

export const skills = [
  {
    group: "Data & Analysis",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "MySQL", "Excel", "Access", "Power BI", "Web Scraping"],
  },
  {
    group: "Development",
    items: ["Java", "HTML", "CSS", "JavaScript", "React", "React Native", "SQLite", "Next.js", "Markdown", "Git & GitHub"],
  },
  {
    group: "IT & Security",
    items: ["CRM Configuration", "SharePoint", "HIPAA / BAA", "Systems Security", "Cloud & Networking", "Local LLMs (Ollama)"],
  },
  {
    group: "Professional",
    items: ["Team Leadership", "Stakeholder Communication", "Customer Service", "Time Management"],
  },
];

// status: "done" | "progress" | "planned"
// A project can have a `caseStudy` (question → data → method → outcome) OR a `description`.
export const projects = [
  {
    title: "Spotify Data Analysis",
    status: "done",
    caseStudy: [
      { label: "Question", text: "Which audio features relate to a track's popularity across genres?" },
      { label: "Data", text: "100,000+ tracks across 100+ genres." },
      { label: "Method", text: "Cleaned data in Pandas (missing values, duplicates, types), then ran correlation analysis with heatmaps and scatter plots." },
      { label: "Outcome", text: "Mapped how audio features relate to popularity and listener mood across genres." }, // TODO: add your key finding
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    link: null, // TODO: add { href: "https://github.com/...", label: "View notebook →" }
    linkPlaceholder: "Notebook link coming soon",
  },
  {
    title: "Personal AI Agent (OpenClaw)",
    status: "done",
    description:
      "A multi-agent AI system running a local Qwen3-8B model on a Mac mini. It's connected to Gmail and Google Calendar to organize email and plan my day, and tracks portfolio research, which cut research time by 20%. It includes a custom dashboard for monitoring the agents.",
    tags: ["OpenClaw", "Ollama", "Next.js", "Tailscale", "JSON", "Automation"],
  },
  {
    title: "This Portfolio Website",
    status: "progress",
    description:
      "This site, built with React and Vite. It has reusable components, content kept in a single data file, a light/dark theme, and a chart drawn without libraries. It's hosted on Vercel and redeploys on every Git push.",
    tags: ["React", "Vite", "JavaScript", "CSS", "Git", "Vercel"],
    link: { href: "https://github.com/Jin-chy/jin-chy-website", label: "View source →" },
  },
  {
    // TODO: replace with a real future project
    title: "Next Project (coming soon)",
    status: "planned",
    description:
      "A new data project is being planned. Check back soon for the problem it tackles, the data behind it, and what it finds.",
    tags: ["SQL", "Power BI"],
  },
];
