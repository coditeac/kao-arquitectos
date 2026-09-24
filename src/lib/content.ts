export const siteConfig = {
  name: "KAO Arquitectos",
  tagline: "Estudio de Arquitectos en Oaxaca",
  description:
    "Estudio de arquitectura en Oaxaca especializado en residencias de alto nivel, remodelación y diseño de interiores con rigor técnico y sensibilidad local.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaoarquitectos.mx",
  locale: "es_MX",
  location: {
    city: "Oaxaca de Juárez",
    region: "Oaxaca",
    country: "México",
    address: "Calle de la Almendros 214, Col. Reforma, Oaxaca de Juárez, Oax.",
    postalCode: "68050",
    geo: { lat: 17.0732, lng: -96.7266 },
  },
  contact: {
    email: "contacto@kaoarquitectos.com",
    phone: "+52 951 610 7548",
    phoneHref: "tel:+529516107548",
    whatsapp: "+52 951 610 7548",
    whatsappHref: "https://wa.me/529516107548",
    hours: "Lun–Vie 10:00–18:00",
  },
  social: {
    instagram: "https://instagram.com/kaoarquitectos",
  },
} as const;

export const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/estudio", label: "Estudio" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "residencial-alto-nivel",
    title: "Residencial de alto nivel",
    summary:
      "Casas y residencias pensadas para vivir con amplitud, luz y materialidad duradera.",
    description:
      "Diseñamos residencias privadas donde el programa, el sitio y la vida cotidiana se alinean. Priorizamos proporciones claras, control solar y materiales que envejecen con dignidad en el clima de Oaxaca.",
    outcomes: [
      "Anteproyecto y proyecto ejecutivo",
      "Coordinación con especialistas",
      "Selección de acabados y materialidad",
    ],
  },
  {
    slug: "remodelacion",
    title: "Remodelación",
    summary:
      "Transformamos espacios existentes con precisión: estructura, flujo y atmósfera.",
    description:
      "Intervenimos viviendas y locales con un diagnóstico honesto. Respetamos lo que vale la pena conservar y redibujamos lo que limita el uso, la luz o la calidad constructiva.",
    outcomes: [
      "Levantamiento y diagnóstico",
      "Propuesta de intervención",
      "Detalle constructivo y supervisión",
    ],
  },
  {
    slug: "diseno-de-interiores",
    title: "Diseño de interiores",
    summary:
      "Interiores coherentes con la arquitectura: mobiliario, iluminación y textura.",
    description:
      "Integramos mobiliario fijo, iluminación y acabados para que el interior no sea un añadido, sino la continuación lógica del proyecto arquitectónico.",
    outcomes: [
      "Concepto y moodboard técnico",
      "Planos de amueblado e iluminación",
      "Especificación de materiales",
    ],
  },
  {
    slug: "supervision-de-obra",
    title: "Supervisión de obra",
    summary:
      "Presencia en obra para proteger el diseño, los tiempos y la calidad de ejecución.",
    description:
      "Acompañamos la construcción con visitas, bitácora y criterios claros. Nuestra meta es que lo dibujado se construya con el mismo rigor con el que se proyectó.",
    outcomes: [
      "Visitas periódicas y bitácora",
      "Control de acabados y detalles",
      "Coordinación con contratistas",
    ],
  },
  {
    slug: "consultoria-de-sitio",
    title: "Consultoría de sitio",
    summary:
      "Lectura del terreno, normativa y potencial antes de invertir en un proyecto.",
    description:
      "Para clientes que evalúan un predio o una compra, entregamos una lectura clara de orientación, topografía, riesgos y oportunidades de diseño.",
    outcomes: [
      "Análisis de asoleamiento y vistas",
      "Criterios de implantación",
      "Recomendaciones de inversión",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  typology: string;
  area: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "casa-cantera",
    title: "Casa Cantera",
    location: "San Felipe del Agua, Oaxaca",
    year: "2024",
    typology: "Residencial",
    area: "420 m²",
    summary:
      "Residencia en pendiente con patios interiores que enfrían el clima y enmarcan la sierra.",
    challenge:
      "Un predio estrecho con fuerte desnivel y exposición solar intensa requería privacidad sin renunciar a vistas abiertas.",
    approach:
      "Organizamos el programa en tres terrazas conectadas por un patio lineal. La cantera local y el concreto aparente definen muros de masa térmica; la vegetación nativa filtra el sol del poniente.",
    result:
      "Una casa silenciosa, fresca y luminosa, con circulación clara y terrazas que alargan la vida hacia el paisaje.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "patio-etla",
    title: "Patio Etla",
    location: "Villa de Etla, Oaxaca",
    year: "2023",
    typology: "Remodelación",
    area: "280 m²",
    summary:
      "Rehabilitación de una casa de patio: más luz, mejor flujo y una cocina abierta al jardín.",
    challenge:
      "Una vivienda compacta con habitaciones oscuras y un patio infrautilizado como depósito.",
    approach:
      "Abrimos el crujía central, recuperamos el patio como corazón del proyecto y unificamos pisos y carpintería para calmar la lectura espacial.",
    result:
      "La casa respira otra vez: el patio organiza la vida diaria y las estancias ganan profundidad y claridad.",
    coverImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "casa-monte-alban",
    title: "Casa Monte Albán",
    location: "Xoxocotlán, Oaxaca",
    year: "2025",
    typology: "Residencial",
    area: "510 m²",
    summary:
      "Volúmenes bajos, techos profundos y una secuencia de umbrales hacia el valle.",
    challenge:
      "Proteger del sol y del polvo sin cerrar la casa, manteniendo una escala residencial discreta frente al paisaje arqueológico cercano.",
    approach:
      "Trabajamos con aleros amplios, celosías de madera y un muro de piedra que ancla el acceso. El programa social se abre al sur; las recámaras buscan sombra y silencio.",
    result:
      "Una residencia contemporánea con presencia serena, pensada para vivir despacio y recibir con generosidad.",
    coverImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "loft-reforma",
    title: "Loft Reforma",
    location: "Col. Reforma, Oaxaca",
    year: "2022",
    typology: "Interiores",
    area: "145 m²",
    summary:
      "Interior urbano con carpintería a medida, luz filtrada y una paleta mineral.",
    challenge:
      "Un departamento alargado con poca iluminación natural y almacenamiento insuficiente.",
    approach:
      "Diseñamos un muro técnico continuo que organiza cocina, closet y librero. Espejos y acabados mate amplifican la luz sin artificio.",
    result:
      "Un loft ordenado y cálido, con cada metro cuadrado trabajando a favor de la vida cotidiana.",
    coverImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "casa-huaje",
    title: "Casa Huaje",
    location: "San Agustín Etla, Oaxaca",
    year: "2024",
    typology: "Residencial",
    area: "360 m²",
    summary:
      "Casa de fin de semana entre huajes: concreto, madera y un corredor abierto al viento.",
    challenge:
      "Construir con presupuesto controlado en un sitio rural, maximizando sombra y ventilación cruzada.",
    approach:
      "Un corredor perimetral actúa como umbral climático. El concreto se deja visto; la madera local viste celosías y mobiliario fijo.",
    result:
      "Un refugio austero y preciso, fácil de mantener y profundamente ligado al sitio.",
    coverImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "taller-jalatlaco",
    title: "Taller Jalatlaco",
    location: "Barrio de Jalatlaco, Oaxaca",
    year: "2023",
    typology: "Comercial / Taller",
    area: "190 m²",
    summary:
      "Espacio de trabajo creativo con doble altura, piso de barro y luz norte constante.",
    challenge:
      "Adaptar una casona estrecha a un taller contemporáneo sin perder el carácter del barrio.",
    approach:
      "Conservamos muros perimetrales y abrimos un vacío central. La luz norte baña mesas de trabajo; el acceso se marca con un umbral de piedra.",
    result:
      "Un taller luminoso y flexible que convive con la escala histórica del barrio.",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Escucha y sitio",
    text: "Entendemos cómo viven, qué buscan y qué ofrece el predio: luz, viento, vistas y restricciones reales.",
  },
  {
    number: "02",
    title: "Concepto claro",
    text: "Proponemos una idea fuerte y legible —volumen, patio, umbral— antes de dibujar detalles.",
  },
  {
    number: "03",
    title: "Proyecto preciso",
    text: "Desarrollamos planos, especificaciones y decisiones de materialidad para construir sin ambigüedad.",
  },
  {
    number: "04",
    title: "Obra acompañada",
    text: "Supervisamos la ejecución para proteger el diseño, los tiempos y la calidad de cada detalle.",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
