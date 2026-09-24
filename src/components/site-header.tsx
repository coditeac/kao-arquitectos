"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,box-shadow] duration-500",
        scrolled || open
          ? "border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_96%,transparent)] shadow-[0_1px_0_rgba(33,37,41,0.03)] backdrop-blur-md"
          : "border-transparent bg-[var(--paper)]"
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[90rem] items-center justify-between gap-4 px-5 md:h-[5.5rem] md:px-10">
        <Link
          href="/"
          className="relative shrink-0 transition-opacity duration-300 hover:opacity-75"
          aria-label={`${siteConfig.name} — inicio`}
        >
          <Image
            src="/brand/kao-logo-lockup.png"
            alt="KAO Arquitectos — Arquitectura · Interiores · Urbanismo"
            width={216}
            height={36}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[0.8rem] font-medium tracking-[0.02em] text-[var(--ink)] transition-opacity duration-300 hover:opacity-45",
                  active && "opacity-100"
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left animate-line-grow bg-[var(--clay)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden text-[0.78rem] font-medium tracking-wide text-[var(--ink)]/80 transition-opacity hover:opacity-55 xl:inline"
          >
            {siteConfig.contact.phone}
          </a>
          <Link
            href="/contacto"
            className="btn-clay hidden h-10 px-5 lg:inline-flex"
          >
            Contacto
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[var(--line)] bg-[var(--paper)] lg:hidden",
          open ? "block animate-fade-in" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-10" aria-label="Móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3.5 text-[1.85rem] font-semibold tracking-[-0.03em] text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.contact.phoneHref}
            className="mt-6 text-sm text-[var(--quiet)]"
          >
            {siteConfig.contact.phone}
          </a>
          <Link href="/contacto" className="btn-clay mt-6 h-12 w-full">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
