import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/content";

type Props = {
  project: Pick<Project, "hue" | "dark" | "image">;
  className?: string;
};

/**
 * A project screenshot. Uses the real image when there is one,
 * otherwise draws a small website mock tinted with the project's hue.
 */
export default function Shot({ project, className = "" }: Props) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        width={680}
        height={425}
        sizes="(min-width: 768px) 340px, 100vw"
        className={`shot-img ${className}`.trim()}
      />
    );
  }
  return (
    <span
      className={`shot${project.dark ? " shot--dark" : ""} ${className}`.trim()}
      style={{ "--h": project.hue } as CSSProperties}
    />
  );
}
