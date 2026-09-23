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
    <div className="pt-24 md:pt-28">
      <header className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
          Proyectos
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl">
          Obra seleccionada
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          Casos de estudio en Oaxaca y alrededores. Cada proyecto prioriza sitio, luz y
          una materialidad que envejece bien.
        </p>
      </header>

      {projects.length === 0 ? (
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8" role="status">
          <p className="font-display text-3xl">Pronto publicaremos obra nueva</p>
          <p className="mt-3 text-[var(--quiet)]">
            Mientras tanto, escríbenos para conocer proyectos en curso bajo NDA.
          </p>
        </div>
      ) : (
        <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 md:grid-cols-2 md:gap-8 md:px-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 2} />
          ))}
        </section>
      )}
    </div>
  );
}
