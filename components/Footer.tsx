import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <nav aria-label="Elsewhere">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
        ))}
      </nav>
    </footer>
  );
}
