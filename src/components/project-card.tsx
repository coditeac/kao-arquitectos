import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
            "media-frame relative overflow-hidden bg-[var(--mist)]",
            featured ? "aspect-[16/10]" : "aspect-[4/5]"
          )}
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} — ${project.location}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-4 right-4 inline-flex size-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-[var(--ink)] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-4" strokeWidth={2.25} />
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              {typeof index === "number" ? (
                <p className="label-micro">
                  {String(index + 1).padStart(2, "0")}
                </p>
              ) : null}
              <p className="label-micro">{project.typology}</p>
            </div>
            <h3 className="text-[1.65rem] font-semibold leading-[1.05] tracking-[-0.03em] transition-opacity duration-300 md:text-[1.9rem] group-hover:opacity-70">
              {project.title}
            </h3>
            <p className="mt-2.5 text-sm text-[var(--quiet)]">
              {project.location}
            </p>
          </div>
          <p className="shrink-0 pt-1 text-[0.68rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
            {project.year}
          </p>
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--quiet)]/90">
          {project.summary}
        </p>
      </Link>
    </article>
  );
}
