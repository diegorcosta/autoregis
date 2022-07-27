import "../styles/MainAbout.scss";

const MainAbout = () => {
  return (
    <section className="main-about">
      <div className="container">
        <h2 className="title">Mais de 30 anos no mercado</h2>
        <p className="main-text">
          A autoRÉGIS atua no segmento de veículos novos e seminovos desde 1991,
          prezando sempre pela trasparência, honestidade e qualidade no
          atendimento. Temos as melhores opções de compra e venda de veículos e
          autopeças!
        </p>
        <a href="/empresa">
          <button type="button">Saiba mais</button>
        </a>
      </div>
    </section>
  );
};

export default MainAbout;
