import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <Link href="/" aria-label={`${siteConfig.name} — inicio`}>
            <Image
              src="/brand/kao-logo-lockup-white.png"
              alt="KAO Arquitectos"
              width={220}
              height={37}
              className="h-9 w-auto opacity-95"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--paper)]/55">
            {siteConfig.tagline}. Arquitectura, interiores y urbanismo con
            rigor técnico y mirada local.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[var(--paper)]/35">
            Navegación
          </p>
          <ul className="mt-6 space-y-3.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-55"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[var(--paper)]/35">
            Contacto
          </p>
          <ul className="mt-6 space-y-3.5 text-sm">
            <li>
              {siteConfig.location.city}, {siteConfig.location.region}
            </li>
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="transition-opacity hover:opacity-55"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-opacity hover:opacity-55"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-55"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pointer-events-none select-none px-5 pb-4 md:px-10">
        <p className="text-[clamp(3.5rem,14vw,11rem)] font-semibold leading-none tracking-[-0.05em] text-white/[0.045]">
          KAO
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-2 px-5 py-6 text-[0.68rem] tracking-wide text-[var(--paper)]/35 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Oaxaca de Juárez, México</p>
        </div>
      </div>
    </footer>
  );
}
