import ContactForm from "./ContactForm";

const HomeContact = () => {
  return (
    <div className="home-servicios-bg p-5">
      <h1 className="alata-bold text-center home-title animate__animated animate__fadeInDown">
        Contact Us
      </h1>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="contact-card animate__animated animate__fadeInUp p-4 w-50">
          <h2 className="alata-small">
            ¿Tienes preguntas o deseas obtener más información sobre nuestros <br />
            servicios? ¡Ponte en contacto con nosotros! Estamos aquí para <br />
            ayudarte con soluciones de software personalizadas que se adapten a <br />
            las necesidades específicas de tu negocio. Contáctanos hoy mismo y <br />
            comencemos a construir el futuro juntos.
          </h2>
        </div>
        <div className="contact-card animate__animated animate__fadeInUp p-4 w-50">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
