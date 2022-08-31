import "../styles/MainAbout.scss";

const MainAbout = () => {
  return (
    <section className="main-about">
      <div className="container">
        <h2 className="title">Novo conceito em comércio de veículos</h2>
        <p className="main-text">
          A autoREGIS proporciona a melhor experiência possível na aquisição do
          seu novo veículo. Com agilidade, praticidade e transparência você irá
          adquirir seu novo veículo de forma on-line ou presencial.
        </p>
        <a href="/empresa">
          <button type="button">Saiba mais</button>
        </a>
      </div>
    </section>
  );
};

export default MainAbout;
