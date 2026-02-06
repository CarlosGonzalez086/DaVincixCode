import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="about-bg">
      <div className="about-wrapper">
        <header className="about-header animate__animated animate__fadeInDown">
          <h1 className="about-title">Our Brand Vision</h1>
          <p className="about-subtitle">
            Tecnología con propósito. Software con impacto.
          </p>
        </header>

        <div className="about-card animate__animated animate__fadeInUp">
          <p>
            En <strong>DaVincixCode</strong> transformamos negocios mediante
            soluciones de software modernas, intuitivas y escalables.
          </p>

          <p>
            Nuestra visión es empoderar a empresas de todos los tamaños para
            optimizar sus operaciones, aumentar su productividad y crecer de
            forma sostenible en un entorno digital en constante evolución.
          </p>

          <p>
            Creemos en la tecnología como una herramienta para simplificar lo
            complejo, ofrecer información en tiempo real y facilitar decisiones
            estratégicas con total confianza.
          </p>

          <p className="about-highlight">
            Más que proveedores, somos socios tecnológicos comprometidos con el
            éxito de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

