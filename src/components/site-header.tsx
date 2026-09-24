"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
          <Button
            variant="clay"
            size="lg"
            className="hidden h-10 px-5 text-[0.72rem] lg:inline-flex"
            nativeButton={false}
            render={<Link href="/contacto" />}
          >
            Contacto
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Abrir menú"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="gap-0 p-0"
              showCloseButton
            >
              <SheetHeader className="border-b border-[var(--line)] px-5 py-5 text-left">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <Image
                  src="/brand/kao-logo-lockup.png"
                  alt="KAO Arquitectos"
                  width={180}
                  height={30}
                  className="h-7 w-auto"
                />
              </SheetHeader>
              <nav
                className="flex flex-1 flex-col gap-1 px-5 py-8"
                aria-label="Móvil"
              >
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="py-3.5 text-[1.85rem] font-semibold tracking-[-0.03em] text-[var(--ink)]"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-6 text-sm text-[var(--quiet)]"
                >
                  {siteConfig.contact.phone}
                </a>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/contacto"
                      className="btn-clay mt-6 inline-flex h-12 w-full items-center justify-center"
                    />
                  }
                >
                  Contacto
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
