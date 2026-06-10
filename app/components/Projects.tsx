"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 0,
    image: "/piri-project.webp",
    alt: "PIRI Antigüedades — pantalla del sitio",
    cat: "E-Commerce",
    title: "PIRI Antigüedades",
    status: "real",
    statusLabel: "Operación real",
    desc: "E-commerce de antigüedades con catálogo sincronizado desde Mercado Libre, pagos con Stripe y cotización automática de envíos. Operación real de alto volumen.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Mercado Libre API", "Vercel", "+50,000 ventas/mes", "+4000 artículos"],
    cta: { href: "https://piriantiguedades.com", label: "Ver sitio", isGithub: false },
  },
  {
    id: 1,
    image: "/rankeo-project.webp",
    alt: "Rankeo — pantalla del sitio",
    cat: "SaaS · Deportivo",
    title: "Rankeo",
    status: "real",
    statusLabel: "Operación real",
    desc: "SaaS para torneos y ligas de pádel: brackets automáticos, ligas con niveles dinámicos, dashboard administrativo y perfiles reclamables vía magic link.",
    desc2: "Con la visión de convertirse en un producto líder dentro del nicho de pádel.",
    stack: ["Next.js", "Supabase", "Stripe", "Vercel", "Lanzamiento comercial"],
    cta: { href: "https://rankeo.com.mx/para-clubes", label: "Ver sitio", isGithub: false },
  },
  {
    id: 2,
    image: "/bi.webp",
    alt: "Puebla Spending Intelligence Dashboard",
    cat: "Data Analytics",
    title: "Puebla Spending Intelligence",
    status: "study",
    statusLabel: "Académico",
    desc: "Dashboard para analizar patrones de gasto público en Puebla con visualización interactiva e inteligencia artificial.",
    desc2: "Transformé más de 13,700 registros procesados a partir de aproximadamente 63 MB de datos crudos, generando datasets limpios para análisis presupuestal, municipal y social.",
    stack: ["Python", "Streamlit", "OpenAI", "PostgreSQL"],
    cta: { href: "https://github.com/Tiagogoco/Dashboard-BI", label: "Repositorio", isGithub: true },
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);
  const total = projects.length;

  const getState = (idx: number) => {
    const diff = (idx - active + total) % total;
    if (diff === 0) return "active";
    if (diff === 1) return "behind-1";
    if (diff === 2) return "behind-2";
    return "hidden";
  };

  const goTo = (idx: number) => {
    setFlipped(null);
    setActive(((idx % total) + total) % total);
  };

  const handleCardClick = (idx: number, e: React.MouseEvent) => {
    if (getState(idx) !== "active") return;
    if ((e.target as HTMLElement).closest("a, .proj-back-close")) return;
    setFlipped((f) => (f === idx ? null : idx));
  };

  useEffect(() => {
    const section = document.getElementById("proyectos");
    if (!section) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
    };
    section.addEventListener("keydown", onKey);
    return () => section.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    const stickyNote = document.querySelector(".proj-sticky-note");
    if (!stickyNote) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stickyNote.classList.add("in");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById("proyectos");
    if (section) obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const stage = document.getElementById("projStage");
    if (!stage) return;
    let touchX: number | null = null;
    const onStart = (e: TouchEvent) => { touchX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 44) dx < 0 ? goTo(active + 1) : goTo(active - 1);
      touchX = null;
    };
    stage.addEventListener("touchstart", onStart, { passive: true });
    stage.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      stage.removeEventListener("touchstart", onStart);
      stage.removeEventListener("touchend", onEnd);
    };
  }, [active]);

  return (
    <section id="proyectos" className="block">
      <div className="wrap">
        <div className="sec-head" style={{ position: "relative" }}>
          <div className="rv">
            <div className="sec-kicker"><span className="num">01</span> / Trabajo seleccionado</div>
            <div className="sec-title">Proyectos</div>
          </div>
          <p className="sec-note rv d1">
            <strong>Productos que he construido de punta a punta:</strong> un e-commerce real conectado a Mercado Libre para una operación de alto volumen, un SaaS de pádel rumbo a lanzamiento comercial y un dashboard de análisis público. En cada uno trabajé diseño de producto, frontend, backend, bases de datos, integraciones y despliegue.
          </p>
          <div className="proj-sticky-note" aria-hidden="true">
            TOCA LAS<br />CARTAS PARA<br />VER DETALLES
          </div>
        </div>

        <div className="proj-stage-wrap rv d1">
          <div className="proj-stage" id="projStage" aria-label="Carrusel de proyectos">
            {projects.map((p) => {
              const state = getState(p.id);
              const isFlipped = flipped === p.id;
              return (
                <div
                  key={p.id}
                  className={`proj-card-wrap${isFlipped ? " is-flipped" : ""}`}
                  data-index={p.id}
                  data-state={state}
                  role="article"
                  aria-label={p.title}
                  onClick={(e) => handleCardClick(p.id, e)}
                >
                  <div className="proj-card">
                    <div className="proj-face proj-face-front">
                      <Image src={p.image} alt={p.alt} width={1200} height={900} loading="lazy" />
                      <div className="proj-face-front-overlay"></div>
                      <div className="proj-face-front-label">
                        <div className="proj-face-front-cat">{p.cat}</div>
                        <div className="proj-face-front-title">{p.title}</div>
                      </div>
                      <div className="proj-flip-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                        </svg>
                        Voltear
                      </div>
                    </div>
                    <div className="proj-face proj-face-back">
                      <div className="proj-back-top">
                        <div className="proj-back-cat-wrap">
                          <span className="proj-back-cat">{p.cat}</span>
                          <span className={`proj-back-status ${p.status}`}>{p.statusLabel}</span>
                        </div>
                        <button
                          className="proj-back-close"
                          aria-label="Cerrar detalle"
                          tabIndex={-1}
                          onClick={(e) => { e.stopPropagation(); setFlipped(null); }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="proj-back-title">{p.title}</div>
                      <p className="proj-back-desc">{p.desc}</p>
                      {"desc2" in p && p.desc2 && <p className="proj-back-desc">{p.desc2}</p>}
                      <div className="proj-back-stack-label">Stack técnico</div>
                      <div className="proj-back-chips">
                        {p.stack.map((s) => <span key={s} className="proj-back-chip">{s}</span>)}
                      </div>
                      <a href={p.cta.href} target="_blank" rel="noopener" className="proj-back-cta">
                        {p.cta.isGithub && (
                          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                            <path d="M12 .5C5.4.5 0 5.9 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" />
                          </svg>
                        )}
                        {p.cta.label}
                        {!p.cta.isGithub && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="proj-controls">
            <button className="proj-arrow" id="projPrev" aria-label="Proyecto anterior" onClick={() => goTo(active - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="proj-dots" id="projDots" role="tablist" aria-label="Seleccionar proyecto">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  className={`proj-dot${i === active ? " active" : ""}`}
                  data-dot={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Proyecto ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="proj-arrow" id="projNext" aria-label="Siguiente proyecto" onClick={() => goTo(active + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
