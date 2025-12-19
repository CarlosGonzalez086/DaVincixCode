import "./Footer.css";

const HomeSocial = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📧 jcarlosgonzalez086@gmail.com</p>
          <p>📞 +52 312-418-1599</p>
          <p>📍 Colima,México.</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Da VincixCode. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default HomeSocial;
