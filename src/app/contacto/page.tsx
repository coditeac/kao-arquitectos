import { ContactForm } from "@/components/contact-form";
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
    <div className="pt-28 md:pt-32">
      <header className="mx-auto max-w-[90rem] px-5 pb-14 md:px-10 md:pb-16">
        <p className="label-micro">Contacto</p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
          Empecemos por una conversación
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--quiet)]">
          Cuéntanos sobre tu predio o remodelación. Respondemos en horario de
          estudio ({siteConfig.contact.hours}).
        </p>
      </header>

      <section className="mx-auto grid max-w-[90rem] gap-16 border-t border-[var(--line)] px-5 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-20">
        <div className="md:col-span-7">
          <p className="label-micro mb-8">Escribir</p>
          <ContactForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="label-micro">Estudio</p>
          <dl className="mt-8 divide-y divide-[var(--line)]">
            {[
              ["Dirección", siteConfig.location.address],
              [
                "Teléfono",
                <a key="phone" href={siteConfig.contact.phoneHref} className="hover:opacity-60">
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
                  className="hover:opacity-60"
                >
                  {siteConfig.contact.whatsapp}
                </a>,
              ],
              [
                "Correo",
                <a
                  key="email"
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:opacity-60"
                >
                  {siteConfig.contact.email}
                </a>,
              ],
              ["Horario", siteConfig.contact.hours],
            ].map(([label, value]) => (
              <div key={String(label)} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr]">
                <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-[var(--quiet)]">
            Placeholders editables en <code>src/lib/content.ts</code>.
          </p>
        </aside>
      </section>
    </div>
  );
}
