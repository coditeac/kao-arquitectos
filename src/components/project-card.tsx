import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  priority = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mist)]">
          <Image
            src={project.coverImage}
            alt={`${project.title} — ${project.location}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--paper)] md:p-6">
            <p className="text-[0.7rem] tracking-[0.16em] uppercase opacity-80">
              {project.typology} · {project.year}
            </p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl">{project.title}</h3>
            <p className="mt-1 text-sm opacity-80">{project.location}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
