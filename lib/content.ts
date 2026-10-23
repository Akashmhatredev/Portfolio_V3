/*
 * Everything the site says lives here. Edit this file to make it yours.
 *
 * `image` is optional on projects: leave it out and a generated mock
 * screenshot (tinted with `hue`) is drawn instead. Put real screenshots
 * in /public/images and reference them as "/images/your-file.jpg".
 */

export type ProjectType = "apps" | "libraries" | "templates" | "client";

export type Project = {
  year: string;
  name: string;
  what: string;
  with: string;
  type: ProjectType;
  url: string;
  hue: number;
  dark?: boolean;
  image?: string;
};

export type Repo = {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  url: string;
};

export type Tier = {
  price: number;
  name: string;
  perk: string;
};

export const site = {
  name: "Your Name",
  initials: "YN",
  handle: "yourhandle",
  city: "Your City",
  since: 2018,
  projectCount: "40+",
  githubStars: "1.2k",
  email: "hello@example.com",
  githubUrl: "https://github.com/",
  sponsorUrl: "https://github.com/sponsors",
  description: "Developer portfolio: selected work, open source, and how to get in touch.",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "CodePen", href: "https://codepen.io/" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Open source", href: "#open-source" },
  { label: "About", href: "#about" },
  { label: "Sponsor", href: "#sponsor" },
];

export const projects: Project[] = [
  { year: "Now", name: "Northwind", what: "Team planner with shared calendars", with: "Acme Studio", type: "apps", url: "#", hue: 152 },
  { year: "Now", name: "Tally POS", what: "Checkout app for small cafés", with: "Tally", type: "apps", url: "#", hue: 205 },
  { year: "2026", name: "tinyqueue", what: "Background jobs for Node in 2 kB", with: "Solo", type: "libraries", url: "#", hue: 265, dark: true },
  { year: "2026", name: "Orbit Maps", what: "Live map of delivery fleets", with: "Fieldline", type: "client", url: "#", hue: 190, dark: true },
  { year: "2025", name: "Paperfold", what: "Offline-first notes with sync", with: "Solo", type: "apps", url: "#", hue: 18 },
  { year: "2025", name: "Launchpad UI", what: "Dashboard starter for React", with: "Solo", type: "templates", url: "#", hue: 48 },
  { year: "2025", name: "Greenleaf Co.", what: "Marketing site and CMS", with: "Greenleaf", type: "client", url: "#", hue: 110 },
  { year: "2024", name: "form-kit", what: "Accessible form primitives", with: "Solo", type: "libraries", url: "#", hue: 330 },
  { year: "2024", name: "Harbor Admin", what: "Admin template with auth and charts", with: "Solo", type: "templates", url: "#", hue: 225, dark: true },
  { year: "2023", name: "Pulse Metrics", what: "Realtime analytics widgets", with: "Pulse", type: "client", url: "#", hue: 0 },
  { year: "2022", name: "Snapshot", what: "Screenshot API playground", with: "Solo", type: "libraries", url: "#", hue: 170 },
];

export const filters: { id: ProjectType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "apps", label: "Apps" },
  { id: "libraries", label: "Libraries" },
  { id: "templates", label: "Templates" },
  { id: "client", label: "Client work" },
];

export const repos: Repo[] = [
  { name: "harbor-admin", desc: "Free admin dashboard template with auth, tables and charts", stars: 684, forks: 211, url: "https://github.com/" },
  { name: "tinyqueue", desc: "Tiny background job queue for Node.js", stars: 243, forks: 38, url: "https://github.com/" },
  { name: "form-kit", desc: "Accessible, unstyled form components", stars: 129, forks: 22, url: "https://github.com/" },
  { name: "launchpad-ui", desc: "Opinionated React starter with dark mode built in", stars: 96, forks: 17, url: "https://github.com/" },
  { name: "csv-sheets", desc: "Turn any JSON array into a spreadsheet download", stars: 58, forks: 9, url: "https://github.com/" },
];

export const skills = [
  { label: "Front end", items: "React, Vue, TypeScript, Tailwind CSS, Three.js" },
  { label: "Back end", items: "Node.js, Python, FastAPI, PostgreSQL, Redis" },
  { label: "Mobile", items: "React Native, Capacitor, Expo" },
  { label: "Also", items: "Docker, AWS, Vercel, Figma, Storybook" },
];

export const tiers: Tier[] = [
  { price: 5, name: "Coffee", perk: "A thank-you in every release note" },
  { price: 15, name: "Supporter", perk: "Your name on this page" },
  { price: 30, name: "Bronze", perk: "Name and link in the project READMEs" },
  { price: 75, name: "Silver", perk: "Your logo on this page" },
  { price: 150, name: "Gold", perk: "Logo at the top of the main README" },
  { price: 300, name: "Platinum", perk: "Logo in the docs sidebar plus a monthly call" },
];

export const sponsorCount = 48;
