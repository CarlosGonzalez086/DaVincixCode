import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="home-about-bg p-2">
      <h1 className="alata-bold text-center home-title animate__animated animate__fadeInDown">
        Our brand vision
      </h1>
      <div className="d-flex justify-content-start align-items-center gap-5 mt-5 p-5">
        <div className="servicio-card animate__animated animate__fadeInLeft align-items-center text-center">
          <h2 className="alata-small mt-4 servicio-desc">
            En DaVincixCode, nos comprometemos a transformar los negocios a
            través de soluciones de software innovadoras. <br /> Nuestra visión es
            empoderar a empresas de todos los tamaños para optimizar sus
            operaciones, mejorar la productividad y lograr un crecimiento
            sostenible. <br /> Creemos en el poder de la tecnología para simplificar
            procesos complejos y proporcionar información en tiempo real que
            impulse la toma de decisiones informadas. <br /> Nuestro objetivo es ser un
            socio de confianza para nuestros clientes, ofreciendo soluciones
            personalizadas que satisfagan sus necesidades únicas y les ayuden a
            prosperar en un mercado competitivo.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
