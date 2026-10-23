import { site, sponsorCount, tiers } from "@/lib/content";

const LETTERS = "ABCDEFGHJKLMNPRSTUVWXYZ";

// Placeholder avatar wall. Swap for real sponsor images when you have them.
const avatars = Array.from({ length: sponsorCount }, (_, i) => ({
  hue: (i * 47) % 360,
  initials: LETTERS[(i * 7) % LETTERS.length] + LETTERS[(i * 11 + 3) % LETTERS.length],
  large: i < 6,
}));

export default function Sponsor() {
  return (
    <section id="sponsor" className="container sponsor">
      <div className="split">
        <div className="section-intro">
          <h2 className="section-title display">Keep the code free</h2>
          <p className="section-lead">
            {sponsorCount} people and teams back my open-source work each month. Sponsorship pays for
            the hours that go into fixes, docs and new releases.
          </p>
          <a href={site.sponsorUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ink">
            Become a sponsor
          </a>
        </div>

        <ul className="tiers">
          {tiers.map((t) => (
            <li key={t.name} className="tier">
              <span className="tier__price">
                ${t.price.toLocaleString("en-US")}
                <small> a month</small>
              </span>
              <span className="tier__name">{t.name}</span>
              <span className="tier__perk">{t.perk}</span>
            </li>
          ))}
        </ul>
      </div>

      <figure className="sponsor-wall" aria-label="Sponsor avatars">
        <div className="sponsor-wall__grid">
          {avatars.map((a, i) => (
            <span
              key={i}
              className={`avatar${a.large ? " avatar--lg" : ""}`}
              style={{ background: `hsl(${a.hue} 60% 82%)` }}
              aria-hidden="true"
            >
              {a.initials}
            </span>
          ))}
        </div>
      </figure>
    </section>
  );
}
