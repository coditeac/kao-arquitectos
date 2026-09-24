import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto max-w-[90rem] px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
          <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-10">
            <Reveal className="md:col-span-7">
              <p className="mb-5 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--paper)]/45">
                {siteConfig.location.city} · México
              </p>
              <h1 className="text-[clamp(2.55rem,6.8vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Estudio de arquitectos en Oaxaca
              </h1>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[1.02rem] leading-[1.65] text-[var(--paper)]/68 md:ml-auto md:text-right">
                Somos un estudio de arquitectos en Oaxaca, expertos en diseño
                arquitectónico y mobiliario a medida.
              </p>
              <div className="mt-8 md:flex md:justify-end">
                <Link
                  href="/proyectos"
                  className="group inline-flex h-[3.25rem] items-center gap-3 rounded-full bg-white pl-7 pr-1.5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--ink)] transition-opacity hover:opacity-90"
                >
                  Ver proyectos
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--clay)] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-4" strokeWidth={2.25} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <figure className="relative mt-14 md:mt-20">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] md:aspect-[21/9] md:rounded-[2rem]">
                <Image
                  src={heroImage}
                  alt="Residencia contemporánea con fachada de material cálido y vegetación"
                  fill
                  priority
                  sizes="(max-width: 90rem) 100vw, 90rem"
                  className="object-cover animate-ken-slow"
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[var(--paper)]/40">
                <span>Residencial · Oaxaca</span>
                <span>Selección 2024–2025</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] section-pad">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <p className="label-micro md:col-span-2">(Estudio)</p>
            <div className="md:col-span-10">
              <div className="origin-left h-px w-16 bg-[var(--ink)] animate-line-grow" />
              <p className="mt-10 max-w-4xl text-[clamp(1.7rem,3.6vw,3.15rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-[var(--ink)]">
                KAO es un estudio de arquitectura centrado en la claridad del
                sitio, la materialidad honesta y residencias que envejecen con
                dignidad en Oaxaca.
              </p>
              <Link
                href="/estudio"
                className="link-quiet mt-12 inline-flex items-center gap-2 underline underline-offset-8"
              >
                Conocer el estudio
                <ArrowUpRight className="size-3.5 opacity-60" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--mist)]/50">
        <div className="mx-auto max-w-[90rem] section-pad">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="label-micro">Selección</p>
                <h2 className="mt-4 text-[clamp(2.2rem,4.5vw,3.75rem)] font-semibold tracking-[-0.035em]">
                  Obra reciente
                </h2>
              </div>
              <Link
                href="/proyectos"
                className="link-quiet inline-flex items-center gap-2 underline underline-offset-8"
              >
                Ver todos
                <ArrowUpRight className="size-3.5 opacity-60" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-12 md:mt-20">
            {featured.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 80}
                className={
                  i % 3 === 0
                    ? "md:col-span-12"
                    : i % 3 === 1
                      ? "md:col-span-5 md:col-start-1"
                      : "md:col-span-6 md:col-start-7 md:mt-28"
                }
              >
                <ProjectCard
                  project={project}
                  priority={i < 2}
                  index={i}
                  featured={i % 3 === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] section-pad">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="label-micro md:col-span-2">(Servicios)</p>
            <h2 className="max-w-2xl text-[clamp(2.2rem,4.5vw,3.75rem)] font-semibold tracking-[-0.035em] md:col-span-9 md:col-start-4">
              Del predio a la obra
            </h2>
          </div>
        </Reveal>
        <ul className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.slice(0, 4).map((service, i) => (
            <li key={service.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href="/servicios"
                  className="group grid gap-4 py-10 transition-colors md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
                >
                  <span className="label-micro md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-[-0.03em] transition-opacity md:col-span-4 group-hover:opacity-55">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--quiet)] md:col-span-6 md:col-start-7 md:text-[0.98rem] md:leading-relaxed">
                    {service.summary}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 texture-grain opacity-[0.07]" />
        <div className="relative mx-auto max-w-[90rem] section-pad">
          <Reveal>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[var(--paper)]/40">
              Proceso
            </p>
            <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,4.2vw,3.4rem)] font-semibold tracking-[-0.035em]">
              Cómo acompañamos cada proyecto
            </h2>
          </Reveal>
          <ol className="mt-20 grid gap-14 md:grid-cols-4 md:gap-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <li className="border-t border-white/12 pt-7">
                  <p className="text-[0.65rem] tracking-[0.22em] text-[var(--paper)]/35">
                    {step.number}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--paper)]/60">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] section-pad">
        <Reveal>
          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-[clamp(2.3rem,5.2vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                ¿Tienes un predio o una idea en Oaxaca?
              </h2>
              <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-[var(--quiet)]">
                Conversemos con calma. Revisamos alcance, tiempos y si somos el
                estudio adecuado para tu proyecto.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10">
              <Link href="/contacto" className="btn-clay inline-flex h-12 w-full px-6">
                Agendar llamada
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
