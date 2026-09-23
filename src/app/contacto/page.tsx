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
    <div className="pt-24 md:pt-28">
      <header className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
          Contacto
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl">
          Empecemos por una conversación
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--quiet)]">
          Cuéntanos sobre tu predio o remodelación. Respondemos en horario de estudio
          ({siteConfig.contact.hours}).
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="border border-[var(--line)] bg-[var(--mist)]/50 p-6 md:p-8">
            <h2 className="font-display text-2xl">Estudio</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  Dirección
                </dt>
                <dd className="mt-1 leading-relaxed">{siteConfig.location.address}</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  Teléfono
                </dt>
                <dd className="mt-1">
                  <a href={siteConfig.contact.phoneHref} className="hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  Correo
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-[var(--quiet)]">
                  Horario
                </dt>
                <dd className="mt-1">{siteConfig.contact.hours}</dd>
              </div>
            </dl>
            <p className="mt-8 text-xs leading-relaxed text-[var(--quiet)]">
              Los datos de contacto son placeholders editables en{" "}
              <code className="text-[0.7rem]">src/lib/content.ts</code>.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
