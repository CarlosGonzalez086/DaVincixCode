import "./Footer.css";

const HomeSocial = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-brand">
          <h3>Da Vincix Code Labs</h3>
          <p>Designing software. Empowering ideas.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>📧</span>
              <a href="mailto:jcarlosgonzalez086@gmail.com">
                jcarlosgonzalez086@gmail.com
              </a>
            </li>
            <li>
              <span>📞</span>
              <a href="tel:+523124181599">+52 312 418 1599</a>
            </li>
            <li>
              <span>📍</span>
              Colima, México
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DaVincixCode. All rights reserved.
      </div>
    </footer>
  );
};

export default HomeSocial;
