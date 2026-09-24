import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
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
    <div className="pt-32 md:pt-40">
      <header className="mx-auto max-w-[90rem] px-5 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <p className="label-micro">Proyectos</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Obra seleccionada
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--quiet)]">
            Casos de estudio en Oaxaca y alrededores. Cada proyecto prioriza
            sitio, luz y una materialidad que envejece bien.
          </p>
        </Reveal>
      </header>

      {projects.length === 0 ? (
        <div
          className="mx-auto max-w-[90rem] px-5 py-24 text-center md:px-10"
          role="status"
        >
          <p className="text-3xl font-semibold">Pronto publicaremos obra nueva</p>
          <p className="mt-3 text-[var(--quiet)]">
            Mientras tanto, escríbenos para conocer proyectos en curso bajo NDA.
          </p>
        </div>
      ) : (
        <section className="mx-auto grid max-w-[90rem] gap-x-10 gap-y-20 px-5 pb-32 md:grid-cols-2 md:px-10 md:pb-40">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 100}
              className={i % 2 === 1 ? "md:mt-20" : undefined}
            >
              <ProjectCard
                project={project}
                priority={i < 2}
                index={i}
              />
            </Reveal>
          ))}
        </section>
      )}
    </div>
  );
}
