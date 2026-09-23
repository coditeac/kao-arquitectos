import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">404</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-[var(--quiet)]">
        El enlace no existe o el proyecto fue movido. Vuelve al inicio o explora el
        portafolio.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center bg-[var(--ink)] px-5 text-[0.72rem] tracking-[0.16em] uppercase text-[var(--paper)]"
        >
          Inicio
        </Link>
        <Link
          href="/proyectos"
          className="inline-flex h-11 items-center border border-[var(--ink)] px-5 text-[0.72rem] tracking-[0.16em] uppercase"
        >
          Proyectos
        </Link>
      </div>
    </div>
  );
}
