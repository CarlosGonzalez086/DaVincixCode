import ERPLogo from "../assets/erplogo.webp";
import PuntoVentaLogo from "../assets/PosLogo.webp";
import MasServicios from "../assets/soluatumedidaLogo.webp";
import "./HomeServicios.css";

const HomeServicios = () => {
  return (
    <section className="servicios-bg">
      <div className="servicios-wrapper">
        <header className="servicios-header animate__animated animate__fadeInDown">
          <h1 className="servicios-title">Discover our services</h1>
          <p className="servicios-subtitle">
            Software diseñado para crecer contigo
          </p>
        </header>

        <div className="row servicios-grid">
          {/* ERP */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <article className="servicio-card animate__animated animate__fadeInUp">
              <img src={ERPLogo} alt="ERP System" />
              <h3>ERP Empresarial</h3>
              <p>
                Centraliza ventas, compras, inventario, contabilidad y nómina
                en una sola plataforma. Información en tiempo real, menos
                errores y decisiones más rápidas para escalar tu negocio con
                total control.
              </p>
            </article>
          </div>

          {/* POS */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <article className="servicio-card animate__animated animate__fadeInUp animate__delay-1s">
              <img src={PuntoVentaLogo} alt="Point of Sale" />
              <h3>Punto de Venta (POS)</h3>
              <p>
                Cobra en segundos, controla inventario y gestiona pagos sin
                fricción. Un POS rápido, intuitivo y confiable que mejora la
                experiencia del cliente y la eficiencia de tu equipo.
              </p>
            </article>
          </div>

          {/* Más servicios */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <article className="servicio-card animate__animated animate__fadeInUp animate__delay-2s">
              <img src={MasServicios} alt="More Services" />
              <h3>Soluciones a tu medida</h3>
              <p>
                Delivery, reportes móviles, facturación electrónica,
                fidelización de clientes, producción y más. Agrega solo lo que
                necesitas, cuando lo necesitas. Todo en un solo ecosistema.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicios;
