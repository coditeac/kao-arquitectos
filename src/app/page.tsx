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
      {/* Brand-aligned hero — dark charcoal + type + rounded photography */}
      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36">
          <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
            <Reveal className="md:col-span-7">
              <h1 className="text-[clamp(2.4rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                Estudio de arquitectos en Oaxaca
              </h1>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5 md:pb-1">
              <p className="max-w-md text-[0.98rem] leading-relaxed text-[var(--paper)]/70 md:ml-auto md:text-right">
                Somos un estudio de arquitectos en Oaxaca, expertos en diseño
                arquitectónico y mobiliario a medida.
              </p>
              <div className="mt-7 md:flex md:justify-end">
                <Link
                  href="/proyectos"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--ink)] transition-opacity hover:opacity-90"
                >
                  Ver proyectos
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--clay)] text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-4" strokeWidth={2.25} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] md:mt-16 md:aspect-[21/9] md:rounded-[2rem]">
              <Image
                src={heroImage}
                alt="Residencia contemporánea con fachada de material cálido y vegetación"
                fill
                priority
                sizes="(max-width: 90rem) 100vw, 90rem"
                className="object-cover animate-ken-slow"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <div className="origin-left h-px w-24 bg-[var(--ink)] animate-line-grow" />
        <p className="mt-10 max-w-5xl text-[clamp(1.65rem,3.8vw,3rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--ink)]">
          KAO es un estudio de arquitectura centrado en la claridad del sitio,
          la materialidad honesta y residencias que envejecen con dignidad en
          Oaxaca.
        </p>
        <Link
          href="/estudio"
          className="mt-10 inline-flex text-[0.72rem] font-medium tracking-[0.18em] uppercase underline underline-offset-8 transition-opacity hover:opacity-55"
        >
          Conocer el estudio
        </Link>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--mist)]/45">
        <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-micro">Selección</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Obra reciente
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="text-[0.72rem] font-medium tracking-[0.18em] uppercase underline underline-offset-8"
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

      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-32">
        <p className="label-micro">Servicios</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
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
                <h3 className="text-3xl font-semibold tracking-tight md:col-span-4 md:text-4xl group-hover:opacity-60">
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

      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 texture-grain opacity-[0.08]" />
        <div className="relative mx-auto max-w-[90rem] px-5 py-24 md:px-10 md:py-28">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--paper)]/45">
            Proceso
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Cómo acompañamos cada proyecto
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-white/15 pt-6">
                <p className="text-[0.7rem] tracking-[0.22em] text-[var(--paper)]/40">
                  {step.number}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
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
            <h2 className="text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              ¿Tienes un predio o una idea en Oaxaca?
            </h2>
            <p className="mt-6 max-w-lg text-[var(--quiet)]">
              Conversemos con calma. Revisamos alcance, tiempos y si somos el
              estudio adecuado para tu proyecto.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link href="/contacto" className="btn-clay h-12 w-full px-6">
              Agendar llamada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
