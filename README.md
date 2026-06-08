# Portfolio Tiagogoco

Portafolio personal de Tiago Goco, Product Engineer enfocado en productos
fullstack, SaaS, e-commerce, diseño de producto e integración de IA en flujos
de desarrollo.

El sitio está construido como una página estática en HTML, CSS y JavaScript,
con assets optimizados para desplegarse directamente en Vercel.

## Vista General

El portafolio presenta:

- Hero visual con video de fondo.
- Proyectos seleccionados:
  - PIRI Antigüedades, e-commerce conectado a Mercado Libre, Stripe y Vercel.
  - Rankeo, SaaS para torneos y ligas de pádel.
  - Puebla Spending Intelligence, dashboard de análisis de gasto público.
- Sección personal sobre experiencia, enfoque de producto y formación.
- Sección de IA aplicada.
- Stack técnico y educación.
- Información de contacto y enlaces profesionales.

## Estructura

```txt
.
├── Portafolio.html
├── assets/
│   ├── ai-orb.mp4
│   ├── hero-loop.mp4
│   ├── *.webp
│   └── favicons optimizados
└── README.md
```

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- WebP para imágenes optimizadas
- MP4 para video de fondo y animaciones visuales
- Vercel para despliegue

## Cómo Ejecutarlo Localmente

Puedes abrir `Portafolio.html` directamente en el navegador.

También puedes servirlo con un servidor local:

```bash
python3 -m http.server 4173
```

Luego abre:

```txt
http://localhost:4173/Portafolio.html
```

## Despliegue en Vercel

Este proyecto no requiere build ni dependencias.

Configuración recomendada en Vercel:

- Framework Preset: `Other`
- Build Command: dejar vacío
- Output Directory: dejar vacío o usar la raíz del proyecto
- Install Command: dejar vacío

Después de conectar el repositorio, Vercel servirá el HTML y los assets
directamente desde la raíz.

## Optimización de Assets

Las imágenes principales están servidas en formato WebP y los favicons fueron
generados en tamaños adecuados para web:

- `assets/logo.webp`
- `assets/bg-stars.webp`
- `assets/rocket-hero.webp`
- `assets/retrato.webp`
- `assets/bi.webp`
- `assets/ball.webp`
- `assets/favicon-32.png`
- `assets/apple-touch-icon.png`

Los archivos fuente o respaldos locales no utilizados por el HTML están
excluidos del repositorio mediante `.gitignore`.

## Autor

Tiago Goco

- GitHub: [@Tiagogoco](https://github.com/Tiagogoco)
- LinkedIn: [tiago-gomez-dev](https://www.linkedin.com/in/tiago-gomez-dev/)
