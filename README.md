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
| `npm run start` | Servidor de producción (usa `PORT` del entorno) |
| `npm run lint` | ESLint |

## Contenido editable

- Marca, contacto, servicios y proyectos: `src/lib/content.ts`
- SEO helpers y JSON-LD: `src/lib/seo.ts`
- Formulario (mock): `src/app/api/contacto/route.ts`

## Deploy (Railway — nativo, sin GitHub Actions)

Este repo **no usa** `.github/workflows`. La producción se despliega con la integración nativa de Railway ↔ GitHub.

1. Publica el código en GitHub (`main`).
2. En [Railway](https://railway.com): **New Project → Deploy from GitHub repo**.
3. Crea **solo** el environment **production** (no staging/preview).
4. Conecta el servicio al branch **`main`** (watch branch = `main`).
5. Variables recomendadas en production:

| Variable | Valor |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública final (ej. `https://….up.railway.app` o dominio custom) |
| `NODE_ENV` | `production` (Railway suele fijarla) |

Config local del repo: `railway.toml` + `nixpacks.toml`.

Más detalle: ver notas de deploy en el store del proyecto (`docs/deploy-github-railway.md`).

## SEO

- Metadata y Open Graph por página
- `sitemap.xml` y `robots.txt`
- JSON-LD LocalBusiness / Architect
- HTML semántico y URLs limpias en español

## Notas

El envío de contacto es un fallback local/mock (sin backend real). Sustituye el endpoint cuando conectes correo o CRM.
