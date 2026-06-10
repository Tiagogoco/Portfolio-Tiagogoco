import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tiagogoco`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <main className="proj-page">
      {/* ── Back nav ── */}
      <nav className="proj-page-nav">
        <div className="wrap">
          <Link href="/#proyectos" className="proj-page-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Todos los proyectos
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="proj-page-hero">
        <div className="wrap">
          <div className="proj-page-eyebrow">
            <span className="proj-page-cat">{project.cat}</span>
            <span className={`proj-back-status ${project.status}`}>{project.statusLabel}</span>
            <span className="proj-page-year">{project.year}</span>
          </div>
          <h1 className="proj-page-title">{project.title}</h1>
          <p className="proj-page-tagline">{project.tagline}</p>
          <div className="proj-page-actions">
            {project.siteHref && (
              <a href={project.siteHref} target="_blank" rel="noopener" className="proj-meta-cta-primary">
                Ver sitio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" /><path d="m10 14 11-11" />
                </svg>
              </a>
            )}
            {project.githubHref && (
              <a href={project.githubHref} target="_blank" rel="noopener" className="proj-meta-cta-primary">
                Ver repositorio
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 .5C5.4.5 0 5.9 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Cover image ── */}
      <div className="proj-page-cover">
        <div className="wrap">
          <div className="proj-page-img-wrap">
            <Image
              src={project.detailImage ?? project.image}
              alt={project.alt}
              width={1200}
              height={900}
              priority
              className="proj-page-img"
            />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="wrap proj-page-body">
        <div className="proj-page-grid">
          {/* Left: description + challenges */}
          <div className="proj-page-main">
            <section className="proj-page-section">
              <h2 className="proj-page-section-title">El proyecto</h2>
              <p className="proj-page-text">{project.pageDesc}</p>
            </section>

            <section className="proj-page-section">
              <h2 className="proj-page-section-title">Retos técnicos</h2>
              <div className="proj-page-challenges">
                {project.challenges.map((c, i) => (
                  <div key={i} className="proj-page-challenge">
                    <div className="proj-page-challenge-num">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="proj-page-challenge-title">{c.title}</h3>
                      <p className="proj-page-challenge-body">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: sidebar */}
          <aside className="proj-page-aside">
            <div className="proj-page-aside-card">
              <h3 className="proj-page-aside-heading">Highlights</h3>
              {project.highlights.map((h) => (
                <div key={h.label} className="proj-page-aside-stat">
                  <span className="proj-page-aside-val">{h.value}</span>
                  <span className="proj-page-aside-label">{h.label}</span>
                </div>
              ))}
            </div>
            <div className="proj-page-aside-card">
              <h3 className="proj-page-aside-heading">Stack técnico</h3>
              <div className="proj-meta-stack">
                {project.stack.map((s) => (
                  <span key={s} className="proj-meta-chip">{s}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Project navigation ── */}
      <div className="wrap proj-page-footer-nav">
        <div className="proj-page-nav-links">
          {prev ? (
            <Link href={`/proyectos/${prev.slug}`} className="proj-page-nav-card">
              <span className="proj-page-nav-dir">← Anterior</span>
              <span className="proj-page-nav-name">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/proyectos/${next.slug}`} className="proj-page-nav-card proj-page-nav-card--right">
              <span className="proj-page-nav-dir">Siguiente →</span>
              <span className="proj-page-nav-name">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
