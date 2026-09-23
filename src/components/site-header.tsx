"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open || !onDarkHero
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_92%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className={cn(
            "font-display text-xl tracking-[0.02em] transition-colors md:text-2xl",
            scrolled || open || !onDarkHero
              ? "text-[var(--ink)]"
              : "text-[var(--paper)]"
          )}
          aria-label={`${siteConfig.name} — inicio`}
        >
          KAO
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.8rem] tracking-[0.14em] uppercase transition-opacity hover:opacity-70",
                  scrolled || !onDarkHero ? "text-[var(--ink)]" : "text-[var(--paper)]",
                  active && "opacity-100 underline decoration-1 underline-offset-8"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contacto"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden h-9 rounded-none border px-4 text-[0.7rem] tracking-[0.16em] uppercase md:inline-flex",
              scrolled || !onDarkHero
                ? "border-[var(--ink)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                : "border-[var(--paper)]/70 bg-transparent text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)]"
            )}
          >
            Agendar visita
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center md:hidden",
              scrolled || open || !onDarkHero ? "text-[var(--ink)]" : "text-[var(--paper)]"
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
        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-display text-2xl text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-4 inline-flex h-11 items-center justify-center border border-[var(--ink)] text-[0.75rem] tracking-[0.16em] uppercase"
          >
            Agendar visita
          </Link>
        </nav>
      </div>
    </header>
  );
}
