import { site, skills } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="container about">
      <figure className="polaroid-wrap">
        <div className="polaroid">
          {/* Replace with: <Image src="/images/me.jpg" alt={site.name} width={760} height={760} /> */}
          <div className="photo-placeholder mat display" role="img" aria-label="Portrait placeholder">
            {site.initials}
          </div>
        </div>
        <figcaption className="polaroid__caption">me, at my desk</figcaption>
      </figure>

      <div className="about__text">
        <h2 className="section-title display">About me</h2>
        <p className="about__lead">
          I&apos;m {site.name}, @{site.handle} on GitHub. I wrote my first line of code in {site.since} and
          have been shipping ever since.
        </p>
        <p className="about__body">
          Use this paragraph for the origin story: the languages you started with, the framework that
          clicked, and the kind of problems you keep coming back to. Two or three sentences is plenty.
        </p>
        <p className="about__body">
          Then say what you&apos;re doing now: the teams you work with, the products you&apos;re building,
          and whether you&apos;re open to new projects.
        </p>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
