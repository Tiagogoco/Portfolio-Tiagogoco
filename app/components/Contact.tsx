export default function Contact() {
  return (
    <section className="block" id="contacto">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "48px" }}>
          <div className="rv">
            <div className="sec-kicker"><span className="num">05</span> / Contacto</div>
          </div>
        </div>
        <div className="contact-card rv">
          <div className="aura"></div>
          <div className="aura b"></div>
          <div className="contact-inner">
            <div className="contact-eyebrow">¿Construimos algo?</div>
            <h2>Hablemos de tu <em>próximo</em> producto.</h2>
            <p>Disponible para proyectos fullstack, productos SaaS y e-commerce. Respondo rápido — cuéntame qué tienes en mente.</p>
            <div className="contact-actions">
              <a href="mailto:tiagogocor@gmail.com" className="mail-btn">
                tiagogocor@gmail.com <span>→</span>
              </a>
              <div className="socials">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
