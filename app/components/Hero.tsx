export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/rocket-hero.webp"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="vignette"></div>
      </div>
      <div className="wrap hero-content">
        <div className="hero-grid">
          <div className="hero-lead">
            <div className="eyebrow rv in">
              <span className="dot"></span><span className="ln"></span>Portafolio · 2026
            </div>
            <h1 className="title rv in d1">TIAGO<span className="l2">GOCO</span></h1>
            <div className="hero-tag rv in d2">
              <div className="role"><em>Product</em> Engineer</div>
              <div className="sep"></div>
              <div className="role" style={{ color: "var(--muted)", fontSize: "clamp(15px, 1.8vw, 19px)" }}>
                Full Stack · Product Design · TypeScript
              </div>
            </div>
          </div>
          <div className="hero-cta-col rv in d3">
            <a href="#proyectos" className="bigbtn btn-spatial">
              <span className="bb-label">Ver proyectos</span>
              <span className="arr-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
            <a href="#contacto" className="bigbtn btn-glass-dark">
              <span className="bb-label">Contacto</span>
              <span className="arr-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <a href="#sobre-mi" className="scroll-cue" id="scrollCue" aria-label="Bajar">
        Scroll
        <div className="rail"></div>
      </a>
      <div className="hero-social">
        <a href="https://github.com/Tiagogoco" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.4.5 0 5.9 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/tiago-gomez-dev/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
