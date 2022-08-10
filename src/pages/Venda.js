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
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Empresa;
