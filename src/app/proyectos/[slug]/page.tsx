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
    <article className="pt-28 md:pt-32">
      <header className="mx-auto max-w-[90rem] px-5 md:px-10">
        <Link
          href="/proyectos"
          className="text-[0.72rem] tracking-[0.18em] uppercase text-[var(--quiet)] underline-offset-4 hover:underline"
        >
          ← Proyectos
        </Link>
        <h1 className="mt-8 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
          {project.title}
        </h1>
        <p className="mt-5 text-sm tracking-wide text-[var(--quiet)]">
          {project.location} · {project.year} · {project.typology} · {project.area}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">{project.summary}</p>
      </header>

      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden bg-[var(--mist)] md:aspect-[21/9]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Telescope-like meta trio */}
      <section className="mx-auto grid max-w-[90rem] gap-12 border-b border-[var(--line)] px-5 py-20 md:grid-cols-3 md:gap-10 md:px-10 md:py-24">
        <div>
          <h2 className="label-micro">Reto</h2>
          <p className="mt-4 leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <h2 className="label-micro">Enfoque</h2>
          <p className="mt-4 leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <h2 className="label-micro">Resultado</h2>
          <p className="mt-4 leading-relaxed">{project.result}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[90rem] gap-3 px-5 py-10 md:grid-cols-2 md:px-10 md:py-14">
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
        <section className="border-t border-[var(--line)] bg-[var(--mist)]/30">
          <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10">
            <h2 className="font-display text-3xl md:text-4xl">Más proyectos</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {related.map((p, i) => (
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
                  <p className="label-micro mt-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-2xl">{p.title}</p>
                  <p className="mt-1 text-sm text-[var(--quiet)]">{p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
