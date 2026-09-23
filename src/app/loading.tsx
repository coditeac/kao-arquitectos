export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-28" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 animate-pulse rounded-full border border-[var(--ink)]/20 border-t-[var(--ink)]" />
        <p className="text-sm tracking-[0.14em] uppercase text-[var(--quiet)]">Cargando…</p>
      </div>
    </div>
  );
}
