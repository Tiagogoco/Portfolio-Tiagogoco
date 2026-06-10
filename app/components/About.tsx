import Image from "next/image";

export default function About() {
  return (
    <section className="block" id="sobre-mi">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <div className="sec-kicker"><span className="num">02</span> / Sobre mí</div>
            <div className="sec-title quien">Quién está <em>detrás</em></div>
          </div>
        </div>
        <div className="about">
          <div className="about-portrait rv">
            <div className="about-img-wrap">
              <Image
                src="/retrato.webp"
                alt="Tiago Goco"
                width={1086}
                height={1448}
                loading="eager"
              />
            </div>
          </div>
          <div className="about-body rv d1">
            <p>
              <strong>Soy Tiago, me gusta construir productos de software completos — desde la idea y el diseño hasta el despliegue en producción.</strong>{" "}
              Mi enfoque está en aplicaciones <span className="hl">SaaS</span>, plataformas internas para empresas y productos web modernos con TypeScript.
            </p>
            <p>
              Me interesa participar en todo el ciclo de vida de un producto: diseño de interfaz, frontend, backend, bases de datos y despliegue. Construyo soluciones creativas que{" "}
              <strong>solucionan problemas reales</strong> — calculadas, escalables y bien diseñadas.
            </p>
            <p>
              Me emociona trabajar en nuevos proyectos que exijan{" "}
              <span className="hl">creatividad y dedicación</span>.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="n">2</div>
                <div className="l">Productos activos <br />en producción</div>
              </div>
              <div className="stat">
                <div className="n">5<em>+</em></div>
                <div className="l">Áreas de <br />especialización</div>
              </div>
              <div className="stat">
                <div className="n">8<em>vo</em></div>
                <div className="l">Semestre, Ing. en TI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
