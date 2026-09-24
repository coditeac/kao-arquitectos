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
    <div className="pt-28 md:pt-32">
      <header className="mx-auto max-w-[90rem] px-5 pb-16 md:px-10 md:pb-20">
        <p className="label-micro">Servicios</p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
          Oferta clara para proyectos exigentes
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          Diseñamos y acompañamos residencias e interiores con un estándar alto
          de detalle. Cada servicio puede contratarse por fase o como proceso
          completo.
        </p>
      </header>

      <section className="border-t border-[var(--line)]">
        <ul className="mx-auto max-w-[90rem] divide-y divide-[var(--line)] px-5 md:px-10">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="grid gap-8 py-16 md:grid-cols-12 md:gap-10 md:py-20"
            >
              <div className="md:col-span-1">
                <span className="label-micro">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-[var(--quiet)]">{service.summary}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="leading-relaxed text-[var(--quiet)]">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span
                        className="mt-2 h-px w-5 shrink-0 bg-[var(--clay)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10">
        <div className="border-t border-[var(--line)] pt-12">
          <h2 className="font-display text-3xl md:text-5xl">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="mt-4 max-w-xl text-[var(--quiet)]">
            Una llamada corta basta para orientar el alcance: predio,
            remodelación o interiorismo.
          </p>
          <Link
            href="/contacto"
            className="btn-ink mt-8 h-12 px-6"
          >
            Escribir al estudio
          </Link>
        </div>
      </section>
    </div>
  );
}
