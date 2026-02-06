import AssetHome from "../assets/AssetHome.webp";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-bg">
      <div className="home-wrapper animate__animated animate__fadeIn">
        <header className="home-header">
          <h1 className="home-brand">Da Vincix Code Labs</h1>
          <p className="home-tagline">
            Crafting modern software experiences
          </p>
        </header>

        <div className="home-glass">
          <div className="home-text animate__animated animate__fadeInUp">
            <h2 className="home-title">
              Revolutionize Your <span>Software Experience</span>
            </h2>

            <p className="home-description">
              Adéntrate en el futuro de la tecnología con soluciones de software
              elegantes, rápidas y escalables. Diseñamos experiencias que
              convierten tu negocio en un referente digital.
            </p>

            <div className="home-actions">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="home-image animate__animated animate__fadeInRight">
            <img src={AssetHome} alt="Digital Innovation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
