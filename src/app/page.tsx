import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { processSteps, projects, services, siteConfig } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/",
  description: siteConfig.description,
});

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <Image
          src={heroImage}
          alt="Residencia contemporánea con luz natural y materialidad sobria"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
        <div className="absolute inset-0 texture-grain opacity-[0.12] mix-blend-overlay" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <Reveal>
            <p className="font-display text-5xl leading-none tracking-wide md:text-7xl lg:text-8xl">
              KAO Arquitectos
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed tracking-normal text-[var(--paper)]/85 md:text-lg">
              Estudio de arquitectura en Oaxaca. Residencias e interiores de alto nivel,
              pensados desde el sitio.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/proyectos"
                className="inline-flex h-12 items-center border border-[var(--paper)] bg-[var(--paper)] px-6 text-[0.72rem] tracking-[0.16em] uppercase text-[var(--ink)] transition-colors hover:bg-transparent hover:text-[var(--paper)]"
              >
                Ver proyectos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center border border-[var(--paper)]/70 px-6 text-[0.72rem] tracking-[0.16em] uppercase text-[var(--paper)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--ink)]"
              >
                Hablar con el estudio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
              Enfoque
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Arquitectura serena, precisa y local
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-[var(--quiet)] md:text-xl">
              En KAO proyectamos espacios que se sienten inevitables: proporciones claras,
              materialidad honesta y una lectura atenta del clima, la luz y la vida en Oaxaca.
              Trabajamos con clientes que buscan calidad duradera, no moda.
            </p>
            <Link
              href="/estudio"
              className="mt-8 inline-flex text-sm tracking-wide underline underline-offset-8 transition-opacity hover:opacity-60"
            >
              Conocer el estudio
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--mist)]/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
                Selección
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Proyectos recientes</h2>
            </div>
            <Link
              href="/proyectos"
              className="hidden text-sm underline underline-offset-8 md:inline"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} priority={i < 2} />
            ))}
          </div>
          <Link
            href="/proyectos"
            className="mt-10 inline-flex text-sm underline underline-offset-8 md:hidden"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
          Servicios
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
          Acompañamos el proyecto de punta a punta
        </h2>
        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.slice(0, 4).map((service) => (
            <li key={service.slug}>
              <Link
                href="/servicios"
                className="group flex flex-col gap-2 py-7 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-10"
              >
                <h3 className="font-display text-2xl md:text-3xl group-hover:opacity-70">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-[var(--quiet)] md:text-right">
                  {service.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 texture-grain opacity-10" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--paper)]/50">
            Proceso
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">
            Cómo trabajamos
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step) => (
              <li key={step.number}>
                <p className="text-[0.75rem] tracking-[0.2em] text-[var(--paper)]/45">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--paper)]/70">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl md:text-6xl">
              ¿Tienes un predio o una idea en Oaxaca?
            </h2>
            <p className="mt-5 max-w-lg text-[var(--quiet)]">
              Conversemos con calma. Revisamos alcance, tiempos y si somos el estudio adecuado
              para tu proyecto.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Link
              href="/contacto"
              className="inline-flex h-12 w-full items-center justify-center bg-[var(--ink)] px-6 text-[0.72rem] tracking-[0.16em] uppercase text-[var(--paper)] transition-colors hover:bg-[var(--olive)] md:w-auto"
            >
              Agendar una llamada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
