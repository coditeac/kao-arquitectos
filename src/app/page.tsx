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
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Full-bleed cinematic hero — Unseen Studio / Readymag pattern */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <Image
          src={heroImage}
          alt="Residencia contemporánea con luz natural y materialidad sobria"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 texture-grain opacity-[0.14] mix-blend-overlay" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[90rem] flex-col justify-end px-5 pb-14 pt-28 md:px-10 md:pb-20">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[var(--paper)]/65">
              Oaxaca · México
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 font-display text-[clamp(3.2rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.03em]">
              KAO
              <span className="block text-[0.42em] tracking-[0.08em] opacity-90">
                Arquitectos
              </span>
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="mt-6 max-w-md font-sans text-[0.95rem] font-normal leading-relaxed tracking-normal text-[var(--paper)]/80 md:text-base">
              Estudio de arquitectura en Oaxaca. Residencias e interiores de alto
              nivel, pensados desde el sitio.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/proyectos"
                className="inline-flex h-11 items-center bg-[var(--paper)] px-6 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--ink)] transition-opacity hover:opacity-85"
              >
                Ver obra
              </Link>
              <Link
                href="/contacto"
                className="text-[0.68rem] tracking-[0.2em] uppercase text-[var(--paper)]/85 underline-offset-8 transition-opacity hover:opacity-60 hover:underline"
              >
                Hablar con el estudio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial manifesto — Mouthwash Studio pattern */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="origin-left h-px w-24 bg-[var(--ink)] animate-line-grow" />
        <p className="mt-10 max-w-5xl font-display text-[clamp(1.75rem,4.2vw,3.4rem)] leading-[1.15] text-[var(--ink)]">
          KAO es un estudio de arquitectura centrado en la claridad del sitio,
          la materialidad honesta y residencias que envejecen con dignidad en
          Oaxaca.
        </p>
        <Link
          href="/estudio"
          className="mt-10 inline-flex text-[0.72rem] tracking-[0.2em] uppercase underline underline-offset-8 transition-opacity hover:opacity-55"
        >
          Conocer el estudio
        </Link>
      </section>

      {/* Portfolio — Pentagram captions under photography */}
      <section className="border-y border-[var(--line)] bg-[var(--mist)]/40">
        <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-micro">Selección</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">
                Obra reciente
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="text-[0.72rem] tracking-[0.18em] uppercase underline underline-offset-8"
            >
              Ver todos
            </Link>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-12">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 2}
                index={i}
                featured={i % 3 === 0}
                className={
                  i % 3 === 0
                    ? "md:col-span-12"
                    : i % 3 === 1
                      ? "md:col-span-5 md:col-start-1"
                      : "md:col-span-6 md:col-start-7 md:mt-24"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services — editorial list */}
      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <p className="label-micro">Servicios</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-6xl">
          Del predio a la obra
        </h2>
        <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.slice(0, 4).map((service, i) => (
            <li key={service.slug}>
              <Link
                href="/servicios"
                className="group grid gap-3 py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="label-micro md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl md:col-span-4 md:text-4xl group-hover:opacity-60">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--quiet)] md:col-span-6 md:col-start-7 md:text-base">
                  {service.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Process — dark atmospheric block */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 texture-grain opacity-[0.08]" />
        <div className="relative mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-28">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--paper)]/45">
            Proceso
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">
            Cómo acompañamos cada proyecto
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-white/15 pt-6">
                <p className="text-[0.7rem] tracking-[0.22em] text-[var(--paper)]/40">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--paper)]/65">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95]">
              ¿Tienes un predio o una idea en Oaxaca?
            </h2>
            <p className="mt-6 max-w-lg text-[var(--quiet)]">
              Conversemos con calma. Revisamos alcance, tiempos y si somos el
              estudio adecuado para tu proyecto.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link
              href="/contacto"
              className="inline-flex h-12 w-full items-center justify-center bg-[var(--ink)] px-6 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--paper)] transition-colors hover:bg-[var(--olive)]"
            >
              Agendar llamada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
