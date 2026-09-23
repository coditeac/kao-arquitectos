"use client";

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
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const onDarkHero = pathname === "/";
  const light = scrolled || open || !onDarkHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
        light
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_88%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          href="/"
          className={cn(
            "font-display text-[1.65rem] leading-none tracking-[0.04em] transition-colors md:text-[1.85rem]",
            light ? "text-[var(--ink)]" : "text-[var(--paper)]"
          )}
          aria-label={`${siteConfig.name} — inicio`}
        >
          KAO
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex"
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
                  "relative text-[0.72rem] tracking-[0.22em] uppercase transition-opacity hover:opacity-55",
                  light ? "text-[var(--ink)]" : "text-[var(--paper)]",
                  active && "opacity-100"
                )}
              >
                {link.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px w-full origin-left animate-line-grow",
                      light ? "bg-[var(--ink)]" : "bg-[var(--paper)]"
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className={cn(
              "hidden text-[0.72rem] tracking-[0.22em] uppercase transition-opacity hover:opacity-55 md:inline",
              light ? "text-[var(--ink)]" : "text-[var(--paper)]"
            )}
          >
            Agendar →
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center md:hidden",
              light ? "text-[var(--ink)]" : "text-[var(--paper)]"
            )}
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
          "border-t border-[var(--line)] bg-[var(--paper)] md:hidden",
          open ? "block animate-fade-in" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-8" aria-label="Móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-display text-3xl text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-6 inline-flex h-12 items-center justify-center bg-[var(--ink)] text-[0.72rem] tracking-[0.2em] uppercase text-[var(--paper)]"
          >
            Agendar visita
          </Link>
        </nav>
      </div>
    </header>
  );
}
