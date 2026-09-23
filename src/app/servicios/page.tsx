import { services } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Servicios de arquitectura",
  description:
    "Residencial de alto nivel, remodelación, diseño de interiores, supervisión de obra y consultoría de sitio en Oaxaca.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <div className="pt-24 md:pt-28">
      <header className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
          Servicios
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl">
          Oferta clara para proyectos exigentes
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          Diseñamos y acompañamos residencias e interiores con un estándar alto de
          detalle. Cada servicio puede contratarse por fase o como proceso completo.
        </p>
      </header>

      <section className="border-t border-[var(--line)]">
        <ul className="mx-auto max-w-7xl divide-y divide-[var(--line)] px-5 md:px-8">
          {services.map((service, index) => (
            <li key={service.slug} className="grid gap-8 py-14 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-1">
                <span className="text-sm tracking-[0.16em] text-[var(--quiet)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl">{service.title}</h2>
                <p className="mt-4 text-[var(--quiet)]">{service.summary}</p>
              </div>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-[var(--quiet)]">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="mt-2 size-1.5 shrink-0 bg-[var(--olive)]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="border border-[var(--line)] bg-[var(--mist)]/60 px-6 py-10 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl">¿No sabes por dónde empezar?</h2>
          <p className="mt-3 max-w-xl text-[var(--quiet)]">
            Una llamada corta basta para orientar el alcance: predio, remodelación o
            interiorismo.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex h-11 items-center bg-[var(--ink)] px-5 text-[0.72rem] tracking-[0.16em] uppercase text-[var(--paper)] hover:bg-[var(--olive)]"
          >
            Escribir al estudio
          </Link>
        </div>
      </section>
    </div>
  );
}
