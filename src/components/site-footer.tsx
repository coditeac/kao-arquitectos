import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-wide">KAO Arquitectos</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--paper)]/70">
            {siteConfig.tagline}. Arquitectura residencial y de interiores con rigor técnico
            y mirada local.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--paper)]/50">
            Navegación
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:opacity-70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--paper)]/50">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{siteConfig.location.city}, {siteConfig.location.region}</li>
            <li>
              <a href={siteConfig.contact.phoneHref} className="hover:opacity-70">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:opacity-70">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-[var(--paper)]/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Oaxaca de Juárez, México</p>
        </div>
      </div>
    </footer>
  );
}
