"use client";

import { useEffect, useRef } from "react";

export default function AISection() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = document.querySelector<HTMLVideoElement>("#ia video");
    if (v) {
      const go = () => { const p = v.play(); if (p) p.catch(() => {}); };
      go();
      v.addEventListener("canplay", go, { once: true });
      document.addEventListener("visibilitychange", () => { if (!document.hidden) go(); });
      (["pointerdown", "touchstart", "keydown"] as const).forEach((ev) =>
        window.addEventListener(ev, go, { once: true, passive: true })
      );
    }

    const wrap = orbRef.current;
    if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 22;
      ty = (e.clientY / window.innerHeight - 0.5) * 16;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let rafId: number;
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      wrap.style.transform = `translate(${cx}px, ${cy}px)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="block" id="ia">
      <div className="wrap">
        <div className="ia-head">
          <div className="rv">
            <div className="ia-kicker"><span className="num">03</span> / IA aplicada</div>
            <h2 className="ia-title">IA como <em>ventaja</em><br />de trabajo.</h2>
          </div>
          <div className="ia-intro rv d1">
            <span className="info" aria-hidden="true">i</span>
            <span>Integro IA en el flujo sin delegar el criterio técnico.</span>
          </div>
        </div>

        <div className="ia-stage rv d1">
          <div className="orb-wrap" id="orbWrap" ref={orbRef}>
            <div className="orb-glow"></div>
            <div className="orbit b"></div>
            <div className="orbit">
              <span className="pill" style={{ left: "50%", top: "0%" }}>LLM reasoning</span>
              <span className="pill" style={{ left: "97.5%", top: "34.5%" }}>Research assistant</span>
              <span className="pill" style={{ left: "79.4%", top: "90.5%" }}>Visual generation</span>
              <span className="pill" style={{ left: "20.6%", top: "90.5%" }}>AI IDE</span>
              <span className="pill" style={{ left: "2.5%", top: "34.5%" }}>Code agents</span>
            </div>
            <div className="orb-video-mask">
              <video autoPlay loop muted playsInline preload="auto" poster="/ball.webp">
                <source src="/ai-orb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="orb-floor"></div>
          </div>
        </div>

        <div className="ia-grid">
          <article className="ia-card rv">
            <div className="ia-card-top">
              <div className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /><path d="m14.5 4-5 16" />
                </svg>
              </div>
              <span className="no">01</span>
            </div>
            <h3>Construir y refinar código</h3>
            <p>La uso para analizar código existente, planear estructuradamente e implementar cambios quirúrgicos, depurar errores y mejorar componentes.</p>
          </article>

          <article className="ia-card rv d1">
            <div className="ia-card-top">
              <div className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5V5.8A2.8 2.8 0 0 1 6.8 3h10.4A2.8 2.8 0 0 1 20 5.8v13.7" />
                  <path d="M8 8h8" /><path d="M8 12h6" /><path d="M4 19.5h16" />
                </svg>
              </div>
              <span className="no">02</span>
            </div>
            <h3>Validar producto más rápido</h3>
            <p>Sé utilizarla para estructurar ideas, revisar flujos, documentar decisiones y convertir requerimientos ambiguos en procesos concretos.</p>
          </article>

          <article className="ia-card rv d2">
            <div className="ia-card-top">
              <div className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 16.5 8.5 11l4 4L21 6.5" /><path d="M4 21h16" /><path d="M7 4h10" />
                </svg>
              </div>
              <span className="no">03</span>
            </div>
            <h3>Producir assets y demos</h3>
            <p>Muy familiarizado con la generación de imágenes, mockups, video y material visual para comunicar propuestas, probar conceptos y presentar avances con claridad.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
