import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  priority = false,
  index,
  className,
  featured = false,
}: {
  project: Project;
  priority?: boolean;
  index?: number;
  className?: string;
  featured?: boolean;
}) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-[var(--mist)]",
            featured ? "aspect-[16/10]" : "aspect-[4/5]"
          )}
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} — ${project.location}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            {typeof index === "number" ? (
              <p className="label-micro mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
            ) : null}
            <h3 className="font-display text-2xl leading-none md:text-[1.85rem]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--quiet)]">
              {project.location}
            </p>
          </div>
          <p className="shrink-0 pt-1 text-[0.68rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
            {project.year}
          </p>
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--quiet)]">
          {project.summary}
        </p>
      </Link>
    </article>
  );
}
