# KAO Arquitectos

Sitio web de marketing SEO-first para **KAO Arquitectos** — estudio de arquitectura en Oaxaca. Next.js, TypeScript, Tailwind CSS y shadcn/ui.

## Páginas

- `/` — Inicio (hero, enfoque, proyectos, servicios, proceso)
- `/servicios` — Oferta premium
- `/proyectos` — Portafolio
- `/proyectos/[slug]` — Caso de estudio
- `/estudio` — Nosotros y proceso
- `/contacto` — Formulario + datos de contacto (mock)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto **4321** |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción (puerto 4321) |
| `npm run lint` | ESLint |

## Contenido editable

- Marca, contacto, servicios y proyectos: `src/lib/content.ts`
- SEO helpers y JSON-LD: `src/lib/seo.ts`
- Formulario (mock): `src/app/api/contacto/route.ts`

Variables opcionales:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.mx
```

## SEO

- Metadata y Open Graph por página
- `sitemap.xml` y `robots.txt`
- JSON-LD LocalBusiness / Architect
- HTML semántico y URLs limpias en español

## Notas

El envío de contacto es un fallback local/mock (sin backend real). Sustituye el endpoint cuando conectes correo o CRM.
