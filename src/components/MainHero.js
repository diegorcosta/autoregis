import { BsWhatsapp } from "react-icons/bs";

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
            <a
              href="https://api.whatsapp.com/send?phone=5583999355058"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">
                <BsWhatsapp />
                <span>(83) 9 9935-5058</span>
              </button>
            </a>
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
