"use client";

import { useEffect, useState } from "react"; // useState still used for active
import Image from "next/image";
import Link from "next/link";
import projects from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const getState = (idx: number) => {
    const diff = (idx - active + total) % total;
    if (diff === 0) return "active";
    if (diff === 1) return "behind-1";
    if (diff === 2) return "behind-2";
    return "hidden";
  };

  const goTo = (idx: number) => {
    setActive(((idx % total) + total) % total);
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
        if (entries[0].isIntersecting) { stickyNote.classList.add("in"); obs.disconnect(); }
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

  const p = projects[active];

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
        </div>

        <div className="proj-layout rv d1">
          {/* ── Metadata panel (desktop only) ── */}
          <div className="proj-meta" key={active}>
            <div className="proj-meta-num">{String(active + 1).padStart(2, "0")}</div>
            <div className="proj-meta-cat">{p.cat}</div>
            <h3 className="proj-meta-title">{p.title}</h3>
            <p className="proj-meta-tagline">{p.tagline}</p>
            <div className="proj-meta-stack">
              {p.metaStack.map((s) => (
                <span key={s} className="proj-meta-chip">{s}</span>
              ))}
            </div>
            <div className="proj-meta-highlights">
              {p.highlights.map((h) => (
                <div key={h.label} className="proj-meta-stat">
                  <span className="proj-meta-stat-val">{h.value}</span>
                  <span className="proj-meta-stat-label">{h.label}</span>
                </div>
              ))}
            </div>
            <div className="proj-meta-actions">
              <Link href={`/proyectos/${p.slug}`} className="proj-meta-cta-primary">
                Ver proyecto
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
              {p.siteHref && (
                <a href={p.siteHref} target="_blank" rel="noopener" className="proj-meta-cta-ghost">
                  Ver sitio
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" /><path d="m10 14 11-11" />
                  </svg>
                </a>
              )}
              {p.githubHref && (
                <a href={p.githubHref} target="_blank" rel="noopener" className="proj-meta-cta-ghost">
                  Repositorio
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M12 .5C5.4.5 0 5.9 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* ── Cards + controls ── */}
          <div className="proj-stage-col">
            <div className="proj-stage" id="projStage" aria-label="Carrusel de proyectos">
              {projects.map((proj) => {
                const state = getState(proj.id);
                return (
                  <div
                    key={proj.id}
                    className="proj-card-wrap"
                    data-index={proj.id}
                    data-state={state}
                    role="article"
                    aria-label={proj.title}
                  >
                    <div className="proj-card">
                      <div className="proj-face proj-face-front">
                        <Image src={proj.image} alt={proj.alt} width={1200} height={900} loading="lazy" />
                        <div className="proj-face-front-overlay"></div>
                        <div className="proj-face-front-label">
                          <div className="proj-face-front-cat">{proj.cat}</div>
                          <div className="proj-face-front-title">{proj.title}</div>
                        </div>
                        <Link href={`/proyectos/${proj.slug}`} className="proj-card-cta" aria-label={`Ver proyecto ${proj.title}`}>
                          Ver proyecto
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="proj-controls">
              <button className="proj-arrow" aria-label="Proyecto anterior" onClick={() => goTo(active - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="proj-dots" role="tablist" aria-label="Seleccionar proyecto">
                {projects.map((proj, i) => (
                  <button
                    key={proj.id}
                    className={`proj-dot${i === active ? " active" : ""}`}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Proyecto ${i + 1}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <button className="proj-arrow" aria-label="Siguiente proyecto" onClick={() => goTo(active + 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
