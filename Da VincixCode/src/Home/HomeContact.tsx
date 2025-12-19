import ContactForm from "./ContactForm";
import "./HomeServicios.css";

const HomeContact = () => {
  return (
    <div className="home-servicios-bg p-2 w-100">
      <h1 className="alata-bold text-center home-title animate__animated animate__fadeInDown">
        Contact Us
      </h1>

      <div className="mt-5 w-100">
        <div className="row w-100 align-items-center">
          {/* COLUMNA TEXTO */}
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="h-100 d-flex align-items-center">
              <h2 className="alata-small m-0">
                ¿Tienes preguntas o deseas obtener más información sobre
                nuestros servicios? ¡Ponte en contacto con nosotros! <br />
                Estamos aquí para ayudarte con soluciones de software
                personalizadas que se adapten a las necesidades específicas de
                tu negocio. <br />
                Contáctanos hoy mismo y comencemos a construir el futuro juntos.
              </h2>
            </div>
          </div>

          {/* COLUMNA FORM — PEGADA A LA DERECHA */}
          <div className="col-lg-5 col-md-6 col-sm-12 ms-auto">
            <div className="d-flex justify-content-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
