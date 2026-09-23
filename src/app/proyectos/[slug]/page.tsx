import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/proyectos/${project.slug}`,
    image: project.coverImage,
  });
}

export default async function ProyectoDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="pt-24 md:pt-28">
      <header className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/proyectos"
          className="text-sm text-[var(--quiet)] underline-offset-4 hover:underline"
        >
          ← Proyectos
        </Link>
        <h1 className="mt-6 font-display text-5xl md:text-7xl">{project.title}</h1>
        <p className="mt-4 text-[var(--quiet)]">
          {project.location} · {project.year} · {project.typology} · {project.area}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{project.summary}</p>
      </header>

      <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden bg-[var(--mist)]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:gap-10 md:px-8 md:py-24">
        <div>
          <h2 className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
            Reto
          </h2>
          <p className="mt-3 leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <h2 className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
            Enfoque
          </h2>
          <p className="mt-3 leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <h2 className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--quiet)]">
            Resultado
          </h2>
          <p className="mt-3 leading-relaxed">{project.result}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-20 md:grid-cols-2 md:px-8">
        {project.gallery.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden bg-[var(--mist)]">
            <Image
              src={src}
              alt={`${project.title} — vista ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {related.length > 0 ? (
        <section className="border-t border-[var(--line)] bg-[var(--mist)]/40">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <h2 className="font-display text-3xl">Más proyectos</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/proyectos/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--mist)]">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 font-display text-2xl">{p.title}</p>
                  <p className="text-sm text-[var(--quiet)]">{p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
