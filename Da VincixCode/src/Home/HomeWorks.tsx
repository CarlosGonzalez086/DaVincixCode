import "./HomeWorks.css";

const works = [
  {
    title: "ADLocal Comercios",
    subtitle: "Plataforma de suscripciones para negocios locales",
    description:
      "ADLocal Comercios es una plataforma digital diseñada para ayudar a negocios locales a crear y gestionar su presencia en línea. Permite publicar productos, administrar catálogos públicos, personalizar colores, visualizar estadísticas básicas y escalar funcionalidades mediante planes flexibles.",
    tags: ["SaaS", "Suscripciones", "Negocios locales", "Web App"],
    logo:
      "https://uzgnfwbztoizcctyfdiv.supabase.co/storage/v1/object/public/Imagenes/WhatsApp%20Image%202025-12-23%20at%2021.19.26.jpeg",
    link: "https://www.adlocal.store",
  },
];

const HomeWorks = () => {
  return (
    <section className="works-bg">
      <div className="works-wrapper">
        <header className="works-header">
          <h1>Our Work</h1>
          <p>Proyectos reales. Soluciones funcionales.</p>
        </header>

        <div className="works-grid">
          {works.map((work, index) => (
            <article key={index} className="work-card">
              {/* Logo clickeable */}
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-logo"
                title={`Visitar ${work.title}`}
              >
                <img src={work.logo} alt={`${work.title} logo`} />
              </a>

              <h3>{work.title}</h3>
              <span className="work-subtitle">{work.subtitle}</span>

              <p className="work-description">{work.description}</p>

              <div className="work-tags">
                {work.tags.map((tag, i) => (
                  <span key={i} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
