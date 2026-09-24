import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacta a KAO Arquitectos en Oaxaca. Agenda una visita o consulta por WhatsApp, teléfono o correo.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <div className="pt-32 md:pt-40">
      <header className="mx-auto max-w-[90rem] px-5 pb-16 md:px-10 md:pb-20">
        <Reveal>
          <p className="label-micro">Contacto</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Empecemos por una conversación
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--quiet)]">
            Cuéntanos sobre tu predio o remodelación. Respondemos en horario de
            estudio ({siteConfig.contact.hours}).
          </p>
        </Reveal>
      </header>

      <section className="mx-auto grid max-w-[90rem] gap-20 border-t border-[var(--line)] px-5 py-20 md:grid-cols-12 md:gap-14 md:px-10 md:py-28">
        <Reveal className="md:col-span-7">
          <p className="label-micro mb-10">Escribir</p>
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <p className="label-micro">Estudio</p>
          <dl className="mt-10 divide-y divide-[var(--line)]">
            {[
              ["Dirección", siteConfig.location.address],
              [
                "Teléfono",
                <a
                  key="phone"
                  href={siteConfig.contact.phoneHref}
                  className="transition-opacity hover:opacity-55"
                >
                  {siteConfig.contact.phone}
                </a>,
              ],
              [
                "WhatsApp",
                <a
                  key="wa"
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-55"
                >
                  {siteConfig.contact.whatsapp}
                </a>,
              ],
              [
                "Correo",
                <a
                  key="email"
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-opacity hover:opacity-55"
                >
                  {siteConfig.contact.email}
                </a>,
              ],
              ["Horario", siteConfig.contact.hours],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="grid gap-2 py-6 sm:grid-cols-[7rem_1fr]"
              >
                <dt className="text-[0.65rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </div>
  );
}
