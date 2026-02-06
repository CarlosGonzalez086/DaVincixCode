import ContactForm from "./ContactForm";
import "./HomeContact.css";

const HomeContact = () => {
  return (
    <section className="contact-bg">
      <div className="contact-wrapper">
        <header className="contact-header animate__animated animate__fadeInDown">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Hablemos de tu próximo gran proyecto
          </p>
        </header>

        <div className="row align-items-center contact-content">
          {/* Texto */}
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="contact-text animate__animated animate__fadeInLeft">
              <h2>
                ¿Listo para llevar tu negocio al siguiente nivel?
              </h2>
              <p>
                Escríbenos y descubre cómo nuestras soluciones de software
                pueden ayudarte a optimizar procesos, escalar operaciones y
                construir experiencias digitales memorables.
              </p>
              <p className="contact-highlight">
                Creamos tecnología clara, eficiente y hecha a tu medida.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-6 col-md-6 col-sm-12 ms-auto">
            <div className="contact-form-container animate__animated animate__fadeInUp">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
