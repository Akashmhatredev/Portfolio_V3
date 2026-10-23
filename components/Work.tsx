"use client";

import { useMemo, useRef, useState } from "react";
import { filters, projects, type ProjectType } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import Shot from "./Shot";

type FilterId = ProjectType | "all";

export default function Work() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [openName, setOpenName] = useState<string | null>(projects[0]?.name ?? null);
  const [active, setActive] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);

  const workRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const visible = useMemo(
    () =>
      projects
        .map((project, index) => ({ project, index }))
        .filter(({ project }) => filter === "all" || project.type === filter)
        // Show the year only on the first row of each year.
        .map((row, i, rows) => ({ ...row, yearLabel: i > 0 && rows[i - 1].project.year === row.project.year ? "" : row.project.year })),
    [filter],
  );

  const choose = (id: FilterId) => {
    setFilter(id);
    setOpenName(projects.find((p) => id === "all" || p.type === id)?.name ?? null);
  };

  // Floating preview follows the cursor. Written straight to the DOM to skip re-renders.
  const onMouseMove = (e: React.MouseEvent) => {
    const work = workRef.current;
    const preview = previewRef.current;
    if (!work || !preview) return;
    const box = work.getBoundingClientRect();
    const pw = preview.offsetWidth;
    const ph = preview.offsetHeight;
    // Sit to the right of the cursor, or flip left near the edge.
    let x = e.clientX - box.left + 28;
    if (x + pw > box.width) x = e.clientX - box.left - pw - 28;
    const y = e.clientY - box.top - ph / 2;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      preview.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  return (
    <section id="work" className="container split split--work">
      <div className="section-intro">
        <h2 className="section-title display">Selected work</h2>
        <p className="section-lead">
          A running list of products, side projects and client builds. Latest at the top.{" "}
          <span className="only-md-up">Hover a row to preview it.</span>
          <span className="only-md-down">Tap a row to preview it.</span>
        </p>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f.id} type="button" className="chip" aria-pressed={filter === f.id} onClick={() => choose(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work" ref={workRef}>
        <div className="work__head work__cols" aria-hidden="true">
          <span>Year</span><span>Project</span><span>What it is</span><span>With</span><span />
        </div>

        <ul
          className={`work__list${hovering ? " is-hovering" : ""}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => { setHovering(false); setActive(null); }}
          onMouseMove={onMouseMove}
        >
          {visible.map(({ project: p, index, yearLabel }) => {
            const open = openName === p.name;
            return (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work__row work__cols${active === index ? " is-active" : ""}`}
                  onMouseEnter={() => setActive(index)}
                >
                  <span className="year">{yearLabel}</span>
                  <span className="name">{p.name}</span>
                  <span className="truncate">{p.what}</span>
                  <span className="truncate">{p.with}</span>
                  <ArrowUpRight />
                </a>

                <button type="button" className="work__toggle" aria-expanded={open} onClick={() => setOpenName(open ? null : p.name)}>
                  <span className="year">{yearLabel}</span>
                  <span className="name">{p.name}</span>
                  <span className="what">{p.what}</span>
                </button>
                {open && (
                  <div className="work__detail">
                    <Shot project={p} />
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      Open {p.name} <ArrowUpRight />
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div ref={previewRef} className={`work__preview${hovering ? " is-visible" : ""}`} aria-hidden="true">
          <div className="work__preview-frame">
            {projects.map((p, i) => (
              <Shot key={p.name} project={p} className={active === i ? "is-shown" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
