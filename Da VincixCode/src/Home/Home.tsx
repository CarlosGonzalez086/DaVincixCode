import AssetHome from "../assets/AssetHome.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-bg p-5">
      <h1 className="alata-bold text-center home-title animate__animated animate__fadeInDown">
        Da VincixCode
      </h1>
      <div className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="home-content-container d-flex justify-content-center align-items-center gap-5 p-5">
          <div className="home-text-section text-center animate__animated animate__fadeInLeft">
            <h1 className="alata-regular home-main-heading">
              Revolutionize Your Software Experience
            </h1>
            <h2 className="alata-small mt-4 home-main-subheading">
              Adéntrate en el futuro de la tecnología con nuestras
              revolucionarias soluciones de software, diseñadas para transformar
              tu negocio en un líder de vanguardia. Bienvenido a un mundo en el
              que la innovación se une a un rendimiento sin igual, abriéndote
              nuevas posibilidades.
            </h2>
          </div>
          <img
            src={AssetHome}
            alt="Home Asset"
            className="responsive-img home-main-img animate__animated animate__fadeInRight"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
