const techCategories = [
  { title: "Frontend", chips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", chips: ["Node.js", "Express", "REST APIs", "Webhooks", "WebSockets", "Auth Systems"] },
  { title: "Bases de datos", chips: ["PostgreSQL", "Supabase", "Prisma", "MongoDB", "Row-Level Security"] },
  { title: "Despliegue", chips: ["Vercel", "Supabase Hosting", "Docker", "CI / CD"] },
  { title: "Diseño de producto", chips: ["Figma", "UI Design", "UX", "Design Systems", "Prototipado"] },
  { title: "Experiencia adicional", chips: ["Stripe", "Mercado Libre API", "Vitest", "API Design", "Microservices", "Software Architecture"] },
];

const techLogos = [
  "nextdotjs", "react", "typescript", "tailwindcss", "nodedotjs",
  "express", "postgresql", "supabase", "mongodb", "stripe",
  "vercel", "docker", "vitest", "git",
];

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <div className="sec-kicker"><span className="num">04</span> / Tecnologías & Educación</div>
            <div className="sec-title">Stack & formación</div>
          </div>
          <p className="sec-note rv d1">Las herramientas con las que construyo, organizadas por área.</p>
        </div>

        <div className="tech-marquee" aria-label="Tecnologías que utilizo">
          <div className="tech-track">
            {[...techLogos, ...techLogos].map((slug, i) => (
              <img
                key={i}
                src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                alt={i < techLogos.length ? slug : ""}
                aria-hidden={i >= techLogos.length ? true : undefined}
                height={33}
              />
            ))}
          </div>
        </div>

        <div className="tech-grid rv">
          {techCategories.map((cat) => (
            <div key={cat.title} className="tech-cat">
              <h3>{cat.title}</h3>
              <div className="chips">
                {cat.chips.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="edu-v2 rv">
          <div className="edu-v2-head">
            <h3 className="edu-v2-title">Educación</h3>
            <div className="edu-v2-tag">// Formación</div>
          </div>
          <div className="edu-cards">
            <article className="edu-card edu-card--accent">
              <div className="edu-card-top-bar"></div>
              <div className="edu-card-header">
                <span className="edu-badge edu-badge--accent">2022 — presente</span>
                <div className="edu-icon edu-icon--accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
              </div>
              <div className="edu-card-body">
                <h4>Ing. en Tecnologías de la Información</h4>
                <p>Benemérita Universidad Autónoma de Puebla (BUAP) · 8vo semestre · egreso aproximado en 2027.</p>
              </div>
              <div className="edu-progress">
                <div className="edu-progress-labels">
                  <span className="edu-progress-label">Avance</span>
                  <span className="edu-progress-meta">8 / 10 SEM.</span>
                </div>
                <div className="edu-progress-bar">
                  <div className="edu-progress-fill" style={{ width: "80%" }}></div>
                </div>
              </div>
            </article>

            <article className="edu-card edu-card--ice">
              <div className="edu-card-top-bar"></div>
              <div className="edu-card-header">
                <span className="edu-badge edu-badge--ice">B2 · Técnico</span>
                <div className="edu-icon edu-icon--ice">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
              <div className="edu-card-body">
                <h4>Inglés</h4>
                <p>Nivel B2. Capaz de sostener conversaciones técnicas y trabajar con documentación en inglés sin fricción.</p>
              </div>
            </article>

            <article className="edu-card edu-card--muted">
              <div className="edu-card-top-bar"></div>
              <div className="edu-card-header">
                <span className="edu-badge edu-badge--muted">Siempre</span>
                <div className="edu-icon edu-icon--muted">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                  </svg>
                </div>
              </div>
              <div className="edu-card-body">
                <h4>Autodidacta</h4>
                <p>Aprendizaje continuo construyendo productos reales: diseño, arquitectura, integraciones y despliegue.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
