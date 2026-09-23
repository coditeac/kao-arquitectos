import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Proyectos de arquitectura",
  description:
    "Portafolio de KAO Arquitectos: residencias, remodelaciones e interiores en Oaxaca.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <div className="pt-28 md:pt-32">
      <header className="mx-auto max-w-[90rem] px-5 pb-14 md:px-10 md:pb-20">
        <p className="label-micro">Proyectos</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
          Obra seleccionada
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          Casos de estudio en Oaxaca y alrededores. Cada proyecto prioriza sitio,
          luz y una materialidad que envejece bien.
        </p>
      </header>

      {projects.length === 0 ? (
        <div
          className="mx-auto max-w-[90rem] px-5 py-24 text-center md:px-10"
          role="status"
        >
          <p className="font-display text-3xl">Pronto publicaremos obra nueva</p>
          <p className="mt-3 text-[var(--quiet)]">
            Mientras tanto, escríbenos para conocer proyectos en curso bajo NDA.
          </p>
        </div>
      ) : (
        <section className="mx-auto grid max-w-[90rem] gap-x-8 gap-y-16 px-5 pb-28 md:grid-cols-2 md:px-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i < 2}
              index={i}
              className={i % 2 === 1 ? "md:mt-16" : undefined}
            />
          ))}
        </section>
      )}
    </div>
  );
}
