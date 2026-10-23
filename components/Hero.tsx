import { projects, site } from "@/lib/content";
import Shot from "./Shot";
import Sticker from "./Sticker";

const byName = (name: string) => projects.find((p) => p.name === name) ?? projects[0];

// Project cards pinned to the mat. `size` maps to a width class in globals.css.
const cards = [
  { project: "Northwind", size: "lg", wide: { x: "56.7%", y: "9.2%", r: "4deg" }, narrow: { x: "7%", y: "54.4%", r: "-4deg" } },
  { project: "tinyqueue", size: "sm", wideOnly: true, wide: { x: "79.6%", y: "15.5%", r: "-6deg" } },
  { project: "Paperfold", size: "md", wide: { x: "54.6%", y: "53.7%", r: "-3deg" }, narrow: { x: "4.9%", y: "80.2%", r: "-7deg" } },
  { project: "Tally POS", size: "mdl", wide: { x: "76%", y: "51%", r: "5deg" }, narrow: { x: "40.5%", y: "69.3%", r: "5deg" } },
  { project: "Orbit Maps", size: "xs", wideOnly: true, wide: { x: "66.7%", y: "74.5%", r: "-8deg" } },
];

export default function Hero() {
  return (
    <section id="top" className="hero-wrap" aria-labelledby="hero-title">
      <div className="mat hero">
        <div className="ruler" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => <span key={i}>{i}</span>)}
        </div>

        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title display">
            {site.name} ships products, <span className="text-sun">and sweats every pixel.</span>
          </h1>
          <p className="hero__lead">
            Developer based in {site.city}. Swap this line for a short intro: what you build,
            who you build it for, and a couple of things people might know you from.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--cream">See my work</a>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              <span className="only-mobile">GitHub</span>
              <span className="only-desktop">Find me on GitHub</span>
            </a>
          </div>
        </div>

        <p className="hand-note" aria-hidden="true">
          <span className="note-short">drag me</span>
          <span className="note-long">move these around!</span>
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 8c18 22 42 26 66 18" />
            <path d="M58 16l12 10-14 6" />
          </svg>
        </p>

        {cards.map((c) => {
          const project = byName(c.project);
          return (
            <Sticker
              key={c.project}
              href="#work"
              label={`${project.name} (jump to work)`}
              wide={c.wide}
              narrow={c.narrow}
              className={`card-sticker card-sticker--${c.size}${c.wideOnly ? " wide-only" : ""}`}
            >
              <Shot project={project} />
              <span className="card-sticker__label">{project.name}</span>
            </Sticker>
          );
        })}

        <Sticker
          className="badge badge--sun display"
          wide={{ x: "87%", y: "38.4%", r: "-10deg" }}
          narrow={{ x: "70.8%", y: "52.6%", r: "-10deg" }}
        >
          <span className="badge__num">{site.projectCount}</span>
          <span className="badge__unit">projects</span>
        </Sticker>
        <Sticker className="badge badge--sky display wide-flex" wide={{ x: "89.5%", y: "4.7%", r: "12deg" }}>
          <span>{site.city.split(" ").map((w, i) => <span key={i}>{i > 0 && <br />}{w}</span>)}</span>
        </Sticker>
        <Sticker
          className="tag tag--white display"
          wide={{ x: "33.8%", y: "87.9%", r: "-4deg" }}
          narrow={{ x: "42%", y: "92%", r: "-3deg" }}
        >
          ★ {site.githubStars} on GitHub
        </Sticker>
        <Sticker className="tag tag--coral display wide-only" wide={{ x: "84.5%", y: "86%", r: "6deg" }}>
          Since {site.since}
        </Sticker>
      </div>
    </section>
  );
}
