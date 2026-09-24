import Image from "next/image";
import Link from "next/link";
import { processSteps, siteConfig } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Estudio",
  description:
    "Conoce a KAO Arquitectos: estudio de arquitectura en Oaxaca con enfoque residencial premium, rigor técnico y sensibilidad local.",
  path: "/estudio",
});

export default function EstudioPage() {
  return (
    <div className="pt-28 md:pt-32">
      <header className="mx-auto max-w-[90rem] px-5 pb-14 md:px-10 md:pb-16">
        <p className="label-micro">Estudio</p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
          Un estudio pequeño, una mirada exigente
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          KAO nace en Oaxaca para proyectar arquitectura contemporánea anclada al
          sitio: clima, materiales locales y una forma de vivir más clara.
        </p>
      </header>

      <div className="relative aspect-[21/9] w-full overflow-hidden bg-[var(--mist)]">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80"
          alt="Espacio de trabajo del estudio con luz natural"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="mx-auto grid max-w-[90rem] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl md:text-5xl">Nosotros</h2>
        </div>
        <div className="space-y-6 md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-[var(--quiet)]">
            Somos un equipo compacto de arquitectura e interiores. Preferimos pocos
            proyectos bien atendidos: eso nos permite estar presentes en cada
            decisión — del primer croquis a la última visita de obra.
          </p>
          <p className="leading-relaxed text-[var(--quiet)]">
            Creemos en la honestidad material, en el control de la luz y en la
            claridad espacial. No perseguimos efectos: buscamos espacios que se
            sostengan en el tiempo y en la vida cotidiana de quien los habita.
          </p>
          <p className="leading-relaxed text-[var(--quiet)]">
            Trabajamos principalmente en {siteConfig.location.city} y el valle
            central, con clientes particulares y desarrollos selectos.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--mist)]/35">
        <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl">Nuestro proceso</h2>
          <p className="mt-5 max-w-xl text-[var(--quiet)]">
            Un método breve y transparente, pensado para clientes que valoran
            rigor y comunicación directa.
          </p>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-[var(--line)] pt-6">
                <p className="label-micro">{step.number}</p>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--quiet)]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10">
        <h2 className="font-display text-4xl">Valores que guían cada proyecto</h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Sitio primero",
              text: "Antes del estilo, leemos orientación, topografía, vegetación y contexto.",
            },
            {
              title: "Detalle útil",
              text: "El detalle existe para resolver agua, sombra, mantenimiento y confort.",
            },
            {
              title: "Diálogo directo",
              text: "Hablamos claro sobre costos, tiempos y límites. Sin tecnicismos vacíos.",
            },
          ].map((item) => (
            <li key={item.title} className="border-t border-[var(--line)] pt-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--quiet)]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          className="btn-ink mt-14 h-12 px-6"
        >
          Conversar con KAO
        </Link>
      </section>
    </div>
  );
}
