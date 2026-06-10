export type Project = {
  id: number;
  slug: string;
  image: string;
  alt: string;
  cat: string;
  year: string;
  title: string;
  status: "real" | "study";
  statusLabel: string;
  tagline: string;
  desc: string;
  desc2?: string;
  metaStack: string[];
  stack: string[];
  detailImage?: string;
  siteHref?: string;
  githubHref?: string;
  highlights: { label: string; value: string }[];
  pageDesc: string;
  challenges: { title: string; body: string }[];
};

const projects: Project[] = [
  {
    id: 0,
    slug: "piri",
    image: "/piri-project.webp",
    alt: "PIRI Antigüedades — pantalla del sitio",
    cat: "E-Commerce",
    year: "2024",
    title: "PIRI Antigüedades",
    status: "real",
    statusLabel: "Operación real",
    tagline: "E-commerce de alto volumen sincronizado con Mercado Libre.",
    desc: "E-commerce de antigüedades con catálogo sincronizado desde Mercado Libre, pagos con Stripe y cotización automática de envíos. Operación real de alto volumen.",
    metaStack: ["Next.js", "Supabase", "Stripe", "Vercel"],
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Mercado Libre API", "Vercel", "+50,000 ventas/mes", "+4000 artículos"],
    detailImage: "/piri-detalle.png",
    siteHref: "https://piriantiguedades.com",
    highlights: [
      { label: "Ventas / mes", value: "+50,000" },
      { label: "Artículos", value: "+4,000" },
      { label: "Integraciones", value: "3" },
    ],
    pageDesc: "PIRI Antigüedades es una operación de e-commerce real que vende antigüedades y objetos de colección. El reto principal fue construir un sistema que mantuviera sincronizado el inventario entre el sitio propio y Mercado Libre en tiempo real, sin discrepancias de stock.",
    challenges: [
      {
        title: "Sincronización de inventario en tiempo real",
        body: "Diseñé un sistema de webhooks que escucha eventos de Mercado Libre y actualiza el inventario en Supabase de forma instantánea. Cualquier venta en ML descuenta el stock en el sitio propio en menos de 2 segundos.",
      },
      {
        title: "Cotización automática de envíos",
        body: "Integré la API de paquetería para calcular el costo de envío dinámicamente en checkout según el destino y el peso del pedido, eliminando el trabajo manual de cotizar cada orden.",
      },
      {
        title: "Pagos con Stripe",
        body: "Implementé el flujo completo de pagos con Stripe Checkout: creación de sesión, webhooks de confirmación, manejo de errores y reembolsos desde el dashboard administrativo.",
      },
    ],
  },
  {
    id: 1,
    slug: "rankeo",
    image: "/rankeo-project.webp",
    alt: "Rankeo — pantalla del sitio",
    cat: "SaaS · Deportivo",
    year: "2025",
    title: "Rankeo",
    status: "real",
    statusLabel: "Operación real",
    tagline: "Plataforma SaaS para torneos y ligas de pádel.",
    desc: "SaaS para torneos y ligas de pádel: brackets automáticos, ligas con niveles dinámicos, dashboard administrativo y perfiles reclamables vía magic link.",
    desc2: "Con la visión de convertirse en un producto líder dentro del nicho de pádel.",
    metaStack: ["Next.js", "Supabase", "Stripe", "Vercel"],
    stack: ["Next.js", "Supabase", "Stripe", "Vercel", "Lanzamiento comercial"],
    detailImage: "/rankeo-detalle.png",
    siteHref: "https://rankeo.com.mx/para-clubes",
    highlights: [
      { label: "Tipo", value: "SaaS" },
      { label: "Nicho", value: "Pádel" },
      { label: "Estado", value: "Lanzamiento" },
    ],
    pageDesc: "Rankeo es una plataforma SaaS orientada a clubes y organizadores de pádel. Permite crear torneos con brackets automáticos, gestionar ligas con sistemas de niveles dinámicos y ofrecer a los jugadores perfiles públicos que pueden reclamar con un magic link.",
    challenges: [
      {
        title: "Brackets automáticos con lógica de torneo",
        body: "Desarrollé un algoritmo que genera automáticamente los enfrentamientos de torneo según el formato elegido (eliminación directa, round robin, grupos). El sistema resuelve empates, bye automáticos y avance de rondas sin intervención del organizador.",
      },
      {
        title: "Sistema de niveles dinámicos",
        body: "Las ligas ajustan automáticamente el nivel de cada jugador según sus resultados acumulados. Diseñé la lógica de puntuación y el sistema de ascensos/descensos para mantener partidos competitivos.",
      },
      {
        title: "Perfiles reclamables vía magic link",
        body: "Los organizadores pueden importar participantes por nombre. Cuando un jugador quiere reclamar su perfil, recibe un magic link por email que lo autentica sin contraseña y vincula toda su historial de resultados.",
      },
    ],
  },
  {
    id: 2,
    slug: "dashboard-bi",
    image: "/bi.webp",
    alt: "Puebla Spending Intelligence Dashboard",
    cat: "Data Analytics",
    year: "2024",
    title: "Puebla Spending Intelligence",
    status: "study",
    statusLabel: "Académico",
    tagline: "Análisis de gasto público con IA y visualización interactiva.",
    desc: "Dashboard para analizar patrones de gasto público en Puebla con visualización interactiva e inteligencia artificial.",
    desc2: "Transformé más de 13,700 registros procesados a partir de aproximadamente 63 MB de datos crudos, generando datasets limpios para análisis presupuestal, municipal y social.",
    metaStack: ["Python", "Streamlit", "OpenAI", "PostgreSQL"],
    stack: ["Python", "Streamlit", "OpenAI", "PostgreSQL"],
    githubHref: "https://github.com/Tiagogoco/Dashboard-BI",
    highlights: [
      { label: "Registros", value: "+13,700" },
      { label: "Datos crudos", value: "63 MB" },
      { label: "Modelos IA", value: "OpenAI" },
    ],
    pageDesc: "Proyecto académico de análisis de datos públicos del estado de Puebla. Partí de ~63 MB de datos gubernamentales en bruto, los procesé con Python para generar datasets limpios y construí un dashboard interactivo con Streamlit que permite explorar el gasto por municipio, área y período.",
    challenges: [
      {
        title: "Limpieza y normalización de datos gubernamentales",
        body: "Los datos públicos llegaban con inconsistencias de formato, valores nulos y codificaciones distintas entre años. Desarrollé un pipeline de limpieza en pandas que estandarizó más de 13,700 registros y redujo el ruido de datos a menos del 2%.",
      },
      {
        title: "Análisis con inteligencia artificial",
        body: "Integré la API de OpenAI para permitir preguntas en lenguaje natural sobre el dataset. El usuario puede preguntar '¿cuál municipio gasta más en infraestructura?' y el sistema genera la consulta SQL, ejecuta y resume los resultados.",
      },
      {
        title: "Visualización interactiva",
        body: "Construí con Streamlit dashboards con filtros dinámicos por año, municipio y categoría de gasto. Incluye gráficas de series de tiempo, mapas de calor y tablas comparativas exportables.",
      },
    ],
  },
];

export default projects;
