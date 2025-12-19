import ERPLogo from "../assets/ERP.jpg";
import PuntoVentaLogo from "../assets/PuntoVenta.jpg";
import MasSericios from "../assets/MasServiciosLogo.jpg";
import "./HomeServicios.css";

const HomeServicios = () => {
  return (
    <div className="home-servicios-bg p-2">
      <div className="align-items-center">
        <h1 className="alata-regular text-center mt-1 animate__animated animate__fadeInDown">
          Discover our services
        </h1>
        <div className="d-flex justify-content-start align-items-center p-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 p-3 d-flex">
              <div className="servicio-card animate__animated animate__fadeInLeft align-items-center text-center">
                <img
                  src={ERPLogo}
                  alt="ERP Logo"
                  className="responsive-img servicio-img"
                />
                <h2 className="alata-small mt-4 servicio-desc">
                  Un ERP (Sistema de Planificación de Recursos Empresariales) es
                  una solución integral que conecta y automatiza todas las áreas
                  de tu negocio —ventas, compras, inventario, contabilidad,
                  nómina y producción— en una sola plataforma, eliminando
                  duplicidades, errores y el uso excesivo de Excel, para que
                  tengas información en tiempo real, tomes decisiones más
                  rápidas y ágiles, y hagas crecer tu empresa con control total,
                  eficiencia y simplicidad.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3 d-flex">
              <div className="servicio-card animate__animated animate__fadeInRight align-items-center text-center">
                <img
                  src={PuntoVentaLogo}
                  alt="Punto de Venta Logo"
                  className="responsive-img servicio-img"
                />
                <h2 className="alata-small mt-4 servicio-desc">
                  Un sistema de punto de venta (POS) es una solución tecnológica
                  que facilita y agiliza las transacciones comerciales en
                  tiendas físicas. Permite registrar ventas, gestionar
                  inventarios, procesar pagos y generar recibos de manera rápida
                  y eficiente. Con un POS, los negocios pueden mejorar la
                  experiencia del cliente, optimizar la gestión de productos y
                  obtener informes detallados para tomar decisiones informadas y
                  hacer crecer su negocio.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 p-3 d-flex">
              <div className="servicio-card animate__animated animate__fadeInUp align-items-center text-center">
                <img
                  src={MasSericios}
                  alt="Más Servicios Logo"
                  className="responsive-img servicio-img"
                />
                <h2 className="alata-small mt-4 servicio-desc">
                  "Tu negocio, como tú lo necesitas." Tengo caja rápida (POS)
                  para cobrar en segundos, control total (ERP) para que nada se
                  escape, delivery para enviar pedidos sin errores, reportes en
                  tu celular para ver cómo va todo desde cualquier lado… Y si
                  necesitas algo más —facturas electrónicas, clientes fieles,
                  turnos, producción, lo que sea— lo agregamos sin
                  complicaciones. Todo en un solo lugar. Simple. Hecho para ti.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicios;
