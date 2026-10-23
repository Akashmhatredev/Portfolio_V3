import { repos, site } from "@/lib/content";
import { ArrowUpRight } from "./icons";

const fmt = (n: number) => n.toLocaleString("en-US");

export default function OpenSource() {
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

  return (
    <section id="open-source" className="container split split--oss">
      <div className="section-intro">
        <h2 className="section-title display">Open source I maintain</h2>
        <p className="section-lead">
          A few libraries and starter kits I maintain. Between them they have {fmt(totalStars)} stars on GitHub.
        </p>
        <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
          Every repository on GitHub <ArrowUpRight />
        </a>
      </div>

      <ul className="repos">
        {repos.map((r) => (
          <li key={r.name}>
            <a className="repo" href={r.url} target="_blank" rel="noopener noreferrer">
              <span className="repo__text">
                <span className="repo__name">{r.name}</span>
                <span className="repo__desc">{r.desc}</span>
              </span>
              <span className="repo__stars">★ {fmt(r.stars)}</span>
              <span className="repo__forks">{fmt(r.forks)} forks</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
