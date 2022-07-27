import "../styles/Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="main-footer">
      <address className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2203832176947!2d-35.88306198464042!3d-7.215683472851996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e52cf3b0aaf%3A0x955681d84ea2076!2sR.%20Jan%C3%BAncio%20Ferreira%2C%20600%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058400-198!5e0!3m2!1spt-BR!2sbr!4v1658941000062!5m2!1spt-BR!2sbr"
        ></iframe>
      </address>
      <div className="copyright">
        <div className="container">
          <div>© {year} - autoRÉGIS.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
