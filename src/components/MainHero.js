import WhatsAppButton from "./WhatsAppButton";
import heroCar from "../images/hero-car.png";

import "../styles/MainHero.scss";

const MainHero = () => {
  return (
    <section className="main-hero">
      <div className="first-row">
        <div className="container">
          <div className="hero-text">
            <h1>Qualidade e satisfação</h1>
            <p>
              A melhor solução em compra e venda de veículos novos, seminovos e
              autopeças.
            </p>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="container">
          <div className="first-column">
            <WhatsAppButton
              number="5583999129196"
              title="Veículos"
              showNumber="(83) 9 9912-9196"
            />
            <WhatsAppButton
              number="5583999355058"
              title="Autopeças"
              showNumber="(83) 9 9935-5058"
            />
          </div>
          <div className="second-column">
            <img src={heroCar} alt="Foto de uma BMW G3 Competition" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
