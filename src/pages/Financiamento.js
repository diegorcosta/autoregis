import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import setTitle from "../components/SetTitle";

import "../styles/Page.scss";

const Financiamento = () => {
  setTitle("Financiamento - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Financiamento" />
      <section className="page">
        <div className="container">
          <div className="financiamento">
            <p>
              Pensou em financiar? Preencha o formulário abaixo com seus dados e
              nós entraremos em contato com você!
            </p>
            <form>
              <h3>Dados Pessoais</h3>
              <label for="name">
                Nome completo <span>(campo obrigatório)</span>
              </label>
              <input type="name" name="name" required />
              <label for="email">
                E-mail <span>(campo obrigatório)</span>
              </label>
              <input type="email" name="email" required />
              <div className="flex-items">
                <div className="item">
                  <label for="cpf">
                    CPF <span>(campo obrigatório)</span>
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                    required
                  />
                </div>
                <div className="item">
                  <label for="date">
                    Data de nascimento <span>(campo obrigatório)</span>
                  </label>
                  <input type="date" name="date" required />
                </div>
              </div>
              <h3>Formas de financiamento</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="financing-entry">
                    Entrada <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-entry" required />
                </div>
                <div className="item">
                  <label for="financing-value">
                    Valor a financiar <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-value" required />
                </div>
              </div>
              <label for="financing-quota">
                Parcelas <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="72x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="6x">6x</label>
                </div>
                <div className="radio">
                  <input
                    id="12x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="12x">12x</label>
                </div>
                <div className="radio">
                  <input
                    id="24x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="24x">24x</label>
                </div>
                <div className="radio">
                  <input
                    id="48x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="48x">48x</label>
                </div>
                <div className="radio">
                  <input
                    id="60x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="60x">60x</label>
                </div>
              </div>
              <button type="submit" name="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Financiamento;
