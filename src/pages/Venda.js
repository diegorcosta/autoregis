import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import "../styles/Page.scss";

const Empresa = () => {
  setTitle("Venda - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Venda" />
      <section className="page">
        <div className="container">
          <div className="venda">
            <p>
              Deseja vender seu veículo? Insira os dados no formulário abaixo e
              nós te ajudaremos!
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
                  <label for="tel">
                    Telefone <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="tel" required />
                </div>
                <div className="item">
                  <label for="cell">
                    Celular <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="cell" required />
                </div>
              </div>
              <h3>Dados do veículo</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="brand">
                    Marca <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="brand" required />
                </div>
                <div className="item">
                  <label for="model">
                    Modelo <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="model" required />
                </div>
                <div className="item">
                  <label for="version">
                    Versão <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="version" required />
                </div>
                <div className="item">
                  <label for="color">
                    Cor <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="color" required />
                </div>
                <div className="item">
                  <label for="km">
                    Km <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="km" required />
                </div>
                <div className="item">
                  <label for="plate">
                    Placa <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="plate" required />
                </div>
                <div className="item">
                  <label for="year">
                    Ano / Modelo <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="year" required />
                </div>
                <div className="item">
                  <label for="accessories">
                    Acessórios <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="accessories" required />
                </div>
              </div>
              <label for="first-owner">
                Você é o primeiro proprietário? <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="owner-yes"
                    type="radio"
                    name="first-owner"
                    required
                  />
                  <label for="owner-yes">Sim</label>
                </div>
                <div className="radio">
                  <input
                    id="owner-no"
                    type="radio"
                    name="first-owner"
                    required
                  />
                  <label for="owner-no">Não</label>
                </div>
              </div>
              <label for="dirt-stains">
                O estofamento possui manchas? <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="stains-yes"
                    type="radio"
                    name="dirt-stains"
                    required
                  />
                  <label for="stains-yes">Sim</label>
                </div>
                <div className="radio">
                  <input
                    id="stains-no"
                    type="radio"
                    name="dirt-stains"
                    required
                  />
                  <label for="stains-no">Não</label>
                </div>
              </div>
              <label for="insurance">
                O veículo tem seguro? <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="insurance-yes"
                    type="radio"
                    name="insurance"
                    required
                  />
                  <label for="insurance-yes">Sim</label>
                </div>
                <div className="radio">
                  <input
                    id="insurance-no"
                    type="radio"
                    name="insurance"
                    required
                  />
                  <label for="insurance-no">Não</label>
                </div>
              </div>
              <label for="stolen">
                O veículo já foi recuperado de roubo?{" "}
                <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input id="stolen-yes" type="radio" name="stolen" required />
                  <label for="stolen-yes">Sim</label>
                </div>
                <div className="radio">
                  <input id="stolen-no" type="radio" name="stolen" required />
                  <label for="stolen-no">Não</label>
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

export default Empresa;
